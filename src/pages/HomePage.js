// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
// 注意：這裡不需引入任何 CSS 檔案，因為 App.css 會全局應用

function HomePage({ data }) {
    return (
        <div className="home-page"> {/* 使用 App.css 中的 .home-page 類別 */}
            <header className="home-header"> {/* 使用 App.css 中的 .home-header 類別 */}
                <img
                    src={data.photo}
                    alt={data.name}
                    className="home-profile-photo" // 使用 App.css 中的 .home-profile-photo 類別
                />
                {/*
          這裡的 h1 和 p 預期會被 App.css 中類似
          .home-header h1 或 .home-header p 的規則影響。
          如果沒有這些規則，或者你想針對它們更具體地設定樣式，
          可能需要在 App.css 中添加它們，或者考慮給它們加上 class 名稱。
        */}
                <h1>{data.name}</h1>
                <p>{data.title}</p>
                <Link
                    to="/resume"
                    className="btn btn-primary-lg" // 使用 App.css 中的 .btn-primary-lg 類別
                >
                    View My Resume
                </Link>
                <div className="home-social-links"> {/* 使用 App.css 中的 .home-social-links 類別 */}
                    {data.socialLinks && data.socialLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.name}
                            className="home-social-links a" // 確保 App.css 有針對 .home-social-links a 的樣式
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default HomePage;