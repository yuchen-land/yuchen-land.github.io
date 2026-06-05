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
  // {
  //   name: "Beyond",
  //   path: "/beyond",
  //   icon: "sparkles",
  //   color: "from-amber-500 to-orange-600",
  // }, // hidden for now
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
      "Assisted professors and mentored students on core Web Programming concepts, enhancing communication skills."
    ],
    type: "work",
    highlights: ["enhancing communication skills"],
  },
];

// Skills & Technologies
export const skills = {
  programming: [
    "C",
    "C++",
    "Python",
    "C#",
    "JavaScript",
    "TypeScript",
  ],
  backend: [
    "Python",
    "Node.js",
    "Express.js",
    "RESTful API",
    "FastAPI",
    "PostgreSQL",
    "Supabase"
  ],
  frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML/CSS",
    "Figma",
  ],

  tools: [
    "Git",
    "Docker",
    "Linux",
    "DevOps",
    "Arduino IDE",
    "GitHub Copilot"
  ],
  design: [
    "Photoshop",
    "Illustrator",
    "Autodesk 3ds Max",
    "Unity",
  ],
  aiTools: [
    "Claude / Anthropic API",
    "Gemini Pro",
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
  degree: "Master&apos;s Thesis",
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
    demo: "/srv6-proa",
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
    period: "2021",
  },
];

// Import project documentation from separate file
export { projectDocumentation } from "./projectDocumentation";

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
    tags: ["React", "Node.js", "JavaScript"],
    type: "frontend",
    demo: "https://myedit.online/en",
    featured: true,
  },
  {
    id: 10,
    title: "Holly World V2.0 - E-commerce Platform",
    period: "2025 - Present",
    description: [
      "Migrated platform to Next.js 13/React 19 (SSR/TanStack Query), **reducing First Contentful Paint (FCP) by  50%.**",
      "Enforced end-to-end type safety and validation using **TypeScript** and **Zod**, reducing runtime errors by approximately 40%.",
      "Maintained code quality via **Jest** for testing and **Husky** for pre-commit hooks.",
      "Engineered custom **Node.js scripts** to automate product data validation and image synchronization, eliminating manual workflows and **boosting maintenance efficiency by 70%.**"
    ],
    image: "/images/projects/hollyworld2.png",
    imagePosition: "center 40%",
    tags: ["Founder", "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    type: "fullstack",
    demo: "https://holly-world-v2-0.vercel.app",
    featured: false,
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
    type: "fullstack",
    demo: "https://bonbunny.vercel.app/",
    featured: false,
  },
  {
    id: 3,
    title: "Linux Serial Port Burning Test Tool",
    period: "2023",
    description: [
      "Developed a Python test tool with **pyserial** to control serial ports for throughput testing and data transmission accuracy verification.",
      "Implemented a **modular architecture**, optimized serial port testing efficiency, and **created a user-friendly interface for seamless procedures.**",
    ], github: "/projects/linux-serial-port",
    image: `/images/projects/linux_serial_port.jpg`,
    tags: ["Python", "Pyserial", "Linux", "UML Plant Diagram", "Arm", "x86", "Embedded"],
    type: "firmware",
    featured: false,
  },
  {
    id: 4,
    title: "Lotus Peanut Candy E-Commerce",
    period: "2025 - Present",
    description: [
      "Engineered a decoupled system using **Next.js** for the frontend and **FastAPI (Python)** for the backend. Leveraging **uv** for lightning-fast package management, ensuring high-performance API interactions and a robust development workflow.",
      "Inspired by traditional Taiwanese heritage, the interface utilizes **Tailwind CSS** to balance modern aesthetics with a warm, artisanal feel. The design features a responsive layout and localized typography (Noto Serif TC) to honor the brand's Yunlin roots.",
      "Delivered a friction-free journey through smooth page transitions, an intuitive **CartDrawer**, and real-time toast notifications. Optimized for growth via Next.js Metadata API and Vercel deployment to ensure maximum search visibility and global reliability."
    ],
    image: "/images/projects/Peanut_Candy.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "FastAPI", "RESTful API Design", "Python", "uv", "Vercel", "Metadata API (SEO)"],
    type: "fullstack",
    demo: "https://lotus-peanut-candy.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Muse Classic - Korean Clothing E-commerce Platform",
    period: "2025 - Present",
    description: [
      "Implemented a **Quiet Luxury** design system and custom color palettes to deliver a premium digital experience tailored for high-end market segments.",
      "Built on Next.js 16 and React 19.2 for peak performance. Utilized **Tailwind CSS** 4 and **Radix UI** to create fluid SVG animations and optimized Server Components, ensuring a frictionless, responsive e-commerce journey.",
      "Architected dual-backend solutions using **Express.js (TS)** and **FastAPI (Python)**. Leveraged **uv** for high-performance dependency management and integrated Metadata APIs with Vercel for a scalable, SEO-optimized full-stack deployment."
    ],
    image: "/images/projects/muse_classic.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Express.js", "FastAPI", "uv", "Vercel", "Metadata API (SEO)", "PostgreSQL"],
    type: "fullstack",
    demo: "https://muse-classic.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "Software Engineering, Renting system",
    period: "2022 - 2023",
    description: [
      "Implemented **Agile Development** to systematize customer rental and return processes, building a website with manager backend and customer frontend to address market challenges.",
      "**Led team** in implementing front-end and back-end separation, **reducing development time from six months to one and a half months.**",
      "Executed systematic integration, boosting company transaction efficiency by almost 60%, cutting paper-based operations by nearly 80%, and reducing personnel costs by around 50%.",
    ],
    image: `/images/projects/renting_system.jpg`,
    tags: ["Team Leader", "Next.js", "React", "UML Plant Diagram"],
    type: "fullstack",
    github: "https://github.com/yuchen-land/renting-system-front",
    featured: false,
    hidden: true,
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
    title: "Holly World Renting System",
    period: "2019 - Present",
    description: [
      "CAI-YO ENTERPRISE CO. Web-based rental management system development, utilizing Agile methodology to separate frontend and backend systems for customer and manager operations.",
      "Gained **foundational 1.5 years of practical front-end development experience**, focusing on **UI/UX** implementation and basic API integration",
      "Contributed to streamlining rental and return processes, enhancing overall operational efficiency.",
    ],
    image: "/images/projects/hollyworld.jpg",
    tags: ["Founder", "CSS", "HTML", "JavaScript"],
    type: "frontend",
    demo: "http://www.holly-world.com.tw/",
    featured: false,
    hidden: true,
  },
  {
    id: 11,
    title: "MyEdit Business",
    period: "2024 - Present",
    description: [
      "**Developed and implemented core features** for MyEdit Business, the commercial-licensed tier of MyEdit's AI creative suite (image, audio, video) tailored for teams and business workflows.",
      "**Prioritized a strong UI/UX focus** using React to deliver a professional, seamless experience optimized for commercial use cases and conversion.",
      "Integrated Google Analytics and multi-source data to optimize SEO and the business landing experience, improving marketing insight and reducing data discrepancies.",
      "Orchestrated cross-functional collaboration across RD, SEO, PM, QA, and design teams to ensure precise feature delivery.",
    ],
    image: `/images/projects/myedit_biz.jpg`,
    tags: ["React", "Node.js", "JavaScript"],
    type: "frontend",
    demo: "https://myedit.online/business",
    featured: true,
  },
];

// Tag Categories
export const tagCategories = {
  languages: {
    name: "Programming Languages",
    icon: "💻",
    color: "from-orange-400 to-red-500",
    tags: ["C", "C++", "Python", "C#"],
  },
  backend: {
    name: "Backend",
    icon: "⚙️",
    color: "from-purple-400 to-pink-500",
    tags: ["Node.js", "Express.js", "FastAPI", "RESTful API Design", "DevOps", "Supabase", "PostgreSQL"],
  },
  frontend: {
    name: "Frontend",
    icon: "🎨",
    color: "from-blue-400 to-cyan-500",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
  },
  firmware: {
    name: "Firmware & Embedded",
    icon: "🔌",
    color: "from-teal-400 to-cyan-500",
    tags: ["Pyserial", "Arm", "x86", "Assembly Language", "Firmware", "Embedded"],
  },
  tools: {
    name: "Tools & Platforms",
    icon: "🛠️",
    color: "from-green-400 to-emerald-500",
    tags: ["Linux", "Unity", "Autodesk 3ds Max", "UML Plant Diagram", "uv", "Vercel", "Metadata API (SEO)"],
  },
  specialization: {
    name: "Specialization",
    icon: "⭐",
    color: "from-rose-400 to-pink-500",
    tags: ["Founder", "Team Leader", "IPv6", "Segment Routing", "SRv6", "SDN", "Path Selection", "Network Resilience", "APNOMS 2025"],
  },
};
