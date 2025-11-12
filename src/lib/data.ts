
import { PythonIcon, DjangoIcon, ReactIcon, FlaskIcon } from "@/components/icons";

export const defaultData = {
  hero: {
    name: 'Girish M',
  },
  about: {
    description1: "As a dedicated Python developer with over 5 years of experience, I specialize in crafting high-performance backend systems and scalable web applications. My journey in software development began with a fascination for automation, which quickly evolved into a passion for building solutions that are not only functional but also elegant and efficient.",
    description2: "I thrive on challenges and am constantly exploring new technologies to enhance my skill set. When I'm not coding, you can find me contributing to open-source projects, exploring hiking trails, or diving into a good science fiction novel.",
    resumeUrl: '/resume.pdf',
    email: 'girishmadhu03@gmail.com',
    phone: '+91 1234567890',
    dob: 'Jan 1, 2000',
    location: 'Your City, Your Country',
  },
  images: {
    profile: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjI4NjA5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    heroBg: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGFyayUyMGNvZGV8ZW58MHx8fHwxNzYyODQ4ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  projects: [
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
  ],
  education: [
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
      {
        degree: "Certified Python Developer (PCAP)",
        institution: "Python Institute",
        year: "2021",
        description: "PCAP – Certified Associate in Python Programming certification, demonstrating proficiency in Python programming.",
      }
  ],
  skills: [
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
  ],
  socials: [
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
  ],
};


export const defaultProjects = defaultData.projects;
export const defaultEducation = defaultData.education;
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
