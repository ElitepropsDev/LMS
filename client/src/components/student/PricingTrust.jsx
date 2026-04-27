import React from 'react';

const PricingTrust = () => {
  return (
    /* 1. pt-0: Removes the top internal space 
       2. -mt-16: Pulls the section up to snap against the previous one
       3. md:mt-0: Keeps it normal on desktop
    */
    <section className="pt-0 pb-16 bg-white -mt-16 md:mt-0">
      <div className="max-w-6xl mx-auto px-7 text-center">
        
        {/* Header - Reduced mb-8 to bring the cards closer to the title */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Quality education, that stays <span className="text-blue-600">  affordable and flexible</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            We make learning accessible so students can start without financial barriers.
          </p>
        </div>

        {/* Increased gap-4 for mobile cards so they don't look cluttered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Feature 1 */}
          <div className="p-6 md:p-8 rounded-3xl border border-gray-100 bg-gray-50/30">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png" className="w-7 h-7 object-contain" alt="Pay" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Pay-As-You-Need</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              No subscriptions — pay only for the modules you need.
            </p>
          </div>

          {/* Feature 2: Voucher System */}
          <div className="p-6 md:p-8 rounded-3xl border-2 border-blue-600 bg-blue-50/20 relative md:scale-105 shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase">
              Most Popular
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png" className="w-7 h-7 object-contain" alt="Voucher" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Easy Payment</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Simple payments via bank transfer, USSD, or agent banking. 
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 md:p-8 rounded-3xl border border-gray-100 bg-gray-50/30">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/555/555541.png" className="w-7 h-7 object-contain" alt="Scholarship" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Discounts & Vouchers </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              From time to time, enjoy discounts or free vouchers for selected modules. 
            </p>
          </div>

        </div>

        {/* Local Payment Details */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-60">
            <span className="text-xs font-bold text-gray-600">Bank Transfer</span>
            {/* <span className="text-xs font-bold text-gray-600">USSD *556#</span> */}
            <span className="text-xs font-bold text-gray-600">POS/Agency Banking</span>
        </div>
      </div>
    </section>
  );
};

export default PricingTrust;