import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Book, FileText, Lock, PlayCircle, RefreshCw } from 'lucide-react';

const LearningCenter = () => {
  const [resources, setResources] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('resources');

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        const [resData, quizData] = await Promise.all([
          supabase.from('resources').select('*').limit(12),
          supabase.from('quizzes').select('*').limit(12)
        ]);
        
        if (resData.data) setResources(resData.data);
        if (quizData.data) setQuizzes(quizData.data);
      } catch (err) {
        console.error('Error fetching learning content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className="learning-wrapper">
      <div className="learning-content animate-fade-in">
        <div className="learning-hero">
          <div className="page-header">
            <h1 style={{ fontSize: '2.5rem', tracking: '-0.03em', color: 'white' }}>Learning Center</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Master your craft with certified study materials and interactive training.</p>
          </div>
        </div>

        <div className="tab-container">
          <button 
            onClick={() => setActiveTab('resources')}
            className={`tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
          >
            Study Guides
          </button>
          <button 
            onClick={() => setActiveTab('quizzes')}
            className={`tab-btn ${activeTab === 'quizzes' ? 'active' : ''}`}
          >
            Interactive Quizzes
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <RefreshCw className="animate-spin" size={32} color="var(--ios-olive)" />
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Gathering materials...</p>
          </div>
        ) : (
          <div className="content-grid">
            {activeTab === 'resources' && resources.map(res => (
              <div key={res.id} className="ios-card content-card">
                <div className="card-top-icon">
                  <Book size={20} color="var(--ios-olive)" />
                  {res.is_locked && <Lock size={14} color="#ccc" />}
                </div>
                <div className="card-body">
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{res.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{res.subject} • {res.category}</p>
                </div>
                <Link to={`/reader/${res.id}`} className="btn-primary ios-pill" style={{ textDecoration: 'none', textAlign: 'center', fontSize: '0.85rem' }}>
                  Read Now
                </Link>
              </div>
            ))}

            {activeTab === 'quizzes' && quizzes.map(quiz => (
              <div key={quiz.id} className="ios-card content-card">
                <div className="card-top-icon">
                  <PlayCircle size={20} color="var(--ios-olive)" />
                  {quiz.is_locked && <Lock size={14} color="#ccc" />}
                </div>
                <div className="card-body">
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{quiz.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{quiz.total_questions} Questions • {quiz.subject}</p>
                </div>
                <Link to={`/quiz/${quiz.id}`} className="btn-primary ios-pill" style={{ textDecoration: 'none', textAlign: 'center', fontSize: '0.85rem' }}>
                  Start Quiz
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .learning-hero {
          margin-bottom: 3rem;
          background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero/hero_image.png");
          background-size: cover;
          background-position: center;
          padding: 4rem 3rem;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .learning-wrapper {
          padding: 3rem 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .page-header {
          position: relative;
          z-index: 2;
        }
        .tab-container {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          background: var(--ios-secondary);
          padding: 0.5rem;
          border-radius: 16px;
          width: fit-content;
        }
        .tab-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 12px;
          border: none;
          background: transparent;
          font-weight: 700;
          font-family: "Quicksand", sans-serif;
          cursor: pointer;
          color: #888;
          transition: all 0.2s;
        }
        .tab-btn.active {
          background: white;
          color: var(--ios-olive);
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .content-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          transition: transform 0.2s;
        }
        .content-card:hover {
          transform: translateY(-5px);
        }
        .card-top-icon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .card-body {
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default LearningCenter;
