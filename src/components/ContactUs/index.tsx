import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreeMessages: false,
    consentData: false,
  });

  // Typing for handleChange with type guarding
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement; // Narrow the type to HTMLInputElement for checkbox
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      // For text inputs and textareas
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className='flex flex-col'>
      <div className="w-full bg-[#f4f4f4] text-white text-center py-12 mb-6 rounded-t-lg">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p className="text-xl mt-2">Let’s Talk!</p>
      </div>
      <div className="flex gap-3 items-center p-10 bg-gray-100">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full sm:w-2/3 lg:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border  border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />

          <textarea
            name="message"
            placeholder="Type something..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />

          <div className="space-y-2 mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreeMessages"
                checked={formData.agreeMessages}
                onChange={handleChange}
                className="mr-2"
              />
              I agree to receive other communication messages.
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="consentData"
                checked={formData.consentData}
                onChange={handleChange}
                className="mr-2"
              />
              I give my consent to store my data.
            </label>
          </div>

          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </form>

        {/* Quick Contact Section */}
        <div className="w-full sm:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
          <p className="text-gray-600">Email: info@roi4presenter.com</p>
          <p className="text-gray-600">Phone: Austria +43 (664) 6376611 | US +1 (669) 4993865</p>
          <p className="text-gray-600">Headquarters: Wallgasse 13/PF42 1060 Vienna, Austria</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
