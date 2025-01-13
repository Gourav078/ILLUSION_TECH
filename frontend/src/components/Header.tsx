import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-cyber-accent/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide"
        >
          illusionsecurity.ai
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
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
    </nav>
  );
};

export default Header;
