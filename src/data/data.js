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
    school: "National Taiwan University",
    degree: "Ph.D. in Computer Science",
    period: "2021 - 2025",
    level: "phd",
    description: [
      "Research Lab: Human-Computer Interaction Lab",
      "Publications: 3 papers published in top-tier conferences (CHI, UIST)",
      "Scholarship: Presidential Research Fellowship (2022-2024)",
    ],
  },
  {
    school: "National Chiao Tung University",
    degree: "Master of Science in Computer Science",
    period: "2019 - 2021",
    level: "master",
    description: [
      "Research Lab: Software Engineering Lab",
      "Thesis: Advanced Web Development Frameworks",
      "Scholarship: Academic Excellence Award (2020)",
    ],
  },
  {
    school: "National Taiwan University",
    degree: "Bachelor of Science in Computer Science",
    period: "2015 - 2019",
    level: "bachelor",
    description: [
      "Major in Software Engineering, Minor in Data Science",
      "Dean's List: All semesters (2015-2019)",
      "Scholarship: Merit-based Scholarship (2016-2018)",
    ],
  },
  {
    school: "Taipei First Girls' High School",
    degree: "High School Diploma",
    period: "2012 - 2015",
    level: "high-school",
    description: [
      "Academic Excellence in Mathematics and Science",
      "Science Fair Award: First Place in Computer Science (2014)",
    ],
  },
];

// Work Experience
export const experience = [
  {
    company: "Tech Company Inc.",
    position: "Full Stack Developer",
    period: "2024 - Present",
    description: [
      "Developed and maintained enterprise-level management systems",
      "Built RESTful APIs using React and Spring Boot architecture",
      "Optimized web performance, improving load times by 30%",
    ],
    type: "work",
  },
  {
    company: "Startup Co.",
    position: "Software Engineer Intern",
    period: "2023 - 2024",
    description: [
      "Assisted in developing frontend feature modules",
      "Participated in daily Scrum meetings and code reviews",
      "Learned team collaboration and agile development processes",
    ],
    type: "intern",
  },
];

// Skills & Technologies
export const skills = {
  frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  backend: [
    "Node.js",
    "Express",
    "Spring Boot",
    "Java",
    "Python",
    "RESTful API",
  ],
  database: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  tools: ["Git", "Docker", "AWS", "Linux", "Postman", "Figma"],
};

// Project Portfolio
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart, checkout, and order management capabilities.",
    image: "/images/projects/project1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://your-demo-site.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "Team collaboration tool supporting task assignment, progress tracking, and real-time notifications.",
    image: "/images/projects/project2.jpg",
    tags: ["Vue.js", "Spring Boot", "MySQL", "WebSocket"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://your-demo-site.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "Weather application integrating third-party APIs to provide weekly forecasts.",
    image: "/images/projects/project3.jpg",
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://your-demo-site.com",
    featured: false,
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "Personal blogging platform with Markdown editing, tag categorization, and comment functionality.",
    image: "/images/projects/project4.jpg",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/yourusername/blog",
    demo: "https://your-demo-site.com",
    featured: false,
  },
];
