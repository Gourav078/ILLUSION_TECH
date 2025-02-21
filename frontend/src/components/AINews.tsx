// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import "../app/globals.css";

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
//     if (paused || showModal) return; // ⛔️ Stop rotation if modal is open!
//     const interval = setInterval(() => {
//       setActive((prevActive) => (prevActive + 1) % cardCount);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [cardCount, paused, showModal]); // 🔄 Stops when modal opens

//   return (
//     <section className="relative flex flex-col md:flex-row justify-center items-center min-h-screen w-full text-white overflow-hidden cyberpunk-bg">
//       {/* Left Container */}
//       <div className="left-container h-full w-full md:w-1/2 flex justify-center items-center">
//         <Image src="/left robot.png" width={500} height={500} alt="robot-img" />
//       </div>

//       {/* Right Container */}
//       <div className="right-container h-full w-full md:w-1/2 flex flex-col justify-center items-center bg-transparent relative">
//         {/* Circular 3D Carousel */}
//         <div className="carousel-container w-full h-[30%] flex justify-center items-center z-20 relative">
//           <div
//             className="carousel relative w-full h-56 flex items-center justify-center"
//             style={{
//               transform: `rotateY(${-active * (360 / cardCount)}deg)`,
//               transition: "transform 1s ease-in-out",
//               transformStyle: "preserve-3d",
//             }}
//           >
//             {CardData.map((card, i) => {
//               const angle = i * (360 / cardCount);
//               const isActive = i === active;

//               return (
//                 <div
//                   key={i}
//                   className={`absolute transition-all duration-700 ease-in-out transform w-64 h-44 flex flex-col justify-center items-center p-6 rounded-lg text-center neon-glow hover-effect ${
//                     isActive ? "active-card" : "blurred-card"
//                   }`}
//                   style={{
//                     transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
//                     opacity: isActive ? 1 : 0.5,
//                     filter: isActive ? "none" : "blur(3px)",
//                     zIndex: isActive ? 10 : 5,
//                   }}
//                   onMouseEnter={() => setPaused(true)}
//                   onMouseLeave={() => setPaused(false)}
//                   onClick={() => isActive && setShowModal(true)}
//                 >
//                   <h2 className="text-[1rem] font-bold mb-2">{card.title}</h2>
//                   <p className="text-[0.8rem] text-gray-300">{card.content}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Enlarged Holographic Image */}
//         <div className="holograph-img w-full h-[70%] flex justify-center items-center absolute bottom-0 z-10">
//           <Image
//             width={1000}
//             height={1000}
//             src="/holo.jpg"
//             alt="holo-img"
//             className="object-contain"
//           />
//         </div>
//       </div>

//       {/* Modal Popup */}
//       {showModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-5">
//           <div className="bg-gray-900 text-white text-center top-10 h-[80%] w-[80%] p-6 rounded-lg shadow-xl relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-3 text-gray-300 hover:text-white text-lg"
//             >
//               ✖
//             </button>
//             <h2 className="text-[2rem] font-bold mb-4">
//               {CardData[active].title}
//             </h2>
//             <p className="text-gray-300">{CardData[active].details}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AINewsSection;

import React, { useState, useEffect } from "react";
// import Image from "next/image";
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

  useEffect(() => {
    if (paused || showModal) return; // ⛔️ Stop rotation if modal is open!
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % cardCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [cardCount, paused, showModal]); // 🔄 Stops when modal opens

  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center min-h-screen w-full text-white overflow-hidden cyberpunk-bg">
      <div className="absolute inset-0 z-[-1] blur-sm">
        <MatrixRain />
      </div>
      {/* Left Container */}
      <div className="left-container h-full w-full md:w-1/2 flex justify-center items-center">
        {/* <Image src="/robot.gif" width={500} height={500} alt="robot-img" /> */}
        <DotLottieReact
          src="https://lottie.host/92b7d0ea-2b41-4fc1-bacf-c45a6e3d71d1/FFgvHQnyKC.lottie"
          loop
          autoplay
          style={{ width: "750px", height: "450px" }}
        />
      </div>

      {/* Right Container */}
      <div className="right-container h-full w-full md:w-1/2 flex flex-col justify-center items-center bg-transparent relative">
        {/* Circular 3D Carousel */}
        <div className="carousel-container w-full h-[30%] flex justify-center items-center z-20 relative">
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
                  <p className="text-[0.8rem] text-gray-300">{card.content}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enlarged Holographic Image */}
        <div className="holograph-img  h-[70%] flex justify-center items-center absolute bottom-0 z-10">
          {/* <Image
            width={1000}
            height={1000}
            src="/holo.jpg"
            alt="holo-img"
            className="object-contain"
          /> */}
          <DotLottieReact
            src="https://lottie.host/2606203c-12d4-4600-a577-416ced1018b0/8NdBrQQtSN.lottie"
            loop
            autoplay
            style={{ width: "750px", height: "700px" }}
          />
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-900 text-white text-center top-10 h-[80%] w-[80%] p-6 rounded-lg shadow-xl relative neon-glow">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-300 hover:text-white text-lg"
            >
              ✖
            </button>
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
