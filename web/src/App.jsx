import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AuthGuard from './components/AuthGuard';
import Header from './components/Header';
import Login from './pages/Login';
import AuthCallback from './pages/AuthCallback';
import Profiling from './pages/Profiling';
import Dashboard from './pages/Dashboard';
import LearningCenter from './pages/LearningCenter';
import SecureReader from './components/SecureReader';
import InteractiveQuiz from './components/InteractiveQuiz';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        
        {/* Protected Routes with Global Header */}
        <Route element={<Layout />}>
          <Route path="/profiling" element={
            <AuthGuard>
              <Profiling />
            </AuthGuard>
          } />
          
          <Route path="/dashboard" element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          } />
          
          <Route path="/learning-center" element={
            <AuthGuard>
              <LearningCenter />
            </AuthGuard>
          } />

          <Route path="/reader/:id" element={
            <AuthGuard>
              <SecureReader />
            </AuthGuard>
          } />

          <Route path="/quiz/:id" element={
            <AuthGuard>
              <InteractiveQuiz />
            </AuthGuard>
          } />
        </Route>

        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

// Layout wrapper for pages that need the Header
const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
