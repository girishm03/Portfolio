import { PythonIcon, DjangoIcon, ReactIcon, FlaskIcon } from "@/components/icons";

export const defaultProjects = [
  {
    title: "E-commerce Analytics Dashboard",
    description: "A comprehensive analytics dashboard for an e-commerce platform, providing insights into sales, customer behavior, and product performance. Built with Django and React.",
    technologies: "Python, Django, React, PostgreSQL, Chart.js",
    githubUrl: "https://github.com",
  },
  {
    title: "Real-time Chat Application",
    description: "A scalable, real-time chat application using Django Channels for WebSocket handling and a clean, responsive frontend built with Next.js.",
    technologies: "Python, Django Channels, Next.js, Redis",
    githubUrl: "https://github.com",
  },
  {
    title: "Machine Learning API",
    description: "A RESTful API built with Flask to serve a pre-trained machine learning model for sentiment analysis. Optimized for high performance and scalability.",
    technologies: "Python, Flask, Scikit-learn, Docker, Gunicorn",
    githubUrl: "https://github.com",
  },
  {
    title: "Automated Web Scraper",
    description: "A robust web scraping solution developed with Scrapy and Selenium to gather and process data from various websites automatically.",
    technologies: "Python, Scrapy, Selenium, MongoDB",
    githubUrl: "https://github.com",
  },
];

export const defaultEducation = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    year: "2018 - 2020",
    description: "Focused on advanced algorithms, machine learning, and distributed systems. Thesis on scalable data processing pipelines.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "State University",
    year: "2014 - 2018",
    description: "Graduated with honors. Coursework included data structures, web development, and software architecture.",
  },
];

// Note: Icons can't be serialized in the same way, so we'll handle them separately
// in the component. We store the name and map it to the icon component.
export const defaultSkills = [
      { name: "Python", level: 95, iconName: "PythonIcon" },
      { name: "JavaScript", level: 80, iconName: "" },
      { name: "SQL", level: 85, iconName: "" },
      { name: "HTML/CSS", level: 90, iconName: "" },
      { name: "Django", level: 90, iconName: "DjangoIcon" },
      { name: "Flask", level: 85, iconName: "FlaskIcon" },
      { name: "React / Next.js", level: 75, iconName: "ReactIcon" },
      { name: "Pandas & NumPy", level: 90, iconName: "" },
      { name: "Scikit-learn", level: 80, iconName: "" },
      { name: "PostgreSQL", level: 90, iconName: "" },
      { name: "Redis", level: 70, iconName: "" },
      { name: "Docker", level: 85, iconName: "" },
      { name: "Git & GitHub", level: 95, iconName: "" },
      { name: "AWS", level: 65, iconName: "" },
];

export const defaultSocialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    iconName: "Linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    iconName: "Instagram",
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com",
    iconName: "Twitter",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/1234567890", // Example WhatsApp link
    iconName: "MessageSquare",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    iconName: "Github",
  },
];

export const skillsWithIcons = defaultSkills.map(skill => {
    switch (skill.iconName) {
        case "PythonIcon": return { ...skill, icon: PythonIcon };
        case "DjangoIcon": return { ...skill, icon: DjangoIcon };
        case "ReactIcon": return { ...skill, icon: ReactIcon };
        case "FlaskIcon": return { ...skill, icon: FlaskIcon };
        default: return { ...skill, icon: null };
    }
});
