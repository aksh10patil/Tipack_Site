"use client";

import React from "react";
import {
  Star,
  Quote,
  ArrowUpRight,
  Target,
  Anchor,
  Zap,
  Coffee,
  Disc,
  Hexagon,
  Triangle
} from "lucide-react";
import Link from "next/link";

export default function BrandsPage() {
  // --- DESIGN CONSTANTS ---
  const TAPE_COLOR = "%23F4D03F"; // Yellow
  
  const serratedEdgeLeft = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E`;
  const serratedEdgeRight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E`;

  // --- MOCK DATA: THE FLEET ---
  const brands = [
    { name: "IRON ROAST", icon: Coffee, desc: "Industrial Coffee", est: "EST 2021" },
    { name: "VOLT TECH", icon: Zap, desc: "Hardware Components", est: "EST 2019" },
    { name: "NORTH PORT", icon: Anchor, desc: "Marine Supplies", est: "EST 1998" },
    { name: "VINYL HEAVY", icon: Disc, desc: "Record Label", est: "EST 2023" },
    { name: "CORE DRILL", icon: Target, desc: "Construction Tools", est: "EST 2015" },
    { name: "HEX LABS", icon: Hexagon, desc: "Chemical Research", est: "EST 2020" },
  ];

  const testimonials = [
    {
      id: "LOG-01",
      company: "IRON ROAST",
      text: "Our previous boxes fell apart if you looked at them wrong. These crates survived a courier drop-kick test. We ordered 5,000 more.",
      author: "Sarah J. // Ops Director"
    },
    {
      id: "LOG-02",
      company: "VOLT TECH",
      text: "Finally, packaging that doesn't look like it came from a gift shop. Matches our hardware perfectly. Awesome, strong, cheap.",
      author: "Mike R. // Lead Engineer"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF9] text-[#2D2424] font-sans pt-24 pb-0 relative overflow-x-hidden">
      
      {/* Global Background Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
          backgroundSize: "300px auto",
        }}
      />

      <div className="relative z-10">

        {/* --- HERO SECTION --- */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
          <div className="inline-block border-2 border-black px-4 py-1 font-mono text-sm font-bold mb-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            CLIENT_ROSTER_V2.PDF
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
            The Heavy<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#2D2424] to-[#555]">
              Hitters
            </span>
          </h1>
          <p className="text-xl font-bold max-w-2xl leading-snug">
            We supply the brands that build things. If you sell scented candles, go elsewhere. 
            If you ship engine parts, kettlebells, or synthesizers, you're in the right place.
          </p>
        </div>

        {/* --- INFINITE TICKER (HAZARD TAPE STYLE) --- */}
        <div className="w-full bg-[#F4D03F] border-y-2 border-black py-3 overflow-hidden whitespace-nowrap mb-20 relative transform -rotate-1 scale-105 shadow-[0px_4px_10px_rgba(0,0,0,0.1)]">
          <div className="animate-marquee inline-block">
             {[...Array(10)].map((_, i) => (
               <span key={i} className="text-2xl font-black uppercase mx-8 tracking-widest">
                 ★ TRUSTED BY THE LOUD MINORITY ★ SHIP HEAVY ★
               </span>
             ))}
          </div>
        </div>

        {/* --- LOGO GRID --- */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
          
          {/* Tape Header */}
          <div className="relative inline-block mb-12">
            <div className="absolute left-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeLeft}")`, backgroundSize: "12px 12px" }} />
            <div className="absolute right-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeRight}")`, backgroundSize: "12px 12px" }} />
            <div className="bg-[#F4D03F] px-8 py-2 text-2xl font-black uppercase tracking-tight shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
              Authorized Personnel
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {brands.map((brand, idx) => (
              <div 
                key={idx} 
                className="group relative h-64 bg-[#F0F0F0] border-2 border-black p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Screw Heads (Decor) */}
                <div className="absolute top-2 left-2 text-gray-400">+</div>
                <div className="absolute top-2 right-2 text-gray-400">+</div>
                <div className="absolute bottom-2 left-2 text-gray-400">+</div>
                <div className="absolute bottom-2 right-2 text-gray-400">+</div>

                {/* Stencil Icon */}
                <div className="mb-4 text-yellow-500 opacity-80 group-hover:scale-110 transition-transform duration-300">
                  <brand.icon size={64} strokeWidth={1.5} />
                </div>
                
                {/* Text */}
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-1 px-2 transform group-hover:rotate-2 transition-transform">
                  {brand.name}
                </h3>
                <p className="font-mono text-xs text-gray-500 mt-2 uppercase tracking-widest">
                  {brand.est} // {brand.desc}
                </p>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 border-4 border-[#F4D03F] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>

        {/* --- TESTIMONIALS (FIELD REPORTS) --- */}
        <div className="bg-[#2D2424] text-[#FFFEF9] py-24 border-y-2 border-black relative">
           
           {/* Background Grid */}
           <div 
              className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
           />

           <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                
                {/* Left Header */}
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 text-[#F4D03F] mb-4">
                    <Quote size={40} className="fill-[#F4D03F]" />
                  </div>
                  <h2 className="text-5xl font-black uppercase leading-none mb-6">
                    Field <br /> Reports
                  </h2>
                  <p className="text-gray-400 font-mono text-sm max-w-xs">
                    Intercepted communications from logistics managers and warehouse ops who actually use our gear.
                  </p>
                </div>

                {/* Right Cards */}
                <div className="md:w-2/3 grid gap-8">
                  {testimonials.map((t) => (
                    <div key={t.id} className="bg-[#FFFEF9] text-[#2D2424] p-6 border-2 border-gray-600 shadow-[8px_8px_0px_0px_#F4D03F] transform hover:translate-x-1 transition-transform">
                      <div className="flex justify-between items-start mb-4 border-b-2 border-black/10 pb-2">
                        <span className="font-black text-lg uppercase bg-[#F4D03F] px-2 border border-black">
                          {t.company}
                        </span>
                        <span className="font-mono text-xs text-gray-500">{t.id}</span>
                      </div>
                      <p className="text-xl font-bold italic leading-tight mb-6">
                        "{t.text}"
                      </p>
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        VERIFIED PURCHASE // {t.author}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
           </div>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="py-32 text-center px-4">
          <div className="inline-block relative group cursor-pointer">
            {/* Background Block */}
            <div className="absolute inset-0 bg-black translate-y-2 translate-x-2 transition-transform group-hover:translate-y-4 group-hover:translate-x-4"></div>
            
            {/* Button */}
            <div className="relative bg-[#F4D03F] border-2 border-black px-12 py-8 flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
                Join The Fleet
              </h2>
              <p className="font-bold text-lg mb-6">Apply for a wholesale account.</p>
              <Link href="/Contact">
              <div className="flex items-center gap-2 font-black uppercase border-b-2 border-black pb-0.5 hover:pb-1 transition-all">
                Start Application <ArrowUpRight size={24} />
              </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
      
      {/* CSS Animation for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}