/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Play, Calendar, Clock } from "lucide-react";

const sermons = [
  {
    title: "Walking Through the Wilderness",
    series: "Strength in the Seasons",
    date: "Oct 12, 2025",
    duration: "32:15",
    image: "https://picsum.photos/seed/s1/600/400",
  },
  {
    title: "The Architecture of Grace",
    series: "Foundations of Faith",
    date: "Oct 05, 2025",
    duration: "28:40",
    image: "https://picsum.photos/seed/s2/600/400",
  },
  {
    title: "Finding Peace in Chaos",
    series: "Modern Psalms",
    date: "Sep 28, 2025",
    duration: "35:10",
    image: "https://picsum.photos/seed/s3/600/400",
  },
];

export default function Sermons() {
  return (
    <section id="sermons" className="py-24 md:py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:20 gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] md:text-[11px] text-brand-accent mb-4 md:mb-6 block font-bold">Archives</span>
            <h2 className="text-4xl md:text-6xl font-light italic tracking-tighter">The <span className="not-italic text-brand-text">Sermon Archive.</span></h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-auto text-brand-accent border border-brand-accent/30 px-8 md:px-10 py-3 md:py-4 hover:bg-brand-accent hover:text-brand-bg transition-all font-sans uppercase tracking-[0.2em] text-[10px] font-bold"
          >
            Access Full Library
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {sermons.map((sermon, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer bg-brand-surface border border-white/5 p-6 hover:border-brand-accent/30 transition-all rounded-none"
            >
              <div className="relative aspect-video overflow-hidden mb-8 border border-white/5">
                <img
                  src={`${sermon.image}?grayscale`}
                  alt={sermon.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-brand-bg/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform group-hover:bg-brand-accent group-hover:border-brand-accent">
                    <Play className="text-white fill-white w-5 h-5 ml-1 transition-colors group-hover:text-brand-bg group-hover:fill-brand-bg" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[10px] font-sans uppercase tracking-[0.3em] text-brand-accent font-bold">
                  <span>SERIES: {sermon.series}</span>
                </div>
                <h3 className="text-2xl font-light leading-tight group-hover:text-brand-accent transition-colors">{sermon.title}</h3>
                <div className="flex items-center justify-between pt-6 border-t border-white/5 text-brand-text/30 text-[10px] font-sans uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{sermon.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{sermon.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
