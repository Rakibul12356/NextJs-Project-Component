import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    title: "The Career Transformation Accelerator",
    description: "Fully customized, one-on-one mentorship guiding every step of your career change process.",
    features: [
      "Foundational design education",
      "UX/UI design-focused training",
      "Technical / software tutoring",
      "The future of designing with AI",
      "Customized portfolio design case studies",
      "UX Research exercises",
      "Portfolio presentation guidelines",
      "Interviewing coaching"
    ],
    price: "$6,500",
    ctaText: "Book Now"
  },
  {
    id: 2,
    title: "Portfolio Level-Up",
    description: "For experienced UX professionals aiming for senior, lead, or principal roles.",
    features: ["2-3 customized portfolio design case studies"],
    price: "$1,500",
    ctaText: "Book Now"
  },
  {
    id: 3,
    title: "Designing with AI Level-up",
    description: "Master human-centered AI products and features for designers and product teams.",
    features: ["Conversational design", "Designing for prompt engines", "AI UX Design", "AI UX Strategy", "Augmented customized user experiences", "Agentic agent design"],
    price: "$2,500",
    ctaText: "Book Now"
  },
  {
    id: 4,
    title: "À La Carte Sessions",
    description: "Hourly sessions with team members for any UX/UI challenge.",
    features: ["Flat-rate $200/hour"],
    price: "$200/hr",
    ctaText: "Book Now"
  }
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? products.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === products.length - 1 ? 0 : i + 1));

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Product Offerings</h2>
      <div className="relative">
        {/* Carousel Container */}
        <div className="flex justify-center items-center relative h-72 md:h-80">
          {products.map((product, index) => (
            <AnimatePresence key={product.id}>
              {index === activeIndex && (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-72 md:w-96 bg-gradient-to-br from-[#18181b] via-[#1f1f27] to-[#0b0b10] p-6 rounded-2xl shadow-xl ring-1 ring-white/10"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-sm text-white/70 mb-2">{product.description}</p>
                  <ul className="text-white/70 text-sm list-disc list-inside mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p className="text-lg font-bold text-white mb-4">Starting at {product.price}</p>
                  <button className="px-4 py-2 rounded-2xl bg-fuchsia-600 text-white hover:bg-fuchsia-500">
                    {product.ctaText}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button onClick={prev} className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20">
            ← Previous
          </button>
          <button onClick={next} className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20">
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
