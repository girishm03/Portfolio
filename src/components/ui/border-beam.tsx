"use client";

import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
}

export function BorderBeam({
  className = "",
  size = 200,
  duration = 8,
}: BorderBeamProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden ${className}`}
    >
      <div
        className="absolute -inset-[100%] animate-[spin_8s_linear_infinite]"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 300deg, rgba(34, 197, 94, 0.9) 340deg, rgba(56, 189, 248, 1) 360deg)`,
        }}
      />
    </div>
  );
}
