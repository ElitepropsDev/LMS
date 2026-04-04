import React from 'react';
import { assets } from '../../assets/assets';

const TestimonialsSection = () => {
  const nigerianTestimonials = [
    {
      name: "Olawale Adeyemi",
      // role: "SS3 Student, Oyo State",
      // High-quality African male portrait
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&h=200&q=80", 
      rating: 5,
      feedback: "This program helped me understand advanced maths concepts clearly and at my own pace."
    },
    {
  name: "Chiamaka Okoro",
  // role: "JAMB Candidate, Enugu",
  // Updated reliable high-quality portrait
  image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&w=200&h=200&q=80", 
  rating: 5,
  feedback: "I feel more confident tackling STEM and digital skills modules than I did before"
},
    {
      name: "Musa Ibrahim",
      // role: "WAEC Student, Kano",
      // High-quality African male portrait
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      feedback: "The self-paced lessons made learning easy to fit around school and other activities."
    }
  ];

  return (
    <div className="pt-0 pb-16 px-8 md:px-0 -mt-20 md:mt-0 max-w-6xl mx-auto">
      <div className="text-center md:text-left mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">Success Stories from Nigeria</h2>
        <p className="md:text-base text-gray-500 mt-2 max-w-2xl">
          See how our students are building confidence, mastering new skills, and preparing for the next step in their education.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nigerianTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group relative text-sm text-left border border-gray-100 pb-8 rounded-3xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex items-center gap-4 px-6 py-5">
              <div className="relative flex-shrink-0">
                <img 
                  className="h-14 w-14 rounded-full object-cover border-2 border-blue-50 shadow-sm" 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                />
                <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800 leading-none">{testimonial.name}</h3>
                <p className="text-blue-600 font-semibold text-[10px] uppercase mt-1.5 tracking-wide">{testimonial.role}</p>
              </div>
            </div>

            <div className="px-6">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-3"
                    key={i}
                    src={i < testimonial.rating ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic text-[13px]">
                "{testimonial.feedback}"
              </p>
              
              <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
                 {/* <button className="text-blue-600 font-bold text-[11px] hover:underline flex items-center gap-1">
                   View Result <span>→</span>
                 </button> */}
                 <span className="text-[10px] text-gray-400 font-medium bg-gray-50 px-2.5 py-1 rounded-lg">Verified Learner</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;