import { PythonIcon, DjangoIcon, ReactIcon, FlaskIcon } from "@/components/icons";

export interface ProjectDeepDive {
  overview: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  architecture: string[];
  securityHighlights: string[];
}

export interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string;
  category: "Cybersecurity" | "Full Stack" | "Frontend & Utilities";
  technologies: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured?: boolean;
  deepDive: ProjectDeepDive;
}

export const defaultData = {
  hero: {
    name: 'Girish M',
    tagline: 'Cybersecurity Enthusiast & Full-Stack Developer specializing in secure web applications, SOC operations, and Python systems.',
    roles: [
      "Cyber SOC Analyst",
      "Python Full-Stack Developer",
      "Network & Web Security Enthusiast",
      "JavaScript & React Developer",
      "Building Resilient Systems"
    ]
  },
  about: {
    description1: "I am a dedicated Full-Stack Developer and Cyber SOC Analyst passionate about crafting secure, high-performance digital solutions. With expertise in Python, Django, modern JavaScript, and network defense architectures, I bridge the gap between robust software engineering and proactive threat mitigation.",
    description2: "Certified in IT Infrastructure and Cyber SOC Analysis (CICSA), I combine deep hands-on programming skills with defensive cybersecurity practices—ensuring applications are not just functional, but battle-tested and secure from the ground up.",
    resumeUrl: '/Resume_Girish-M.pdf',
    email: 'girishmadhu03@gmail.com',
    phone: '+91-8606888616',
    dob: '03/12/2001',
    location: 'Kottayam, Kerala, India',
    status: 'Actively Seeking Roles',
  },
  images: {
    profile: '/profile.jpg',
    heroBg: '/background.jpg',
  },
  certifications: [
    {
      title: "Certified IT Infrastructure & Cyber SOC Analyst (CICSA)",
      issuer: "RedTeam Hacker Academy",
      issuedDate: "2025",
      badge: "Verified Credential",
      description: "Rigorous offensive & defensive cybersecurity certification focusing on real-world SOC operations, incident triage, log correlation, and network defense.",
      skills: [
        "SIEM & Log Correlation",
        "Wireshark Packet Analysis",
        "Nmap Vulnerability Scanning",
        "Linux System Hardening",
        "Incident Triage & Response",
        "MITRE ATT&CK Framework",
      ],
    },
    {
      title: "Python Full Stack Web Development",
      issuer: "Luminar Technolab",
      issuedDate: "2024",
      badge: "Professional Certification",
      description: "Comprehensive software engineering program focused on backend web development, relational database architecture, and REST API systems.",
      skills: [
        "Python & Django",
        "MySQL / SQLite",
        "RESTful Web Services",
        "Frontend Integration",
        "Git & Deployment",
      ],
    },
  ],
  projects: [
    {
      title: "SOC Dashboard",
      subtitle: "Enterprise Threat Monitoring & Incident Response",
      description: "An interactive Security Operations Center (SOC) dashboard engineered for real-time cyber threat detection, incident severity tracking, log analytics, and network vulnerability telemetry with interactive data visualization.",
      category: "Cybersecurity",
      technologies: "React, TypeScript, Tailwind CSS, Recharts, Security Telemetry, Vercel",
      githubUrl: "https://github.com/girishm03/SOC-Dashboard.git",
      liveUrl: "https://soc-dashboard-peach.vercel.app/",
      imageUrl: "/projects/soc-dashboard.png",
      featured: true,
      deepDive: {
        overview: "A specialized Security Operations Center interface designed to monitor real-time network alerts, categorize security incidents by severity, and visualize threat trends.",
        situation: "Security operations teams struggle with alert fatigue and high cognitive load when navigating dense, unstructured security log streams.",
        task: "Architect an intuitive, high-performance telemetry dashboard that presents security alerts, threat severity matrices, and system health status cleanly.",
        action: "Developed a reactive React/TypeScript interface using Recharts for visual telemetry, implemented priority filtering (Critical, High, Medium, Low), and structured logs according to MITRE ATT&CK tactical concepts.",
        result: "Delivered a responsive monitoring console with 60fps chart rendering, instant alert filtering, and clear incident drill-down workflows.",
        architecture: [
          "State management for simulated live security telemetry streams",
          "Data-driven Recharts dashboard displaying incident distributions",
          "Component-based responsive UI with dark cybersecurity aesthetic",
        ],
        securityHighlights: [
          "MITRE ATT&CK tactical classification alignment",
          "Automated incident severity categorization & visual alerts",
          "Safe state evaluation preventing script injection in log viewers",
        ],
      },
    },
    {
      title: "StoryForge Blog Platform",
      subtitle: "AI-Powered Content & Publishing Suite",
      description: "A modern full-stack blogging ecosystem integrating AI-assisted writing, markdown content publishing, responsive reading layouts, topic exploration, and dynamic author workflow features.",
      category: "Full Stack",
      technologies: "Next.js, React, Tailwind CSS, Google AI Studio, TypeScript, Markdown",
      githubUrl: "https://github.com/girishm03/StoryForge.git",
      liveUrl: "https://storyforge-app.ai.studio/",
      imageUrl: "/projects/blog-website.jpg",
      featured: true,
      deepDive: {
        overview: "An AI-enhanced blogging platform that provides intelligent writing suggestions, instant content structuring, and rich Markdown publishing.",
        situation: "Content creators often face friction switching between separate AI drafting assistants and markdown publishing CMS platforms.",
        task: "Engineer a unified web platform that integrates generative AI prompts with an interactive markdown editor and publishing workflow.",
        action: "Built a Next.js application utilizing Google AI Studio APIs for automated title generation and content expansion, paired with a sanitized Markdown renderer.",
        result: "Cut drafting and formatting time significantly with fast server-side rendered pages and clean responsive typography.",
        architecture: [
          "Next.js App Router with server-side and client-side component separation",
          "AI Studio API integration for prompt-based content structuring",
          "Markdown AST parsing with syntax highlighting",
        ],
        securityHighlights: [
          "Sanitized Markdown parsing preventing Stored XSS vectors",
          "Server-side API key containment protecting LLM credentials",
          "Input validation and rate-limiting safeguards",
        ],
      },
    },
    {
      title: "CyberShield Password Suite",
      subtitle: "Entropy Analyzer & Cryptographic Generator",
      description: "An advanced browser-based security utility featuring real-time entropy calculation, dictionary/pattern vulnerability detection, crack-time estimations, and cryptographically secure random password generation.",
      category: "Cybersecurity",
      technologies: "JavaScript, HTML5, CSS3, Web Crypto API, Security Entropy Algorithms",
      githubUrl: "https://github.com/girishm03/Password-Strength-Checker-Secure-Password-Generator-.git",
      liveUrl: "https://cybershield-password-suite.vercel.app/",
      imageUrl: "/projects/password-strength-checker.png",
      featured: false,
      deepDive: {
        overview: "A cryptographic utility evaluating password entropy, common pattern vulnerabilities, and generating unguessable credentials directly in the browser.",
        situation: "Weak credentials account for over 80% of web authentication breaches, yet users often misunderstand password complexity versus true entropy.",
        task: "Create a 100% offline, privacy-first security tool calculating Shannon entropy, estimating brute-force cracking time, and generating random tokens.",
        action: "Implemented entropy calculation algorithms, dictionary pattern matching, and the Web Cryptography API (`crypto.getRandomValues`) for unguessable random character pools.",
        result: "Achieved immediate interactive entropy feedback without transmitting a single byte of plain text across the network.",
        architecture: [
          "Client-side algorithmic evaluation engine",
          "Web Crypto API (CSPRNG) cryptographic randomizer",
          "Responsive, zero-dependency visual interface",
        ],
        securityHighlights: [
          "Zero Network Leaks: All evaluation executed strictly on client machine",
          "CSPRNG: Cryptographically secure pseudorandom number generation",
          "NIST SP 800-63B alignment: Measures entropy rather than simple symbol counting",
        ],
      },
    },
    {
      title: "Currency Converter",
      subtitle: "Real-Time Multi-Currency Exchange Engine",
      description: "A fast, responsive currency exchange platform with live API foreign exchange rates, dynamic search filtering, bi-directional calculation, and historical rate comparison.",
      category: "Frontend & Utilities",
      technologies: "JavaScript, REST API Integration, HTML5, Modern CSS, Responsive Design",
      githubUrl: "https://github.com/girishm03/Currency-Converter.git",
      liveUrl: "https://currency-converter-five-lemon.vercel.app/",
      imageUrl: "/projects/currency-converter.png",
      featured: false,
      deepDive: {
        overview: "A real-time financial utility providing accurate, live foreign exchange rate calculations across global fiat currencies.",
        situation: "Users traveling or trading internationally need immediate, reliable exchange calculations without cluttered interfaces or ad bloat.",
        task: "Build a lightweight web application that integrates a live exchange rate API with instant calculations and search filters.",
        action: "Engineered an asynchronous API client with caching, input validation, and bidirectional currency switching.",
        result: "Provided instantaneous currency calculations across 150+ currencies with high uptime and graceful fallback error states.",
        architecture: [
          "Asynchronous fetch client syncing with exchange rate endpoints",
          "Client-side caching layer reducing redundant API requests",
          "Mobile-responsive UI designed for quick one-handed input",
        ],
        securityHighlights: [
          "Strict input sanitization preventing numerical injection bugs",
          "Safe error handling boundaries on network failure",
          "Content Security Policy (CSP) compliant structure",
        ],
      },
    },
    {
      title: "JavaScript Advanced Suite",
      subtitle: "Interactive Algorithmic & UI Component Lab",
      description: "A comprehensive showcase of hands-on JavaScript engineering spanning DOM manipulation architectures, asynchronous API clients, mini-games, dynamic widgets, and state management patterns.",
      category: "Frontend & Utilities",
      technologies: "Modern JavaScript (ES6+), DOM APIs, CSS Grid/Flexbox, GitHub Pages",
      githubUrl: "https://github.com/girishm03/JavaScript-Projects.git",
      liveUrl: "https://girishm03.github.io/JavaScript-Projects/",
      imageUrl: "/projects/javascript-projects.png",
      featured: false,
      deepDive: {
        overview: "A multi-project laboratory demonstrating core JavaScript fundamentals, algorithm implementations, and pure DOM engineering without third-party frameworks.",
        situation: "Framework-only developers frequently lack understanding of the underlying browser event loops, DOM performance, and raw JavaScript APIs.",
        task: "Develop a suite of standalone interactive applications illustrating diverse concepts like timers, asynchronous fetch, algorithmic games, and DOM state.",
        action: "Authored modular vanilla JavaScript applications using ES6 modules, event delegation, and CSS animations.",
        result: "Showcases strong foundational programming, clean architecture, and mastery of vanilla web technologies.",
        architecture: [
          "Modular architecture with ES6 class structures",
          "Efficient event delegation minimizing DOM event listeners",
          "Semantic HTML5 & modern CSS design systems",
        ],
        securityHighlights: [
          "Safe DOM manipulation: strict avoidance of dangerous `innerHTML` sinks",
          "Defensive programming practices with input boundary validation",
        ],
      },
    },
  ] as ProjectItem[],
  education: [
    {
      degree: "Certified IT Infrastructure & Cyber SOC Analyst (CICSA)",
      institution: "RedTeam Hacker Academy",
      year: "Jan 2025 - Jul 2025",
      description: "Specialized in Security Operations Center workflows, SIEM telemetry, threat hunting, vulnerability assessments, network packet inspection, and active incident response defense.",
    },
    {
      degree: "Python Full Stack Web Development",
      institution: "Luminar Technolab",
      year: "Jun 2023 - Jan 2024",
      description: "Mastered full-stack web engineering with Python & Django, relational databases (MySQL, SQLite), RESTful API design, responsive frontend systems, and Git version control.",
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Mahatma Gandhi University",
      year: "2020 - 2023",
      description: "Core computer science fundamentals, data structures, algorithms, object-oriented programming, software engineering paradigms, and networking principles.",
    },
  ],
  skills: [
    { name: "Python", level: 95, iconName: "PythonIcon", category: "Backend & Core" },
    { name: "Django", level: 90, iconName: "DjangoIcon", category: "Backend & Core" },
    { name: "JavaScript (ES6+)", level: 85, iconName: "", category: "Frontend" },
    { name: "React / Next.js", level: 85, iconName: "ReactIcon", category: "Frontend" },
    { name: "REST APIs", level: 90, iconName: "", category: "Backend & Core" },
    { name: "HTML5 / CSS3", level: 95, iconName: "", category: "Frontend" },
    { name: "Tailwind CSS", level: 90, iconName: "", category: "Frontend" },
    { name: "MySQL / SQLite", level: 85, iconName: "", category: "Databases" },
    { name: "Git / GitHub", level: 95, iconName: "", category: "DevOps & Tools" },
    { name: "SOC Telemetry & SIEM", level: 85, iconName: "", category: "Cybersecurity" },
    { name: "Wireshark & Packet Analysis", level: 85, iconName: "", category: "Cybersecurity" },
    { name: "Nmap & Network Scanning", level: 85, iconName: "", category: "Cybersecurity" },
    { name: "Kali Linux", level: 90, iconName: "", category: "Cybersecurity" },
    { name: "Vulnerability Assessment", level: 80, iconName: "", category: "Cybersecurity" },
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/girish-m-0b626727b",
      iconName: "Linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/girishm03",
      iconName: "Github",
    },
    {
      label: "Email",
      href: "mailto:girishmadhu03@gmail.com",
      iconName: "Mail",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/918606888616",
      iconName: "MessageSquare",
    },
    {
      label: "Twitter",
      href: "https://x.com/Girish_M20?s=09",
      iconName: "Twitter",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/limbr0?igsh=MWd5N3A3N3Y5Znk1aQ==",
      iconName: "Instagram",
    },
    {
      label: "Telegram",
      href: "https://t.me/girish_m24",
      iconName: "Send",
    },
  ],
};

export const defaultProjects = defaultData.projects;
export const defaultEducation = defaultData.education;
export const defaultCertifications = defaultData.certifications;
export const defaultSkills = defaultData.skills;
export const defaultSocialLinks = defaultData.socials;

export const skillsWithIcons = defaultSkills.map(skill => {
  switch (skill.iconName) {
    case "PythonIcon": return { ...skill, icon: PythonIcon };
    case "DjangoIcon": return { ...skill, icon: DjangoIcon };
    case "ReactIcon": return { ...skill, icon: ReactIcon };
    case "FlaskIcon": return { ...skill, icon: FlaskIcon };
    default: return { ...skill, icon: null };
  }
});
