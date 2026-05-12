/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Gallery", to: "gallery" },
  { name: "Sermons", to: "sermons" },
  { name: "Ministries", to: "ministries" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <div className="bg-brand-surface/80 backdrop-blur-xl px-6 md:px-12 py-4 md:py-6 rounded-none flex items-center justify-between w-full max-w-7xl border-b border-white/5 shadow-2xl relative">
        <div className="text-lg md:text-xl tracking-[0.2em] font-light font-serif text-brand-text">
          VICTOR ANEHIKE
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              spy={true}
              duration={500}
              className="text-[11px] font-sans uppercase tracking-[0.3em] cursor-pointer hover:text-brand-accent transition-colors font-medium opacity-50 hover:opacity-100"
              activeClass="!opacity-100 !text-brand-accent transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="contact"
            smooth={true}
            className="hidden sm:block border border-brand-accent/40 text-brand-accent px-6 md:px-8 py-2 md:py-3 rounded-none text-[10px] uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-brand-bg transition-all cursor-pointer font-sans"
          >
            Concierge
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-text p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-brand-surface border-t border-white/5 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  spy={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-[12px] font-sans uppercase tracking-[0.4em] text-brand-text opacity-70 hover:opacity-100 transition-all font-bold"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-brand-accent/40 text-brand-accent px-8 py-4 text-center text-[10px] uppercase tracking-[0.3em] font-sans font-bold"
              >
                Concierge
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
