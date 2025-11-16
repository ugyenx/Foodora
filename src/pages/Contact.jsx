import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Color palette from previous components
const COLORS = {
  primary: '#d31b27',
  myColor: '#e64048',
  softGray: '#f6f5f3',
  mainBg: '#e6e0e0',
  whiteB: '#f2f2f2',
};

// --- SVG Icon Components ---

const MapPinIcon = () => (
  <svg
    className="w-6 h-6 text-[#e64048] mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-6 h-6 text-[#e64048] mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EnvelopeIcon = () => (
  <svg
    className="w-6 h-6 text-[#e64048] mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

/**
 * A reusable input component for the contact form.
 */
function FormInput({ label, type, value, onChange, placeholder, id }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id || type}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id || type}
        name={id || type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e64048] focus:border-transparent transition-all duration-200"
      />
    </div>
  );
}

/**
 * The main Contact Us Page component.
 */
const Contact =() => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setFormSubmitted(false);

    // Simulate an API call
    console.log('Sending message:', { fullName, email, message });
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
      // Clear the form
      setFullName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-[#e6e0e0] py-12 px-4 sm:px-8">
      <div className="w-full max-w-4xl mx-auto p-8 sm:p-12 bg-[#f6f5f3] rounded-xl shadow-2xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#d31b27]">Get in Touch</h1>
          <p className="text-xl text-gray-600 mt-3">
            We'd love to hear from you!
          </p>
        </div>

        {/* Main Content: Grid for Info and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#e64048] mb-3">
                Contact Details
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Have a question or a craving? Reach out to us, and we'll get
                back to you as soon as possible.
              </p>
            </div>
            <div className="flex items-start">
              <MapPinIcon />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Our Office
                </h4>
                <p className="text-gray-600">123 Foodie Lane</p>
                <p className="text-gray-600">Flavor Town, FT 54321</p>
              </div>
            </div>
            <div className="flex items-start">
              <PhoneIcon />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start">
              <EnvelopeIcon />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@foodora.com</p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <FormInput
                label="Full Name"
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
              />
              <FormInput
                label="Email Address"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message here..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e64048] focus:border-transparent transition-all duration-200"
                ></textarea>
              </div>

              {/* Success Message */}
              {formSubmitted && (
                <div className="my-4 text-center text-sm font-medium text-green-600">
                  Thanks for your message! We'll be in touch soon.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 font-bold text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5
                ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#d31b27] hover:bg-[#e64048] focus:outline-none focus:ring-2 focus:ring-[#e64048] focus:ring-offset-2'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Back Link */}
        <p className="text-center text-sm text-gray-600 mt-16">
          <Link to={"/"}
            className="font-medium text-[#d31b27] hover:text-[#e64048] transition-colors duration-200"
          >
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Contact;