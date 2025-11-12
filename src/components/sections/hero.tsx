import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/typing-animation";
import { PlaceHolderImages } from "@/lib/placeholder-images";


export function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'about-me-portrait');
  const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center">
      {heroBgImage && (
        <Image
          src={heroBgImage.imageUrl}
          alt={heroBgImage.description}
          fill
          className="object-cover object-center -z-10 brightness-50"
          data-ai-hint={heroBgImage.imageHint}
        />
      )}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center text-white">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={150}
              height={150}
              data-ai-hint={profileImage.imageHint}
              className="rounded-full aspect-square object-cover border-4 border-primary/50 shadow-lg"
            />
          )}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Girish M
            </h1>
            <div className="mx-auto max-w-[700px] text-primary md:text-xl">
              <TypingAnimation />
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
