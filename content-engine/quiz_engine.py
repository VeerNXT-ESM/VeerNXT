#!/usr/bin/env python3
"""
Simple Quiz Engine - Web UI for testing document conversions
Loads quiz data from JSON files and provides interactive quiz interface
"""

from flask import Flask, render_template, jsonify, request
import json
from pathlib import Path
import os

app = Flask(__name__)

# Configuration
BASE_DIR = Path(__file__).parent
JSON_FILE = BASE_DIR / "test_supabase.json"

# Store quiz data globally
quiz_data = None


def load_quiz_data():
    """Load quiz data from JSON file"""
    global quiz_data
    
    if not JSON_FILE.exists():
        return {"error": f"Quiz file not found: {JSON_FILE}"}
    
    try:
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Extract questions from Supabase format
        quiz_data = {
            "quiz": data.get("quiz", {}),
            "questions": data.get("questions", []),
            "metadata": data.get("metadata", {})
        }
        return quiz_data
    except json.JSONDecodeError as e:
        return {"error": f"Invalid JSON: {str(e)}"}
    except Exception as e:
        return {"error": f"Error loading quiz: {str(e)}"}


@app.route('/')
def index():
    """Serve the quiz UI"""
    return render_template('quiz.html')


@app.route('/api/quiz/load')
def get_quiz():
    """API endpoint to get quiz data"""
    if quiz_data is None:
        result = load_quiz_data()
        if "error" in result:
            return jsonify(result), 500
    
    return jsonify({
        "quiz": quiz_data["quiz"],
        "questions": [
            {
                "id": q.get("question_number"),
                "text": q.get("question_text"),
                "options": json.loads(q.get("options", "{}")) if isinstance(q.get("options"), str) else q.get("options"),
                "correctAnswer": q.get("correct_answer")
            }
            for q in quiz_data["questions"]
        ],
        "metadata": quiz_data["metadata"]
    })


@app.route('/api/quiz/check-answer', methods=['POST'])
def check_answer():
    """Validate an answer"""
    data = request.json
    question_id = data.get("questionId")
    user_answer = data.get("userAnswer")
    
    if quiz_data is None or not quiz_data["questions"]:
        return jsonify({"error": "Quiz not loaded"}), 500
    
    # Find the question
    question = next((q for q in quiz_data["questions"] 
                    if q.get("question_number") == question_id), None)
    
    if not question:
        return jsonify({"error": "Question not found"}), 404
    
    correct_answer = question.get("correct_answer")
    is_correct = user_answer == correct_answer
    
    return jsonify({
        "isCorrect": is_correct,
        "correctAnswer": correct_answer,
        "userAnswer": user_answer
    })


@app.route('/api/quiz/stats')
def get_stats():
    """Get quiz statistics"""
    if quiz_data is None:
        return jsonify({"error": "Quiz not loaded"}), 500
    
    total_questions = len(quiz_data["questions"])
    questions_with_answers = sum(1 for q in quiz_data["questions"] 
                                 if q.get("correct_answer"))
    
    return jsonify({
        "totalQuestions": total_questions,
        "questionsWithAnswers": questions_with_answers,
        "quizTitle": quiz_data["quiz"].get("title", "Quiz"),
        "sourceFile": quiz_data["quiz"].get("source_file", ""),
        "createdAt": quiz_data["quiz"].get("created_at", "")
    })


if __name__ == '__main__':
    # Load quiz data on startup
    result = load_quiz_data()
    if "error" in result:
        print(f"Warning: {result['error']}")
    else:
        print(f"✓ Loaded {len(quiz_data['questions'])} questions")
    
    print("Starting Quiz Engine at http://localhost:5000")
    app.run(debug=True, port=5000)
