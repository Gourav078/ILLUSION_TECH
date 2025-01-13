const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center  overflow-hidden pt-16">
      {/* Cyber world gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary via-cyber-secondary to-cyber-accent opacity-20" />

      {/* Subtle glowing animation */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-cyber-accent/10 animate-pulse"
        style={{
          backgroundSize: "150% 150%",
        }}
      />

      {/* Circuit board overlay */}
      <div
        className="absolute inset-0 bg-cyber-pattern opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url('/lovable-uploads/edcba0ee-3eee-4e22-a001-5984bead479b.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent mb-8 tracking-tighter">
          illusionsecurity.ai
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-cyber-secondary max-w-2xl mx-auto leading-relaxed font-mono">
          Pioneering AI and Cybersecurity Training
          <span className="block mt-2 text-cyber-accent font-bold">
            For the Next Generation of Elite Hackers
          </span>
        </p>
      </div>

      {/* Subtle animated scan line */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-accent/10 to-transparent animate-scan-line pointer-events-none"
        style={{
          backgroundSize: "100% 3px",
        }}
      />

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-cyber-primary opacity-50 animate-glow" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-cyber-primary opacity-50 animate-glow" />
    </div>
  );
};

export default Home;
