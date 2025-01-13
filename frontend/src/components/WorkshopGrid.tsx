// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Brain, Code, Lock, Server, Shield, Terminal } from "lucide-react";

const workshops = [
  {
    title: "Offensive Security Lab",
    description:
      "Hands-on penetration testing in our secure virtual environment",
    icon: Shield,
  },
  {
    title: "AI Systems Architecture",
    description: "Build and deploy advanced neural networks from scratch",
    icon: Brain,
  },
  {
    title: "Advanced Exploitation",
    description: "Master binary exploitation and reverse engineering",
    icon: Terminal,
  },
  {
    title: "Secure Coding Practices",
    description: "Learn to write bulletproof code and identify vulnerabilities",
    icon: Code,
  },
  {
    title: "Network Defense",
    description:
      "Configure and maintain enterprise-grade security infrastructure",
    icon: Server,
  },
  {
    title: "Cryptography Workshop",
    description: "Implement and break various encryption systems",
    icon: Lock,
  },
];

const WorkshopGrid = () => {
  return (
    <section className="relative py-20 px-4 bg-cyber-dark text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.5))] opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Underground Training Labs
        </h2>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <workshop.icon className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {workshop.title}
              </h3>
              <p className="text-gray-400">{workshop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopGrid;
