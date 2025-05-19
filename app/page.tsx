import React from "react";
import Image from "next/image";
import SuccessStoriesSection from "./SuccessStoriesSection";
import BenefitsSection from "./BenefitsSection";
import ProcessStepsSection from "./ProcessStepsSection";
import PricingPackagesSection from "./PricingPackagesSection";
import MeetTheFounderSection from "./MeetTheFounderSection";
import FAQSection from "./FAQSection";
import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";

const PlaceholderIllustration: React.FC = () => (
  <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" rx="40" fill="#F8F8FF"/>
    <circle cx="200" cy="200" r="80" fill="#F3F3F3"/>
    <rect x="170" y="120" width="60" height="160" rx="20" fill="#22223B"/>
    <rect x="190" y="140" width="20" height="40" rx="5" fill="#F9DC5C"/>
    <ellipse cx="200" cy="320" rx="40" ry="10" fill="#E0E0E0"/>
    <rect x="120" y="180" width="40" height="10" rx="5" fill="#F9DC5C"/>
    <rect x="240" y="180" width="40" height="10" rx="5" fill="#F9DC5C"/>
    <rect x="180" y="220" width="40" height="10" rx="5" fill="#F9DC5C"/>
  </svg>
);

const PlaceholderLogo: React.FC = () => (
  <svg width="70" height="24" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="70" height="24" rx="6" fill="#E0E0E0"/>
    <text x="35" y="16" textAnchor="middle" fill="#B0B0B0" fontSize="14" fontFamily="Arial">LOGO</text>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-amber-100">
      {/* Header */}
      <HeaderSection />
      {/* Main Hero Section */}
      <main className="flex flex-1 flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-24 py-8 sm:py-12 gap-8 md:gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl flex flex-col items-center md:items-start justify-center gap-4 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl text-lime-700 md:text-6xl font-extrabold leading-tight mb-2">
            <span className="block">MULAI BUAT WEBSITEMU</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
          Tanpa ribet. Tanpa coding. Kami sudah bantu banyak restoran, salon, & klinik tampil profesional + mudah dipesan online.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition mb-2">
          WhatsApp Kami Sekarang
          </button>
          <div className="text-sm text-gray-600 mt-2 mb-2">Dipercaya lebih dari 40+ CLIENTS</div>
          <div className="flex gap-4 opacity-60 flex-wrap justify-center">
            <PlaceholderLogo />
            <PlaceholderLogo />
            <PlaceholderLogo />
            <PlaceholderLogo />
            <PlaceholderLogo />
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
          <PlaceholderIllustration />
        </div>
      </main>
      <SuccessStoriesSection />
      <BenefitsSection />
      <ProcessStepsSection />
      <PricingPackagesSection />
      <MeetTheFounderSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
