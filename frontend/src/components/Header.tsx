"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { ModeToggle } from "./mode-toggel";
// import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // backdrop-blur-md

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparant border-b border-cyber-accent/20 shadow-lg main-font-family backdrop-blur-md">
        <div className="max-w-6xl mx-auto py-4 px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-green-400">
            illusionsecurity.ai
            {/* <Image
              className="w-32 sm:w-40 md:w-48"
              width={100}
              height={10}
              src="/logo-no-background.png"
              alt="logo"
            /> */}
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            <Link
              href="/training"
              className={`text-lg font-medium hover:underline underline-offset-4 decoration-[#4ADE80] transition-colors ${
                isActive("/training")
                  ? "text-green-500 font-bold"
                  : "text-green-400 hover:text-green-500"
              }`}
            >
              Training
            </Link>
            <Link
              href="/about"
              className={`text-lg font-medium hover:underline underline-offset-4 decoration-[#4ADE80] transition-colors ${
                isActive("/about")
                  ? "text-green-500  font-bold"
                  : "text-green-400  hover:text-green-400 "
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium hover:underline underline-offset-4 decoration-[#4ADE80] transition-colors ${
                isActive("/contact")
                  ? "text-green-500  font-bold"
                  : "text-green-400  hover:text-green-500"
              }`}
            >
              Contact
            </Link>
            {/* <ModeToggle /> */}
          </div>

          {/* <div className="lg:hidden">
            <ModeToggle />
          </div> */}
        </div>
      </nav>

      {/* Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md border-t border-cyber-accent/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/training"
            className={`flex-1 text-center text-md font-medium decoration-cyber-accent transition-colors ${
              isActive("/training")
                ? "text-green-500  font-bold"
                : "text-green-400 hover:text-green-500 "
            }`}
          >
            Training
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/about"
            className={`flex-1 text-center text-md font-medium decoration-cyber-accent transition-colors ${
              isActive("/about")
                ? "text-green-500  font-bold"
                : "text-green-400  hover:text-green-500 "
            }`}
          >
            About Us
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/contact"
            className={`flex-1 text-center text-md font-medium decoration-cyber-accent transition-colors ${
              isActive("/contact")
                ? "text-green-500  font-bold"
                : "text-green-400  hover:text-green-500 "
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
