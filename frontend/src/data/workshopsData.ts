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
import Card1 from "../data/miniComponents/Cards/Card1";
import Card2 from "../data/miniComponents/Cards/Card2";
import Card3 from "../data/miniComponents/Cards/Card3";
import Card4 from "../data/miniComponents/Cards/Card4";

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
    fullContent: React.createElement(Card1),
  },
  {
    Icon: Code,
    description: "Roadmap to mastering AI skills",
    title: "AI Skills Roadmap",
    fullContent: React.createElement(Card2),
  },
  {
    Icon: Users,
    title: "1-1 Discussion",
    description: "Personalized mentoring sessions with industry experts",
    fullContent: React.createElement(Card3),
  },
  {
    Icon: TrendingUp,
    title: "Market Growth 1",
    description: "Insights into rapidly expanding cybersecurity and AI sectors",
    fullContent: React.createElement(Card4),
  },
];

export const workshops2: WorkshopContent[] = [
  {
    Icon: Brain,
    title: "Latest Technology",
    description: "Hands-on experience with cutting-edge AI and security tools",
    fullContent: React.createElement(Card1),
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
