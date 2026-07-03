import React, { useState } from 'react';

export default function ActionSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    educationLevel: '',
    tradeInterest: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 1. UPDATED STUDENT WHATSAPP ROUTE (OPTION A)
  const handleStudentSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Student Application Profile* 🚀\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📞 *WhatsApp:* ${formData.whatsappNumber}\n` +
      `🎓 *Education:* ${formData.educationLevel}\n` +
      `🛠️ *Trade Interest:* ${formData.tradeInterest}\n` +
      `📍 *Location:* ${formData.location}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349166354181?text=${encodedMessage}`, '_blank');
  };

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
            Take Action
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Select Your Pathway
          </h2>
          <p className="text-slate-400 text-sm">
            Are you looking to master a trade, or do you run an existing facility?
          </p>
        </div>

        <div className="space-y-6">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-pink-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all uppercase"
            >
              🚀 I want to master a TechTrade
            </button>
          )}

          {showForm && (
            <form onSubmit={handleStudentSubmit} className="backdrop-blur-md bg-slate-900/40 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-sm font-bold tracking-wide uppercase text-pink-400">Student Interest Profile</h3>
                <button type="button" onClick={() => setShowForm(false)} className="text-xs text-slate-400 hover:text-white">Cancel</button>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                <input 
                  type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">WhatsApp Phone Number</label>
                <input 
                  type="tel" name="whatsappNumber" required value={formData.whatsappNumber} onChange={handleInputChange}
                  placeholder="e.g., 08012345678"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Highest Education Level</label>
                <select name="educationLevel" required value={formData.educationLevel} onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="" disabled>Select Education Level</option>
                  <option value="SSCE (Science)">SSCE (Science)</option>
                  <option value="SSCE (Arts / Commercial)">SSCE (Arts / Commercial)</option>
                  <option value="OND / HND / (Science/Tech)">OND / HND / (Science/Tech)</option>
                  <option value="OND / HND / (Arts/Commercial)">OND / HND / (Arts/Commercial)</option>
                  <option value="University Grad (Science/Eng.)">University Grad (Science/Eng.)</option>
                  <option value="University Grad (Art/Social Science)">University Grad (Art/Social Science)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Trade / Course of Interest</label>
                <select name="tradeInterest" required value={formData.tradeInterest} onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="" disabled>Select a Course</option>
                  <option value="Automotive Service & Maintenance">Automotive Service & Maintenance</option>
                  <option value="Automotive Air Conditioning Service & Maintenance">Automotive Air Conditioning Service & Maintenance</option>
                  <option value="Residential Air Conditioning Service & Maintenance">Residential Air Conditioning Service & Maintenance</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Location</label>
                <input 
                  type="text" name="location" required value={formData.location} onChange={handleInputChange}
                  placeholder="e.g., Surulere, Lekki"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
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