// import { motion, AnimatePresence } from "framer-motion";
// import GlitchText from "./animata/GlitchText";
// import MatrixRain from "./animata/MatrixRain";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import WorkshopForm from "./WorkshopForm";
// import { Button } from "./ui/button";

// const Home = () => {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 main-font-family"
//       style={{
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Background Animation */}
//       <div className="absolute inset-0 z-[-1] blur-sm">
//         <MatrixRain />
//       </div>

//       {/* Main Content */}
//       <AnimatePresence>
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 15 }}
//           transition={{ delay: 0.2 }}
//           className="relative z-10 top-[2rem] text-center w-full max-w-4xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-md border border-green-400 shadow-lg rounded-xl"
//         >
//           {/* Heading */}
//           <h1 className="main-font-family font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-400">
//             <GlitchText text="ILLUSION SECURITY" />
//           </h1>

//           {/* Description */}
//           <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-100 max-w-2xl mx-auto leading-relaxed">
//             Pioneering <GlitchText text="AI" /> and{" "}
//             <GlitchText text="Cybersecurity" /> Training
//             <span className="block mt-2 mb-5 main-font-family font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl">
//               For the Next Generation of <GlitchText text="Elite Hackers" />
//             </span>
//           </p>

//           {/* Workshop Button */}
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button className="rounded-full font-bold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-center transition-all duration-300 bg-black text-white hover:scale-110 shadow-lg border-2">
//                 Register for Workshop
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="bg-transparent border-none max-w-xs sm:max-w-md">
//               <WorkshopForm />
//             </DialogContent>
//           </Dialog>
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Home;

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WorkshopForm from "./WorkshopForm";
// import { Button } from "./ui/button";
import GlitchText from "./animata/GlitchText";
import MatrixRain from "./animata/MatrixRain";

const TARGET_TEXT = "Register for Workshop";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const Home = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
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

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 main-font-family"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-[-1] blur-sm">
        <MatrixRain />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 top-[2rem] text-center w-full max-w-4xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-md border border-green-400 shadow-lg"
      >
        {/* Heading */}
        <h1 className="main-font-family font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-400">
          <GlitchText text="ILLUSION SECURITY" />
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-100 max-w-2xl mx-auto leading-relaxed">
          Pioneering <GlitchText text="AI" /> and{" "}
          <GlitchText text="Cybersecurity" /> Training
          <span className="block mt-2 mb-5 main-font-family font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl">
            For the Next Generation of <GlitchText text="Elite Hackers" />
          </span>
        </p>

        {/* Workshop Button */}
        <Dialog>
          <DialogTrigger asChild>
            <motion.button
              whileHover={{
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.975,
              }}
              onMouseEnter={scramble}
              onMouseLeave={stopScramble}
              className="group relative overflow-hidden font-bold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-center transition-all duration-300 bg-black text-white hover:scale-110 shadow-lg border-2"
            >
              <div className="relative z-10">{text}</div>
              <motion.span
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: "-100%",
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1,
                  ease: "linear",
                }}
                className="absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
              />
            </motion.button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none max-w-xs sm:max-w-md">
            <WorkshopForm />
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
};

export default Home;
