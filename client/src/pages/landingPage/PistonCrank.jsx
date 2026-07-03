import React from 'react'
import HeroSection from '../../components/pistonCrank/HeroSection'
import HeaderSection from '../../components/pistonCrank/HeaderSection'
import PitchSection from '../../components/pistonCrank/PitchSection'
import ActionSection from '../../components/pistonCrank/ActionSection'
import CurriculumSection from '../../components/pistonCrank/CurriculumSection'
import TrustSection from '../../components/pistonCrank/TrustSection'
import FaqSection from '../../components/pistonCrank/FaqSection'

const PistonCrank = () => {
  return (
    <div className="bg-slate-950 min-h-screen w-full text-white overflow-x-hidden antialiased relative">
      
      {/* ─── HIGH-INTENSITY NEON GLOW ORBS ─── */}
      {/* Top Left Hot Purple Glow */}
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Center Right Intense Indigo Glow */}
      <div className="absolute top-[22%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/25 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Mid Page Left Vibrant Fuchsia Core */}
      <div className="absolute top-[48%] left-[-15%] w-[450px] h-[450px] bg-fuchsia-500/20 rounded-full blur-[110px] pointer-events-none z-0" />
      
      {/* Bottom Center Bright Violet Base */}
      <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[130px] pointer-events-none z-0" />
      
      {/* ─── PAGE SECTIONS ─── */}
      <div className="relative z-10">
        <HeaderSection />
        <HeroSection />
        <PitchSection />
        <CurriculumSection />
        <TrustSection />
        <FaqSection />
        <ActionSection />
      </div>
    </div>
  )
}

export default PistonCrank