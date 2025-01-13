"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="backdrop-blur-md border-t border-cyber-accent/20 py-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4">
        {/* Entire Footer Content in One Div with Flexbox */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-bold font-mono bg-white bg-clip-text text-transparent hover:scale-110 transition-transform"
            >
              illusionsecurity.ai
            </Link>
            <p className="text-sm text-gray-100 mt-1">
              Innovating Cybersecurity Solutions
            </p>
          </div>

          {/* Social Icons and Contact Link */}
          <div className="flex items-center space-x-6 justify-center">
            <Link
              href="https://github.com/illusionsecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-cyber-accent hover:text-white"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/company/illusionsecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-cyber-accent hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://twitter.com/illusionsec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-cyber-accent hover:text-white"
            >
              <Twitter className="w-6 h-6" />
            </Link>

            </div>
            {/* Contact Link */}
            <Link
              href="/contact"
              className="text-cyber-accent hover:text-white transition-colors text-lg font-medium"
            >
              Contact Us
            </Link>
        </div>

        {/* Footer Bottom with Copyright */}
        <div className="mt-8 text-center text-sm text-gray-100">
          <p>
            &copy; {new Date().getFullYear()} Illusion Security. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
