"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

// Define the TeamMember type
interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  examples: string[];
}

// Define the Example component
export const Example = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <div className="flex items-center justify-center bg-transparent px-4 sm:px-8 py-16 sm:py-24 text-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full max-w-6xl">
        {teamMembers.map((member) => (
          <BlockInTextCard
            key={member.name}
            tag={`/ ${member.name}`}
            text={<>{member.description}</>}
            examples={member.examples}
            social={member.social}
          />
        ))}
      </div>
    </div>
  );
};

// Define the BlockInTextCard component
const BlockInTextCard = ({
  tag,
  text,
  examples,
  social,
}: {
  tag: string;
  text: ReactNode;
  examples: string[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}) => {
  return (
    <div className="w-full max-w-full sm:max-w-xl space-y-6 p-4 sm:p-6 border-[0.2px] border-gray-700 shadow-lg bg-transparent backdrop-blur-md dark:border-gray-700 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] relative overflow-hidden">
      <div>
        <p className="mb-1.5 text-xs sm:text-sm font-light text-white uppercase">
          {tag}
        </p>
        <hr className="border-white" />
      </div>
      <p className="max-w-lg text-[0.8rem] sm:text-lg text-white leading-relaxed">
        {text}
      </p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-neutral-300" />
      </div>
      <div className="flex flex-nowrap gap-4">
        <HoverLink
          href={social.github}
          icon={<Github className="w-5 sm:w-6 h-5 sm:h-6" />}
        />
        <HoverLink
          href={social.linkedin}
          icon={<Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />}
        />
        <HoverLink
          href={social.twitter}
          icon={<Twitter className="w-5 sm:w-6 h-5 sm:h-6" />}
        />
      </div>
    </div>
  );
};

// Define the HoverLink component
const HoverLink = ({ href, icon }: { href: string; icon: ReactNode }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-1/3 border text-white border-white py-2 text-xs sm:text-sm font-medium transition-colors hover:scale-105 transition-transform duration-300 hover:bg-white-50 hover:text-white-100 flex items-center justify-center relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity hover:opacity-100"
      />
    </motion.a>
  );
};

// Define the Typewrite component
const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 text-xs sm:text-sm font-light text-white uppercase">
      <span className="inline-block size-2 bg-white" />
      <span className="ml-3">
        TITLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * LETTER_DELAY, duration: 0 }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
