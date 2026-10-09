"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShieldAlert, Cpu, Layers, CheckCircle2 } from "lucide-react";
import { type ProjectItem } from "@/lib/data";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const { deepDive } = project;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 bg-card/95 backdrop-blur-xl border border-border/80">
        <DialogHeader className="space-y-2 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-xs font-mono text-primary border-primary/40">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
                Featured Engineering
              </Badge>
            )}
          </div>
          <DialogTitle className="text-2xl font-bold font-headline">
            {project.title}
          </DialogTitle>
          {project.subtitle && (
            <DialogDescription className="text-xs font-semibold uppercase tracking-wider text-primary/90">
              {project.subtitle}
            </DialogDescription>
          )}
        </DialogHeader>

        {/* Modal Body */}
        <div className="space-y-6 pt-2">
          {/* Image banner */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border/60">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-1.5 flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" /> Architecture Overview
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {deepDive.overview}
            </p>
          </div>

          {/* STAR Method Breakdown */}
          <div className="p-4 rounded-xl bg-muted/30 border border-border/60 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Layers className="h-4 w-4" /> Engineering Impact (STAR Method)
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-foreground">Situation: </span>
                <span className="text-muted-foreground">{deepDive.situation}</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Task: </span>
                <span className="text-muted-foreground">{deepDive.task}</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Action: </span>
                <span className="text-muted-foreground">{deepDive.action}</span>
              </div>
              <div>
                <span className="font-semibold text-emerald-400">Result: </span>
                <span className="text-muted-foreground">{deepDive.result}</span>
              </div>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Layers className="h-4 w-4 text-sky-400" /> System Architecture & Implementation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              {deepDive.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Considerations */}
          <div className="space-y-2 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-emerald-400" /> Security & Defense Considerations
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              {deepDive.securityHighlights.map((sec, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/60">
            <Button variant="outline" asChild size="sm">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View GitHub Code
              </Link>
            </Button>
            <Button asChild size="sm" className="shadow-md shadow-primary/20">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Launch Live App
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
