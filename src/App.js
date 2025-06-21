// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectDetail from './components/ProjectDetail';
import NotFoundPage from './pages/NotFoundPage';
import resumeData from './data/resumeData';
import './App.css'; // 引入樣式
import Navbar from './components/Navbar';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}> {/* IMPORTANT: for GitHub Pages routing */}
      <div className="App">
        <Navbar />
        {/* 可以放一個固定的導航欄或頁腳，如果需要的話 */}
        {/* <nav>
          <Link to="/">首頁</Link>
          <Link to="/resume">我的履歷</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<ResumePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} /> {/* 專案詳細頁路由 */}
          <Route path="*" element={<NotFoundPage />} /> {/* 任何未匹配的路徑 */}
        </Routes>

        {/* 固定的頁腳 */}
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Cindy Liu | Designed & coded by Cindy Liu. | Contact: yuchen880401@gmail.com</p>
          </div>
        </footer>
        {showTopBtn && (
          <button className="back-to-top-fab" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Back to top">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="14" fill="#e78e9e" />
              <path d="M14 20V8M14 8L9 13M14 8L19 13" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;