"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkshopForm from "./WorkshopForm";
import GlitchText from "./animata/GlitchText";
import {
  MuteIcon,
  PauseIcon,
  PlayIcon,
  UnmuteIcon,
} from "../components/ui/VideoIcons";
import { useIntro } from "../components/animata/IntroContext";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  // 1. State to control the audio prompt's visibility
  const [showAudioPrompt, setShowAudioPrompt] = useState(false);

  const { isIntroEnded, setIntroEnded } = useIntro();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // 2. Check localStorage to see if the prompt was dismissed before
    const audioPromptDismissed = localStorage.getItem("audioPromptDismissed");
    if (!audioPromptDismissed) {
      setShowAudioPrompt(true);
    }

    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video autoplay was prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      setIsPlaying(!video.paused);
    }
  };

  const toggleMute = () => {
    // 3. When user clicks, hide the prompt and save the choice in localStorage
    if (showAudioPrompt) {
      setShowAudioPrompt(false);
      localStorage.setItem("audioPromptDismissed", "true");
    }

    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleVideoEnd = () => {
    setIntroEnded(true);
    if (videoRef.current) {
      videoRef.current.loop = true;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  if (!hasMounted) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* ... Video and Overlay elements ... */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        // loop={isIntroEnded}
        onEnded={!isIntroEnded ? handleVideoEnd : undefined}
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 w-full h-full bg-black/40 bg-gradient-to-t from-black/60 via-transparent to-black/60" />

      {/* ... Content ... */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isIntroEnded ? "visible" : "hidden"}
        className="relative z-10 top-5 flex flex-col items-center justify-end h-full text-center text-white px-4 pb-24 sm:pb-32"
        style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
      >
        <motion.p
          variants={itemVariants}
          className="max-w-5xl text-l sm:text-2xl lg:text-3xl font-semibold text-green-700"
        >
          Think You Can Handle the Real <GlitchText text="Cyber War" />?
          <br />
          BCoz Most <GlitchText text="Students" /> Fail. Are You Ready for
          What&apos;s <GlitchText text="Really Coming" />?
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="px-8 py-3 text-base font-semibold text-green-400 transition-all duration-300 ease-in-out bg-white/10 border border-white rounded-lg backdrop-blur-sm hover:bg-white/20 hover:border-white/30 hover:scale-105"
              >
                Register For Workshop
              </button>
            </DialogTrigger>

            <DialogContent className="bg-transparent border-none p-0 max-w-sm">
              <WorkshopForm onClose={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </motion.div>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-6 right-6 z-20 flex items-center gap-3"
      >
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white bg-black/50 hover:bg-white/20 transition-all duration-200"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        {/* 4. Container for the mute button and its popup */}
        <div className="relative">
          <AnimatePresence>
            {/* Show prompt only if it's not dismissed AND video is muted */}
            {showAudioPrompt && isMuted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                className="absolute bottom-full right-0 mb-3 px-3 py-1.5 text-sm font-medium text-black bg-white rounded-lg shadow-lg whitespace-nowrap"
              >
                Click for audio
                {/* Pointer arrow */}
                <div className="absolute -bottom-1 right-4 h-0 w-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={toggleMute}
            className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white bg-black/50 hover:bg-white/20 transition-all duration-200"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <MuteIcon /> : <UnmuteIcon />}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
