"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <span className="font-mono">
      {displayText}
      <span className="animate-pulse">_</span>
    </span>
  );
};

const page = () => {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/training section.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderBottomLeftRadius: "10rem",
      }}
    >
      <div className="relative min-h-screen flex items-center justify-center bg-transparent">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="absolute backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold mb-8 text-cyber-accent text-white dark:text-white">
            Advanced Training Programs
          </h1>
          <div className="text-[1rem] sm:text-lg md:text-xl lg:text-2xl text-cyber-secondary text-gray-400 dark:text-gray-400">
            <TypingEffect text="Coming Soon... Initializing Training Modules" />
          </div>
          <div className="mt-8 text-[1rem] sm:text-lg md:text-xl lg:text-2xl text-gray-400 dark:text-gray-400">
            Elite cybersecurity and AI training programs are being configured...
          </div>
          <div
            className="absolute inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-180"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(100%-11rem)] aspect-[1155/678] w-[10.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(120%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 100.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
