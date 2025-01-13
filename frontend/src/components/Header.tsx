"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-cyber-accent/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide"
          >
            illusionsecurity.ai
          </Link>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/training"
              className="text-gray-300 hover:text-cyber-accent transition-colors text-lg font-medium hover:underline underline-offset-4 decoration-cyber-accent"
            >
              Training
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-cyber-accent transition-colors text-lg font-medium hover:underline underline-offset-4 decoration-cyber-accent"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-cyber-accent transition-colors text-lg font-medium hover:underline underline-offset-4 decoration-cyber-accent"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Icon for Smaller Screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyber-accent focus:outline-none transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar for Smaller Screens */}
      <div
        className={`fixed top-0 right-0 h-full z-40 w-64 bg-black transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <div className="p-6 flex flex-col gap-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-cyber-accent self-end focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link
            href="/training"
            className="text-gray-300 hover:text-cyber-accent transition-colors text-lg font-medium hover:underline underline-offset-4 decoration-cyber-accent"
          >
            Training
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-cyber-accent transition-colors text-lg font-medium hover:underline underline-offset-4 decoration-cyber-accent"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-cyber-accent transition-colors text-lg font-medium hover:underline underline-offset-4 decoration-cyber-accent"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </>
  );
};

export default Header;
