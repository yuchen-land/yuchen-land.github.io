// src/data/resumeData.js

const resumeData = {
    profile: {
        name: "劉宇蓁",
        englishName: "Liu, Yu-Chen(Cindy)",
        title: "Software Engineer",
        photo: "/profile.jpg",
        bio: "Energetic and curious software engineer who loves learning new things, tackling challenges, and building products that make life easier. I thrive in dynamic teams, enjoy turning ideas into reality, and am always ready to bring positive energy and fresh perspectives to every project!",
        socialLinks: [
            { name: "LinkedIn", url: "http://linkedin.com/in/yuchenliu0401/", icon: "fab fa-linkedin" },
            { name: "GitHub", url: "https://github.com/yuchen-land", icon: "fab fa-github" },
            { name: "Email", url: "mailto:yuchen880401@gmail.com", icon: "fas fa-envelope" },
            { name: "Website", url: "https://yuchen-land.github.io", icon: "fas fa-globe" }

        ]
    },
    experience: [
        {
            id: 1,
            company: "CyberLink",
            companyLogo: "/company-logos/cyberlink.png",
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
            companyLogo: "/company-logos/moxa.png",
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
            companyLogo: "/company-logos/ROC_National_Center_for_High-Performance_Computing_logo.svg.png",
            position: "Research Assistant",
            period: "05/2023 - 02/2024",
            description: [
            ]
        },
        {
            id: 4,
            company: "National Central University",
            companyLogo: "/company-logos/NCULogo.svg.png",
            position: "Web Programming Course Teaching Assistant",
            period: "03/2023 - 06/2023",
            description: [
            ]
        },
        {
            id: 5,
            company: "CAI-YO ENTERPRISE CO., LTD",
            companyLogo: "/company-logos/CAI-YO.png",
            position: "Front-End Developer Intern",
            period: "03/2020 - 09/2021",
            description: [
            ]
        }
    ],
    education: [
        {
            id: 0,
            school: "National Cheng Kung University",
            department: "Department of Electrical Engineering",
            degree: "Ph.D. (On Leave)",
            period: "09/2024 - now",
            icon: "/company-logos/NCKU.png",
            details: ""
        },
        {
            id: 1,
            school: "National Central University",
            department: "Information Management",
            degree: "Master's Degree",
            period: "09/2022 - 07/2024",
            icon: "/company-logos/NCULogo.svg.png",
            details: [
                "Lab : Internet Technology Lab ,  Thesis Advisor : Pang-Wei Tsai, NCKU, EE ; Chen, Yi-Cheng, NCU IM",
            ]
        },
        {
            id: 2,
            school: "National Taiwan Normal University",
            department: "Technology Application and Human Resource Development",
            degree: "Bachelor's Degree",
            period: "09/2018 - 07/2022",
            icon: "/company-logos/NTNU.png",
            details: "Lab : Mobile Network Lab ,  Thesis Advisor : Fan-Hsun Tseng, NCKU , CSIE"
        },
        {
            id: 3,
            school: "Taipei Municipal Zhong Shan Girls High School",
            department: "",
            degree: "High School",
            period: "09/2014 - 06/2017",
            icon: "/company-logos/ZSGH.png",
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
            id: "renting-system",
            name: "Software Engineering, Renting system",
            category: "前端開發",
            shortDescription: [
                "Built a rental system with manager backend and customer frontend using Agile.",
                "Led a team to deliver the project in 1.5 months (vs. 6 months typical).",
                "System integration improved transaction efficiency by 60% and reduced manual work/costs."
            ],
            fullDescription: [
                "現代化租賃系統，支援管理端與客戶端，敏捷開發快速交付，顯著提升效率並降低成本。"
            ],
            technologies: [
                "Next.js", "React", "Javascript", "Python", "UML Diagram", "Team Lead"
            ],
            githubLink: "https://github.com/yourusername/my-resume-app",
            demoLink: "https://yourusername.github.io/my-resume-app"
        },
        {
            id: "linux-serial-port-tool",
            name: "Linux Serial Port Burning Test Tool",
            category: "Embedded System / Testing Tool",
            shortDescription: [
                "Python tool with pyserial for serial port throughput and accuracy testing.",
                "Modular design, efficient testing, and user-friendly interface."
            ],
            fullDescription: "這個專案開發了一個高效、易用的 Linux 串口燒錄測試工具，支援模組化架構與自動化測試流程。",
            technologies: [
                "Python", "Linux", "UML Diagram", "Arm", "x86", "Embedded"
            ],
            githubLink: "https://github.com/yourusername/recipe-platform-repo",
            demoLink: "#"
        },
        {
            id: "task-manager",
            name: "Clchemy : App for Learning C++ Programming Language",
            category: "前端小工具",
            shortDescription: [
                "Developed a bilingual C++ card game app for upper elementary students, in partnership with the Ministry of Education.",
                "Led UI/UX and interface scripting (70% contribution).",
                "Gamified learning improved programming efficiency by 80%."
            ],
            fullDescription: "合作開發雙語 C++ 桌遊學習 App，聚焦 UI/UX 與介面腳本設計，顯著提升學習成效。",
            technologies: [
                "C++", "C#", "Unity", "3ds Max", "Photoshop", "Illustrator", "Team Lead"
            ],
            githubLink: "https://github.com/yourusername/react-task-manager",
            demoLink: "#"
        }
    ],
    skills: [
        {
            category: "Programming",
            content: "C, C++, Python, React, Javascript, HTML, CSS"
        },
        {
            category: "Software Engineering",
            content: "C, C++, Python, React, Javascript, HTML, CSS"
        },
        {
            category: "Software",
            content: "Autodesk 3ds Max, Unity, Adobe Photoshop, Illustrator, InDesign, Figma"
        }
    ]
};

export default resumeData;