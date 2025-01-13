"use client";
import Home from "@/components/Home";
import NewsSection from "@/components/NewsSection";
import WorkshopGrid from "@/components/WorkshopGrid";
import WorkshopOverview from "@/components/WorkshopOverview";

const page = () => {
  return (
    <div className="bg-cyber-dark text-white min-h-screen bg-black">
      <Home />
      <WorkshopOverview />
      <WorkshopGrid />
      <NewsSection />
    </div>
  );
};

export default page;
