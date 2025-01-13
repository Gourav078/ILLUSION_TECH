"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="font-mono">
      {displayText}
      <span className="animate-pulse">_</span>
    </span>
  );
};

const page = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/edcba0ee-3eee-4e22-a001-5984bead479b.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl font-bold mb-8 text-cyber-accent">
            Advanced Training Programs
          </h1>
          <div className="text-3xl text-cyber-secondary">
            <TypingEffect text="Coming Soon... Initializing Training Modules" />
          </div>
          <div className="mt-8 text-xl text-gray-400">
            Elite cybersecurity and AI training programs are being configured...
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;