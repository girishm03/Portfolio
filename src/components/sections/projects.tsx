"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ShieldCheck, Layers, Terminal, Sparkles, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { defaultProjects, type ProjectItem } from "@/lib/data";
import { ProjectDetailModal } from "./project-detail-modal";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { DecryptText } from "@/components/ui/decrypt-text";

const categories = ["All", "Cybersecurity", "Full Stack", "Frontend & Utilities"] as const;
type CategoryFilter = (typeof categories)[number];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = defaultProjects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const getCategoryIcon = (category: ProjectItem["category"]) => {
    switch (category) {
      case "Cybersecurity":
        return <ShieldCheck className="h-3.5 w-3.5 mr-1 text-emerald-500" />;
      case "Full Stack":
        return <Layers className="h-3.5 w-3.5 mr-1 text-sky-500" />;
      case "Frontend & Utilities":
        return <Terminal className="h-3.5 w-3.5 mr-1 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 text-xs sm:text-sm font-medium transition-all ${
              activeCategory === cat
                ? "shadow-md shadow-primary/25"
                : "hover:bg-muted"
            }`}
          >
            {cat === "All" ? "All Projects" : cat}
            {cat === "All" && (
              <span className="ml-1.5 rounded-full bg-primary-foreground/20 px-1.5 py-0.2 text-[10px]">
                {defaultProjects.length}
              </span>
            )}
          </Button>
        ))}
      </div>

      {/* Projects Grid with 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <TiltCard key={project.title} maxTilt={6} glareEffect={true} className="h-full">
            <Card
              className="group flex flex-col h-full overflow-hidden border border-border/80 bg-card/75 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl relative"
            >
              {/* Animation 3: Glowing Border Beam on featured projects */}
              {project.featured && <BorderBeam duration={7} />}

              {/* Project Image Preview with Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted/60 border-b border-border/60">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} preview screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority={project.featured}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Category Tag */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 backdrop-blur-md border border-border/80 text-foreground text-xs font-medium py-1 px-2.5 shadow-sm flex items-center"
                  >
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground text-[10px] font-semibold py-0.5 px-2 flex items-center gap-1 shadow-sm">
                      <Sparkles className="h-3 w-3" /> Featured
                    </Badge>
                  )}
                </div>
              </div>

              {/* Content Header & Body */}
              <CardHeader className="space-y-1.5 pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight font-headline group-hover:text-primary transition-colors">
                    <DecryptText text={project.title} speed={20} />
                  </CardTitle>
                </div>
                {project.subtitle && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/90">
                    {project.subtitle}
                  </p>
                )}
              </CardHeader>

              <CardContent className="flex-grow space-y-4 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies Pills */}
                <div className="pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Technologies & Tools
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies
                      .split(",")
                      .map((tech) => tech.trim())
                      .map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs py-0.5 px-2 bg-muted/40 font-mono border-border/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                  </div>
                </div>
              </CardContent>

              {/* Card Footer with Live Demo, Deep Dive, and GitHub */}
              <CardFooter className="pt-4 border-t border-border/50 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 bg-muted/20">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="font-medium text-xs text-primary hover:text-primary hover:bg-primary/10 gap-1.5 px-2.5"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Case Study
                </Button>

                <div className="flex items-center gap-2 ml-auto w-full sm:w-auto justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-medium text-xs hover:border-primary/50"
                    asChild
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Code
                    </Link>
                  </Button>

                  <Button
                    size="sm"
                    className="font-medium text-xs shadow-sm hover:shadow-primary/20 relative overflow-hidden group"
                    asChild
                  >
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      Live Demo
                      {/* Button Shimmer */}
                      <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TiltCard>
        ))}
      </div>

      {/* Deep Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
