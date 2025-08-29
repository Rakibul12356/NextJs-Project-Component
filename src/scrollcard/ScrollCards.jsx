import { motion } from "framer-motion";

export default function ScrollCards() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 bg-gray-100 p-10">
      <h1 className="text-3xl font-bold">Scroll Down to See Animation 👇</h1>

      <div className="h-[100vh]" /> {/* gap before cards */}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Card */}
        <motion.div
          className="w-72 h-48 bg-blue-500 text-white flex items-center justify-center rounded-2xl shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-xl font-semibold">Left Card</h2>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="w-72 h-48 bg-green-500 text-white flex items-center justify-center rounded-2xl shadow-lg"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-xl font-semibold">Right Card</h2>
        </motion.div>
      </div>

      <div className="h-[100vh]" /> {/* gap after cards */}
    </div>
  );
}
