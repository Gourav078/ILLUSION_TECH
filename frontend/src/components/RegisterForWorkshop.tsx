import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WorkshopForm from "./WorkshopForm";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const RegisterForWorkshop = () => {
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const [currentTarget, setCurrentTarget] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } //for small screen size reduce it to 1
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const benefits = [
    "Master the basics of Python programming",
    "Learn practical digital marketing strategies",
    "Develop your creative writing skills",
  ];

  const targetAudiences = [
    "Students looking to enhance their technical skills",
    "Professionals aiming to upskill in digital marketing",
    "Aspiring writers seeking to improve their craft",
  ];

  useEffect(() => {
    const benefitInterval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }, 5000);

    const targetInterval = setInterval(() => {
      setCurrentTarget((prev) => (prev + 1) % targetAudiences.length);
    }, 5000);

    return () => {
      clearInterval(benefitInterval);
      clearInterval(targetInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating Icons Background */}
      <div
        className="absolute inset-0 bg-cover bg-center backdrop-blur-md bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/register form background.png')" }}
      >
        <div
          className="floating-icon absolute rounded-full border border-white p-1 bg-black"
          style={{
            top: "10%",
            left: "10%",
          }}
        >
          <Image
            src={`/icon-1.png`}
            width={80}
            height={80}
            alt="floating-icon"
            className="rounded-full"
          />
        </div>
        <div
          className="floating-icon absolute rounded-full border border-white p-1 bg-black"
          style={{
            top: "40%",
            left: "50%",
          }}
        >
          <Image
            src={`/icon-2.png`}
            width={80}
            height={80}
            alt="floating-icon"
            className="rounded-full"
          />
        </div>
        <div
          className="floating-icon absolute rounded-full border border-white p-1 bg-black"
          style={{
            top: "60%",
            left: "30%",
          }}
        >
          <Image
            src={`/icon-3.png`}
            width={80}
            height={80}
            alt="floating-icon"
            className="rounded-full"
          />
        </div>
        <div
          className="floating-icon absolute rounded-full border border-white p-1 bg-black"
          style={{
            top: "80%",
            left: "90%",
          }}
        >
          <Image
            src={`/icon-4.png`}
            width={80}
            height={80}
            alt="floating-icon"
            className="rounded-full"
          />
        </div>
        <div
          className="floating-icon absolute rounded-full border border-white p-1 bg-black"
          style={{
            top: "30%",
            left: "40%",
          }}
        >
          <Image
            src={`/icon-5.png`}
            width={80}
            height={80}
            alt="floating-icon"
            className="rounded-full"
          />
        </div>
        <div
          className="floating-icon absolute rounded-full border border-white p-1 bg-black"
          style={{
            top: "10%",
            left: "90%",
          }}
        >
          <Image
            src={`/icon-6.png`}
            width={80}
            height={80}
            alt="floating-icon"
            className="rounded-full"
          />
        </div>
        <div
          className="floating-icon absolute rounded-full border border-white p-1 bg-black"
          style={{
            top: "20%",
            left: "70%",
          }}
        >
          <Image
            src={`/icon-7.png`}
            width={80}
            height={80}
            alt="floating-icon"
            className="rounded-full"
          />
        </div>
        <div
          className="floating-icon absolute rounded-full border border-white p-1 bg-black"
          style={{
            top: "65%",
            left: "65%",
          }}
        >
          <Image
            src={`/icon-8.png`}
            width={80}
            height={80}
            alt="floating-icon"
            className="rounded-full"
          />
        </div>
        <div
          className="floating-icon absolute rounded-full border border-white p-1 bg-black"
          style={{
            top: "90%",
            left: "10%",
          }}
        >
          <Image
            src={`/icon-9.png`}
            width={80}
            height={80}
            alt="floating-icon"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Main Content */}
      {/* <AnimatePresence>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center px-5 max-w-4xl mx-auto"
        > */}
      {/* Title and Description */}
      {/* <div className="mb-8">
            <h2 className="text-lg font-bold" style={{ color: "#fff" }}>
              Ready to Level Up Your Skills?
            </h2>
            <p className=" text-[#00adb5] text-sm p-2 rounded-md">
              Join our exclusive workshop and gain practical experience in Cyber
              Security and AI/ML. This hands-on session will cover fundamental
              concepts, advanced techniques, and real-world applications.
              Limited seats available, so register today!
            </p>
          </div> */}

      {/* Register Button */}
      {/* <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full font-bold px-8 py-4 text-center transition-all duration-300 bg-black text-white hover:scale-110 shadow-lg border-2">
                Register for Workshop
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-transparent border-none sm:max-w-[425px]">
              <WorkshopForm />
            </DialogContent>
          </Dialog> */}

      {/* Workshop Details */}
      {/* <div className="mt-6">
            <p className="text-sm text-[#00adb5]">
              Don&apos;t miss this opportunity to enhance your career prospects,
              network with industry experts, and gain a competitive edge.
            </p>
            <h2 className="text-lg font-bold mt-4">What You&apos;ll Gain:</h2>
            <div className="relative overflow-hidden w-full h-12 flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentBenefit}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  className="text-sm bg-black/30 text-white px-4 py-2 rounded-[2rem] border border-gray-500 shadow-lg"
                >
                  {benefits[currentBenefit]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div> */}

      {/* Audience Details */}
      {/* <div className="mt-6">
            <h2 className="text-lg font-bold">Who Should Attend?</h2>
            <div className="relative overflow-hidden w-full h-12 flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTarget}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  className="text-sm bg-black text-white px-4 py-2 rounded-[2rem] border border-gray-500 shadow-lg"
                >
                  {targetAudiences[currentTarget]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div> */}

      {/* </motion.div>
      </AnimatePresence> */}

      <AnimatePresence>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center px-5 max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <h2 className="text-lg font-bold text-white">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-[#00adb5] text-sm p-2 rounded-md">
              Join our exclusive workshop and gain practical experience in Cyber
              Security and AI/ML. This hands-on session will cover fundamental
              concepts, advanced techniques, and real-world applications.
              Limited seats available, so register today!
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full font-bold px-8 py-4 text-center transition-all duration-300 bg-black text-white hover:scale-110 shadow-lg border-2">
                Register for Workshop
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-transparent border-none sm:max-w-[425px]">
              <WorkshopForm />
            </DialogContent>
          </Dialog>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
            {/* Workshop Details */}
            <div className="w-full md:w-1/2 text-center border border-gray-500 p-4 rounded-lg bg-black/30">
              <h2 className="text-lg font-bold text-white">
                What You&apos;ll Gain:
              </h2>
              <div className="relative overflow-hidden w-full h-12 flex justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentBenefit}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm bg-black text-white px-4 py-2 rounded-[2rem] border border-gray-500 shadow-lg"
                  >
                    {benefits[currentBenefit]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Audience Details */}
            <div className="w-full md:w-1/2 text-center border border-gray-500 p-4 rounded-lg bg-black/30">
              <h2 className="text-lg font-bold text-white">
                Who Should Attend?
              </h2>
              <div className="relative overflow-hidden w-full h-12 flex justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTarget}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm bg-black text-white px-4 py-2 rounded-[2rem] border border-gray-500 shadow-lg"
                  >
                    {targetAudiences[currentTarget]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Icons Animation */}
      <style jsx>{`
        @keyframes floatAnimation {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .floating-icon {
          animation: floatAnimation 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default RegisterForWorkshop;
