import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, Heart, User, Zap, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full bg-[#f6f5f3] font-sans text-[#1A1A1A] rounded-2xl">
      {/* Hero Section */}
      <div className="w-full bg-white py-20 px-4 sm:px-8 text-center border-b border-gray-100 rounded-2xl">
        <h1 className="text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
          Welcome to <span className="text-[#d31b27]">FOODORA</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
          Your daily food adventure starts here. Bringing the best local flavors right to your doorstep.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-20">

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A] border-l-4 border-[#d31b27] pl-4">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              FOODORA was born from a simple idea: good food should be easy to find and a joy to order.
              We saw a world full of amazing local restaurants and passionate chefs, but not everyone
              had the time to discover them.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We wanted to bridge that gap, carefully curating a selection of the finest eateries
              and ensuring that every meal delivered retains its chef's intended perfection.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Cooking"
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <p className="text-center italic text-gray-500">"Food is symbol of love when words are inadequate."</p>
          </div>
        </section>

        {/* Our Values */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#d31b27] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-[#d31b27]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Love</h3>
              <p className="text-gray-600">Championing neighborhood eateries and supporting local businesses.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">Delivering only the freshest dishes with strict quality checks.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Speed & Service</h3>
              <p className="text-gray-600">Hot, fresh, and reliable delivery every single time.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#1A1A1A] text-white rounded-3xl p-12 overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Choose FOODORA?</h2>
              <ul className="space-y-6">
                {[
                  { title: "Vast Selection", desc: "Thousands of dishes from comfort food to gourmet." },
                  { title: "Easy Ordering", desc: "A simple, intuitive app designed for your convenience." },
                  { title: "Fast Delivery", desc: "Friendly riders ensuring your food arrives hot." },
                  { title: "Local Focus", desc: "We find the hidden gems in your neighborhood." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#d31b27] p-1 rounded-full mr-4 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-lg block">{item.title}</span>
                      <span className="text-gray-400">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Selection"
                className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/10"
              />
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Meet the Team</h2>
            <p className="text-gray-500 mt-2">The people behind the flavor.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: "Ugyen", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { name: "Dilliram", role: "Head of Tech", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { name: "Govinda", role: "Head of Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-[#d31b27] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-lg relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#d31b27] p-3 rounded-full text-white">
            <Star className="w-8 h-8 fill-current" />
          </div>
          <blockquote className="text-2xl font-serif italic text-gray-700 mb-6 mt-4">
            "FOODORA has completely changed our weeknight dinners! The app is so easy to use,
            and we've discovered so many amazing local restaurants."
          </blockquote>
          <div className="font-bold text-[#1A1A1A]">- Sarah J.</div>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <Link to={"/restaurant"}>
            <button className="bg-[#d31b27] hover:bg-[#b9151f] text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-lg">
              Explore Restaurants
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default About;
