import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CharacterSwapProps {
  text: string;
  className?: string;
  delay?: number;
  swapDuration?: number;
}

const CharacterSwap: React.FC<CharacterSwapProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  swapDuration = 50 
}) => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Characters to swap through during animation
  const swapCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  
  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      const textArray = text.split('');
      
      // Initialize with random characters (except spaces)
      const initialDisplay = textArray.map(char => 
        char === ' ' ? ' ' : swapCharacters[Math.floor(Math.random() * swapCharacters.length)]
      );
      setDisplayText(initialDisplay);

      // Reveal each character one by one
      textArray.forEach((char, index) => {
        const revealDelay = delay + (index * swapDuration);
        
        // Skip spaces immediately
        if (char === ' ') {
          setTimeout(() => {
            setDisplayText(prev => {
              const newText = [...prev];
              newText[index] = ' ';
              return newText;
            });
          }, revealDelay);
          return;
        }

        // Swap through random characters before revealing the correct one
        let swapCount = 0;
        const maxSwaps = 6 + Math.floor(Math.random() * 4); // Random number of swaps

        const swapInterval = setInterval(() => {
          setDisplayText(prev => {
            const newText = [...prev];
            if (swapCount < maxSwaps) {
              // Random character during swapping
              newText[index] = swapCharacters[Math.floor(Math.random() * swapCharacters.length)];
              swapCount++;
            } else {
              // Reveal the correct character
              newText[index] = char;
              clearInterval(swapInterval);
              
              // Check if all characters are revealed
              if (index === textArray.length - 1) {
                setTimeout(() => setIsAnimating(false), 300);
              }
            }
            return newText;
          });
        }, 40); // Faster swapping for smoother effect

        // Start the swapping after the delay
        setTimeout(() => {
          // Interval will start swapping immediately
        }, revealDelay);
      });
    };

    const timer = setTimeout(startAnimation, 100);
    return () => clearTimeout(timer);
  }, [text, delay, swapDuration]);

  return (
    <div className={`${className} leading-tight`}>
      <AnimatePresence>
        {displayText.map((char, index) => (
          <motion.span
            key={`${index}-${char}`}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.4,
              delay: (delay + index * 30) / 1000,
              ease: "easeOut"
            }}
            className={`inline-block ${char === ' ' ? 'w-[0.25em]' : ''} ${
              isAnimating ? 'text-primary opacity-90' : 'text-foreground'
            } transition-all duration-500 transform`}
            style={{
              letterSpacing: char === ' ' ? 'normal' : '-0.02em',
              fontWeight: 'inherit',
              fontFamily: 'inherit',
              wordBreak: 'break-word'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CharacterSwap;
