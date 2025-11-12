"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/typing-animation";
import { defaultData } from "@/lib/data";

export function Hero() {
  const { hero, images } = defaultData;

  const profileImageUrl = images.profile;
  const heroBgImageUrl = images.heroBg;

  const roles = [
      "Python Developer",
      "Full Stack Developer",
      "Cyber Security Analyst",
      "BCA Graduate",
      "Django Developer",
      "Web Developer",
      "Front-end Developer"
  ]

  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center">
      {heroBgImageUrl && (
        <Image
          src={heroBgImageUrl}
          alt="Hero background"
          fill
          className="object-cover object-center -z-10 brightness-50"
          priority
        />
      )}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center text-white">
          {profileImageUrl && (
            <Image
              src={profileImageUrl}
              alt="Profile portrait"
              width={150}
              height={150}
              className="rounded-full aspect-square object-cover border-4 border-primary/50 shadow-lg"
              priority
            />
          )}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              {hero.name}
            </h1>
            <div className="mx-auto max-w-[700px] text-primary md:text-xl">
              <TypingAnimation roles={roles} />
            </div>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
