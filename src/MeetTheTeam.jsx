import React, { useState } from "react";
import { motion } from "framer-motion";

// Team data - সহজে যোগ/বিয়োগ করতে পারবে এখানে
const teamData = [
  {
    id: 1,
    name: "Dr. Troy Abel",
    role: "President & Lead educator",
    frontDescription: "Dr. T has worn many hats throughout his career, from being the hiring manager who assesses talent to the professor sharing knowledge with eager minds. His diverse experiences have equipped him with a deep understanding of what it truly takes to excel in UX design, strategy, and research.",
    backDescription: "Dr. Abel is a seasoned design leader with over 15 years of experience spanning both academia and industry. As a former design professor at Iowa State University, Virginia Tech, and the University of North Texas, he brings a unique blend of academic rigor and real-world insight to his work. In industry, Dr. T leads high-performing teams that deliver innovative, user-centered solutions. Grounded in research, strategy, and collaboration, he fosters growth, creativity, and excellence.",
    badges: ["Portfolio Strategy", "UX Career Transition", "User Research"],
    headshot: "/images/dr-t.jpg" // replace with your path
  },
  {
    id: 2,
    name: "Andrew Schall",
    role: "Team educator",
    frontDescription: "Andrew Schall is a UX leader, researcher, and strategist with 20+ years of experience driving innovation at organizations including ServiceNow, Mayo Clinic, Citibank, Office Depot, and Southwest Airlines.",
    backDescription: "Andrew brings deep domain knowledge and hands-on experience, mentoring the next generation of UX professionals and contributing to strategic design initiatives.",
    badges: ["UX Strategy", "User Research"],
    headshot: "/images/andrew.jpg" // replace with your path
  }
];

function FlipCard({ member, flipped, onToggle }) {
  return (
    <div className="group relative h-[300px] [perspective:1000px]">
      <div className={`relative h-full w-full rounded-2xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "rotate-y-180" : ""}`}>
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-[#18181b] via-[#1f1f27] to-[#0b0b10] ring-1 ring-white/10 shadow-black/40 [backface-visibility:hidden]">
          <div className="flex items-center gap-4">
            <img src={member.headshot} alt={member.name} className="h-16 w-16 rounded-full object-cover ring-1 ring-white/20" />
            <div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-white/60">{member.role}</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-white/70 flex-1">{member.frontDescription}</p>
          <button onClick={onToggle} className="mt-4 inline-flex items-center gap-2 px-3 py-2 text-sm bg-white/5 rounded-2xl ring-1 ring-white/15 hover:bg-white/10">
            বিস্তারিত দেখুন ↻
          </button>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-6 bg-gradient-to-br from-[#0b0b10] via-[#171721] to-[#101018] ring-1 ring-white/10 shadow-black/40 rotate-y-180 [backface-visibility:hidden] flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-sm text-white/60">{member.role}</p>
            <p className="mt-2 text-sm text-white/70">{member.backDescription}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {member.badges.map((badge, idx) => (
              <span key={idx} className="px-3 py-1 text-xs bg-fuchsia-600/20 text-fuchsia-400 rounded-full">
                {badge}
              </span>
            ))}
          </div>
          <button onClick={onToggle} className="mt-4 inline-flex items-center gap-2 px-3 py-2 text-sm bg-white/5 rounded-2xl ring-1 ring-white/15 hover:bg-white/10">
            ফিরে যান ↻
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MeetTheTeam() {
  const [flipped, setFlipped] = useState({});
  const toggle = (id) => setFlipped((s) => ({ ...s, [id]: !s[id] }));

  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 text-center">
        <p className="text-xs tracking-widest uppercase text-white/60">4) MEET THE TEAM</p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">Team Members</h2>
        <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">Click or hover on cards to see details and badges.</p>
      </motion.div>

      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
        {teamData.map((member) => (
          <FlipCard key={member.id} member={member} flipped={!!flipped[member.id]} onToggle={() => toggle(member.id)} />
        ))}
      </div>
    </section>
  );
}
