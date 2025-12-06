// Personal Information
export const personalInfo = {
  name: "Yu-Chen(Cindy), Liu",
  title: "Software Engineer & Pâtissier",
  description: "Hi! I'm Cindy. Welcome to my creative space!\nExplore my projects and the brand I built here.",
  avatar: `/images/avatar.jpg`,
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

// Master's Thesis
export const thesis = {
  title: "Design and Implementation of an Adaptive Path Selection Method in SDN-based SRv6",
  degree: "Master's Thesis",
  image: `/images/projects/master_thesis.jpg`, 
  advisor: {
    name: "Prof. Pang-Wei Tsai",
    url: "https://www.itlab.ee.ncku.edu.tw/pwtsai/index.html",
  },
  institution: "National Central University",
  department: "Information Management",
  year: "2023-2024",
  highlights: [
    "SRv6 uses segment identifiers within IPv6 addresses for flexible and adjustable routing, optimizing network resources based on application demands and transmission paths.",
    "This study proposes a Probabilistic Routing Optimization Algorithm (PROA) to improve SRv6's adaptive control and packet forwarding within a single domain.",
    "Results show that PROA significantly enhances fault recovery time, packet loss rate, and resource utilization compared to traditional intra-domain and segment routing protocols.",
  ],
  tags: ["IPv6", "Segment Routing", "SRv6", "SDN", "Path Selection", "Network Resilience", "APNOMS 2025"],
  links: {
    advisor: "https://www.itlab.ee.ncku.edu.tw/pwtsai/index.html",
    conference: "https://apnoms.org/2025/",
  },
};

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

// Documentation Data
export const projectDocumentation = {
  1: {
    id: "myedit",
    title: "MyEdit",
    slug: "myedit",
    overview: {
      description: "A professional image, audio, and video editing platform built with React and Node.js. MyEdit provides users with powerful tools for content creation while maintaining a smooth, professional user experience.",
      challenge: "Create a scalable, user-friendly editing platform that supports multiple media types (image, audio, video) while maintaining high performance and professional-grade features.",
      solution: "Developed a modular React component architecture with integrated Google Analytics and optimized UI/UX design. Implemented cross-functional collaboration systems to streamline team workflows.",
      impact: "Reduced marketing analysis time by 86% and data discrepancies by 96%. Improved team efficiency by 60% through better SEO optimization.",
    },
    techStack: {
      frontend: ["React", "JavaScript", "HTML/CSS"],
      backend: ["Node.js"],
      tools: ["Google Analytics", "Git"],
    },
    features: [
      "Image editing with Magic Designer",
      "Audio editing with Podcast Studio",
      "Video editing and processing",
      "Professional UI/UX interface",
      "Google Analytics integration",
      "Multi-source data analysis",
    ],
    keyAchievements: [
      "Reduced marketing analysis time by 86%",
      "Decreased data discrepancies by 96%",
      "Improved team workload efficiency by 60%",
      "Maintained seamless user experience across multiple media types",
    ],
    roles: ["Frontend Developer", "UI/UX Designer", "Full-Stack Engineer"],
    links: {
      demo: "https://myedit.online/en",
      github: "https://github.com/CindyLiu-CL",
    },
  },
  2: {
    id: "bonbunny",
    title: "BonBunny Pastry Studio - Modern Artisanal Pastry E-commerce Platform",
    slug: "bonbunny",
    overview: {
      description: "A premium e-commerce platform for an artisanal pastry brand, built with Next.js and featuring advanced state management, authentication, and admin dashboard functionality.",
      challenge: "Build a modern e-commerce platform that combines beautiful glassmorphism design with robust backend systems for product management, orders, and customer relationships.",
      solution: "Developed responsive frontend with Framer Motion animations, implemented JWT authentication, created comprehensive admin dashboard for CRUD operations, and integrated Zustand for state management.",
      impact: "Elevated brand online presence, expanded sales channels, significantly optimized operational efficiency.",
    },
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion","Supabase"],
      backend: ["Node.js", "JWT Authentication"],
      design: ["Glassmorphism UI"],
      tools: ["Zustand", "Git", "DevOps"],
    },
    features: [
      "Responsive e-commerce frontend with glassmorphism design",
      "Shopping cart with persistent state",
      "Wishlist functionality",
      "Coupon and discount system",
      "Streamlined checkout process",
      "JWT-based authentication",
      "Comprehensive admin dashboard",
      "Product CRUD operations",
      "Order processing system",
      "Customer management",
    ],
    keyAchievements: [
      "Launched fully functional e-commerce platform",
      "Implemented JWT authentication for secure transactions",
      "Created admin dashboard for operational efficiency",
      "Achieved professional brand presence online",
      "Successfully expanded sales channels",
    ],
    roles: ["Founder", "Full-Stack Developer", "UI/UX Designer"],
    links: {
      demo: "https://bonbunny.vercel.app/",
    },
  },
  3: {
    id: "linux-serial-port",
    title: "Linux Serial Port Burning Test Tool",
    slug: "linux-serial-port",
    overview: {
      description: "A Python-based testing tool for Linux serial port operations, designed to automate throughput testing and data transmission accuracy verification for embedded systems.",
      challenge: "Create an efficient and user-friendly tool to test serial port functionality, throughput, and data integrity across different architectures (ARM, x86).",
      solution: "Developed modular Python architecture using pyserial library with optimized serial port handling. Implemented comprehensive testing procedures and created an intuitive user interface.",
      impact: "Streamlined QA testing process, improved testing efficiency, reduced manual testing time.",
    },
    techStack: {
      programming: ["Python"],
      libraries: ["Pyserial"],
      platforms: ["Linux", "ARM", "x86"],
      tools: ["UML Plant Diagram"],
    },
    features: [
      "Serial port communication and control",
      "Throughput testing capabilities",
      "Data transmission accuracy verification",
      "Support for multiple architectures (ARM, x86)",
      "Modular architecture for easy extension",
      "User-friendly testing interface",
      "Comprehensive error reporting",
    ],
    keyAchievements: [
      "Developed modular, maintainable testing tool",
      "Optimized serial port testing efficiency",
      "Created user-friendly interface for QA teams",
      "Supported multiple embedded architectures",
    ],
    roles: ["Software Engineer", "QA Engineer"],
    links: {
      documentation: "https://fir-mandarin-dc1.notion.site/MOXA-f7348ef5700d4f339ce71741b1b0dcea",
    },
  },
  4: {
    id: "renting-system",
    title: "Software Engineering, Renting System",
    slug: "renting-system",
    overview: {
      description: "An enterprise renting management system built with Agile methodology, featuring separate frontend and backend systems for customer-facing and manager operations.",
      challenge: "Modernize rental and return processes with a comprehensive web-based system that separates customer experience from manager operations while maintaining data integrity.",
      solution: "Implemented Agile development with Next.js frontend and Node.js backend separation. Created dual-interface system supporting both customer and manager workflows.",
      impact: "Reduced development time from 6 months to 1.5 months. Boosted transaction efficiency by 60%. Cut paper-based operations by 80%. Reduced personnel costs by 50%.",
    },
    techStack: {
      frontend: ["Next.js", "React"],
      backend: ["Node.js"],
      methodology: ["Agile Development"],
      tools: ["UML Plant Diagram", "Git"],
    },
    features: [
      "Customer-facing rental interface",
      "Manager backend system",
      "Automated rental and return processing",
      "Real-time inventory management",
      "Transaction tracking and reporting",
      "Customer management system",
      "Payment processing",
      "Paperless operations",
    ],
    keyAchievements: [
      "Reduced development timeline by 75% (6 months → 1.5 months)",
      "Improved transaction efficiency by 60%",
      "Eliminated 80% of paper-based operations",
      "Reduced personnel costs by 50%",
      "Successfully led team in front-end/back-end separation",
    ],
    roles: ["Team Leader", "Full-Stack Developer", "Project Manager"],
    links: {
      github: "https://github.com/yuchen-land/renting-system-front",
    },
  },
  5: {
    id: "clchemy",
    title: "Clchemy: A Board Game App for Learning C++ Programming Language",
    slug: "clchemy",
    overview: {
      description: "A bilingual educational card game developed in collaboration with Taiwan's Ministry of Education to teach C++ programming basics to upper elementary students through gamified learning.",
      challenge: "Design an engaging, bilingual educational game that effectively teaches C++ fundamentals to elementary students while aligning with government education policies.",
      solution: "Developed gamified card game using C# and Unity with 3D assets created in Autodesk 3ds Max. Incorporated assessment mechanisms to measure learning effectiveness.",
      impact: "Achieved 70% contribution rate to project. Improved learning efficiency by 80% according to educator feedback. Aligned with bilingual education policies.",
    },
    techStack: {
      programming: ["C++", "C#"],
      gameEngine: ["Unity"],
      design: ["Autodesk 3ds Max"],
      approach: ["Gamified Learning"],
    },
    features: [
      "Bilingual card game interface (English & Traditional Chinese)",
      "C++ programming concept tutorials",
      "Interactive gameplay mechanics",
      "Assessment and progress tracking",
      "Achievement system",
      "3D character and asset design",
      "Educational content aligned with MOE curriculum",
    ],
    keyAchievements: [
      "Collaborated with Taiwan Ministry of Education",
      "Achieved 80% learning efficiency improvement",
      "Successfully aligned with bilingual education policies",
      "Created engaging educational game for elementary students",
      "70% project contribution rate",
    ],
    roles: ["Team Leader", "Game Developer", "UI/UX Designer"],
    links: {
      demo: "https://www.youtube.com/watch?v=z9RUuTXWAO0&feature=youtu.be",
    },
  },
  6: {
    id: "sic-assembler",
    title: "SIC/XE Two-pass Assembler",
    slug: "sic-assembler",
    overview: {
      description: "A two-pass assembler implementation in C for the SIC/XE instruction set, designed to deepen understanding of the assembly process and low-level programming concepts.",
      challenge: "Implement a complete assembler that correctly processes SIC/XE assembly language across two passes, handling symbol tables and code generation.",
      solution: "Developed efficient two-pass assembly process with proper symbol table management and intermediate code handling. Applied phased assembly approach for optimal code generation.",
      impact: "Enhanced understanding of assembly language fundamentals and compiler design principles.",
    },
    techStack: {
      programming: ["C"],
      concepts: ["Assembly Language", "Firmware", "Compiler Design"],
      tools: ["Git"],
    },
    features: [
      "Two-pass assembly process",
      "Symbol table management",
      "SIC/XE instruction set support",
      "Intermediate code generation",
      "Error detection and reporting",
      "Modular architecture",
      "Efficient code generation",
    ],
    keyAchievements: [
      "Implemented complete two-pass assembler",
      "Proper error handling and detection",
      "Improved code maintainability",
      "Enhanced assembly language understanding",
      "Applicable to modern compiler design concepts",
    ],
    roles: ["Software Engineer", "Systems Programmer"],
    links: {
      github: "https://github.com/yuchen-land/2-pass-assembler",
    },
  },
};

// Project Portfolio
export const projects = [
  {
    id: 1,
    title: "MyEdit",
    period: "2024 - Present",
    description: [
      "**Developed and implemented core features** for major image, audio, and video projects (e.g., Magic Designer, Podcast Studio, Video Editor).",
      "**Prioritized a strong UI/UX focus** using React to ensure professional performance and a seamless user experience.",
      "Integrated Google Analytics and multi-source data to optimize SEO, cutting marketing analysis time by 86% and reducing data discrepancies by 96%.",
      "Orchestrated cross-functional collaboration across RD, SEO, PM, QA, and design teams, which slashed team workload by 60% and guaranteed precise project delivery."
    ],
    image: `/images/projects/myedit.jpg`,
    tags: ["React", "Node.js", "Javascript"],
    github: "https://github.com/CindyLiu-CL",
    demo: "https://myedit.online/en",
    featured: true,
  },
  {
    id: 2,
    title: "BonBunny Pastry Studio - Modern Artisanal Pastry E-commerce Platform",
    period: "2025 - Present",
    description: [
      "Built a responsive, glassmorphism-themed frontend with **Framer Motion** for enhanced animations and leveraged **Zustand** for efficient state management.",
      "Implemented core features including a shopping cart, wishlists, a coupon system, and a streamlined checkout process.",
      "Integrated **JWT authentication** and created a comprehensive admin dashboard for product CRUD, order processing, and customer management.",
      "Successfully elevated the brand's online presence, expanded sales channels, and significantly optimized operational efficiency."
    ],
    image: `/images/projects/bonbunny.jpg`,
    tags: ["Founder", "Next.js", "React", "TypeScript", "Tailwind CSS", "DevOps"],
    demo: "https://bonbunny.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Linux Serial Port Burning Test Tool",
    period: "2023",
    description: [
      "Developed a Python test tool with **pyserial** to control serial ports for throughput testing and data transmission accuracy verification.",
      "Implemented a **modular architecture**, optimized serial port testing efficiency, and **created a user-friendly interface for seamless procedures.**",
    ], github: "https://fir-mandarin-dc1.notion.site/MOXA-f7348ef5700d4f339ce71741b1b0dcea",
    image: `/images/projects/linux_serial_port.jpg`,
    tags: ["Python", "Pyserial", "Linux", "UML Plant Diagram", "Arm", "x86", "Embedded"],
    featured: false,
  },
  {
    id: 4,
    title: "Software Engineering, Renting system",
    period: "2022 - 2023",
    description: [
      "Implemented **Agile Development** to systematize customer rental and return processes, building a website with manager backend and customer frontend to address market challenges.",
      "**Led team** in implementing front-end and back-end separation, **reducing development time from six months to one and a half months.**",
      "Executed systematic integration, boosting company transaction efficiency by almost 60%, cutting paper-based operations by nearly 80%, and reducing personnel costs by around 50%.",
    ],
    image: `/images/projects/renting_system.jpg`,
    tags: ["Team Leader", "Next.js", "React", "UML Plant Diagram"],
    github: "https://github.com/yuchen-land/renting-system-front",
    featured: false,
  },
  {
    id: 5,
    title: "Clchemy : A Board Game App for Learning C++ Programming Language",
    period: "2020 - 2021",
    description: [
      "Collaborated with the Ministry of Education to design a **bilingual** app-based card game, instructing upper elementary students in C++ basics. Aligned with bilingual education policies, the project incorporated assessments to measure effectiveness.",
      "Achieved a **70% contribution rate**, and developed UI and interface scripting for the app.",
      "Optimized self-learning for novice programmers through gamified projects, achieving an 80% improvement in learning efficiency as reported by educators and users.",
    ],
    image: `/images/projects/clchemy.jpg`,
    tags: ["Team Leader", "C++", "C#", "Unity", "Autodesk 3ds Max"],
    demo: "https://www.youtube.com/watch?v=z9RUuTXWAO0&feature=youtu.be",
    featured: false,
  },
  {
    id: 6,
    title: "SIC/XE Two-pass Assembler",
    period: "2022",
    description: [
      "Developed a two-pass assembler in C for the SIC/XE instruction set to enhance understanding of the assembly process.",
      "Applied phased assembly for efficient code generation, improved maintainability, and enhanced error detection.",
    ],
    image: `/images/projects/two_pass_assembler.jpg`,
    tags: ["C", "Assembly Language", "Firmware"],
    github: "https://github.com/yuchen-land/2-pass-assembler",
    featured: false,
  },
    {
      id: 7,
      title: "Holly World Renting System",
      period: "2019 - Present",
      description: [
        "CAI-YO ENTERPRISE CO. Web-based rental management system development, utilizing Agile methodology to separate frontend and backend systems for customer and manager operations.",
        "Gained **foundational 1.5 years of practical front-end development experience**, focusing on **UI/UX** implementation and basic API integration",
        "Contributed to streamlining rental and return processes, enhancing overall operational efficiency.",
      ],
      image: "/images/projects/hollyworld.jpg",
      tags: ["Founder", "CSS", "HTML", "JavaScript"],
      demo: "http://www.holly-world.com.tw/",
      featured: false,
    },
    {
      id: 8,
      title: "Holly World V2.0 - E-commerce Platform",
      period: "2025 - Present",
      description: [
        "Migrated platform to Next.js 13/React 19 (SSR/TanStack Query), **reducing First Contentful Paint (FCP) by  50%.**",
        "Enforced end-to-end type safety and validation using **TypeScript** and **Zod**, reducing runtime errors by approximately 40%.",
        "Maintained code quality via **Jest** for testing and **Husky** for pre-commit hooks.",
        "Engineered custom **Node.js scripts** to automate product data validation and image synchronization, eliminating manual workflows and **boosting maintenance efficiency by 70%.**"
      ],
      image: "/images/projects/hollyworld2.jpg",
      tags: ["Founder", "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
      demo: "https://holly-world-v2-0.vercel.app",
      featured: true,
    },
];
