import React from "react";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "ABOUT ME", href: "#" },
  { label: "PROCESS", href: "#" },
  { label: "PORTFOLIO", href: "#" },
  { label: "TESTIMONIALS", href: "#" },
  { label: "FAQ", href: "#" },
];

const FooterSection: React.FC = () => (
  <footer className="w-full bg-black text-white pt-16 pb-6 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-0">
      {/* Logo */}
      <div className="flex-1 flex justify-center md:justify-start mb-6 md:mb-0">
        <span className="text-2xl font-extrabold tracking-tight">Logo</span>
      </div>
      {/* Navigation */}
      <nav className="flex-1 flex flex-wrap justify-center gap-6 md:gap-8 text-lg font-bold mb-6 md:mb-0">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="hover:underline">
            {link.label}
          </a>
        ))}
      </nav>
      {/* Social Icons */}
      <div className="flex-1 flex justify-center md:justify-end gap-4">
        {/* Telegram Icon */}
        <a href="#" aria-label="Telegram" className="inline-block">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="32" height="32" rx="4" stroke="white" strokeWidth="2" fill="none" />
            <path d="M10 18l7 3 7-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        {/* X (Twitter) Icon */}
        <a href="#" aria-label="X" className="inline-block">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="32" height="32" rx="4" stroke="white" strokeWidth="2" fill="none" />
            <path d="M12 24l12-12M12 12l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-gray-300">
      © 2025. Templates For Carrd. All Rights Reserved
    </div>
  </footer>
);

export default FooterSection; 