"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import GlitchText from "./animata/GlitchText";

const Footer = () => {
  return (
    <footer className="backdrop-blur-md  border-t border-cyber-accent/20 main-font-family">
      <div
        className="container mx-auto py-[6rem] px-[5rem] sm:px-8rem"
        style={{
          paddingRight: "30px",
          paddingLeft: "30px",
        }}
      >
        {/* footer div all */}
        <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
          {/* logo side */}
          <div className="flex flex-col w-full md:w-1/2 md:p-0 py-4 gap-4 text-center md:text-left">
            <Link
              href="/"
              className="text-[1.5rem] sm:text-[2rem] font-bold text-white "
            >
              ILLUSION <GlitchText text="SECURITY" />
            </Link>
            <p className="text-[15px] sm:text-[14px] md:text-[15px] font-medium text-[#646464]">
              Innovating Cybersecurity Solutions
            </p>
            {/* socials */}
            <p className="text-[16px] sm:text-[14px] md:text-[15px] font-medium text-[#646464]">
              Privacy Policy | © {new Date().getFullYear()} Illusion Security.{" "}
              <br /> All rights reserved.
            </p>
          </div>

          {/* middle div */}
          <div className="flex flex-col gap-4 relative text-center md:text-left">
            <p className="text-[22px] sm:text-[20px] md:text-[22px] font-bold footer-main text-[#646464]">
              <GlitchText text="Social" /> Handles
            </p>

            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#3c4d8b]"></span>

            <div className="flex items-center space-x-6 sm:space-x-6 justify-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://github.com/illusionsecurity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform text-cyber-accent hover:text-white text-[#646464]"
                    >
                      <Github className="w-6 h-6 sm:w-6 sm:h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://linkedin.com/company/illusionsecurity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform text-cyber-accent hover:text-white text-[#646464]"
                    >
                      <Linkedin className="w-6 h-6 sm:w-6 sm:h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Linkedin</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://twitter.com/illusionsec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform text-cyber-accent hover:text-white text-[#646464]"
                    >
                      <Twitter className="w-6 h-6 sm:w-6 sm:h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <span></span>
      </div>

      {/* </div> */}
    </footer>
  );
};

export default Footer;
