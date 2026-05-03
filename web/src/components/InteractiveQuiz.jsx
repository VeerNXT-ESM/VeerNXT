import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';

const InteractiveQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      const { data: quizData } = await supabase.from('quizzes').select('*').eq('id', id).single();
      const { data: questionsData } = await supabase.from('questions').select('*').eq('quiz_id', id).order('question_number');
      
      setQuiz(quizData);
      setQuestions(questionsData || []);
    };
    fetchQuiz();
  }, [id]);

  const handleSelectOption = (questionId, optionKey) => {
    if (submitted) return;
    setAnswers({ ...answers, [questionId]: optionKey });
  };

  const handleSubmit = async () => {
    let calculatedScore = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct_answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);

    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      await supabase.from('quiz_attempts').insert({
        user_id: session.user.id,
        quiz_id: id,
        quiz_title: quiz.title,
        total_questions: questions.length,
        answered_questions: Object.keys(answers).length,
        correct_answers: calculatedScore,
        score_percent: (calculatedScore / questions.length) * 100,
        answers: answers,
        completed_at: new Date().toISOString()
      });
    }
  };

  if (!quiz) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading quiz...</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/learning-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Back to Library
      </Link>
      
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <h1 style={{ color: 'var(--accent-green)', marginBottom: '0.5rem' }}>{quiz.title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>

        {questions.length > 0 && !submitted && (
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              {questions[currentQuestionIndex].question_text}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {Object.entries(questions[currentQuestionIndex].options || {}).map(([key, value]) => (
                <div 
                  key={key}
                  onClick={() => handleSelectOption(questions[currentQuestionIndex].id, key)}
                  style={{
                    padding: '1rem',
                    border: answers[questions[currentQuestionIndex].id] === key ? '2px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    background: answers[questions[currentQuestionIndex].id] === key ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ fontWeight: 'bold', marginRight: '1rem', color: 'var(--text-secondary)' }}>{key}.</span>
                  {value}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button 
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="glass-panel"
                style={{ padding: '0.75rem 1.5rem', cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer', border: 'none', opacity: currentQuestionIndex === 0 ? 0.5 : 1 }}
              >
                Previous
              </button>
              
              {currentQuestionIndex === questions.length - 1 ? (
                <button onClick={handleSubmit} className="btn-primary">
                  Submit Quiz
                </button>
              ) : (
                <button 
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                  className="btn-primary"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}

        {submitted && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              You scored {score} out of {questions.length}
            </h2>
            <div style={{ marginBottom: '2rem', fontSize: '1.2rem', color: (score / questions.length) > 0.7 ? 'var(--accent-green)' : 'var(--accent-gold)' }}>
              {((score / questions.length) * 100).toFixed(0)}% Match
            </div>

            <div style={{ textAlign: 'left', marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Review Answers</h3>
              {questions.map((q, idx) => {
                const isCorrect = answers[q.id] === q.correct_answer;
                return (
                  <div key={q.id} style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.3)', borderRadius: '8px' }}>
                    <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{idx + 1}. {q.question_text}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isCorrect ? 'var(--accent-green)' : 'red', marginBottom: '0.5rem' }}>
                      {isCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
                      <span>Your Answer: {answers[q.id] || 'Skipped'}</span>
                    </div>
                    {!isCorrect && (
                      <div style={{ color: 'var(--text-secondary)' }}>
                        <strong>Correct Answer:</strong> {q.correct_answer}. {q.options[q.correct_answer]}
                      </div>
                    )}
                    {q.explanation && (
                      <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <em>Explanation:</em> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button onClick={() => navigate('/learning-center')} className="btn-primary" style={{ marginTop: '2rem' }}>
              Return to Library
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveQuiz;
