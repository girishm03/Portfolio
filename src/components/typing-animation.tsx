"use client";

import React, { useState, useEffect } from 'react';

const defaultRoles = ["Python Developer", "Backend Engineer", "Web Developer"];

interface TypingAnimationProps {
  roles?: string[];
}

export function TypingAnimation({ roles = defaultRoles }: TypingAnimationProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const ticker = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <span>
      {text}
      <span className="animate-ping">|</span>
    </span>
  );
}
