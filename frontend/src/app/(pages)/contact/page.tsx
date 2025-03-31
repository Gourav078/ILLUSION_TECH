// "use client";
// import axios from "axios";
// import { useState } from "react";
// import { toast, Toaster } from "sonner";
// // import TerminalContactForm from "./TerminalContactForm";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:8001/contacts/",
//         formData
//       );
//       console.log("Contact form submitted:", response.data);

//       toast.success("Message sent successfully! We'll get back to you soon.");

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Error submitting contact form:", err);

//       toast.error("Failed to send message. Please try again later.");
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen text-white"
//       style={{
//         backgroundImage: "url('/contact section.png')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         marginTop: "3rem",
//       }}
//     >
//       <Toaster position="top-right" />
//       <div
//         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         aria-hidden="true"
//       >
//         <div
//           className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//         ></div>
//       </div>
//       <div
//         className="bg-blur border-[4px] rounded-2xl border-gray-700 transition-all duration-200 backdrop-blur"
//         style={{
//           maxWidth: "400px",
//           width: "100%",
//           margin: "2rem",
//           padding: "1.5rem",
//         }}
//       >
//         <div className="flex flex-col items-center space-y-4  py-4 px-4 font-semibold">
//           <h1 className="text-2xl font-extrabold text-center text-white dark:text-white">
//             Contact Us
//           </h1>
//           <p className="text-center text-gray-200 text-sm">
//             Have questions? Feel free to drop us a message. We’d love to hear
//             from you!
//           </p>
//           <form onSubmit={handleSubmit} className="w-full space-y-4">
//             <input
//               className="w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 text-gray-500 dark:text-white placeholder-gray-400 transition-all duration-200"
//               placeholder="Full Name"
//               value={formData.name}
//               required
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//             />
//             <input
//               className="w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 text-gray-500 dark:text-white placeholder-gray-400 transition-all duration-200"
//               placeholder="Email Address"
//               type="email"
//               value={formData.email}
//               required
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//             <input
//               className="w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 text-gray-500 dark:text-white placeholder-gray-400 transition-all duration-200"
//               placeholder="Phone Number"
//               type="tel"
//               value={formData.phone}
//               required
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//             />
//             <textarea
//               className="w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 text-gray-300 dark:text-white placeholder-gray-400 transition-all duration-200"
//               placeholder="Your Message"
//               rows={4}
//               value={formData.message}
//               required
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//             />
//             <button
//               type="submit"
//               className="w-full py-2 bg-gray-300 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//         <div
//           className="absolute inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-180"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(100%-11rem)] aspect-[1155/678] w-[10.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(120%-30rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 100.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// "use client";
// import MatrixRain from "@/components/animata/MatrixRain";
// import axios from "axios";
// import { useState, useEffect, useRef } from "react";
// import { toast, Toaster } from "sonner";

// const Contact = () => {
//   const [step, setStep] = useState<number>(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [input, setInput] = useState<string>("");
//   const [output, setOutput] = useState<string[]>([]);
//   const terminalRef = useRef<HTMLDivElement>(null);

//   const steps = [
//     "To start, could you give us your email : ",
//     "Awesome! And what's your name? : ",
//     "Great! Could you provide your phone number? : ",
//     "Perfect, and how can we help you? : ",
//     "Thank you! Your details have been submitted.",
//   ];

//   const checkmarkSVG = `<svg stroke='#6eebb7' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path><polyline points='22 4 12 14.01 9 11.01'></polyline></svg>`;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (step === 0) {
//       setFormData({ ...formData, email: input });
//     } else if (step === 1) {
//       setFormData({ ...formData, name: input });
//     } else if (step === 2) {
//       setFormData({ ...formData, phone: input });
//     } else if (step === 3) {
//       setFormData({ ...formData, message: input });
//     }

//     setOutput((prev) => [
//       ...prev,
//       `${steps[step]}`,
//       `<span class='inline-block mr-2'>${checkmarkSVG}</span><span class='text-green-400 text-lg'>${input}</span>`,
//     ]);
//     setInput("");
//     setStep((prev) => prev + 1);
//   };

//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [output]);

//   useEffect(() => {
//     if (step === 4) {
//       const submitForm = async () => {
//         try {
//           const response = await axios.post(
//             "http://localhost:8001/contacts/",
//             formData
//           );
//           console.log("Contact form submitted:", response.data);
//           toast.success(
//             "Message sent successfully! We'll get back to you soon."
//           );
//         } catch (err) {
//           console.error("Error submitting contact form:", err);
//           toast.error("Failed to send message. Please try again later.");
//         } finally {
//           setTimeout(() => {
//             setStep(0);
//             setFormData({
//               name: "",
//               email: "",
//               phone: "",
//               message: "",
//             });
//             setOutput([]);
//           }, 3000);
//         }
//       };
//       submitForm();
//     }
//   }, [step, formData]);

//   return (
//     <div className="flex items-center mt-6 justify-center min-h-screen bg-transparant main-font-family">
//       <div className="absolute inset-0 z-[-1] blur-sm">
//         <MatrixRain />
//       </div>
//       <Toaster position="top-right" />
//       <div className="bg-grey-700 border-t-2 border-gray-700 rounded-lg shadow-lg w-full max-w-4xl mx-4 relative p-6 backdrop-blur-md border border-opacity-100">
//         <div className="absolute top-1 left-2 flex gap-2">
//           <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//         </div>

//         <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 text-sm text-gray-400">
//           illusion@tech.dev
//         </div>

//         <div
//           ref={terminalRef}
//           className="w-full h-96 overflow-y-auto bg-transparant p-2 rounded-lg main-font-family text-white border-t-2 border-gray-700 border-opacity-20"
//         >
//           <p className="text-white">Hey there! We&apos;re excited to link 🔗</p>
//           <hr className="border-gray-700 my-2 border-t-2 border-dashed" />
//           {output.map((line, index) => (
//             <p
//               key={index}
//               className="text-white"
//               dangerouslySetInnerHTML={{ __html: line }}
//             ></p>
//           ))}
//           {step < 4 && (
//             <form onSubmit={handleSubmit} className="flex items-center mt-4">
//               <span className="text-green-400">➜</span>
//               <span className="text-cyan-300 ml-2">~</span>
//               <span className="text-white ml-2">{steps[step]}</span>
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 className="bg-transparent border-none text-gray-400 ml-2 w-1 text-lg focus:outline-none flex-1"
//                 autoFocus
//               />
//             </form>
//           )}
//           {step === 4 && <p className="text-green-400">{steps[step]}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

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
