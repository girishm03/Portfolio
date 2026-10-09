"use client";

import Link from "next/link";
import { FileText, Download, ShieldCheck, Code, GraduationCap, MapPin, Mail, Phone, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Socials } from "./socials";
import { CyberIdBadge } from "./cyber-badge";
import { DecryptText } from "@/components/ui/decrypt-text";
import { defaultData } from "@/lib/data";

export function About() {
  const { about } = defaultData;

  const highlights = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      title: "CICSA Certified",
      desc: "IT Infrastructure & Cyber SOC Analyst",
    },
    {
      icon: <Code className="h-5 w-5 text-sky-400" />,
      title: "Full-Stack Python",
      desc: "Django, React, RESTful APIs & DBs",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-amber-400" />,
      title: "BCA Graduate",
      desc: "Computer Science & Programming",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center space-y-12 max-w-5xl mx-auto">
      {/* Bio Header */}
      <div className="space-y-4 max-w-3xl">
        <Badge variant="outline" className="px-3 py-1 text-xs uppercase tracking-widest text-primary border-primary/30">
          <DecryptText text="PROFESSIONAL PROFILE // IDENTITY" speed={25} />
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
          About Me
        </h2>
        <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed pt-2">
          <p>{about.description1}</p>
          {about.description2 && <p>{about.description2}</p>}
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/80 shadow-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-muted/60 mb-3 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h4 className="font-semibold text-foreground text-base font-headline group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Info & Cyber ID Badge Grid */}
      <div className="grid gap-8 lg:grid-cols-12 w-full pt-8 border-t border-border/70 items-center text-left">
        {/* Left: Interactive 3D Cyber Security ID Badge */}
        <div className="lg:col-span-6 flex justify-center">
          <CyberIdBadge />
        </div>

        {/* Right: Resume Actions & Socials */}
        <div className="lg:col-span-6 space-y-6 bg-card/50 p-6 sm:p-8 rounded-3xl border border-border/70 backdrop-blur-md">
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs font-mono text-primary border-primary/30 py-0.5">
              CAREER DOSSIER
            </Badge>
            <h3 className="text-2xl font-bold font-headline text-foreground">
              Official Resume & Credentials
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore in-depth documentation of academic qualifications, certified cybersecurity competencies, hands-on engineering experience, and technical projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="gap-2 font-medium shadow-md shadow-primary/25 relative overflow-hidden group">
              <Link href={about.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                View Resume (PDF)
                <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2 font-medium">
              <Link href={about.resumeUrl} download="Resume_Girish-M.pdf">
                <Download className="h-4 w-4" />
                Download
              </Link>
            </Button>
          </div>

          <div className="pt-6 border-t border-border/50">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-mono">
              DIRECT CHANNELS & PROFILES
            </p>
            <div className="flex justify-start">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
