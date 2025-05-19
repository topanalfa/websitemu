'use client'

import React, { useState } from "react";

const faqs = [
  {
    question: "I'd like to change a color, font, or other style option. How can I do that?",
    answer: "You can change colors, fonts, and other style options in the settings panel. Look for the 'Design' or 'Style' tab to customize your preferences.",
  },
  {
    question: "I've never heard about Carrd. What is that?",
    answer: "Carrd is a simple, free, fully responsive one-page site builder that helps you create landing pages and personal sites easily.",
  },
  {
    question: "Do you offer any discounts ?",
    answer: "Yes, we occasionally offer discounts and promotions. Please contact us or check our website for current offers.",
  },
  {
    question: "Accordion Item 4",
    answer: "This is the answer to the fourth FAQ item. You can add as many items as you like!",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 flex flex-col items-center bg-linear-to-t from-amber-100 to-lime-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-lime-700">
        Pertanyaan yang sering ditanyakan.
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
        How Can I Help? Your Burning Questions Answered!
      </p>
      <div className="w-full max-w-3xl flex flex-col gap-6 px-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border-2 border-black rounded-2xl overflow-hidden bg-white transition"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-lg font-medium text-left focus:outline-none"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-lime-700">{faq.question}</span>
              <svg
                className={`w-6 h-6 ml-4 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-5 text-base text-gray-800 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 