"use client";

import { Award, CheckCircle2, ShieldCheck, Calendar, Zap, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { defaultCertifications } from "@/lib/data";

function VerifiedSealStamp({ text }: { text: string }) {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center select-none pointer-events-none">
      {/* Outer Rotating Neon Laser Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400 animate-[spin_18s_linear_infinite] opacity-70" />

      {/* Inner Glowing Badge Core */}
      <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-emerald-950/80 border-2 border-emerald-400 flex flex-col items-center justify-center shadow-[0_0_15px_#22c55e] text-center p-1">
        <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
        <span className="text-[7px] font-mono font-bold text-emerald-300 leading-none mt-0.5 tracking-tighter uppercase">
          VERIFIED
        </span>
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto mt-8">
      <div className="text-left mb-6">
        <h3 className="text-xl font-bold font-headline flex items-center gap-2 text-foreground">
          <ShieldAlert className="h-5 w-5 text-emerald-400" />
          Verified Cybersecurity & Engineering Certifications
        </h3>
        <p className="text-xs text-muted-foreground mt-1 font-mono">
          OFFICIAL CREDENTIALS ISSUED BY ACCREDITED SECURITY TRAINING INSTITUTIONS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {defaultCertifications.map((cert, index) => (
          <TiltCard key={index} maxTilt={6} glareEffect={true} className="h-full">
            <Card
              className="border border-border/80 bg-card/80 backdrop-blur-md hover:border-primary/60 transition-all duration-300 shadow-xl text-left flex flex-col justify-between h-full relative overflow-hidden group"
            >
              {/* Rotating Border Beam for primary certification */}
              {index === 0 && <BorderBeam duration={8} />}

              <CardHeader className="space-y-3 pb-3 relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant="outline"
                        className="bg-emerald-950/40 text-emerald-400 border-emerald-500/40 text-[11px] font-mono py-0.5 px-2.5 flex items-center gap-1.5"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {cert.badge}
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {cert.issuedDate}
                      </span>
                    </div>

                    <CardTitle className="text-lg font-bold font-headline text-foreground leading-snug group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-semibold text-primary/90 mt-1">
                      {cert.issuer}
                    </CardDescription>
                  </div>

                  {/* Animation 5: Verified Laser Seal Hologram Stamp */}
                  <VerifiedSealStamp text={cert.badge} />
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0 relative z-10">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div className="pt-2 border-t border-border/60">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-2 font-mono">
                    COMPETENCIES TESTED & DEFENDED:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <Badge
                        key={sIdx}
                        variant="secondary"
                        className="text-[10px] font-mono py-0.5 px-2 bg-muted/60 text-muted-foreground border border-border/50 hover:border-emerald-500/40 hover:text-foreground transition-colors"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 mr-1 text-primary inline" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
