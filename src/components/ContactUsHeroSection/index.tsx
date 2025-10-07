"use client";
import React, { useRef, useState, FormEvent } from "react";
import BorderButton from "@/components/BorderButton";

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  country: string;
  message: string;
  agreed: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  country?: string;
}

export default function App() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    country: "",
    message: "",
    agreed: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : (e.target as HTMLInputElement | HTMLSelectElement).value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): { valid: boolean; errors: FormErrors } => {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName) errors.firstName = "Please complete this required field.";
    if (!formData.lastName) errors.lastName = "Please complete this required field.";
    if (!formData.companyName) errors.companyName = "Please complete this required field.";
    if (!formData.emailAddress) {
      errors.emailAddress = "Please complete this required field.";
    } else if (!emailRegex.test(formData.emailAddress)) {
      errors.emailAddress = "Please enter a valid email address.";
    }
    if (!formData.phoneNumber) errors.phoneNumber = "Please complete this required field.";
    if (!formData.country) errors.country = "Please complete this required field.";

    return { valid: Object.keys(errors).length === 0, errors };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { valid, errors } = validateForm();
    setFormErrors(errors);

    if (valid) {
      console.log("Form submitted successfully:", formData);
      alert("Thanks! We’ll be in touch shortly.");
      // reset (optional)
      // setFormData({ firstName:"", lastName:"", companyName:"", emailAddress:"", phoneNumber:"", country:"", message:"", agreed:false });
    }
  };

  return (
    <div className="bg-[#f4f4f4] dark:bg-[#1a2334] py-32 text-white flex flex-col items-center">
      <div className="container lg:px-0 sm:px-2 px-4 w-full flex flex-col lg:flex-row">
        {/* Left column: copy */}
        <div className=" lg:w-3/3 flex flex-col">
          <p className="text-[#555555] dark:text-white font-medium">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mt-2 text-[#f4a950]">
            Get in touch
          </h1>
          <p className="text-[#333333] mt-4 text-xl dark:text-white">
            Looking to connect with Mazco LLC? Tell us a bit about your goals and
            we’ll route you to the right advisor.
          </p>
          <div className="border-t border-gray-700 my-8"></div>
          <div className="space-y-4 text-[#555555] text-lg mb-4">
            <div>
              <span className="font-semibold text-[#f4a950]">General:</span>{" "}
              <a
                href="mailto:info@mazcollc.com"
                className="hover:text-white dark:text-white transition-colors"
              >
                info@mazcollc.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-[#f4a950]">Advisory:</span>{" "}
              <a
                href="mailto:advisory@mazcollc.com"
                className="hover:text-white dark:text-white transition-colors"
              >
                advisory@mazcollc.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-[#f4a950]">Press:</span>{" "}
              <a
                href="mailto:media@mazcollc.com"
                className="hover:text-white dark:text-white transition-colors"
              >
                media@mazcollc.com
              </a>
            </div>
          </div>
        </div>

        {/* Right column: form */}
        <div className="bg-[#ffffff] dark:bg-[#0f131b] p-4 lg:p-8 md:p-12 rounded-lg lg:w-1/2">
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-[#555555] dark:text-white font-medium mb-1">
                What is your first name? <span className="text-[#c00]">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-transparent text-black dark:text-white placeholder-[#555555] dark:placeholder-white px-0 py-3 rounded-none border-0 border-b border-[#f4a950] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#f4a950] transition-colors duration-200"
              />
              {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-[#555555] dark:text-white font-medium">
                What is your last name? <span className="text-[#c00]">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-transparent text-black dark:text-white placeholder-[#555555] dark:placeholder-white px-0 py-3 rounded-none border-0 border-b border-[#f4a950] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#f4a950] transition-colors duration-200"
              />
              {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="companyName" className="text-[#555555] dark:text-white font-medium">
                Where do you work? Company name <span className="text-[#c00]">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-transparent text-black dark:text-white placeholder-[#555555] dark:placeholder-white px-0 py-3 rounded-none border-0 border-b border-[#f4a950] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#f4a950] transition-colors duration-200"
              />
              {formErrors.companyName && <p className="text-red-500 text-sm mt-1">{formErrors.companyName}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="emailAddress" className="text-[#555555] dark:text-white font-medium">
                What is your work email address? <span className="text-[#c00]">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
                className="w-full bg-transparent text-black dark:text-white placeholder-[#555555] dark:placeholder-white px-0 py-3 rounded-none border-0 border-b border-[#f4a950] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#f4a950] transition-colors duration-200"
              />
              {formErrors.emailAddress && <p className="text-red-500 text-sm mt-1">{formErrors.emailAddress}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="text-[#555555] dark:text-white font-medium">
                What is your phone number? <span className="text-[#c00]">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-transparent text-black dark:text-white placeholder-[#555555] dark:placeholder-white px-0 py-3 rounded-none border-0 border-b border-[#f4a950] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#f4a950] transition-colors duration-200"
              />
              {formErrors.phoneNumber && <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="country" className="text-[#555555] dark:text-white font-medium mb-1">
                Where are you located? <span className="text-[#c00]">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full bg-transparent text-black dark:text-white px-0 py-3 rounded-none border-0 border-b border-[#f4a950] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#f4a950] transition-colors duration-200"
              >
                <option value="" className="text-[#555555] dark:text-white">
                  Select country/region
                </option>
                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                <option value="GBR">United Kingdom</option>
              </select>
              {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-[#555555] dark:text-white font-medium mb-1">
                What is your message?
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type something..."
                value={formData.message}
                onChange={handleTextArea}
                rows={4}
                className="w-full bg-transparent text-black dark:text-white placeholder-[#555555] dark:placeholder-white px-0 py-3 rounded-none border-0 border-b border-[#f4a950] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#f4a950] transition-colors duration-200"
              />
            </div>

            <div className="text-sm text-[#555555] space-y-4 dark:text-white">
              <p>
                Your personal data will be processed in accordance with our{" "}
                <a href="/privacy" className="underline text-[#f4a950] hover:text-[#f4a950]">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <BorderButton
                text="Submit"
                fullWidth
                variant="filled"
                onClick={() => formRef.current?.requestSubmit()}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
