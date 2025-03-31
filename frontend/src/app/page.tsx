"use client";

import AINewsSection from "@/components/AINews";
import Home from "@/components/Home";
// import NewsSection from "@/components/NewsSection";
// import RegisterForWorkshop from "@/components/RegisterForWorkshop";
import SemiGearPage from "@/components/SemiGearPage";
// import WorkshopGrid from "@/components/WorkshopGrid";
// import WorkshopOverview from "@/components/WorkshopOverview";
import WorkshopOverview2 from "@/components/WorkshopOverview2";

const page = () => {
  return (
    <div className="">
      <div className="relative isolate px-0 pt-0 lg:px-0">
        <div
          className="text-white min-h-screen"
          style={{
            // backgroundImage: "url('/whole background.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Home />
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent "></div>
          <SemiGearPage />
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent "></div>
          <AINewsSection />
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent "></div>
          <WorkshopOverview2 />
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent "></div>
          {/* <RegisterForWorkshop /> */}
          {/* <WorkshopOverview />
          <WorkshopGrid />
          <NewsSection /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
