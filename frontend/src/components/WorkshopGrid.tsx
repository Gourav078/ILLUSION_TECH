// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// // } from "@/components/ui/card";
// import { Brain, Code, Lock, Server, Shield, Terminal } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// const workshops = [
//   {
//     title: "Offensive Security Lab",
//     description:
//       "Hands-on penetration testing in our secure virtual environment",
//     icon: Shield,
//   },
//   {
//     title: "AI Systems Architecture",
//     description: "Build and deploy advanced neural networks from scratch",
//     icon: Brain,
//   },
//   {
//     title: "Advanced Exploitation",
//     description: "Master binary exploitation and reverse engineering",
//     icon: Terminal,
//   },
//   {
//     title: "Secure Coding Practices",
//     description: "Learn to write bulletproof code and identify vulnerabilities",
//     icon: Code,
//   },
//   {
//     title: "Network Defense",
//     description:
//       "Configure and maintain enterprise-grade security infrastructure",
//     icon: Server,
//   },
//   {
//     title: "Cryptography Workshop",
//     description: "Implement and break various encryption systems",
//     icon: Lock,
//   },
// ];

// const WorkshopGrid = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);
//   return (
//     <section
//       className="relative py-20 px-4 bg-cyber-dark text-white"
//       ref={ref}
//       style={{
//         // backgroundImage: "url('/UW.jpg')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/UW.jpg')", filter: "grayscale(100%)" }}
//       ></div>
//       {/* Background Gradient */}
//       {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.5))] opacity-60" /> */}

//       <AnimatePresence>
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 15 }}
//           transition={{ delay: 0.1 }}
//         >
//           <div className="relative z-10 max-w-6xl mx-auto space-y-12">
//             {/* Section Title */}
//             <motion.h2
//               className="text-4xl font-extrabold text-center bg-white bg-clip-text text-transparent"
//               initial={{ opacity: 0, y: 15 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//               transition={{ duration: 0.5 }}
//             >
//               Underground Training Labs
//             </motion.h2>

//             {/* Workshops Grid */}
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               initial={{ opacity: 0, y: 15 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//               transition={{ duration: 0.5, staggerChildren: 0.2 }}
//             >
//               {workshops.map((workshop, index) => (
//                 <div
//                   key={index}
//                   // className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//                   className="p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border-2 bg-black/100 dark:border-gray-700 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] relative overflow-hidden"
//                   style={{
//                     borderImageSource:
//                       "linear-gradient(to right, #00ffcc, #0077ff)",
//                     borderImageSlice: 1,
//                     boxShadow: "0px 0px 15px rgba(0, 255, 204, 0.3)",
//                   }}
//                 >
//                   <workshop.icon className="w-10 h-10 text-cyan-400 mb-4" />
//                   <h3 className="text-xl font-bold text-white dark:text-white mb-2">
//                     {workshop.title}
//                   </h3>
//                   <p className="text-gray-300">{workshop.description}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// };

// export default WorkshopGrid;

import { Brain, Code, Lock, Server, Shield, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const workshops = [
  {
    title: "Offensive Security Lab",
    description:
      "Hands-on penetration testing in our secure virtual environment",
    icon: Shield,
    size: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    title: "Cryptography Workshop",
    description: "Implement and break various encryption systems",
    icon: Lock,
    size: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    title: "Advanced Exploitation",
    description: "Master binary exploitation and reverse engineering",
    icon: Terminal,
    size: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-2 md:col-span-2 md:row-span-1",
  },
  {
    title: "Secure Coding Practices",
    description: "Learn to write bulletproof code and identify vulnerabilities",
    icon: Code,
    size: "col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 md:col-span-1 md:row-span-1",
  },
  {
    title: "Network Defense",
    description:
      "Configure and maintain enterprise-grade security infrastructure",
    icon: Server,
    size: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    title: "AI Systems Architecture",
    description: "Build and deploy advanced neural networks from scratch",
    icon: Brain,
    size: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
];

const WorkshopGrid = () => {
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
        backgroundImage: "url('/UW.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/UW.jpg')",
          filter: "grayscale(100%)",
        }}
      ></div> */}
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl font-bold text-center bg-clip-text text-transparent bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Underground Training Labs
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 auto-rows-[150px] gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-md bg-black/100 border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center text-center ${workshop.size}`}
              style={{ boxShadow: "0px 0px 5px" }}
            >
              <workshop.icon className="w-10 h-10 text-cyan-400 mb-3" />
              <h3 className="text-[8px] md:text-[1rem] lg:text-[16px] lg:font-semibold">
                {workshop.title}
              </h3>
              <p className="text-gray-400 text-[6px] md:text-[1rem] lg:text-[12px] lg:font-semibold">
                {workshop.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopGrid;
