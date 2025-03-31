import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const chars = "☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

interface GlitchProps {
  text: string;
  glitchDuration?: number;
  letterChangeInterval?: number;
  pauseBetweenGlitches?: number;
  glitchDelay?: number;
}

const GlitchText: React.FC<GlitchProps> = ({
  text,
  glitchDuration = 2000,
  letterChangeInterval = 150,
  pauseBetweenGlitches = 10000,
  glitchDelay = 10000,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let glitchTimeout: NodeJS.Timeout;

    const startGlitch = () => {
      setGlitching(true);
      const startTime = Date.now();
      interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= glitchDuration) {
          setDisplayText(text); // Restore original text
          setGlitching(false);
          clearInterval(interval);
          glitchTimeout = setTimeout(startGlitch, pauseBetweenGlitches); // Wait before next glitch
          return;
        }

        setDisplayText((prev) => {
          const arr = prev.split("");
          const randomIndices = Array.from(
            { length: Math.min(2, arr.length) },
            () => Math.floor(Math.random() * arr.length)
          );
          randomIndices.forEach((i) => {
            if (arr[i] !== " ")
              arr[i] = chars[Math.floor(Math.random() * chars.length)];
          });
          return arr.join("");
        });
      }, letterChangeInterval);
    };

    glitchTimeout = setTimeout(startGlitch, glitchDelay);
    return () => {
      clearInterval(interval);
      clearTimeout(glitchTimeout);
    };
  }, [
    text,
    glitchDuration,
    letterChangeInterval,
    pauseBetweenGlitches,
    glitchDelay,
  ]);

  return (
    <motion.span
      initial={{ opacity: 0.8 }}
      animate={{ opacity: glitching ? 1 : 0.8 }}
      transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
      className="glitch-text"
    >
      {displayText}
    </motion.span>
  );
};

export default GlitchText;
