"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image"; // Import the Image component from next/image

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
      <div className="min-h-screen bg-cyber-dark text-white">
        <div
          className="relative min-h-screen py-20"
          style={{
            backgroundImage:
              "url('/lovable-uploads/544efd37-9262-4942-afb7-170560e71147.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

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
                  className="bg-black/60 backdrop-blur-md p-8 border border-cyber-accent/20 hover:border-cyber-accent transition-colors"
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

                    <h2 className="text-2xl font-bold text-cyber-accent mb-2">
                      {member.name}
                    </h2>
                    <h3 className="text-xl text-cyber-secondary mb-4">
                      {member.role}
                    </h3>

                    <p className="text-gray-300 mb-6 text-center">
                      {member.description}
                    </p>

                    <div className="flex space-x-4">
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-accent transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-accent transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-accent transition-colors"
                      >
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
