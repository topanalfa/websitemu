import React from "react";
import Image from "next/image";

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
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-black px-8 py-4">
        <div className="text-2xl font-extrabold tracking-tight">Brutale</div>
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">ABOUT ME</a>
          <a href="#" className="hover:underline">PROCESS</a>
          <a href="#" className="hover:underline">PORTFOLIO</a>
          <a href="#" className="hover:underline">TESTIMONIALS</a>
          <a href="#" className="hover:underline">FAQ</a>
        </nav>
        <button className="ml-4 border-2 border-black rounded-full px-6 py-2 font-bold text-base hover:bg-black hover:text-white transition">BUY THIS TEMPLATE</button>
      </header>
      {/* Main Hero Section */}
      <main className="flex flex-1 flex-col md:flex-row items-center justify-between px-8 md:px-24 py-12 gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl flex flex-col items-start justify-center gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-2">
            <span className="block">MAKE AN IMPACT WITH</span>
            <span className="block">YOUR HEADLINE</span>
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Here's where you explain what makes your services unique. Share how you help clients overcome their challenges and achieve results they're excited about.
          </p>
          <button className="bg-[#A259FF] hover:bg-[#7C3AED] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition mb-2">
            LEARN MORE
          </button>
          <div className="text-sm text-gray-600 mt-2 mb-2">TRUSTED BY 40+ CLIENTS</div>
          <div className="flex gap-4 opacity-60">
            <PlaceholderLogo />
            <PlaceholderLogo />
            <PlaceholderLogo />
            <PlaceholderLogo />
            <PlaceholderLogo />
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <PlaceholderIllustration />
        </div>
      </main>
    </div>
  );
}
