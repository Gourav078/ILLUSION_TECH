// "use client";
// import MatrixRain from "@/components/animata/MatrixRain";
// import { Example } from "./secondaryPage";

// const teamMembers = [
//   {
//     name: "Arghadip Banerjee",
//     role: "Security Engineer",
//     description:
//       "Elite security researcher specializing in zero-day vulnerability discovery and exploit development. With a track record of identifying critical security flaws in enterprise systems, Arghadip leads our offensive security training programs and helps students understand the mindset of both attackers and defenders.",
//     avatar: "/lovable-uploads/76ace6ba-a49f-409a-a707-12bb9ff18905.png",
//     social: {
//       github: "https://github.com/arghadip",
//       linkedin: "https://linkedin.com/in/arghadip",
//       twitter: "https://twitter.com/arghadip",
//     },
//     examples: [
//       "Software Engineer",
//       "Cyber Security Expert",
//       "Cyber Security Analyst",
//       "Cyber Security Mentor",
//     ],
//   },
//   {
//     name: "Gourav Mitra",
//     role: "AI/ML Engineer",
//     description:
//       "Pioneering researcher in artificial intelligence and machine learning, focusing on neural network architecture design and adversarial AI systems. Gourav brings cutting-edge AI expertise to our training programs, helping students understand how AI is revolutionizing cybersecurity.",
//     avatar: "/lovable-uploads/bf1b2930-91b0-4ef7-88ba-8de30fb6edbe.png",
//     social: {
//       github: "https://github.com/gourav",
//       linkedin: "https://linkedin.com/in/gourav",
//       twitter: "https://twitter.com/gourav",
//     },
//     examples: [
//       "AI/ML Engineer",
//       "Software Engineer",
//       "Full Stack Developer",
//       "Backend Developer",
//     ],
//   },
// ];

// const Page = () => {
//   return (
//     <div className="min-h-screen text-white flex flex-col items-center px-4 text-xs sm:text-sm md:text-base">
//       {/* Background Animation */}
//       <div className="absolute inset-0 z-[-1] blur-sm w-full h-full">
//         <MatrixRain />
//       </div>

//       {/* Main Content */}
//       <div className="relative w-full max-w-6xl mt-24 sm:mt-30 flex flex-col items-center">
//         <Example teamMembers={teamMembers} />
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";
import MatrixRain from "@/components/animata/MatrixRain";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string[];
  tagline: string;
  description: ReactNode;
  highlights: string[];
  achievements: string[];
  tools: string[];
  workshops: string[];
  vision: ReactNode;
  avatar: string;
  social: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    id: "cyber-rebel",
    name: "ARGHADIP BANERJEE",
    role: [
      "Cybersecurity Trainer",
      "Security Engineer",
      "Penetration Tester",
      "Forensic Investigator",
    ],
    tagline: "The Cyber Rebel Who Hacked His Destiny—and Built a Revolution",
    description: (
      <>
        <p className="mb-4">
          Picture a teenage Arghadip, sprawled on a creaky couch, eyes glued to
          Die Hard 4 as hackers turned chaos into power. That flicker of
          curiosity wasn&apos;t just a passing thrill—it was a fuse.
        </p>
        <p className="mb-4">
          Years later, in a college dorm, Mr. Robot poured fuel on that fire,
          igniting a dream to conquer the digital shadows. No roadmap, no
          shortcuts—just a relentless itch to dive in. The universe, as if
          smirking at his audacity, flung him headfirst into cybersecurity.
        </p>
        <p className="mb-4">
          Now, Arghadip&apos;s a battle-scarred warrior, wielding cutting-edge
          tools and a vision called IllusionSecurity.ai—a haven for dreamers
          like you, ready to dominate this wild domain and find purpose in its
          chaos!
        </p>
        <p className="mb-4">
          This isn’t a polished hero’s tale. Arghadip’s journey is a war zone of
          late nights, smashed keyboards, and failures that hit like punches.
        </p>
        <p className="mb-4">
          Exhausted? Sure. Frustrated? Constantly. Demotivated? Too many times
          to count.
        </p>
        <p className="mb-4">
          But every crash was a lesson, every reboot a victory.
        </p>
        <p className="mb-4">
          He’s danced with advanced C2 frameworks like Havoc and Cobalt Strike,
          sliced through networks with penetration tools like BloodHound and
          Nmap, and unearthed secrets with forensic beasts like Magnet AXIOM and
          X-Ways.
        </p>
        <p>
          “Cybersecurity’s not just a job,” he growls. “It’s ultimate power—a
          chance to be a superhero, to save the world.” He learns for the rush,
          shares for the ripple, and now he’s crafting IllusionSecurity.ai—a
          movement for rebels who crave mastery and meaning in this tech
          frontier.
        </p>
      </>
    ),
    highlights: [
      "Elite Arsenal : Certified in CEH, CPENT, CHFI, CCSE—badges forged in real-world battles",
      "Awarded Maverick : EC-Council Instructor of the Year 2023 and Circle of Excellence 2022 — he’s the real deal",
      "Global Sensei : Trained 500+ cybersecurity professionals worldwide with 95%+ rave reviews",
    ],
    achievements: [
      "Masters Havoc C2, Cobalt Strike, and BloodHound for pentesting",
      "Expert in Magnet AXIOM, X-Ways, and Volatility for forensics",
      "Created IllusionSecurity.ai to train next-gen cyber warriors",
    ],
    tools: [
      "Havoc C2",
      "Cobalt Strike",
      "BloodHound",
      "Nmap",
      "Burp Suite",
      "Magnet AXIOM",
      "X-Ways",
      "YARA",
      "Volatility",
    ],
    workshops: [
      "Command networks with C2 mastery using Havoc and Cobalt Strike",
      "Breach defenses with pentesting powerhouses like BloodHound, Nmap, and Burp Suite",
      "Decode crimes with forensic titans—Magnet AXIOM, X-Ways, and YARA",
      "Outmaneuver foes with Red Teaming and OSINT stealth strikes",
    ],
    vision: (
      <>
        <p className="mb-4">
          From a kid awestruck by digital showdowns to a trainer sculpting cyber
          legends, Arghadip&apos;s seen it all—and he&apos;s not stopping. His
          brainchild,{" "}
          <span className="text-[#4ade80]">IllusionSecurity.ai</span>, is his
          dare to the world :
        </p>
        <p className="mb-4">
          a playground for dreamers who want to dominate cybersecurity, not just
          dip their toes. It’s where purpose meets power—where you’ll learn to
          wield tech that bends reality, protects millions, and carves your name
          in the industry’s future.
        </p>
        <p className="mb-4">
          “I’m no perfect guru,” he shrugs, “but I’m the spark for someone out
          there.”
        </p>
        <p>
          Ready to rise, fail, restart, and rule with Arghadip? Join his
          workshop—where every stumble fuels your fire, every skill shapes your
          destiny, and{" "}
          <span className="text-[#4ade80]">IllusionSecurity.ai</span> turns
          dreamers into titans. Keep learning, keep growing—let’s hack the world
          together!
        </p>
      </>
    ),
    avatar: "/lovable-uploads/76ace6ba-a49f-409a-a707-12bb9ff18905.png",
    social: {
      github: "https://github.com/arghadip",
      linkedin: "https://linkedin.com/in/arghadip",
      twitter: "https://twitter.com/arghadip",
    },
  },
  {
    id: "code-crusader",
    name: "GOURAV MITRA",
    role: [
      "AI Trainer",
      "Python Developer",
      "Machine Learning Engineer",
      "Full Stack Developer",
    ],
    tagline: "The Code Crusader Who Dreamed in Algorithms",
    description: (
      <>
        <p className="mb-4">
          Imagine a restless night in a cramped hostel room, the glow of a
          laptop casting shadows as a young Gourav Mitra wrestled with lines of
          code. It wasn&apos;t just insomnia—it was a calling.
        </p>
        <p className="mb-4">
          Back then, he was a diploma student doodling data structures in
          notebooks, dreaming of a world where machines could talk, think, and
          predict. No fancy tech labs, no silver spoon—just a stubborn spark and
          a beat-up computer.
        </p>
        <p className="mb-4">
          Fast forward through sleepless nights and hackathon battles, and that
          spark&apos;s now a blazing fire. Gourav&apos;s a Junior Python
          Developer who&apos;s conquered AI&apos;s wild frontier—and he&apos;s
          ready to hand you the torch!
        </p>
        <p className="mb-4">
          His story’s no straight line to glory. It’s a messy, thrilling
          scramble—debugging crashes that mocked him, wrestling with TensorFlow
          until dawn, losing sleep to perfect a chatbot that could outwit his
          friends. But every glitch he fixed, every model he trained, fueled his
          fire.
        </p>
        <p className="mb-4">
          He stormed hackathons like Smart India 2022 and Hackazard, snagging
          runners-up medals with his crew, and built an AI-powered Bhagavad Gita
          bot that fused ancient verses with modern tech.
        </p>
        <p className="mb-4">
          “Code’s my playground,” he says, “and AI’s the game-changer. It’s not
          just power—it’s the future, and I’m obsessed with shaping it.”
        </p>
        <p>
          Now, he’s not hoarding that obsession—he’s sharing it, line by line,
          with anyone bold enough to dive in.
        </p>
      </>
    ),
    highlights: [
      "Hackathon Grit: Runners-up in Smart India Hackathon 2022 and Hackazard—proof he thrives in the chaos and wins.",
      "Built AI-powered Bhagavad Gita bot fusing ancient verses with modern tech",
      "Wields Python, Flask, TensorFlow, and Next.js like a master",
    ],
    achievements: [
      "Developed ML models for real estate price prediction",
      "Created intelligent chatbots with natural language processing",
      "B.Tech graduate with 8.99 CGPA in Computer Science",
    ],
    tools: [
      "Python",
      "Flask",
      "TensorFlow",
      "Next.js",
      "Pandas",
      "Scikit-learn",
      "React",
      "Flutter",
      "Machine Learning",
    ],
    workshops: [
      "Conjure AI chatbots that banter better than your group chat",
      "Train machine learning models to see tomorrow—starting with property prices",
      "Craft killer apps with Flutter and React that’ll make jaws drop",
      "Decode data’s secrets with Pandas and Scikit-learn, one epic plot at a time",
    ],
    vision: (
      <>
        <p className="mb-4">
          Gourav&apos;s no tech prince born with a golden keyboard—he&apos;s a
          scrapper who turned caffeine and curiosity into code that sings. Once
          a kid sketching algorithms between classes, now a warrior who&apos;s
          battled bugs and deadlines to build a portfolio that hums with life.
        </p>
        <p className="mb-4">
          &quot;I&apos;ve crashed, I&apos;ve burned, I&apos;ve restarted a
          hundred times,&quot; he laughs, &quot;and I&apos;d do it all
          again.&quot;
        </p>
        <p className="mb-4">
          Ready to jump into the fray, wrestle with AI, and emerge a creator
          with Gourav as your guide?
        </p>
        <p>
          Step into his workshop—where every error’s a stepping stone, every
          breakthrough a rush, and every student a dreamer who could redefine
          the world. Let’s code, let’s grow—your crusade starts here!
        </p>
      </>
    ),
    avatar: "/lovable-uploads/bf1b2930-91b0-4ef7-88ba-8de30fb6edbe.png",
    social: {
      github: "https://github.com/gourav",
      linkedin: "https://linkedin.com/in/gourav",
      twitter: "https://twitter.com/gourav",
    },
  },
];

const Page = () => {
  return (
    <div className="relative text-white flex flex-col items-center px-4 text-xs sm:text-sm md:text-base">
      {/* Fixed background that covers entire screen */}
      <div className="fixed inset-0 z-[-1] blur-sm h-screen w-screen">
        <MatrixRain />
      </div>

      {/* Content container */}
      <div className="relative w-full max-w-6xl mt-[10rem] mb-[10rem] sm:mt-30 flex flex-col items-center">
        <TabbedInterface teamMembers={teamMembers} />
      </div>
    </div>
  );
};

interface TabbedInterfaceProps {
  teamMembers: TeamMember[];
}

const TabbedInterface = ({ teamMembers }: TabbedInterfaceProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const member = teamMembers[activeTab];

  return (
    <div className="w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl">
      {/* Chrome-style Tabs */}
      <div className="flex bg-transparant border-b border-gray-700 px-2 pt-2">
        {teamMembers.map((member, index) => (
          <button
            key={member.id}
            className={`relative px-6 py-3 rounded-t-lg text-sm font-medium main-font-family transition-all ${
              activeTab === index
                ? "bg-transparant text-white shadow-lg"
                : "bg-transparant text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(index)}
          >
            /{member.name}
            {activeTab === index && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#4ade80]"
                layoutId="tabUnderline"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-transparant main-font-family backdrop-blur-md">
        <div className="space-y-6">
          {/* Header */}
          <div className="border-b border-gray-700 pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#4ade80]">
              {member.tagline}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold mt-1">
              {member.name}
            </h2>
            <Typewrite roles={member.role} />
            {/* <p className="text-gray-300 italic">{member.role}</p> */}
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none text-justify">
            {member.description}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-transparant  p-4  border border-gray-700">
              <h3 className="text-lg font-semibold text-[#4ade80] mb-3">
                Why Join {member.name.split(" ")[0]}?
              </h3>
              <ul className="space-y-2 text-left text-justify">
                {member.highlights.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-transparant p-4 border border-gray-700">
              <h3 className="text-lg font-semibold text-[#4ade80] mb-3">
                Tools & Achievements
              </h3>
              <div className="mb-4">
                <h4 className="font-medium mb-1">Master of:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700/50 rounded text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-1">Notable Wins:</h4>
                <ul className="space-y-1 text-left text-justify">
                  {member.achievements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#4ade80] mr-2">•</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.replace(
                            "IllusionSecurity.ai",
                            '<span class="text-[#4ade80]">IllusionSecurity.ai</span>'
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Workshops */}
          <div className="bg-transparant p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-[#4ade80] mb-3">
              What You&apos;ll Master
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-justify">
              {member.workshops.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center bg-gray-700/30 px-3 py-2 rounded"
                >
                  <span className="text-[#4ade80] mr-2">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="prose prose-invert max-w-none bg-transparant p-4 border border-gray-700 text-justify">
            <h3 className="text-lg font-semibold text-[#4ade80] mb-3">
              The Vision
            </h3>
            {member.vision}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-4">
            <HoverLink
              href={member.social.github}
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
            />
            <HoverLink
              href={member.social.linkedin}
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
            <HoverLink
              href={member.social.twitter}
              icon={<Twitter className="w-5 h-5" />}
              label="Twitter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface HoverLinkProps {
  href: string;
  icon: ReactNode;
  label?: string;
}

const HoverLink = ({ href, icon }: HoverLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-1/3 border text-white border-white py-2 text-xs sm:text-sm font-medium transition-colors hover:scale-105 transition-transform duration-300 hover:bg-white-50 hover:text-white-100 flex items-center justify-center relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity hover:opacity-100"
      />
    </motion.a>
  );
};

const Typewrite = ({ roles }: { roles: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[exampleIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(75);
      } else {
        // Adding text
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        // Pause at end of typing
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        // Move to next role after deleting
        setIsDeleting(false);
        setExampleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, exampleIndex, isDeleting, roles, typingSpeed]);

  return (
    <p className="text-gray-300 italic">
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default Page;
