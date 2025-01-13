const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/edcba0ee-3eee-4e22-a001-5984bead479b.png')] bg-repeat opacity-30" />
      </div>

      {/* Circuit board overlay */}
      <div 
        className="absolute inset-0 bg-cyber-pattern opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/edcba0ee-3eee-4e22-a001-5984bead479b.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
          illusionsecurity.ai
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-cyber-secondary max-w-2xl mx-auto leading-relaxed font-mono">
          Underground AI and Cybersecurity Training
          <span className="block mt-2 text-cyber-accent">For the Next Generation of Elite Hackers</span>
        </p>
      </div>

     
    </div>
  );
};

export default Home;