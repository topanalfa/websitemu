import React from "react";

const packages = [
  {
    title: "Basic Blueprint",
    price: "$1997/mo.",
    features: [
      "One request at a time",
      "Three revisions",
      "No contract",
      "Basic SEO optimisation",
      "Royalty free images",
      "The ability to pause time",
    ],
    highlight: false,
  },
  {
    title: "Custom Canvas",
    price: "$2997/mo.",
    features: [
      "Two requests at a time",
      "Five revisions",
      "No contract",
      "SEO optimisation",
      "Royalty free images",
      "The ability to pause time",
    ],
    highlight: true,
  },
  {
    title: "Pixel Perfect",
    price: "$4997/mo.",
    features: [
      "Four requests at a time",
      "Unlimited revisions",
      "No contract",
      "SEO optimisation",
      "Royalty free images",
      "The ability to pause time",
    ],
    highlight: false,
  },
];

const PricingPackagesSection: React.FC = () => (
  <section className="w-full py-16 flex flex-col items-center bg-white">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-indigo-500">
      Pricing & Packages
    </h2>
    <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id viverra enim. Donec volutpatporttitor tempor.
    </p>
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch px-4 md:px-0 max-w-6xl">
      {packages.map((pkg, idx) => (
        <div
          key={idx}
          className={`flex flex-col border-2 border-black rounded-2xl p-8 shadow-sm transition text-left items-center ${pkg.highlight ? 'bg-yellow-100' : 'bg-white'}`}
        >
          <h3 className="text-2xl font-extrabold mb-2 text-center uppercase tracking-tight">{pkg.title}</h3>
          <div className="text-2xl font-extrabold mb-4 text-center">{pkg.price}</div>
          <ul className="mb-6 text-base text-gray-800 list-disc list-inside">
            {pkg.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="bg-[#A259FF] hover:bg-[#7C3AED] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition border-2 border-black mt-auto">
            BOOK A FREE CALL
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default PricingPackagesSection; 