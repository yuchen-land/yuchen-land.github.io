// src/data/resumeData.js

const resumeData = {
    profile: {
        name: "劉宇蓁",
        englishName: "Liu, Yu-Chen(Cindy)",
        title: "Software Engineer",
        photo: "/profile.jpg",
        bio: "I am a dedicated and curious learner, constantly exploring new technologies and seeking opportunities to expand my skill set. My problem-solving skills and adaptability further contribute to my ability to tackle complex challenges. With my passion for software development, diverse experiences, and dedication to continuous learning, I am confident that I would be a valuable asset to any team.",
        contact: {
            phone: "+886-912-525-896",
            location: "Taipei, Taiwan"
        },
        socialLinks: [
            { name: "LinkedIn", url: "http://linkedin.com/in/yuchenliu0401/", icon: "fab fa-linkedin" },
            { name: "GitHub", url: "https://github.com/yuchen-land", icon: "fab fa-github" },
            { name: "Email", url: "mailto:yuchen880401@gmail.com", icon: "fas fa-envelope" },
            { name: "Website", url: "https://yourwebsite.com", icon: "fas fa-globe" }

        ]
    },
    experience: [
        {
            id: 1,
            company: "CyberLink",
            position: "Software Engineer",
            period: "10/2024 - now",
            description: [
                "Developing innovative features for MyEdit to improve user experience and functionality.",
                "Managing hotfix deployment and e-bug resolution to maintain seamless application performance.",
            ]
        },
        {
            id: 2,
            company: "MOXA",
            position: "Software Quality Assurance Intern",
            period: "07/2023 - 08/2023",
            description: [
                "Developed automated test tool using Python for Linux Serial Port Burning project.",
                "Conducted system test for Industrial PC projects involving Win10 image, Win10, and Win11.",
            ]
        },
        {
            id: 3,
            company: "National Center for High-Performance Computing",
            position: "Research Assistant",
            period: "05/2023 - 02/2024",
            description: [
                "xxxxx",
            ]
        },
        {
            id: 4,
            company: "National Central University",
            position: "Web Programming Course Teaching Assistant",
            period: "03/2023 - 06/2023",
            description: [
                "xxx.",
            ]
        },
        {
            id: 5,
            company: "CAI-YO ENTERPRISE CO., LTD",
            position: "Front-End Developer Intern",
            period: "03/2020 - 09/2021",
            description: [
                "xxx",
            ]
        }
    ],
    education: [
        {
            id: 1,
            school: "National Central University, Information Management ",
            degree: "Master's Degree",
            period: "09/2022 - 07/2024",
            details: [
                "Lab : Internet Technology Lab ,  Thesis Advisor : Pang-Wei Tsai, NCKU, EE ; Chen, Yi-Cheng, NCU IM",
            ]
        },
        {
            id: 2,
            school: "National Taiwan Normal University, Technology Application and Human Resource Development",
            degree: "Bachelor's Degree",
            period: "09/2018 - 07/2022",
            details: "Lab : Mobile Network Lab ,  Thesis Advisor : Fan-Hsun Tseng, NCKU , CSIE"
        },
        {
            id: 3,
            school: "Taipei Municipal Zhong Shan Girls High School",
            degree: "High School",
            period: "09/2014 - 06/2017",
            details: ""
        },
    ],
    honorsAwards: [
        { id: 1, name: "全國大專院校軟體設計競賽 佳作獎", date: "2021年" },
        { id: 2, name: "TOEIC 900 分", date: "2023年" },
        { id: 3, name: "程式設計認證 (OCPJP)", date: "2022年" }
    ],
    additionalInformation: [
        { id: 1, title: "語言", content: "中文 (母語), 英文 (流利)" },
        { id: 2, title: "興趣", content: "閱讀、健身、登山、烹飪" },
        { id: 3, title: "個人特質", content: "積極主動、學習能力強、具備良好的團隊合作精神" }
    ],
    projects: [
        {
            id: "portfolio-website", // 用於路由的唯一ID
            name: "個人作品集網站",
            category: "前端開發",
            date: "2024年3月",
            shortDescription: "一個展示個人專案與技能的響應式網站。",
            fullDescription: "此專案旨在建立一個現代化、響應式的個人作品集網站，用於展示我的開發技能、專案經驗與教育背景。網站採用 React.js 框架開發，並利用 SCSS 進行樣式管理，確保設計靈活且易於維護。主要功能包括分區顯示履歷內容、專案詳情頁面，以及方便的聯絡方式。",
            technologies: ["React.js", "SCSS", "Vite", "React Router"],
            githubLink: "https://github.com/yourusername/my-resume-app",
            demoLink: "https://yourusername.github.io/my-resume-app"
        },
        {
            id: "recipe-platform",
            name: "線上食譜分享平台",
            category: "全端開發",
            date: "2023年7月 - 2023年12月",
            shortDescription: "一個允許使用者分享、搜尋和收藏食譜的平台。",
            fullDescription: "這個全端專案開發了一個線上食譜分享平台。前端使用 Vue.js 配合 Vuex 進行狀態管理，提供直觀的使用者介面；後端則基於 Node.js (Express) 框架，搭配 MongoDB 進行資料儲存。主要功能包括使用者註冊/登入、食譜 CRUD 操作、食譜搜尋與篩選、收藏功能和評論系統。部署於 Heroku。",
            technologies: ["Vue.js", "Vuex", "Node.js", "Express", "MongoDB", "Heroku"],
            githubLink: "https://github.com/yourusername/recipe-platform-repo",
            demoLink: "#" // 或實際連結
        },
        {
            id: "task-manager",
            name: "簡易任務管理應用",
            category: "前端小工具",
            date: "2022年11月",
            shortDescription: "一個基於 React 的簡易任務管理應用，支援任務新增、編輯、刪除和標記完成。",
            fullDescription: "這是一個用於練習 React Hooks 和狀態管理的簡單任務管理應用。使用者可以新增、編輯、刪除任務，並將任務標記為完成。所有資料都儲存在瀏覽器的 localStorage 中，實現數據持久化。介面簡潔，專注於核心功能。",
            technologies: ["React.js", "React Hooks", "Local Storage"],
            githubLink: "https://github.com/yourusername/react-task-manager",
            demoLink: "#" // 或實際連結
        }
    ]
};

export default resumeData;