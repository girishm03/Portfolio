"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/typing-animation";
import { usePortfolioStore } from "@/lib/portfolio-store";

export function Hero() {
  const { data: portfolioData, isInitialized } = usePortfolioStore();
  const { hero, images } = portfolioData;

  const profileImageUrl = images.profile;
  const heroBgImageUrl = images.heroBg;

  // Render skeleton or default while waiting for store to hydrate
  if (!isInitialized) {
    return (
      <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center bg-muted/40">
        <div className="container px-4 md:px-6 text-center">
            <div className="animate-pulse">
                <div className="mx-auto rounded-full bg-muted h-36 w-36 mb-4"></div>
                <div className="h-12 bg-muted rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-8 bg-muted rounded w-1/2 mx-auto"></div>
            </div>
        </div>
      </section>
    );
  }

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
              <TypingAnimation roles={[hero.title]} />
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
