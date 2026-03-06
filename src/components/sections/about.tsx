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
    <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">About Me</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg">
            {about.description1}
          </p>
          {about.description2 && (
            <p className="text-muted-foreground text-lg">
              {about.description2}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <Button asChild>
            <Link href={about.resumeUrl} download="resume.pdf">Resume</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-2 w-full pt-12 border-t">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-headline">Personal Information</h3>
          <ul className="space-y-2 text-muted-foreground">
            {personalInfo.map((info) => (
              <li key={info.label}>
                <span className="font-semibold text-foreground">{info.label}:</span> {info.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-headline">Connect with Me</h3>
          <div className="flex justify-center">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
