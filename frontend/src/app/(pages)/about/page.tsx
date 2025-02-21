"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const teamMembers = [
  {
    name: "Arghadip Banerjee",
    role: "Security Engineer",
    description:
      "Elite security researcher specializing in zero-day vulnerability discovery and exploit development. With a track record of identifying critical security flaws in enterprise systems, Arghadip leads our offensive security training programs and helps students understand the mindset of both attackers and defenders.",
    avatar: "/lovable-uploads/76ace6ba-a49f-409a-a707-12bb9ff18905.png",
    social: {
      github: "https://github.com/arghadip",
      linkedin: "https://linkedin.com/in/arghadip",
      twitter: "https://twitter.com/arghadip",
    },
  },
  {
    name: "Gourav Mitra",
    role: "AI/ML Engineer",
    description:
      "Pioneering researcher in artificial intelligence and machine learning, focusing on neural network architecture design and adversarial AI systems. Gourav brings cutting-edge AI expertise to our training programs, helping students understand how AI is revolutionizing cybersecurity.",
    avatar: "/lovable-uploads/bf1b2930-91b0-4ef7-88ba-8de30fb6edbe.png",
    social: {
      github: "https://github.com/gourav",
      linkedin: "https://linkedin.com/in/gourav",
      twitter: "https://twitter.com/gourav",
    },
  },
];

const page = () => {
  return (
    <>
      <div
        className="min-h-screen text-white"
        style={{
          backgroundImage: "url('/about us section.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
          <div className="absolute  backdrop-blur-sm" />

          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent bg-clip-text text-transparent">
              Meet Our Team
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  // className="bg-black/60 backdrop-blur-md p-8 border border-cyber-accent/20 hover:border-cyber-accent transition-colors"
                  className="p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border-2 bg-white/10 backdrop-blur-md dark:border-gray-700 bg-transparent shadow-[0px_0px_15px_rgba(0,0,0,0.09)] relative overflow-hidden"
                  style={{
                    borderImageSource:
                      "linear-gradient(to right, #ff80b5, #9089fc)",
                    borderImageSlice: 1,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-cyber-accent">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={128} // Specify width and height
                        height={128} // Specify width and height
                      />
                    </div>

                    <h2 className="text-2xl font-bold text-cyber-accent mb-2 text-black dark:text-gray-100">
                      {member.name}
                    </h2>
                    <h3 className="text-xl text-cyber-secondary mb-4 text-black dark:text-gray-100">
                      {member.role}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                      {member.description}
                    </p>

                    <div className="flex space-x-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyber-accent transition-colors"
                            >
                              <Github className="w-6 h-6" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyber-accent transition-colors"
                            >
                              <Linkedin className="w-6 h-6" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Linkedin</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={member.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyber-accent transition-colors"
                            >
                              <Twitter className="w-6 h-6" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Twitter</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
        </div>
      </div>
    </>
  );
};

export default page;
