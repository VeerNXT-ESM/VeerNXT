import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { BookOpen, Award, Target, ExternalLink, ShieldCheck, MapPin, Briefcase, RefreshCw } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        if (data) {
          setProfile(data);
        }
        if (error) {
          console.error('Error fetching profile:', error);
        }
      } else {
        navigate('/login');
      }
      setLoading(false);
    };
    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--ios-bg)' }}>
        <div style={{ textAlign: 'center' }}>
          <RefreshCw className="animate-spin" size={32} color="var(--ios-olive)" />
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (profile && !profile.profiling_completed) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)', padding: '2rem' }}>
        <div className="ios-card animate-fade-in" style={{ maxWidth: '500px', textAlign: 'center' }}>
          <ShieldCheck size={64} color="var(--ios-olive)" style={{ marginBottom: '1.5rem', opacity: 0.2 }} />
          <h2 style={{ fontSize: '1.5rem' }}>Complete Your Profile</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>We need a few details to calculate your Veer Score and find the best exam matches for you.</p>
          <Link to="/profiling" className="btn-primary ios-pill" style={{ textDecoration: 'none', display: 'inline-block' }}>Start Profiling</Link>
        </div>
      </div>
    );
  }

  const recommendations = profile?.recommendations || [];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content animate-fade-in">
        <div className="welcome-hero animate-fade-in">
          <div className="welcome-content">
            <h1 style={{ fontSize: '2.5rem', tracking: '-0.03em', color: 'white' }}>Hello, {profile?.full_name?.split(' ')[0] || 'Agniveer'}</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Here are your top career recommendations based on your military profile.</p>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Veer Score Card */}
          <div className="ios-card score-card">
            <div className="card-top">
              <Award size={24} color="var(--ios-olive)" />
              <span className="font-cta" style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--ios-olive)' }}>VEER SCORE</span>
            </div>
            <div className="score-display">
              {profile?.veer_score ? Math.round(profile.veer_score) : '—'}
            </div>
            <p className="card-desc">Your overall readiness score calculated from service history, skills, and physical standards.</p>
          </div>

          {/* Learning Center CTA */}
          <div className="ios-card library-card">
            <div className="card-top">
              <BookOpen size={24} color="var(--ios-olive)" />
              <span className="font-cta" style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--ios-olive)' }}>LEARNING CENTER</span>
            </div>
            <p className="card-desc" style={{ marginBottom: '1.5rem' }}>
              Access curated textbooks, practice papers, and secure readers for your targeted exams.
            </p>
            <Link to="/learning-center" className="btn-primary ios-pill" style={{ textDecoration: 'none', textAlign: 'center', fontSize: '0.9rem' }}>
              Enter Library
            </Link>
          </div>

          {/* Matches Section */}
          <div className="ios-card matches-card">
            <div className="card-top" style={{ marginBottom: '2rem' }}>
              <Target size={24} color="var(--ios-olive)" />
              <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Top Exam Matches</h2>
            </div>
            
            {recommendations.length > 0 ? (
              <div className="recommendations-list">
                {recommendations.slice(0, 5).map((rec, idx) => (
                  <div key={idx} className="recommendation-item">
                    <div className="rec-rank">{idx + 1}</div>
                    <div className="rec-info">
                      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>{rec.exam_name}</h3>
                      <div className="rec-meta">
                        <span><Briefcase size={14} /> {rec.career_track}</span>
                        {rec.state_ut && <span><MapPin size={14} /> {rec.state_ut}</span>}
                      </div>
                    </div>
                    <div className="rec-score-section">
                      <div className="score-bar-bg">
                        <div className="score-bar-fill" style={{ width: `${rec.match_score}%` }}></div>
                      </div>
                      <span className="score-text">{Math.round(rec.match_score)}% Match</span>
                    </div>
                    <a href={rec.website} target="_blank" rel="noopener noreferrer" className="rec-link">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-matches">
                <p>No matches found yet.</p>
                <Link to="/profiling" className="btn-primary ios-pill" style={{ textDecoration: 'none' }}>Update Profile</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dashboard-wrapper {
          padding: 3rem 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .welcome-hero {
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
        .welcome-content {
          position: relative;
          z-index: 2;
        }
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .card-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .score-card .score-display {
          font-size: 5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1;
          margin-bottom: 1rem;
          color: var(--ios-olive);
        }
        .card-desc {
          color: #777;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .library-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .matches-card {
          grid-column: span 2;
        }
        .recommendations-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .recommendation-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem;
          background: var(--ios-secondary);
          border-radius: 16px;
          transition: transform 0.2s;
        }
        .recommendation-item:hover {
          transform: scale(1.01);
        }
        .rec-rank {
          width: 32px;
          height: 32px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: var(--ios-olive);
          font-size: 0.9rem;
        }
        .rec-info {
          flex: 1;
        }
        .rec-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.75rem;
          color: #888;
        }
        .rec-meta span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .rec-score-section {
          width: 140px;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .score-bar-bg {
          height: 6px;
          background: rgba(0,0,0,0.05);
          border-radius: 3px;
          overflow: hidden;
        }
        .score-bar-fill {
          height: 100%;
          background: var(--ios-olive);
          border-radius: 3px;
        }
        .score-text {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--ios-olive);
          text-align: right;
        }
        .rec-link {
          color: #ccc;
          transition: color 0.2s;
        }
        .rec-link:hover {
          color: var(--ios-olive);
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 850px) {
          .dashboard-grid { grid-template-columns: 1fr; }
          .matches-card { grid-column: auto; }
          .recommendation-item { flex-wrap: wrap; gap: 0.75rem; }
          .rec-score-section { width: 100%; order: 3; }
        }
      `}} />
    </div>
  );
};

export default Dashboard;
