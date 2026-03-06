"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter, MessageSquare, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { defaultSocialLinks } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Linkedin,
  Instagram,
  Twitter,
  MessageSquare,
  Github,
  Facebook,
  Send,
};

export function Socials() {
  const socialLinks = defaultSocialLinks || [];

  return (
    <div className="flex justify-center flex-wrap gap-4">
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
