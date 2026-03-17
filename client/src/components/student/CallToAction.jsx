import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='pb-0 px-0'>
      {/* Sharp edges (no border radius) with Sky Blue Gradient */}
      <div className='relative bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 py-20 px-8 md:px-16 overflow-hidden shadow-xl'>
        
        {/* Abstract light effects for depth */}
        <div className='absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full -ml-32 -mt-32 blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-80 h-80 bg-sky-300/30 rounded-full -mr-20 -mb-20 blur-3xl'></div>

        <div className='relative flex flex-col items-center text-center gap-6 max-w-4xl mx-auto'>
          
          <span className='bg-white/30 backdrop-blur-md text-white text-[11px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest border border-white/40'>
            Limited Slots for 2026 Session
          </span>

          <h1 className='text-3xl md:text-5xl text-white font-extrabold leading-tight'>
            Master Your Subjects Offline. <br /> 
            <span className='text-sky-100'>No Data? No Problem.</span>
          </h1>

          <p className='text-white/90 text-sm md:text-xl max-w-2xl font-medium'>
            Join the elite circle of Nigerian students using the #1 offline learning app to pass WAEC, JAMB, and NECO with flying colors.
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-6 mt-6 w-full sm:w-auto'>
            <button className='w-full sm:w-auto px-12 py-4 text-sky-600 bg-white font-black text-lg shadow-2xl hover:bg-sky-50 hover:-translate-y-1 transition-all duration-300'>
              GET STARTED FOR FREE
            </button>

            <button className='flex items-center justify-center gap-2 text-white font-bold text-lg group'>
              See Our Success Stories
              <img src={assets.arrow_icon} alt="arrow_icon" className='brightness-0 invert w-4 group-hover:translate-x-2 transition-transform' />
            </button>
          </div>

          {/* Social Proof / Features */}
          <div className='mt-10 pt-10 border-t border-white/20 w-full flex flex-wrap justify-center gap-8 text-white/80 text-xs md:text-sm font-bold'>
             <div className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-green-400 rounded-full animate-ping'></span>
                Over 12,000 Students Online Now
             </div>
             <div>• USSD Payment Enabled</div>
             <div>• Parents' Dashboard Included</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction