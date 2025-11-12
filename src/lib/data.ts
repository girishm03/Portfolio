import { PythonIcon, DjangoIcon, ReactIcon, FlaskIcon } from "@/components/icons";

export const projects = [
  {
    title: "E-commerce Analytics Dashboard",
    description: "A comprehensive analytics dashboard for an e-commerce platform, providing insights into sales, customer behavior, and product performance. Built with Django and React.",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    title: "Real-time Chat Application",
    description: "A scalable, real-time chat application using Django Channels for WebSocket handling and a clean, responsive frontend built with Next.js.",
    technologies: ["Python", "Django Channels", "Next.js", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    title: "Machine Learning API",
    description: "A RESTful API built with Flask to serve a pre-trained machine learning model for sentiment analysis. Optimized for high performance and scalability.",
    technologies: ["Python", "Flask", "Scikit-learn", "Docker", "Gunicorn"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    title: "Automated Web Scraper",
    description: "A robust web scraping solution developed with Scrapy and Selenium to gather and process data from various websites automatically.",
    technologies: ["Python", "Scrapy", "Selenium", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 95, icon: PythonIcon },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Django", level: 90, icon: DjangoIcon },
      { name: "Flask", level: 85, icon: FlaskIcon },
      { name: "React / Next.js", level: 75, icon: ReactIcon },
      { name: "Pandas & NumPy", level: 90 },
      { name: "Scikit-learn", level: 80 },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 70 },
      { name: "Docker", level: 85 },
      { name: "Git & GitHub", level: 95 },
      { name: "AWS", level: 65 },
    ],
  },
];
