/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const images = [
  { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800&h=600", caption: "A Heart for Worship" },
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=800", caption: "The Ministry of Grace" },
  { url: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=800&h=533", caption: "Walking in Purpose" },
  { url: "https://images.unsplash.com/photo-1501724321287-fc2a48be177b?auto=format&fit=crop&q=80&w=600&h=800", caption: "Intercession & Power" },
  { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200&h=675", caption: "Word & Excellence" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] md:text-[11px] text-brand-accent mb-4 md:mb-6 block font-bold">Visual Journal</span>
          <h2 className="text-5xl md:text-7xl font-light italic tracking-tighter">Ministry <span className="not-italic text-brand-text">in Action.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Main Large Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-7 aspect-[4/3] bg-brand-surface border border-white/5 p-2 md:p-3 group overflow-hidden relative"
          >
            <img 
              src={images[0].url} 
              alt={images[0].caption}
              className="w-full h-full object-cover grayscale opacity-80 md:opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="bg-brand-bg/80 backdrop-blur-md text-brand-text text-[9px] md:text-[10px] uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 border border-white/10">{images[0].caption}</span>
            </div>
          </motion.div>

          {/* Side Column */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-square bg-brand-surface border border-white/5 p-2 md:p-3 group overflow-hidden relative"
            >
              <img 
                src={images[1].url} 
                alt={images[1].caption}
                className="w-full h-full object-cover grayscale opacity-80 md:opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
              />
               <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="bg-brand-bg/80 backdrop-blur-md text-brand-text text-[9px] md:text-[10px] uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 border border-white/10">{images[1].caption}</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[3/2] bg-brand-surface border border-white/5 p-2 md:p-3 group overflow-hidden relative"
            >
              <img 
                src={images[2].url} 
                alt={images[2].caption}
                className="w-full h-full object-cover grayscale opacity-80 md:opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
              />
               <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="bg-brand-bg/80 backdrop-blur-md text-brand-text text-[9px] md:text-[10px] uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 border border-white/10">{images[2].caption}</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-6 lg:col-span-5 aspect-[4/5] bg-brand-surface border border-white/5 p-2 md:p-3 group overflow-hidden relative"
          >
            <img 
              src={images[3].url} 
              alt={images[3].caption}
              className="w-full h-full object-cover grayscale opacity-80 md:opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
            />
             <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="bg-brand-bg/80 backdrop-blur-md text-brand-text text-[9px] md:text-[10px] uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 border border-white/10">{images[3].caption}</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 lg:col-span-7 aspect-video bg-brand-surface border border-white/5 p-2 md:p-3 group overflow-hidden relative"
          >
            <img 
              src={images[4].url} 
              alt={images[4].caption}
              className="w-full h-full object-cover grayscale opacity-80 md:opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
            />
             <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="bg-brand-bg/80 backdrop-blur-md text-brand-text text-[9px] md:text-[10px] uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 border border-white/10">{images[4].caption}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
