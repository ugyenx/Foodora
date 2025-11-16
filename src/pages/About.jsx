import { Ds3ToolFreeIcons } from '@hugeicons/core-free-icons';
import React from 'react';
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
// (Simple, inline SVGs to avoid external dependencies)

const StarIcon = () => (
  <svg
    className="w-5 h-5 inline-block text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.846 5.673a1 1 0 00.95.69h5.968c.969 0 1.371 1.24.588 1.81l-4.83 3.522a1 1 0 00-.364 1.118l1.846 5.673c.3.921-.755 1.688-1.54 1.118l-4.83-3.522a1 1 0 00-1.176 0l-4.83 3.522c-.784.57-1.838-.197-1.54-1.118l1.846-5.673a1 1 0 00-.364-1.118L.588 11.09c-.783-.57-.38-1.81.588-1.81h5.968a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-6 h-6 inline-block text-green-500 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="w-10 h-10 text-[#e64048]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const BoltIcon = () => (
  <svg
    className="w-10 h-10 text-[#e64048]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const LeafIcon = () => (
  <svg
    className="w-10 h-10 text-[#e64048]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.121 14.121L12 16.242l-2.121-2.121m2.121-2.121L14.121 10 12 7.879 9.879 10m2.121 2.121L12 12m0 0l-2.121 2.121M12 12l2.121 2.121M12 12l2.121-2.121M12 12L9.879 9.879m2.121 2.121L12 12m0 0l-2.121 2.121m2.121-2.121L9.879 12m2.121 2.121L12 14.121m0 0L9.879 12m2.121 2.121L12 12m6 6l-6-6 6-6-6 6 6 6z"
    />
  </svg>
);

/**
 * The main About Us Page component.
 */
const About =() => {
  return (
    <div className="w-full min-h-screen bg-[#e6e0e0] py-12 px-4 sm:px-8">
      <div className="w-full max-w-4xl mx-auto p-8 sm:p-12 bg-[#f6f5f3] rounded-xl shadow-2xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#d31b27]">
            Welcome to FOODORA
          </h1>
          <p className="text-xl text-gray-600 mt-3">
            Your daily food adventure starts here.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="space-y-12 text-gray-700 leading-relaxed">
          {/* --- Our Story --- */}
          <section>
            <h2 className="text-3xl font-semibold text-[#e64048] mb-4">
              Our Story
            </h2>
            <p>
              FOODORA was born from a simple idea: good food should be easy to
              find and a joy to order. We saw a world full of amazing local
              restaurants and passionate chefs, but not everyone had the time to
              discover them. We wanted to bridge that gap, bringing the best
              local flavors right to your doorstep, one tap at a time.
            </p>
          </section>

          {/* --- Our Values --- */}
          <section>
            <h2 className="text-3xl font-semibold text-[#e64048] mb-6 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <HeartIcon />
                <h3 className="text-xl font-semibold mt-3 mb-1">Local Love</h3>
                <p className="text-sm">Championing neighborhood eateries.</p>
              </div>
              <div className="flex flex-col items-center">
                <LeafIcon />
                <h3 className="text-xl font-semibold mt-3 mb-1">
                  Quality First
                </h3>
                <p className="text-sm">Delivering only the freshest dishes.</p>
              </div>
              <div className="flex flex-col items-center">
                <BoltIcon />
                <h3 className="text-xl font-semibold mt-3 mb-1">
                  Speed & Service
                </h3>
                <p className="text-sm">Hot, fresh, and reliable every time.</p>
              </div>
            </div>
          </section>

          {/* --- Why Choose Us? --- */}
          <section>
            <h2 className="text-3xl font-semibold text-[#e64048] mb-6">
              Why Choose Us?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <CheckIcon />
                <div>
                  <span className="font-semibold">Vast Selection:</span> From
                  comfort food to exotic cuisine, discover thousands of dishes.
                </div>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <div>
                  <span className="font-semibold">Easy Ordering:</span> A simple,
                  intuitive app designed for your convenience.
                </div>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <div>
                  <span className="font-semibold">Fast Delivery:</span> Our
                  network of friendly riders ensures your food arrives hot and
                  fresh.
                </div>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <div>
                  <span className="font-semibold">Local Focus:</span> We champion
                  your neighborhood's favorite spots and hidden gems.
                </div>
              </li>
            </ul>
          </section>

          {/* --- Meet the Team --- */}
          <section>
            <h2 className="text-3xl font-semibold text-[#e64048] mb-6 text-center">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 rounded-full shadow-lg object-cover"
                  src="https://placehold.co/200x200/e6e0e0/d31b27?text=CEO"
                  alt="Founder Alex"
                />
                <h4 className="text-xl font-semibold mt-4">Alex Chen</h4>
                <p className="text-[#d31b27] font-medium">Founder & CEO</p>
              </div>
              {/* Team Member 2 */}
              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 rounded-full shadow-lg object-cover"
                  src="https://placehold.co/200x200/e6e0e0/d31b27?text=CTO"
                  alt="CTO Maria"
                />
                <h4 className="text-xl font-semibold mt-4">Maria Gomez</h4>
                <p className="text-[#d31b27] font-medium">Head of Tech</p>
              </div>
              {/* Team Member 3 */}
              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 rounded-full shadow-lg object-cover"
                  src="https://placehold.co/200x200/e6e0e0/d31b27?text=Ops"
                  alt="Ops Lead David"
                />
                <h4 className="text-xl font-semibold mt-4">David Lee</h4>
                <p className="text-[#d31b27] font-medium">Head of Operations</p>
              </div>
            </div>
          </section>

          {/* --- Customer Love --- */}
          <section>
            <h2 className="text-3xl font-semibold text-[#e64048] mb-6 text-center">
              A Word From Our Customers
            </h2>
            <div className="bg-[#e6e0e0] p-8 rounded-lg shadow-inner">
              <div className="flex justify-center mb-2">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <blockquote className="text-center text-xl italic text-gray-800">
                "FOODORA has completely changed our weeknight dinners! The app is
                so easy to use, and we've discovered so many amazing local
                restaurants we never knew existed."
              </blockquote>
              <p className="text-center font-semibold text-gray-700 mt-4">
                - Sarah J.
              </p>
            </div>
          </section>

          {/* Call to Action Button */}
          <div className="text-center pt-8">
            <Link to={"/restaurant"}>
              <button
                className={`py-3 px-8 text-lg font-bold text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5
                bg-[#d31b27] hover:bg-[#e64048] focus:outline-none focus:ring-2 focus:ring-[#e64048] focus:ring-offset-2`}
              >
                Start Your Order
              </button>
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <p className="text-center text-sm text-gray-600 mt-12">
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
export default About;
