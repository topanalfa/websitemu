import React from "react";

const steps = [
  {
    title: "Step Name 1",
    description:
      "Describe what happens during this phase of your process and how it moves clients closer to their goals.",
    highlight: false,
  },
  {
    title: "Step Name 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque id viverra enim",
    highlight: true,
  },
  {
    title: "Step Name 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque id viverra enim",
    highlight: true,
  },
  {
    title: "Step Name 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    highlight: false,
  },
];

const ProcessStepsSection: React.FC = () => (
  <section id="process" className="w-full py-16 flex flex-col items-center bg-white">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-indigo-500">
      How We&apos;ll Work Together <span className="inline-block align-middle">&rarr;</span>
    </h2>
    <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
      Break down your workflow into clear steps so potential clients understand exactly what to expect when working with you.
    </p>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch px-4 md:px-0 max-w-6xl">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`flex flex-col border-2 border-black rounded-2xl p-8 shadow-sm transition text-left ${step.highlight ? 'bg-yellow-100' : 'bg-white'}`}
        >
          <h3 className="text-2xl font-extrabold mb-2 text-left">
            <span className="capitalize">{step.title}</span>
          </h3>
          <p className="text-base text-gray-800 mb-2">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProcessStepsSection; 