"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Copy, Check, QrCode, Terminal, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { defaultData } from "@/lib/data";

export function CyberIdBadge() {
  const { hero, images, about } = defaultData;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  return (
    <TiltCard maxTilt={8} glareEffect={true} className="w-full max-w-md mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-b from-card/95 to-background border-2 border-border/80 p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden text-left">
        {/* Glowing Laser Border Beam */}
        <BorderBeam duration={9} />

        {/* Lanyard Clip Cutout Graphic */}
        <div className="mx-auto w-14 h-3 rounded-full bg-zinc-950/90 border border-border/80 mb-4 shadow-inner" />

        {/* Badge Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-border/60">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest leading-none">
                SECURITY ACCESS ID
              </p>
              <p className="text-xs font-bold text-foreground font-headline">
                SOC DEFENSE OPERATIVE
              </p>
            </div>
          </div>

          <Badge
            variant="outline"
            className="text-[10px] font-mono text-emerald-400 border-emerald-500/40 bg-emerald-950/40 py-0.5 px-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
            TIER-1 ACTIVE
          </Badge>
        </div>

        {/* Hologram Rainbow Strip */}
        <div className="h-1.5 w-full my-3 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 opacity-80" />

        {/* Operative Card Body */}
        <div className="flex items-start gap-4 pt-1">
          {/* Operative Photo */}
          <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-emerald-500/40 bg-muted shrink-0 shadow-md">
            <Image
              src={images.profile}
              alt="Operative portrait"
              fill
              className="object-cover object-center filter saturate-110"
            />
            <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 bg-background/90 text-center py-0.5 text-[9px] font-mono font-bold text-emerald-400 border-t border-emerald-500/30">
              AUTH // VERIFIED
            </div>
          </div>

          {/* Operative Telemetry Details */}
          <div className="space-y-2 text-xs font-mono flex-1">
            <div>
              <span className="text-[10px] text-muted-foreground uppercase block">OPERATIVE:</span>
              <span className="font-bold text-foreground text-sm font-headline tracking-wide">
                {hero.name}
              </span>
            </div>

            <div>
              <span className="text-[10px] text-muted-foreground uppercase block">SPECIALIZATION:</span>
              <span className="text-emerald-400 font-semibold text-[11px]">
                Cyber SOC Analyst & Full-Stack
              </span>
            </div>

            <div>
              <span className="text-[10px] text-muted-foreground uppercase block">CLEARANCE:</span>
              <span className="text-foreground text-[11px]">
                CICSA // RedTeam Academy
              </span>
            </div>

            <div>
              <span className="text-[10px] text-muted-foreground uppercase block">STATUS:</span>
              <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                OPEN TO WORK
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Copy-to-Clipboard Contact Rails */}
        <div className="mt-4 pt-3 border-t border-border/60 space-y-2">
          {/* Email Copy Row */}
          <button
            type="button"
            onClick={() => copyToClipboard(about.email, "email")}
            className="w-full flex items-center justify-between p-2 rounded-xl bg-muted/40 hover:bg-muted/80 border border-border/60 transition-all text-xs font-mono group"
          >
            <span className="text-muted-foreground text-[11px] truncate mr-2">
              EMAIL: <span className="text-foreground font-semibold">{about.email}</span>
            </span>
            <span className="shrink-0 flex items-center gap-1 text-[10px] font-bold text-primary">
              {copiedField === "email" ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Copied!
                </span>
              ) : (
                <span className="text-muted-foreground group-hover:text-primary flex items-center gap-1">
                  <Copy className="h-3 w-3" /> Copy
                </span>
              )}
            </span>
          </button>

          {/* Phone Copy Row */}
          <button
            type="button"
            onClick={() => copyToClipboard(about.phone, "phone")}
            className="w-full flex items-center justify-between p-2 rounded-xl bg-muted/40 hover:bg-muted/80 border border-border/60 transition-all text-xs font-mono group"
          >
            <span className="text-muted-foreground text-[11px] truncate mr-2">
              PHONE: <span className="text-foreground font-semibold">{about.phone}</span>
            </span>
            <span className="shrink-0 flex items-center gap-1 text-[10px] font-bold text-primary">
              {copiedField === "phone" ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Copied!
                </span>
              ) : (
                <span className="text-muted-foreground group-hover:text-primary flex items-center gap-1">
                  <Copy className="h-3 w-3" /> Copy
                </span>
              )}
            </span>
          </button>
        </div>

        {/* Security Barcode Footer */}
        <div className="mt-4 pt-2 border-t border-border/40 flex items-center justify-between text-[9px] font-mono text-muted-foreground/70">
          <span className="tracking-widest">||| | ||||| | || |||| | |||</span>
          <span className="text-emerald-400/80 font-bold">SEC-ID: GM-CICSA-2025</span>
        </div>
      </div>
    </TiltCard>
  );
}
