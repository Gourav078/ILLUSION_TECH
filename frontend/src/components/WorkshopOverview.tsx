import {
  Brain,
  Lightbulb,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "1-1 Discussion",
    description: "Personalized mentoring sessions with industry experts",
    size: "col-span-1 row-span-1  lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    icon: Brain,
    title: "Latest Technology",
    description: "Hands-on experience with cutting-edge AI and security tools",
    size: "col-span-2 row-span-1  lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    icon: TrendingUp,
    title: "Market Growth",
    description: "Insights into rapidly expanding cybersecurity and AI sectors",
    size: "col-span-2 row-span-1  lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-1",
  },
  {
    icon: Rocket,
    title: "Career Path",
    description: "Guidance for building a successful career in tech",
    size: "col-span-1 row-span-1  lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-1",
  },
  {
    icon: Wrench,
    title: "Industry Tools",
    description: "Training on professional-grade security and AI platforms",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Lightbulb,
    title: "Future Scope",
    description: "Exploration of emerging technologies and opportunities",
    size: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    icon: Sparkles,
    title: "Increasing Curiosity",
    description: "Engaging projects that spark innovation and learning",
    size: "col-span-2 row-span-1  lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
];

const WorkshopOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 bg-gray-900 text-white"
      style={{
        backgroundImage: "url('/ov2.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl font-bold text-center bg-clip-text text-transparent bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Workshop Overview
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 auto-rows-[150px] gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-md bg-black/100 border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center text-center ${feature.size}`}
              style={{ boxShadow: "0px 0px 5px" }}
            >
              <feature.icon className="w-10 h-10 text-cyan-400 mb-3" />
              <h3 className="text-[8px] md:text-[1rem] lg:text-[16px] lg:font-semibold">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-[6px] md:text-[1rem] lg:text-[12px] lg:font-semibold">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopOverview;
