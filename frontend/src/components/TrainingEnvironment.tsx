import { motion } from "framer-motion";
import { Server, Shield, Terminal, Users, BookOpen, Clock } from "lucide-react";

const TrainingEnvironment = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden main-font-family">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url('/lovable-uploads/edcba0ee-3eee-4e22-a001-5984bead479b.png')",
          filter: "brightness(0.7) contrast(1.2)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent bg-clip-text text-transparent">
            Workshop Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our intensive 3-4 hour workshop where we dive deep into the
            world of cybersecurity and AI. Understand the industry demands,
            career paths, and essential skills needed to succeed in these
            rapidly growing fields.
          </p>
          <button
            onClick={() => document.getElementById("workshop-form")?.click()}
            className="mt-8 px-8 py-3 bg-cyber-accent text-white font-mono uppercase tracking-wider hover:bg-cyber-primary transition-colors duration-300"
          >
            Register for Workshop
          </button>
        </div>

        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent bg-clip-text text-transparent">
          State-of-the-Art Training Environment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 bg-black/60 backdrop-blur-sm rounded-lg border border-cyber-accent/20"
          >
            <Users className="w-12 h-12 text-cyber-accent mb-4" />
            <h3 className="text-xl font-bold text-cyber-secondary mb-2">
              1-on-1 Mentorship
            </h3>
            <p className="text-gray-300">
              Personalized guidance from industry experts to accelerate your
              learning journey
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 bg-black/60 backdrop-blur-sm rounded-lg border border-cyber-accent/20"
          >
            <BookOpen className="w-12 h-12 text-cyber-accent mb-4" />
            <h3 className="text-xl font-bold text-cyber-secondary mb-2">
              Real-World Examples
            </h3>
            <p className="text-gray-300">
              Learn from actual case studies and industry scenarios
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center p-6 bg-black/60 backdrop-blur-sm rounded-lg border border-cyber-accent/20"
          >
            <Terminal className="w-12 h-12 text-cyber-accent mb-4" />
            <h3 className="text-xl font-bold text-cyber-secondary mb-2">
              Hands-on Learning
            </h3>
            <p className="text-gray-300">
              Practice with real tools and technologies used in the industry
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center text-center p-6 bg-black/60 backdrop-blur-sm rounded-lg border border-cyber-accent/20"
          >
            <Clock className="w-12 h-12 text-cyber-accent mb-4" />
            <h3 className="text-xl font-bold text-cyber-secondary mb-2">
              Flexible Schedule
            </h3>
            <p className="text-gray-300">
              Training sessions adapted to your availability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center text-center p-6 bg-black/60 backdrop-blur-sm rounded-lg border border-cyber-accent/20"
          >
            <Shield className="w-12 h-12 text-cyber-accent mb-4" />
            <h3 className="text-xl font-bold text-cyber-secondary mb-2">
              Industry Skills
            </h3>
            <p className="text-gray-300">
              Focus on the most in-demand skills for fresh graduates
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col items-center text-center p-6 bg-black/60 backdrop-blur-sm rounded-lg border border-cyber-accent/20"
          >
            <Server className="w-12 h-12 text-cyber-accent mb-4" />
            <h3 className="text-xl font-bold text-cyber-secondary mb-2">
              Career Guidance
            </h3>
            <p className="text-gray-300">
              Expert advice on career paths and skill development
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingEnvironment;
