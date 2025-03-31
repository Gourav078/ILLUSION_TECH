// "use client";

// import React, { useEffect, useRef, useState } from "react";
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
// import MatrixRain from "./animata/MatrixRain";
// import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
// import WorkshopForm from "./WorkshopForm";
// import "@sjmc11/tourguidejs/src/scss/tour.scss";
// // import { TourGuideClient } from "@sjmc11/tourguidejs";
// import dynamic from "next/dynamic";
// // import Carousel from "./animata/ComputerContainer";
// import { useSwipeable } from "react-swipeable";
// import { motion } from "framer-motion";

// type WorkshopContent = {
//   title: string;
//   description: string;
//   fullContent: string;
//   Icon: React.ElementType;
// };

// declare global {
//   interface Window {
//     __tourGuideInitialized?: boolean;
//   }
// }

// const workshops1: WorkshopContent[] = [
//   {
//     Icon: Brain,
//     description: "It all started with a movie...",
//     title: "Why Choose IllusionSecurity.ai?",
//     fullContent: `<section class="py-12 px-4 md:px-24 bg-transparant text-white">
//   <!-- Story Section -->
//   <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//     <!-- Narrative Column -->
//     <div class="space-y-6">
//     <h2 class="text-3xl font-semibold text-cyan-400">It all started with a movie...</h2>
//       <p class="text-gray-300 leading-relaxed">
//         As a school student, I sat in a dark room, eyes glued to the screen, watching a hacker effortlessly break into a system. It felt like magic—lines of code flashing, firewalls crumbling, secrets unveiled.
//       </p>
//       <blockquote class="border-l-4 border-[#00ffff] pl-4 italic text-gray-200">
//         "How does hacking <em>really</em> work?"
//       </blockquote>
//     </div>

//     <!-- Visual Column -->
//     <div class="hidden md:block">
//       <img src="/Brain_Sec_Img.jpg"
//            alt="Cybersecurity visualization"
//            class="rounded-lg shadow-2xl neon-glow"
//            loading="lazy">
//     </div>
//   </div>

//   <!-- Problem Section -->
//   <div class="bg-gray-800 rounded-lg p-8 my-12">
//     <h3 class="text-2xl font-bold text-red-500 mb-6">The Problem:</h3>
//     <ul class="space-y-4 text-gray-300">
//       <li class="flex items-center">
//         <svg class="w-6 h-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
//         </svg>
//         No proper direction or guidance
//       </li>
//       <li class="flex items-center">
//         <svg class="w-6 h-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
//         </svg>
//         Outdated, uninspiring content
//       </li>
//       <li class="flex items-center">
//         <svg class="w-6 h-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
//         </svg>
//         No long-term student support
//       </li>
//     </ul>
//   </div>

//   <!-- Solution Section -->
//   <div class="my-12">
//     <h3 class="text-3xl font-bold text-[#00ffff] text-center mb-8">Our Revolution</h3>
//     <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div class="feature-card p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
//         <svg class="w-12 h-12 text-[#00ffff] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
//         </svg>
//         <h4 class="font-semibold mb-2">Real-World Skills</h4>
//         <p>Cutting-edge techniques employers need today</p>
//       </div>
//       <div class="feature-card p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
//         <svg class="w-12 h-12 text-[#00ffff] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
//         </svg>
//         <h4 class="font-semibold mb-2">Lifelong Mentorship</h4>
//         <p>Ongoing support beyond course completion</p>
//       </div>
//       <div class="feature-card p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
//         <svg class="w-12 h-12 text-[#00ffff] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
//         </svg>
//         <h4 class="font-semibold mb-2">Active Community</h4>
//         <p>Collaborate with aspiring cybersecurity professionals</p>
//       </div>
//     </div>
//   </div>

//   <!-- Call to Action -->
// <div class="text-center mt-12">
//     <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
//       Are you ready to see beyond the illusion?
//     </h2>
//   </div>
// </section>
//                   `,
//   },
//   {
//     Icon: Code,
//     description:
//       "🌎 The Hidden War: How Cybersecurity & AI Became the Ultimate Weapons",
//     title: "Reality of Cyberworld & Artificial Intelligence",
//     fullContent: `
//       <section class="container bg-transparent text-white main-font-family mx-auto px-4 py-12">
//         <!-- The Past Section -->
//         <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
//           <div class="md:w-1/2">
//             <h2 class="text-3xl font-bold text-[#00ffff] mb-4">⏳ The Past: When the World Was Unprepared</h2>
//             <p class="text-gray-300 mb-4">
//               There was a time when security meant locks and keys, not firewalls and encryption. The internet was young, a wild frontier where curiosity ruled over caution. Hackers were explorers, breaking into systems for fun, pushing the limits of technology.
//             </p>
//             <p class="text-gray-300 mb-4">But the world woke up.</p>
//             <ul class="text-left list-inside text-gray-400">
//               <li>🔺 <strong>Morris Worm (1988)</strong> – One of the first major cyberattacks, crashing thousands of computers overnight.</li>
//               <li>🔺 <strong>Melissa Virus (1999)</strong> – A simple email virus that spread worldwide, showing how vulnerable systems were.</li>
//               <li>🔺 <strong>Stuxnet (2010)</strong> – A cyberweapon that destroyed Iran’s nuclear centrifuges, proving that cyberwarfare was the future.</li>
//             </ul>
//           </div>
//           <div class="md:w-1/2">
//             <img src="/1sec.jpg" alt="The Past" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
//           </div>
//         </div>

//         <!-- The Past Section part 2 -->
//         <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
//           <p class="text-gray-300 md:w-1/2">
//             Back then, cybersecurity was reactive. We built firewalls, set passwords, and hoped for best.
//           </p>
//           <div class="hidden md:block w-px h-16 bg-gray-600 mx-4"></div>
//           <div class="block md:hidden w-16 h-px bg-gray-600 my-4"></div>
//           <p class="text-gray-300 md:w-1/2">
//             AI was just a dream—mostly limited to chess-playing programs and simple automation tools.
//           </p>
//         </div>

//         <!-- The Present Section -->
//         <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
//           <div class="md:w-1/2 order-2 md:order-1">
//             <img src="/2sec.jpg" alt="The Present" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
//           </div>
//           <div class="md:w-1/2 order-1 md:order-2">
//             <h2 class="text-3xl font-bold text-[#00ffff] mb-4">📍 The Present: Where We Are Now</h2>
//             <p class="text-gray-300 mb-4">
//               We are living in an era of invisible wars. Nations attack each other without a single bullet fired, bringing down power grids, stealing classified data, and manipulating elections—all through cyber warfare.
//             </p>
//             <p class="text-gray-300 mb-4">
//               Hackers no longer work alone. They use AI-powered attack bots that can break into systems in seconds. Meanwhile, companies and governments use AI to fight back.
//             </p>
//           </div>
//         </div>

//         <!-- The Present Section part 2 -->
//         <div class="flex flex-col md:flex-row gap-8 mb-12">
//           <!-- First Column -->
//           <div class="md:w-1/3">
//             <ul class="text-left list-inside text-gray-400">
//               <li>🚀 <strong>The 2023 Twitter Hack</strong> – AI-powered phishing attacks tricked high-profile users into revealing sensitive data.</li>
//               <li>🚀 <strong>The 2021 Colonial Pipeline Attack</strong> – A ransomware attack shut down a major fuel pipeline in the U.S., proving how cyberattacks can cripple economies.</li>
//               <li>🚀 <strong>The 2023 Microsoft Email Breach</strong> – Chinese hackers infiltrated Microsoft’s cloud services, exposing sensitive government data.</li>
//             </ul>
//           </div>

//           <!-- Divider -->
//           <div class="hidden md:block w-px h-auto bg-gray-600"></div>
//           <div class="block md:hidden w-full h-px bg-gray-600 my-4"></div>

//           <!-- Second Column -->
//           <div class="md:w-1/3">
//             <p class="text-gray-300">
//               Meanwhile, AI has taken over.
//             </p>
//             <ul class="text-left list-inside text-gray-400 mt-4">
//               <li>✅ <strong>AI-driven cybersecurity</strong> – AI detects threats faster than humans ever could.</li>
//               <li>✅ <strong>Deepfake technology</strong> – AI can generate fake videos so realistic they can be used to spread misinformation or commit fraud.</li>
//               <li>✅ <strong>AI-powered chatbots</strong> – Like ChatGPT, Gemini, and Copilot, these can write emails, generate code, and even create human-like conversations.</li>
//             </ul>
//           </div>

//           <!-- Divider -->
//           <div class="hidden md:block w-px h-auto bg-gray-600"></div>
//           <div class="block md:hidden w-full h-px bg-gray-600 my-4"></div>

//           <!-- Third Column -->
//           <div class="md:w-1/3">
//             <p class="text-gray-300">
//               But AI also comes with dark sides:
//             </p>
//             <ul class="text-left list-inside text-gray-400 mt-4">
//               <li>❌ <strong>AI-powered phishing</strong> – Scammers use AI to create perfect emails and voice messages, mimicking real people.</li>
//               <li>❌ <strong>Deepfake cybercrimes</strong> – AI-generated deepfake videos are used for scams, misinformation, and even political warfare.</li>
//               <li>❌ <strong>Job displacement</strong> – AI is replacing workers in cybersecurity, customer service, and even creative industries.</li>
//             </ul>
//           </div>
//         </div>

//         <div class="text-center mb-12">
//           <p class="text-gray-300">
//             The war between cybersecurity and AI is no longer in the future. It is happening right now.
//           </p>
//         </div>

//         <div class="flex justify-center my-12">
//           <img src="https://placehold.co/800x400" alt="Divider Image" class="w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg">
//         </div>

//         <!-- The Future Section -->
//         <div class="mb-12">
//           <!-- Title -->
//           <h2 class="text-3xl font-bold text-[#00ffff] mb-6 text-center">🔮 The Future: The Unstoppable Revolution</h2>

//           <!-- Two Parts -->
//           <div class="flex flex-col md:flex-row gap-8 mb-8">
//             <!-- Part 1: First List -->
//             <div class="md:w-1/2">
//               <p class="text-gray-300 mb-4">
//                 The cybersecurity of tomorrow won’t be about just protecting data—it will be about defending reality itself.
//               </p>
//               <ul class="text-left list-inside text-gray-400">
//                 <li>🔮 <strong>Quantum Hacking</strong> – The passwords we use today? Gone in milliseconds once quantum computing goes mainstream.</li>
//                 <li>🔮 <strong>AI vs AI Cyber Wars</strong> – Imagine autonomous AI hackers fighting against AI-powered security systems in real time.</li>
//                 <li>🔮 <strong>The End of Privacy</strong> – Everything you do, say, or think online—recorded, analyzed, and used against you.</li>
//                 <li>🔮 <strong>Cybersecurity as a Survival Skill</strong> – The ability to defend yourself online will be as essential as knowing how to swim.</li>
//               </ul>
//             </div>

//             <div class="hidden md:block w-px h-auto bg-gray-600"></div>
//             <div class="block md:hidden w-full h-px bg-gray-600 my-4"></div>

//             <!-- Part 2: Second List -->
//             <div class="md:w-1/2">
//               <p class="text-gray-300 mb-4">
//                 New threats are emerging faster than ever:
//               </p>
//               <ul class="text-left list-inside text-gray-400">
//                 <li>⚠️ <strong>AI-powered ransomware</strong> – Future malware could adapt and learn in real time, making it nearly impossible to stop.</li>
//                 <li>⚠️ <strong>Autonomous cyberweapons</strong> – AI-powered cyberattacks could be launched without human intervention.</li>
//                 <li>⚠️ <strong>Synthetic identities</strong> – AI can create completely fake people with realistic voices and identities, making fraud undetectable.</li>
//               </ul>
//             </div>
//           </div>

//           <!-- Remaining Content -->
//           <div class="text-gray-300">
//             <p class="mb-4">
//               The line between human intelligence and artificial intelligence is disappearing.
//             </p>
//             <p>
//               Are you ready for what comes next?
//             </p>
//           </div>
//         </div>

//         <!-- The Hard Truth Section -->
//         <div class="text-center mb-12">
//           <h2 class="text-3xl font-bold text-[#00ffff] mb-4">💡 The Hard Truth: You Have Two Choices</h2>
//           <p class="text-gray-300 mb-4">
//             The world is changing faster than you think. You can either:
//           </p>

//           <!-- Styled Buttons for Choices -->
//           <div class="flex flex-col md:flex-row justify-center gap-4 mb-6">
//             <!-- Incorrect Option -->
//             <button id="ignore-btn" class="bg-gray-800 text-gray-300 px-10 py-3 rounded-lg hover:bg-red-700 transition duration-300 w-full md:w-84">
//               ❌ Ignore it—and become just another victim in the cyber war.
//             </button>

//             <!-- Correct Option -->
//             <button id="master-btn" class="bg-green-800 text-gray-300 px-10 py-3 rounded-lg hover:bg-green-700 transition duration-300 w-full md:w-84">
//               ✅  Master it—and become a warrior, a protector, a legend in the cyber-AI battlefield.
//             </button>
//           </div>

//           <p class="text-gray-300 mb-6">
//             That’s why <span class="font-bold text-[#00ffff]">IllusionSecurity.ai</span> exists.
//           </p>
//           <p class="text-gray-300 mb-6">
//             This is not just a training platform. This is a movement. A chance to see beyond the illusion, to break into the most powerful domain of the future—Cybersecurity & AI.
//           </p>
//         </div>

//         <!-- Why Choose IllusionSecurity.ai Section -->
//         <div class="text-center mb-12">
//           <h2 class="text-3xl font-bold text-[#00ffff] mb-4">👊 Why Choose IllusionSecurity.ai?</h2>
//           <p class="text-gray-300 mb-6">
//             Unlike other training institutes that treat students like numbers, we believe in creating real-world experts.
//           </p>
//           <ul class="text-left list-inside text-gray-400 mb-6">
//             <li>💡 We don’t teach cybersecurity. We make you live it.</li>
//             <li>💡 We don’t throw certifications at you. We build your skills to face the real cyber world.</li>
//             <li>💡 We don’t stop at knowledge. We create warriors who can fight in this digital battlefield.</li>
//           </ul>
//           <p class="text-gray-300 mb-6">
//             We believe in curiosity, hands-on learning, and long-term mentorship. We believe in you.
//           </p>
//           <p class="text-gray-300 mb-6">
//             The world is being rewritten in code. Are you ready to take control?
//           </p>
//           <button class="bg-cyan-500 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-600 transition duration-300">
//             🔥 Join the Revolution 🔥
//           </button>
//         </div>
//       </section>`,
//   },
//   {
//     Icon: Lock,
//     description: "The future is here—will you be ready?",
//     title: "The AI & Cybersecurity Workshop That Will Open Your Eyes",
//     fullContent: `<section class="container bg-transparant text-white main-font-family mx-auto px-4 py-12">
//     <!-- Title Section -->
//     <div class="text-center mb-12">
//       <p class="text-[2rem] text-cyan-400">Imagine This...</p>
//     </div>

//     <!-- Introduction Section -->
//     <div class="flex flex-col gap-8 mb-12">
//       <!-- First Part: First List with Image on Left -->
//       <div class="flex flex-col md:flex-row items-center gap-8">
//         <div class="md:w-1/2">
//           <img src="https://placehold.co/600x400" alt="AI Hacking" class="w-full rounded-lg shadow-lg">
//         </div>
//         <div class="md:w-1/2">
//           <p class="text-gray-300 mb-6">
//             It’s the year 2030. You wake up, check your phone, and see a shocking headline:
//           </p>
//           <ul class="text-left list-inside text-gray-400 mb-6">
//             <li>💥 <strong>"AI-Powered Hacker Drains Millions from Global Bank in Seconds!"</strong></li>
//             <li>💥 <strong>"Deepfake Scam Steals Identities of 100,000 People!"</strong></li>
//             <li>💥 <strong>"AI Now Replacing Cybersecurity Professionals – Are Humans No Longer Needed?"</strong></li>
//           </ul>
//           <p class="text-gray-300 mb-6">
//             Sounds like science fiction, right? But this isn’t the future. It’s already happening.
//           </p>
//         </div>
//       </div>

//       <!-- Second Part: Second List with Image on Right -->
//       <div class="flex flex-col md:flex-row items-center gap-8">
//         <div class="md:w-1/2 order-2 md:order-1">
//           <ul class="text-left list-inside text-gray-400 mb-6">
//             <li>🔹 AI is writing code, making art, composing music… and hacking systems.</li>
//             <li>🔹 Cybercriminals are smarter than ever, breaking into governments and billion-dollar companies.</li>
//             <li>🔹 Jobs are disappearing, but new opportunities are opening up—if you know where to look.</li>
//           </ul>
//           <p class="text-gray-300 mb-6">
//             The real question is: Are you ready for this future? Or will you be left behind?
//           </p>
//         </div>
//         <div class="md:w-1/2 order-1 md:order-2">
//           <img src="https://placehold.co/600x400" alt="AI Opportunities" class="w-full rounded-lg shadow-lg">
//         </div>
//       </div>
//     </div>

//     <!-- The Harsh Truth Section -->
//     <div class="flex flex-col gap-8 mb-12">
//       <!-- First Part: Centered Content (No Image) -->
//       <div class="text-center">
//         <h2 class="text-3xl font-bold text-[#00ffff] mb-4">💡 The Harsh Truth: No One is Teaching You This</h2>
//         <p class="text-gray-300 mb-6">
//           Most AI & Cybersecurity courses are stuck in the past.
//         </p>
//         <ul class="text-left list-inside text-gray-400 mb-6">
//           <li>📌 They teach outdated concepts.</li>
//           <li>📌 They give you certificates that don’t actually get you hired.</li>
//           <li>📌 They make you memorize theories, but never show you the real-world skills.</li>
//         </ul>
//       </div>

//       <!-- Second Part: Content with Image -->
//       <div class="flex flex-col md:flex-row items-center gap-8">
//         <div class="md:w-1/2">
//           <img src="https://placehold.co/600x400" alt="Harsh Truth" class="w-full rounded-lg shadow-lg">
//         </div>
//         <div class="md:w-1/2">
//           <p class="text-left text-gray-300 mb-6">
//             👉 That’s why I created this workshop. Because you deserve more than just theory.
//           </p>
//           <p class="text-left text-gray-300 mb-6">
//             👉 You deserve to see how AI is changing cybersecurity and how cybersecurity is controlling AI.
//           </p>
//           <p class="text-left text-gray-300 mb-6">
//             👉 You deserve a real, hands-on experience that will blow your mind.
//           </p>
//         </div>
//       </div>
//     </div>

//     <!-- The Workshop Experience Section -->
//     <div class="mb-12">
//       <h2 class="text-3xl font-bold text-[#00ffff] mb-6 text-center">🔥 The Workshop Experience: What You’ll Discover</h2>
//       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <!-- Live Hacking Demo -->
//         <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 class="text-xl font-bold text-[#00ffff] mb-4">🚨 LIVE Hacking Demo</h3>
//           <p class="text-gray-300">Watch me hack into a system (legally!) and see how cybercriminals think.</p>
//         </div>

//         <!-- AI Challenge -->
//         <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 class="text-xl font-bold text-[#00ffff] mb-4">🚨 AI Challenge</h3>
//           <p class="text-gray-300">Can you outsmart an AI chatbot? Let’s test your skills.</p>
//         </div>

//         <!-- Cyber Attack Case Studies -->
//         <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 class="text-xl font-bold text-[#00ffff] mb-4">🚨 Cyber Attack Case Studies</h3>
//           <p class="text-gray-300">The biggest hacks in history and what we learned from them.</p>
//         </div>

//         <!-- Career Roadmap -->
//         <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 class="text-xl font-bold text-[#00ffff] mb-4">🚨 Career Roadmap</h3>
//           <p class="text-gray-300">How to break into AI & Cybersecurity even if you have ZERO experience.</p>
//         </div>
//       </div>
//     </div>

//     <!-- Why This Workshop is a Game-Changer Section -->
//     <div class="mb-12">
//       <h2 class="text-3xl font-bold text-[#00ffff] mb-6 text-center">🚀 Why This Workshop is a Game-Changer</h2>
//       <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 class="text-xl font-bold text-[#00ffff] mb-4">✅ Real-World Experience</h3>
//           <p class="text-gray-300">You’ll experience AI & Cybersecurity in action, not just hear about it.</p>
//         </div>
//         <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 class="text-xl font-bold text-[#00ffff] mb-4">✅ Step-by-Step Guide</h3>
//           <p class="text-gray-300">You’ll get a clear roadmap to launching your career.</p>
//         </div>
//         <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 class="text-xl font-bold text-[#00ffff] mb-4">✅ Industry Insights</h3>
//           <p class="text-gray-300">You’ll see the truth about this industry—what no one else is telling you.</p>
//         </div>
//       </div>
//     </div>

//     <!-- The Offer Section -->
//     <div class="text-center mb-12">
//       <h2 class="text-3xl font-bold text-[#00ffff] mb-6">💰 The Offer: Take the First Step Now</h2>
//       <p class="text-gray-300 mb-6">
//         This is not just another "tech workshop." This is your entry ticket into a field that’s changing the world.
//       </p>
//       <p class="text-gray-300 mb-6">
//         By the end of the session, you’ll get an exclusive invitation to my full training—designed to take you from beginner to expert in months, not years.
//       </p>
//       <p class="text-gray-300 mb-6">
//         ⚠️ But first, you need to experience it.
//       </p>
//       <p class="text-gray-300 mb-6">
//         Seats are LIMITED. The future won’t wait for you.
//       </p>
//       <button class="bg-cyan-500 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-600 transition duration-300">
//         🔻 REGISTER NOW & Take Control of Your Future! 🔻
//       </button>
//     </div>
//   </section>`,
//   },
//   {
//     Icon: Server,
//     description:
//       "Configure and maintain enterprise-grade security infrastructure",
//     title: "Network Defense",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Shield,
//     description:
//       "Hands-on penetration testing in our secure virtual environment",
//     title: "Offensive Security Lab",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Terminal,
//     description: "Master binary exploitation and reverse engineering",
//     title: "Advanced Exploitation",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Users,
//     title: "1-1 Discussion",
//     description: "Personalized mentoring sessions with industry experts",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: TrendingUp,
//     title: "Market Growth",
//     description: "Insights into rapidly expanding cybersecurity and AI sectors",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
// ];

// const workshops2: WorkshopContent[] = [
//   {
//     Icon: Brain,
//     title: "Latest Technology",
//     description: "Hands-on experience with cutting-edge AI and security tools",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Rocket,
//     title: "Career Path",
//     description: "Guidance for building a successful career in tech",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Wrench,
//     title: "Industry Tools",
//     description: "Training on professional-grade security and AI platforms",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Lightbulb,
//     title: "Future Scope",
//     description: "Exploration of emerging technologies and opportunities",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Sparkles,
//     title: "Increasing Curiosity",
//     description: "Engaging projects that spark innovation and learning",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Bug,
//     description: "Engaging projects that spark innovation and learning",
//     title: "Eco Workshop",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Globe,
//     description: "Engaging projects that spark innovation and learning",
//     title: "Analytics Workshop",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
//   {
//     Icon: Cpu,
//     description: "Engaging projects that spark innovation and learning",
//     title: "Speaking Workshop",
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   },
// ];

// const SemiGearPage = () => {
//   const [hoveredContent, setHoveredContent] = useState<WorkshopContent>({
//     title: "Welcome to the Cybersecurity & AI Hub",
//     description: "Hover or click an icon to view details.",
//     Icon: Brain,
//     fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//   });

//   const [selectedContent, setSelectedContent] =
//     useState<WorkshopContent | null>(null);

//   const [modalContent, setModalContent] = useState<WorkshopContent | null>(
//     null
//   );

//   useEffect(() => {
//     if (modalContent) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Re-enable scrolling
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Ensure scrolling is enabled when component unmounts
//     };
//   }, [modalContent]);

//   // try
//   const [tourStarted, setTourStarted] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       async (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting && !tourStarted) {
//           requestAnimationFrame(async () => {
//             const { TourGuideClient } = await import("@sjmc11/tourguidejs");
//             startTour(TourGuideClient);
//             setTourStarted(true);
//             observer.disconnect();
//           });
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [tourStarted]);

//   const startTour = (
//     TourGuideClient: typeof import("@sjmc11/tourguidejs").TourGuideClient
//   ) => {
//     if (typeof window !== "undefined" && !window.__tourGuideInitialized) {
//       window.__tourGuideInitialized = true;

//       const tg = new TourGuideClient({
//         exitOnClickOutside: false,
//         closeButton: true,
//         autoScroll: false,
//         targetPadding: 0,
//       });

//       tg.start();
//     }
//   };

//   // SMALL SCREEN THINGS - START
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   // SMALL SCREEN THINGS - END

//   // SWIPER - START
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipeDirection, setSwipeDirection] = useState<"left" | "right">(
//     "left"
//   );

//   const workshops = [...workshops1, ...workshops2]; // Combine both workshop arrays

//   const handleSwipe = (direction: "left" | "right") => {
//     setSwipeDirection(direction); // Set the swipe direction
//     if (direction === "left") {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === workshops.length - 1 ? 0 : prevIndex + 1
//       );
//     } else if (direction === "right") {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? workshops.length - 1 : prevIndex - 1
//       );
//     }
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => handleSwipe("left"),
//     onSwipedRight: () => handleSwipe("right"),
//     trackMouse: true, // Allows swipe detection with a mouse
//   });
//   // SWIPER - END

//   return (
//     <>
//       {isSmallScreen ? (
//         <section
//           ref={sectionRef}
//           className="relative flex justify-center items-center min-h-screen text-white overflow-hidden "
//         >
//           <div className="absolute flex justify-center items-center inset-0 z-[-1] blur-sm">
//             <MatrixRain />
//           </div>
//           <div className="floating-computer">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484.5 510.9">
//               <title></title>
//               <g id="computer">
//                 <rect
//                   x="67.7"
//                   width="348"
//                   height="217"
//                   rx="17.5"
//                   ry="17.5"
//                   fill="#c5d5d7"
//                 />
//                 <path
//                   d="M803.4,378.2H490.7c-9.7,0-17.5-6.3-17.5-14.2v7.7c0,7.8,7.8,14.2,17.5,14.2H803.4c9.7,0,17.5-6.3,17.5-14.2V364C820.9,371.8,813,378.2,803.4,378.2Z"
//                   transform="translate(-405.5 -167)"
//                   fill="#b6babd"
//                 />
//                 <rect x="203.8" y="218" width="75" height="55" fill="#c5d5d7" />
//                 <rect
//                   x="203.8"
//                   y="267.3"
//                   width="75"
//                   height="5.75"
//                   fill="#636b6c"
//                 />
//                 <rect
//                   x="203.8"
//                   y="261.9"
//                   width="75"
//                   height="5.75"
//                   fill="#94a0a1"
//                 />
//                 <rect
//                   x="203.8"
//                   y="256.1"
//                   width="75"
//                   height="5.75"
//                   fill="#bfbfbf"
//                 />
//                 <rect
//                   x="124.8"
//                   y="273"
//                   width="233"
//                   height="19"
//                   rx="2.4"
//                   ry="2.4"
//                   fill="#c5d5d7"
//                 />
//                 <path
//                   d="M760.9,453.5H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,452.8,762.3,453.5,760.9,453.5Z"
//                   transform="translate(-405.5 -167)"
//                   fill="#6f7879"
//                 />
//                 <path
//                   d="M760.9,447.3H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,446.6,762.3,447.3,760.9,447.3Z"
//                   transform="translate(-405.5 -167)"
//                   fill="#bfc6c7"
//                 />
//                 <circle cx="241.7" cy="197.2" r="9.1" fill="#6f7879" />
//               </g>
//               <g
//                 data-tg-tour="Swipe left or right to view more workshops."
//                 data-tg-order={1}
//                 id="screen"
//               >
//                 <rect
//                   x="79.8"
//                   y="17.5"
//                   width="323"
//                   height="164.5"
//                   // fill="url(#g300)"
//                   rx="10"
//                 />
//                 <foreignObject x="90" y="25" width="300" height="150">
//                   <div
//                     {...swipeHandlers}
//                     className="relative w-full h-full flex flex-col justify-between items-center"
//                   >
//                     <motion.div
//                       key={currentIndex}
//                       initial={{
//                         x: swipeDirection === "left" ? 300 : -300, // Start position based on swipe direction
//                         opacity: 0,
//                       }}
//                       animate={{ x: 0, opacity: 1 }} // Animate to center
//                       exit={{
//                         x: swipeDirection === "left" ? -300 : 300, // Exit position based on swipe direction
//                         opacity: 0,
//                       }}
//                       transition={{ duration: 0.5 }}
//                       className="screen-content text-center"
//                     >
//                       <h3 className="text-lg font-bold text-white">
//                         {workshops[currentIndex].title}
//                       </h3>
//                       <p className="text-sm text-gray-300">
//                         {workshops[currentIndex].description}
//                       </p>
//                     </motion.div>

//                     {/* Dots for Navigation */}
//                     <div className="flex justify-center items-center space-x-2 my-4">
//                       {workshops.map((_, index) => (
//                         <motion.div
//                           key={index}
//                           className={`h-2 w-2 rounded-full cursor-pointer ${
//                             currentIndex === index ? "bg-white" : "bg-gray-500"
//                           }`}
//                           onClick={() => setCurrentIndex(index)}
//                           animate={{
//                             scale: currentIndex === index ? 1.2 : 1,
//                           }}
//                           transition={{ duration: 0.2 }}
//                           style={{
//                             filter:
//                               currentIndex === index ? "none" : "blur(2px)", // Blur inactive dots
//                           }}
//                         />
//                       ))}
//                     </div>

//                     <div className="flex justify-between w-full px-4">
//                       <button
//                         data-tg-tour="You can expand the view of this content."
//                         data-tg-order={2}
//                         className="expand-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//                         onClick={() =>
//                           setModalContent({
//                             title: workshops[currentIndex].title,
//                             description: workshops[currentIndex].description,
//                             Icon: workshops[currentIndex].Icon,
//                             fullContent: workshops[currentIndex].fullContent,
//                           })
//                         }
//                       >
//                         🔍 Expand
//                       </button>
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <button
//                             data-tg-tour="You can register yourself for the upcoming workshops."
//                             data-tg-order={99}
//                             className="register-button bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//                           >
//                             Register
//                           </button>
//                         </DialogTrigger>
//                         <DialogContent className="bg-transparent border-none sm:max-w-[425px]">
//                           <WorkshopForm />
//                         </DialogContent>
//                       </Dialog>
//                     </div>
//                   </div>
//                 </foreignObject>
//               </g>
//               <g id="triMain">
//                 <g>
//                   <polygon
//                     points="162.3 429.3 144.8 450.1 4.4 290 479.1 290 349.7 403.6 278.8 497.7 264.4 478.5 241.3 498.7 162.3 429.3"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M879.4,459,753.8,569.2l-69.4,92.1-14.2-18.8L646.9,663l-79.2-69.5L550.3,614l-136-155h465m10.6-4H405.5l5.8,6.6,136,155,3.1,3.5,3-3.6,14.7-17.4L644.2,666l2.6,2.3,2.6-2.3,20.1-17.6,11.6,15.4,3.2,4.2,3.2-4.2L756.7,572,882,462l8-7Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="436.1 292 327.1 387.6 266.9 467.6 254.6 451.2 234.3 469 165.6 408.7 150.6 426.5 32.6 292 8.8 292 144.8 447 162.1 426.5 241.3 496 264.7 475.5 278.8 494.3 348.2 402.2 473.8 292 436.1 292"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triMid">
//                 <g>
//                   <polygon
//                     points="160.2 456.7 237.6 456.7 199.2 503.3 160.2 456.7"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M640,625.2,604.7,668,569,625.2h71m6.4-3H562.6l4.1,4.9,35.7,42.8,2.3,2.8,2.3-2.8,35.3-42.8,4.1-4.9Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="217.7 458.2 190.7 490.9 199.1 501 234.5 458.2 217.7 458.2"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triLeftSmall">
//                 <g>
//                   <polygon
//                     points="29.4 444.1 66.2 444.1 47.9 466.2 29.4 444.1"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M467.5,613.1l-14,17-14.2-17h28.2m8.5-4H430.7l5.5,6.6,14.2,17,3.1,3.7,3.1-3.7,14-17,5.4-6.5Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="55.3 446.1 44.5 459.1 47.9 463.1 61.9 446.1 55.3 446.1"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triRightSmall">
//                 <g>
//                   <polygon
//                     points="335.3 487.7 369.9 487.7 352.7 508.5 335.3 487.7"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M772.3,656.2l-14,17-14.2-17h28.2m6.4-3h-41l4.1,4.9,14.2,17,2.3,2.8,2.3-2.8,14-17,4.1-4.9Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="360.1 489.2 349.4 502.2 352.7 506.2 366.7 489.2 360.1 489.2"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triLeft">
//                 <g>
//                   <polygon
//                     points="16.7 359 173.3 359 95.4 438.2 16.7 359"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M575.2,527.5,501,603.1l-75.1-75.6H575.2m7.2-3H418.7l5.1,5.1,75.1,75.6,2.1,2.2,2.1-2.2,74.3-75.6,5-5.1Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="147.8 360.5 84.2 425.2 95 436.1 169.3 360.5 147.8 360.5"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triRight">
//                 <g>
//                   <polygon
//                     points="197.2 314.2 479.6 314.2 395.4 407.5 392.1 403.5 339.3 457.2 197.2 314.2"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M881.8,482.7,801,572.2l-3.3-4-52.9,53.8L606.3,482.7H881.8m6.7-3H599.1l5.1,5.1L742.7,624.2l2.1,2.2,2.1-2.2,50.6-51.5,1.2,1.4,2.2,2.7,2.3-2.6L884,484.7l4.5-5Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="224.8 315.7 200.8 315.7 339.3 455.1 351.2 442.9 224.8 315.7"
//                   fill="#297d51"
//                 />
//               </g>
//               <linearGradient
//                 id="g300"
//                 gradientUnits="userSpaceOnUse"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="100%"
//               >
//                 <stop stopColor="#67B26F" offset="0" />
//                 <stop stopColor="#4CA2CD" offset="1" />
//               </linearGradient>
//             </svg>
//           </div>
//           {/* Modal Window for Expanded Content */}
//           {modalContent && (
//             <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//               <div className="custom-scrollbar modal-content relative top-10 h-[80%] w-[90%] md:w-[80%] overflow-y-auto neon-glow bg-gray-900 p-4 md:p-6 rounded-lg">
//                 <button
//                   onClick={() => setModalContent(null)}
//                   className="absolute top-2 right-3 text-gray-300 hover:text-white text-lg"
//                 >
//                   ✖
//                 </button>
//                 <h2 className="text-[1.5rem] md:text-[3rem] font-bold mb-4">
//                   {modalContent.title}
//                 </h2>
//                 <p className="text-gray-300 text-sm md:text-lg">
//                   {modalContent.description}
//                 </p>
//                 <div
//                   className="text-gray-300 max-h-[60vh] text-sm md:text-lg"
//                   dangerouslySetInnerHTML={{ __html: modalContent.fullContent }}
//                 />
//               </div>
//             </div>
//           )}
//         </section>
//       ) : (
//         <section
//           ref={sectionRef}
//           className="relative flex justify-center items-center min-h-screen text-white overflow-hidden "
//         >
//           <div className="absolute flex justify-center items-center inset-0 z-[-1] blur-sm">
//             <MatrixRain />
//           </div>
//           {/* Rotating Circle - left */}
//           <div
//             data-tg-tour="<p>These are the feature's click on it to view.</p>"
//             data-tg-order={0}
//             className="circle-container left-[-440px] h-[10rem] w-[50vw] flex justify-center items-center overflow-hidden"
//           >
//             <svg
//               fill="#000000"
//               height="860px" /* Slightly reduce size */
//               width="860x"
//               version="1.1"
//               id="Layer_1"
//               xmlns="http://www.w3.org/2000/svg"
//               // viewBox="-25.6 -25.6 563.20 563.20"
//               viewBox="-25 -25 550 550"
//               stroke="#1f2937"
//               // stroke-width="2.56"
//               strokeWidth="2"
//             >
//               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 // stroke="#CCCCCC"
//                 // stroke="#00eaff"
//                 stroke="#4ADE80"
//                 opacity={0.8}
//                 strokeWidth="10.336000000000002"
//               >
//                 {" "}
//                 <g>
//                   {" "}
//                   <g>
//                     {" "}
//                     <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
//                   </g>{" "}
//                 </g>{" "}
//                 <g>
//                   {" "}
//                   <g>
//                     {" "}
//                     <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
//                   </g>{" "}
//                 </g>{" "}
//               </g>
//               <g id="SVGRepo_iconCarrier">
//                 {" "}
//                 <g>
//                   {" "}
//                   <g>
//                     {" "}
//                     <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
//                   </g>{" "}
//                 </g>{" "}
//                 <g>
//                   {" "}
//                   <g>
//                     {" "}
//                     <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
//                   </g>{" "}
//                 </g>{" "}
//               </g>
//             </svg>
//             <div className="single-container">
//               {workshops1.map((workshop, index) => (
//                 <div
//                   key={index}
//                   className="icon-container"
//                   onMouseEnter={() =>
//                     setHoveredContent({
//                       title: workshop.title,
//                       description: workshop.description,
//                       Icon: workshop.Icon,
//                       fullContent: workshop.fullContent,
//                     })
//                   }
//                   onMouseLeave={() =>
//                     setHoveredContent({
//                       title:
//                         selectedContent?.title ||
//                         "Why Choose IllusionSecurity.ai?",
//                       description:
//                         selectedContent?.description ||
//                         "It all started with a movie...",
//                       Icon: selectedContent?.Icon || Brain,
//                       fullContent:
//                         selectedContent?.fullContent ||
//                         `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//                     })
//                   }
//                   onClick={() =>
//                     setSelectedContent({
//                       title: workshop.title,
//                       description: workshop.description,
//                       Icon: workshop.Icon,
//                       fullContent: workshop.fullContent,
//                     })
//                   }
//                 >
//                   <workshop.Icon className="w-10 h-10 text-green-400 " />
//                 </div>
//               ))}
//               {/* Center Gear Icon */}
//               <div className="center-icon">
//                 <span>⚙️</span>
//               </div>
//             </div>
//           </div>

//           {/* Title */}
//           <div className="floating-computer">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484.5 510.9">
//               <title></title>
//               <g id="computer">
//                 <rect
//                   x="67.7"
//                   width="348"
//                   height="217"
//                   rx="17.5"
//                   ry="17.5"
//                   fill="#c5d5d7"
//                 />
//                 <path
//                   d="M803.4,378.2H490.7c-9.7,0-17.5-6.3-17.5-14.2v7.7c0,7.8,7.8,14.2,17.5,14.2H803.4c9.7,0,17.5-6.3,17.5-14.2V364C820.9,371.8,813,378.2,803.4,378.2Z"
//                   transform="translate(-405.5 -167)"
//                   fill="#b6babd"
//                 />
//                 <rect x="203.8" y="218" width="75" height="55" fill="#c5d5d7" />
//                 <rect
//                   x="203.8"
//                   y="267.3"
//                   width="75"
//                   height="5.75"
//                   fill="#636b6c"
//                 />
//                 <rect
//                   x="203.8"
//                   y="261.9"
//                   width="75"
//                   height="5.75"
//                   fill="#94a0a1"
//                 />
//                 <rect
//                   x="203.8"
//                   y="256.1"
//                   width="75"
//                   height="5.75"
//                   fill="#bfbfbf"
//                 />
//                 <rect
//                   x="124.8"
//                   y="273"
//                   width="233"
//                   height="19"
//                   rx="2.4"
//                   ry="2.4"
//                   fill="#c5d5d7"
//                 />
//                 <path
//                   d="M760.9,453.5H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,452.8,762.3,453.5,760.9,453.5Z"
//                   transform="translate(-405.5 -167)"
//                   fill="#6f7879"
//                 />
//                 <path
//                   d="M760.9,447.3H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,446.6,762.3,447.3,760.9,447.3Z"
//                   transform="translate(-405.5 -167)"
//                   fill="#bfc6c7"
//                 />
//                 <circle cx="241.7" cy="197.2" r="9.1" fill="#6f7879" />
//               </g>
//               <g
//                 data-tg-tour="Selected content is visible here."
//                 data-tg-order={1}
//                 id="screen"
//               >
//                 <rect
//                   x="79.8"
//                   y="17.5"
//                   width="323"
//                   height="164.5"
//                   // fill="url(#g300)"
//                   rx="10"
//                 />
//                 <foreignObject x="90" y="25" width="300" height="150">
//                   <div className="screen-content">
//                     <h3>{selectedContent?.title || hoveredContent.title}</h3>
//                     <p>
//                       {selectedContent?.description ||
//                         hoveredContent.description}
//                     </p>
//                     <button
//                       data-tg-tour="You can expand the view of this content."
//                       data-tg-order={2}
//                       className="expand-button"
//                       onClick={() =>
//                         setModalContent({
//                           title:
//                             selectedContent?.title ||
//                             "Why Choose IllusionSecurity.ai?",
//                           description:
//                             selectedContent?.description ||
//                             "It all started with a movie.",
//                           Icon: selectedContent?.Icon || Brain,
//                           fullContent:
//                             selectedContent?.fullContent ||
//                             `<section class="bg-transparant text-white main-font-family container mx-auto px-4 py-12">
//                               <!-- Introduction -->
//                               <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
//                                 <div class="md:w-1/2">
//                                   <p class="text-gray-300 mb-6">
//                                     As a school student, I sat in a dark room, eyes glued to the screen, watching a hacker effortlessly break into a system. It felt like magic—lines of code flashing, firewalls crumbling, secrets unveiled. That moment ignited something in me. A burning curiosity. A question I couldn’t shake:
//                                   </p>
//                                   <p class="text-2xl font-semibold text-[#00ffff]">"How does hacking really work?"</p>
//                                 </div>
//                                 <div class="md:w-1/2">
//                                   <img src="/1sec.jpg" alt="Hacker in action" class="w-[300px] h-[200px] lg:w-[600px] lg:h-[400px] sm:w-[600px] sm:h-[400px] rounded-lg shadow-lg object-coverr">
//                                 </div>
//                               </div>

//                               <!-- Challenges Faced -->
//                               <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
//                                 <div class="md:w-1/2 order-2 md:order-1">
//                                   <img src="/2sec.jpg" alt="Student searching for knowledge" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
//                                 </div>
//                                 <div class="md:w-1/2 order-1 md:order-2">
//                                   <p class="text-gray-300 mb-4">
//                                     I wanted to learn. I searched everywhere—books, the internet, videos. But no matter where I looked, I hit the same wall:
//                                   </p>
//                                   <ul class="list-inside text-left text-gray-400 mb-4">
//                                     <li>❌ No proper direction</li>
//                                     <li>❌ No one to guide me</li>
//                                     <li>❌ Outdated, uninspiring content</li>
//                                   </ul>
//                                   <p class="text-gray-300">I was lost.</p>
//                                 </div>
//                               </div>

//                               <!-- Training Institutes -->
//                               <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
//                                 <div class="md:w-1/2">
//                                   <p class="text-gray-300 mb-4">
//                                     Like many others, I turned to training institutes that promised to teach hacking and cybersecurity. They handed out certifications, structured courses, and flashy marketing. But the deeper I went, the more I realized:
//                                   </p>
//                                   <ul class=" list-inside text-left text-gray-400 mb-4">
//                                     <li>🛑 They focused on selling courses, not sparking curiosity.</li>
//                                     <li>🛑 Their content was outdated, missing real-world relevance.</li>
//                                     <li>🛑 Once the training ended, they moved on—no long-term care for students.</li>
//                                   </ul>
//                                   <p class="text-gray-300">I knew there had to be a better way.</p>
//                                 </div>
//                                 <div class="md:w-1/2">
//                                   <img src="/3sec.jpg" alt="Training institute" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
//                                 </div>
//                               </div>

//                               <!-- Self-Learning Journey -->
//                               <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
//                                 <div class="md:w-1/2 order-2 md:order-1">
//                                   <img src="/4sec.jpg" alt="Student learning" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
//                                 </div>
//                                 <div class="md:w-1/2 order-1 md:order-2">
//                                   <p class="text-gray-300 mb-4">
//                                     So I took matters into my own hands. I taught myself. I spent nights buried in forums, breaking systems in virtual labs, and learning from real-world hacking challenges. I failed. A lot. But with every failure, I grew stronger.
//                                   </p>
//                                   <p class="text-2xl font-semibold text-[#00ffff] mb-6">
//                                     "If I struggled this much to find the right learning path, how many others are facing the same problem?"
//                                   </p>
//                                   <p class="text-gray-300">That’s when the idea for <span class="font-bold text-[#00ffff]">IllusionSecurity.ai</span> was born.</p>
//                                 </div>
//                               </div>

//                               <!-- IllusionSecurity.ai Vision -->
//                               <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
//                                 <div class="md:w-1/2">
//                                   <ul class=" list-inside text-left text-gray-400 mb-4">
//                                     <li>🚀 Not just another training institute, but a revolution.</li>
//                                     <li>🔥 Not just certifications, but real-world skills.</li>
//                                     <li>💡 Not just courses, but a lifelong learning journey.</li>
//                                   </ul>
//                                   <p class="text-gray-300">
//                                     At <span class="font-bold text-[#00ffff]">IllusionSecurity.ai</span>, we don’t just teach cybersecurity and AI—we make it exciting, immersive, and career-defining.
//                                   </p>
//                                 </div>
//                                 <div class="md:w-1/2">
//                                   <img src="/5sec.jpg" alt="IllusionSecurity.ai vision" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
//                                 </div>
//                               </div>

//                               <!-- Key Features -->
//                               <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
//                                 <div class="md:w-1/2 order-2 md:order-1">
//                                   <img src="/6sec.jpg" alt="Hands-on labs" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
//                                 </div>
//                                 <div class="md:w-1/2 order-1 md:order-2">
//                                   <ul class=" list-inside text-left text-gray-400 mb-4">
//                                     <li>✅ <span class="font-bold">Hands-on labs & hacking challenges</span>—because theory alone won’t make you a hacker.</li>
//                                     <li>✅ <span class="font-bold">Mentorship that lasts beyond the course</span>—because your growth matters.</li>
//                                     <li>✅ <span class="font-bold">Cutting-edge skills that employers need</span>—because your future shouldn’t rely on outdated content.</li>
//                                     <li>✅ <span class="font-bold">A community that learns, competes, and evolves together</span>—because cybersecurity isn’t a solo journey.</li>
//                                   </ul>
//                                 </div>
//                               </div>

//                               <!-- Closing Statement -->
//                               <div class="text-center">
//                                 <p class="text-gray-300 mb-6">
//                                   I started this because I never want another student to feel lost like I did. This is more than just a training platform. This is the movement I wish existed when I was starting out.
//                                 </p>
//                                 <p class="text-3xl font-bold text-[#00ffff] mb-6">Welcome to IllusionSecurity.ai—where curiosity meets mastery, and learners become legends.</p>
//                                 <p class="text-2xl font-semibold text-gray-300 mb-6">Are you ready to see beyond the illusion?</p>
//                                 <button class="bg-[#00ffff] text-white-90 px-8 py-3 rounded-full font-bold hover:bg-cyan-600 transition duration-300">
//                                   🔥 Join the Revolution 🔥
//                                 </button>
//                               </div>
//                            </section>`,
//                         })
//                       }
//                     >
//                       🔍 Expand
//                     </button>
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <button
//                           data-tg-tour="You can register yourself for the upcomming workshops."
//                           data-tg-order={99}
//                           className="register-button"
//                         >
//                           Register
//                         </button>
//                       </DialogTrigger>
//                       <DialogContent className="bg-transparent border-none sm:max-w-[425px]">
//                         <WorkshopForm />
//                       </DialogContent>
//                     </Dialog>
//                   </div>
//                 </foreignObject>
//               </g>
//               <g id="triMain">
//                 <g>
//                   <polygon
//                     points="162.3 429.3 144.8 450.1 4.4 290 479.1 290 349.7 403.6 278.8 497.7 264.4 478.5 241.3 498.7 162.3 429.3"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M879.4,459,753.8,569.2l-69.4,92.1-14.2-18.8L646.9,663l-79.2-69.5L550.3,614l-136-155h465m10.6-4H405.5l5.8,6.6,136,155,3.1,3.5,3-3.6,14.7-17.4L644.2,666l2.6,2.3,2.6-2.3,20.1-17.6,11.6,15.4,3.2,4.2,3.2-4.2L756.7,572,882,462l8-7Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="436.1 292 327.1 387.6 266.9 467.6 254.6 451.2 234.3 469 165.6 408.7 150.6 426.5 32.6 292 8.8 292 144.8 447 162.1 426.5 241.3 496 264.7 475.5 278.8 494.3 348.2 402.2 473.8 292 436.1 292"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triMid">
//                 <g>
//                   <polygon
//                     points="160.2 456.7 237.6 456.7 199.2 503.3 160.2 456.7"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M640,625.2,604.7,668,569,625.2h71m6.4-3H562.6l4.1,4.9,35.7,42.8,2.3,2.8,2.3-2.8,35.3-42.8,4.1-4.9Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="217.7 458.2 190.7 490.9 199.1 501 234.5 458.2 217.7 458.2"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triLeftSmall">
//                 <g>
//                   <polygon
//                     points="29.4 444.1 66.2 444.1 47.9 466.2 29.4 444.1"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M467.5,613.1l-14,17-14.2-17h28.2m8.5-4H430.7l5.5,6.6,14.2,17,3.1,3.7,3.1-3.7,14-17,5.4-6.5Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="55.3 446.1 44.5 459.1 47.9 463.1 61.9 446.1 55.3 446.1"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triRightSmall">
//                 <g>
//                   <polygon
//                     points="335.3 487.7 369.9 487.7 352.7 508.5 335.3 487.7"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M772.3,656.2l-14,17-14.2-17h28.2m6.4-3h-41l4.1,4.9,14.2,17,2.3,2.8,2.3-2.8,14-17,4.1-4.9Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="360.1 489.2 349.4 502.2 352.7 506.2 366.7 489.2 360.1 489.2"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triLeft">
//                 <g>
//                   <polygon
//                     points="16.7 359 173.3 359 95.4 438.2 16.7 359"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M575.2,527.5,501,603.1l-75.1-75.6H575.2m7.2-3H418.7l5.1,5.1,75.1,75.6,2.1,2.2,2.1-2.2,74.3-75.6,5-5.1Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="147.8 360.5 84.2 425.2 95 436.1 169.3 360.5 147.8 360.5"
//                   fill="#297d51"
//                 />
//               </g>
//               <g id="triRight">
//                 <g>
//                   <polygon
//                     points="197.2 314.2 479.6 314.2 395.4 407.5 392.1 403.5 339.3 457.2 197.2 314.2"
//                     fill="#39a86d"
//                   />
//                   <path
//                     d="M881.8,482.7,801,572.2l-3.3-4-52.9,53.8L606.3,482.7H881.8m6.7-3H599.1l5.1,5.1L742.7,624.2l2.1,2.2,2.1-2.2,50.6-51.5,1.2,1.4,2.2,2.7,2.3-2.6L884,484.7l4.5-5Z"
//                     transform="translate(-405.5 -167)"
//                     fill="#3fba79"
//                   />
//                 </g>
//                 <polygon
//                   points="224.8 315.7 200.8 315.7 339.3 455.1 351.2 442.9 224.8 315.7"
//                   fill="#297d51"
//                 />
//               </g>
//               <linearGradient
//                 id="g300"
//                 gradientUnits="userSpaceOnUse"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="100%"
//               >
//                 <stop stopColor="#67B26F" offset="0" />
//                 <stop stopColor="#4CA2CD" offset="1" />
//               </linearGradient>
//             </svg>
//           </div>

//           {/* Rotating Circle - right */}
//           <div className="circle-container top-0 right-[-440px] h-full w-[50vw] flex justify-center items-center overflow-hidden">
//             <svg
//               fill="#000000"
//               height="700px"
//               width="700px"
//               version="1.1"
//               id="Layer_1"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="-25.6 -25.6 563.20 563.20"
//               // stroke="#1f2937"
//               stroke="rgba(0, 234, 255, 0.8);"
//               strokeWidth="2.56"
//             >
//               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 // stroke="#CCCCCC"
//                 // stroke="#00eaff"
//                 stroke="#4ADE80"
//                 opacity={0.8}
//                 strokeWidth="10.336000000000002"
//               >
//                 {" "}
//                 <g>
//                   {" "}
//                   <g>
//                     {" "}
//                     <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
//                   </g>{" "}
//                 </g>{" "}
//                 <g>
//                   {" "}
//                   <g>
//                     {" "}
//                     <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
//                   </g>{" "}
//                 </g>{" "}
//               </g>
//               <g id="SVGRepo_iconCarrier">
//                 {" "}
//                 <g>
//                   {" "}
//                   <g>
//                     {" "}
//                     <path d="M256,151.972c-56.436,0-102.35,45.913-102.35,102.349s45.915,102.35,102.35,102.35s102.35-45.915,102.35-102.35 C358.35,197.886,312.436,151.972,256,151.972z"></path>{" "}
//                   </g>{" "}
//                 </g>{" "}
//                 <g>
//                   {" "}
//                   <g>
//                     {" "}
//                     <path d="M488.727,192.188h-15.099c-4.881-16.342-11.414-32.361-19.025-46.584l11.205-11.371 c8.707-8.802,8.677-23.069-0.069-31.834l-57.599-57.901c-4.225-4.236-9.962-6.961-15.943-6.961c-0.044,0-0.089,0-0.132,0 c-6.028,0-11.79,2.833-15.997,7.15l-10.359,10.976c-14.097-7.654-29.457-14.06-45.149-18.824V22.522 C320.561,10.084,310.478,0,298.039,0h-84.082c-12.438,0-22.522,10.084-22.522,22.522v14.309 c-15.755,4.772-31.145,11.036-45.236,18.681L135.51,44.529c-4.216-4.276-9.967-6.992-15.973-6.992c-0.021,0-0.042,0-0.065,0 c-5.983,0-11.722,2.665-15.949,6.904l-57.436,57.883c-8.719,8.743-8.772,22.876-0.12,31.685l11.383,11.588 c-7.585,14.201-14.108,30.195-18.989,46.591h-15.09c-12.438,0-22.522,10.084-22.522,22.522v82.581 c0,12.438,10.084,22.522,22.522,22.522h15.156c4.736,15.51,11.114,30.738,18.749,44.765L46.46,375.05 c-4.311,4.213-6.754,9.977-6.781,16.004s2.362,11.814,6.633,16.066l57.599,57.333c4.275,4.254,10.094,6.647,16.106,6.558 c6.031-0.059,11.786-2.533,15.977-6.869l10.38-10.739c13.985,7.543,29.313,13.883,45.062,18.63v17.444 c0,12.438,10.084,22.522,22.522,22.522h84.082c12.438,0,22.522-10.084,22.522-22.522v-17.459 c15.753-4.772,31.145-11,45.236-18.645l10.689,11.021c4.218,4.276,9.968,7.066,15.974,7.066c0.021,0,0.042,0,0.065,0 c5.983,0,11.722-2.739,15.949-6.977l57.436-57.958c4.284-4.294,6.653-10.135,6.572-16.201c-0.08-6.064-2.604-11.841-6.998-16.021 l-10.467-9.955c7.542-13.929,13.857-29.076,18.564-44.536h15.145c12.438,0,22.522-10.084,22.522-22.522V214.71 C511.249,202.272,501.165,192.188,488.727,192.188z M256,394.208c-77.135,0-139.887-62.752-139.887-139.887 c0-77.133,62.752-139.886,139.887-139.886s139.887,62.754,139.887,139.886C395.887,331.456,333.135,394.208,256,394.208z"></path>{" "}
//                   </g>{" "}
//                 </g>{" "}
//               </g>
//             </svg>
//             <div className="single-container">
//               {workshops2.map((workshop, index) => (
//                 <div
//                   key={index}
//                   className="icon-container"
//                   onMouseEnter={() =>
//                     setHoveredContent({
//                       title: workshop.title,
//                       description: workshop.description,
//                       Icon: workshop.Icon,
//                       fullContent: workshop.fullContent,
//                     })
//                   }
//                   onMouseLeave={() =>
//                     setHoveredContent({
//                       title:
//                         selectedContent?.title ||
//                         "Why Choose IllusionSecurity.ai?",
//                       description:
//                         selectedContent?.description ||
//                         "It all started with a movie...",
//                       Icon: selectedContent?.Icon || Brain,
//                       fullContent:
//                         selectedContent?.fullContent ||
//                         `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
//                   <p>That moment ignited something in me—a burning curiosity...</p>
//                   <ul>
//                     <li>Understanding security layers</li>
//                     <li>Breaking down complex systems</li>
//                   </ul>`,
//                     })
//                   }
//                   onClick={() =>
//                     setSelectedContent({
//                       title: workshop.title,
//                       description: workshop.description,
//                       Icon: workshop.Icon,
//                       fullContent: workshop.fullContent,
//                     })
//                   }
//                 >
//                   {/* <span className="icon">{workshop.icon}</span> */}
//                   <workshop.Icon className="w-10 h-10 text-green-400 " />
//                 </div>
//               ))}
//               {/* Center Gear Icon */}
//               <div className="center-icon ">
//                 <span>⚙️</span>
//               </div>
//             </div>
//           </div>

//           {/* Modal Window for Expanded Content */}
//           {modalContent && (
//             <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//               <div
//                 className=" custom-scrollbar modal-content relative top-10 h-[80%] w-[80%] overflow-y-auto neon-glow bg-gray-900 p-6 rounded-lg"
//                 // className="modal-content"
//               >
//                 <button
//                   onClick={() => setModalContent(null)}
//                   className="absolute top-2 right-3 text-gray-300 hover:text-white text-lg"
//                 >
//                   ✖
//                 </button>
//                 <h2 className="text-[2rem] md:text-[3rem] font-bold mb-4">
//                   {modalContent.title}
//                 </h2>
//                 <p className="text-gray-300 text-sm md:text-lg">
//                   {modalContent.description}
//                 </p>
//                 <div
//                   className=" text-gray-300 max-h-[60vh] text-sm md:text-lg"
//                   dangerouslySetInnerHTML={{ __html: modalContent.fullContent }}
//                 />
//               </div>
//             </div>
//           )}
//         </section>
//       )}
//     </>
//   );
// };

// export default dynamic(() => Promise.resolve(SemiGearPage), { ssr: false });
"use client";

import React, { useEffect, useRef, useState } from "react";
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
// import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import WorkshopForm from "./WorkshopForm";
import "@sjmc11/tourguidejs/src/scss/tour.scss";
// import { TourGuideClient } from "@sjmc11/tourguidejs";
import dynamic from "next/dynamic";
// import Carousel from "./animata/ComputerContainer";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

type WorkshopContent = {
  title: string;
  description: string;
  fullContent: string;
  Icon: React.ElementType;
};

declare global {
  interface Window {
    __tourGuideInitialized?: boolean;
  }
}

const workshops1: WorkshopContent[] = [
  {
    Icon: Brain,
    description: "It all started with a movie...",
    title: "Why Choose IllusionSecurity.ai?",
    fullContent: `<section class="py-12 px-4 md:px-24 bg-transparant text-white">
  <!-- Story Section -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <!-- Narrative Column -->
    <div class="space-y-6">
    <h2 class="text-3xl font-semibold text-cyan-400">It all started with a movie...</h2>
      <p class="text-gray-300 leading-relaxed">
        As a school student, I sat in a dark room, eyes glued to the screen, watching a hacker effortlessly break into a system. It felt like magic—lines of code flashing, firewalls crumbling, secrets unveiled.
      </p>
      <blockquote class="border-l-4 border-[#00ffff] pl-4 italic text-gray-200">
        "How does hacking <em>really</em> work?"
      </blockquote>
    </div>

    <!-- Visual Column -->
    <div class="hidden md:block">
      <img src="/Brain_Sec_Img.jpg"
           alt="Cybersecurity visualization"
           class="rounded-lg shadow-2xl neon-glow"
           loading="lazy">
    </div>
  </div>

  <!-- Problem Section -->
  <div class="bg-gray-800 rounded-lg p-8 my-12">
    <h3 class="text-2xl font-bold text-red-500 mb-6">The Problem:</h3>
    <ul class="space-y-4 text-gray-300">
      <li class="flex items-center">
        <svg class="w-6 h-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
        No proper direction or guidance
      </li>
      <li class="flex items-center">
        <svg class="w-6 h-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
        Outdated, uninspiring content
      </li>
      <li class="flex items-center">
        <svg class="w-6 h-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
        No long-term student support
      </li>
    </ul>
  </div>

  <!-- Solution Section -->
  <div class="my-12">
    <h3 class="text-3xl font-bold text-[#00ffff] text-center mb-8">Our Revolution</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="feature-card p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
        <svg class="w-12 h-12 text-[#00ffff] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        <h4 class="font-semibold mb-2">Real-World Skills</h4>
        <p>Cutting-edge techniques employers need today</p>
      </div>
      <div class="feature-card p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
        <svg class="w-12 h-12 text-[#00ffff] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <h4 class="font-semibold mb-2">Lifelong Mentorship</h4>
        <p>Ongoing support beyond course completion</p>
      </div>
      <div class="feature-card p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
        <svg class="w-12 h-12 text-[#00ffff] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
        </svg>
        <h4 class="font-semibold mb-2">Active Community</h4>
        <p>Collaborate with aspiring cybersecurity professionals</p>
      </div>
    </div>
  </div>

  <!-- Call to Action -->
<div class="text-center mt-12">
    <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
      Are you ready to see beyond the illusion?
    </h2>
  </div>
</section>
                  `,
  },
  {
    Icon: Code,
    description:
      "🌎 The Hidden War: How Cybersecurity & AI Became the Ultimate Weapons",
    title: "Reality of Cyberworld & Artificial Intelligence",
    fullContent: `
      <section class="container bg-transparent text-white main-font-family mx-auto px-4 py-12">
        <!-- The Past Section -->
        <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold text-[#00ffff] mb-4">⏳ The Past: When the World Was Unprepared</h2>
            <p class="text-gray-300 mb-4">
              There was a time when security meant locks and keys, not firewalls and encryption. The internet was young, a wild frontier where curiosity ruled over caution. Hackers were explorers, breaking into systems for fun, pushing the limits of technology.
            </p>
            <p class="text-gray-300 mb-4">But the world woke up.</p>
            <ul class="text-left list-inside text-gray-400">
              <li>🔺 <strong>Morris Worm (1988)</strong> – One of the first major cyberattacks, crashing thousands of computers overnight.</li>
              <li>🔺 <strong>Melissa Virus (1999)</strong> – A simple email virus that spread worldwide, showing how vulnerable systems were.</li>
              <li>🔺 <strong>Stuxnet (2010)</strong> – A cyberweapon that destroyed Iran’s nuclear centrifuges, proving that cyberwarfare was the future.</li>
            </ul>
          </div>
          <div class="md:w-1/2">
            <img src="/1sec.jpg" alt="The Past" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
          </div>
        </div>

        <!-- The Past Section part 2 -->
        <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
          <p class="text-gray-300 md:w-1/2">
            Back then, cybersecurity was reactive. We built firewalls, set passwords, and hoped for best.
          </p>
          <div class="hidden md:block w-px h-16 bg-gray-600 mx-4"></div>
          <div class="block md:hidden w-16 h-px bg-gray-600 my-4"></div>
          <p class="text-gray-300 md:w-1/2">
            AI was just a dream—mostly limited to chess-playing programs and simple automation tools.
          </p>
        </div>

        <!-- The Present Section -->
        <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div class="md:w-1/2 order-2 md:order-1">
            <img src="/2sec.jpg" alt="The Present" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
          </div>
          <div class="md:w-1/2 order-1 md:order-2">
            <h2 class="text-3xl font-bold text-[#00ffff] mb-4">📍 The Present: Where We Are Now</h2>
            <p class="text-gray-300 mb-4">
              We are living in an era of invisible wars. Nations attack each other without a single bullet fired, bringing down power grids, stealing classified data, and manipulating elections—all through cyber warfare.
            </p>
            <p class="text-gray-300 mb-4">
              Hackers no longer work alone. They use AI-powered attack bots that can break into systems in seconds. Meanwhile, companies and governments use AI to fight back.
            </p>
          </div>
        </div>

        <!-- The Present Section part 2 -->
        <div class="flex flex-col md:flex-row gap-8 mb-12">
          <!-- First Column -->
          <div class="md:w-1/3">
            <ul class="text-left list-inside text-gray-400">
              <li>🚀 <strong>The 2023 Twitter Hack</strong> – AI-powered phishing attacks tricked high-profile users into revealing sensitive data.</li>
              <li>🚀 <strong>The 2021 Colonial Pipeline Attack</strong> – A ransomware attack shut down a major fuel pipeline in the U.S., proving how cyberattacks can cripple economies.</li>
              <li>🚀 <strong>The 2023 Microsoft Email Breach</strong> – Chinese hackers infiltrated Microsoft’s cloud services, exposing sensitive government data.</li>
            </ul>
          </div>

          <!-- Divider -->
          <div class="hidden md:block w-px h-auto bg-gray-600"></div>
          <div class="block md:hidden w-full h-px bg-gray-600 my-4"></div>

          <!-- Second Column -->
          <div class="md:w-1/3">
            <p class="text-gray-300">
              Meanwhile, AI has taken over.
            </p>
            <ul class="text-left list-inside text-gray-400 mt-4">
              <li>✅ <strong>AI-driven cybersecurity</strong> – AI detects threats faster than humans ever could.</li>
              <li>✅ <strong>Deepfake technology</strong> – AI can generate fake videos so realistic they can be used to spread misinformation or commit fraud.</li>
              <li>✅ <strong>AI-powered chatbots</strong> – Like ChatGPT, Gemini, and Copilot, these can write emails, generate code, and even create human-like conversations.</li>
            </ul>
          </div>

          <!-- Divider -->
          <div class="hidden md:block w-px h-auto bg-gray-600"></div>
          <div class="block md:hidden w-full h-px bg-gray-600 my-4"></div>

          <!-- Third Column -->
          <div class="md:w-1/3">
            <p class="text-gray-300">
              But AI also comes with dark sides:
            </p>
            <ul class="text-left list-inside text-gray-400 mt-4">
              <li>❌ <strong>AI-powered phishing</strong> – Scammers use AI to create perfect emails and voice messages, mimicking real people.</li>
              <li>❌ <strong>Deepfake cybercrimes</strong> – AI-generated deepfake videos are used for scams, misinformation, and even political warfare.</li>
              <li>❌ <strong>Job displacement</strong> – AI is replacing workers in cybersecurity, customer service, and even creative industries.</li>
            </ul>
          </div>
        </div>

        <div class="text-center mb-12">
          <p class="text-gray-300">
            The war between cybersecurity and AI is no longer in the future. It is happening right now.
          </p>
        </div>

        <div class="flex justify-center my-12">
          <img src="https://placehold.co/800x400" alt="Divider Image" class="w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg">
        </div>

        <!-- The Future Section -->
        <div class="mb-12">
          <!-- Title -->
          <h2 class="text-3xl font-bold text-[#00ffff] mb-6 text-center">🔮 The Future: The Unstoppable Revolution</h2>

          <!-- Two Parts -->
          <div class="flex flex-col md:flex-row gap-8 mb-8">
            <!-- Part 1: First List -->
            <div class="md:w-1/2">
              <p class="text-gray-300 mb-4">
                The cybersecurity of tomorrow won’t be about just protecting data—it will be about defending reality itself.
              </p>
              <ul class="text-left list-inside text-gray-400">
                <li>🔮 <strong>Quantum Hacking</strong> – The passwords we use today? Gone in milliseconds once quantum computing goes mainstream.</li>
                <li>🔮 <strong>AI vs AI Cyber Wars</strong> – Imagine autonomous AI hackers fighting against AI-powered security systems in real time.</li>
                <li>🔮 <strong>The End of Privacy</strong> – Everything you do, say, or think online—recorded, analyzed, and used against you.</li>
                <li>🔮 <strong>Cybersecurity as a Survival Skill</strong> – The ability to defend yourself online will be as essential as knowing how to swim.</li>
              </ul>
            </div>

            <div class="hidden md:block w-px h-auto bg-gray-600"></div>
            <div class="block md:hidden w-full h-px bg-gray-600 my-4"></div>

            <!-- Part 2: Second List -->
            <div class="md:w-1/2">
              <p class="text-gray-300 mb-4">
                New threats are emerging faster than ever:
              </p>
              <ul class="text-left list-inside text-gray-400">
                <li>⚠️ <strong>AI-powered ransomware</strong> – Future malware could adapt and learn in real time, making it nearly impossible to stop.</li>
                <li>⚠️ <strong>Autonomous cyberweapons</strong> – AI-powered cyberattacks could be launched without human intervention.</li>
                <li>⚠️ <strong>Synthetic identities</strong> – AI can create completely fake people with realistic voices and identities, making fraud undetectable.</li>
              </ul>
            </div>
          </div>

          <!-- Remaining Content -->
          <div class="text-gray-300">
            <p class="mb-4">
              The line between human intelligence and artificial intelligence is disappearing.
            </p>
            <p>
              Are you ready for what comes next?
            </p>
          </div>
        </div>

        <!-- The Hard Truth Section -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-[#00ffff] mb-4">💡 The Hard Truth: You Have Two Choices</h2>
          <p class="text-gray-300 mb-4">
            The world is changing faster than you think. You can either:
          </p>

          <!-- Styled Buttons for Choices -->
          <div class="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <!-- Incorrect Option -->
            <button id="ignore-btn" class="bg-gray-800 text-gray-300 px-10 py-3 rounded-lg hover:bg-red-700 transition duration-300 w-full md:w-84">
              ❌ Ignore it—and become just another victim in the cyber war.
            </button>

            <!-- Correct Option -->
            <button id="master-btn" class="bg-green-800 text-gray-300 px-10 py-3 rounded-lg hover:bg-green-700 transition duration-300 w-full md:w-84">
              ✅  Master it—and become a warrior, a protector, a legend in the cyber-AI battlefield.
            </button>
          </div>

          <p class="text-gray-300 mb-6">
            That’s why <span class="font-bold text-[#00ffff]">IllusionSecurity.ai</span> exists.
          </p>
          <p class="text-gray-300 mb-6">
            This is not just a training platform. This is a movement. A chance to see beyond the illusion, to break into the most powerful domain of the future—Cybersecurity & AI.
          </p>
        </div>

        <!-- Why Choose IllusionSecurity.ai Section -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-[#00ffff] mb-4">👊 Why Choose IllusionSecurity.ai?</h2>
          <p class="text-gray-300 mb-6">
            Unlike other training institutes that treat students like numbers, we believe in creating real-world experts.
          </p>
          <ul class="text-left list-inside text-gray-400 mb-6">
            <li>💡 We don’t teach cybersecurity. We make you live it.</li>
            <li>💡 We don’t throw certifications at you. We build your skills to face the real cyber world.</li>
            <li>💡 We don’t stop at knowledge. We create warriors who can fight in this digital battlefield.</li>
          </ul>
          <p class="text-gray-300 mb-6">
            We believe in curiosity, hands-on learning, and long-term mentorship. We believe in you.
          </p>
          <p class="text-gray-300 mb-6">
            The world is being rewritten in code. Are you ready to take control?
          </p>
          <button class="bg-cyan-500 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-600 transition duration-300">
            🔥 Join the Revolution 🔥
          </button>
        </div>
      </section>`,
  },
  {
    Icon: Lock,
    description: "The future is here—will you be ready?",
    title: "The AI & Cybersecurity Workshop That Will Open Your Eyes",
    fullContent: `<section class="container bg-transparant text-white main-font-family mx-auto px-4 py-12">
    <!-- Title Section -->
    <div class="text-center mb-12">
      <p class="text-[2rem] text-cyan-400">Imagine This...</p>
    </div>

    <!-- Introduction Section -->
    <div class="flex flex-col gap-8 mb-12">
      <!-- First Part: First List with Image on Left -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <img src="https://placehold.co/600x400" alt="AI Hacking" class="w-full rounded-lg shadow-lg">
        </div>
        <div class="md:w-1/2">
          <p class="text-gray-300 mb-6">
            It’s the year 2030. You wake up, check your phone, and see a shocking headline:
          </p>
          <ul class="text-left list-inside text-gray-400 mb-6">
            <li>💥 <strong>"AI-Powered Hacker Drains Millions from Global Bank in Seconds!"</strong></li>
            <li>💥 <strong>"Deepfake Scam Steals Identities of 100,000 People!"</strong></li>
            <li>💥 <strong>"AI Now Replacing Cybersecurity Professionals – Are Humans No Longer Needed?"</strong></li>
          </ul>
          <p class="text-gray-300 mb-6">
            Sounds like science fiction, right? But this isn’t the future. It’s already happening.
          </p>
        </div>
      </div>

      <!-- Second Part: Second List with Image on Right -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2 order-2 md:order-1">
          <ul class="text-left list-inside text-gray-400 mb-6">
            <li>🔹 AI is writing code, making art, composing music… and hacking systems.</li>
            <li>🔹 Cybercriminals are smarter than ever, breaking into governments and billion-dollar companies.</li>
            <li>🔹 Jobs are disappearing, but new opportunities are opening up—if you know where to look.</li>
          </ul>
          <p class="text-gray-300 mb-6">
            The real question is: Are you ready for this future? Or will you be left behind?
          </p>
        </div>
        <div class="md:w-1/2 order-1 md:order-2">
          <img src="https://placehold.co/600x400" alt="AI Opportunities" class="w-full rounded-lg shadow-lg">
        </div>
      </div>
    </div>

    <!-- The Harsh Truth Section -->
    <div class="flex flex-col gap-8 mb-12">
      <!-- First Part: Centered Content (No Image) -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-[#00ffff] mb-4">💡 The Harsh Truth: No One is Teaching You This</h2>
        <p class="text-gray-300 mb-6">
          Most AI & Cybersecurity courses are stuck in the past.
        </p>
        <ul class="text-left list-inside text-gray-400 mb-6">
          <li>📌 They teach outdated concepts.</li>
          <li>📌 They give you certificates that don’t actually get you hired.</li>
          <li>📌 They make you memorize theories, but never show you the real-world skills.</li>
        </ul>
      </div>

      <!-- Second Part: Content with Image -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <img src="https://placehold.co/600x400" alt="Harsh Truth" class="w-full rounded-lg shadow-lg">
        </div>
        <div class="md:w-1/2">
          <p class="text-left text-gray-300 mb-6">
            👉 That’s why I created this workshop. Because you deserve more than just theory.
          </p>
          <p class="text-left text-gray-300 mb-6">
            👉 You deserve to see how AI is changing cybersecurity and how cybersecurity is controlling AI.
          </p>
          <p class="text-left text-gray-300 mb-6">
            👉 You deserve a real, hands-on experience that will blow your mind.
          </p>
        </div>
      </div>
    </div>

    <!-- The Workshop Experience Section -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-[#00ffff] mb-6 text-center">🔥 The Workshop Experience: What You’ll Discover</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Live Hacking Demo -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-[#00ffff] mb-4">🚨 LIVE Hacking Demo</h3>
          <p class="text-gray-300">Watch me hack into a system (legally!) and see how cybercriminals think.</p>
        </div>

        <!-- AI Challenge -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-[#00ffff] mb-4">🚨 AI Challenge</h3>
          <p class="text-gray-300">Can you outsmart an AI chatbot? Let’s test your skills.</p>
        </div>

        <!-- Cyber Attack Case Studies -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-[#00ffff] mb-4">🚨 Cyber Attack Case Studies</h3>
          <p class="text-gray-300">The biggest hacks in history and what we learned from them.</p>
        </div>

        <!-- Career Roadmap -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-[#00ffff] mb-4">🚨 Career Roadmap</h3>
          <p class="text-gray-300">How to break into AI & Cybersecurity even if you have ZERO experience.</p>
        </div>
      </div>
    </div>

    <!-- Why This Workshop is a Game-Changer Section -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-[#00ffff] mb-6 text-center">🚀 Why This Workshop is a Game-Changer</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-[#00ffff] mb-4">✅ Real-World Experience</h3>
          <p class="text-gray-300">You’ll experience AI & Cybersecurity in action, not just hear about it.</p>
        </div>
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-[#00ffff] mb-4">✅ Step-by-Step Guide</h3>
          <p class="text-gray-300">You’ll get a clear roadmap to launching your career.</p>
        </div>
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-[#00ffff] mb-4">✅ Industry Insights</h3>
          <p class="text-gray-300">You’ll see the truth about this industry—what no one else is telling you.</p>
        </div>
      </div>
    </div>

    <!-- The Offer Section -->
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-[#00ffff] mb-6">💰 The Offer: Take the First Step Now</h2>
      <p class="text-gray-300 mb-6">
        This is not just another "tech workshop." This is your entry ticket into a field that’s changing the world.
      </p>
      <p class="text-gray-300 mb-6">
        By the end of the session, you’ll get an exclusive invitation to my full training—designed to take you from beginner to expert in months, not years.
      </p>
      <p class="text-gray-300 mb-6">
        ⚠️ But first, you need to experience it.
      </p>
      <p class="text-gray-300 mb-6">
        Seats are LIMITED. The future won’t wait for you.
      </p>
      <button class="bg-cyan-500 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-600 transition duration-300">
        🔻 REGISTER NOW & Take Control of Your Future! 🔻
      </button>
    </div>
  </section>`,
  },
  {
    Icon: Server,
    description:
      "Configure and maintain enterprise-grade security infrastructure",
    title: "Network Defense",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Shield,
    description:
      "Hands-on penetration testing in our secure virtual environment",
    title: "Offensive Security Lab",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Terminal,
    description: "Master binary exploitation and reverse engineering",
    title: "Advanced Exploitation",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Users,
    title: "1-1 Discussion",
    description: "Personalized mentoring sessions with industry experts",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: TrendingUp,
    title: "Market Growth",
    description: "Insights into rapidly expanding cybersecurity and AI sectors",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
];

const workshops2: WorkshopContent[] = [
  {
    Icon: Brain,
    title: "Latest Technology",
    description: "Hands-on experience with cutting-edge AI and security tools",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Rocket,
    title: "Career Path",
    description: "Guidance for building a successful career in tech",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Wrench,
    title: "Industry Tools",
    description: "Training on professional-grade security and AI platforms",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Lightbulb,
    title: "Future Scope",
    description: "Exploration of emerging technologies and opportunities",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Sparkles,
    title: "Increasing Curiosity",
    description: "Engaging projects that spark innovation and learning",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Bug,
    description: "Engaging projects that spark innovation and learning",
    title: "Eco Workshop",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Globe,
    description: "Engaging projects that spark innovation and learning",
    title: "Analytics Workshop",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
  {
    Icon: Cpu,
    description: "Engaging projects that spark innovation and learning",
    title: "Speaking Workshop",
    fullContent: `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
  },
];

const SemiGearPage = () => {
  const [hoveredContent, setHoveredContent] = useState<WorkshopContent>({
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
            <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="custom-scrollbar modal-content relative top-10 h-[80%] w-[90%] md:w-[80%] overflow-y-auto neon-glow bg-gray-900 p-4 md:p-6 rounded-lg">
                <button
                  onClick={() => setModalContent(null)}
                  className="absolute top-2 right-3 text-gray-300 hover:text-white text-lg"
                >
                  ✖
                </button>
                <h2 className="text-[1.5rem] md:text-[3rem] font-bold mb-4">
                  {modalContent.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-lg">
                  {modalContent.description}
                </p>
                <div
                  className="text-gray-300 max-h-[60vh] text-sm md:text-lg"
                  dangerouslySetInnerHTML={{ __html: modalContent.fullContent }}
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
          <div
            data-tg-tour="<p>These are the feature's click on it to view.</p>"
            data-tg-order={0}
            className="circle-container left-[-440px] h-[10rem] w-[50vw] flex justify-center items-center overflow-hidden"
          >
            <svg
              fill="#000000"
              height="860px" /* Slightly reduce size */
              width="860x"
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
                  onMouseEnter={() =>
                    setHoveredContent({
                      title: workshop.title,
                      description: workshop.description,
                      Icon: workshop.Icon,
                      fullContent: workshop.fullContent,
                    })
                  }
                  onMouseLeave={() =>
                    setHoveredContent({
                      title:
                        selectedContent?.title ||
                        "Why Choose IllusionSecurity.ai?",
                      description:
                        selectedContent?.description ||
                        "It all started with a movie...",
                      Icon: selectedContent?.Icon || Brain,
                      fullContent:
                        selectedContent?.fullContent ||
                        `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
                    })
                  }
                  onClick={() =>
                    setSelectedContent({
                      title: workshop.title,
                      description: workshop.description,
                      Icon: workshop.Icon,
                      fullContent: workshop.fullContent,
                    })
                  }
                >
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
                          fullContent:
                            selectedContent?.fullContent ||
                            `<section class="bg-transparant text-white main-font-family container mx-auto px-4 py-12">
                              <!-- Introduction -->
                              <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
                                <div class="md:w-1/2">
                                  <p class="text-gray-300 mb-6">
                                    As a school student, I sat in a dark room, eyes glued to the screen, watching a hacker effortlessly break into a system. It felt like magic—lines of code flashing, firewalls crumbling, secrets unveiled. That moment ignited something in me. A burning curiosity. A question I couldn’t shake:
                                  </p>
                                  <p class="text-2xl font-semibold text-[#00ffff]">"How does hacking really work?"</p>
                                </div>
                                <div class="md:w-1/2">
                                  <img src="/1sec.jpg" alt="Hacker in action" class="w-[300px] h-[200px] lg:w-[600px] lg:h-[400px] sm:w-[600px] sm:h-[400px] rounded-lg shadow-lg object-coverr">
                                </div>
                              </div>

                              <!-- Challenges Faced -->
                              <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
                                <div class="md:w-1/2 order-2 md:order-1">
                                  <img src="/2sec.jpg" alt="Student searching for knowledge" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
                                </div>
                                <div class="md:w-1/2 order-1 md:order-2">
                                  <p class="text-gray-300 mb-4">
                                    I wanted to learn. I searched everywhere—books, the internet, videos. But no matter where I looked, I hit the same wall:
                                  </p>
                                  <ul class="list-inside text-left text-gray-400 mb-4">
                                    <li>❌ No proper direction</li>
                                    <li>❌ No one to guide me</li>
                                    <li>❌ Outdated, uninspiring content</li>
                                  </ul>
                                  <p class="text-gray-300">I was lost.</p>
                                </div>
                              </div>

                              <!-- Training Institutes -->
                              <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
                                <div class="md:w-1/2">
                                  <p class="text-gray-300 mb-4">
                                    Like many others, I turned to training institutes that promised to teach hacking and cybersecurity. They handed out certifications, structured courses, and flashy marketing. But the deeper I went, the more I realized:
                                  </p>
                                  <ul class=" list-inside text-left text-gray-400 mb-4">
                                    <li>🛑 They focused on selling courses, not sparking curiosity.</li>
                                    <li>🛑 Their content was outdated, missing real-world relevance.</li>
                                    <li>🛑 Once the training ended, they moved on—no long-term care for students.</li>
                                  </ul>
                                  <p class="text-gray-300">I knew there had to be a better way.</p>
                                </div>
                                <div class="md:w-1/2">
                                  <img src="/3sec.jpg" alt="Training institute" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
                                </div>
                              </div>

                              <!-- Self-Learning Journey -->
                              <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
                                <div class="md:w-1/2 order-2 md:order-1">
                                  <img src="/4sec.jpg" alt="Student learning" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
                                </div>
                                <div class="md:w-1/2 order-1 md:order-2">
                                  <p class="text-gray-300 mb-4">
                                    So I took matters into my own hands. I taught myself. I spent nights buried in forums, breaking systems in virtual labs, and learning from real-world hacking challenges. I failed. A lot. But with every failure, I grew stronger.
                                  </p>
                                  <p class="text-2xl font-semibold text-[#00ffff] mb-6">
                                    "If I struggled this much to find the right learning path, how many others are facing the same problem?"
                                  </p>
                                  <p class="text-gray-300">That’s when the idea for <span class="font-bold text-[#00ffff]">IllusionSecurity.ai</span> was born.</p>
                                </div>
                              </div>

                              <!-- IllusionSecurity.ai Vision -->
                              <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
                                <div class="md:w-1/2">
                                  <ul class=" list-inside text-left text-gray-400 mb-4">
                                    <li>🚀 Not just another training institute, but a revolution.</li>
                                    <li>🔥 Not just certifications, but real-world skills.</li>
                                    <li>💡 Not just courses, but a lifelong learning journey.</li>
                                  </ul>
                                  <p class="text-gray-300">
                                    At <span class="font-bold text-[#00ffff]">IllusionSecurity.ai</span>, we don’t just teach cybersecurity and AI—we make it exciting, immersive, and career-defining.
                                  </p>
                                </div>
                                <div class="md:w-1/2">
                                  <img src="/5sec.jpg" alt="IllusionSecurity.ai vision" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
                                </div>
                              </div>

                              <!-- Key Features -->
                              <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
                                <div class="md:w-1/2 order-2 md:order-1">
                                  <img src="/6sec.jpg" alt="Hands-on labs" class="w-[600px] h-[400px] rounded-lg shadow-lg object-cover">
                                </div>
                                <div class="md:w-1/2 order-1 md:order-2">
                                  <ul class=" list-inside text-left text-gray-400 mb-4">
                                    <li>✅ <span class="font-bold">Hands-on labs & hacking challenges</span>—because theory alone won’t make you a hacker.</li>
                                    <li>✅ <span class="font-bold">Mentorship that lasts beyond the course</span>—because your growth matters.</li>
                                    <li>✅ <span class="font-bold">Cutting-edge skills that employers need</span>—because your future shouldn’t rely on outdated content.</li>
                                    <li>✅ <span class="font-bold">A community that learns, competes, and evolves together</span>—because cybersecurity isn’t a solo journey.</li>
                                  </ul>
                                </div>
                              </div>

                              <!-- Closing Statement -->
                              <div class="text-center">
                                <p class="text-gray-300 mb-6">
                                  I started this because I never want another student to feel lost like I did. This is more than just a training platform. This is the movement I wish existed when I was starting out.
                                </p>
                                <p class="text-3xl font-bold text-[#00ffff] mb-6">Welcome to IllusionSecurity.ai—where curiosity meets mastery, and learners become legends.</p>
                                <p class="text-2xl font-semibold text-gray-300 mb-6">Are you ready to see beyond the illusion?</p>
                                <button class="bg-[#00ffff] text-white-90 px-8 py-3 rounded-full font-bold hover:bg-cyan-600 transition duration-300">
                                  🔥 Join the Revolution 🔥
                                </button>
                              </div>
                           </section>`,
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
                  onMouseEnter={() =>
                    setHoveredContent({
                      title: workshop.title,
                      description: workshop.description,
                      Icon: workshop.Icon,
                      fullContent: workshop.fullContent,
                    })
                  }
                  onMouseLeave={() =>
                    setHoveredContent({
                      title:
                        selectedContent?.title ||
                        "Why Choose IllusionSecurity.ai?",
                      description:
                        selectedContent?.description ||
                        "It all started with a movie...",
                      Icon: selectedContent?.Icon || Brain,
                      fullContent:
                        selectedContent?.fullContent ||
                        `<p>As a school student, I sat in a dark room, eyes glued to the screen...</p>
                  <p>That moment ignited something in me—a burning curiosity...</p>
                  <ul>
                    <li>Understanding security layers</li>
                    <li>Breaking down complex systems</li>
                  </ul>`,
                    })
                  }
                  onClick={() =>
                    setSelectedContent({
                      title: workshop.title,
                      description: workshop.description,
                      Icon: workshop.Icon,
                      fullContent: workshop.fullContent,
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
            <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div
                className=" custom-scrollbar modal-content relative top-10 h-[80%] w-[80%] overflow-y-auto neon-glow bg-gray-900 p-6 rounded-lg"
                // className="modal-content"
              >
                <button
                  onClick={() => setModalContent(null)}
                  className="absolute top-2 right-3 text-gray-300 hover:text-white text-lg"
                >
                  ✖
                </button>
                <h2 className="text-[2rem] md:text-[3rem] font-bold mb-4">
                  {modalContent.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-lg">
                  {modalContent.description}
                </p>
                <div
                  className=" text-gray-300 max-h-[60vh] text-sm md:text-lg"
                  dangerouslySetInnerHTML={{ __html: modalContent.fullContent }}
                />
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
