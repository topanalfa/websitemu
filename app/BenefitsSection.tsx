import React from "react";

const benefits = [
  {
    title: "This is a benefit",
    description:
      "Explain how this specific aspect of your service helps clients achieve better results. Connect it to their goals and pain points.",
    Illustration: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
        <rect x="20" y="20" width="80" height="80" rx="16" fill="#F8F8FF" />
        <rect x="50" y="40" width="20" height="40" rx="6" fill="#A259FF" />
        <circle cx="60" cy="60" r="10" fill="#7C3AED" />
      </svg>
    ),
  },
  {
    title: "No Contract",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id viverra enim",
    Illustration: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
        <rect x="30" y="30" width="60" height="60" rx="12" fill="#F8F8FF" />
        <rect x="55" y="50" width="10" height="30" rx="3" fill="#F9DC5C" />
        <rect x="45" y="70" width="30" height="8" rx="2" fill="#A259FF" />
      </svg>
    ),
  },
  {
    title: "Save Money",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id viverra enim",
    Illustration: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
        <ellipse cx="60" cy="80" rx="32" ry="16" fill="#F8F8FF" />
        <rect x="50" y="60" width="20" height="20" rx="6" fill="#A259FF" />
        <circle cx="60" cy="70" r="8" fill="#7C3AED" />
      </svg>
    ),
  },
];

const BenefitsSection: React.FC = () => (
  <section className="w-full py-16 flex flex-col items-center bg-white">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-indigo-500">
      The Unmatched Benefits of My Work
    </h2>
    <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
      List 3–4 key reasons clients should choose you. Focus on what makes your approach unique.
    </p>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch px-4 md:px-0 max-w-6xl mb-12">
      {benefits.map((benefit, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center border-2 border-black rounded-2xl p-8 bg-white shadow-sm transition hover:shadow-lg text-center"
        >
          <div className="mb-2">
            <benefit.Illustration />
          </div>
          <h3 className="text-2xl font-extrabold mb-4 text-center uppercase tracking-tight">
            {benefit.title}
          </h3>
          <p className="text-base text-gray-800 mb-2">{benefit.description}</p>
        </div>
      ))}
    </div>
    <button className="bg-[#A259FF] hover:bg-[#7C3AED] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition border-2 border-black">
      BOOK A FREE CALL
    </button>
  </section>
);

export default BenefitsSection; 