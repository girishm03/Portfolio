"use client";

import React from "react";
import {
  ShieldCheck,
  ShieldAlert,
  Terminal,
  Activity,
  Radar,
  Lock,
  Key,
  Network,
  GitBranch,
  Github,
  Code2,
  Layout,
  Cpu,
  Layers,
  Palette,
  Server,
} from "lucide-react";
import {
  PythonIcon,
  DjangoIcon,
  ReactIcon,
  NextJsIcon,
  JavaScriptIcon,
  TailwindIcon,
  LinuxIcon,
  DatabaseIcon,
  FlaskIcon,
} from "@/components/icons";

interface SkillItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  colorClass: string;
  borderClass: string;
}

const lane1Skills: SkillItem[] = [
  {
    name: "SIEM Telemetry",
    category: "SOC Operations",
    icon: <ShieldAlert className="h-5 w-5 text-emerald-400" />,
    colorClass: "text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
  },
  {
    name: "Wireshark",
    category: "Packet Analysis",
    icon: <Activity className="h-5 w-5 text-sky-400" />,
    colorClass: "text-sky-400",
    borderClass: "hover:border-sky-500/50",
  },
  {
    name: "Kali Linux",
    category: "Security Testing",
    icon: <LinuxIcon className="h-5 w-5 text-purple-400" />,
    colorClass: "text-purple-400",
    borderClass: "hover:border-purple-500/50",
  },
  {
    name: "Nmap Scanner",
    category: "Network Recon",
    icon: <Radar className="h-5 w-5 text-emerald-400" />,
    colorClass: "text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
  },
  {
    name: "MITRE ATT&CK",
    category: "Tactical Defense",
    icon: <ShieldCheck className="h-5 w-5 text-teal-400" />,
    colorClass: "text-teal-400",
    borderClass: "hover:border-teal-500/50",
  },
  {
    name: "Vulnerability Auditing",
    category: "AppSec",
    icon: <Lock className="h-5 w-5 text-amber-400" />,
    colorClass: "text-amber-400",
    borderClass: "hover:border-amber-500/50",
  },
  {
    name: "Web Cryptography",
    category: "Entropy & CSPRNG",
    icon: <Key className="h-5 w-5 text-cyan-400" />,
    colorClass: "text-cyan-400",
    borderClass: "hover:border-cyan-500/50",
  },
  {
    name: "Incident Triage",
    category: "SOC Tier 1/2",
    icon: <Layers className="h-5 w-5 text-rose-400" />,
    colorClass: "text-rose-400",
    borderClass: "hover:border-rose-500/50",
  },
];

const lane2Skills: SkillItem[] = [
  {
    name: "Python",
    category: "Core Language",
    icon: <PythonIcon className="h-5 w-5 text-yellow-400" />,
    colorClass: "text-yellow-400",
    borderClass: "hover:border-yellow-500/50",
  },
  {
    name: "Django",
    category: "Backend Framework",
    icon: <DjangoIcon className="h-5 w-5 text-emerald-400" />,
    colorClass: "text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
  },
  {
    name: "RESTful APIs",
    category: "API Architecture",
    icon: <Network className="h-5 w-5 text-sky-400" />,
    colorClass: "text-sky-400",
    borderClass: "hover:border-sky-500/50",
  },
  {
    name: "MySQL",
    category: "Relational DB",
    icon: <DatabaseIcon className="h-5 w-5 text-blue-400" />,
    colorClass: "text-blue-400",
    borderClass: "hover:border-blue-500/50",
  },
  {
    name: "SQLite",
    category: "Embedded DB",
    icon: <DatabaseIcon className="h-5 w-5 text-cyan-400" />,
    colorClass: "text-cyan-400",
    borderClass: "hover:border-cyan-500/50",
  },
  {
    name: "Linux Shell & Bash",
    category: "Scripting & Ops",
    icon: <Terminal className="h-5 w-5 text-emerald-400" />,
    colorClass: "text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
  },
  {
    name: "Git & Version Control",
    category: "DevOps",
    icon: <GitBranch className="h-5 w-5 text-orange-400" />,
    colorClass: "text-orange-400",
    borderClass: "hover:border-orange-500/50",
  },
  {
    name: "Flask",
    category: "Microservices",
    icon: <FlaskIcon className="h-5 w-5 text-indigo-400" />,
    colorClass: "text-indigo-400",
    borderClass: "hover:border-indigo-500/50",
  },
];

const lane3Skills: SkillItem[] = [
  {
    name: "JavaScript (ES6+)",
    category: "Frontend Core",
    icon: <JavaScriptIcon className="h-5 w-5 text-yellow-400" />,
    colorClass: "text-yellow-400",
    borderClass: "hover:border-yellow-500/50",
  },
  {
    name: "React",
    category: "UI Architecture",
    icon: <ReactIcon className="h-5 w-5 text-cyan-400" />,
    colorClass: "text-cyan-400",
    borderClass: "hover:border-cyan-500/50",
  },
  {
    name: "Next.js",
    category: "Full-Stack React",
    icon: <NextJsIcon className="h-5 w-5 text-foreground" />,
    colorClass: "text-foreground",
    borderClass: "hover:border-primary/50",
  },
  {
    name: "Tailwind CSS",
    category: "Utility Styling",
    icon: <TailwindIcon className="h-5 w-5 text-sky-400" />,
    colorClass: "text-sky-400",
    borderClass: "hover:border-sky-500/50",
  },
  {
    name: "HTML5",
    category: "Semantic Web",
    icon: <Code2 className="h-5 w-5 text-orange-400" />,
    colorClass: "text-orange-400",
    borderClass: "hover:border-orange-500/50",
  },
  {
    name: "CSS3",
    category: "Layouts & Grid",
    icon: <Palette className="h-5 w-5 text-blue-400" />,
    colorClass: "text-blue-400",
    borderClass: "hover:border-blue-500/50",
  },
  {
    name: "GitHub Ecosystem",
    category: "CI/CD & Collaboration",
    icon: <Github className="h-5 w-5 text-foreground" />,
    colorClass: "text-foreground",
    borderClass: "hover:border-primary/50",
  },
  {
    name: "DOM & Web APIs",
    category: "Browser Engineering",
    icon: <Cpu className="h-5 w-5 text-emerald-400" />,
    colorClass: "text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
  },
];

function SkillCard({ skill }: { skill: SkillItem }) {
  return (
    <div
      className={`group flex items-center gap-3 px-4 py-3 rounded-2xl bg-card/75 border border-border/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-105 hover:bg-card hover:shadow-lg ${skill.borderClass} shrink-0 cursor-default select-none`}
    >
      <div className="p-2 rounded-xl bg-background/90 border border-border/60 group-hover:scale-110 transition-transform">
        {skill.icon}
      </div>
      <div className="text-left">
        <p className="text-sm font-bold font-headline text-foreground tracking-tight group-hover:text-primary transition-colors">
          {skill.name}
        </p>
        <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
          {skill.category}
        </p>
      </div>
    </div>
  );
}

function MarqueeLane({
  skills,
  animationClass,
}: {
  skills: SkillItem[];
  animationClass: string;
}) {
  // Double array to create seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-1.5">
      <div
        className={`flex items-center gap-4 w-max ${animationClass} hover:[animation-play-state:paused]`}
      >
        {duplicatedSkills.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="relative w-full max-w-7xl mx-auto space-y-6 overflow-hidden py-4">
      {/* Subtle edge fade overlays on left and right for seamless infinite flow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />

      {/* Lane 1: Cybersecurity & SOC Defense (Moving Left) */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between px-6 text-xs text-muted-foreground font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LANE 01 // CYBERSECURITY & SOC DEFENSE
          </span>
          <span className="text-[11px] text-muted-foreground/60 hidden sm:inline">
            Interactive Stream →
          </span>
        </div>
        <MarqueeLane skills={lane1Skills} animationClass="animate-marquee-1" />
      </div>

      {/* Lane 2: Backend, Systems & Databases (Moving Left in same direction) */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between px-6 text-xs text-muted-foreground font-mono">
          <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            LANE 02 // BACKEND, LOGIC & DATABASES
          </span>
          <span className="text-[11px] text-muted-foreground/60 hidden sm:inline">
            Interactive Stream →
          </span>
        </div>
        <MarqueeLane skills={lane2Skills} animationClass="animate-marquee-2" />
      </div>

      {/* Lane 3: Frontend & Modern Web (Moving Left in same direction) */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between px-6 text-xs text-muted-foreground font-mono">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            LANE 03 // FRONTEND & WEB ARCHITECTURES
          </span>
          <span className="text-[11px] text-muted-foreground/60 hidden sm:inline">
            Interactive Stream →
          </span>
        </div>
        <MarqueeLane skills={lane3Skills} animationClass="animate-marquee-3" />
      </div>

      <p className="text-center text-xs text-muted-foreground font-mono pt-4">
        Hover over any skill card to pause and inspect technologies
      </p>
    </div>
  );
}
