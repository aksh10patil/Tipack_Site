"use client";

import React, { useState } from "react";
import {
  Printer,
  Truck,
  PenTool,
  Ruler,
  Package,
  ArrowRight,
  CheckSquare,
  ClipboardList,
  Stamp
} from "lucide-react";

export default function ServicesPage() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("print");

  // --- DESIGN CONSTANTS ---
  const TAPE_COLOR = "%23F4D03F"; // Yellow
  const BLUE_TAPE_COLOR = "%2360A5FA"; // Blueprint Blue for Design
  
  // Re-using your exact SVGs for consistency
  const serratedEdgeLeft = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E`;
  const serratedEdgeRight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E`;
  
  const serratedBlueLeft = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${BLUE_TAPE_COLOR}' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E`;
  const serratedBlueRight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${BLUE_TAPE_COLOR}' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E`;

  const handleScrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFEF9] text-[#2D2424] font-sans pt-24 pb-20 relative overflow-x-hidden">
      
      {/* Global Background Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
          backgroundSize: "300px auto",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* --- HERO SECTION --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block bg-black text-white px-3 py-1 font-bold text-sm mb-2 transform rotate-1">
              OPERATIONS DEPT.
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              Heavy Duty <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#eac124] drop-shadow-[4px_4px_0px_#000]">
                Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg font-medium max-w-md border-l-4 border-[#F4D03F] pl-4">
              We don't just sell boxes. We design, print, and ship the chaos. 
              <br />Full-stack packaging infrastructure.
            </p>
          </div>

          {/* Navigation Toolbar (Styled like your filter bar) */}
          <div className="w-full md:w-auto bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-wrap gap-2">
            <button
              onClick={() => handleScrollTo('print')}
              className={`flex items-center gap-2 px-4 py-2 border-2 border-black font-bold transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none ${activeTab === 'print' ? 'bg-[#F4D03F]' : 'bg-white hover:bg-gray-50'}`}
            >
              <Printer size={18} /> Custom Print
            </button>
            <button
              onClick={() => handleScrollTo('logistics')}
              className={`flex items-center gap-2 px-4 py-2 border-2 border-black font-bold transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none ${activeTab === 'logistics' ? 'bg-[#F4D03F]' : 'bg-white hover:bg-gray-50'}`}
            >
              <Truck size={18} /> Logistics
            </button>
            <button
              onClick={() => handleScrollTo('design')}
              className={`flex items-center gap-2 px-4 py-2 border-2 border-black font-bold transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none ${activeTab === 'design' ? 'bg-[#60A5FA] text-black' : 'bg-white hover:bg-gray-50'}`}
            >
              <PenTool size={18} /> Design Studio
            </button>
          </div>
        </div>

        {/* --- SECTION 1: CUSTOM PRINT --- */}
        <div id="print" className="mb-32 scroll-mt-28">
           {/* Tape Header */}
           <div className="relative inline-block mb-8 transform -rotate-1">
            <div className="absolute left-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeLeft}")`, backgroundSize: "12px 12px" }} />
            <div className="absolute right-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeRight}")`, backgroundSize: "12px 12px" }} />
            <div className="bg-[#F4D03F] px-8 py-2 text-2xl font-black uppercase tracking-tight shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex items-center gap-2">
              <Stamp size={24} /> Ink & Branding
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Content */}
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-4xl font-black mb-4 uppercase leading-none">
                Make it <span className="bg-[#F4D03F] px-1">Loud.</span>
              </h2>
              <p className="font-medium text-lg mb-6">
                Generic boxes get thrown away. Branded boxes get Instagrammed. We use high-vis industrial inks that bleed into the cardboard for that raw, stamped look.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                    <CheckSquare className="text-[#F4D03F] fill-black shrink-0" />
                    <span className="font-bold">Flexographic printing (Cheap, fast, gritty)</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckSquare className="text-[#F4D03F] fill-black shrink-0" />
                    <span className="font-bold">Digital direct-to-corrugate (For limited drops)</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckSquare className="text-[#F4D03F] fill-black shrink-0" />
                    <span className="font-bold">Inside-the-box messaging</span>
                </li>
              </ul>

              <button className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-[#F4D03F] hover:text-black border-2 border-transparent hover:border-black transition-all">
                Upload your vector
              </button>
            </div>

            {/* Right: Visual (Mockup Style) */}
            <div className="bg-[#F2F2F2] border-2 border-black p-4 relative flex items-center justify-center overflow-hidden">
               {/* Grid Pattern Overlay */}
               <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
               
               {/* The "Box" */}
               <div className="relative w-64 h-64 bg-[#dcb888] border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center transform rotate-3 transition-transform hover:rotate-0 duration-500">
                  <div className="absolute top-2 left-2 text-[10px] font-mono border border-black px-1 opacity-50">FRAGILE</div>
                  <div className="font-black text-4xl text-[#2D2424] opacity-80 mix-blend-multiply border-4 border-[#2D2424] p-2 rotate-[-5deg]">
                    YOUR LOGO
                  </div>
                  <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                     <div className="h-8 w-1 bg-black opacity-20"></div>
                     <div className="h-8 w-2 bg-black opacity-20"></div>
                     <div className="h-8 w-4 bg-black opacity-20"></div>
                  </div>
               </div>
               
               {/* Sticker */}
               <div className="absolute top-10 right-10 bg-[#F4D03F] text-black text-xs font-black px-3 py-2 border-2 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                 INK READY
               </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: LOGISTICS --- */}
        <div id="logistics" className="mb-32 scroll-mt-28">
           {/* Tape Header */}
           <div className="relative inline-block mb-8 transform rotate-1">
            <div className="absolute left-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeLeft}")`, backgroundSize: "12px 12px" }} />
            <div className="absolute right-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeRight}")`, backgroundSize: "12px 12px" }} />
            <div className="bg-[#F4D03F] px-8 py-2 text-2xl font-black uppercase tracking-tight shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex items-center gap-2">
              <Truck size={24} /> 3PL & Fulfillment
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
             {/* "Manifest" Card */}
             <div className="flex-1 bg-white border-2 border-black p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white p-3 font-mono text-sm border-b-2 border-black flex justify-between">
                    <span>MANIFEST_ID: #882-X</span>
                    <span>STATUS: ACTIVE</span>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 border-2 border-black flex items-center justify-center font-black text-xl">1</div>
                        <div>
                            <h3 className="font-bold text-lg">Warehousing</h3>
                            <p className="text-sm font-medium text-gray-600">We store your junk in our secure, climate-controlled fortresses.</p>
                        </div>
                    </div>
                    <div className="w-full h-[2px] bg-black bg-opacity-10 border-t border-dashed border-black"></div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-[#F4D03F] border-2 border-black flex items-center justify-center font-black text-xl">2</div>
                        <div>
                            <h3 className="font-bold text-lg">Pick & Pack</h3>
                            <p className="text-sm font-medium text-gray-600">Robots (and some humans) pack your orders with aggressive efficiency.</p>
                        </div>
                    </div>
                     <div className="w-full h-[2px] bg-black bg-opacity-10 border-t border-dashed border-black"></div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 border-2 border-black flex items-center justify-center font-black text-xl">3</div>
                        <div>
                            <h3 className="font-bold text-lg">Shipping</h3>
                            <p className="text-sm font-medium text-gray-600">Discounted rates with carriers who fear us.</p>
                        </div>
                    </div>
                </div>
             </div>

             {/* Stat Cards */}
             <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="bg-[#F4D03F] border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 transition-transform">
                    <Package className="mb-2" size={32} />
                    <h4 className="font-black text-3xl">99.9%</h4>
                    <p className="font-mono text-sm font-bold">Accuracy Rate</p>
                </div>
                <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 transition-transform">
                    <ClipboardList className="mb-2" size={32} />
                    <h4 className="font-black text-3xl">24h</h4>
                    <p className="font-mono text-sm font-bold">Turnaround Time</p>
                </div>
                <button className="mt-auto bg-black text-white p-4 font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors flex justify-between items-center group">
                    <span>Get Logistics Quote</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>
        </div>

        {/* --- SECTION 3: DESIGN STUDIO --- */}
        <div id="design" className="mb-20 scroll-mt-28">
           {/* Blue Tape Header */}
           <div className="relative inline-block mb-8 transform -rotate-1">
            <div className="absolute left-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedBlueLeft}")`, backgroundSize: "12px 12px" }} />
            <div className="absolute right-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedBlueRight}")`, backgroundSize: "12px 12px" }} />
            <div className="bg-[#60A5FA] text-black px-8 py-2 text-2xl font-black uppercase tracking-tight shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex items-center gap-2">
              <Ruler size={24} /> Structural Engineering
            </div>
          </div>

          <div className="bg-[#2D2424] text-[#FFFEF9] border-2 border-black p-8 shadow-[8px_8px_0px_0px_#60A5FA] relative overflow-hidden">
             {/* Blueprint Grid Background */}
             <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ 
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
                    backgroundSize: '40px 40px' 
                }} 
             />

             <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        IF IT FITS, <br/>
                        IT SHIPS.
                    </h2>
                    <p className="text-white font-mono mb-8 max-w-lg">
                        Need a box for a surfboard? A chandelier? A car engine?
                        Our structural engineers use CAD to design custom die-lines that minimize waste and maximize protection. 
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="border border-white/30 px-4 py-2 font-mono text-sm">
                            <span className="block text-gray-500 text-xs">TOLERANCE</span>
                            +/- 1mm
                        </div>
                        <div className="border border-white/30 px-4 py-2 font-mono text-sm">
                            <span className="block text-gray-500 text-xs">MATERIAL</span>
                            E-Flute
                        </div>
                         <div className="border border-white/30 px-4 py-2 font-mono text-sm">
                            <span className="block text-gray-500 text-xs">TEST</span>
                            ECT-32
                        </div>
                    </div>
                </div>

                {/* Blueprint Graphic */}
                <div className="w-full md:w-1/2 aspect-video border-2 border-white/20 bg-[#1a1515] p-4 relative">
                    {/* SVG Blueprint Mockup */}
                    <svg viewBox="0 0 200 120" className="w-full h-full stroke-white/80 fill-none stroke-[0.5]">
                        <rect x="20" y="20" width="160" height="80" />
                        <line x1="20" y1="20" x2="60" y2="60" />
                        <line x1="180" y1="20" x2="140" y2="60" />
                        <line x1="20" y1="100" x2="60" y2="60" />
                        <line x1="180" y1="100" x2="140" y2="60" />
                        <rect x="60" y="60" width="80" height="0.5" className="stroke-dashed" strokeDasharray="2" />
                        {/* Dimensions */}
                        <text x="100" y="115" className="fill-white text-[6px] font-mono text-center" textAnchor="middle">400mm</text>
                        <text x="10" y="60" className="fill-white text-[6px] font-mono text-center rotate-[-90deg]" textAnchor="middle">250mm</text>
                    </svg>
                    <div className="absolute bottom-2 right-2 text-[8px] font-mono text-white/50 border border-white/20 px-1">
                        FIG 1.2
                    </div>
                </div>
             </div>

             <div className="mt-8 pt-8 border-t border-white/20 flex justify-end">
                <button className="bg-[#60A5FA] text-black px-8 py-3 font-bold border-2 border-transparent hover:border-white transition-all uppercase tracking-wider">
                    Request CAD Files
                </button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}