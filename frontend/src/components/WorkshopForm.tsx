import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  reason: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  reason?: string;
}

const WorkshopForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    reason: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): Errors => {
    const newErrors: Errors = {};

    if (!formData.name) newErrors.name = "Full Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.organization)
      newErrors.organization = "Organization/College is required.";
    if (!formData.reason) newErrors.reason = "Reason is required.";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8001/workshops/",
        formData
      );
      console.log("Workshop form submitted:", response.data);

      toast.success(
        "Registration submitted successfully! We'll contact you soon.",
        {
          position: "top-right",
        }
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        reason: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Error submitting workshop form:", err);

      toast.error("Failed to submit the form. Please try again later.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-xl mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg backdrop-blur-md"
    >
      <Toaster position="top-right" />
      <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Workshop Registration
      </h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-cyan-400">
            Full Name
          </Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-cyan-500 focus:ring-cyan-400 rounded-lg text-gray-300 bg-gray-800"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-purple-400">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border border-purple-500 focus:ring-purple-400 rounded-lg text-gray-300 bg-gray-800"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-pink-400">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border border-pink-500 focus:ring-pink-400 rounded-lg text-gray-300 bg-gray-800"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization" className="text-cyan-400">
            Organization/College
          </Label>
          <Input
            id="organization"
            required
            value={formData.organization}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
            className="border border-cyan-500 focus:ring-cyan-400 rounded-lg text-gray-300 bg-gray-800"
          />
          {errors.organization && (
            <p className="text-red-500 text-sm">{errors.organization}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="reason" className="text-purple-400">
            Why do you want to attend this workshop?
          </Label>
          <Textarea
            id="reason"
            required
            value={formData.reason}
            onChange={(e) =>
              setFormData({ ...formData, reason: e.target.value })
            }
            className="border border-purple-500 focus:ring-purple-400 rounded-lg text-gray-300 bg-gray-800"
          />
          {errors.reason && (
            <p className="text-red-500 text-sm">{errors.reason}</p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        disabled={loading}
        className={`w-full py-3 ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600"
        } text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105`}
      >
        {loading ? "Submitting..." : "Submit Registration"}
      </Button>
    </form>
  );
};

export default WorkshopForm;
