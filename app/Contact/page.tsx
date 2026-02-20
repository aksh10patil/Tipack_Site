"use client";

import React, { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Radio,
  AlertTriangle,
  Siren,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function ContactSection() {
  // --- STATE ---
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [ticketID] = useState(`TKT-${Math.floor(Math.random() * 10000)}`);

  // --- DESIGN CONSTANTS ---
  const TAPE_COLOR = "%23F4D03F"; // Yellow
  const serratedEdgeLeft = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E`;
  const serratedEdgeRight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate network request
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFFEF9] text-[#2D2424] font-sans pt-24 pb-20 relative overflow-x-hidden">
      
      {/* Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
          backgroundSize: "300px auto",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* --- HEADER --- */}
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Radio className="animate-pulse text-red-600" size={20} />
                    <span className="font-mono text-sm font-bold uppercase tracking-widest text-red-600">Live Feed // Channel 4</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                    Dispatch <br /> Center
                </h1>
            </div>
            
            <div className="bg-black text-white p-4 max-w-sm border-l-4 border-[#F4D03F] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                <p className="font-mono text-xs uppercase leading-relaxed">
                    <strong className="text-[#F4D03F]">NOTICE:</strong> Due to high volume of orders, our support team is currently prioritizing shipping over chatting. Keep it brief.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* --- LEFT: THE "INCIDENT REPORT" FORM --- */}
          <div className="relative">
             {/* Tape Header */}
             <div className="relative inline-block mb-0 z-20 ml-4 transform rotate-1">
                <div className="absolute left-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeLeft}")`, backgroundSize: "12px 12px" }} />
                <div className="absolute right-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeRight}")`, backgroundSize: "12px 12px" }} />
                <div className="bg-[#F4D03F] px-6 py-1 text-xl font-black uppercase tracking-tight shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
                  Transmission Log
                </div>
             </div>

             <div className="bg-white border-2 border-black p-8 pt-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative">
                {/* Form Status: Success Overlay */}
                {formStatus === 'sent' ? (
                    <div className="absolute inset-0 bg-white/90 z-30 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 size={80} className="text-[#F4D03F] fill-black mb-4" />
                        <h3 className="text-4xl font-black uppercase mb-2">Message <br/> Logged</h3>
                        <p className="font-mono font-bold text-gray-500">REF ID: {ticketID}</p>
                        <button 
                            onClick={() => setFormStatus('idle')}
                            className="mt-8 underline font-bold uppercase hover:text-[#F4D03F]"
                        >
                            Send another
                        </button>
                    </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2 mb-6">
                        <span className="font-mono text-xs font-bold text-gray-400">TICKET_ID: <span className="text-black">{ticketID}</span></span>
                        <span className="font-mono text-xs font-bold text-gray-400">PRIORITY: <span className="text-red-600">NORMAL</span></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <label className="block text-xs font-black uppercase mb-1 ml-1 group-focus-within:text-[#F4D03F] transition-colors">Operative Name</label>
                            <input required type="text" placeholder="JOHN DOE" className="w-full bg-[#F2F2F2] border-2 border-transparent focus:bg-white focus:border-black p-3 font-bold uppercase placeholder-gray-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_#F4D03F] transition-all" />
                        </div>
                        <div className="group">
                            <label className="block text-xs font-black uppercase mb-1 ml-1 group-focus-within:text-[#F4D03F] transition-colors">Comms Frequency (Email)</label>
                            <input required type="email" placeholder="JOHN@CORP.COM" className="w-full bg-[#F2F2F2] border-2 border-transparent focus:bg-white focus:border-black p-3 font-bold uppercase placeholder-gray-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_#F4D03F] transition-all" />
                        </div>
                    </div>

                    <div className="group">
                         <label className="block text-xs font-black uppercase mb-1 ml-1 group-focus-within:text-[#F4D03F] transition-colors">Subject</label>
                         <div className="relative">
                            <select className="w-full bg-[#F2F2F2] border-2 border-transparent focus:bg-white focus:border-black p-3 font-bold uppercase appearance-none focus:outline-none focus:shadow-[4px_4px_0px_0px_#F4D03F] transition-all cursor-pointer">
                                <option>Order Inquiry (Where is my stuff?)</option>
                                <option>Wholesale Application</option>
                                <option>Report Damaged Cargo</option>
                                <option>General Threat/Compliment</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">▼</div>
                         </div>
                    </div>

                    <div className="group">
                        <label className="block text-xs font-black uppercase mb-1 ml-1 group-focus-within:text-[#F4D03F] transition-colors">Message Payload</label>
                        <textarea required rows={5} placeholder="STATE YOUR BUSINESS..." className="w-full bg-[#F2F2F2] border-2 border-transparent focus:bg-white focus:border-black p-3 font-bold uppercase placeholder-gray-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_#F4D03F] transition-all resize-none"></textarea>
                    </div>

                    <div className="pt-4 border-t-2 border-black border-dashed">
                        <button 
                            disabled={formStatus === 'sending'}
                            type="submit" 
                            className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-[#F4D03F] hover:text-black hover:border-black border-2 border-transparent transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {formStatus === 'sending' ? (
                                <span className="animate-pulse">Transmitting...</span>
                            ) : (
                                <>
                                    Initiate Transmission <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
             </div>
          </div>

          {/* --- RIGHT: HQ INFO & MAP --- */}
          <div className="flex flex-col gap-8">
            
            {/* 1. Radar Map Visualization (CSS Only) */}
            <div className="bg-[#2D2424] h-80 w-full border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                 {/* Grid */}
                 <div 
                    className="absolute inset-0 opacity-20" 
                    style={{ 
                        backgroundImage: `linear-gradient(#4ADE80 1px, transparent 1px), linear-gradient(90deg, #4ADE80 1px, transparent 1px)`, 
                        backgroundSize: '40px 40px' 
                    }} 
                 />
                 {/* Radar Sweep Animation */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent w-full h-full animate-[spin_4s_linear_infinite] origin-bottom-right opacity-50"></div>
                 
                 {/* Target Marker */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform">
                    <MapPin size={48} className="text-[#F4D03F] fill-black animate-bounce" />
                    <div className="bg-black text-[#F4D03F] text-xs font-mono px-2 py-1 mt-2 border border-[#F4D03F]">
                        HQ: SECTOR 7G
                    </div>
                 </div>

                 <div className="absolute bottom-4 left-4 font-mono text-green-500 text-xs">
                    LAT: 40.7128 N <br/>
                    LNG: 74.0060 W
                 </div>
            </div>

            {/* 2. Contact Details Card */}
            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_#FF4D4D] flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
                        <Siren className="text-[#FF4D4D]" /> Hardlines
                    </h3>
                    
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-black text-white p-2">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-gray-500 font-bold">EMERGENCY ONLY</p>
                                <p className="text-xl font-black tracking-tight hover:underline cursor-pointer">1-800-HEAVY-BOX</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-black text-white p-2">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-gray-500 font-bold">GENERAL INQUIRIES</p>
                                <p className="text-xl font-black tracking-tight hover:underline cursor-pointer">supply@crate.com</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <div className="bg-black text-white p-2">
                                <Clock size={20} />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-gray-500 font-bold">LOADING DOCK HOURS</p>
                                <p className="text-lg font-bold">Mon-Fri: 0600 - 1800</p>
                                <p className="text-lg font-bold text-gray-400">Sat-Sun: CLOSED</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mt-8 border-t-2 border-black pt-4">
                    <p className="font-mono text-xs text-gray-500">
                        PHYSICAL ADDRESS: <br/>
                        <span className="text-black font-bold text-sm">89 Industrial Blvd, Dock 4, Brooklyn, NY 11211</span>
                    </p>
                </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM ALERT STRIP --- */}
        <div className="mt-20 bg-[#F4D03F] border-2 border-black p-4 flex items-center justify-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <AlertTriangle className="text-black" size={24} />
            <p className="font-bold text-sm md:text-base uppercase tracking-wide">
                Warning: Visitors without steel-toe boots will be denied entry.
            </p>
            <AlertTriangle className="text-black" size={24} />
        </div>

      </div>
    </div>
  );
}