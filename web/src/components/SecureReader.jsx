import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft } from 'lucide-react';

const SecureReader = () => {
  const { id } = useParams();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      const { data } = await supabase
        .from('resources')
        .select('*')
        .eq('id', id)
        .single();
      
      setResource(data);
      setLoading(false);
    };

    fetchResource();

    // Prevent context menu (right click) to add friction against copying
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, [id]);

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading document...</div>;
  if (!resource) return <div style={{ padding: '2rem', textAlign: 'center' }}>Document not found.</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/learning-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Back to Library
      </Link>
      
      <div className="glass-panel" style={{ padding: '3rem', userSelect: 'none' }}>
        <h1 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{resource.title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
          {resource.subject} • {resource.category}
        </p>

        <div 
          className="reader-content"
          style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}
          dangerouslySetInnerHTML={{ __html: resource.body_html || '<p>Content parsing pending. Source file securely stored.</p>' }} 
        />
      </div>
    </div>
  );
};

export default SecureReader;
