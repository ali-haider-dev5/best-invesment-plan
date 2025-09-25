'use client'
import React, { useState, ChangeEvent } from 'react';

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

// Gradient Border Container Component
const GradientBorderContainer: React.FC<{ 
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Gradient Border Lines - Vertical lines extend beyond horizontal */}
      <div className="absolute left-0 top-8 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute left-0 bottom-8 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      
      {/* Content with proper spacing for border extensions */}
      <div className="px-8 pt-12 pb-12">
        {children}
      </div>
    </div>
  );
};

// Gradient Input Component
const GradientInput: React.FC<{
  type?: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
  error?: string;
}> = ({ type = "text", id, name, value, onChange, label, required, error }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-[#555555] dark:text-white font-medium">
        {label}
        {required && <span className="text-[#f4a950]">*</span>}
      </label>
      <div className="relative">
        {/* Input border lines */}
        <div className="absolute left-0 top-2 h-px w-full bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        <div className="absolute left-0 bottom-2 h-px w-full bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        <div className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        <div className="absolute right-2 top-0 w-px h-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-4 pt-6 pb-6 bg-white dark:bg-[#0f131b] border-none outline-none text-[#0f172a] dark:text-white focus:ring-2 focus:ring-[#f4a950] transition-all"
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

// Gradient Select Component
const GradientSelect: React.FC<{
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
}> = ({ id, name, value, onChange, label, options, required, error }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-[#555555] dark:text-white font-medium">
        {label}
        {required && <span className="text-[#f4a950]">*</span>}
      </label>
      <div className="relative">
        {/* Select border lines */}
        <div className="absolute left-0 top-2 h-px w-full bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        <div className="absolute left-0 bottom-2 h-px w-full bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        <div className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        <div className="absolute right-2 top-0 w-px h-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-4 pt-6 pb-6 bg-white dark:bg-[#0f131b] border-none outline-none text-[#0f172a] dark:text-white focus:ring-2 focus:ring-[#f4a950] transition-all appearance-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-[#555555] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

// Gradient Textarea Component
const GradientTextarea: React.FC<{
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  rows?: number;
}> = ({ id, name, value, onChange, label, rows = 4 }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-[#555555] dark:text-white font-medium">
        {label}
      </label>
      <div className="relative">
        {/* Textarea border lines */}
        <div className="absolute left-0 top-2 h-px w-full bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        <div className="absolute left-0 bottom-2 h-px w-full bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        <div className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        <div className="absolute right-2 top-0 w-px h-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
        
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className="w-full p-4 pt-6 pb-6 bg-white dark:bg-[#0f131b] border-none outline-none resize-none text-[#0f172a] dark:text-white focus:ring-2 focus:ring-[#f4a950] transition-all"
        />
      </div>
    </div>
  );
};

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
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
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
  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      alert('Form submitted successfully! Check the console for the data.');
    } else {
      console.log('Form has errors:', formErrors);
    }
  };

  const countryOptions = [
    { value: '', label: 'Select country/region' },
    { value: 'USA', label: 'United States' },
    { value: 'CAN', label: 'Canada' },
    { value: 'GBR', label: 'United Kingdom' },
    { value: 'AUS', label: 'Australia' },
    { value: 'DEU', label: 'Germany' },
    { value: 'FRA', label: 'France' },
    { value: 'JPN', label: 'Japan' },
    { value: 'IND', label: 'India' },
    { value: 'BRA', label: 'Brazil' },
  ];

  return (
    <div className="bg-[#f4f4f4] dark:bg-[#1a2334] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex flex-col lg:flex-row gap-8">
        {/* Left Column - Contact Information */}
        <div className="lg:w-1/2 flex flex-col justify-center p-4 md:p-12">
          <p className="text-[#555555] dark:text-white font-medium text-sm uppercase tracking-wider">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-[#f4a950]">
            Get in touch
          </h1>
          <p className="text-[#1f2937] dark:text-white mt-6 max-w-md text-lg leading-relaxed">
            Looking to get in touch with someone at PolyAI?
          </p>
          
          <div className="w-full h-px bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400 my-8"></div>
          
          <div className="space-y-6 text-lg">
            <div>
              <span className="font-semibold text-[#f4a950]">Sales:</span> 
              <a href="mailto:sales@polyai.ai" className="ml-2 text-[#555555] dark:text-white hover:text-[#f4a950] transition-colors">
                sales@polyai.ai
              </a>
            </div>
            <div>
              <span className="font-semibold text-[#f4a950]">Recruitment:</span> 
              <a href="mailto:talent@polyai.ai" className="ml-2 text-[#555555] dark:text-white hover:text-[#f4a950] transition-colors">
                talent@polyai.ai
              </a>
            </div>
            <div>
              <span className="font-semibold text-[#f4a950]">Press:</span> 
              <a href="mailto:media@polyai.ai" className="ml-2 text-[#555555] dark:text-white hover:text-[#f4a950] transition-colors">
                media@polyai.ai
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-1/2">
          <GradientBorderContainer className="bg-[#f4a95061] dark:bg-[#0f131b]">
            <div className="space-y-6">
              <GradientInput
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                label="What is your first name?"
                required
                error={formErrors.firstName}
              />

              <GradientInput
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                label="What is your last name?"
                required
                error={formErrors.lastName}
              />

              <GradientInput
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                label="Where do you work? Company name"
                required
                error={formErrors.companyName}
              />

              <GradientInput
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                label="What is your work email address?"
                required
                error={formErrors.emailAddress}
              />

              <GradientInput
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                label="What is your phone number?"
                required
                error={formErrors.phoneNumber}
              />

              <GradientSelect
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                label="Where are you located?"
                options={countryOptions}
                required
                error={formErrors.country}
              />

              <GradientTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                label="What is your message?"
                rows={4}
              />

              {/* Privacy policy text */}
              <div className="text-sm text-[#555555] dark:text-white">
                <p>
                  Your personal data will be processed in accordance with our{' '}
                  <a href="#" className="underline text-[#f4a950] hover:text-[#f4a950]/80 transition-colors">
                    Privacy Policy
                  </a>.
                </p>
              </div>

              {/* Submit button */}
              <div className="relative pt-4">
                <div className="absolute left-0 top-6 h-px w-full bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
                <div className="absolute left-0 bottom-2 h-px w-full bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
                <div className="absolute left-2 top-4 w-px h-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
                <div className="absolute right-2 top-4 w-px h-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400" />
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-[#f4a950] text-white font-bold py-4 pt-8 pb-8 hover:brightness-95 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </GradientBorderContainer>
        </div>
      </div>
    </div>
  );
}