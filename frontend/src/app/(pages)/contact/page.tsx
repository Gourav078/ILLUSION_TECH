"use client";
import MatrixRain from "@/components/animata/MatrixRain";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { toast, Toaster } from "sonner";

const Contact = () => {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const steps = [
    "To start, could you give us your email",
    "Awesome! And what's your name?",
    "Great! Could you provide your phone number?",
    "Perfect, and how can we help you?",
    "Thank you! Your details have been submitted.",
  ];

  const subSteps = [
    "your email : ",
    "your name? : ",
    "phone number? : ",
    "write your query : ",
    "Thank you! Your details have been submitted.",
  ];

  const checkmarkSVG = `<svg stroke='#6eebb7' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path><polyline points='22 4 12 14.01 9 11.01'></polyline></svg>`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0) {
      setFormData({ ...formData, email: input });
    } else if (step === 1) {
      setFormData({ ...formData, name: input });
    } else if (step === 2) {
      setFormData({ ...formData, phone: input });
    } else if (step === 3) {
      setFormData({ ...formData, message: input });
    }

    setOutput((prev) => [
      ...prev,
      `${steps[step]}`,
      `<span class='inline-block mr-2'>${checkmarkSVG}</span><span class='text-green-400 text-lg'>${input}</span>`,
    ]);
    setInput("");
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (step === 4) {
      const submitForm = async () => {
        try {
          const response = await axios.post(
            "http://localhost:8001/contacts/",
            formData
          );
          console.log("Contact form submitted:", response.data);
          toast.success(
            "Message sent successfully! We'll get back to you soon."
          );
        } catch (err) {
          console.error("Error submitting contact form:", err);
          toast.error("Failed to send message. Please try again later.");
        } finally {
          setTimeout(() => {
            setStep(0);
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
            setOutput([]);
          }, 3000);
        }
      };
      submitForm();
    }
  }, [step, formData]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent main-font-family p-4">
      <div className="absolute inset-0 z-[-1] blur-sm w-full h-full min-h-screen">
        <MatrixRain />
      </div>
      <Toaster position="top-right" />
      <div className="bg-transparant top-10 border-t-2 border-gray-400 rounded-lg shadow-lg w-full max-w-4xl mx-4 relative p-6 backdrop-blur-md border border-opacity-100">
        <div className="absolute top-1 left-2 flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 text-[0.6rem] sm:text-[0.7rem] md:text-sm text-gray-400">
          illusion@tech.dev
        </div>

        <div
          ref={terminalRef}
          className="w-full h-96 overflow-y-auto bg-transparent p-2 rounded-lg main-font-family text-white border-t-2 border-gray-400 border-opacity-50"
        >
          <p className="text-white text-xs sm:text-sm">
            Hey there! We&apos;re excited to link 🔗
          </p>
          <hr className="border-gray-700 my-2 border-t-2 border-dashed" />
          {output.map((line, index) => (
            <p
              key={index}
              className="text-white text-xs sm:text-sm"
              dangerouslySetInnerHTML={{ __html: line }}
            ></p>
          ))}
          {step < 4 && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start mt-4 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-cyan-300 text-xs sm:text-sm">~</span>
                <span className="text-white text-xs sm:text-sm">
                  {steps[step]}
                </span>
              </div>
              <div className="flex items-center gap-2 w-full">
                <span className="text-green-400 text-xs sm:text-sm">➜</span>
                <span className="opacity-50 whitespace-nowrap flex-grow text-xs sm:text-sm">
                  {subSteps[step]}
                </span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none text-white w-full text-xs sm:text-sm focus:outline-none"
                  style={{ caretShape: "block" }}
                  autoFocus
                />
              </div>
            </form>
          )}
          {step === 4 && (
            <p className="text-green-400 text-xs sm:text-sm">{steps[step]}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
