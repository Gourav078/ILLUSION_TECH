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
import { motion } from "framer-motion";
import WorkshopDetails from "../data/miniComponents/WorkshopDetails";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

declare global {
  interface Window {
    __tourGuideInitialized?: boolean;
  }
}

const SemiGearPage = () => {
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

  const [selectedContent] = useState<WorkshopContent | null>(null);

  const [selectedWorkshop, setSelectedWorkshop] =
    useState<WorkshopContent | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (selectedWorkshop) {
      htmlElement.classList.add("modal-open");
      bodyElement.classList.add("modal-open");
    } else {
      htmlElement.classList.remove("modal-open");
      bodyElement.classList.remove("modal-open");
    }

    return () => {
      htmlElement.classList.remove("modal-open");
      bodyElement.classList.remove("modal-open");
    };
  }, [selectedWorkshop]);

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

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentIndex] = useState(0);

  const workshops = [...workshops1, ...workshops2];

  const [showFormModal, setShowFormModal] = useState(false);

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
                  fill="#7d8687ff"
                />
                <path
                  d="M803.4,378.2H490.7c-9.7,0-17.5-6.3-17.5-14.2v7.7c0,7.8,7.8,14.2,17.5,14.2H803.4c9.7,0,17.5-6.3,17.5-14.2V364C820.9,371.8,813,378.2,803.4,378.2Z"
                  transform="translate(-405.5 -167)"
                  fill="#2e3232ff"
                />
                <rect
                  x="203.8"
                  y="218"
                  width="75"
                  height="55"
                  fill="#7d8687ff"
                />
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
                  fill="#6f7879"
                />
                <rect
                  x="203.8"
                  y="256.1"
                  width="75"
                  height="5.75"
                  fill="#6f7879"
                />
                <rect
                  x="124.8"
                  y="273"
                  width="233"
                  height="19"
                  rx="2.4"
                  ry="2.4"
                  fill="#6f7879"
                />
                <path
                  d="M760.9,453.5H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,452.8,762.3,453.5,760.9,453.5Z"
                  transform="translate(-405.5 -167)"
                  fill="#464c4dff"
                />
                <path
                  d="M760.9,447.3H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,446.6,762.3,447.3,760.9,447.3Z"
                  transform="translate(-405.5 -167)"
                  fill="#6f7879"
                />
                <circle cx="241.7" cy="197.2" r="9.1" fill="#6f7879" />
              </g>
              <g
                data-tg-tour="Swipe left or right to view more workshops."
                data-tg-order={1}
                id="screen"
              >
                <rect x="79.8" y="17.5" width="323" height="164.5" rx="10" />
                <foreignObject x="90" y="25" width="300" height="150">
                  <div className="relative w-full h-full flex flex-col justify-between items-center">
                    <motion.div
                      transition={{ duration: 0.5 }}
                      className="screen-content text-center"
                    >
                      HELLLO WELCOME TO ILLUSION SECURITY.......
                    </motion.div>

                    <div className="flex justify-between w-full px-4">
                      <button
                        data-tg-tour="You can expand the view of this content."
                        data-tg-order={2}
                        className="expand-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        onClick={() =>
                          setSelectedWorkshop(workshops[currentIndex])
                        }
                      >
                        🔍 Expand
                      </button>
                      <Dialog
                        open={isDialogOpen}
                        onOpenChange={setIsDialogOpen}
                      >
                        <DialogTrigger asChild>
                          <button
                            onClick={() => setIsDialogOpen(true)}
                            data-tg-tour="You can register yourself for the upcoming workshops."
                            data-tg-order={99}
                            className="register-button bg-green-500 text-white px-4 py-2 rounded-md transition"
                          >
                            Register
                          </button>
                        </DialogTrigger>

                        <DialogContent className="bg-transparent border-none p-0 max-w-sm">
                          <WorkshopForm
                            onClose={() => setIsDialogOpen(false)}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </foreignObject>
              </g>
              <g id="triMain">
                <g>
                  <polygon
                    points="162.3 429.3 144.8 450.1 4.4 290 479.1 290 349.7 403.6 278.8 497.7 264.4 478.5 241.3 498.7 162.3 429.3"
                    fill="#246f49ff"
                  />
                  <path
                    d="M879.4,459,753.8,569.2l-69.4,92.1-14.2-18.8L646.9,663l-79.2-69.5L550.3,614l-136-155h465m10.6-4H405.5l5.8,6.6,136,155,3.1,3.5,3-3.6,14.7-17.4L644.2,666l2.6,2.3,2.6-2.3,20.1-17.6,11.6,15.4,3.2,4.2,3.2-4.2L756.7,572,882,462l8-7Z"
                    transform="translate(-405.5 -167)"
                    fill="#246f49ff"
                  />
                </g>
                <polygon
                  points="436.1 292 327.1 387.6 266.9 467.6 254.6 451.2 234.3 469 165.6 408.7 150.6 426.5 32.6 292 8.8 292 144.8 447 162.1 426.5 241.3 496 264.7 475.5 278.8 494.3 348.2 402.2 473.8 292 436.1 292"
                  fill="#153e29ff"
                />
              </g>
              <g id="triMid">
                <g>
                  <polygon
                    points="160.2 456.7 237.6 456.7 199.2 503.3 160.2 456.7"
                    fill="#246f49ff"
                  />
                  <path
                    d="M640,625.2,604.7,668,569,625.2h71m6.4-3H562.6l4.1,4.9,35.7,42.8,2.3,2.8,2.3-2.8,35.3-42.8,4.1-4.9Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="217.7 458.2 190.7 490.9 199.1 501 234.5 458.2 217.7 458.2"
                  fill="#153e29ff"
                />
              </g>
              <g id="triLeftSmall">
                <g>
                  <polygon
                    points="29.4 444.1 66.2 444.1 47.9 466.2 29.4 444.1"
                    fill="#246f49ff"
                  />
                  <path
                    d="M467.5,613.1l-14,17-14.2-17h28.2m8.5-4H430.7l5.5,6.6,14.2,17,3.1,3.7,3.1-3.7,14-17,5.4-6.5Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="55.3 446.1 44.5 459.1 47.9 463.1 61.9 446.1 55.3 446.1"
                  fill="#153e29ff"
                />
              </g>
              <g id="triRightSmall">
                <g>
                  <polygon
                    points="335.3 487.7 369.9 487.7 352.7 508.5 335.3 487.7"
                    fill="#246f49ff"
                  />
                  <path
                    d="M772.3,656.2l-14,17-14.2-17h28.2m6.4-3h-41l4.1,4.9,14.2,17,2.3,2.8,2.3-2.8,14-17,4.1-4.9Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="360.1 489.2 349.4 502.2 352.7 506.2 366.7 489.2 360.1 489.2"
                  fill="#153e29ff"
                />
              </g>
              <g id="triLeft">
                <g>
                  <polygon
                    points="16.7 359 173.3 359 95.4 438.2 16.7 359"
                    fill="#246f49ff"
                  />
                  <path
                    d="M575.2,527.5,501,603.1l-75.1-75.6H575.2m7.2-3H418.7l5.1,5.1,75.1,75.6,2.1,2.2,2.1-2.2,74.3-75.6,5-5.1Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="147.8 360.5 84.2 425.2 95 436.1 169.3 360.5 147.8 360.5"
                  fill="#153e29ff"
                />
              </g>
              <g id="triRight">
                <g>
                  <polygon
                    points="197.2 314.2 479.6 314.2 395.4 407.5 392.1 403.5 339.3 457.2 197.2 314.2"
                    fill="#246f49ff"
                  />
                  <path
                    d="M881.8,482.7,801,572.2l-3.3-4-52.9,53.8L606.3,482.7H881.8m6.7-3H599.1l5.1,5.1L742.7,624.2l2.1,2.2,2.1-2.2,50.6-51.5,1.2,1.4,2.2,2.7,2.3-2.6L884,484.7l4.5-5Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="224.8 315.7 200.8 315.7 339.3 455.1 351.2 442.9 224.8 315.7"
                  fill="#153e29ff"
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
          {selectedWorkshop && (
            <div className="modal-overlay">
              <div className="modal-content">
                <WorkshopDetails closeModal={() => setSelectedWorkshop(null)} />
              </div>
            </div>
          )}

          {showFormModal && (
            <div className="fixed inset-0 z-50 top-[5rem] bg-black bg-opacity-70 flex items-center justify-center">
              <div className="relative bg-transparant rounded-lg p-6 w-full max-w-[50rem] mx-4 max-h-[80vh] overflow-y-auto">
                <button
                  onClick={() => setShowFormModal(false)}
                  className="absolute top-5 right-[12rem] text-gray-300 hover:text-white"
                >
                  ✖
                </button>
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
          <div className="circle-container left-[-180px] h-[20rem] w-[50vw] flex justify-center items-center overflow-hidden relative">
            <Image
              src="/leftSide.png" // The path to your image inside the 'public' folder
              alt="A descriptive caption for the image"
              width={370}
              height={500}
            />
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
                  fill="#7d8687ff"
                />
                <path
                  d="M803.4,378.2H490.7c-9.7,0-17.5-6.3-17.5-14.2v7.7c0,7.8,7.8,14.2,17.5,14.2H803.4c9.7,0,17.5-6.3,17.5-14.2V364C820.9,371.8,813,378.2,803.4,378.2Z"
                  transform="translate(-405.5 -167)"
                  fill="#2e3232ff"
                />
                <rect
                  x="203.8"
                  y="218"
                  width="75"
                  height="55"
                  fill="#7d8687ff"
                />
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
                  fill="#6f7879"
                />
                <rect
                  x="203.8"
                  y="256.1"
                  width="75"
                  height="5.75"
                  fill="#6f7879"
                />
                <rect
                  x="124.8"
                  y="273"
                  width="233"
                  height="19"
                  rx="2.4"
                  ry="2.4"
                  fill="#6f7879"
                />
                <path
                  d="M760.9,453.5H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,452.8,762.3,453.5,760.9,453.5Z"
                  transform="translate(-405.5 -167)"
                  fill="#464c4dff"
                />
                <path
                  d="M760.9,447.3H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,446.6,762.3,447.3,760.9,447.3Z"
                  transform="translate(-405.5 -167)"
                  fill="#6f7879"
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
                    <h3 className="pt-5">
                      The Cyber Secrets They Don&apos;t Want You to Know
                    </h3>
                    {/* <p>check yourself</p> */}
                    <button
                      data-tg-tour="You can expand the view of this content."
                      data-tg-order={2}
                      className="expand-button"
                      onClick={() =>
                        setSelectedWorkshop(selectedContent || hoveredContent)
                      }
                    >
                      🔍 Expand
                    </button>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => setIsDialogOpen(true)}
                          data-tg-tour="You can register yourself for the upcoming workshops."
                          data-tg-order={99}
                          className="register-button bg-green-500 text-white px-4 py-2 rounded-md transition"
                        >
                          Register
                        </button>
                      </DialogTrigger>

                      <DialogContent className="bg-transparent border-none p-0 max-w-sm">
                        <WorkshopForm onClose={() => setIsDialogOpen(false)} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </foreignObject>
              </g>
              <g id="triMain">
                <g>
                  <polygon
                    points="162.3 429.3 144.8 450.1 4.4 290 479.1 290 349.7 403.6 278.8 497.7 264.4 478.5 241.3 498.7 162.3 429.3"
                    fill="#246f49ff"
                  />
                  <path
                    d="M879.4,459,753.8,569.2l-69.4,92.1-14.2-18.8L646.9,663l-79.2-69.5L550.3,614l-136-155h465m10.6-4H405.5l5.8,6.6,136,155,3.1,3.5,3-3.6,14.7-17.4L644.2,666l2.6,2.3,2.6-2.3,20.1-17.6,11.6,15.4,3.2,4.2,3.2-4.2L756.7,572,882,462l8-7Z"
                    transform="translate(-405.5 -167)"
                    fill="#246f49ff"
                  />
                </g>
                <polygon
                  points="436.1 292 327.1 387.6 266.9 467.6 254.6 451.2 234.3 469 165.6 408.7 150.6 426.5 32.6 292 8.8 292 144.8 447 162.1 426.5 241.3 496 264.7 475.5 278.8 494.3 348.2 402.2 473.8 292 436.1 292"
                  fill="#153e29ff"
                />
              </g>
              <g id="triMid">
                <g>
                  <polygon
                    points="160.2 456.7 237.6 456.7 199.2 503.3 160.2 456.7"
                    fill="#246f49ff"
                  />
                  <path
                    d="M640,625.2,604.7,668,569,625.2h71m6.4-3H562.6l4.1,4.9,35.7,42.8,2.3,2.8,2.3-2.8,35.3-42.8,4.1-4.9Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="217.7 458.2 190.7 490.9 199.1 501 234.5 458.2 217.7 458.2"
                  fill="#153e29ff"
                />
              </g>
              <g id="triLeftSmall">
                <g>
                  <polygon
                    points="29.4 444.1 66.2 444.1 47.9 466.2 29.4 444.1"
                    fill="#246f49ff"
                  />
                  <path
                    d="M467.5,613.1l-14,17-14.2-17h28.2m8.5-4H430.7l5.5,6.6,14.2,17,3.1,3.7,3.1-3.7,14-17,5.4-6.5Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="55.3 446.1 44.5 459.1 47.9 463.1 61.9 446.1 55.3 446.1"
                  fill="#153e29ff"
                />
              </g>
              <g id="triRightSmall">
                <g>
                  <polygon
                    points="335.3 487.7 369.9 487.7 352.7 508.5 335.3 487.7"
                    fill="#246f49ff"
                  />
                  <path
                    d="M772.3,656.2l-14,17-14.2-17h28.2m6.4-3h-41l4.1,4.9,14.2,17,2.3,2.8,2.3-2.8,14-17,4.1-4.9Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="360.1 489.2 349.4 502.2 352.7 506.2 366.7 489.2 360.1 489.2"
                  fill="#153e29ff"
                />
              </g>
              <g id="triLeft">
                <g>
                  <polygon
                    points="16.7 359 173.3 359 95.4 438.2 16.7 359"
                    fill="#246f49ff"
                  />
                  <path
                    d="M575.2,527.5,501,603.1l-75.1-75.6H575.2m7.2-3H418.7l5.1,5.1,75.1,75.6,2.1,2.2,2.1-2.2,74.3-75.6,5-5.1Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="147.8 360.5 84.2 425.2 95 436.1 169.3 360.5 147.8 360.5"
                  fill="#153e29ff"
                />
              </g>
              <g id="triRight">
                <g>
                  <polygon
                    points="197.2 314.2 479.6 314.2 395.4 407.5 392.1 403.5 339.3 457.2 197.2 314.2"
                    fill="#246f49ff"
                  />
                  <path
                    d="M881.8,482.7,801,572.2l-3.3-4-52.9,53.8L606.3,482.7H881.8m6.7-3H599.1l5.1,5.1L742.7,624.2l2.1,2.2,2.1-2.2,50.6-51.5,1.2,1.4,2.2,2.7,2.3-2.6L884,484.7l4.5-5Z"
                    transform="translate(-405.5 -167)"
                    fill="#39a86d"
                  />
                </g>
                <polygon
                  points="224.8 315.7 200.8 315.7 339.3 455.1 351.2 442.9 224.8 315.7"
                  fill="#153e29ff"
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
          <div className="circle-container top-0 right-[-180px] h-full w-[50vw] flex justify-center items-center overflow-hidden relative">
            <Image
              src="/rightSide.png" // The path to your image inside the 'public' folder
              alt="A descriptive caption for the image"
              height={500}
              width={370}
            />
          </div>

          {/* Modal Window for Expanded Content */}
          {selectedWorkshop && (
            <div className="modal-overlay fixed top-[5rem] inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="custom-scrollbar modal-content relative top-10 h-[70%] w-[100%] md:w-[100%] overflow-y-auto bg-gray-900 p-2 md:p-4 rounded-lg">
                <div className="sticky top-0 right-0 flex justify-end p-2 bg-transparent z-10"></div>
                {/* Here we render the WorkshopDetails component */}
                <WorkshopDetails closeModal={() => setSelectedWorkshop(null)} />
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
                {/* <WorkshopForm /> */}
              </div>
            </div>
          )}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-10"></div>
        </section>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(SemiGearPage), { ssr: false });
