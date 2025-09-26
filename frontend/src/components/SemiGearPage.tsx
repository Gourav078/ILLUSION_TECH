"use client";

import React, { useEffect, useRef, useState } from "react";
import { Brain } from "lucide-react";
import {
  workshops1,
  workshops2,
  WorkshopContent,
} from "../../src/data/workshopsData";
import "../app/globals.css";
import MatrixRain from "./animata/MatrixRain";
import WorkshopForm from "./WorkshopForm";
import "@sjmc11/tourguidejs/src/scss/tour.scss";
import dynamic from "next/dynamic";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import TerminalWindow from "./animata/terminalWindow";

declare global {
  interface Window {
    __tourGuideInitialized?: boolean;
  }
}

const SemiGearPage = () => {
  // const [hasInteracted, setHasInteracted] = useState(false);
  const [hoveredContent] = useState<WorkshopContent>({
    title: "Welcome to the Cybersecurity & AI Hub",
    description: "Hover or click an icon to view details.",
    Icon: Brain,
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  });

  const [selectedContent, setSelectedContent] =
    useState<WorkshopContent | null>(null);

  const [modalContent, setModalContent] = useState<WorkshopContent | null>(
    null
  );

  useEffect(() => {
    if (modalContent) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled when component unmounts
    };
  }, [modalContent]);

  // try
  const [tourStarted, setTourStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !tourStarted) {
          requestAnimationFrame(async () => {
            const { TourGuideClient } = await import("@sjmc11/tourguidejs");
            startTour(TourGuideClient);
            setTourStarted(true);
            observer.disconnect();
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [tourStarted]);

  const startTour = (
    TourGuideClient: typeof import("@sjmc11/tourguidejs").TourGuideClient
  ) => {
    if (typeof window !== "undefined" && !window.__tourGuideInitialized) {
      window.__tourGuideInitialized = true;

      const tg = new TourGuideClient({
        exitOnClickOutside: false,
        closeButton: true,
        autoScroll: false,
        targetPadding: 0,
      });

      tg.start();
    }
  };

  // SMALL SCREEN THINGS - START
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // SMALL SCREEN THINGS - END

  // SWIPER - START
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right">(
    "left"
  );

  const workshops = [...workshops1, ...workshops2]; // Combine both workshop arrays

  const handleSwipe = (direction: "left" | "right") => {
    setSwipeDirection(direction); // Set the swipe direction
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === workshops.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? workshops.length - 1 : prevIndex - 1
      );
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    trackMouse: true, // Allows swipe detection with a mouse
  });
  // SWIPER - END

  // FORM ALIGNMENT
  const [showFormModal, setShowFormModal] = useState(false);

  // FOR NEW UI
  const [apple, setApple] = useState(false); // controls expanded/collapsed stat
  const [showIcons, setShowIcons] = useState(false);
  const [reversing, setReversing] = useState(false);
  const [isFadingOutIcons, setIsFadingOutIcons] = useState(false);

  // right side lines
  const [banana, setBanana] = useState(false);
  const [showIconsRight, setShowIconsRight] = useState(false);
  const [isFadingOutIconsRight, setIsFadingOutIconsRight] = useState(false);
  const [reversingRight, setReversingRight] = useState(false);

  // -------------
  const script1: { type: "command" | "output"; text: string }[] = [
    {
      type: "command",
      text: "python train.py --model=efficientnet --epochs=50",
    },
    { type: "output", text: "Loading dataset 'CIFAR-100'..." },
    { type: "output", text: "Found 50000 images belonging to 100 classes." },
    {
      type: "output",
      text: "Epoch 25/50 - loss: 0.0871 - acc: 0.9712 - val_acc: 0.9250",
    },
    { type: "command", text: "tensorboard --logdir ./training_logs" },
    { type: "output", text: "TensorBoard 2.15.0 at http://localhost:6006/" },
    { type: "command", text: "git pull origin main" },
    { type: "output", text: "Updating 2f8e9a1..c3d7b4e" },
    { type: "output", text: "Fast-forward | src/models/attention.py | 2 +- " },
    { type: "command", text: "pip install --upgrade scikit-learn" },
    {
      type: "output",
      text: "Requirement already satisfied: scikit-learn in /usr/local/lib/",
    },
    { type: "output", text: "Successfully installed numpy-1.26.0" },
  ];

  const script2: { type: "command" | "output"; text: string }[] = [
    { type: "command", text: "nmap -sV -p- 192.168.1.102 --open" },
    { type: "output", text: "Host is up (0.0021s latency)." },
    { type: "output", text: "Found open port 22/tcp on 192.168.1.102" },
    { type: "output", text: "Found open port 80/tcp on 192.168.1.102" },
    {
      type: "output",
      text: "Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel",
    },
    { type: "command", text: "john --wordlist=pass.lst hashes.txt" },
    {
      type: "output",
      text: "Loaded 2 password hashes with no different salts",
    },
    {
      type: "output",
      text: "Press 'q' or Ctrl-C to abort, almost any other key for status",
    },
    { type: "output", text: "password123      (root)" },
    {
      type: "command",
      text: "msfconsole -q -x 'search type:exploit cve:2024'",
    },
    { type: "output", text: "Matching Modules" },
    { type: "output", text: "================ " },
    { type: "output", text: "exploit/windows/smb/ms17_010_eternalblue" },
  ];

  return (
    <>
      {isSmallScreen ? (
        <section
          ref={sectionRef}
          className="relative flex justify-center items-center min-h-screen text-white overflow-hidden "
        >
          <div className="absolute flex justify-center items-center inset-0 z-[-1] blur-sm">
            <MatrixRain />
          </div>
          <div className="floating-computer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484.5 510.9">
              <title></title>
              <g id="computer">
                <rect
                  x="67.7"
                  width="348"
                  height="217"
                  rx="17.5"
                  ry="17.5"
                  fill="#c5d5d7"
                />
                <path
                  d="M803.4,378.2H490.7c-9.7,0-17.5-6.3-17.5-14.2v7.7c0,7.8,7.8,14.2,17.5,14.2H803.4c9.7,0,17.5-6.3,17.5-14.2V364C820.9,371.8,813,378.2,803.4,378.2Z"
                  transform="translate(-405.5 -167)"
                  fill="#b6babd"
                />
                <rect x="203.8" y="218" width="75" height="55" fill="#c5d5d7" />
                <rect
                  x="203.8"
                  y="267.3"
                  width="75"
                  height="5.75"
                  fill="#636b6c"
                />
                <rect
                  x="203.8"
                  y="261.9"
                  width="75"
                  height="5.75"
                  fill="#94a0a1"
                />
                <rect
                  x="203.8"
                  y="256.1"
                  width="75"
                  height="5.75"
                  fill="#bfbfbf"
                />
                <rect
                  x="124.8"
                  y="273"
                  width="233"
                  height="19"
                  rx="2.4"
                  ry="2.4"
                  fill="#c5d5d7"
                />
                <path
                  d="M760.9,453.5H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,452.8,762.3,453.5,760.9,453.5Z"
                  transform="translate(-405.5 -167)"
                  fill="#6f7879"
                />
                <path
                  d="M760.9,447.3H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,446.6,762.3,447.3,760.9,447.3Z"
                  transform="translate(-405.5 -167)"
                  fill="#bfc6c7"
                />
                <circle cx="241.7" cy="197.2" r="9.1" fill="#6f7879" />
              </g>
              <g
                data-tg-tour="Swipe left or right to view more workshops."
                data-tg-order={1}
                id="screen"
              >
                <rect
                  x="79.8"
                  y="17.5"
                  width="323"
                  height="164.5"
                  // fill="url(#g300)"
                  rx="10"
                />
                <foreignObject x="90" y="25" width="300" height="150">
                  <div
                    {...swipeHandlers}
                    className="relative w-full h-full flex flex-col justify-between items-center"
                  >
                    <motion.div
                      key={currentIndex}
                      initial={{
                        x: swipeDirection === "left" ? 300 : -300, // Start position based on swipe direction
                        opacity: 0,
                      }}
                      animate={{ x: 0, opacity: 1 }} // Animate to center
                      exit={{
                        x: swipeDirection === "left" ? -300 : 300, // Exit position based on swipe direction
                        opacity: 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className="screen-content text-center"
                    >
                      <h3 className="text-lg font-bold text-white">
                        {workshops[currentIndex].title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {workshops[currentIndex].description}
                      </p>
                    </motion.div>

                    {/* Dots for Navigation */}
                    <div className="flex justify-center items-center space-x-2 my-4">
                      {workshops.map((_, index) => (
                        <motion.div
                          key={index}
                          className={`h-2 w-2 rounded-full cursor-pointer ${
                            currentIndex === index ? "bg-white" : "bg-gray-500"
                          }`}
                          onClick={() => setCurrentIndex(index)}
                          animate={{
                            scale: currentIndex === index ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                          style={{
                            filter:
                              currentIndex === index ? "none" : "blur(2px)", // Blur inactive dots
                          }}
                        />
                      ))}
                    </div>

                    <div className="flex justify-between w-full px-4">
                      <button
                        data-tg-tour="You can expand the view of this content."
                        data-tg-order={2}
                        className="expand-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        onClick={() =>
                          setModalContent({
                            title: workshops[currentIndex].title,
                            description: workshops[currentIndex].description,
                            Icon: workshops[currentIndex].Icon,
                            fullContent: workshops[currentIndex].fullContent,
                          })
                        }
                      >
                        🔍 Expand
                      </button>
                      <button
                        data-tg-tour="You can register yourself for the upcoming workshops."
                        data-tg-order={99}
                        onClick={() => setShowFormModal(true)}
                        className="register-button bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </foreignObject>
              </g>
              <g id="triMain">
                <g>
                  <polygon
                    points="162.3 429.3 144.8 450.1 4.4 290 479.1 290 349.7 403.6 278.8 497.7 264.4 478.5 241.3 498.7 162.3 429.3"
                    fill="#39a86d"
                  />
                  <path
                    d="M879.4,459,753.8,569.2l-69.4,92.1-14.2-18.8L646.9,663l-79.2-69.5L550.3,614l-136-155h465m10.6-4H405.5l5.8,6.6,136,155,3.1,3.5,3-3.6,14.7-17.4L644.2,666l2.6,2.3,2.6-2.3,20.1-17.6,11.6,15.4,3.2,4.2,3.2-4.2L756.7,572,882,462l8-7Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="436.1 292 327.1 387.6 266.9 467.6 254.6 451.2 234.3 469 165.6 408.7 150.6 426.5 32.6 292 8.8 292 144.8 447 162.1 426.5 241.3 496 264.7 475.5 278.8 494.3 348.2 402.2 473.8 292 436.1 292"
                  fill="#297d51"
                />
              </g>
              <g id="triMid">
                <g>
                  <polygon
                    points="160.2 456.7 237.6 456.7 199.2 503.3 160.2 456.7"
                    fill="#39a86d"
                  />
                  <path
                    d="M640,625.2,604.7,668,569,625.2h71m6.4-3H562.6l4.1,4.9,35.7,42.8,2.3,2.8,2.3-2.8,35.3-42.8,4.1-4.9Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="217.7 458.2 190.7 490.9 199.1 501 234.5 458.2 217.7 458.2"
                  fill="#297d51"
                />
              </g>
              <g id="triLeftSmall">
                <g>
                  <polygon
                    points="29.4 444.1 66.2 444.1 47.9 466.2 29.4 444.1"
                    fill="#39a86d"
                  />
                  <path
                    d="M467.5,613.1l-14,17-14.2-17h28.2m8.5-4H430.7l5.5,6.6,14.2,17,3.1,3.7,3.1-3.7,14-17,5.4-6.5Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="55.3 446.1 44.5 459.1 47.9 463.1 61.9 446.1 55.3 446.1"
                  fill="#297d51"
                />
              </g>
              <g id="triRightSmall">
                <g>
                  <polygon
                    points="335.3 487.7 369.9 487.7 352.7 508.5 335.3 487.7"
                    fill="#39a86d"
                  />
                  <path
                    d="M772.3,656.2l-14,17-14.2-17h28.2m6.4-3h-41l4.1,4.9,14.2,17,2.3,2.8,2.3-2.8,14-17,4.1-4.9Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="360.1 489.2 349.4 502.2 352.7 506.2 366.7 489.2 360.1 489.2"
                  fill="#297d51"
                />
              </g>
              <g id="triLeft">
                <g>
                  <polygon
                    points="16.7 359 173.3 359 95.4 438.2 16.7 359"
                    fill="#39a86d"
                  />
                  <path
                    d="M575.2,527.5,501,603.1l-75.1-75.6H575.2m7.2-3H418.7l5.1,5.1,75.1,75.6,2.1,2.2,2.1-2.2,74.3-75.6,5-5.1Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="147.8 360.5 84.2 425.2 95 436.1 169.3 360.5 147.8 360.5"
                  fill="#297d51"
                />
              </g>
              <g id="triRight">
                <g>
                  <polygon
                    points="197.2 314.2 479.6 314.2 395.4 407.5 392.1 403.5 339.3 457.2 197.2 314.2"
                    fill="#39a86d"
                  />
                  <path
                    d="M881.8,482.7,801,572.2l-3.3-4-52.9,53.8L606.3,482.7H881.8m6.7-3H599.1l5.1,5.1L742.7,624.2l2.1,2.2,2.1-2.2,50.6-51.5,1.2,1.4,2.2,2.7,2.3-2.6L884,484.7l4.5-5Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="224.8 315.7 200.8 315.7 339.3 455.1 351.2 442.9 224.8 315.7"
                  fill="#297d51"
                />
              </g>
              <linearGradient
                id="g300"
                gradientUnits="userSpaceOnUse"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop stopColor="#67B26F" offset="0" />
                <stop stopColor="#4CA2CD" offset="1" />
              </linearGradient>
            </svg>
          </div>
          {/* FORM ALIGNMENT */}

          {/* Modal Window for Expanded Content */}
          {modalContent && (
            <div className="modal-overlay fixed top-[5rem] inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="custom-scrollbar modal-content relative top-10 h-[80%] w-[90%] md:w-[80%] overflow-y-auto neon-glow bg-gray-900 p-4 md:p-6 rounded-lg">
                <div className="sticky top-0 right-0 flex justify-end p-2 bg-transparant z-10">
                  <button
                    onClick={() => setModalContent(null)}
                    className="text-gray-300 hover:text-white text-lg"
                  >
                    ✖
                  </button>
                </div>
                <h2 className="text-[1.5rem] md:text-[3rem] font-bold mb-4">
                  {modalContent.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-lg">
                  {modalContent.description}
                </p>
                <div
                  className="text-gray-300 max-h-[60vh] text-sm md:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: modalContent.fullContent ?? "",
                  }}
                />
              </div>
            </div>
          )}

          {/* FROM AILGNMENT */}
          {showFormModal && (
            <div className="fixed inset-0 z-50 top-[5rem] bg-black bg-opacity-70 flex items-center justify-center">
              <div className="relative bg-transparant rounded-lg p-6 w-full max-w-[50rem] mx-4 max-h-[80vh] overflow-y-auto">
                <button
                  onClick={() => setShowFormModal(false)}
                  className="absolute top-5 right-[12rem] text-gray-300 hover:text-white"
                >
                  ✖
                </button>
                <WorkshopForm />
              </div>
            </div>
          )}
        </section>
      ) : (
        <section
          ref={sectionRef}
          className="relative flex justify-center items-center min-h-screen text-white overflow-hidden "
        >
          <div className="absolute flex justify-center items-center inset-0 z-[-1] blur-sm">
            <MatrixRain />
          </div>
          {/* Rotating Circle - left */}
          {/* <div className="circle-container left-[-410px] h-[20rem] w-[50vw] flex justify-center items-center overflow-hidden relative">
            <svg
              className="svg-connect absolute inset-0 w-[1000px] h-[1200px]"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="" />
                  <feMerge>
                    <feMergeNode in="" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {apple &&
                workshops1.slice(0, 4).map((_, index) => {
                  const centerX = 400;
                  const centerY = 300;
                  const stepX = 550;
                  const stepY = 150 + index * 100;

                  // Create curved path
                  const controlX1 = centerX + 80;
                  const controlY1 = centerY - 20;
                  const controlX2 = stepX - 80;
                  const controlY2 = stepY;

                  return (
                    <path
                      key={index}
                      d={`M ${centerX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${stepX} ${stepY}`}
                      fill="none"
                      stroke="#39ff14"
                      strokeWidth="4"
                      opacity={0.9}
                      className={reversing ? "reverse-path" : "draw-path"}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animationPlayState:
                          apple || reversing ? "running" : "paused",
                      }}
                    />
                  );
                })}
            </svg>

            <div
              className="w-24 h-24 bg-black rounded-full flex justify-center items-center text-white cursor-pointer transition-transform duration-300 z-10 center-icon border border-[rgba(26,255,0,0.727)] relative"
              // onClick={() => setApple(!apple)}
              onClick={() => {
                if (!apple) {
                  // Animate in
                  setApple(true);
                  setReversing(false);
                  setShowIcons(false);
                  setIsFadingOutIcons(false);
                  setTimeout(() => setShowIcons(true), 90); // after lines animate in
                } else {
                  // Animate out
                  setIsFadingOutIcons(true); // play fade-out animation
                  setShowIcons(false); // hide icon content logically
                  setReversing(true); // reverse the line animation
                  setTimeout(() => {
                    setApple(false); // hide lines after animation
                    setReversing(false);
                    setIsFadingOutIcons(false); // reset fade state
                  }, 100);
                }
              }}
              style={{
                border: `4px solid rgba(26,255,0,0.727)`,
                boxShadow: apple
                  ? "0 0 20px rgba(26,255,0,0.5)"
                  : "0 0 10px rgba(26,255,0,0.3)",
              }}
            >
              <span className="text-center text-[2.5rem]">AI</span>
            </div>

            <div
              className="single-container absolute right-[-50px] flex flex-col justify-center gap-14 transition-all duration-500"
              style={{
                top: "0%",
                rotate: "-22.5deg",
              }}
            >
              {workshops1.slice(0, 4).map((workshop, index) => (
                <div
                  key={index}
                  className={`icon-container2 relative ${
                    showIcons
                      ? "fade-slide-in"
                      : isFadingOutIcons
                      ? "fade-slide-out"
                      : "hidden-icon"
                  }`}
                  style={{
                    animationDelay: `${index * 0.2 + 1}s`,
                    animationFillMode: "forwards",
                  }} // staggered after lines
                  onClick={() => {
                    setSelectedContent(workshop);
                  }}
                >
                  <div className="flex items-center gap-3 bg-black bg-opacity-80 px-4 py-2 cursor-pointer hover:bg-opacity-90 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-transparent text-green-400 flex items-center justify-center">
                      <workshop.Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-white font-medium">
                      Step {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <TerminalWindow title="Git Status" script={script1} />
          </div> */}
          {/* Rotating Circle - left */}
          <div className="circle-container left-[-410px] h-[20rem] w-[50vw] flex justify-center items-center overflow-hidden relative">
            {/* SVG for curved connections (code remains the same) */}
            <svg
              className="svg-connect absolute inset-0 w-[1000px] h-[1200px]"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="" />
                  <feMerge>
                    <feMergeNode in="" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {apple &&
                workshops1.slice(0, 4).map((_, index) => {
                  const centerX = 400;
                  const centerY = 300;
                  const stepX = 550;
                  const stepY = 150 + index * 100;
                  const controlX1 = centerX + 80;
                  const controlY1 = centerY - 20;
                  const controlX2 = stepX - 80;
                  const controlY2 = stepY;

                  return (
                    <path
                      key={index}
                      d={`M ${centerX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${stepX} ${stepY}`}
                      fill="none"
                      stroke="#39ff14"
                      strokeWidth="4"
                      opacity={0.9}
                      className={reversing ? "reverse-path" : "draw-path"}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animationPlayState:
                          apple || reversing ? "running" : "paused",
                      }}
                    />
                  );
                })}
            </svg>

            {/* Center Icon (code remains the same) */}
            <div
              className="w-24 h-24 bg-black rounded-full flex justify-center items-center text-white cursor-pointer transition-transform duration-300 z-10 center-icon border border-[rgba(26,255,0,0.727)] relative"
              onClick={() => {
                if (!apple) {
                  setApple(true);
                  setReversing(false);
                  setShowIcons(false);
                  setIsFadingOutIcons(false);
                  setTimeout(() => setShowIcons(true), 90);
                } else {
                  setIsFadingOutIcons(true);
                  setShowIcons(false);
                  setReversing(true);
                  setTimeout(() => {
                    setApple(false);
                    setReversing(false);
                    setIsFadingOutIcons(false);
                  }, 100);
                }
              }}
              style={{
                border: `4px solid rgba(26,255,0,0.727)`,
                boxShadow: apple
                  ? "0 0 20px rgba(26,255,0,0.5)"
                  : "0 0 10px rgba(26,255,0,0.3)",
              }}
            >
              <span className="text-center text-[2.5rem]">AI</span>
            </div>

            {/* Surrounding Icons (Steps) (code remains the same) */}
            <div
              className="single-container absolute right-[-50px] flex flex-col justify-center gap-14 transition-all duration-500"
              style={{
                top: "0%",
                rotate: "-22.5deg",
              }}
            >
              {workshops1.slice(0, 4).map((workshop, index) => (
                <div
                  key={index}
                  className={`icon-container2 relative ${
                    showIcons
                      ? "fade-slide-in"
                      : isFadingOutIcons
                      ? "fade-slide-out"
                      : "hidden-icon"
                  }`}
                  style={{
                    animationDelay: `${index * 0.2 + 1}s`,
                    animationFillMode: "forwards",
                  }}
                  onClick={() => {
                    setSelectedContent(workshop);
                  }}
                >
                  <div className="flex items-center gap-3 bg-black bg-opacity-80 px-4 py-2 cursor-pointer hover:bg-opacity-90 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-transparent text-green-400 flex items-center justify-center">
                      <workshop.Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-white font-medium">
                      Step {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* --- 1. WRAPPER FOR THE TERMINAL WINDOW --- */}
            <div
              className={`absolute transition-all duration-500 ease-in-out ${
                apple
                  ? "opacity-0 filter blur-md pointer-events-none" // When steps are visible, hide and blur terminal
                  : "opacity-100 filter-none" // When steps are hidden, show terminal
              }`}
              style={{
                // Position it to align with the steps container for a smooth transition
                right: "-150px",
                top: "12%",
                rotate: "-22.5deg",
              }}
            >
              <TerminalWindow title="AI Model Training" script={script1} />
            </div>
          </div>

          {/* Title */}
          <div className="floating-computer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484.5 510.9">
              <title></title>
              <g id="computer">
                <rect
                  x="67.7"
                  width="348"
                  height="217"
                  rx="17.5"
                  ry="17.5"
                  fill="#c5d5d7"
                />
                <path
                  d="M803.4,378.2H490.7c-9.7,0-17.5-6.3-17.5-14.2v7.7c0,7.8,7.8,14.2,17.5,14.2H803.4c9.7,0,17.5-6.3,17.5-14.2V364C820.9,371.8,813,378.2,803.4,378.2Z"
                  transform="translate(-405.5 -167)"
                  fill="#b6babd"
                />
                <rect x="203.8" y="218" width="75" height="55" fill="#c5d5d7" />
                <rect
                  x="203.8"
                  y="267.3"
                  width="75"
                  height="5.75"
                  fill="#636b6c"
                />
                <rect
                  x="203.8"
                  y="261.9"
                  width="75"
                  height="5.75"
                  fill="#94a0a1"
                />
                <rect
                  x="203.8"
                  y="256.1"
                  width="75"
                  height="5.75"
                  fill="#bfbfbf"
                />
                <rect
                  x="124.8"
                  y="273"
                  width="233"
                  height="19"
                  rx="2.4"
                  ry="2.4"
                  fill="#c5d5d7"
                />
                <path
                  d="M760.9,453.5H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,452.8,762.3,453.5,760.9,453.5Z"
                  transform="translate(-405.5 -167)"
                  fill="#6f7879"
                />
                <path
                  d="M760.9,447.3H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,446.6,762.3,447.3,760.9,447.3Z"
                  transform="translate(-405.5 -167)"
                  fill="#bfc6c7"
                />
                <circle cx="241.7" cy="197.2" r="9.1" fill="#6f7879" />
              </g>
              <g
                data-tg-tour="Selected content is visible here."
                data-tg-order={1}
                id="screen"
              >
                <rect
                  x="79.8"
                  y="17.5"
                  width="323"
                  height="164.5"
                  // fill="url(#g300)"
                  rx="10"
                />
                <foreignObject x="90" y="25" width="300" height="150">
                  <div className="screen-content">
                    <h3>{selectedContent?.title || hoveredContent.title}</h3>
                    <p>
                      {selectedContent?.description ||
                        hoveredContent.description}
                    </p>
                    <button
                      data-tg-tour="You can expand the view of this content."
                      data-tg-order={2}
                      className="expand-button"
                      onClick={() =>
                        setModalContent({
                          title:
                            selectedContent?.title ||
                            "Why Choose IllusionSecurity.ai?",
                          description:
                            selectedContent?.description ||
                            "It all started with a movie.",
                          Icon: selectedContent?.Icon || Brain,
                          fullContent: selectedContent?.fullContent || (
                            <div>Hello</div>
                          ),
                        })
                      }
                    >
                      🔍 Expand
                    </button>
                    <button
                      data-tg-tour="You can register yourself for the upcoming workshops."
                      data-tg-order={99}
                      onClick={() => setShowFormModal(true)}
                      className="register-button bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                    >
                      Register
                    </button>
                  </div>
                </foreignObject>
              </g>
              <g id="triMain">
                <g>
                  <polygon
                    points="162.3 429.3 144.8 450.1 4.4 290 479.1 290 349.7 403.6 278.8 497.7 264.4 478.5 241.3 498.7 162.3 429.3"
                    fill="#39a86d"
                  />
                  <path
                    d="M879.4,459,753.8,569.2l-69.4,92.1-14.2-18.8L646.9,663l-79.2-69.5L550.3,614l-136-155h465m10.6-4H405.5l5.8,6.6,136,155,3.1,3.5,3-3.6,14.7-17.4L644.2,666l2.6,2.3,2.6-2.3,20.1-17.6,11.6,15.4,3.2,4.2,3.2-4.2L756.7,572,882,462l8-7Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="436.1 292 327.1 387.6 266.9 467.6 254.6 451.2 234.3 469 165.6 408.7 150.6 426.5 32.6 292 8.8 292 144.8 447 162.1 426.5 241.3 496 264.7 475.5 278.8 494.3 348.2 402.2 473.8 292 436.1 292"
                  fill="#297d51"
                />
              </g>
              <g id="triMid">
                <g>
                  <polygon
                    points="160.2 456.7 237.6 456.7 199.2 503.3 160.2 456.7"
                    fill="#39a86d"
                  />
                  <path
                    d="M640,625.2,604.7,668,569,625.2h71m6.4-3H562.6l4.1,4.9,35.7,42.8,2.3,2.8,2.3-2.8,35.3-42.8,4.1-4.9Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="217.7 458.2 190.7 490.9 199.1 501 234.5 458.2 217.7 458.2"
                  fill="#297d51"
                />
              </g>
              <g id="triLeftSmall">
                <g>
                  <polygon
                    points="29.4 444.1 66.2 444.1 47.9 466.2 29.4 444.1"
                    fill="#39a86d"
                  />
                  <path
                    d="M467.5,613.1l-14,17-14.2-17h28.2m8.5-4H430.7l5.5,6.6,14.2,17,3.1,3.7,3.1-3.7,14-17,5.4-6.5Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="55.3 446.1 44.5 459.1 47.9 463.1 61.9 446.1 55.3 446.1"
                  fill="#297d51"
                />
              </g>
              <g id="triRightSmall">
                <g>
                  <polygon
                    points="335.3 487.7 369.9 487.7 352.7 508.5 335.3 487.7"
                    fill="#39a86d"
                  />
                  <path
                    d="M772.3,656.2l-14,17-14.2-17h28.2m6.4-3h-41l4.1,4.9,14.2,17,2.3,2.8,2.3-2.8,14-17,4.1-4.9Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="360.1 489.2 349.4 502.2 352.7 506.2 366.7 489.2 360.1 489.2"
                  fill="#297d51"
                />
              </g>
              <g id="triLeft">
                <g>
                  <polygon
                    points="16.7 359 173.3 359 95.4 438.2 16.7 359"
                    fill="#39a86d"
                  />
                  <path
                    d="M575.2,527.5,501,603.1l-75.1-75.6H575.2m7.2-3H418.7l5.1,5.1,75.1,75.6,2.1,2.2,2.1-2.2,74.3-75.6,5-5.1Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="147.8 360.5 84.2 425.2 95 436.1 169.3 360.5 147.8 360.5"
                  fill="#297d51"
                />
              </g>
              <g id="triRight">
                <g>
                  <polygon
                    points="197.2 314.2 479.6 314.2 395.4 407.5 392.1 403.5 339.3 457.2 197.2 314.2"
                    fill="#39a86d"
                  />
                  <path
                    d="M881.8,482.7,801,572.2l-3.3-4-52.9,53.8L606.3,482.7H881.8m6.7-3H599.1l5.1,5.1L742.7,624.2l2.1,2.2,2.1-2.2,50.6-51.5,1.2,1.4,2.2,2.7,2.3-2.6L884,484.7l4.5-5Z"
                    transform="translate(-405.5 -167)"
                    fill="#3fba79"
                  />
                </g>
                <polygon
                  points="224.8 315.7 200.8 315.7 339.3 455.1 351.2 442.9 224.8 315.7"
                  fill="#297d51"
                />
              </g>
              <linearGradient
                id="g300"
                gradientUnits="userSpaceOnUse"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop stopColor="#67B26F" offset="0" />
                <stop stopColor="#4CA2CD" offset="1" />
              </linearGradient>
            </svg>
          </div>

          {/* Rotating Circle - right */}
          {/* <div className="circle-container top-0 right-[-410px] h-full w-[50vw] flex justify-center items-center overflow-hidden relative">
            <svg
              className="svg-connect-r absolute inset-0 w-[1000px] h-[1200px]"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="" />
                  <feMerge>
                    <feMergeNode in="" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {banana &&
                workshops2.slice(0, 4).map((_, index) => {
                  const centerX = 600;
                  const centerY = 300;
                  const stepX = 450;
                  const stepY = 150 + index * 100;

                  const controlX1 = centerX - 80;
                  const controlY1 = centerY - 20;
                  const controlX2 = stepX + 80;
                  const controlY2 = stepY;

                  return (
                    <path
                      key={index}
                      d={`M ${centerX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${stepX} ${stepY}`}
                      fill="none"
                      stroke="#39ff14"
                      strokeWidth="4"
                      opacity={0.9}
                      className={reversingRight ? "reverse-path" : "draw-path"}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animationPlayState:
                          banana || reversingRight ? "running" : "paused",
                      }}
                    />
                  );
                })}
            </svg>

            <div
              className="w-24 h-24 bg-black rounded-full flex justify-center items-center text-white cursor-pointer transition-transform duration-300 z-10 center-icon border border-[rgba(26,255,0,0.727)] relative"
              onClick={() => {
                if (!banana) {
                  setBanana(true);
                  setReversingRight(false);
                  setShowIconsRight(false);
                  setIsFadingOutIconsRight(false);
                  setTimeout(() => setShowIconsRight(true), 90);
                } else {
                  setIsFadingOutIconsRight(true);
                  setShowIconsRight(false);
                  setReversingRight(true);
                  setTimeout(() => {
                    setBanana(false);
                    setReversingRight(false);
                    setIsFadingOutIconsRight(false);
                  }, 100);
                }
              }}
              style={{
                border: `4px solid rgba(26,255,0,0.727)`,
                boxShadow: banana
                  ? "0 0 20px rgba(26,255,0,0.5)"
                  : "0 0 10px rgba(26,255,0,0.3)",
              }}
            >
              <span className="text-center text-[2.5rem]">CS</span>
            </div>

            <div
              className="single-container absolute left-[-50px] flex flex-col justify-center gap-14 transition-all duration-500"
              style={{
                top: "34%",
                rotate: "-22.5deg",
              }}
            >
              {workshops2.slice(0, 4).map((workshop, index) => (
                <div
                  key={index}
                  className={`icon-container2 relative ${
                    showIconsRight
                      ? "fade-slide-in"
                      : isFadingOutIconsRight
                      ? "fade-slide-out"
                      : "hidden-icon"
                  }`}
                  style={{
                    animationDelay: `${index * 0.2 + 1}s`,
                    animationFillMode: "forwards",
                  }}
                  onClick={() => {
                    setSelectedContent(workshop);
                  }}
                >
                  <div className="flex items-center gap-3 bg-black bg-opacity-80 px-4 py-2 cursor-pointer hover:bg-opacity-90 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-transparent text-green-400 flex items-center justify-center">
                      <workshop.Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-white font-medium">
                      Step {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          {/* Rotating Circle - right */}
          <div className="circle-container top-0 right-[-410px] h-full w-[50vw] flex justify-center items-center overflow-hidden relative">
            {/* Right Side SVG Paths (code remains the same) */}
            <svg
              className="svg-connect-r absolute inset-0 w-[1000px] h-[1200px]"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="" />
                  <feMerge>
                    <feMergeNode in="" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {banana &&
                workshops2.slice(0, 4).map((_, index) => {
                  const centerX = 600;
                  const centerY = 300;
                  const stepX = 450;
                  const stepY = 150 + index * 100;
                  const controlX1 = centerX - 80;
                  const controlY1 = centerY - 20;
                  const controlX2 = stepX + 80;
                  const controlY2 = stepY;

                  return (
                    <path
                      key={index}
                      d={`M ${centerX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${stepX} ${stepY}`}
                      fill="none"
                      stroke="#39ff14"
                      strokeWidth="4"
                      opacity={0.9}
                      className={reversingRight ? "reverse-path" : "draw-path"}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animationPlayState:
                          banana || reversingRight ? "running" : "paused",
                      }}
                    />
                  );
                })}
            </svg>

            {/* Center Icon (code remains the same) */}
            <div
              className="w-24 h-24 bg-black rounded-full flex justify-center items-center text-white cursor-pointer transition-transform duration-300 z-10 center-icon border border-[rgba(26,255,0,0.727)] relative"
              onClick={() => {
                if (!banana) {
                  setBanana(true);
                  setReversingRight(false);
                  setShowIconsRight(false);
                  setIsFadingOutIconsRight(false);
                  setTimeout(() => setShowIconsRight(true), 90);
                } else {
                  setIsFadingOutIconsRight(true);
                  setShowIconsRight(false);
                  setReversingRight(true);
                  setTimeout(() => {
                    setBanana(false);
                    setReversingRight(false);
                    setIsFadingOutIconsRight(false);
                  }, 100);
                }
              }}
              style={{
                border: `4px solid rgba(26,255,0,0.727)`,
                boxShadow: banana
                  ? "0 0 20px rgba(26,255,0,0.5)"
                  : "0 0 10px rgba(26,255,0,0.3)",
              }}
            >
              <span className="text-center text-[2.5rem]">CS</span>
            </div>

            {/* Right Icons (code remains the same) */}
            <div
              className="single-container absolute left-[-50px] flex flex-col justify-center gap-14 transition-all duration-500"
              style={{
                top: "34%",
                rotate: "-22.5deg",
              }}
            >
              {workshops2.slice(0, 4).map((workshop, index) => (
                <div
                  key={index}
                  className={`icon-container2 relative ${
                    showIconsRight
                      ? "fade-slide-in"
                      : isFadingOutIconsRight
                      ? "fade-slide-out"
                      : "hidden-icon"
                  }`}
                  style={{
                    animationDelay: `${index * 0.2 + 1}s`,
                    animationFillMode: "forwards",
                  }}
                  onClick={() => {
                    setSelectedContent(workshop);
                  }}
                >
                  <div className="flex items-center gap-3 bg-black bg-opacity-80 px-4 py-2 cursor-pointer hover:bg-opacity-90 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-transparent text-green-400 flex items-center justify-center">
                      <workshop.Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-white font-medium">
                      Step {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* --- 1. ADDED TERMINAL WINDOW FOR THE RIGHT SIDE --- */}
            <div
              className={`absolute transition-all duration-500 ease-in-out ${
                banana // <-- Visibility is controlled by the 'banana' state
                  ? "opacity-0 filter blur-md pointer-events-none"
                  : "opacity-100 filter-none"
              }`}
              style={{
                // Positioned to match the 'Right Icons' container
                left: "-155px",
                top: "34%",
                rotate: "-22.5deg",
              }}
            >
              <TerminalWindow title="Cybersecurity Ops" script={script2} />
            </div>
          </div>

          {/* Modal Window for Expanded Content */}
          {modalContent && (
            <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div
                className=" custom-scrollbar modal-content relative top-10 h-[80%] w-[80%] overflow-y-auto neon-glow bg-gray-900 p-6 rounded-lg"
                // className="modal-content"
              >
                <div className="sticky top-0 right-0 flex justify-end p-2 bg-transparant z-10">
                  <button
                    onClick={() => setModalContent(null)}
                    className="text-gray-300 hover:text-white text-lg"
                  >
                    ✖
                  </button>
                </div>

                <h2 className="text-[2rem] md:text-[3rem] font-bold mb-4">
                  {modalContent.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-lg">
                  {modalContent.description}
                </p>
                <div className="text-gray-300 max-h-[60vh] text-sm md:text-lg">
                  {modalContent.fullContent}
                </div>
              </div>
            </div>
          )}

          {/* FROM AILGNMENT */}
          {showFormModal && (
            <div className="fixed inset-0 z-50 top-[5rem] bg-black bg-opacity-70 flex items-center justify-center">
              <div className="relative bg-transparant rounded-lg p-6 w-full max-w-[50rem] mx-4 max-h-[100vh] overflow-y-auto">
                <button
                  onClick={() => setShowFormModal(false)}
                  className="absolute top-5 right-[12rem] text-gray-300 hover:text-white"
                >
                  ✖
                </button>
                <WorkshopForm />
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(SemiGearPage), { ssr: false });
