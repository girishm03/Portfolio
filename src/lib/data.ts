import { PythonIcon, DjangoIcon, ReactIcon, FlaskIcon } from "@/components/icons";

export const defaultData = {
  hero: {
    name: 'Girish M',
    tagline: 'Aspiring Python Developer | Interested in Cybersecurity | Building Secure and Efficient Applications.',
    roles: [
      "Python Developer",
      "Cyber Security Enthusiast",
      "Backend Engineer",
      "Django Developer",
      "Web Security Explorer"
    ]
  },
  about: {
    description1: "I am a passionate Python developer with a strong interest in building secure and efficient applications. I have hands-on experience in Python and a growing interest in cybersecurity, including network security and ethical hacking. I am continuously learning new technologies and improving my skills to develop reliable and secure software solutions.",
    description2: "",
    resumeUrl: '/resume.pdf',
    email: 'girishmadhu03@gmail.com',
    phone: '+91-8606888616',
    dob: '03/12/2001',
    location: 'Kottayam, Kerala, India',
  },
  images: {
    profile: '/profile.jpg',
    heroBg: '/background.jpg',
  },
  projects: [
      {
        title: "DONATION BOX",
        description: "A donation platform where you can either donate reusable items or provide financial assistance. It also features blogs, events, and a customized chatbot system for enhanced engagement. Events can be scheduled and done throughout the world like Blood donation camps or reusable item campaigns etc.",
        technologies: "Python, Django, SQLite, HTML, CSS, Bootstrap, JavaScript, GitHub",
        githubUrl: "https://github.com/girishm03/DONATION_BOX.git",
      },
      {
        title: "Project Game",
        description: "A e-commerce website that can buy games like GTA, PUBG, Minecraft etc.. for consoles like PlayStation, Nintendo and Xbox.",
        technologies: "Python, Django, SQLite, HTML, CSS, Bootstrap, JavaScript, GitHub",
        githubUrl: "https://github.com/girishm03/Project-Game.git",
      },
      {
        title: "Port Scanner",
        description: "A simple and lightweight Python-based port scanner that allows you to scan a target host for open TCP ports. Users can specify a range of ports to scan and/or have run in common ports , making it flexible for quick network checks or learning purposes.",
        technologies: "Python",
        githubUrl: "https://github.com/girishm03/Port-Scanner.git",
      },
      {
        title: "Basic Keylogger",
        description: "A basic keylogger project is a common beginner-level cybersecurity/Python project that helps you understand how keystroke logging works.",
        technologies: "Python",
        githubUrl: "https://github.com/girishm03/Basic_Keylogger.git",
      },
  ],
  education: [
      {
        degree: "Bachelor of Computer Application",
        institution: "Mahatma Gandhi University",
        year: "2020 - 2023",
        description: "Focused on Computer science, IT Applications and Programming. CGPA: 6",
      },
      {
        degree: "Python Full Stack Web Development",
        institution: "Luminar Technolab",
        year: "Jun/2023 - Jan/2024",
        description: "Skilled in building dynamic and responsive web applications using Python, Django, HTML, CSS, JavaScript, and modern frameworks. Proficient in both front-end and back-end development, database management, and API integration to deliver complete, scalable solutions.",
      },
      {
        degree: "Certified IT Infrastructure and Cyber SOC Analyst (CICSA)",
        institution: "RedTeam Hacker Academy",
        year: "Jan/25 - Jul/25",
        description: "Focused on securing digital systems through threat detection, vulnerability analysis, and real-time defense mechanisms. Experienced in ethical hacking concepts, network security, and implementing preventive measures to safeguard data and infrastructure.",
      }
  ],
  skills: [
      { name: "Python", level: 95, iconName: "PythonIcon" },
      { name: "Django", level: 90, iconName: "DjangoIcon" },
      { name: "HTML", level: 90, iconName: "" },
      { name: "CSS", level: 90, iconName: "" },
      { name: "Bootstrap", level: 85, iconName: "" },
      { name: "MySQL", level: 80, iconName: "" },
      { name: "JavaScript", level: 75, iconName: "" },
      { name: "GitHub", level: 95, iconName: "" },
      { name: "Rest API", level: 85, iconName: "" },
      { name: "Angular", level: 70, iconName: "" },
      { name: "Kali-Linux", level: 85, iconName: "" },
      { name: "Shodan", level: 70, iconName: "" },
      { name: "Nmap", level: 80, iconName: "" },
      { name: "Hydra", level: 75, iconName: "" },
      { name: "Penetration Testing", level: 80, iconName: "" },
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
        label: "Facebook",
        href: "https://www.facebook.com/share/1Rd79USn3Z/",
        iconName: "Facebook",
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
