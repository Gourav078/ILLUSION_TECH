"use client";

import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";

// Define the structure for our form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  reason: string;
  captchaAnswer: string;
}

// Define the structure for our validation errors
interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  reason?: string;
  captchaAnswer?: string;
}

// Define the structure for our captcha
interface CaptchaData {
  num1: number;
  num2: number;
  correctAnswer: number;
}

// The component now accepts an `onClose` function as a prop
const WorkshopForm = ({ onClose }: { onClose: () => void }) => {
  // State to hold the form's input values
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    reason: "",
    captchaAnswer: "",
  });

  // State to manage the loading indicator on the submit button
  const [loading, setLoading] = useState(false);

  // State to hold any validation error messages
  const [errors, setErrors] = useState<Errors>({});

  // State to hold the captcha data
  const [captcha, setCaptcha] = useState<CaptchaData>({
    num1: 0,
    num2: 0,
    correctAnswer: 0,
  });

  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  // Function to generate a new captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 20) + 1; // Random number between 1-20
    const num2 = Math.floor(Math.random() * 20) + 1; // Random number between 1-20
    const correctAnswer = num1 + num2;

    setCaptcha({ num1, num2, correctAnswer });
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Function to handle changes in any input field
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Function to validate the form before submission
  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }
    if (!formData.organization.trim()) {
      newErrors.organization = "Organization/College is required.";
      isValid = false;
    }
    if (!formData.reason.trim()) {
      newErrors.reason = "This field is required.";
      isValid = false;
    }

    // Validate captcha
    if (!formData.captchaAnswer.trim()) {
      newErrors.captchaAnswer = "Please solve the math problem.";
      isValid = false;
    } else if (parseInt(formData.captchaAnswer) !== captcha.correctAnswer) {
      newErrors.captchaAnswer = "Incorrect answer. Please try again.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Function to refresh the captcha
  const refreshCaptcha = () => {
    generateCaptcha();
    setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
    setErrors((prev) => ({ ...prev, captchaAnswer: undefined }));
  };

  // Function to handle the form submission
  const handleSubmit = async () => {
    // If validation fails, stop the submission
    if (!validateForm()) {
      // If captcha is wrong, generate a new one
      if (parseInt(formData.captchaAnswer) !== captcha.correctAnswer) {
        generateCaptcha();
        setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
      }
      return;
    }

    setLoading(true);

    // Create a FormData object to send the data. This works best with Google Scripts.
    const submissionData = new FormData();
    submissionData.append("formName", "Workshop Submissions");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("organization", formData.organization);
    submissionData.append("reason", formData.reason);

    try {
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Google Script URL is not defined.");
      }
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: submissionData,
      });

      // The Google Script redirects after a POST, so we check for this type of response.
      if (response.ok || response.type === "opaque") {
        toast.success("Registration successful! We'll be in touch.");
        // Clear the form and close the dialog after a short delay
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            organization: "",
            reason: "",
            captchaAnswer: "",
          });
          setErrors({});
          generateCaptcha(); // Generate new captcha for next use
          onClose(); // Close the dialog on success
        }, 1500);
      } else {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "An error occurred during submission."
        );
      }
    } catch (err: unknown) {
      console.error("Submission Error:", err);
      if (err instanceof Error) {
        toast.error(`Submission failed: ${err.message}`);
      } else {
        toast.error("Submission failed: An unknown error occurred.");
      }
      // Generate new captcha after failed submission
      generateCaptcha();
      setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="relative bg-gray-800 top-2 border-2 border-gray-600 rounded-lg shadow-xl p-4 w-full max-w-sm mx-auto main-font-family">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
          aria-label="Close form"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-center text-white mb-6">
          Workshop Registration
        </h2>
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white rounded-md border border-gray-700 p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white rounded-md border border-gray-700 p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white rounded-md border border-gray-700 p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Organization Field */}
          <div>
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Organization / College
            </label>
            <input
              id="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white rounded-md border border-gray-700 p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            {errors.organization && (
              <p className="text-sm text-red-500 mt-1">{errors.organization}</p>
            )}
          </div>

          {/* Reason Field */}
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Why do you want to attend?
            </label>
            <textarea
              id="reason"
              value={formData.reason}
              onChange={handleChange}
              rows={3}
              className="w-full bg-gray-900 text-white rounded-md border border-gray-700 p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            {errors.reason && (
              <p className="text-sm text-red-500 mt-1">{errors.reason}</p>
            )}
          </div>

          {/* Captcha Field */}
          <div>
            <label
              htmlFor="captchaAnswer"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Security Check
            </label>
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white font-mono text-sm">
                {captcha.num1} + {captcha.num2}
              </div>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="text-gray-400 hover:text-white transition-colors"
                title="Refresh captcha"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
              <input
                id="captchaAnswer"
                type="number"
                value={formData.captchaAnswer}
                onChange={handleChange}
                placeholder="Enter the answer"
                className="w-[60%] bg-gray-900 text-white rounded-md border border-gray-700 p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            {errors.captchaAnswer && (
              <p className="text-sm text-red-500 mt-1">
                {errors.captchaAnswer}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-md font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 transition-all duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkshopForm;
