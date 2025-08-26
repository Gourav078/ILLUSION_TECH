import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WorkshopForm from "./WorkshopForm";
import GlitchText from "./animata/GlitchText";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      {/* <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/home_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Optional Matrix Rain Overlay */}
      {/* <div className="absolute inset-0 z-10 pointer-events-none">
        <MatrixRain />
      </div> */}

      {/* Main Text Content - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-8 z-20 max-w-lg text-left text-white"
      >
        <h1 className="text-xl sm:text-2xl font-bold text-cyan-300 leading-tight">
          <GlitchText text="ILLUSION SECURITY" />
        </h1>

        <p className="mt-3 text-base sm:text-lg text-green-100">
          Pioneering <GlitchText text="AI" /> and{" "}
          <GlitchText text="Cybersecurity" /> Training
          <span className="block font-semibold text-sm sm:text-base mt-2">
            For the Next Generation of <GlitchText text="Elite Hackers" />
          </span>
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group mt-5 px-5 py-3 text-sm sm:text-base border border-white text-white bg-black/60 hover:bg-transparent hover:text-black transition relative overflow-hidden font-semibold rounded"
            >
              <div className="relative z-10">Register For Workshop</div>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1,
                  ease: "linear",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-t from-indigo-500/0 via-indigo-500 to-indigo-500/0 opacity-0 group-hover:opacity-100"
              />
            </motion.button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none max-w-xs">
            <WorkshopForm />
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Buttons - Bottom Right */}
      <div className="absolute bottom-6 right-6 z-20 flex flex-col items-center gap-4">
        {/* Play/Pause */}
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white bg-black/50 hover:scale-105 transition"
        >
          {isPlaying ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Mute/Unmute */}
        <button
          onClick={toggleMute}
          className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white bg-black/50 hover:scale-105 transition"
        >
          {isMuted ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path d="M9 9L5 13H1v-2h4l4-4v14l-4-4H1v-2h4l4 4V9z" />
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path d="M9 9L5 13H1v-2h4l4-4v14l-4-4H1v-2h4l4 4V9z" />
              <path d="M15 8.5c1.4 1.4 1.4 3.6 0 5M17.5 6c3.2 3.2 3.2 8.4 0 11.6" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default Home;
