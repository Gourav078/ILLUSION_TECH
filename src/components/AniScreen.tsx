"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Array of images to cycle through
const images = [
  { src: "/Ai.jpg", alt: "AI Image" },
  { src: "/bg.jpg", alt: "Background Image" },
  // Add more images as needed
];

const AniScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative h-32 sm:h-48 md:h-56 lg:h-64">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          className="absolute top-0 left-0 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/bg-blur.jpg"
          />
        </motion.div>
      </AnimatePresence>

      

      {/* <div><App/></div> */}
    </div>
  );
};

export default AniScreen;
