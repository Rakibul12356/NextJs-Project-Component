import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Process", "Services", "Benefits", "Plans", "Contact"];

  return (
    <motion.nav
      animate={{
        paddingTop: scrolled ? "0.3rem" : "1rem",
        paddingBottom: scrolled ? "0.3rem" : "1rem",
        backgroundColor: scrolled ? "#0a0a0a" : "rgba(10,10,10,0.7)",
      }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 text-white shadow-md"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center px-6 transition-all duration-500 ${
          scrolled ? "justify-center gap-4" : "justify-between"
        }`}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <img
            src="https://dummyimage.com/32x32/fff/000"
            alt="logo"
            className="w-8 h-8"
          />
          {!scrolled && <span className="text-white">Radison</span>}
        </div>

      
        <ul
          className={`flex font-medium transition-all duration-500 ${
            scrolled ? "gap-4 text-sm" : "gap-8 text-base"
          }`}
        >
          {navItems.map((item) => (
            <li key={item} className="hover:text-purple-400 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

    
        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`flex items-center bg-purple-600 rounded-md transition-all duration-500 ${
            scrolled ? "p-2 ml-4" : "px-4 py-2 gap-2"
          }`}
        >
          {scrolled ? (
            <FiArrowUpRight size={18} />
          ) : (
            <>
              <span>Get in touch</span>
              <FiArrowUpRight size={18} />
            </>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
}
