/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-brand-bg">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[11px] text-brand-accent mb-6 md:mb-10 block font-bold"
            >
              Land of Grace Intl Assembly
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-light italic leading-[0.95] md:leading-[0.8] mb-8 md:mb-12 tracking-tighter"
            >
              Legacy <br />
              <span className="not-italic text-brand-text">of Grace.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-xl text-brand-text/50 max-w-2xl mx-auto lg:mx-0 mb-10 md:mb-16 leading-relaxed font-sans font-light"
            >
              Pastor Victor Anehike bridges ancient wisdom with modern existence, cultivating a sanctuary for the contemporary soul.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-8"
            >
              <button className="w-full sm:w-auto bg-brand-accent text-brand-bg px-8 md:px-12 py-4 md:py-5 rounded-none text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white transition-all font-bold shadow-2xl active:scale-95">
                Join the Service
              </button>
              <button className="w-full sm:w-auto text-brand-text border border-white/20 px-8 md:px-12 py-4 md:py-5 rounded-none text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:border-brand-accent transition-all active:scale-95 font-bold">
                The Archive
              </button>
            </motion.div>
          </div>

          {/* Featured Hero Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative lg:block"
          >
            <div className="aspect-[4/5] w-full max-w-[500px] mx-auto lg:ml-auto border border-white/10 bg-brand-surface p-2 md:p-4 shadow-3xl group relative overflow-hidden">
              <img 
                src="/input_file_0.png" 
                alt="Pastor Victor Anehike" 
                className="w-full h-full object-cover grayscale opacity-70 lg:opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-x-2 md:inset-x-4 bottom-2 md:bottom-4 h-16 md:h-24 bg-gradient-to-t from-brand-bg/80 to-transparent flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-white/40">Portfolio Portrait No. 01</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
