"use client";

import { Award, Calendar, GraduationCap, School, CheckCircle2, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import { defaultEducation } from "@/lib/data";

export function Education() {
  const education = defaultEducation;

  return (
    <div className="relative max-w-4xl mx-auto py-4">
      {/* Central Illuminated Neon Circuit Line */}
      <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-emerald-500 via-primary to-sky-500 shadow-[0_0_10px_#22c55e]">
        {/* Animated Traveling Energy Pulse */}
        <div className="absolute top-0 -left-1 w-2.5 h-8 bg-emerald-400 rounded-full blur-[2px] animate-[bounce_4s_infinite]" />
      </div>

      <div className="space-y-12">
        {education.map((edu, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                isEven ? "sm:flex-row-reverse" : ""
              } gap-6 sm:gap-12 pl-10 sm:pl-0`}
            >
              {/* Circuit Node Pin */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2 z-20">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-emerald-400 opacity-75"></span>
                  <div className="relative h-6 w-6 rounded-full bg-background border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_12px_#22c55e]">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Card Container (Takes 50% on desktop) */}
              <div className="w-full sm:w-[calc(50%-2rem)]">
                <TiltCard maxTilt={5} glareEffect={true}>
                  <Card className="border border-border/80 bg-card/80 backdrop-blur-md hover:border-primary/60 transition-all duration-300 shadow-xl overflow-hidden group">
                    <CardHeader className="pb-3 text-left">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1.5 text-xs font-mono py-0.5 px-2.5 bg-emerald-950/30 text-emerald-400 border border-emerald-500/30"
                        >
                          <Zap className="h-3 w-3 text-emerald-400" />
                          MILESTONE 0{index + 1}
                        </Badge>
                        <Badge variant="outline" className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.year}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                          {index === 0 ? (
                            <Award className="h-5 w-5" />
                          ) : index === 1 ? (
                            <GraduationCap className="h-5 w-5" />
                          ) : (
                            <School className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg sm:text-xl font-bold font-headline text-foreground leading-snug group-hover:text-primary transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-xs font-semibold text-primary/90 mt-0.5">
                            {edu.institution}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 text-left">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </div>

              {/* Empty space for symmetric balance on desktop */}
              <div className="hidden sm:block w-[calc(50%-2rem)]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
