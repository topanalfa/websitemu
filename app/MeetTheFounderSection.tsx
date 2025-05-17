import React from "react";

const MeetTheFounderSection: React.FC = () => (
  <section className="w-full py-16 flex flex-col items-center bg-white">
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-0 max-w-6xl mx-auto">
      {/* Illustration */}
      <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0">
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64 md:w-[340px] md:h-[340px]">
          <circle cx="170" cy="170" r="160" stroke="#22223B" strokeWidth="2" fill="white" />
          <ellipse cx="170" cy="220" rx="90" ry="70" fill="#BFAAFF" />
          <ellipse cx="170" cy="170" rx="70" ry="70" fill="#BFAAFF" />
          <ellipse cx="170" cy="170" rx="60" ry="60" fill="#fff" />
          <path d="M120 170c0-27.6 22.4-50 50-50s50 22.4 50 50v30c0 16.6-13.4 30-30 30h-40c-16.6 0-30-13.4-30-30v-30z" fill="#BFAAFF" />
          <ellipse cx="170" cy="170" rx="40" ry="40" fill="#22223B" />
          <ellipse cx="170" cy="200" rx="30" ry="20" fill="#fff" />
          <ellipse cx="170" cy="170" rx="35" ry="35" fill="#22223B" />
          <ellipse cx="170" cy="190" rx="20" ry="15" fill="#fff" />
        </svg>
      </div>
      {/* Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-indigo-500">Meet The Founder</h2>
        <p className="text-lg text-gray-800 mb-8 max-w-xl">
          With 10 years of experience in the design industry, I have collaborated with top companies including BrandInc, STudo, and DBunch. My work has been honored with prestigious awards such as a Cannes Lion, D&AD Pencil, CSSDA, FWA, and Awwwards.
        </p>
        <button className="bg-[#A259FF] hover:bg-[#7C3AED] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition border-2 border-black">
          BOOK A FREE CALL
        </button>
      </div>
    </div>
  </section>
);

export default MeetTheFounderSection; 