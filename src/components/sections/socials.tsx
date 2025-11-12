"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolioStore } from "@/lib/portfolio-store";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Linkedin,
  Instagram,
  Twitter,
  MessageSquare,
  Github,
};

export function Socials() {
  const { data: portfolioData } = usePortfolioStore();
  const socialLinks = portfolioData.socials || [];

  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((social) => {
        const Icon = iconMap[social.iconName];
        return (
            <Button key={social.label} variant="outline" size="icon" asChild>
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                {Icon && <Icon className="h-5 w-5" />}
                <span className="sr-only">{social.label}</span>
              </Link>
            </Button>
        )
      })}
    </div>
  );
}
