// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import MatrixRain from "./animata/MatrixRain";
// import GlitchText from "./animata/GlitchText";

// const upcomingEvents = [
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
//   {
//     id: 4,
//     title: "Ethical Hacking Bootcamp",
//     mode: "Coming Soon",
//     price: "TBA",
//     duration: "TBA",
//     date: "Q2 2024",
//   },
//   {
//     id: 5,
//     title: "AI Development Intensive",
//     mode: "Coming Soon",
//     price: "TBA",
//     duration: "TBA",
//     date: "Q3 2024",
//   },
//   {
//     id: 6,
//     title: "Security Operations Training",
//     mode: "Coming Soon",
//     price: "TBA",
//     duration: "TBA",
//     date: "Q3 2024",
//   },
// ];

// const WorkshopOverview = () => {
//   const [scrollSpeed, setScrollSpeed] = useState(30); // Default scroll duration

//   useEffect(() => {
//     const updateSpeed = () => {
//       if (window.innerWidth < 768) {
//         setScrollSpeed(5); // Faster on smaller screens
//       } else {
//         setScrollSpeed(30);
//       }
//     };

//     updateSpeed();
//     window.addEventListener("resize", updateSpeed);
//     return () => window.removeEventListener("resize", updateSpeed);
//   }, []);

//   return (
//     <section className="relative py-20 sm:py-32 px-4 bg-transparant text-white overflow-hidden main-font-family">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 z-[-1] blur-sm">
//         <MatrixRain />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto space-y-16 sm:space-y-20">
//         {/* Title */}
//         <h1 className="text-center text-2xl sm:text-4xl md:text-[2.5rem] font-extrabold text-[#00ffff] tracking-widest uppercase bg-clip-text">
//           Upcoming <GlitchText text="Workshops" /> &{" "}
//           <GlitchText text="Trainings" />
//         </h1>

//         {/* Auto Sliding Grid */}
//         <div className="relative w-full overflow-hidden">
//           {/* Left Gradient */}
//           <div className="absolute left-0 top-0 h-full w-6 sm:w-8 lg:w-10 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>

//           {/* Scrollable Container */}
//           <div className="overflow-x-scroll scrollbar-hide">
//             <motion.div
//               className="flex space-x-4 sm:space-x-4 lg:space-x-6 my-4 sm:my-6 lg:my-8"
//               animate={{ x: ["0%", "-100%"] }}
//               transition={{
//                 ease: "linear",
//                 duration: scrollSpeed,
//                 repeat: Infinity,
//               }}
//               style={{ display: "flex", whiteSpace: "nowrap" }}
//             >
//               {[...upcomingEvents, ...upcomingEvents].map((event, index) => (
//                 <div
//                   key={index}
//                   className="p-2 sm:p-3 lg:p-6 rounded-lg shadow-md bg-black/100 border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center text-center min-w-[150px] sm:min-w-[200px] lg:min-w-[300px] max-w-[200px] sm:max-w-[250px] lg:max-w-[350px]"
//                   style={{ boxShadow: "0px 0px 5px" }}
//                 >
//                   <h4 className="text-[0.5rem] sm:text-[0.7rem] lg:text-sm font-bold text-[#00ffff] mb-1 sm:mb-2 lg:mb-4">
//                     {event.title}
//                   </h4>
//                   <div className="space-y-0.5 sm:space-y-1 lg:space-y-2 text-gray-400 text-[0.4rem] sm:text-[0.6rem] lg:text-sm">
//                     <p>Mode: {event.mode}</p>
//                     <p>Price: {event.price}</p>
//                     <p>Duration: {event.duration}</p>
//                     <p>Expected Date: {event.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right Gradient */}
//           <div className="absolute right-0 top-0 h-full w-6 sm:w-8 lg:w-10 bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkshopOverview;

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

const CHARS = "!@#$%^&*():{};|,.<>/?";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 25;

const WorkshopOverview = () => {
  const [scrollSpeed, setScrollSpeed] = useState(30); // Default scroll duration

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 768) {
        setScrollSpeed(5); // Faster on smaller screens
      } else {
        setScrollSpeed(30);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <section className="relative py-20 sm:py-32 px-4 bg-transparant text-white overflow-hidden main-font-family">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-[-1] blur-sm">
        <MatrixRain />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16 sm:space-y-20">
        {/* Title */}
        <h1 className="text-center text-2xl sm:text-4xl md:text-[2.5rem] font-extrabold text-[#00ffff] tracking-widest uppercase bg-clip-text">
          Upcoming <GlitchText text="Workshops" /> &{" "}
          <GlitchText text="Trainings" />
        </h1>

        {/* Auto Sliding Grid */}
        <div className="relative w-full overflow-hidden">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 h-full w-6 sm:w-8 lg:w-10 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>

          {/* Scrollable Container */}
          <div className="overflow-x-scroll scrollbar-hide">
            <motion.div
              className="flex space-x-4 sm:space-x-4 lg:space-x-6 my-4 sm:my-6 lg:my-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                ease: "linear",
                duration: scrollSpeed,
                repeat: Infinity,
              }}
              style={{ display: "flex", whiteSpace: "nowrap" }}
            >
              {[...upcomingEvents, ...upcomingEvents].map((event, index) => (
                <ScramblingCard key={index} event={event} />
              ))}
            </motion.div>
          </div>

          {/* Right Gradient */}
          <div className="absolute right-0 top-0 h-full w-6 sm:w-8 lg:w-10 bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

const ScramblingCard = ({ event }: { event: (typeof upcomingEvents)[0] }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [text, setText] = useState(event.title);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = event.title
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= event.title.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(event.title);
  };

  return (
    <div
      className="group p-2 sm:p-3 lg:p-6 rounded-lg shadow-md bg-black/100 border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center text-center min-w-[150px] sm:min-w-[200px] lg:min-w-[300px] max-w-[200px] sm:max-w-[250px] lg:max-w-[350px]"
      style={{ boxShadow: "0px 0px 5px" }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
    >
      <h4 className="text-[0.5rem] sm:text-[0.7rem] lg:text-sm font-bold text-[#00ffff] mb-1 sm:mb-2 lg:mb-4">
        {text}
      </h4>
      <div className="space-y-0.5 sm:space-y-1 lg:space-y-2 text-gray-400 text-[0.4rem] sm:text-[0.6rem] lg:text-sm">
        <p>Mode: {event.mode}</p>
        <p>Price: {event.price}</p>
        <p>Duration: {event.duration}</p>
        <p>Expected Date: {event.date}</p>
      </div>
    </div>
  );
};

export default WorkshopOverview;
