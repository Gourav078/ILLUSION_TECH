// import React, { useState } from "react";
// import {
//   TrendingUp,
//   Users,
//   Brain,
//   Code,
//   Lock,
//   Server,
//   Shield,
//   Terminal,
//   Rocket,
//   Lightbulb,
//   Sparkles,
//   Wrench,
//   Bug,
//   Globe,
//   Cpu,
// } from "lucide-react";
// import "../app/globals.css";

// const workshops1 = [
//   {
//     icon: Brain,
//     description: "Build and deploy advanced neural networks from scratch",
//     title: "AI Systems Architecture",
//   },
//   {
//     icon: Code,
//     description: "Learn to write bulletproof code and identify vulnerabilities",
//     title: "Secure Coding Practices",
//   },
//   {
//     icon: Lock,
//     description: "Implement and break various encryption systems",
//     title: "Cryptography Workshop",
//   },
//   {
//     icon: Server,
//     description:
//       "Configure and maintain enterprise-grade security infrastructure",
//     title: "Network Defense",
//   },
//   {
//     icon: Shield,
//     description:
//       "Hands-on penetration testing in our secure virtual environment",
//     title: "Offensive Security Lab",
//   },
//   {
//     icon: Terminal,
//     description: "Master binary exploitation and reverse engineering",
//     title: "Advanced Exploitation",
//   },
//   {
//     icon: Users,
//     title: "1-1 Discussion",
//     description: "Personalized mentoring sessions with industry experts",
//   },
//   {
//     icon: TrendingUp,
//     title: "Market Growth",
//     description: "Insights into rapidly expanding cybersecurity and AI sectors",
//   },
// ];

// const workshops2 = [
//   {
//     icon: Brain,
//     title: "Latest Technology",
//     description: "Hands-on experience with cutting-edge AI and security tools",
//   },
//   {
//     icon: Rocket,
//     title: "Career Path",
//     description: "Guidance for building a successful career in tech",
//   },
//   {
//     icon: Wrench,
//     title: "Industry Tools",
//     description: "Training on professional-grade security and AI platforms",
//   },
//   {
//     icon: Lightbulb,
//     title: "Future Scope",
//     description: "Exploration of emerging technologies and opportunities",
//   },
//   {
//     icon: Sparkles,
//     title: "Increasing Curiosity",
//     description: "Engaging projects that spark innovation and learning",
//   },
//   {
//     icon: Bug,
//     description: "Engaging projects that spark innovation and learning",
//     title: "Eco Workshop",
//   },
//   {
//     icon: Globe,
//     description: "Engaging projects that spark innovation and learning",
//     title: "Analytics Workshop",
//   },
//   {
//     icon: Cpu,
//     description: "Engaging projects that spark innovation and learning",
//     title: "Speaking Workshop",
//   },
// ];

// const SemiGearPage = () => {
//   const [hoveredTitle, setHoveredTitle] = useState("");

//   return (
//     <section className="relative flex justify-center items-center min-h-screen text-white overflow-hidden">
//       {/* Rotating Circle - left */}
//       <div className="circle-container left-[-440px] h-full w-[50vw] flex justify-center items-center overflow-hidden">
//         <svg
//           fill="#000000"
//           height="880px" /* Slightly reduce size */
//           width="880px"
//           version="1.1"
//           id="Layer_1"
//           xmlns="http://www.w3.org/2000/svg"
//           // viewBox="-25.6 -25.6 563.20 563.20"
//           viewBox="-25 -25 550 550"
//           stroke="#1f2937"
//           // stroke-width="2.56"
//           strokeWidth="2"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             // stroke="#CCCCCC"
//             stroke="#00eaff"
//             opacity={0.8}
//             strokeWidth="10.336000000000002"
//           >
//             {" "}
//             <g>
//               {" "}
//               <g>
//                 {" "}
//                 <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
//               </g>{" "}
//             </g>{" "}
//             <g>
//               {" "}
//               <g>
//                 {" "}
//                 <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
//               </g>{" "}
//             </g>{" "}
//           </g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <g>
//               {" "}
//               <g>
//                 {" "}
//                 <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
//               </g>{" "}
//             </g>{" "}
//             <g>
//               {" "}
//               <g>
//                 {" "}
//                 <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
//               </g>{" "}
//             </g>{" "}
//           </g>
//         </svg>
//         <div className="single-container">
//           {workshops1.map((workshop, index) => (
//             <div
//               key={index}
//               className="icon-container"
//               onMouseEnter={() => setHoveredTitle(workshop.title)}
//               onMouseLeave={() => setHoveredTitle("")}
//             >
//               {/* <span className="icon">
//                 <workshop.icon />
//               </span> */}
//               <workshop.icon className="w-10 h-10 text-cyan-400" />
//             </div>
//           ))}
//           {/* Center Gear Icon */}
//           <div className="center-icon">
//             <span>⚙️</span>
//           </div>
//         </div>
//       </div>

//       {/* Title */}
//       <div className={`title-description ${hoveredTitle ? "visible" : ""}`}>
//         <span>{hoveredTitle}</span>
//       </div>

//       {/* Rotating Circle - right */}
//       <div className="circle-container top-0 right-[-440px] h-full w-[50vw] flex justify-center items-center overflow-hidden">
//         <svg
//           fill="#000000"
//           height="700px"
//           width="700px"
//           version="1.1"
//           id="Layer_1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="-25.6 -25.6 563.20 563.20"
//           // stroke="#1f2937"
//           stroke="rgba(0, 234, 255, 0.8);"
//           strokeWidth="2.56"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             // stroke="#CCCCCC"
//             stroke="#00eaff"
//             opacity={0.8}
//             strokeWidth="10.336000000000002"
//           >
//             {" "}
//             <g>
//               {" "}
//               <g>
//                 {" "}
//                 <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
//               </g>{" "}
//             </g>{" "}
//             <g>
//               {" "}
//               <g>
//                 {" "}
//                 <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
//               </g>{" "}
//             </g>{" "}
//           </g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <g>
//               {" "}
//               <g>
//                 {" "}
//                 <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
//               </g>{" "}
//             </g>{" "}
//             <g>
//               {" "}
//               <g>
//                 {" "}
//                 <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
//               </g>{" "}
//             </g>{" "}
//           </g>
//         </svg>
//         <div className="single-container">
//           {workshops2.map((workshop, index) => (
//             <div
//               key={index}
//               className="icon-container"
//               onMouseEnter={() => setHoveredTitle(workshop.title)}
//               onMouseLeave={() => setHoveredTitle("")}
//             >
//               {/* <span className="icon">{workshop.icon}</span> */}
//               <workshop.icon className="w-10 h-10 text-cyan-400" />
//             </div>
//           ))}
//           {/* Center Gear Icon */}
//           <div className="center-icon">
//             <span>⚙️</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SemiGearPage;

import React, { useState } from "react";
import {
  TrendingUp,
  Users,
  Brain,
  Code,
  Lock,
  Server,
  Shield,
  Terminal,
  Rocket,
  Lightbulb,
  Sparkles,
  Wrench,
  Bug,
  Globe,
  Cpu,
} from "lucide-react";
import "../app/globals.css";
import MatrixRain from "./animata/MatrixRain";

type WorkshopContent = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

const workshops1: WorkshopContent[] = [
  {
    Icon: Brain,
    description: "Build and deploy advanced neural networks from scratch",
    title: "AI Systems Architecture",
  },
  {
    Icon: Code,
    description: "Learn to write bulletproof code and identify vulnerabilities",
    title: "Secure Coding Practices",
  },
  {
    Icon: Lock,
    description: "Implement and break various encryption systems",
    title: "Cryptography Workshop",
  },
  {
    Icon: Server,
    description:
      "Configure and maintain enterprise-grade security infrastructure",
    title: "Network Defense",
  },
  {
    Icon: Shield,
    description:
      "Hands-on penetration testing in our secure virtual environment",
    title: "Offensive Security Lab",
  },
  {
    Icon: Terminal,
    description: "Master binary exploitation and reverse engineering",
    title: "Advanced Exploitation",
  },
  {
    Icon: Users,
    title: "1-1 Discussion",
    description: "Personalized mentoring sessions with industry experts",
  },
  {
    Icon: TrendingUp,
    title: "Market Growth",
    description: "Insights into rapidly expanding cybersecurity and AI sectors",
  },
];

const workshops2: WorkshopContent[] = [
  {
    Icon: Brain,
    title: "Latest Technology",
    description: "Hands-on experience with cutting-edge AI and security tools",
  },
  {
    Icon: Rocket,
    title: "Career Path",
    description: "Guidance for building a successful career in tech",
  },
  {
    Icon: Wrench,
    title: "Industry Tools",
    description: "Training on professional-grade security and AI platforms",
  },
  {
    Icon: Lightbulb,
    title: "Future Scope",
    description: "Exploration of emerging technologies and opportunities",
  },
  {
    Icon: Sparkles,
    title: "Increasing Curiosity",
    description: "Engaging projects that spark innovation and learning",
  },
  {
    Icon: Bug,
    description: "Engaging projects that spark innovation and learning",
    title: "Eco Workshop",
  },
  {
    Icon: Globe,
    description: "Engaging projects that spark innovation and learning",
    title: "Analytics Workshop",
  },
  {
    Icon: Cpu,
    description: "Engaging projects that spark innovation and learning",
    title: "Speaking Workshop",
  },
];

const SemiGearPage = () => {
  // const [hoveredTitle, setHoveredTitle] = useState("");
  // const [hoveredTitle, setHoveredTitle] = useState(
  //   "Welcome to the Cybersecurity & AI Hub"
  // );
  const [hoveredContent, setHoveredContent] = useState<WorkshopContent>({
    title: "Welcome to the Cybersecurity & AI Hub",
    description: "Hover or click an icon to view details.",
    Icon: Brain,
  });

  const [selectedContent, setSelectedContent] =
    useState<WorkshopContent | null>(null);

  const [modalContent, setModalContent] = useState<WorkshopContent | null>(
    null
  );

  return (
    <section className="relative flex justify-center items-center min-h-screen text-white overflow-hidden ">
      <div className="absolute inset-0 z-[-1] blur-sm">
        <MatrixRain />
      </div>
      {/* Rotating Circle - left */}
      <div className="circle-container left-[-440px] h-full w-[50vw] flex justify-center items-center overflow-hidden">
        <svg
          fill="#000000"
          height="880px" /* Slightly reduce size */
          width="880px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          // viewBox="-25.6 -25.6 563.20 563.20"
          viewBox="-25 -25 550 550"
          stroke="#1f2937"
          // stroke-width="2.56"
          strokeWidth="2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            // stroke="#CCCCCC"
            // stroke="#00eaff"
            stroke="#4ADE80"
            opacity={0.8}
            strokeWidth="10.336000000000002"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <div className="single-container">
          {workshops1.map((workshop, index) => (
            <div
              key={index}
              className="icon-container"
              // onMouseEnter={() => setHoveredTitle(workshop.title)}
              // onMouseLeave={() =>
              //   setHoveredTitle("Welcome to the Cybersecurity & AI Hub")
              // }
              onMouseEnter={() =>
                setHoveredContent({
                  title: workshop.title,
                  description: workshop.description,
                  Icon: workshop.Icon,
                })
              }
              onMouseLeave={() =>
                setHoveredContent({
                  title:
                    selectedContent?.title ||
                    "Welcome to the Cybersecurity & AI Hub",
                  description:
                    selectedContent?.description ||
                    "Hover or click an icon to view details.",
                  Icon: selectedContent?.Icon || Brain,
                })
              }
              onClick={() =>
                setSelectedContent({
                  title: workshop.title,
                  description: workshop.description,
                  Icon: workshop.Icon,
                })
              }
            >
              {/* <span className="icon">
                <workshop.icon />
              </span> */}
              <workshop.Icon className="w-10 h-10 text-green-400 " />
            </div>
          ))}
          {/* Center Gear Icon */}
          <div className="center-icon">
            <span>⚙️</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="floating-computer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484.5 510.9">
          <title>floating computer</title>
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
            <rect x="203.8" y="267.3" width="75" height="5.75" fill="#636b6c" />
            <rect x="203.8" y="261.9" width="75" height="5.75" fill="#94a0a1" />
            <rect x="203.8" y="256.1" width="75" height="5.75" fill="#bfbfbf" />
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
          <g id="screen">
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
                  {selectedContent?.description || hoveredContent.description}
                </p>
                <button
                  className="expand-button"
                  onClick={() =>
                    setModalContent({
                      title:
                        selectedContent?.title ||
                        "Welcome to the Cybersecurity & AI Hub",
                      description:
                        selectedContent?.description ||
                        "Hover or click an icon to view details.",
                      Icon: selectedContent?.Icon || Brain,
                    })
                  }
                >
                  🔍 Expand
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
      <div className="circle-container top-0 right-[-440px] h-full w-[50vw] flex justify-center items-center overflow-hidden">
        <svg
          fill="#000000"
          height="700px"
          width="700px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-25.6 -25.6 563.20 563.20"
          // stroke="#1f2937"
          stroke="rgba(0, 234, 255, 0.8);"
          strokeWidth="2.56"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            // stroke="#CCCCCC"
            // stroke="#00eaff"
            stroke="#4ADE80"
            opacity={0.8}
            strokeWidth="10.336000000000002"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <div className="single-container">
          {workshops2.map((workshop, index) => (
            <div
              key={index}
              className="icon-container"
              // onMouseEnter={() => setHoveredTitle(workshop.title)}
              // onMouseLeave={() =>
              //   setHoveredTitle("Welcome to the Cybersecurity & AI Hub")
              // }
              onMouseEnter={() =>
                setHoveredContent({
                  title: workshop.title,
                  description: workshop.description,
                  Icon: workshop.Icon,
                })
              }
              onMouseLeave={() =>
                setHoveredContent({
                  title:
                    selectedContent?.title ||
                    "Welcome to the Cybersecurity & AI Hub",
                  description:
                    selectedContent?.description ||
                    "Hover or click an icon to view details.",
                  Icon: selectedContent?.Icon || Brain,
                })
              }
              onClick={() =>
                setSelectedContent({
                  title: workshop.title,
                  description: workshop.description,
                  Icon: workshop.Icon,
                })
              }
            >
              {/* <span className="icon">{workshop.icon}</span> */}
              <workshop.Icon className="w-10 h-10 text-green-400 " />
            </div>
          ))}
          {/* Center Gear Icon */}
          <div className="center-icon ">
            <span>⚙️</span>
          </div>
        </div>
      </div>

      {/* Modal Window for Expanded Content */}
      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-content relative top-10 h-[80%] w-[80%] neon-glow">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-2 right-3 text-gray-300 hover:text-white text-lg"
            >
              ✖
            </button>
            <h2 className="text-[3rem] font-bold mb-4">{modalContent.title}</h2>
            <p className="text-gray-300">{modalContent.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SemiGearPage;
