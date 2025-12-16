import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
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
      setFullName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="w-full bg-[#f6f5f3] font-sans text-[#1A1A1A] rounded-2xl">
      {/* Header */}
      <div className="bg-white py-20 px-4 text-center border-b border-gray-100 rounded-2xl">
        <h1 className="text-5xl font-bold text-[#1A1A1A] mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto font-light">
          Have a question or a craving? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Contact Details</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Reach out to our support team for any queries about orders, partnerships, or just to say hello.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-red-50 p-3 rounded-full mr-6">
                  <MapPin className="w-6 h-6 text-[#d31b27]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Our Office</h3>
                  <p className="text-gray-600">Thimphu<br />Olakha, FT 54321</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-50 p-3 rounded-full mr-6">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-sm text-gray-400 mt-1">Mon-Fri 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-green-50 p-3 rounded-full mr-6">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-gray-600">support@foodora.com</p>
                  <p className="text-sm text-gray-400 mt-1">24/7 Response Time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-[#1A1A1A]">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ugyen"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d31b27] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d31b27] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d31b27] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {formSubmitted && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center justify-center gap-2">
                  <CheckCircle2 size={20} />
                  <span className="font-medium">Message sent successfully!</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all transform flex items-center justify-center gap-2 text-lg
                ${isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#d31b27] hover:bg-[#b9151f] hover:-translate-y-1 hover:shadow-xl'
                  }`}
              >
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;