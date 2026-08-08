import React, { useState } from 'react';

export default function ActionSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    email: '',
    city: '',
    location: '',
    educationLevel: '',
    tradeInterest: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // STUDENT WHATSAPP ROUTE (PRESERVED)
  const handleStudentSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Student Application Profile* 🚀\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📞 *WhatsApp:* ${formData.whatsappNumber}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `🏙️ *City:* ${formData.city}\n` +
      `📍 *Area/Address:* ${formData.location}\n` +
      `🎓 *Education:* ${formData.educationLevel}\n` +
      `🛠️ *Trade Interest:* ${formData.tradeInterest}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349166354181?text=${encodedMessage}`, '_blank');
  };

  // WORKSHOP PARTNER REDIRECT (PRESERVED)
  const handleWorkshopRedirect = () => {
    const message = encodeURIComponent("Hello PistonCrank, I am a workshop/garage owner and I would love to partner with you.");
    window.open(`https://wa.me/2349166354181?text=${message}`, '_blank');
  };

  return (
    <section id="form" className="relative bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      
      {/* INJECTED PINK & DEEP VIOLET BASE RADIUS GLOW */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 60%, rgba(219, 39, 119, 0.35) 0%, transparent 55%)
          `
        }}
      />

      <div className="max-w-xl mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-pink-400 uppercase bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
            Interested?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Apply For Program Details
          </h2>
          <p className="text-slate-400 text-sm">
            Fill out the form below and we will contact you with the detailed program info.
          </p>
        </div>

        <div className="space-y-6">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-pink-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all uppercase"
            >
              🚀 Apply Now to Master a TechTrade
            </button>
          )}

          {showForm && (
            <form onSubmit={handleStudentSubmit} className="backdrop-blur-md bg-slate-900/40 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-sm font-bold tracking-wide uppercase text-pink-400">Student Application Form</h3>
                <button type="button" onClick={() => setShowForm(false)} className="text-xs text-slate-400 hover:text-white">Cancel</button>
              </div>

              {/* FULL NAME */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                <input 
                  type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              {/* WHATSAPP NUMBER */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">WhatsApp Phone Number</label>
                <input 
                  type="tel" name="whatsappNumber" required value={formData.whatsappNumber} onChange={handleInputChange}
                  placeholder="e.g., 08012345678"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              {/* EMAIL ADDRESS */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              {/* CITY DROPDOWN */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">City</label>
                <select name="city" required value={formData.city} onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="" disabled>Select City</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                </select>
              </div>

              {/* WHERE DO YOU LIVE? */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Where do you live?</label>
                <input 
                  type="text" name="location" required value={formData.location} onChange={handleInputChange}
                  placeholder="e.g., Gbagada, Ikeja, Jahi"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              {/* HIGHEST EDUCATION LEVEL */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Highest Education Level</label>
                <select name="educationLevel" required value={formData.educationLevel} onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="" disabled>Select Education Level</option>
                  <option value="University Graduate">University Graduate</option>
                  <option value="Secondary School">Secondary School</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* COURSE INTERESTED IN */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Course Interested In</label>
                <select name="tradeInterest" required value={formData.tradeInterest} onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="" disabled>Select a Course</option>
                  <option value="Auto Diagnostics">Auto Diagnostics</option>
                  <option value="Auto Preventive Maintenance">Auto Preventive Maintenance</option>
                  <option value="Auto Painting">Auto Painting</option>
                  <option value="Residential AC & Fridge Maintenance">Residential AC & Fridge Maintenance</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm tracking-wide hover:opacity-90 transition-opacity uppercase"
              >
                Submit Application via WhatsApp ⚡
              </button>
            </form>
          )}

          <button
            onClick={handleWorkshopRedirect}
            className="w-full py-4 rounded-xl bg-transparent border border-teal-500/40 text-teal-400 font-bold text-sm tracking-wide hover:bg-teal-500/5 hover:border-teal-400 active:scale-[0.99] transition-all uppercase"
          >
            🛠️ I own/manage a workshop (Partner with us)
          </button>
        </div>
      </div>
    </section>
  );
}