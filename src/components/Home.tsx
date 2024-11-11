"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../../variants";
import Projectbtn from "./Projectbtn";

const Home = () => {
  return (
    <div className="bg-primary/60 h-screen flex justify-center items-center">
      <div className="bg-gradient-to-r from-primary/10 via-black/30 to-black/10 p-10 rounded-lg">
        <div className="text-center flex flex-col justify-center container mx-auto  pb-6">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-400 inline-block text-transparent bg-clip-text mb-4"
          >
            <TypeAnimation
              sequence={[
                "WE ARE COMING SOON..!",
                1000,
                "STAY TUNED..!!!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md mx-auto text-lg mb-6"
          >
            ILLUSION TECH....!!!
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center"
          >
            <Projectbtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
