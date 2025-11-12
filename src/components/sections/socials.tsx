import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    href: "https://www.linkedin.com",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.twitter.com",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://wa.me/1234567890", // Example WhatsApp link
    icon: MessageSquare,
    label: "WhatsApp",
  },
  {
    href: "https://github.com",
    icon: Github,
    label: "GitHub",
  },
];

export function Socials() {
  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((social) => (
        <Button key={social.label} variant="outline" size="icon" asChild>
          <Link href={social.href} target="_blank" rel="noopener noreferrer">
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
