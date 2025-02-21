// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// const upcomingWorkshops = [
//   {
//     id: 1,
//     title: "AI Security Fundamentals",
//     mode: "Coming Soon",
//     price: "TBA",
//     duration: "TBA",
//     date: "Q2 2024",
//   },
//   {
//     id: 2,
//     title: "Advanced Penetration Testing",
//     mode: "Coming Soon",
//     price: "TBA",
//     duration: "TBA",
//     date: "Q2 2024",
//   },
//   {
//     id: 3,
//     title: "Machine Learning for Security",
//     mode: "Coming Soon",
//     price: "TBA",
//     duration: "TBA",
//     date: "Q3 2024",
//   },
// ];

// const upcomingTrainings = [
//   {
//     id: 1,
//     title: "Ethical Hacking Bootcamp",
//     mode: "Coming Soon",
//     price: "TBA",
//     duration: "TBA",
//     date: "Q2 2024",
//   },
//   {
//     id: 2,
//     title: "AI Development Intensive",
//     mode: "Coming Soon",
//     price: "TBA",
//     duration: "TBA",
//     date: "Q3 2024",
//   },
//   {
//     id: 3,
//     title: "Security Operations Center Training",
//     mode: "Coming Soon",
//     price: "TBA",
//     duration: "TBA",
//     date: "Q3 2024",
//   },
// ];

// const WorkshopOverview2 = () => {
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
//       className="relative py-40 px-4 bg-cyber-dark text-white"
//       ref={ref}
//       style={{
//         // backgroundImage: "url('/ov.jpg')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/ov.jpg')",
//           filter: "grayscale(100%)",
//         }}
//       ></div>
//       <AnimatePresence>
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 15 }}
//           transition={{ delay: 0.1 }}
//         >
//           {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.5))] opacity-60" /> */}

//           <div className="relative z-10 max-w-6xl mx-auto space-y-20">
//             {/* Upcoming Workshops */}
//             <div className="relative space-y-8">
//               <motion.h3
//                 className=" text-center text-4xl font-extrabold bg-white bg-clip-text text-transparent"
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={
//                   isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
//                 }
//                 transition={{ duration: 0.5 }}
//               >
//                 Upcoming Workshops and Trainings
//               </motion.h3>
//               <motion.div
//                 className="grid grid-cols-1 md:grid-cols-3 gap-6"
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={
//                   isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
//                 }
//                 transition={{ duration: 0.5, staggerChildren: 0.2 }}
//               >
//                 {upcomingWorkshops.map((workshop) => (
//                   <div
//                     key={workshop.id}
//                     // className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
//                     className="p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border-2 bg-white/10 backdrop-blur-md dark:border-gray-700 bg-transparent shadow-[0px_0px_15px_rgba(0,0,0,0.09)] relative overflow-hidden"
//                     style={{
//                       borderImageSource:
//                         "linear-gradient(to right, #ff80b5, #9089fc)",
//                       borderImageSlice: 1,
//                     }}
//                   >
//                     <h4 className="text-xl font-bold text-white mb-4">
//                       {workshop.title}
//                     </h4>
//                     <div className="space-y-2 text-gray-400">
//                       <p>Mode: {workshop.mode}</p>
//                       <p>Price: {workshop.price}</p>
//                       <p>Duration: {workshop.duration}</p>
//                       <p>Expected Date: {workshop.date}</p>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Upcoming Trainings */}
//             <div className="relative space-y-8">
//               {" "}
//               <motion.h3
//                 className=" text-center text-4xl font-extrabold bg-white bg-clip-text text-transparent"
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={
//                   isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
//                 }
//                 transition={{ duration: 0.5 }}
//               >
//                 Upcoming Trainings
//               </motion.h3>
//               <motion.div
//                 className="grid grid-cols-1 md:grid-cols-3 gap-6"
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={
//                   isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
//                 }
//                 transition={{ duration: 0.5, staggerChildren: 0.2 }}
//               >
//                 {upcomingTrainings.map((training) => (
//                   <div
//                     key={training.id}
//                     // className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
//                     className="p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border-2 bg-white/10 backdrop-blur-md dark:border-gray-700 bg-transparent shadow-[0px_0px_15px_rgba(0,0,0,0.09)] relative overflow-hidden"
//                     style={{
//                       borderImageSource:
//                         "linear-gradient(to right, #ff80b5, #9089fc)",
//                       borderImageSlice: 1,
//                     }}
//                   >
//                     <h4 className="text-xl font-bold text-white mb-4">
//                       {training.title}
//                     </h4>
//                     <div className="space-y-2 text-gray-600">
//                       <p>Mode: {training.mode}</p>
//                       <p>Price: {training.price}</p>
//                       <p>Duration: {training.duration}</p>
//                       <p>Expected Date: {training.date}</p>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// };

// export default WorkshopOverview2;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MatrixRain from "./animata/MatrixRain";
import GlitchText from "./animata/GlitchText";

const upcomingEvents = [
  {
    id: 1,
    title: "AI Security Fundamentals",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q2 2024",
  },
  {
    id: 2,
    title: "Advanced Penetration Testing",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q2 2024",
  },
  {
    id: 3,
    title: "Machine Learning for Security",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q3 2024",
  },
  {
    id: 4,
    title: "Ethical Hacking Bootcamp",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q2 2024",
  },
  {
    id: 5,
    title: "AI Development Intensive",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q3 2024",
  },
  {
    id: 6,
    title: "Security Operations Training",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q3 2024",
  },
];

const WorkshopOverview = () => {
  const [scrollSpeed, setScrollSpeed] = useState(30); // Default scroll duration

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 768) {
        setScrollSpeed(15); // Faster on smaller screens
      } else {
        setScrollSpeed(30);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <section className="relative py-40 px-4 bg-transparant text-white overflow-hidden main-font-family">
      {/* Background Overlay */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ov.jpg')", filter: "grayscale(100%)" }}
      ></div> */}
      <div className="absolute inset-0 z-[-1]">
        <MatrixRain />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        <h1 className="text-center text-4xl md:text-[2.5rem] sm:text-2xl font-extrabold text-green-100 tracking-widest uppercase bg-clip-text">
          Upcoming <GlitchText text="Workshops" /> &{" "}
          <GlitchText text="Trainings" />
        </h1>

        {/* Auto Sliding Grid */}
        <div className="relative w-full overflow-hidden ">
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
          <motion.div
            className="flex space-x-6 my-[2rem] "
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: scrollSpeed,
              repeat: Infinity,
            }}
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            {[...upcomingEvents, ...upcomingEvents].map((event, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-md bg-black/100 border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center text-center min-w-[300px] max-w-[450px]"
                style={{ boxShadow: "0px 0px 5px" }}
              >
                <h4 className="text-xl md:text-[1rem] sm:text-base font-bold text-white mb-4">
                  {event.title}
                </h4>
                <div className="space-y-2 text-gray-400">
                  <p>Mode: {event.mode}</p>
                  <p>Price: {event.price}</p>
                  <p>Duration: {event.duration}</p>
                  <p>Expected Date: {event.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopOverview;
