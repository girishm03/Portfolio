"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { defaultData } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#education", label: "Qualifications", id: "education" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Header() {
  const { about } = defaultData;
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      // Scroll Spy
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-colors">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
              <Shield className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg tracking-tight font-headline">
              Girish<span className="text-primary">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav with Active Scroll Spy */}
          <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-primary/15 text-primary font-semibold shadow-sm"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2.5">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex items-center gap-1.5 font-medium border-border/80 hover:border-primary/50 text-xs shadow-sm relative overflow-hidden group"
          >
            <Link href={about.resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="h-3.5 w-3.5 text-primary" />
              Resume (PDF)
              {/* Subtle shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            </Link>
          </Button>

          <ThemeToggle />

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <div className="flex items-center space-x-2.5 mb-8">
                <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="font-bold text-lg font-headline">
                  Girish<span className="text-primary">.dev</span>
                </span>
              </div>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary/15 text-primary font-semibold"
                            : "text-foreground/80 hover:bg-muted"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
                <div className="pt-4 border-t mt-4">
                  <SheetClose asChild>
                    <Button asChild className="w-full justify-center gap-2 text-xs">
                      <Link href={about.resumeUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4" />
                        View Resume (PDF)
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Animation 4: Cyber Laser Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-border/40 overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-primary to-cyan-400 shadow-[0_0_10px_#22c55e]"
          style={{ width: `${scrollProgress}%`, transition: "width 0.1s ease-out" }}
        />
      </div>
    </header>
  );
}
