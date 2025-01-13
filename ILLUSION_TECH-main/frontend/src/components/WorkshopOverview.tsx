import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Brain,
  Lightbulb,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import WorkshopForm from "./WorkshopForm";
import { Button } from "./ui/button";

const features = [
  {
    icon: Users,
    title: "1-1 Discussion",
    description: "Personalized mentoring sessions with industry experts",
  },
  {
    icon: Brain,
    title: "Latest Technology",
    description: "Hands-on experience with cutting-edge AI and security tools",
  },
  {
    icon: TrendingUp,
    title: "Market Growth",
    description: "Insights into rapidly expanding cybersecurity and AI sectors",
  },
  {
    icon: Rocket,
    title: "Career Path",
    description: "Guidance for building a successful career in tech",
  },
  {
    icon: Wrench,
    title: "Industry Tools",
    description: "Training on professional-grade security and AI platforms",
  },
  {
    icon: Lightbulb,
    title: "Future Scope",
    description: "Exploration of emerging technologies and opportunities",
  },
  {
    icon: Sparkles,
    title: "Increasing Curiosity",
    description: "Engaging projects that spark innovation and learning",
  },
];

const upcomingWorkshops = [
  {
    id: 1,
    title: "AI Security Fundamentals",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q2 2024",
  },
  {
    id: 2,
    title: "Advanced Penetration Testing",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q2 2024",
  },
  {
    id: 3,
    title: "Machine Learning for Security",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q3 2024",
  },
];

const upcomingTrainings = [
  {
    id: 1,
    title: "Ethical Hacking Bootcamp",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q2 2024",
  },
  {
    id: 2,
    title: "AI Development Intensive",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q3 2024",
  },
  {
    id: 3,
    title: "Security Operations Center Training",
    mode: "Coming Soon",
    price: "TBA",
    duration: "TBA",
    date: "Q3 2024",
  },
];

const WorkshopOverview = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative py-20 px-4  text-white " >
      <div  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ 
          backgroundImage: "url('/lovable-uploads/edcba0ee-3eee-4e22-a001-5984bead479b.png')",
          filter: "brightness(0.7) contrast(1.2)"
        }}/>

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Workshop Features */}
        <div className="text-center space-y-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Workshop Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 font-semibold rounded-md transition-colors mt-8">
                Register for Workshop
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 border border-cyan-500 rounded-md shadow-lg">
              <WorkshopForm />
            </DialogContent>
          </Dialog>
        </div>

        {/* Upcoming Workshops */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-cyan-400">
            Upcoming Workshops
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-bold text-cyan-400 mb-4">
                  {workshop.title}
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>Mode: {workshop.mode}</p>
                  <p>Price: {workshop.price}</p>
                  <p>Duration: {workshop.duration}</p>
                  <p>Expected Date: {workshop.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Trainings */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-cyan-400">
            Upcoming Trainings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingTrainings.map((training) => (
              <div
                key={training.id}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-bold text-cyan-400 mb-4">
                  {training.title}
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>Mode: {training.mode}</p>
                  <p>Price: {training.price}</p>
                  <p>Duration: {training.duration}</p>
                  <p>Expected Date: {training.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopOverview;
