import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-me-portrait');

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={400}
                height={400}
                data-ai-hint={aboutImage.imageHint}
                className="rounded-full aspect-square object-cover border-4 border-primary/20 shadow-lg"
              />
            )}
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              As a dedicated Python developer with over 5 years of experience, I specialize in crafting high-performance backend systems and scalable web applications. My journey in software development began with a fascination for automation, which quickly evolved into a passion for building solutions that are not only functional but also elegant and efficient.
            </p>
            <p>
              I thrive on challenges and am constantly exploring new technologies to enhance my skill set. When I'm not coding, you can find me contributing to open-source projects, exploring hiking trails, or diving into a good science fiction novel.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
