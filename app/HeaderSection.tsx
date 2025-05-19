'use client'
import React, { useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT ME", href: "#about" },
  { label: "PROCESS", href: "#process" },
  { label: "PRICING", href: "#pricing" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const HeaderSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="flex items-center justify-between border-b border-black px-8 py-4 relative bg-lime-700 z-20">
      <div className="text-2xl font-extrabold tracking-tight text-amber-100">BuatWebmu</div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-lg font-bold text-amber-100">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:underline"
            onClick={e => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button className="ml-4 border-2 rounded-full px-6 py-2 font-bold text-base text-amber-100 bg-green-500 hover:bg-green-600 hover:text-lime-200 transition hidden md:block">
        Buat Sekarang
      </button>
      {/* Burger Icon for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-indigo-800 mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-indigo-800 mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-indigo-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-lime-700 border-b border-black flex flex-col items-center gap-6 py-6 md:hidden shadow-lg z-30 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-bold text-amber-100 hover:underline"
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <button className="mt-2 border-2 border-amber rounded-full px-6 py-2 font-bold text-base text-amber-100 bg-green-500 hover:bg-green-600 hover:text-lime-200 transition">
            Buat Sekarang
          </button>
        </nav>
      )}
    </header>
  );
};

export default HeaderSection; 