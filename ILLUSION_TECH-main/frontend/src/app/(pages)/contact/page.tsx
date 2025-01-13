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
    <div className="min-h-screen bg-cyber-dark text-white">
      <Toaster position="top-right" />

      <div
        className="relative min-h-screen py-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/lovable-uploads/8b0d5dd1-a85c-4176-9f95-cb1946e9a560.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="space-y-8 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg backdrop-blur-md border border-cyber-primary/40">
            <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-center text-cyber-secondary text-lg">
              Have questions? Feel free to drop us a message. We’d love to hear
              from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-cyan-400">
                  Full Name
                </label>
                <input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-cyan-500 focus:ring-cyan-400 rounded-lg text-gray-300 bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-purple-400">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-purple-500 focus:ring-purple-400 rounded-lg text-gray-300 bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-pink-400">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-pink-500 focus:ring-pink-400 rounded-lg text-gray-300 bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-cyan-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full border border-cyan-500 focus:ring-cyan-400 rounded-lg text-gray-300 bg-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
