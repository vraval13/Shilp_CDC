'use client';

import { useEffect, useState } from 'react';

interface TypedMsgProps {
  words?: string[];
  speed?: number;
  delayBetween?: number;
}

export default function TypedMsg({
  words = ['Caring', 'Expert', 'Trusted'],
  speed = 100,
  delayBetween = 2000,
}: TypedMsgProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentWordIndex, isDeleting, words, speed, delayBetween]);

  return (
    <span className="text-accent font-bold">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
