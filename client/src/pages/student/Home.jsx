import React from 'react';
import Footer from '../../components/student/Footer';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import CoursesSection from '../../components/student/CoursesSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CallToAction from '../../components/student/CallToAction';
import ProgramPreview from '../../components/student/ProgramPreview';
import FeatureHighlights from '../../components/student/FeatureHighlights';
import UpcomingSessions from '../../components/student/UpcomingSessions';
import OfflineFeatures from '../../components/student/OfflineFeatures';
import ProgressTracking from '../../components/student/ProgressTracking';
import PricingTrust from '../../components/student/PricingTrust';

const Home = () => {

  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      {/* <Companies /> */}
      {/* <CoursesSection /> */}
      <ProgramPreview />
      <FeatureHighlights />
      <UpcomingSessions />
      <OfflineFeatures />
      <ProgressTracking />
      <PricingTrust />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
