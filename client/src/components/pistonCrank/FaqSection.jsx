import React, { useState } from 'react';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Do I need to buy expensive tools or diagnostic gadgets?",
      a: "No. Excel TechTrade is structured specifically to be low-footprint. You do not need to purchase any expensive gear, machinery, or heavy tools to independently master and practice these specialized modules."
    },
    {
      q: "Can I really start earning in as little as 3 weeks?",
      a: "Yes. Our curriculum cuts out the standard roadside errand-running loops and rigid academic theory. We focus entirely on high-demand, specialized diagnostic execution so you can partner or offer services immediately."
    },
    {
      q: "Does my educational background matter?",
      a: "Not at all. Whether you have an SSCE (Arts or Science), an OND/HND, a University Degree, or no formal background, our structured framework is built to guide you completely from scratch."
    }
  ];

  return (
    <section className="relative bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-3xl mx-auto relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
            Clear Doubts
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="backdrop-blur-md bg-white/[0.01] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base uppercase tracking-wide text-slate-200">
                    {faq.q}
                  </span>
                  <span className={`text-purple-400 text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    ＋
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-white/5' : 'max-h-0'}`}
                >
                  <p className="p-5 text-sm text-slate-400 leading-relaxed bg-slate-900/20">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}