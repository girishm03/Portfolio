"use client";

import React, { useState, useEffect, useRef } from "react";

const CYBER_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~0123456789ABCDEF";

interface DecryptTextProps {
  text: string;
  className?: string;
  speed?: number;
  triggerOnHover?: boolean;
}

export function DecryptText({
  text,
  className = "",
  speed = 30,
  triggerOnHover = true,
}: DecryptTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number | null>(null);

  const startScramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }

      iteration += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    // Initial reveal animation on mount
    startScramble();
  }, [text]);

  return (
    <span
      className={`inline-block cursor-default font-mono transition-colors ${className}`}
      onMouseEnter={() => {
        if (triggerOnHover) startScramble();
      }}
    >
      {displayText}
    </span>
  );
}
