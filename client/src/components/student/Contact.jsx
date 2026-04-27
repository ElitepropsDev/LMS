import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission goes here
    console.log("Form Submitted:", formData);
    alert("Message sent! We will get back to you shortly.");
  };
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-white md:pt-32 pt-24 pb-20 px-7 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        {/* Header Section - Now centered on mobile */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-3">
            Get in Touch
          </h2>
          <h1 className="md:text-5xl text-3xl font-black text-slate-800 leading-tight">
            Join the students <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {" "}
              Success platform
            </span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto md:mx-0 font-medium text-sm md:text-base">
            Have questions or need any help on our platform, reach out and lets
            help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE: CONTACT FORM */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-black uppercase text-slate-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-slate-400 mb-2">
                  How can we help?
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your learning goals..."
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: CONTACT INFO & SOCIALS */}
          <div className="space-y-8 lg:pl-10">
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 uppercase text-xs">
                    Email Us
                  </h4>
                  <p className="text-slate-500 font-medium">
                    support@excelnavigo.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 uppercase text-xs">
                    WhatsApp
                  </h4>
                  <p className="text-slate-500 font-medium">+4917662828919 </p>
                </div>
              </div>

              {/* <div className="flex items-start gap-5">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-black text-slate-800 uppercase text-xs">Location</h4>
                  <p className="text-slate-500 font-medium">Nigeria (Remote & Hybrid Learning)</p>
                </div>
              </div> */}
            </div>

            {/* QUICK CTA CARD */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Join our student success platform today and get a head start
                  on your academic sucess and goals.
                </p>
                <Link
                  to={user ? "/dashboard" : "/login"}
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-400 hover:text-blue-300"
                >
                  Get Started <Phone size={14} />
                </Link>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
