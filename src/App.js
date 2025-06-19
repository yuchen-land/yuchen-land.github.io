// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectDetail from './components/ProjectDetail';
import NotFoundPage from './pages/NotFoundPage';
import resumeData from './data/resumeData';
import './App.css'; // 引入樣式

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}> {/* IMPORTANT: for GitHub Pages routing */}
      <div className="App">
        {/* 可以放一個固定的導航欄或頁腳，如果需要的話 */}
        {/* <nav>
          <Link to="/">首頁</Link>
          <Link to="/resume">我的履歷</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<HomePage data={resumeData.profile} />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} /> {/* 專案詳細頁路由 */}
          <Route path="*" element={<NotFoundPage />} /> {/* 任何未匹配的路徑 */}
        </Routes>

        {/* 固定的頁腳 */}
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} 你的姓名. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;