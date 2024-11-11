"use client";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import SubmitBtn from "./SubmitBtn";

const ContactInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full lg:max-w-7xl mx-auto p-4">
      <motion.div 
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bg-blue-950 flex flex-col gap-10 p-6 rounded-sm w-full lg:w-1/2">
        <h1 className="text-2xl lg:text-3xl font-serif font-bold text-white flex items-center justify-center">
          GET IN TOUCH
        </h1>
        <ul className="flex gap-6">
          <li>
            <a href="#">
              <Facebook className="text-white" />
            </a>
          </li>
          <li>
            <a href="#">
              <Twitter className="text-white" />
            </a>
          </li>
          <li>
            <a href="#">
              <Linkedin className="text-white" />
            </a>
          </li>
          <li>
            <a href="#">
              <Instagram className="text-white" />
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-5 text-white">
          <li className="flex gap-3">
            <Building2 />
            <span>
              SOON...!!
              <br />
              
            </span>
          </li>
          <li className="flex gap-3">
            <Phone />
            SOON..!!
          </li>
          <li className="flex gap-3">
            <Mail />
            SOON...!!
          </li>
        </ul>
        {/* Google Maps Embed */}
       
      </motion.div>
      <motion.div   
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden" className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <section className="p-6 rounded-lg shadow-md bg-stone-900 bg-opacity-90">
          {/* Adjusted bg-opacity to 90 */}
          <div className="py-8 lg:py-12 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-white">
              Leave a Message
            </h2>
            <p className="mb-8 lg:mb-12 font-light text-center text-white sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-transparent border border-white text-gray-900 text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-transparent border border-white text-white text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-white bg-transparent rounded-xl border border-white shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-white bg-transparent rounded-xl shadow-sm border border-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <SubmitBtn />
            </form>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
