import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MatrixRain from "./animata/MatrixRain";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Stage {
  id: number;
  title: string;
  description: string;
  x: number;
  y: number;
}

const aiStages: Stage[] = [
  {
    id: 1,
    title: "Stage 1",
    description: "Lorem ipsum dolor sit amet...",
    x: 0,
    y: 0,
  },
  {
    id: 2,
    title: "Stage 2",
    description: "Lorem ipsum dolor sit amet...",
    x: 15,
    y: 0,
  },
  {
    id: 3,
    title: "Stage 3",
    description: "Lorem ipsum dolor sit amet...",
    x: 30,
    y: 0,
  },
  {
    id: 4,
    title: "Stage 4",
    description: "Lorem ipsum dolor sit amet...",
    x: 45,
    y: 0,
  },
  {
    id: 5,
    title: "Stage 5",
    description: "Lorem ipsum dolor sit amet...",
    x: 60,
    y: 0,
  },
  {
    id: 6,
    title: "Stage 7",
    description: "Lorem ipsum dolor sit amet...",
    x: 60,
    y: 28,
  },
  {
    id: 7,
    title: "Stage 8",
    description: "Lorem ipsum dolor sit amet...",
    x: 45,
    y: 28,
  },
  {
    id: 8,
    title: "Stage 9",
    description: "Lorem ipsum dolor sit amet...",
    x: 30,
    y: 28,
  },
  {
    id: 9,
    title: "Stage 10",
    description: "Lorem ipsum dolor sit amet...",
    x: 15,
    y: 28,
  },
  {
    id: 10,
    title: "Stage 11",
    description: "Lorem ipsum dolor sit amet...",
    x: 0,
    y: 28,
  },
  {
    id: 11,
    title: "Stage 12",
    description: "Lorem ipsum dolor sit amet...",
    x: 0,
    y: 52,
  },
  {
    id: 12,
    title: "Stage 13",
    description: "Lorem ipsum dolor sit amet...",
    x: 15,
    y: 52,
  },
  {
    id: 13,
    title: "Stage 14",
    description: "Lorem ipsum dolor sit amet...",
    x: 30,
    y: 52,
  },
  {
    id: 14,
    title: "Stage 15",
    description: "Lorem ipsum dolor sit amet...",
    x: 45,
    y: 52,
  },
  {
    id: 15,
    title: "Stage 16",
    description: "Lorem ipsum dolor sit amet...",
    x: 60,
    y: 52,
  },
];

const cyberStages: Stage[] = [
  {
    id: 1,
    title: "CY Stage 1",
    description: "Lorem ipsum dolor sit amet...",
    x: 0,
    y: 0,
  },
  {
    id: 2,
    title: "CY Stage 2",
    description: "Lorem ipsum dolor sit amet...",
    x: 15,
    y: 0,
  },
  {
    id: 3,
    title: "CY Stage 3",
    description: "Lorem ipsum dolor sit amet...",
    x: 30,
    y: 0,
  },
  {
    id: 4,
    title: "CY Stage 4",
    description: "Lorem ipsum dolor sit amet...",
    x: 45,
    y: 0,
  },
  {
    id: 5,
    title: "CY Stage 5",
    description: "Lorem ipsum dolor sit amet...",
    x: 60,
    y: 0,
  },
  {
    id: 6,
    title: "CY Stage 6",
    description: "Lorem ipsum dolor sit amet...",
    x: 60,
    y: 28,
  },
  {
    id: 7,
    title: "CY Stage 7",
    description: "Lorem ipsum dolor sit amet...",
    x: 45,
    y: 28,
  },
  {
    id: 8,
    title: "CY Stage 8",
    description: "Lorem ipsum dolor sit amet...",
    x: 30,
    y: 28,
  },
  {
    id: 9,
    title: "CY Stage 9",
    description: "Lorem ipsum dolor sit amet...",
    x: 15,
    y: 28,
  },
  {
    id: 10,
    title: "CY Stage 10",
    description: "Lorem ipsum dolor sit amet...",
    x: 0,
    y: 28,
  },
  {
    id: 11,
    title: "CY Stage 11",
    description: "Lorem ipsum dolor sit amet...",
    x: 0,
    y: 52,
  },
  {
    id: 12,
    title: "CY Stage 12",
    description: "Lorem ipsum dolor sit amet...",
    x: 15,
    y: 52,
  },
  {
    id: 13,
    title: "CY Stage 13",
    description: "Lorem ipsum dolor sit amet...",
    x: 30,
    y: 52,
  },
  {
    id: 14,
    title: "CY Stage 14",
    description: "Lorem ipsum dolor sit amet...",
    x: 45,
    y: 52,
  },
  {
    id: 15,
    title: "CY Stage 15",
    description: "Lorem ipsum dolor sit amet...",
    x: 60,
    y: 52,
  },
];

export default function RocketRoadmap() {
  const [isAI, setIsAI] = useState(true);
  const stages = isAI ? aiStages : cyberStages;
  return (
    <section className="relative py-15 sm:py-22 px-4 bg-transparant text-white overflow-hidden main-font-family">
      <div className="absolute inset-0 z-[-1] blur-sm">
        <MatrixRain />
      </div>
      <div className="max-w-7xl mt-20 mx-auto relative">
        <div className="relative z-10 flex justify-start px-4 mt-10 mb-12">
          <div
            className="relative bg-transparant text-black border-2 border-[#00ffff] rounded-full px-8 py-3 flex items-center gap-4 cursor-pointer shadow-md transition-transform duration-500 hover:scale-105"
            onClick={() => setIsAI(!isAI)}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={isAI ? "ai" : "cyber"}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl text-[#00ffff] sm:text-2xl font-bold whitespace-nowrap"
              >
                {isAI ? "AI Roadmap" : "Cyber Security Roadmap"}
              </motion.h2>
            </AnimatePresence>
            <motion.div
              animate={{ rotate: isAI ? 0 : 180 }}
              transition={{ duration: 0.4 }}
              className="w-8 h-8 rounded-full border-2 border-[#00ffff] flex items-center justify-center rotate-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#00ffff"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v6h6M20 20v-6h-6M4 14a8 8 0 0113.856-5.856M20 10a8 8 0 01-13.856 5.856"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* SVG Path */}
        <svg
          className="glowPath2 absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 68"
          preserveAspectRatio="none"
        >
          <path
            d="M5,12 L65,12 A5,5 0 0,1 70,17 L70,25 A5,5 0 0,1 65,28 L5,28 A5,5 0 0,0 0,33 L0,38 A5,5 0 0,0 5,42 L65,42"
            fill="none"
            stroke="#00ffff"
            strokeWidth="0.5"
          />
        </svg>

        {/* Stage Markers */}
        <div className="relative w-full h-[600px]">
          <AnimatePresence mode="popLayout">
            {stages.map((stage) => (
              <motion.div
                key={`${isAI ? "ai" : "cyber"}-${stage.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="absolute w-[160px] text-center transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-blue-900 font-bold text-sm flex items-center justify-center mx-auto mb-2 border-4 border-[#00ffff]">
                  {stage.id}
                </div>
                <h3 className="text-[#00ffff] text-base font-semibold">
                  {stage.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Rocket Image */}
        <div className="absolute top-4 bottom-0 right-0 translate-x-[35%]">
          <DotLottieReact
            src="https://lottie.host/92b7d0ea-2b41-4fc1-bacf-c45a6e3d71d1/FFgvHQnyKC.lottie"
            loop
            autoplay
            style={{ width: "750px", height: "600px" }}
          />
        </div>
      </div>
    </section>
  );
}
