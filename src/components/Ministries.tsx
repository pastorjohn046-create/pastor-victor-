/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Users, Sparkles, Heart, Globe } from "lucide-react";

const ministries = [
  {
    title: "Youth & Students",
    description: "Empowering the next generation to lead with faith, integrity, and purpose.",
    icon: Users,
  },
  {
    title: "Prophetic Ministry",
    description: "Seeking divine guidance and sharing inspired words for strength and comfort.",
    icon: Sparkles,
  },
  {
    title: "Intercessory Prayer",
    description: "Dedicated to standing in the gap for our community and individual needs.",
    icon: Heart,
  },
  {
    title: "Social Outreach",
    description: "Extending the hands of grace through community service and global support.",
    icon: Globe,
  },
];

export default function Ministries() {
  return (
    <section id="ministries" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-24 px-4">
        <span className="font-sans uppercase tracking-[0.4em] text-[10px] md:text-[11px] text-brand-accent mb-4 md:mb-6 block font-bold">The Mission</span>
        <h2 className="text-5xl md:text-7xl font-light italic tracking-tighter">Areas of <span className="not-italic text-brand-text">Ministry.</span></h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 md:px-0">
        {ministries.map((min, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 md:p-12 bg-brand-surface border border-white/5 hover:border-brand-accent/20 transition-all group rounded-none"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-8 md:mb-10 border border-white/10 group-hover:border-brand-accent/40 transition-colors">
              <min.icon className="text-brand-accent/50 group-hover:text-brand-accent transition-colors w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-light mb-4 md:mb-6 tracking-tight text-brand-text">{min.title}</h3>
            <p className="text-brand-text/40 leading-relaxed font-sans text-sm font-light">
              {min.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
