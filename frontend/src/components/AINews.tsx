// import React, { useState, useEffect, useRef } from "react";
// import "../app/globals.css";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import MatrixRain from "./animata/MatrixRain";

// const CardData = [
//   {
//     title: "Rising Demand for AI Security Experts",
//     content:
//       "Major tech companies are actively recruiting AI security specialists with competitive packages for fresh graduates.",
//     details:
//       "AI security is becoming a critical field in the tech industry, with organizations investing heavily in research and development. Salaries for AI security experts are rising, making it a lucrative career choice.",
//   },
//   {
//     title: "New Zero-Day Vulnerability Lab Released",
//     content:
//       "Experience hands-on training with the latest critical vulnerabilities in our secure environment.",
//     details:
//       "Our lab provides hands-on exposure to real-world security threats, enabling professionals to test their skills in a controlled setup.",
//   },
//   {
//     title: "Remote Cybersecurity Positions Surge",
//     content:
//       "Companies worldwide are offering remote positions for entry-level cybersecurity analysts.",
//     details:
//       "The demand for remote cybersecurity experts has increased significantly, allowing professionals to work from anywhere while ensuring the security of critical systems.",
//   },
//   {
//     title: "AI-Powered Threat Detection Tools",
//     content:
//       "Latest developments in AI-based security tools are revolutionizing threat detection and response.",
//     details:
//       "AI is transforming the cybersecurity landscape by enhancing real-time threat analysis and reducing response times.",
//   },
//   {
//     title: "Cybersecurity Bootcamp Success Stories",
//     content:
//       "Recent graduates share their journey from bootcamp to securing positions at top tech companies.",
//     details:
//       "Many bootcamp graduates are landing roles at top companies, proving that hands-on learning is as valuable as traditional education.",
//   },
//   {
//     title: "Machine Learning in Penetration Testing",
//     content:
//       "New frameworks combining ML with traditional pentesting showing promising results.",
//     details:
//       "By integrating ML into penetration testing, security professionals can detect vulnerabilities faster and automate certain security processes.",
//   },
// ];

// const AINewsSection = () => {
//   const [active, setActive] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const cardCount = CardData.length;
//   const radius = 250;

//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Re-enable scrolling
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Ensure scrolling is enabled when component unmounts
//     };
//   }, [showModal]);

//   useEffect(() => {
//     if (paused || showModal) return; // ⛔️ Stop rotation if modal is open!
//     const interval = setInterval(() => {
//       setActive((prevActive) => (prevActive + 1) % cardCount);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [cardCount, paused, showModal]); // 🔄 Stops when modal opens

//   const carouselRef = useRef<HTMLDivElement | null>(null);
//   const scrollCooldown = useRef(false);

//   useEffect(() => {
//     const handleScroll = (e: WheelEvent) => {
//       if (!carouselRef.current || scrollCooldown.current) return;

//       if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
//         e.preventDefault();
//         scrollCooldown.current = true;

//         setPaused(true); // 🛑 Pause auto-rotation on scroll

//         if (e.deltaX > 0) {
//           // Scroll right ➜ show previous card
//           setActive((prev) => (prev - 1 + cardCount) % cardCount);
//         } else {
//           // Scroll left ➜ show next card
//           setActive((prev) => (prev + 1) % cardCount);
//         }

//         // Cooldown to prevent rapid scroll jank
//         setTimeout(() => {
//           scrollCooldown.current = false;
//           setPaused(false); // ✅ Resume auto-rotation after scroll
//         }, 700); // Match this with your CSS transition duration
//       }
//     };

//     const container = carouselRef.current;
//     container?.addEventListener("wheel", handleScroll, { passive: false });

//     return () => {
//       container?.removeEventListener("wheel", handleScroll);
//     };
//   }, [cardCount]);

//   return (
//     <section className="relative flex flex-col md:flex-row justify-center items-center min-h-screen w-full text-white overflow-hidden cyberpunk-bg">
//       <div className="absolute inset-0 z-[-1] blur-sm">
//         <MatrixRain />
//       </div>
//       {/* Left Container */}
//       <div className="left-container h-full w-full md:w-1/2 flex justify-center items-center">
//         <DotLottieReact
//           src="https://lottie.host/92b7d0ea-2b41-4fc1-bacf-c45a6e3d71d1/FFgvHQnyKC.lottie"
//           loop
//           autoplay
//           style={{ width: "750px", height: "450px" }}
//         />
//       </div>

//       {/* Right Container */}
//       <div className="right-container h-full w-full md:w-1/2 flex flex-col justify-center items-center bg-transparent relative">
//         <div
//           className="flex flex-col justify-center items-center bg-black relative"
//           style={{
//             width: "630px",
//             height: "620px",
//             borderRadius: "10px",
//             boxShadow: "0px -1px 20px 0px rgb(74 222 128)",
//           }}
//         >
//           {/* Circular 3D Carousel */}
//           <div
//             ref={carouselRef}
//             className="carousel-container w-full h-[30%] flex justify-center items-center z-20 relative"
//           >
//             <div
//               className="carousel relative w-full h-56 flex items-center justify-center"
//               style={{
//                 transform: `rotateY(${-active * (360 / cardCount)}deg)`,
//                 transition: "transform 1s ease-in-out",
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               {CardData.map((card, i) => {
//                 const angle = i * (360 / cardCount);
//                 const isActive = i === active;

//                 return (
//                   <div
//                     key={i}
//                     className={`absolute transition-all duration-700 ease-in-out transform w-64 h-44 flex flex-col justify-center main-font-family items-center p-6 rounded-lg text-center neon-glow hover-effect ${
//                       isActive ? "active-card" : "blurred-card"
//                     }`}
//                     style={{
//                       transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
//                       opacity: isActive ? 1 : 0.5,
//                       filter: isActive ? "none" : "blur(3px)",
//                       zIndex: isActive ? 10 : 5,
//                     }}
//                     onMouseEnter={() => setPaused(true)}
//                     onMouseLeave={() => setPaused(false)}
//                     onClick={() => isActive && setShowModal(true)}
//                   >
//                     <h2 className="text-[1rem] font-bold mb-2">{card.title}</h2>
//                     <p className="text-[0.8rem] text-gray-300">
//                       {card.content}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Enlarged Holographic Image */}
//           <div className="holograph-img  h-[70%] flex justify-center items-center absolute bottom-0 z-10">
//             <DotLottieReact
//               src="https://lottie.host/2606203c-12d4-4600-a577-416ced1018b0/8NdBrQQtSN.lottie"
//               loop
//               autoplay
//               style={{ width: "750px", height: "700px" }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Modal Popup */}
//       {showModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
//           <div className="bg-gray-900 text-white text-center top-10 h-[80%] w-[80%] p-6 rounded-lg shadow-xl relative neon-glow">
//             <div className="sticky top-0 right-0 flex justify-end p-2 bg-transparant z-10">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-300 hover:text-white text-lg"
//               >
//                 ✖
//               </button>
//             </div>
//             <h2 className="text-[2rem] main-font-family font-bold mb-4">
//               {CardData[active].title}
//             </h2>
//             <p className="text-gray-300 main-font-family">
//               {CardData[active].details}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AINewsSection;

import React, { useState, useEffect, useRef } from "react";
import "../app/globals.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MatrixRain from "./animata/MatrixRain";

const CardData = [
  {
    title: "Rising Demand for AI Security Experts",
    content:
      "Major tech companies are actively recruiting AI security specialists with competitive packages for fresh graduates.",
    details:
      "AI security is becoming a critical field in the tech industry, with organizations investing heavily in research and development. Salaries for AI security experts are rising, making it a lucrative career choice.",
  },
  {
    title: "New Zero-Day Vulnerability Lab Released",
    content:
      "Experience hands-on training with the latest critical vulnerabilities in our secure environment.",
    details:
      "Our lab provides hands-on exposure to real-world security threats, enabling professionals to test their skills in a controlled setup.",
  },
  {
    title: "Remote Cybersecurity Positions Surge",
    content:
      "Companies worldwide are offering remote positions for entry-level cybersecurity analysts.",
    details:
      "The demand for remote cybersecurity experts has increased significantly, allowing professionals to work from anywhere while ensuring the security of critical systems.",
  },
  {
    title: "AI-Powered Threat Detection Tools",
    content:
      "Latest developments in AI-based security tools are revolutionizing threat detection and response.",
    details:
      "AI is transforming the cybersecurity landscape by enhancing real-time threat analysis and reducing response times.",
  },
  {
    title: "Cybersecurity Bootcamp Success Stories",
    content:
      "Recent graduates share their journey from bootcamp to securing positions at top tech companies.",
    details:
      "Many bootcamp graduates are landing roles at top companies, proving that hands-on learning is as valuable as traditional education.",
  },
  {
    title: "Machine Learning in Penetration Testing",
    content:
      "New frameworks combining ML with traditional pentesting showing promising results.",
    details:
      "By integrating ML into penetration testing, security professionals can detect vulnerabilities faster and automate certain security processes.",
  },
];

const AINewsSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const cardCount = CardData.length;
  const radius = 250;

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollCooldown = useRef(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  useEffect(() => {
    if (paused || showModal) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cardCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, showModal, cardCount]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!carouselRef.current || scrollCooldown.current) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        scrollCooldown.current = true;
        setPaused(true);

        if (e.deltaX > 0) {
          setActive((prev) => (prev + 1) % cardCount);
        } else {
          setActive((prev) => (prev - 1 + cardCount) % cardCount);
        }

        setTimeout(() => {
          scrollCooldown.current = false;
          setPaused(false);
        }, 700);
      }
    };

    const container = carouselRef.current;
    container?.addEventListener("wheel", handleScroll, { passive: false });
    return () => container?.removeEventListener("wheel", handleScroll);
  }, [cardCount]);

  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center min-h-screen w-full text-white overflow-hidden cyberpunk-bg">
      <div className="absolute inset-0 z-[-1] blur-sm">
        <MatrixRain />
      </div>

      <div className="left-container h-full w-full md:w-1/2 flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/92b7d0ea-2b41-4fc1-bacf-c45a6e3d71d1/FFgvHQnyKC.lottie"
          loop
          autoplay
          style={{ width: "750px", height: "450px" }}
        />
      </div>

      <div className="right-container h-full w-full md:w-1/2 flex flex-col justify-center items-center bg-transparent relative">
        <div
          className="flex flex-col justify-center items-center bg-black relative"
          style={{
            width: "630px",
            height: "620px",
            borderRadius: "10px",
            boxShadow: "0px -1px 20px 0px rgb(74 222 128)",
          }}
        >
          <div
            ref={carouselRef}
            className="carousel-container w-full h-[30%] flex justify-center items-center z-20 relative"
          >
            <div
              className="carousel relative w-full h-56 flex items-center justify-center"
              style={{
                transform: `rotateY(${-active * (360 / cardCount)}deg)`,
                transition: "transform 1s ease-in-out",
                transformStyle: "preserve-3d",
              }}
            >
              {CardData.map((card, i) => {
                const angle = i * (360 / cardCount);
                const isActive = i === active;

                return (
                  <div
                    key={i}
                    className={`absolute transition-all duration-700 ease-in-out transform w-64 h-44 flex flex-col justify-center main-font-family items-center p-6 rounded-lg text-center neon-glow hover-effect ${
                      isActive ? "active-card" : "blurred-card"
                    }`}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      opacity: isActive ? 1 : 0.5,
                      filter: isActive ? "none" : "blur(3px)",
                      zIndex: isActive ? 10 : 5,
                    }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onClick={() => isActive && setShowModal(true)}
                  >
                    <h2 className="text-[1rem] font-bold mb-2">{card.title}</h2>
                    <p className="text-[0.8rem] text-gray-300">
                      {card.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="holograph-img h-[70%] flex justify-center items-center absolute bottom-0 z-10">
            <DotLottieReact
              src="https://lottie.host/2606203c-12d4-4600-a577-416ced1018b0/8NdBrQQtSN.lottie"
              loop
              autoplay
              style={{ width: "750px", height: "700px" }}
            />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-900 text-white text-center top-10 h-[80%] w-[80%] p-6 rounded-lg shadow-xl relative neon-glow overflow-y-auto">
            <div className="sticky top-0 right-0 flex justify-end p-2 bg-transparent z-10">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-300 hover:text-white text-lg"
              >
                ✖
              </button>
            </div>
            <h2 className="text-[2rem] main-font-family font-bold mb-4">
              {CardData[active].title}
            </h2>
            <p className="text-gray-300 main-font-family">
              {CardData[active].details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AINewsSection;
