// import {
//   Brain,
//   Lightbulb,
//   Rocket,
//   Sparkles,
//   TrendingUp,
//   Users,
//   Wrench,
// } from "lucide-react";
// import { useEffect, useState, useRef } from "react";
// // import WorkshopForm from "./WorkshopForm";
// // import { Button } from "./ui/button";
// import { motion } from "framer-motion";

// const features = [
//   {
//     icon: Users,
//     title: "1-1 Discussion",
//     description: "Personalized mentoring sessions with industry experts",
//   },
//   {
//     icon: Brain,
//     title: "Latest Technology",
//     description: "Hands-on experience with cutting-edge AI and security tools",
//   },
//   {
//     icon: TrendingUp,
//     title: "Market Growth",
//     description: "Insights into rapidly expanding cybersecurity and AI sectors",
//   },
//   {
//     icon: Rocket,
//     title: "Career Path",
//     description: "Guidance for building a successful career in tech",
//   },
//   {
//     icon: Wrench,
//     title: "Industry Tools",
//     description: "Training on professional-grade security and AI platforms",
//   },
//   {
//     icon: Lightbulb,
//     title: "Future Scope",
//     description: "Exploration of emerging technologies and opportunities",
//   },
//   {
//     icon: Sparkles,
//     title: "Increasing Curiosity",
//     description: "Engaging projects that spark innovation and learning",
//   },
// ];

// const WorkshopOverview = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.4 } //for small screen size reduce it to 1
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
//       ref={ref} // Attach the observer to the section element
//       className="relative py-20 px-4 bg-cyber-dark text-white"
//       style={{
//         backgroundImage: "url('/ov2.jpg')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="relative z-10 max-w-6xl mx-auto space-y-20">
//         <div className="text-center space-y-12">
//           <motion.h2
//             className="text-4xl font-extrabold bg-white bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: 15 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//             transition={{ duration: 0.5 }}
//           >
//             Workshop Overview
//           </motion.h2>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial={{ opacity: 0, y: 15 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//             transition={{ duration: 0.5, staggerChildren: 0.2 }}
//           >
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border-2 bg-black/100 dark:border-gray-700 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] relative overflow-hidden"
//                 style={{
//                   borderImageSource:
//                     "linear-gradient(to right, #00ffcc, #0077ff)",
//                   borderImageSlice: 1,
//                   boxShadow: "0px 0px 15px rgba(0, 255, 204, 0.3)",
//                 }}
//               >
//                 <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
//                 <h3 className="text-xl font-bold  text-white mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-400">{feature.description}</p>
//               </div>
//             ))}
//           </motion.div>

//           {/* <Dialog>
//             <DialogTrigger asChild>
//               <Button
//                 className={`relative rounded-full font-bold px-6 py-3 mt-8 text-center transition-all duration-300
//               bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white
//               dark:from-purple-500 dark:via-cyan-500 dark:to-blue-400
//               hover:scale-105 shadow-md`}
//                 style={{
//                   border: "4px solid",
//                   borderImageSlice: 1,
//                   borderWidth: "4px",
//                 }}
//               >
//                 <span className="relative">Register for Workshop</span>
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="bg-transparent border-none sm:max-w-[425px]">
//               <WorkshopForm />
//             </DialogContent>
//           </Dialog> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkshopOverview;

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
