"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MatrixRain from "@/components/animata/MatrixRain";

const TypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="font-mono text-cyber-accent">
      {displayText}
      <span className="animate-pulse">_</span>
    </span>
  );
};

const page = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-[-1] blur-sm">
        <MatrixRain />
      </div>
      {/* Main Content */}
      <div className="relative main-font-family min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold mb-8 text-cyber-accent neon-text"
        >
          Advanced Training Programs
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[1rem] sm:text-lg md:text-xl lg:text-2xl text-cyber-secondary text-gray-400 dark:text-gray-400"
        >
          <TypingEffect text="Coming Soon... Initializing Training Modules" />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-[1rem] sm:text-lg md:text-xl lg:text-2xl text-gray-400 dark:text-gray-400"
        >
          Elite cybersecurity and AI training programs are being configured...
        </motion.div>

        {/* Glitch Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-180"
          aria-hidden="true"
        ></motion.div>
      </div>
    </div>
  );
};

export default page;
