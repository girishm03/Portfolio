"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, FileText, Send, Sparkles, ShieldCheck, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from "@/components/typing-animation";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { DecryptText } from "@/components/ui/decrypt-text";
import { defaultData } from "@/lib/data";

export function Hero() {
  const { hero, images, about } = defaultData;

  const profileImageUrl = images.profile;
  const heroBgImageUrl = images.heroBg;

  // Ensure on mount / reload, page starts at the top
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background with Darkened Cyber/Gradient Overlay */}
      {heroBgImageUrl && (
        <div className="absolute inset-0 -z-20">
          <Image
            src={heroBgImageUrl}
            alt="Hero background"
            fill
            className="object-cover object-center brightness-[0.18] saturate-150"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />
        </div>
      )}

      {/* Cyber ambient glow meshes */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Text & CTAs (Left-aligned) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Badge */}
            <Badge
              variant="outline"
              className="px-3.5 py-1.5 rounded-full border-primary/40 bg-background/80 backdrop-blur-md text-foreground shadow-sm flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide">
                <DecryptText text="Available for Full-time Roles & Projects" speed={25} />
              </span>
            </Badge>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-headline text-foreground leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary to-teal-300">
                  {hero.name}
                </span>
              </h1>

              {/* Roles Typing Animation in Terminal Capsule */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-muted/60 border border-border/80 text-primary font-mono text-base sm:text-xl font-bold shadow-sm">
                <Terminal className="h-4 w-4 text-emerald-400 shrink-0" />
                <TypingAnimation roles={hero.roles} />
              </div>

              {hero.tagline && (
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-2 max-w-xl">
                  {hero.tagline}
                </p>
              )}
            </div>

            {/* Quick Competency Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Badge variant="secondary" className="text-xs font-mono py-1 px-2.5 bg-emerald-950/20 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="h-3.5 w-3.5 mr-1 text-emerald-400 inline" />
                CICSA Certified Analyst
              </Badge>
              <Badge variant="secondary" className="text-xs font-mono py-1 px-2.5 bg-sky-950/20 text-sky-400 border border-sky-500/30">
                <Code2 className="h-3.5 w-3.5 mr-1 text-sky-400 inline" />
                Python Full-Stack
              </Badge>
              <Badge variant="secondary" className="text-xs font-mono py-1 px-2.5 bg-muted/60 text-muted-foreground border border-border/60">
                <Sparkles className="h-3.5 w-3.5 mr-1 text-primary inline" />
                5+ Live Deployed Projects
              </Badge>
            </div>

            {/* CTAs (Left-aligned with Shimmer & Ripple effect) */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button
                asChild
                size="lg"
                className="gap-2 shadow-lg shadow-primary/25 font-semibold text-sm relative overflow-hidden group"
              >
                <Link href="#projects">
                  <Sparkles className="h-4 w-4" />
                  Explore Projects
                  {/* Animation 6: Interactive Shimmer Light Streak */}
                  <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="gap-2 backdrop-blur-sm bg-background/60 font-medium text-sm hover:border-primary/50">
                <Link href={about.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 text-primary" />
                  Resume (PDF)
                </Link>
              </Button>

              <Button asChild variant="secondary" size="lg" className="gap-2 font-medium text-sm">
                <Link href="#contact">
                  <Send className="h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Square Profile Picture with 3D Tilt Card & Border Beam */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <TiltCard maxTilt={8} glareEffect={true} className="relative group">
              {/* Outer Glowing Neon Cyber Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-primary/30 to-sky-500/40 opacity-75 blur-xl group-hover:opacity-100 transition duration-700 -z-10" />

              {/* Square Cyber Frame Container */}
              <div className="relative p-2.5 rounded-3xl bg-card/85 backdrop-blur-xl border-2 border-border/80 group-hover:border-primary/60 transition-all duration-500 shadow-2xl overflow-hidden">
                
                {/* Animation 3: Glowing Laser Border Beam */}
                <BorderBeam duration={8} />

                {/* Cyber Corner Decals */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg z-20" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg z-20" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg z-20" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-emerald-400 rounded-br-lg z-20" />

                {/* Square Profile Image */}
                <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[360px] lg:h-[360px] rounded-2xl overflow-hidden bg-muted">
                  {profileImageUrl && (
                    <Image
                      src={profileImageUrl}
                      alt={`${hero.name} profile`}
                      fill
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 360px"
                      className="object-cover object-center filter saturate-[1.1] transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  )}
                  {/* Subtle bottom gradient tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1 (Bottom Left): Cyber SOC Analyst */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 z-20 animate-float pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background/95 backdrop-blur-md border border-emerald-500/40 shadow-xl text-xs font-semibold text-foreground">
                  <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider">Certified</p>
                    <p className="font-bold text-foreground">Cyber SOC Analyst</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 (Top Right): Full-Stack Python */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-6 z-20 animate-float [animation-delay:2s] pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background/95 backdrop-blur-md border border-sky-500/40 shadow-xl text-xs font-semibold text-foreground">
                  <div className="p-1 rounded-lg bg-sky-500/20 text-sky-400">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider">Engineering</p>
                    <p className="font-bold text-foreground">Python & React</p>
                  </div>
                </div>
              </div>

            </TiltCard>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors inline-flex flex-col items-center gap-1 text-xs"
            aria-label="Scroll to About section"
          >
            <span>Scroll Down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
