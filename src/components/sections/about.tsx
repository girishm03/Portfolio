import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Socials } from "./socials";

const personalInfo = [
  { label: "Email", value: "girishmadhu03@gmail.com" },
  { label: "Phone", value: "+91 1234567890" },
  { label: "Date of Birth", value: "Jan 1, 2000" },
  { label: "Location", value: "Your City, Your Country" },
];

export function About() {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">About Me</h2>
          <p className="text-muted-foreground text-lg">
            As a dedicated Python developer with over 5 years of experience, I specialize in crafting high-performance backend systems and scalable web applications. My journey in software development began with a fascination for automation, which quickly evolved into a passion for building solutions that are not only functional but also elegant and efficient.
          </p>
           <p className="text-muted-foreground text-lg">
              I thrive on challenges and am constantly exploring new technologies to enhance my skill set. When I'm not coding, you can find me contributing to open-source projects, exploring hiking trails, or diving into a good science fiction novel.
          </p>
        </div>
        <Button asChild>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</Link>
        </Button>
      </div>
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-headline">Personal Information</h3>
          <ul className="space-y-2 text-muted-foreground">
            {personalInfo.map(info => (
              <li key={info.label}>
                <span className="font-semibold text-foreground">{info.label}:</span> {info.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-headline">Connect with Me</h3>
          <Socials />
        </div>
      </div>
    </div>
  );
}
