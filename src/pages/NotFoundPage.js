// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <div className="container">
                <h1>404 - 頁面未找到</h1>
                <p>抱歉，您請求的頁面不存在。</p>
                <Link to="/" className="btn btn-primary-lg">返回首頁</Link>
            </div>
        </div>
    );
}

export default NotFoundPage;