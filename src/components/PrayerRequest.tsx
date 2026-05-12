/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function PrayerRequest() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="glass-card p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center overflow-hidden relative rounded-none border border-white/5 bg-brand-surface/40">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px] -mr-32 md:-mr-64 -mt-32 md:-mt-64" />
        
        <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] md:text-[11px] text-brand-accent mb-4 md:mb-6 block font-bold">Contact</span>
          <h2 className="text-4xl md:text-6xl font-light italic leading-tight tracking-tighter mb-6 md:mb-10">
            How can we <span className="not-italic text-brand-text">pray for you?</span>
          </h2>
          <p className="text-base md:text-lg text-brand-text/50 leading-relaxed font-sans font-light mb-8 md:mb-12">
            Whether you have a prayer request, a question about our services, or simply want to say hello, we are here to listen and walk with you.
          </p>
          <div className="space-y-4 md:space-y-6 font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-brand-accent/60 font-bold hidden sm:block">
            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="w-8 md:w-12 h-[1px] bg-brand-accent/30" />
              <span>Personal Pastoral Consultations</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="w-8 md:w-12 h-[1px] bg-brand-accent/30" />
              <span>Prompt Community Response</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full bg-brand-bg/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-none border border-white/10 shadow-2xl relative z-10"
        >
          <form className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-accent/70">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 md:px-6 py-3 md:py-4 focus:border-brand-accent focus:ring-0 outline-none transition-all font-sans text-sm text-brand-text placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-accent/70">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 md:px-6 py-3 md:py-4 focus:border-brand-accent focus:ring-0 outline-none transition-all font-sans text-sm text-brand-text placeholder:text-white/20"
                />
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-accent/70">Inquiry Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-none px-4 md:px-6 py-3 md:py-4 focus:border-brand-accent focus:ring-0 outline-none transition-all font-sans text-sm text-brand-text appearance-none cursor-pointer">
                <option className="bg-brand-bg">Prayer Request</option>
                <option className="bg-brand-bg">General Inquiry</option>
                <option className="bg-brand-bg">Meeting Request</option>
                <option className="bg-brand-bg">Volunteering</option>
              </select>
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-accent/70">Your Message</label>
              <textarea
                rows={4}
                placeholder="Share your heart..."
                className="w-full bg-white/5 border border-white/10 rounded-none px-4 md:px-6 py-3 md:py-4 focus:border-brand-accent focus:ring-0 outline-none transition-all font-sans text-sm text-brand-text placeholder:text-white/20 resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-brand-accent text-brand-bg py-4 md:py-5 rounded-none font-sans uppercase tracking-[0.3em] text-[10px] md:text-[11px] font-bold flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl active:scale-95">
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
