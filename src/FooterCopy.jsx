import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";

export const FooterCopy = () => {
  const socialIcons = [
    CiLinkedin,
    RiTwitterXFill,
    FaInstagram,
    CiFacebook,
    FaThreads,
  ];

  return (
    <footer className="relative border-t border-white/10 py-16 px-4 sm:px-0 md:p-0 lg:p-0 overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto z-10">
        {/* Gradient Behind Main Div */}
        <div
          className="absolute inset-0 bg-gradient-to-tl from-[#0a0a0a] via-[#512feb]/40 to-[#0a0a0a] 
               blur-[80px]  bg-center rotate-y-40 rotate-175   pointer-events-none z-0"
        />

        <div className="flex flex-col sm:flex-row justify-between gap-10 px-4 relative z-10">
          {/* Left Section */}
          <div className="flex-1 text-left">
            <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2 text-white">
              Radison
            </h2>
            <p className="mt-3 text-white/70 text-sm md:text-base max-w-xs">
              Your trusted partner in AI solutions, creating smarter systems for
              smarter businesses.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4 flex-wrap">
              {socialIcons.map((Icon, i) => (
                <button
                  key={i}
                  className="text-xl md:text-2xl bg-white/10 hover:bg-white/20 transition rounded-lg p-2 text-white"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0 mt-6 sm:mt-0">
            <div className="sm:w-[45%]">
              <h3 className="font-semibold text-white text-lg">Sections</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="hover:text-white cursor-pointer">Process</li>
                <li className="hover:text-white cursor-pointer">Services</li>
                <li className="hover:text-white cursor-pointer">Benefits</li>
                <li className="hover:text-white cursor-pointer">Plans</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="sm:w-[45%] mt-6 sm:mt-0">
              <h3 className="font-semibold text-white text-lg">Pages</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">Coming soon</li>
                <li className="hover:text-white cursor-pointer">404</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row items-center justify-center md:justify-between text-sm text-white/70 gap-3 text-center relative z-10">
        <div>Use template</div>
        <div>
          Visioned and Crafted by{" "}
          <span className="text-white">Kanishk Dubey</span>
        </div>
        <div>© All rights reserved</div>
      </div>
    </footer>
  );
};
