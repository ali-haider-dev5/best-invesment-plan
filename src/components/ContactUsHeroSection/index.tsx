'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define types for formData and formErrors
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
  // Define form data and form errors state with types
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    emailAddress: '',
    phoneNumber: '',
    country: '',
    message: '',
    agreed: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Handle input changes with proper types
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // For all inputs and selects, just update the value
    }));
  };

  // Validate form inputs
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.firstName) errors.firstName = 'Please complete this required field.';
    if (!formData.lastName) errors.lastName = 'Please complete this required field.';
    if (!formData.companyName) errors.companyName = 'Please complete this required field.';
    if (!formData.emailAddress) errors.emailAddress = 'Please complete this required field.';
    if (!formData.phoneNumber) errors.phoneNumber = 'Please complete this required field.';
    if (!formData.country) errors.country = 'Please complete this required field.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      alert('Form submitted successfully! Check the console for the data.');
    } else {
      console.log('Form has errors:', formErrors);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] dark:bg-[#1a2334] text-white p-4 sm:p-8 md:p-16 flex flex-col items-center justify-center">
      <div className="rounded-2xl max-w-7xl w-full flex flex-col lg:flex-row">
        <div className="p-8 md:p-12 lg:w-1/2 flex flex-col">
          <p className="text-[#555555] dark:text-white font-medium">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 text-[#f4a950] ">Get in touch</h1>
          <p className="text-[#1f2937] mt-4 max-w-sm text-lg dark:text-white">
            Looking to get in touch with someone at PolyAI?
          </p>
          <div className="border-t border-gray-700 my-8"></div>
          <div className="space-y-4 text-[#555555] text-lg">
            <div>
              <span className="font-semibold text-[#f4a950]">Sales:</span> <a href="mailto:sales@polyai.ai" className="hover:text-white dark:text-white transition-colors">sales@polyai.ai</a>
            </div>
            <div>
              <span className="font-semibold text-[#f4a950]">Recruitment:</span> <a href="mailto:talent@polyai.ai" className="hover:text-white dark:text-white transition-colors">talent@polyai.ai</a>
            </div>
            <div>
              <span className="font-semibold text-[#f4a950]">Press:</span> <a href="mailto:media@polyai.ai" className="hover:text-white dark:text-white transition-colors">media@polyai.ai</a>
            </div>
          </div>
        </div>

        <div className="bg-[#f4a95061] p-8 md:p-12 rounded-lg lg:w-1/2">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-[#555555] dark:text-white font-medium mb-1">
                What is your first name?<span className="text-green-400">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white dark:bg-[#0f131b] text-white rounded-md p-3 border-none focus:outline-none focus:ring-2 focus:text-[#f4a950] transition-all"
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-[#555555] dark:text-white font-medium mb-1">
                What is your last name?<span className="text-green-400">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white dark:bg-[#0f131b] text-white rounded-md p-3 border-none focus:outline-none focus:ring-2 focus:text-[#f4a950] transition-all"
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="companyName" className="text-[#555555] dark:text-white font-medium mb-1">
                Where do you work? Company name<span className="text-[#0ea5e9]">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="bg-white dark:bg-[#0f131b] text-white rounded-md p-3 border-none focus:outline-none focus:ring-2 focus:text-[#f4a950] transition-all"
              />
              {formErrors.companyName && (
                <p className="text-red-500 text-sm mt-1">{formErrors.companyName}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="emailAddress" className="text-[#555555] dark:text-white font-medium mb-1">
                What is your work email address?<span className="text-green-400">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="bg-white dark:bg-[#0f131b] text-white rounded-md p-3 border-none focus:outline-none focus:ring-2 focus:text-[#f4a950] transition-all"
              />
              {formErrors.emailAddress && (
                <p className="text-red-500 text-sm mt-1">{formErrors.emailAddress}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="text-[#555555] dark:text-white font-medium mb-1">
                What is your phone number?<span className="text-green-400">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-white dark:bg-[#0f131b] text-[#1f2938] rounded-md p-3 border-none focus:outline-none focus:ring-2 focus:text-[#f4a950] transition-all"
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="country" className="text-[#555555] dark:text-white font-medium mb-1">
                Where are you located?<span className="text-[#0ea5e9]">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="bg-white dark:bg-[#0f131b] text-[#1f2938] rounded-md p-3 border-none focus:outline-none focus:ring-2 focus:text-[#f4a950] transition-all"
              >
                <option value="">Select country/region</option>
                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                <option value="GBR">United Kingdom</option>
              </select>
              {formErrors.country && (
                <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-[#555555] dark:text-white font-medium mb-1">
                What is your message?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white dark:bg-[#0f131b] text-white rounded-md p-3 border-none focus:outline-none focus:ring-2 focus:text-[#f4a950] transition-all resize-none"
              ></textarea>
            </div>

            {/* Privacy policy and promotional messages checkbox */}
            <div className="text-sm text-[#555555] space-y-4 dark:text-white">
              <p className='text-[#555555] dark:text-white'>
                Your personal data will be processed in accordance with our <a href="#" className="underline text-[#f4a950] hover:text-[#f4a950]">Privacy Policy</a>.
              </p>
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#f4a950] text-white font-bold py-3 rounded-full hover:bg-[#f4a950] transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
