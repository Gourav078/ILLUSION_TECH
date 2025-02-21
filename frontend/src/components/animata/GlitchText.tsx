import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const chars = "☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

interface GlitchProps {
  text: string;
  glitchDuration?: number;
  letterChangeInterval?: number;
  pauseBetweenGlitches?: number;
}

const GlitchText: React.FC<GlitchProps> = ({
  text,
  glitchDuration = 2000,
  letterChangeInterval = 75,
  pauseBetweenGlitches = 2500,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startGlitch = () => {
      setGlitching(true);
      const startTime = Date.now();
      interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= glitchDuration) {
          setDisplayText(text); // Restore original text
          setGlitching(false);
          clearInterval(interval);
          setTimeout(startGlitch, pauseBetweenGlitches); // Wait before next glitch
          return;
        }

        setDisplayText((prev) => {
          const arr = prev.split("");
          const randomIndices = Array.from(
            { length: Math.min(3, arr.length) },
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

    startGlitch();
    return () => clearInterval(interval);
  }, [text, glitchDuration, letterChangeInterval, pauseBetweenGlitches]);

  return (
    <motion.span
      initial={{ opacity: 0.8 }}
      animate={{ opacity: glitching ? 1 : 0.8 }}
      transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
      className="glitch-text"
    >
      {displayText}
    </motion.span>
  );
};

export default GlitchText;
