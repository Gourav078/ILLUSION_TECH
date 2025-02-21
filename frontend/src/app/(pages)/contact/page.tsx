"use client";
import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8001/contacts/",
        formData
      );
      console.log("Contact form submitted:", response.data);

      toast.success("Message sent successfully! We'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting contact form:", err);

      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen text-white"
      // style={{
      //   marginTop: "3rem",
      // }}

      style={{
        backgroundImage: "url('/contact section.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginTop: "3rem",
      }}
    >
      <Toaster position="top-right" />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="bg-blur border-[4px] rounded-2xl border-gray-700 transition-all duration-200 backdrop-blur"
        style={{
          maxWidth: "400px",
          width: "100%",
          margin: "2rem",
          padding: "1.5rem",
        }}
      >
        <div className="flex flex-col items-center space-y-4  py-4 px-4 font-semibold">
          <h1 className="text-2xl font-extrabold text-center text-white dark:text-white">
            Contact Us
          </h1>
          <p className="text-center text-gray-200 text-sm">
            Have questions? Feel free to drop us a message. We’d love to hear
            from you!
          </p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              className="w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 text-gray-500 dark:text-white placeholder-gray-400 transition-all duration-200"
              placeholder="Full Name"
              value={formData.name}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              className="w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 text-gray-500 dark:text-white placeholder-gray-400 transition-all duration-200"
              placeholder="Email Address"
              type="email"
              value={formData.email}
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              className="w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 text-gray-500 dark:text-white placeholder-gray-400 transition-all duration-200"
              placeholder="Phone Number"
              type="tel"
              value={formData.phone}
              required
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <textarea
              className="w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 text-gray-300 dark:text-white placeholder-gray-400 transition-all duration-200"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              required
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full py-2 bg-gray-300 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-180"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(100%-11rem)] aspect-[1155/678] w-[10.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(120%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 100.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
