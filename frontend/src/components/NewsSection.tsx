import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const news = [
  {
    title: "Rising Demand for AI Security Experts",
    date: "2024-02-15",
    content:
      "Major tech companies are actively recruiting AI security specialists with competitive packages for fresh graduates.",
    type: "jobs",
    size: "col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    title: "New Zero-Day Vulnerability Lab Released",
    date: "2024-02-10",
    content:
      "Experience hands-on training with the latest critical vulnerabilities in our secure environment.",
    type: "security",
    size: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    title: "Remote Cybersecurity Positions Surge",
    date: "2024-02-05",
    content:
      "Companies worldwide are offering remote positions for entry-level cybersecurity analysts.",
    type: "jobs",
    size: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-2 md:col-span-2 md:row-span-1",
  },
  {
    title: "AI-Powered Threat Detection Tools",
    date: "2024-02-03",
    content:
      "Latest developments in AI-based security tools are revolutionizing threat detection and response.",
    type: "tech",
    size: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    title: "Cybersecurity Bootcamp Success Stories",
    date: "2024-02-01",
    content:
      "Recent graduates share their journey from bootcamp to securing positions at top tech companies.",
    type: "success",
    size: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    title: "Machine Learning in Penetration Testing",
    date: "2024-01-28",
    content:
      "New frameworks combining ML with traditional pentesting showing promising results.",
    type: "tech",
    size: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
];

const NewsSection = () => {
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
        // backgroundImage: "url('/NS1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/NS1.jpg')",
          filter: "grayscale(100%)",
        }}
      ></div>
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center bg-clip-text text-transparent bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Latest Industry Updates
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 auto-rows-[150px] gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {news.map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-md bg-black/100 border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center ${item.size}`}
              style={{ boxShadow: "0px 0px 5px" }}
            >
              <div className="mb-4">
                <h3 className="text-[6px] md:text-[1rem] lg:text-[16px] lg:font-semibold text-cyan-400 mb-2">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center w-full">
                  <p className="text-[5px] md:text-[1rem] lg:text-[12px] text-gray-600">
                    {item.date}
                  </p>
                  <span
                    className={`text-[5px] md:text-[1rem] lg:text-[10px] px-2 py-1 rounded ${
                      item.type === "jobs"
                        ? "bg-cyan-400/20 text-cyan-400"
                        : item.type === "tech"
                        ? "bg-purple-400/20 text-purple-600"
                        : "bg-pink-400/20 text-pink-400"
                    }`}
                  >
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-[5px] md:text-[1rem] lg:text-[11px] lg:font-semibold">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
