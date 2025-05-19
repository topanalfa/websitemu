import React from "react";

const caseStudies = [
  {
    title: "Case Study #1",
    description:
      "Describe the challenge your client faced, how you helped them overcome it, and the specific results they achieved. Use numbers and concrete details when possible.",
    button: "SELENGKAPNYA",
  },
  {
    title: "Case Study #2",
    description:
      "Describe another successful project. Focus on a different type of challenge or service to show your range. Include measurable outcomes.",
    button: "SELENGKAPNYA",
  },
  {
    title: "Case Study #3",
    description:
      "Highlight a third client story. Emphasize a unique aspect of your service or a particularly impressive result. Keep it concise and outcome-focused.",
    button: "SELENGKAPNYA",
  },
];

const SuccessStoriesSection: React.FC = () => (
  <section id="testimonials" className="w-full py-16 flex flex-col items-center bg-linear-to-t from-lime-100 to-amber-100">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-lime-700">
      Testimoni Keberhasilan Klien
    </h2>
    <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
      Share 3–4 of your best case studies here. Each one should highlight a specific challenge you solved and the results you achieved.
    </p>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch px-4 md:px-0 max-w-6xl">
      {caseStudies.map((study, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center border-2 border-black rounded-2xl p-8 bg-white shadow-sm transition hover:shadow-lg"
        >
          <div className="w-48 h-48 bg-gray-100 rounded-lg mb-6" />
          <h3 className="text-2xl font-extrabold mb-2 text-center">{study.title}</h3>
          <p className="text-base text-gray-800 text-center mb-6">{study.description}</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition border-2 border-black">
            {study.button}
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default SuccessStoriesSection; 