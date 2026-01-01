// Project Documentation Data
// This file contains detailed documentation for each project
// Using STAR methodology: Situation, Task, Action, Result
// Screenshots format: { src: "/images/projects/[project]/screenshot.jpg", alt: "Description", caption: "Optional caption" }

export const projectDocumentation = {
  1: {
    id: "myedit",
    title: "MyEdit",
    slug: "myedit",
    screenshots: [
      { src: "/images/projects/myedit.jpg", alt: "MyEdit Homepage", caption: "MyEdit main landing page" },
      // Add more screenshots here
    ],
    // STAR methodology
    star: {
      situation: "CyberLink needed to develop and maintain MyEdit, a professional online editing platform for images, audio, and video. The platform required seamless integration of multiple editing tools while maintaining high performance and a user-friendly experience for content creators worldwide.",
      task: "As a Software Engineer, I was responsible for developing core features across Magic Designer, Podcast Studio, and Video Editor projects. I needed to optimize SEO performance, integrate analytics for marketing insights, and coordinate cross-functional collaboration between RD, SEO, PM, QA, and Design teams.",
      action: [
        "Developed and implemented core features for image, audio, and video editing tools using React with a strong focus on UI/UX",
        "Integrated Google Analytics and multi-source data pipelines to enable comprehensive marketing analysis",
        "Automated weekly report generation using n8n, GA, and Google Sheets integration",
        "Orchestrated cross-functional collaboration to streamline project delivery and reduce team workload"
      ],
      result: "Reduced marketing analysis time by 86% and data discrepancies by 96% through optimized data integration. Automated reporting boosted efficiency by over 97% (from 4 hours to 5 minutes). Improved team workload efficiency by 60% while ensuring precise project delivery."
    },
    stats: [
      { value: "86%", label: "Analysis Time Reduced", icon: "clock" },
      { value: "96%", label: "Data Discrepancy Reduced", icon: "chart" },
      { value: "97%", label: "Report Automation", icon: "zap" },
      { value: "60%", label: "Team Efficiency Improved", icon: "users" }
    ],
    techStack: {
      frontend: ["React", "JavaScript", "HTML/CSS"],
      backend: ["Node.js"],
      tools: ["Google Analytics", "n8n", "Git"],
    },
    features: [
      "Image editing with Magic Designer",
      "Audio editing with Podcast Studio",
      "Video editing and processing",
      "Professional UI/UX interface",
      "Google Analytics integration",
      "Automated report generation",
    ],
    roles: ["Frontend Developer", "UI/UX Designer", "Full-Stack Engineer"],
    links: {
      demo: "https://myedit.online/en",
      github: "https://github.com/CindyLiu-CL",
    },
  },
  2: {
    id: "bonbunny",
    title: "BonBunny Pastry Studio",
    slug: "bonbunny",
    screenshots: [
      { src: "/images/projects/bonbunny.jpg", alt: "BonBunny Homepage", caption: "BonBunny main landing page with glassmorphism design" },
      // Add more screenshots here
    ],
    star: {
      situation: "As the founder of BonBunny Pastry Studio, I needed to establish a strong online presence for my artisanal pastry brand. The traditional sales channels were limiting growth potential, and there was no digital platform to showcase products, manage orders, or build customer relationships.",
      task: "Design and develop a modern, premium e-commerce platform that reflects the brand's artisanal quality. The platform needed to include product catalog, shopping cart, checkout flow, admin dashboard for order management, and secure authentication system.",
      action: [
        "Architected a full-stack solution using Next.js with TypeScript for type safety",
        "Designed and implemented a glassmorphism-themed UI with Framer Motion animations",
        "Built comprehensive e-commerce features: cart, wishlist, coupon system, and checkout flow",
        "Implemented JWT authentication and created an admin dashboard for CRUD operations",
        "Integrated Zustand for efficient state management and Supabase for backend services"
      ],
      result: "Successfully launched a fully functional e-commerce platform that elevated the brand's online presence. Expanded sales channels beyond physical location and significantly optimized operational efficiency through the integrated admin dashboard."
    },
    stats: [
      { value: "100%", label: "Online Presence Established", icon: "rocket" },
      { value: "10+", label: "Core Features Implemented", icon: "check" },
      { value: "1", label: "Full E-commerce Platform", icon: "star" }
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Supabase", "JWT Authentication"],
      design: ["Glassmorphism UI"],
      tools: ["Zustand", "Git", "DevOps"],
    },
    features: [
      "Responsive glassmorphism design",
      "Shopping cart with persistent state",
      "Wishlist functionality",
      "Coupon and discount system",
      "Streamlined checkout process",
      "JWT-based authentication",
      "Comprehensive admin dashboard",
      "Product CRUD operations",
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
    screenshots: [
      { src: "/images/projects/linux_serial_port.jpg", alt: "Linux Serial Port Tool", caption: "Serial port testing interface" },
      // Add more screenshots here
    ],
    star: {
      situation: "During my internship at MOXA, the QA team needed an efficient tool to test serial port functionality on industrial PCs. Manual testing was time-consuming and prone to human error, especially when testing across different architectures (ARM, x86).",
      task: "Develop an automated testing tool that could verify serial port throughput, data transmission accuracy, and handle multiple architectures. The tool needed to be user-friendly for QA engineers with varying technical backgrounds.",
      action: [
        "Designed modular Python architecture for maintainability and extensibility",
        "Implemented serial port control using pyserial library with optimized handling",
        "Created comprehensive testing procedures for throughput and accuracy verification",
        "Built an intuitive user interface for seamless testing procedures",
        "Documented the tool with UML diagrams for team reference"
      ],
      result: "Streamlined the QA testing process significantly, improving testing efficiency and reducing manual testing time. The modular design allowed easy extension for future testing requirements across ARM and x86 architectures."
    },
    stats: [
      { value: "2", label: "Architectures Supported", icon: "code" },
      { value: "100%", label: "Automated Testing", icon: "zap" }
    ],
    techStack: {
      programming: ["Python"],
      libraries: ["Pyserial"],
      platforms: ["Linux", "ARM", "x86"],
      tools: ["UML Plant Diagram"],
    },
    features: [
      "Serial port communication control",
      "Throughput testing capabilities",
      "Data transmission verification",
      "Multi-architecture support",
      "Modular architecture",
      "User-friendly interface",
      "Comprehensive error reporting",
    ],
    roles: ["Software Engineer", "QA Engineer"],
    links: {
      documentation: "https://fir-mandarin-dc1.notion.site/MOXA-f7348ef5700d4f339ce71741b1b0dcea",
    },
  },
  4: {
    id: "lotus-peanut-candy",
    title: "Lotus Peanut Candy E-Commerce",
    slug: "lotus-peanut-candy",
    screenshots: [
      { src: "/images/projects/Peanut_Candy.jpg", alt: "Lotus Peanut Candy Homepage", caption: "Traditional Taiwanese heritage e-commerce platform" },
      // Add more screenshots here
    ],
    star: {
      situation: "A traditional Taiwanese peanut candy brand from Yunlin needed to modernize their sales approach while honoring their cultural heritage. The challenge was to create an online presence that balanced modern e-commerce functionality with traditional aesthetics.",
      task: "Build a full-stack e-commerce platform that celebrates Taiwanese heritage through design while providing a seamless, high-performance shopping experience. The platform needed excellent SEO for discoverability.",
      action: [
        "Engineered a decoupled architecture with Next.js frontend and FastAPI backend",
        "Designed warm, artisanal UI with localized typography (Noto Serif TC)",
        "Implemented smooth page transitions and CartDrawer with real-time toast notifications",
        "Leveraged uv for lightning-fast package management",
        "Optimized SEO using Next.js Metadata API and deployed on Vercel"
      ],
      result: "Delivered a friction-free shopping experience that successfully balances modern design with traditional heritage. Achieved high performance with Next.js SSR and maximum search visibility through comprehensive SEO optimization."
    },
    stats: [
      { value: "100%", label: "Heritage-Modern Balance", icon: "star" },
      { value: "SSR", label: "Server-Side Rendering", icon: "zap" }
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["FastAPI", "Python", "RESTful API"],
      tools: ["uv", "Vercel", "Metadata API (SEO)"],
    },
    features: [
      "Traditional Taiwanese aesthetic design",
      "Intuitive CartDrawer component",
      "Real-time toast notifications",
      "Smooth page transitions",
      "Localized typography",
      "SEO-optimized pages",
      "High-performance FastAPI backend",
    ],
    roles: ["Full-Stack Developer", "UI/UX Designer"],
    links: {
      demo: "https://lotus-peanut-candy.vercel.app",
    },
  },
  5: {
    id: "muse-classic",
    title: "Muse Classic - Korean Clothing E-commerce",
    slug: "muse-classic",
    screenshots: [
      { src: "/images/projects/muse_classic.jpg", alt: "Muse Classic Homepage", caption: "Quiet Luxury design for premium fashion e-commerce" },
      // Add more screenshots here
    ],
    star: {
      situation: "The premium Korean fashion market requires a sophisticated digital experience that reflects the quality and exclusivity of high-end clothing. Standard e-commerce templates fail to convey the Quiet Luxury aesthetic that discerning customers expect.",
      task: "Create a premium e-commerce platform implementing Quiet Luxury design principles with cutting-edge technology stack. The architecture needed flexibility through dual-backend solutions for future scalability.",
      action: [
        "Implemented Quiet Luxury design system with carefully curated color palettes",
        "Built with Next.js 16 and React 19.2 for peak performance",
        "Utilized Tailwind CSS 4 and Radix UI for fluid SVG animations",
        "Architected dual-backend with Express.js and FastAPI for flexibility",
        "Integrated PostgreSQL and optimized with uv package manager"
      ],
      result: "Created a frictionless, responsive e-commerce experience optimized for premium fashion consumers. The dual-backend architecture provides flexibility for future scaling while maintaining SEO optimization through Metadata APIs."
    },
    stats: [
      { value: "2", label: "Backend Solutions", icon: "code" },
      { value: "v19.2", label: "React Version", icon: "rocket" }
    ],
    techStack: {
      frontend: ["Next.js 16", "React 19.2", "TypeScript", "Tailwind CSS 4", "Radix UI"],
      backend: ["Express.js", "FastAPI", "PostgreSQL"],
      tools: ["uv", "Vercel", "Metadata API (SEO)"],
    },
    features: [
      "Quiet Luxury design system",
      "Custom color palettes",
      "Fluid SVG animations",
      "Server Components optimization",
      "Dual-backend architecture",
      "PostgreSQL integration",
      "SEO optimization",
    ],
    roles: ["Full-Stack Developer", "UI/UX Designer"],
    links: {
      demo: "https://muse-classic.vercel.app/",
    },
  },
  6: {
    id: "renting-system",
    title: "Software Engineering - Renting System",
    slug: "renting-system",
    screenshots: [
      { src: "/images/projects/renting_system.jpg", alt: "Renting System", caption: "Enterprise rental management system" },
      // Add more screenshots here
    ],
    star: {
      situation: "An enterprise needed to modernize their rental management operations. The existing paper-based system was inefficient, error-prone, and required significant personnel resources. Development timeline was originally estimated at 6 months.",
      task: "As Team Leader, lead the development of a comprehensive web-based rental system with separate interfaces for customers and managers. Implement Agile methodology to accelerate development while maintaining quality.",
      action: [
        "Led the team in implementing front-end and back-end separation architecture",
        "Applied Agile development methodology with iterative sprints",
        "Built customer-facing interface with Next.js and React",
        "Developed manager backend system with Node.js",
        "Created automated rental/return processing workflows"
      ],
      result: "Reduced development timeline by 75% (from 6 months to 1.5 months). Boosted company transaction efficiency by 60%, eliminated 80% of paper-based operations, and reduced personnel costs by 50%."
    },
    stats: [
      { value: "75%", label: "Dev Time Reduced", icon: "clock" },
      { value: "60%", label: "Efficiency Improved", icon: "chart" },
      { value: "80%", label: "Paperless Operations", icon: "check" },
      { value: "50%", label: "Cost Reduction", icon: "users" }
    ],
    techStack: {
      frontend: ["Next.js", "React"],
      backend: ["Node.js"],
      methodology: ["Agile Development"],
      tools: ["UML Plant Diagram", "Git"],
    },
    features: [
      "Customer-facing rental interface",
      "Manager backend system",
      "Automated rental processing",
      "Real-time inventory management",
      "Transaction tracking",
      "Customer management",
      "Paperless operations",
    ],
    roles: ["Team Leader", "Full-Stack Developer", "Project Manager"],
    links: {
      github: "https://github.com/yuchen-land/renting-system-front",
    },
  },
  7: {
    id: "clchemy",
    title: "Clchemy - C++ Educational Game",
    slug: "clchemy",
    screenshots: [
      { src: "/images/projects/clchemy.jpg", alt: "Clchemy Game", caption: "Educational C++ card game interface" },
      // Add more screenshots here
    ],
    star: {
      situation: "Taiwan's Ministry of Education sought innovative approaches to teach programming fundamentals to elementary students. Traditional text-based learning methods were not engaging enough for young learners, and bilingual education requirements added complexity.",
      task: "As Team Leader, design and develop a bilingual (English/Chinese) educational card game that teaches C++ programming basics through gamified learning. The solution needed to align with government education policies and include assessment mechanisms.",
      action: [
        "Led the team and collaborated with Ministry of Education stakeholders",
        "Designed gamified learning mechanics using card game concepts",
        "Developed the application using C# and Unity game engine",
        "Created 3D character and asset designs with Autodesk 3ds Max",
        "Implemented bilingual interface and assessment tracking systems"
      ],
      result: "Achieved 70% contribution rate to the project. Improved learning efficiency by 80% according to educator feedback. Successfully aligned with Taiwan's bilingual education policies and created an engaging educational tool for elementary students."
    },
    stats: [
      { value: "80%", label: "Learning Efficiency", icon: "chart" },
      { value: "70%", label: "Project Contribution", icon: "star" },
      { value: "2", label: "Languages Supported", icon: "users" }
    ],
    techStack: {
      programming: ["C++", "C#"],
      gameEngine: ["Unity"],
      design: ["Autodesk 3ds Max"],
      approach: ["Gamified Learning"],
    },
    features: [
      "Bilingual interface (EN/ZH)",
      "C++ concept tutorials",
      "Interactive gameplay",
      "Assessment tracking",
      "Achievement system",
      "3D character design",
      "MOE curriculum aligned",
    ],
    roles: ["Team Leader", "Game Developer", "UI/UX Designer"],
    links: {
      demo: "https://www.youtube.com/watch?v=z9RUuTXWAO0&feature=youtu.be",
    },
  },
  8: {
    id: "sic-assembler",
    title: "SIC/XE Two-pass Assembler",
    slug: "sic-assembler",
    screenshots: [
      { src: "/images/projects/two_pass_assembler.jpg", alt: "SIC/XE Assembler", caption: "Two-pass assembler implementation" },
      // Add more screenshots here
    ],
    star: {
      situation: "Understanding assembly language and compiler design is fundamental for computer science education. The SIC/XE instruction set provides an ideal learning platform for assembly concepts due to its well-documented specifications.",
      task: "Implement a complete two-pass assembler in C for the SIC/XE instruction set. The assembler needed to correctly handle symbol tables, generate intermediate code, and produce executable output.",
      action: [
        "Studied SIC/XE instruction set specifications thoroughly",
        "Designed efficient two-pass assembly process architecture",
        "Implemented proper symbol table management",
        "Developed intermediate code generation and handling",
        "Built comprehensive error detection and reporting"
      ],
      result: "Successfully implemented a complete, working two-pass assembler with proper error handling. Enhanced understanding of assembly language fundamentals and compiler design principles applicable to modern development."
    },
    stats: [
      { value: "2", label: "Assembly Passes", icon: "code" },
      { value: "C", label: "Implementation Language", icon: "rocket" }
    ],
    techStack: {
      programming: ["C"],
      concepts: ["Assembly Language", "Firmware", "Compiler Design"],
      tools: ["Git"],
    },
    features: [
      "Two-pass assembly process",
      "Symbol table management",
      "SIC/XE instruction support",
      "Intermediate code generation",
      "Error detection/reporting",
      "Modular architecture",
    ],
    roles: ["Software Engineer", "Systems Programmer"],
    links: {
      github: "https://github.com/yuchen-land/2-pass-assembler",
    },
  },
  9: {
    id: "holly-world",
    title: "Holly World Renting System",
    slug: "holly-world",
    screenshots: [
      { src: "/images/projects/hollyworld.jpg", alt: "Holly World Homepage", caption: "Web-based rental management system" },
      // Add more screenshots here
    ],
    star: {
      situation: "CAI-YO ENTERPRISE CO. needed a web-based rental management system to modernize their operations. As a junior developer, this was an opportunity to gain foundational front-end development experience in a real-world business context.",
      task: "Develop a web-based rental system with separate customer and manager interfaces. Focus on UI/UX implementation and basic API integration while learning industry best practices over the project duration.",
      action: [
        "Built web-based system with HTML, CSS, and JavaScript",
        "Implemented customer-facing rental interface",
        "Developed manager backend operations",
        "Focused on UI/UX implementation best practices",
        "Integrated basic API functionality"
      ],
      result: "Streamlined rental and return processes, enhancing overall operational efficiency. Gained 1.5 years of practical front-end development experience and established foundational skills in UI/UX implementation."
    },
    stats: [
      { value: "1.5", label: "Years Experience", icon: "clock" },
      { value: "2", label: "User Interfaces", icon: "users" }
    ],
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      methodology: ["Agile Development"],
    },
    features: [
      "Customer rental interface",
      "Manager backend operations",
      "UI/UX focused design",
      "API integration",
      "Process management",
    ],
    roles: ["Founder", "Frontend Developer"],
    links: {
      demo: "http://www.holly-world.com.tw/",
    },
  },
  10: {
    id: "holly-world-v2",
    title: "Holly World V2.0 - E-commerce Platform",
    slug: "holly-world-v2",
    screenshots: [
      { src: "/images/projects/hollyworld2.jpg", alt: "Holly World V2.0", caption: "Modernized e-commerce platform with Next.js" },
      // Add more screenshots here
    ],
    star: {
      situation: "The original Holly World platform needed modernization to improve performance, maintainability, and developer experience. The legacy codebase lacked type safety, automated testing, and efficient development workflows.",
      task: "Migrate the platform to modern technologies while improving performance metrics and code quality. Implement automation to eliminate manual workflows and reduce runtime errors.",
      action: [
        "Migrated to Next.js 13 with React 19 for SSR capabilities",
        "Enforced end-to-end type safety with TypeScript and Zod",
        "Implemented Jest testing suite with Husky pre-commit hooks",
        "Engineered custom Node.js scripts for data validation",
        "Created image synchronization automation"
      ],
      result: "Reduced First Contentful Paint (FCP) by 50%. Decreased runtime errors by approximately 40%. Boosted maintenance efficiency by 70% through automated workflows. Eliminated manual data validation entirely."
    },
    stats: [
      { value: "50%", label: "FCP Improvement", icon: "zap" },
      { value: "40%", label: "Errors Reduced", icon: "chart" },
      { value: "70%", label: "Maintenance Efficiency", icon: "clock" }
    ],
    techStack: {
      frontend: ["Next.js 13", "React 19", "TypeScript", "Tailwind CSS", "TanStack Query"],
      backend: ["Supabase"],
      tools: ["Jest", "Husky", "Zod", "Node.js Scripts"],
    },
    features: [
      "Server-Side Rendering (SSR)",
      "TanStack Query integration",
      "TypeScript + Zod type safety",
      "Jest testing suite",
      "Husky pre-commit hooks",
      "Automated data validation",
      "Image synchronization",
    ],
    roles: ["Founder", "Full-Stack Developer"],
    links: {
      demo: "https://holly-world-v2-0.vercel.app",
    },
  },
};
