import {
  TrendingUp,
  Users,
  Brain,
  Code,
  Rocket,
  Lightbulb,
  Wrench,
} from "lucide-react";
import React from "react";
import AIStep1 from "./miniComponents/AISteps/AIStep1";
import CYStep1 from "./miniComponents/CYSteps/CYStep1";
import AIStep3 from "./miniComponents/AISteps/AIStep3";
import AIStep4 from "./miniComponents/AISteps/AIStep4";
import CyberpunkUI from "./miniComponents/AISteps/AIStep2";

export interface WorkshopContent {
  Icon: React.ElementType;
  title: string;
  description: string;
  fullContent: React.ReactNode;
}

export const workshops1: WorkshopContent[] = [
  {
    Icon: Brain,
    description: "It all started with a movie...",
    title: "Why Choose IllusionSecurity.ai?",
    fullContent: React.createElement(AIStep1),
  },
  {
    Icon: Code,
    description: "Roadmap to mastering AI skills",
    title: "AI Skills Roadmap",
    fullContent: React.createElement(CyberpunkUI),
  },
  {
    Icon: Users,
    title: "1-1 Discussion",
    description: "Personalized mentoring sessions with industry experts",
    fullContent: React.createElement(AIStep3),
  },
  {
    Icon: TrendingUp,
    title: "Market Growth 1",
    description: "Insights into rapidly expanding cybersecurity and AI sectors",
    fullContent: React.createElement(AIStep4),
  },
];

export const workshops2: WorkshopContent[] = [
  {
    Icon: Brain,
    title: "Latest Technology",
    description: "Hands-on experience with cutting-edge AI and security tools",
    fullContent: React.createElement(CYStep1),
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
];
