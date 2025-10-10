// Personal Information
export const personalInfo = {
  name: "Yu-Chen(Cindy), Liu",
  title: "Software Engineer & Pâtissier",
  description: "Hey! I'm Cindy. Welcome to my creative space!\nExplore my projects and the brand I built here.",
  avatar: "/images/avatar.jpg",
  email: "yuchen880401@gmail.com",
  location: "Taipei, Taiwan",
};

// Social Links
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yuchen-land",
    icon: "github",
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yuchenliu0401/",
    icon: "linkedin",
    color: "from-blue-600 to-blue-800",
  },
];

// Internal Page Links
export const internalLinks = [
  {
    name: "About",
    path: "/about",
    icon: "user",
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: "briefcase",
    color: "from-violet-500 to-purple-600",
  },
];

// Education
export const education = [
  {
    school: "National Cheng Kung University",
    degree: "Ph.D. in Electrical Engineering",
    period: "09/2024 - On Leave",
    level: "phd",
    description: [
      "Scholarship: NSTC Doctoral Research Scholarship",
    ],
    links: {
      scholarship: "https://www.nstc.gov.tw/sci/ch/detail/13b9f964-9623-4681-b53c-833c3e136e97",
    },
  },
  {
    school: "National Central University",
    degree: "Master of Information Management",
    period: "09/2022 - 07/2024",
    level: "master",
    description: [
      "Advisor: Prof. Pang-Wei Tsai, NCKU, EE ",
      "Thesis: Design and Implementation of an Adaptive Path Selection Method in SDN-based SRv6",
    ],
    links: {
      advisor: "https://www.itlab.ee.ncku.edu.tw/pwtsai/index.html",
    },
  },
  {
    school: "National Taiwan Normal University",
    degree: "Bachelor of Technology Application and Human Resource Development",
    period: "09/2018 - 07/2022",
    level: "bachelor",
    description: [
      "Advisor: Prof. Fan-Hsun Tseng, NCKU , CSIE ",
    ],
    links: {
      advisor: "https://sites.google.com/site/fanhsuntseng/home",
    },
  },
  {
    school: "Taipei Municipal Zhong Shan Girls High School",
    degree: "High School Diploma",
    period: "09/2014 - 06/2017",
    level: "high-school",
    
  },
];

// Work Experience
export const experience = [
  {
    company: "CyberLink",
    position: "Software Engineer",
    period: "10/2024 - Present",
    description: [
      "Developed and implemented core features for MyEdit image, audio, video projects (e.g., Magic Designer, Podcast Studio, Video Editor, Homepage, SEO) with React, maintaining a strong UI/UX focus for professional performance and smooth user experience.",
      "Integrated GA and multi-source data, reducing marketing analysis time by 86% and discrepancies by 96%, optimizing SEO.",
      "Automated weekly report generation (n8n, GA, Sheets), boosting efficiency >97% (4h to 5min) and eliminating errors.",
      "Orchestrated cross-functional collaboration (RD, SEO, PMs, QA, Designers), reducing team workload by 60% and ensuring precise project delivery."
    ],
    type: "work",
    links: {
      myedit: "https://myedit.online/"
    }
  },
  {
    company: "MOXA",
    position: "Software Quality Assurance Intern",
    period: "07/2023 - 09/2023",
    description: [
      "Developed automated test tool using Python for Linux Serial Port Burning project.",
      "Conducted system test for Industrial PC projects involving Win10 image, Win10, and Win11.",
    ],
    type: "intern",
  },
  {
    company: "National Center for High-Performance Computing",
    position: "Research Assistant",
    period: "05/2023 - 02/2024",
    description: [
      "Spearheaded research and extensive thesis writing focused on Multi-access Edge Computing (MEC) architecture. ",
      "Investigated deployment scenarios and critical evolution from ETSI and 3GPP standards to 5G, B5G, and emerging 6G technologies. ",
      "Explored the integration and impact of Low Earth Orbit (LEO) satellite communication within MEC frameworks.",
    ],
    type: "work",
    highlights: ["Multi-access Edge Computing (MEC)", "5G/B5G/6G", "LEO Satellite Communication", "Thesis Writing"],
  },
  {
    company: "National Central University",
    position: "Web Programming Course Teaching Assistant",
    period: "03/2023 - 06/2023",
    description: [
    ],
    type: "work",
  },
  {
    company: "CAI-YO ENTERPRISE CO., LTD.",
    position: "Software Developer Intern",
    period: "03/2020 - 09/2021",
    description: [
    ],
    type: "intern",
  },
];

// Skills & Technologies
export const skills = {
    programming: [
    "C",
    "C++",
    "Python",
  ],
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  backend: [
    "Node.js",
    "Python",
    "RESTful API",
  ],

  tools: [
    "Git",
    "Docker",
    "Linux",
    "Arduino IDE",
  ],
  design: [
    "Figma",
    "Photoshop",
    "Illustrator",
    "Autodesk 3ds Max",
    "Unity",
  ],
};

// Publications
export const publications = [
  {
    authors: "Yu.-Chen. Liu et al.",
    title: "Design and Implementation of an Adaptive Path Selection in SDN-Enabled SRv6",
    venue: "APNOMS 2025",
    location: "Kaohsiung, Taiwan",
    date: "Sep. 22-24, 2025",
    status: "Accepted",
    type: "conference",
  },
];

// Language Proficiency
export const languages = [
  {
    name: "TOEFL iBT",
    score: "83",
    details: "Reading: 21 | Listening: 23 | Speaking: 18 | Writing: 21",
  },
];

// Activities & Involvement
export const activities = [
  {
    organization: "Microsoft",
    role: "Coding Angels Girls TECHgether",
    activity: "Vision AI DevKit Workshop",
    period: "2019",
  },
  {
    organization: "Open HCI Workshop",
    role: "Technical Team",
    activity: "Human-Computer Interaction Workshop",
    period: "2022",
  },
];

// Project Portfolio
export const projects = [
  {
    id: 1,
    title: "MyEdit",
    description: [
      "**Developed and implemented core features** for major image, audio, and video projects (e.g., Magic Designer, Podcast Studio, Video Editor).",
      "**Prioritized a strong UI/UX focus** using React to ensure professional performance and a seamless user experience.",
      "Integrated Google Analytics and multi-source data to optimize SEO, cutting marketing analysis time by 86% and reducing data discrepancies by 96%.",
      "Orchestrated cross-functional collaboration across RD, SEO, PM, QA, and design teams, which slashed team workload by 60% and guaranteed precise project delivery."
    ],
    image: "/images/projects/myedit.jpg",
    tags: ["React", "Node.js", "Javascript"],
    github: "https://github.com/CindyLiu-CL",
    demo: "https://myedit.online/en",
    featured: true,
  },
  {
    id: 2,
    title: "BonBunny Pastry Studio - Modern Artisanal Pastry E-commerce Platform",
    description: [
      "Developed a high-performance **e-commerce platform using Next.js 14 (App Router), TypeScript, and Tailwind CSS.** Focused on a responsive, glassmorphism-designed frontend to enhance the online presentation and sales of artisanal pastries.",
      "Implemented core features including an intuitive shopping cart, personalized wishlists, streamlined checkout, and a coupon system. Utilized Framer Motion for smooth animations and Zustand for efficient state management. Integrated JWT authentication for user management and built an admin dashboard covering product CRUD, order processing, and customer management, significantly optimizing operations.",
      "Adhered to ESLint code standards and Git version control, ensuring high code quality. This platform successfully elevated brand online presence, expanded sales potential, and optimized operational efficiency.",
    ],
    image: "/images/projects/bonbunny.jpg",
    tags: ["Founder", "Next.js", "React", "TypeScript", "Tailwind CSS","DevOps"],
    demo: "https://bonbunny.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Linux Serial Port Burning Test Tool",
    description: [
      "Developed a Python test tool with **pyserial** to control serial ports for throughput testing and data transmission accuracy verification.",
      "Implemented a **modular architecture**, optimized serial port testing efficiency, and **created a user-friendly interface for seamless procedures.**",
    ],github: "https://fir-mandarin-dc1.notion.site/MOXA-f7348ef5700d4f339ce71741b1b0dcea",
    image: "/images/projects/linux_serial_port.jpg",
    tags: ["Python", "Pyserial", "Linux", "UML Plant Diagram", "Arm","x86","Embedded"],
    featured: false,
  },
  {
    id: 4,
    title: "Software Engineering, Renting system",
    description: [
      "Implemented **Agile Development** to systematize customer rental and return processes, building a website with manager backend and customer frontend to address market challenges.",
      "**Led team** in implementing front-end and back-end separation, **reducing development time from six months to one and a half months.**",
      "Executed systematic integration, boosting company transaction efficiency by almost 60%, cutting paper-based operations by nearly 80%, and reducing personnel costs by around 50%.",
    ],
    image: "/images/projects/renting_system.jpg",
    tags: ["Team Leader", "Next.js", "React", "UML Plant Diagram"],
    github: "https://github.com/yuchen-land/renting-system-front",
    demo: "https://renting-system-front.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Clchemy : A Board Game App for Learning C++ Programming Language",
    description: [
      "Collaborated with the Ministry of Education to design a **bilingual** app-based card game, instructing upper elementary students in C++ basics. Aligned with bilingual education policies, the project incorporated assessments to measure effectiveness.",
      "Achieved a **70% contribution rate**, and developed UI and interface scripting for the app.",
      "Optimized self-learning for novice programmers through gamified projects, achieving an 80% improvement in learning efficiency as reported by educators and users.",
    ],
    image: "/images/projects/clchemy.jpg",
    tags: ["Team Leader", "C++", "C#", "Unity", "Autodesk 3ds Max"],
    demo: "https://www.youtube.com/watch?v=z9RUuTXWAO0&feature=youtu.be",
    featured: false,
  },{
    id: 6,
    title: "SIC/XE Two-pass Assembler",
    description: [
      "Developed a two-pass assembler in C for the SIC/XE instruction set to enhance understanding of the assembly process.",
      "Applied phased assembly for efficient code generation, improved maintainability, and enhanced error detection.",
    ],
    image: "/images/projects/two_pass_assembler.jpg",
    tags: ["C", "Assembly Language", "Firmware"],
    github: "https://github.com/yuchen-land/2-pass-assembler",
    featured: false,
  },
//   {
//     id: 7,
//     title: "Holly World Renting System",
//     description: [
//       "Collaborated with the Ministry of Education to design a **bilingual** app-based card game, instructing upper elementary students in C++ basics. Aligned with bilingual education policies, the project incorporated assessments to measure effectiveness.",
//       "Achieved a **70% contribution rate**, and developed UI and interface scripting for the app.",
//       "Optimized self-learning for novice programmers through gamified projects, achieving an 80% improvement in learning efficiency as reported by educators and users.",
//     ],
//     image: "/images/projects/holly_world.jpg",
//     tags: ["Founder", "Next.js", "React", "TypeScript", "Tailwind CSS","DevOps"],
//     demo: "http://www.holly-world.com.tw/",
//     featured: true,
//   },
];
