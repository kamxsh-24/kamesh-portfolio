// SDE Resume URL (Can be replaced with Google Drive or hosted PDF link)
export const SDE_RESUME_URL = "/resumes/Kamesh_SDE_Resume.pdf";

export const personalInfo = {
  name: "Kamesh J",
  title: "Full Stack Developer & QA Automation Engineer",
  taglines: {
    fullstack: "I build responsive full-stack web apps and make sure they work flawlessly through manual and automated testing.",
    qa: "I build responsive full-stack web apps and make sure they work flawlessly through manual and automated testing.",
    sde: "I build scalable software with strong problem-solving, data structures and algorithms, and clean full-stack engineering."
  },
  tagline: "I build responsive full-stack web apps and make sure they work flawlessly through manual and automated testing.",
  rotatingRoles: {
    fullstack: [
      "Full Stack Developer (MERN)",
      "React.js & Node.js Engineer",
      "RESTful API & Database Designer"
    ],
    qa: [
      "QA Automation Tester",
      "Playwright Automation Specialist",
      "API Testing & STLC Specialist"
    ],
    sde: [
      "Software Developer (SDE)",
      "Problem Solver (DSA & Algorithms)",
      "Scalable Software & Full Stack Engineer"
    ]
  },
  location: "Coimbatore, Tamil Nadu, India",
  educationStatus: "B.Tech IT (2023–2027) · Sri Shakthi Institute of Engineering and Technology",
  availability: "Open to Full Stack, QA & Software Developer roles / internships",
  email: "kameshj001@gmail.com",
  phone: "+91-9944880294",
  socials: {
    github: "https://github.com/kamxsh-24",
    linkedin: "https://www.linkedin.com/in/kamesh-profile/",
    leetcode: "https://leetcode.com/u/kamesh_55/",
    email: "mailto:kameshj001@gmail.com"
  },
  resumes: {
    fullstack: {
      title: "MERN Resume",
      buttonLabel: "Download Resume (MERN)",
      link: "https://drive.google.com/file/d/1gHJnLi4_z_o0aMjiqcN-jAloph9_GKzZ/view?usp=drive_link"
    },
    qa: {
      title: "QA Resume",
      buttonLabel: "Download Resume (QA)",
      link: "https://drive.google.com/file/d/1BWUHsqnvGfRQ85vf1CQ8SdaRrDGlDZ3D/view?usp=drive_link"
    },
    sde: {
      title: "SDE Resume",
      buttonLabel: "Download Resume (SDE)",
      link: SDE_RESUME_URL
    }
  }
};

export const aboutContent = {
  fullstack: {
    heading: "Full Stack Engineer & Solution Builder",
    badge: "MERN Stack Specialist",
    bio: "MERN Stack Developer skilled in building responsive, full-stack web applications using MongoDB, Express.js, React.js and Node.js. Experienced in designing RESTful APIs, implementing JWT authentication and integrating frontend with backend services. Strong foundation in data structures, Git/GitHub and API testing with Postman, with additional experience in end-to-end test automation using Playwright.",
    highlightPoints: [
      "Modular backend architecture with Express.js & MongoDB (Mongoose)",
      "Secure JWT token-based authentication & role-based route guards",
      "Interactive, responsive user interfaces powered by React and Tailwind CSS",
      "RESTful API design & comprehensive Postman validation"
    ]
  },
  qa: {
    heading: "Quality Assurance & Automation Engineer",
    badge: "QA & Playwright Specialist",
    bio: "QA Tester with hands-on experience in manual testing, API testing with Postman and end-to-end automation using Playwright and JavaScript. Skilled in test case design, bug reporting, defect life cycle and Page Object Model, with a good understanding of SDLC and STLC. MERN background helps in understanding application logic, validating REST APIs and databases with SQL, and reproducing defects accurately.",
    highlightPoints: [
      "Robust Page Object Model (POM) architectures with reusable locators & assertions",
      "End-to-end UI automation with Playwright",
      "Comprehensive test case design covering positive, negative & boundary scenarios",
      "REST API verification (status codes, payloads, auth) with Postman"
    ]
  },
  sde: {
    heading: "Software Developer & Problem Solver",
    badge: "Software Developer (SDE)",
    bio: "Software Developer and B.Tech IT student with a strong foundation in data structures, algorithms and problem solving, skilled in building responsive full-stack web applications using MongoDB, Express.js, React.js and Node.js. Experienced in designing RESTful APIs, implementing JWT authentication and integrating backends with React frontends, with Git/GitHub, Postman API testing and Playwright test automation. Seeking an SDE Internship to build scalable software and grow into a full-time engineering role.",
    highlightPoints: [
      "Data Structures, Algorithms and algorithmic problem solving",
      "Scalable MERN full-stack development with REST APIs and JWT security",
      "Clean object-oriented principles, modular architecture & database schemas",
      "Automated test coverage with Playwright & Postman API testing"
    ]
  },
  quickFacts: [
    { label: "Degree", value: "B.Tech Information Technology" },
    { label: "Institution", value: "Sri Shakthi Institute of Engineering and Technology" },
    { label: "Timeline", value: "2023 – 2027" },
    { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
    { label: "Open To", value: "Full Stack, QA & Software Developer roles / internships" },
    { label: "Languages", value: "English, Tamil" }
  ]
};

export const educationData = [
  {
    institution: "Sri Shakthi Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    degree: "B.Tech Information Technology",
    period: "2023 – 2027",
    score: "CGPA 7.3",
    status: "Currently Pursuing (Year 2)",
    highlights: [
      "Focus on Data Structures, Object-Oriented Programming, and Web Architectures",
      "Inter-college representation in Smart India Hackathon (SIH 2024/2025)",
      "Core coursework in Database Management, Operating Systems, and Software Engineering"
    ]
  },
  {
    institution: "Government Higher Secondary School",
    location: "Tirupathur, Tamil Nadu",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2022 – 2023",
    score: "70%",
    status: "Completed",
    highlights: [
      "Specialized in Mathematics and Science Stream",
      "Built early analytical thinking and programming logic foundation"
    ]
  }
];

export const skillsCategories = [
  {
    id: "programming",
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", level: 94, tag: "Async, DOM, Modern JS" },
      { name: "Java", level: 82, tag: "OOP & Problem Solving" },
      { name: "SQL", level: 86, tag: "Queries & Joins" }
    ]
  },
  {
    id: "core",
    category: "Core Concepts",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 90, tag: "DSA" },
      { name: "Problem Solving", level: 92, tag: "Algorithmic Logic" },
      { name: "Object-Oriented Programming", level: 90, tag: "OOP Principles" },
      { name: "MVC Architecture", level: 88, tag: "Pattern" },
      { name: "CRUD Operations", level: 95, tag: "Data Flows" },
      { name: "Authentication & Authorization", level: 92, tag: "JWT & Security" }
    ]
  },
  {
    id: "backend",
    category: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 88, tag: "Runtime" },
      { name: "Express.js", level: 90, tag: "Web Framework" },
      { name: "RESTful APIs", level: 94, tag: "Architecture" },
      { name: "JWT Authentication", level: 90, tag: "Security & Tokens" },
      { name: "Middleware Implementation", level: 88, tag: "Request Pipeline" },
      { name: "Protected Routes", level: 92, tag: "Access Control" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 92, tag: "Component Architecture" },
      { name: "React Hooks & State", level: 90, tag: "State Management" },
      { name: "HTML5 & Semantic Web", level: 95, tag: "Structure & SEO" },
      { name: "CSS3 & Modern Animations", level: 92, tag: "Styling" },
      { name: "Tailwind CSS", level: 94, tag: "Utility-first Design" },
      { name: "Bootstrap", level: 88, tag: "Responsive Grid" },
      { name: "Responsive Design", level: 95, tag: "Mobile-First" }
    ]
  },
  {
    id: "databases",
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 90, tag: "NoSQL Database" },
      { name: "Mongoose", level: 90, tag: "ODM & Schema Design" },
      { name: "MySQL / SQL", level: 85, tag: "Relational Queries" },
      { name: "CRUD Operations", level: 95, tag: "Data Manipulation" }
    ]
  },
  {
    id: "tools",
    category: "Tools & Methodologies",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Postman", level: 92, tag: "API Debugging" },
      { name: "VS Code", level: 95, tag: "IDE & Tooling" },
      { name: "npm / Node Package Manager", level: 92, tag: "Dependency Management" },
      { name: "MVC Architecture", level: 90, tag: "Design Pattern" },
      { name: "Data Structures & Problem Solving", level: 85, tag: "Algorithms" }
    ]
  },
  {
    id: "testing",
    category: "Testing & Automation",
    icon: "ShieldCheck",
    skills: [
      { name: "Playwright", level: 90, tag: "E2E Automation" },
      { name: "API Testing (Postman)", level: 92, tag: "REST API Validation" },
      { name: "Page Object Model (POM)", level: 90, tag: "Architecture" },
      { name: "Functional & Regression", level: 92, tag: "Manual & Auto" },
      { name: "Smoke & Exploratory Testing", level: 88, tag: "Test Strategy" },
      { name: "Test Case Design & Test Plan", level: 94, tag: "STLC" },
      { name: "Bug Reporting & Defect Life Cycle", level: 92, tag: "Jira / GitHub" },
      { name: "SDLC & STLC", level: 95, tag: "Methodology" },
      { name: "HTML Test Reports", level: 90, tag: "Analytics" }
    ]
  }
];

export const projectsData = [
  {
    id: "pmss-fullstack",
    title: "PMSS Scholarship Portal",
    subtitle: "Full Stack MERN Application",
    category: "Full Stack",
    roleTag: "fullstack",
    featuredOrder: { fullstack: 1, sde: 1, qa: 3 },
    summary: "Full-stack scholarship management system where students apply for scholarships and administrators review, verify and manage applications.",
    sdeDescription: "Engineered a full-stack scholarship management system where students apply for scholarships and administrators review, verify and manage applications, with JWT authentication, protected routes, role-based access, and efficient search and filtering in MongoDB (Mongoose).",
    description: "A comprehensive, high-security portal engineered to streamline Prime Minister's Special Scholarship processing. Features robust student application submission, administrative verification workflows, document tracking, and secure status querying. Built with a scalable RESTful API architecture on Node.js/Express with JWT session management and Mongoose schema models.",
    keyFeatures: [
      "Secure JWT authentication with role-based route authorization for students & staff",
      "Interactive React dashboard with live application status tracking and document upload",
      "Express.js RESTful API endpoints for verification, filtering, and query resolution",
      "MongoDB database schemas engineered with Mongoose validation rules",
      "Complete responsive design optimized for mobile, tablet, and desktop viewports"
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT", "Git/GitHub"],
    liveUrl: "https://prime-minister-special-scholarship-portal.onrender.com/",
    githubUrl: "https://github.com/kamxsh-24",
    badge: "Full Stack MERN",
    highlight: "Comprehensive student & admin role system"
  },
  {
    id: "lapwise-fullstack",
    title: "Lapwise",
    subtitle: "Intelligent Laptop Recommendation System (MERN)",
    category: "Full Stack",
    roleTag: "fullstack",
    featuredOrder: { fullstack: 2, sde: 2, qa: 4 },
    summary: "Full-stack product recommendation system that suggests laptops based on user preferences and requirements.",
    description: "An intelligent e-commerce decision-making platform that simplifies laptop purchasing by analyzing user budget, technical needs (gaming, coding, business, creative), and hardware specifications. Provides dynamic multi-criteria filtering, instant comparison matrices, and responsive catalog browsing.",
    keyFeatures: [
      "Multi-dimensional algorithmic filtering based on budget, processor, RAM, and GPU",
      "Side-by-side laptop comparison matrix with highlighted specifications",
      "Clean, high-performance React front-end with instant search debounce",
      "Express.js backend providing lightning-fast catalog querying and filtering",
      "MongoDB database structure indexed for quick spec lookups"
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git/GitHub"],
    liveUrl: "https://lapwise-x.onrender.com/",
    githubUrl: "https://github.com/kamxsh-24",
    badge: "Full Stack MERN",
    highlight: "Spec-matching algorithm & comparison engine"
  },
  {
    id: "pmss-qa",
    title: "PMSS Scholarship Portal – QA Automation",
    subtitle: "End-to-End Test Automation with Playwright",
    category: "QA Automation",
    roleTag: "qa",
    featuredOrder: { fullstack: 3, sde: 3, qa: 1 },
    summary: "Designed test cases and automated 7+ end-to-end workflows (registration, login, profile, scholarship application, document upload, tracking, logout).",
    description: "Enterprise-grade automated test suite ensuring zero-defect deployments for the PMSS portal. Architected a maintainable Page Object Model (POM) in JavaScript using Playwright, decoupling locators from test logic and covering critical negative, boundary, and edge conditions across student and admin journeys.",
    keyFeatures: [
      "Automated 7+ mission-critical workflows: User Registration, JWT Login, Profile Updates, Scholarship Application Form, Document Upload, Application Tracking & Logout",
      "Implemented Page Object Model (POM) with reusable locators and parameterized assertion fixtures",
      "Validated REST API payload responses, status codes, and error formats via Postman",
      "Configured automated Playwright HTML report generation with step-by-step traces & failure captures",
      "Documented defects with clear reproduction steps, severity metrics, and expected vs actual results"
    ],
    tech: ["Playwright", "JavaScript", "Node.js", "Postman", "Page Object Model", "Manual Testing"],
    liveUrl: "https://prime-minister-special-scholarship-portal.onrender.com/",
    githubUrl: "https://github.com/kamxsh-24",
    badge: "QA Automation",
    highlight: "7+ End-to-End Automated Workflows + Postman API Suite"
  },
  {
    id: "lapwise-qa",
    title: "Lapwise – QA Testing & Verification",
    subtitle: "Test Strategy, Manual & Playwright Automation",
    category: "QA Automation",
    roleTag: "qa",
    featuredOrder: { fullstack: 4, sde: 4, qa: 2 },
    summary: "Test plan and manual test cases for search, filtering, comparison and recommendations including negative and boundary scenarios.",
    description: "Comprehensive quality assurance strategy for the Lapwise recommendation engine. Included exhaustive test case design for multi-parameter filtering, validation of edge cases (e.g. empty results, contradictory filters), automated regression runs with Playwright, and backend API sanity testing.",
    keyFeatures: [
      "Formulated detailed Test Plan and structured manual test suites covering positive, boundary, and negative user behaviors",
      "Automated primary UI workflows including multi-filter queries and comparison views using Playwright + POM",
      "Validated REST API response headers, payloads, status codes (200, 400, 404, 500) using Postman",
      "Logged and tracked software defects with detailed reproduction steps, environmental data, and severity ratings",
      "Verified UI responsiveness across standard desktop and mobile breakpoints"
    ],
    tech: ["Playwright", "JavaScript", "Postman", "Manual Testing", "POM"],
    liveUrl: "https://lapwise-x.onrender.com/",
    githubUrl: "https://github.com/kamxsh-24",
    badge: "QA Testing",
    highlight: "Boundary Testing & Automated UI Workflows"
  }
];

export const experienceData = [
  {
    role: "Frontend Development Intern",
    company: "Cognifyz Technologies",
    period: "Aug 2025 – Sep 2025",
    type: "Internship",
    location: "Remote",
    badge: "Intern ID: CTI/A1/C197822 · Issued 09/09/2025",
    description: "Developed responsive user interfaces using HTML, CSS and JavaScript applying modern web development practices. Recognized for high dedication, seamless team coordination, communication, and meticulous attention to detail.",
    certificateKey: "cognifyz",
    certificateUrl: "/certificates/cognifyz-internship.svg",
    keyPoints: [
      "Built cross-browser responsive frontend interfaces with semantic HTML5 and clean CSS3",
      "Implemented dynamic client-side interactions and DOM manipulation using modern JavaScript",
      "Received formal completion certification citing exceptional work ethic and attention to detail"
    ]
  },
  {
    role: "Inter-College Selected Team Participant",
    company: "Smart India Hackathon (SIH)",
    period: "Hackathon Edition 2024–2025",
    type: "Innovation Hackathon",
    location: "Sri Shakthi Institute of Engineering and Technology",
    badge: "Problem Statement: SIH1728",
    description: "Selected at Inter-College Level for Problem Statement ID SIH1728 – 'Development of a Paperless Scholarship Disbursement System for PMSSS'.",
    keyPoints: [
      "Spearheaded technical conceptualization of paperless student application workflows",
      "Designed data schemas and security paradigms for digital document verification",
      "Pitched architecture to institutional evaluation panel, securing institutional qualification"
    ]
  }
];

// Exactly 3 certifications
export const certificationsData = [
  {
    id: "cognifyz",
    title: "Internship Completion Certificate",
    issuer: "Cognifyz Technologies",
    date: "Sep 2025",
    previewImage: "/certificates/cognifyz-internship.svg",
    skills: ["Frontend Development", "HTML5", "CSS3", "JavaScript", "UI Implementation"],
    credentialId: "CTI/A1/C197822",
    hasLightbox: true,
    verifyUrl: null
  },
  {
    id: "playwright",
    title: "Playwright with JavaScript",
    issuer: "Infosys Springboard Virtual Internship 2.0",
    date: "2026",
    previewImage: "/certificates/infosys-playwright.svg",
    skills: ["Playwright", "Auto-waiting", "Assertions", "Test Structure", "E2E Automation"],
    credentialId: "VI 2.0 Track",
    hasLightbox: true,
    verifyUrl: null
  },
  {
    id: "javascript",
    title: "JavaScript Certification",
    issuer: "Udemy",
    date: "Certified",
    previewImage: "/certificates/udemy-javascript.svg",
    skills: ["Core JavaScript", "DOM Manipulation", "ES6+", "Asynchronous JS", "Hands-on Projects"],
    credentialId: "Udemy Verified",
    hasLightbox: true,
    verifyUrl: null
  }
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "kamesh_55",
    profileUrl: "https://leetcode.com/u/kamesh_55/",
    description: "Active problem solver practicing Data Structures, Algorithms, Arrays, Strings, and Logic in Java and JavaScript.",
    icon: "Code",
    accent: "#FFA116",
    badge: "Active Solver"
  },
  {
    platform: "GitHub",
    username: "kamxsh-24",
    profileUrl: "https://github.com/kamxsh-24",
    description: "Repository hub showcasing full-stack MERN portals, Playwright automation test suites, and frontend projects.",
    icon: "Github",
    accent: "#D4AF37",
    badge: "Open Source"
  }
];
