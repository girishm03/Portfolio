"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Socials } from "./socials";
import { defaultData } from "@/lib/data";

export function About() {
  const { about } = defaultData;

  const personalInfo = [
    { label: "Email", value: about.email },
    { label: "Phone", value: about.phone },
    { label: "Date of Birth", value: about.dob },
    { label: "Location", value: about.location },
  ];

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">About Me</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground text-lg">
            {about.description1}
          </p>
           <p className="text-muted-foreground text-lg">
              {about.description2}
          </p>
        </div>
        <Button asChild>
          <Link href={about.resumeUrl} download="resume.pdf">Resume</Link>
        </Button>
      </div>
      <div className="space-y-8 md:pt-14">
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
