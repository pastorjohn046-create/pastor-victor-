/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] w-full max-w-md mx-auto shadow-2xl relative z-10 border border-white/10 bg-brand-surface p-2 md:p-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800&auto=compress"
              alt="Pastor Victor Anehike"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 md:-bottom-12 -right-8 md:-right-12 w-64 md:w-80 h-64 md:h-80 bg-brand-accent/5 rounded-full blur-[80px] md:blur-[100px] -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] md:text-[11px] text-brand-accent mb-4 md:mb-6 block font-bold">Resident Pastor</span>
          <h2 className="text-4xl md:text-6xl font-light mb-6 md:mb-10 leading-tight tracking-tighter italic">
            Building a <br />
            <span className="not-italic text-brand-text">Legacy of Grace.</span>
          </h2>
          
          <div className="space-y-6 md:space-y-8 text-base md:text-lg text-brand-text/60 leading-relaxed font-sans font-light">
            <p>
              Pastor Victor Anehike is a dedicated Nigerian minister who has spent over two decades shepherding communities through the intersection of ancient scripture and modern living. His approach is both scholarly and deeply empathetic.
            </p>
            <p>
              He serves as a bridge, translating timeless truths into daily practice, ensuring that faith remains the quiet architecture of a well-lived life.
            </p>
          </div>

          <div className="mt-10 md:mt-16 p-8 md:p-10 bg-brand-surface border border-white/5 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 -mr-16 -mt-16 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-all" />
            <Quote className="absolute top-6 md:top-8 left-6 md:left-8 text-brand-accent/20 w-8 md:w-10 h-8 md:h-10" />
            <p className="text-lg md:text-2xl font-serif italic leading-relaxed pl-8 md:pl-10 text-brand-text/90">
              "Faith is the quiet architecture of a well-lived life."
            </p>
            <div className="mt-4 md:mt-6 pl-8 md:pl-10 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-accent font-bold">
              — Pastor Victor Anehike
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
