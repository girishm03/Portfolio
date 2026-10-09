"use client";

import Link from "next/link";
import { Github, GitBranch, GitCommit, Star, ExternalLink, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function GithubStats() {
  const highlights = [
    {
      title: "Active Repositories",
      value: "5+ Core Repos",
      desc: "Full-Stack & Cyber Defense",
      icon: <GitBranch className="h-4 w-4 text-emerald-400" />,
    },
    {
      title: "Primary Stacks",
      value: "Python & TS/JS",
      desc: "Django, React, Next.js",
      icon: <Code2 className="h-4 w-4 text-sky-400" />,
    },
    {
      title: "Security Telemetry",
      value: "SOC Aligned",
      desc: "MITRE ATT&CK & Web Crypto",
      icon: <Terminal className="h-4 w-4 text-amber-400" />,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 shadow-lg text-left">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-border/60">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Github className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold font-headline text-foreground">
              GitHub Engineering & Activity
            </h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Explore open-source code repositories, commit history, and application architectures.
          </p>
        </div>

        <Button asChild variant="outline" size="sm" className="gap-2 text-xs w-fit">
          <Link href="https://github.com/girishm03" target="_blank" rel="noopener noreferrer">
            <Github className="h-3.5 w-3.5" />
            <span>@girishm03 on GitHub</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </Link>
        </Button>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-muted/40 border border-border/50 flex items-start gap-3.5"
          >
            <div className="p-2 rounded-lg bg-background border border-border/60 mt-0.5">
              {h.icon}
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">{h.title}</p>
              <p className="text-base font-bold text-foreground font-headline">{h.value}</p>
              <p className="text-[11px] text-muted-foreground/80">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
