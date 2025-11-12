"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { defaultEducation } from "@/lib/data";


export function Education() {
  const education = defaultEducation;

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                <CardDescription className="text-md">{edu.institution}</CardDescription>
              </div>
              <p className="text-sm text-muted-foreground">{edu.year}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{edu.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
