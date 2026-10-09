"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Activity, Lock, Radio, Terminal } from "lucide-react";

export function SocTelemetryTicker() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toTimeString().split(" ")[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const feedItems = [
    { label: "SOC STATUS", val: "ACTIVE DEFENSE", icon: <ShieldCheck className="h-3 w-3 text-emerald-400" /> },
    { label: "PACKET INSPECTION", val: "NOMINAL (0 THREATS)", icon: <Activity className="h-3 w-3 text-sky-400" /> },
    { label: "ENCRYPTION", val: "TLS 1.3 / AES-256", icon: <Lock className="h-3 w-3 text-teal-400" /> },
    { label: "FRAMEWORK", val: "MITRE ATT&CK ALIGNED", icon: <Radio className="h-3 w-3 text-purple-400" /> },
    { label: "INGESTION STREAM", val: "REAL-TIME LOG SYNC", icon: <Terminal className="h-3 w-3 text-emerald-400" /> },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl bg-card/40 border border-border/60 backdrop-blur-md px-3 py-2 flex items-center gap-3 text-[11px] font-mono text-muted-foreground shadow-sm">
      {/* Live Badge */}
      <div className="flex items-center gap-2 shrink-0 border-r border-border/80 pr-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px]">
          LIVE TELEMETRY
        </span>
        {time && <span className="text-muted-foreground/60 hidden sm:inline">[{time} UTC]</span>}
      </div>

      {/* Marquee Ticker Stream */}
      <div className="relative overflow-hidden w-full">
        <div className="flex items-center gap-6 whitespace-nowrap animate-marquee-2 hover:[animation-play-state:paused]">
          {[...feedItems, ...feedItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 shrink-0">
              {item.icon}
              <span className="text-foreground/80 font-medium">{item.label}:</span>
              <span className="text-emerald-400 font-bold">{item.val}</span>
              <span className="text-border pl-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
