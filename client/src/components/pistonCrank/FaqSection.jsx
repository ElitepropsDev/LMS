import React, { useState } from 'react';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    // AUTO DIAGNOSTICS (2 Questions)
    {
      q: "Do I need to own an expensive diagnostic scanner for Auto Diagnostics?",
      a: "No. You will learn using diagnostic gadgets and computers during training. You do not need to buy costly equipment upfront to get started."
    },
    {
      q: "Will I learn how to perform vehicle computer resets?",
      a: "Yes. The Auto Diagnostics module covers using smart gadgets to detect vehicle faults as well as executing complete computer resets."
    },

    // PREVENTIVE MAINTENANCE (2 Questions)
    {
      q: "Does Preventive Maintenance cover heavy engine overhauls?",
      a: "No. This module focuses strictly on high-frequency, quick-turnaround services like fluid management, oil servicing, and replacing simple parts (fuses, bulbs, pads)."
    },
    {
      q: "Is Preventive Maintenance easy to commercialize quickly?",
      a: "Yes. Because these are routine services every vehicle needs regularly, you can begin offering basic maintenance tasks shortly after training."
    },

    // CAR PAINTING (2 Questions)
    {
      q: "What specific painting skills are covered in the training?",
      a: "You will master essential surface preparation, filler application, proper sanding sequences, and precise masking for professional finishes."
    },
    {
      q: "Can Car Painting skills be applied to other industries?",
      a: "Directly, yes. The surface prep, sanding, and coating techniques transfer smoothly into high-end interior finishing and custom furniture painting."
    },

    // RESIDENTIAL AC & FRIDGE (2 Questions)
    {
      q: "Will I learn how to detect and refill gas leaks in AC units?",
      a: "Yes. The Residential AC & Fridge module explicitly covers routine servicing, finding gas leaks, and properly refilling system gas."
    },
    {
      q: "Do I need an engineering degree to learn AC and fridge repair?",
      a: "Not at all. Your educational background does not matter; the training is fully practical and structured for all learning levels."
    }
  ];

  return (
    <section section id="faq" className="relative bg-slate-950 text-white py-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
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
                  <span className="font-semibold text-sm sm:text-base tracking-wide text-slate-200">
                    {faq.q}
                  </span>
                  <span className={`text-purple-400 text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    ＋
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 border-t border-white/5' : 'max-h-0'}`}
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