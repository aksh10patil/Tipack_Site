"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Package,
  ChevronDown,
  ArrowRight,
  Check,
  X,
  SlidersHorizontal
} from "lucide-react";

// --- MOCK DATA ---
const INVENTORY = [
  { id: "BX-101", name: "Heavy Duty Cube", category: "Boxes", price: 3.50, stock: "High", sku: "882-A", image: "/box1.png" },
  { id: "BX-104", name: "Flat Shipper", category: "Boxes", price: 1.25, stock: "Low", sku: "882-B", image: "/box2.png" },
  { id: "ML-202", name: "Bubble Mailer", category: "Mailers", price: 0.45, stock: "High", sku: "991-X", image: "/mail1.png" },
  { id: "ML-205", name: "Rigid Document", category: "Mailers", price: 0.85, stock: "Out", sku: "991-Y", image: "/mail2.png" },
  { id: "TP-301", name: "Reinforced Tape", category: "Supplies", price: 4.50, stock: "High", sku: "772-T", image: "/tape1.png" },
  { id: "TP-305", name: "Fragile Labels", category: "Supplies", price: 9.00, stock: "Med", sku: "772-L", image: "/label1.png" },
  { id: "BX-999", name: "Master Crate", category: "Boxes", price: 12.00, stock: "Med", sku: "882-Z", image: "/crate.png" },
  { id: "FL-001", name: "Packing Peanuts", category: "Supplies", price: 15.00, stock: "High", sku: "661-P", image: "/peanut.png" },
];

const CATEGORIES = ["All", "Boxes", "Mailers", "Supplies"];

export default function CatalogSection() {
  // --- STATE ---
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // --- DESIGN CONSTANTS ---
  const TAPE_COLOR = "%23F4D03F"; // Yellow
  const serratedEdgeLeft = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E`;
  const serratedEdgeRight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E`;

  // --- FILTER LOGIC ---
  const filteredInventory = INVENTORY.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <div className="mb-12 border-b-4 border-black pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="bg-black text-white inline-block px-2 py-1 mb-2 font-mono text-xs font-bold uppercase tracking-widest">
                System: Online // Database: V.2.4
              </div>
              <h1 className="text-6xl font-black uppercase tracking-tighter leading-none">
                Master <br /> Inventory
              </h1>
            </div>
            
            {/* Search Input - Industrial Style */}
            <div className="w-full md:w-auto flex-1 max-w-md">
              <label className="block text-xs font-bold uppercase mb-1 ml-1">Search SKU or Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400 group-focus-within:text-black transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="TYPE TO SEARCH..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border-2 border-black bg-white placeholder-gray-300 font-bold uppercase focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_#F4D03F] transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- SIDEBAR: "THE CLIPBOARD" --- */}
          <div className="w-full lg:w-64 flex-shrink-0">
             <div className="bg-white border-2 border-black p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-24">
                
                {/* Clipboard Header (Simulated Clip) */}
                <div className="h-4 bg-[#333] border-b-2 border-black mx-4 mt-[-8px] relative rounded-sm"></div>
                
                <div className="p-6">
                    <h3 className="font-black text-xl uppercase mb-6 flex items-center gap-2">
                        <SlidersHorizontal size={20} /> Specs
                    </h3>

                    {/* Category Filter */}
                    <div className="mb-8">
                        <p className="font-mono text-xs font-bold text-gray-500 mb-3 border-b border-gray-300 pb-1">DEPARTMENT</p>
                        <div className="space-y-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`w-full text-left px-3 py-2 font-bold uppercase border-2 transition-all flex justify-between items-center ${
                                        activeCategory === cat 
                                        ? "bg-[#F4D03F] border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-1" 
                                        : "bg-transparent border-transparent text-gray-400 hover:border-gray-200 hover:text-black"
                                    }`}
                                >
                                    {cat}
                                    {activeCategory === cat && <Check size={16} />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Fake Technical Filters (Visual Only) */}
                    <div>
                        <p className="font-mono text-xs font-bold text-gray-500 mb-3 border-b border-gray-300 pb-1">MATERIAL GRADE</p>
                        <label className="flex items-center gap-3 mb-2 cursor-pointer group">
                            <div className="w-5 h-5 border-2 border-black bg-white group-hover:bg-black transition-colors"></div>
                            <span className="font-bold text-sm uppercase">ECT-32 (Standard)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                             <div className="w-5 h-5 border-2 border-black bg-white group-hover:bg-black transition-colors"></div>
                            <span className="font-bold text-sm uppercase">ECT-44 (Heavy)</span>
                        </label>
                    </div>
                </div>

                {/* Footer of Clipboard */}
                <div className="bg-gray-100 p-3 text-center border-t-2 border-black">
                    <button className="text-xs font-bold underline decoration-2 uppercase hover:text-red-600">Reset Filters</button>
                </div>
             </div>
          </div>

          {/* --- MAIN GRID --- */}
          <div className="flex-1">
             
             {/* Results Count Bar */}
             <div className="mb-6 flex items-center gap-2">
                <div className="h-[2px] bg-black flex-1"></div>
                <div className="font-mono text-xs font-bold bg-[#F4D03F] px-2 py-1 border border-black">
                    SHOWING {filteredInventory.length} UNITS
                </div>
             </div>

             {/* Grid */}
             {filteredInventory.length > 0 ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredInventory.map((item) => (
                        <InventoryCard key={item.id} item={item} />
                    ))}
                 </div>
             ) : (
                 <div className="border-2 border-dashed border-black p-12 text-center opacity-50">
                    <Package size={48} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-black uppercase">No Units Found</h3>
                    <p className="font-mono">Adjust your search parameters.</p>
                 </div>
             )}

             {/* Pagination (Load More) */}
             <div className="mt-16 text-center">
                <button className="relative inline-block group">
                    <span className="absolute inset-0 w-full h-full bg-black translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></span>
                    <span className="relative block border-2 border-black bg-white px-8 py-4 font-black uppercase tracking-widest text-lg hover:bg-[#F4D03F] transition-colors">
                        Load Next Batch
                    </span>
                </button>
             </div>

          </div>

        </div>
      </div>
    </div>
  );
}

// --- COMPONENT: INVENTORY CARD ---
function InventoryCard({ item }: { item: any }) {
    // Stock Status Logic
    const getStockColor = (status: string) => {
        if(status === 'High') return 'bg-green-400';
        if(status === 'Med') return 'bg-[#F4D03F]';
        return 'bg-red-400';
    };

    return (
        <div className="group border-2 border-black bg-white flex flex-col hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            
            {/* Header / Meta */}
            <div className="flex justify-between items-center border-b-2 border-black p-2 bg-gray-50">
                <span className="font-mono text-xs font-bold text-gray-500">SKU: {item.sku}</span>
                <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full border border-black ${getStockColor(item.stock)}`}></div>
                    <span className="font-mono text-[10px] font-bold uppercase">{item.stock === 'Out' ? 'NO STOCK' : 'AVAILABLE'}</span>
                </div>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-square bg-[#F2F2F2] border-b-2 border-black relative overflow-hidden flex items-center justify-center p-6">
                 {/* This would be an img tag in prod */}
                 <div className="w-full h-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Package size={40} className="text-gray-300" />
                 </div>
                 
                 {/* Overlay Grid */}
                 <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <div className="mb-1 text-xs font-bold text-gray-400 uppercase tracking-widest">{item.category}</div>
                <h3 className="font-black text-xl leading-none uppercase mb-4">{item.name}</h3>
                
                <div className="mt-auto flex items-end justify-between">
                    <div>
                        <span className="block text-[10px] font-mono text-gray-500">UNIT PRICE</span>
                        <span className="text-2xl font-black">${item.price.toFixed(2)}</span>
                    </div>
                    <button className="bg-black text-white p-2 hover:bg-[#F4D03F] hover:text-black transition-colors border-2 border-transparent hover:border-black">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}