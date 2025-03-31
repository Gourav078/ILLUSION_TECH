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
    <div className="flex items-center justify-center">
      <Toaster position="top-right" />
      <div
        className="relative bg-gray-800 border-[3px] border-gray-700 rounded-lg shadow-md p-6 w-full max-w-md"
        style={{
          maxWidth: "350px",
        }}
      >
        <h2 className="text-xl font-bold text-center text-gray-100 mb-4">
          Workshop Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-400">
              Full Name
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-gray-900 text-gray-100 rounded-md border border-gray-700 p-2"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-400">
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
              className="w-full bg-gray-900 text-gray-100 rounded-md border border-gray-700 p-2"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-400">
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
              className="w-full bg-gray-900 text-gray-100 rounded-md border border-gray-700 p-2"
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="organization" className="text-gray-400">
              Organization/College
            </Label>
            <Input
              id="organization"
              required
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
              className="w-full bg-gray-900 text-gray-100 rounded-md border border-gray-700 p-2"
            />
            {errors.organization && (
              <p className="text-sm text-red-500 mt-1">{errors.organization}</p>
            )}
          </div>

          <div>
            <Label htmlFor="reason" className="text-gray-400">
              Why do you want to attend this workshop?
            </Label>
            <Textarea
              id="reason"
              required
              value={formData.reason}
              onChange={(e) =>
                setFormData({ ...formData, reason: e.target.value })
              }
              className="w-full bg-gray-900 text-gray-100 rounded-md border border-gray-700 p-2"
            />
            {errors.reason && (
              <p className="text-sm text-red-500 mt-1">{errors.reason}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-bold ${
              loading
                ? "bg-gray-700 text-gray-100 rounded-full cursor-not-allowed"
                : "bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200 hover:text-gray-100 text-gray-800"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WorkshopForm;
