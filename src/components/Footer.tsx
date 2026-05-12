/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-brand-text py-16 md:py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-16 md:24">
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-2xl md:text-3xl font-light tracking-tighter italic text-white leading-none">Victor Anehike</h3>
            <p className="text-brand-text/40 leading-relaxed font-sans font-light text-sm max-w-xs">
              Cultivating a legacy of grace, mapping the intersection of ancient scripture and modern existence.
            </p>
            <div className="flex gap-6 md:gap-8 opacity-40">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-accent transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-accent transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-brand-accent transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-brand-accent transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-sans uppercase tracking-[0.3em] text-[10px] font-bold mb-6 md:mb-10 text-white/50">Location</h4>
            <div className="space-y-4 md:space-y-6 text-brand-text/60 font-sans font-light text-sm tracking-wide">
              <p>Land of Grace Intl Assembly<br />After Vigilante Quarters, Palace Road<br />Iyakpi, South Ibie, Edo State, Nigeria</p>
              <div className="pt-2 md:pt-4 space-y-2">
                <p className="font-bold text-brand-accent/60 text-[10px] uppercase tracking-[0.2em]">Weekly Service</p>
                <p>Opposite Market, Sabo Auchi</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-sans uppercase tracking-[0.3em] text-[10px] font-bold mb-6 md:mb-10 text-white/50">Journal</h4>
            <ul className="space-y-4 md:space-y-6 text-brand-text/60 font-sans font-light text-sm tracking-wide">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Sermon Archives</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Legacy Giving</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">The Foundation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans uppercase tracking-[0.3em] text-[10px] font-bold mb-6 md:mb-10 text-white/50">Connect</h4>
            <p className="text-brand-text/40 text-sm mb-6 md:mb-8 font-sans font-light">Join our digital congregation for weekly reflections.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Secure Email Address"
                className="bg-white/5 border border-white/10 rounded-none px-4 md:px-6 py-3 md:py-4 w-full focus:border-brand-accent outline-none transition-all text-xs font-sans placeholder:text-white/10"
              />
              <button className="bg-brand-accent text-brand-bg px-6 py-3 md:py-4 rounded-none text-[10px] uppercase tracking-[0.3em] font-bold font-sans hover:bg-white transition-all">Register</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[9px] md:text-[10px] font-sans uppercase tracking-[0.3em] md:tracking-[0.4em] text-brand-text/20 font-bold text-center md:text-left">
          <p>© 2025 Victor Anehike Ministries. All rights reserved.</p>
          <div className="flex gap-6 md:gap-10">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Collective</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
