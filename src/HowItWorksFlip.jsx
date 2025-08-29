import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarClock, MapIcon, Handshake, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: CalendarClock,
    step: "Step 1",
    title: "Free Discovery Call",
    short: "45 মিনিটের ফ্রি আলোচনা",
    long:
      "আমরা ৪৫ মিনিট তোমার লক্ষ্য, ব্যাকগ্রাউন্ড আর চ্যালেঞ্জ নিয়ে কথা বলব। কোন বাধ্যবাধকতা নেই—এই কলে বুঝে নেবো আমরা একসাথে কাজের জন্য পারফেক্ট কিনা।",
  },
  {
    id: 2,
    icon: MapIcon,
    step: "Step 2",
    title: "The Custom Roadmap",
    short: "পার্সোনালাইজড রোডম্যাপ",
    long:
      "কলের ওপর ভিত্তি করে আমরা তোমার জন্য ব্যক্তিগতকৃত কোচিং প্ল্যান বানাবো—এটাই তোমার সাকসেস ব্লুপ্রিন্ট। তোমার সময় ও প্রয়োজন অনুযায়ী টাইমলাইন কাস্টমাইজ থাকবে।",
  },
  {
    id: 3,
    icon: Handshake,
    step: "Step 3",
    title: "Hands-On Coaching",
    short: "রেগুলার 1:1 সেশন",
    long:
      "টিমের প্রফেশনাল কোচদের সাথে নিয়মিত 1:1 সেশনে প্ল্যান এক্সিকিউট হবে। পাবে অ্যাকশানেবল ফিডব্যাক, রিসোর্স, আর অ্যাকাউন্টেবিলিটি—পোর্টফোলিও আর স্কিল বিল্ড করতে।",
  },
  {
    id: 4,
    icon: Rocket,
    step: "Step 4",
    title: "Launch Your New Career",
    short: "জব অ্যাপ্লাই ও ইন্টারভিউ",
    long:
      "শক্তিশালী পোর্টফোলিও আর কনফিডেন্স নিয়ে তুমি অ্যাপ্লাই করবে। ড. টি স্ট্র্যাটেজিক অ্যাডভাইজার হিসেবে থাকবে—ফাইনাল জব অফার পর্যন্ত।",
  },
];

function FlipCard({ data, flipped, onToggle }) {
  const Icon = data.icon;
  return (
    <div className="group relative h-[260px] sm:h-[300px] [perspective:1000px]">
      <div
        className={`relative h-full w-full rounded-2xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-[#18181b] via-[#1f1f27] to-[#0b0b10] ring-1 ring-white/10 shadow-black/40 [backface-visibility:hidden]">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">{data.step}</p>
              <h3 className="text-lg sm:text-xl font-semibold">{data.title}</h3>
            </div>
          </div>
          <p className="text-sm text-white/70 mt-2">{data.short}</p>
          <button
            onClick={onToggle}
            className="mt-4 inline-flex w-max items-center gap-2 rounded-2xl px-3 py-2 text-sm ring-1 ring-white/15 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label={`${data.title} details`}
          >
            বিস্তারিত দেখুন
            <span aria-hidden>↻</span>
          </button>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-6 bg-gradient-to-br from-[#0b0b10] via-[#171721] to-[#101018] ring-1 ring-white/10 shadow-black/40 rotate-y-180 [backface-visibility:hidden]">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">{data.step}</p>
              <h3 className="text-lg sm:text-xl font-semibold">{data.title}</h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-white/80">{data.long}</p>
          <button
            onClick={onToggle}
            className="mt-4 inline-flex w-max items-center gap-2 rounded-2xl px-3 py-2 text-sm ring-1 ring-white/15 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label={`${data.title} back`}
          >
            ফিরে যান
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksFlip() {
  const [flipped, setFlipped] = useState({});

  const toggle = (id) => setFlipped((s) => ({ ...s, [id]: !s[id] }));

  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-xs tracking-widest uppercase text-white/60">3) HOW IT WORKS</p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
          A Simple, Proven Path to Success
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
          নিচের প্রতিটি কার্ডে ক্লিক বা hover করে বিস্তারিত দেখুন।
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-5 sm:gap-6 sm:grid-cols-2"
      >
        {steps.map((item) => (
          <motion.div
            key={item.id}
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
          >
            <FlipCard data={item} flipped={!!flipped[item.id]} onToggle={() => toggle(item.id)} />
          </motion.div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
      </div>
    </section>
  );
}
