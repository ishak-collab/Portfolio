
import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ 
  phrases, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 1500 
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setIsDeleting(true);
          setSpeed(pauseTime);
        } else {
          setSpeed(typingSpeed);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setSpeed(typingSpeed);
        } else {
          setSpeed(deletingSpeed);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, speed, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-cyan-400">
      {text}
      <span className="animate-pulse border-r-2 border-cyan-400 ml-1"></span>
    </span>
  );
};

export default TypingText;
