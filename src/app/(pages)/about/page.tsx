"use client";
import AniScreen from "@/components/AniScreen";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../../../variants";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

// import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <div className="mb-4">
        <AniScreen />
      </div>
      <div className="flex flex-col xl:flex-row xl:justify-between gap-4 p-4">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
        >
          <Card className="h-full  transform transition-transform duration-300 shadow-2xl shadow-gray-400 rounded-lg">
            <CardHeader>
              <CardTitle>Mission Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
              SOON...!!
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
        >
          <Card className="h-full shadow-2xl transform transition-transform duration-300 shadow-gray-400 rounded-lg">
            <CardHeader>
              <CardTitle>Vision Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
               SOON...!!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Company Team Section */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center text-2xl font-semibold my-8 "
      >
        Management and Governance
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col xl:flex-row xl:justify-between gap-2 p-2 h-full"
      >
      
<Card className="shadow-2xl shadow-gray-400 rounded-lg transform transition-transform duration-300 flex-1 bg-transparent text-white">
  <CardHeader className="items-center">
    <CardTitle>
      <Image
        src="/agri1.jpg"
        alt="Description of image"
        width={100}
        height={0}
        className="rounded-full h-[100px]"
      />
    </CardTitle>
  </CardHeader>
  <CardContent>
    <h1 className="justify-center flex font-bold">Founder</h1>
    <p className="flex justify-center">Arghadip</p>
    {/* Social Media Icons */}
    <div className="flex justify-center space-x-4 mt-2">
      <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram size={24} />
      </a>
      <a href="https://www.facebook.com/username" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Facebook size={24} />
      </a>
      <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin size={24} />
      </a>
      <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
        <Twitter size={24} />
      </a>
    </div>
  </CardContent>
</Card>

<Card className="shadow-2xl shadow-gray-400 rounded-lg transform transition-transform duration-300 flex-1 bg-transparent text-white">
  <CardHeader className="items-center">
    <CardTitle>
      <Image
        src="/agri1.jpg"
        alt="Description of image"
        width={100}
        height={0}
        className="rounded-full h-[100px]"
      />
    </CardTitle>
  </CardHeader>
  <CardContent>
    <h1 className="justify-center flex font-bold">Founder</h1>
    <p className="flex justify-center">Gourav</p>
    {/* Social Media Icons */}
    <div className="flex justify-center space-x-4 mt-2">
      <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram size={24} />
      </a>
      <a href="https://www.facebook.com/username" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Facebook size={24} />
      </a>
      <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin size={24} />
      </a>
      <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
        <Twitter size={24} />
      </a>
    </div>
  </CardContent>
</Card>

      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col xl:flex-row xl:justify-between gap-4 p-4"
      >
        <Card className="h-full shadow-2xl shadow-gray-400 rounded-lg transform transition-transform duration-300 flex-1 ">
          <CardContent className="mt-2">
            <span className="font-bold text-lg">We are results oriented.</span>
            <p className="mb-4">
            SOON...!!
            </p>
            <span className="font-bold text-lg">We deliver value.</span>
            <p className="mb-4">
            SOON...!!
            </p>
            <span className="font-bold text-lg">
              We think ahead and communicate openly.
            </span>
            <p className="mb-4">
            SOON...!!
            </p>
            <span className="font-bold text-lg">
              We possess integrity and honesty.
            </span>
            <p className="mb-4">
            SOON...!!
            </p>
            <span className="font-bold text-lg">We have commitment.</span>
            <p className="mb-4">
            SOON...!!
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default page;
