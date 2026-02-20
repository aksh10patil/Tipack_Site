"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  AlertTriangle,
  Box,
  Mail,
  X,
  Trash2,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  size?: string;
  badge?: string | null;
  desc?: string;
  oldPrice?: string;
}

export default function ProductsPage() {
  // --- STATE MANAGEMENT ---
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // --- DESIGN CONSTANTS ---
  const TAPE_COLOR = "%23F4D03F";
  const RED_TAPE_COLOR = "%23FF4D4D";

  // Serrated Edge SVGs
  const serratedEdgeLeft = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E`;
  const serratedEdgeRight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E`;
  const serratedRedLeft = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${RED_TAPE_COLOR}' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E`;
  const serratedRedRight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${RED_TAPE_COLOR}' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E`;

  // --- DATA MOCKUPS (Updated with Images) ---
  const boxes = [
    { id: 1, name: "Heavy Duty Corrugated", size: "12x12x12", price: 2.50, badge: "Best Seller", image: "/images/big_box.png" },
    { id: 2, name: "Standard Shipping Box", size: "10x8x6", price: 1.20, badge: null, image: "/images/yellow-box.png" },
    { id: 3, name: "Wardrobe Moving Box", size: "24x24x40", price: 12.00, badge: "New", image: "/images/wardrobe_box.png" },
    { id: 4, name: "Flat Multi-Depth Box", size: "Varied", price: 3.10, badge: null, image: "/images/Layered_Boxes.png" },
  ];

  const mailers = [
    { id: 5, name: "Kraft Bubble Mailer", size: "#0 (6x9)", price: 0.45, badge: "Eco-Friendly", image: "https://images.unsplash.com/photo-1629896841164-9842dc9352e6?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Poly Weatherproof", size: "10x13", price: 0.30, badge: "Bulk Save", image: "https://images.unsplash.com/photo-1565356514749-1d48c95027c4?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "Rigid Photo Mailer", size: "9x11.5", price: 0.85, badge: null, image: "https://images.unsplash.com/photo-1623862277370-16b7eb423631?auto=format&fit=crop&q=80&w=400" },
  ];

  const clearance = [
    { id: 8, name: "Misprint Tape Rolls", desc: "Logo slightly off-center", price: 0.99, oldPrice: "$4.50", image: "https://images.unsplash.com/photo-1598219660205-592f750b3cb1?auto=format&fit=crop&q=80&w=400" },
    { id: 9, name: "Overstock Peanuts", desc: "Huge bag, takes up space", price: 15.00, oldPrice: "$45.00", image: "https://images.unsplash.com/photo-1623945205423-f252643a6c9d?auto=format&fit=crop&q=80&w=400" },
  ];

  // --- ACTIONS ---
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToCart = (item: Product) => {
    setCart([...cart, item]);
    setToast(`${item.name} added to cart`);
    setIsCartOpen(true);

    // Auto hide toast
    setTimeout(() => setToast(null), 3000);
  };

  const removeFromCart = (indexToRemove: number) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

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

      {/* --- FLOATING TOAST NOTIFICATION --- */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 animate-bounce-in">
          <div className="bg-[#2D2424] text-[#FFFEF9] border-2 border-[#F4D03F] shadow-[4px_4px_0px_0px_#F4D03F] px-4 py-3 flex items-center gap-3 font-bold">
            <CheckCircle className="text-[#F4D03F]" size={20} />
            {toast}
          </div>
        </div>
      )}

      {/* --- LEFT SIDEBAR CART --- */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-[#FFFEF9] border-r-2 border-black transform transition-transform duration-300 ease-in-out shadow-[10px_0px_20px_rgba(0,0,0,0.1)] ${isCartOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full flex flex-col">
          <div className="bg-[#F4D03F] p-4 border-b-2 border-black flex justify-between items-center">
            <h2 className="font-black text-xl uppercase flex items-center gap-2">
              <ShoppingCart size={20} /> Your Crate
            </h2>
            <button onClick={() => setIsCartOpen(false)} className="hover:bg-black hover:text-white p-1 rounded-sm transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center opacity-50 mt-10 font-mono text-sm">
                Your crate is empty. <br /> Go break something.
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start border-b border-dashed border-gray-400 pb-2">
                  <div>
                    <p className="font-bold text-sm leading-tight">{item.name}</p>
                    <p className="text-xs text-gray-500 font-mono">${item.price.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromCart(idx)} className="text-red-500 hover:text-red-800">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t-2 border-black bg-gray-50">
            <div className="flex justify-between items-center mb-4 font-black text-xl">
              <span>TOTAL</span>
              <span>${cartTotal}</span>
            </div>
            <button className="w-full bg-black text-white py-3 font-bold uppercase tracking-wider hover:bg-[#F4D03F] hover:text-black border-2 border-transparent hover:border-black transition-all">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* --- CART TOGGLE BUTTON (If closed) --- */}
      {!isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed left-0 top-32 z-40 bg-[#F4D03F] border-y-2 border-r-2 border-black p-2 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:pl-4 transition-all"
        >
          <div className="flex flex-col items-center gap-1">
            <ShoppingCart size={20} />
            <span className="text-xs">{cart.length}</span>
          </div>
        </button>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* --- HERO SECTION --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block bg-black text-white px-3 py-1 font-bold text-sm mb-2 transform -rotate-2">
              EST. 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#eac124] drop-shadow-[4px_4px_0px_#000]">
                Master Catalog
              </span>
            </h1>
            <p className="mt-6 text-lg font-medium max-w-md border-l-4 border-[#F4D03F] pl-4">
              Industrial grade packaging for everyone. <br />
              Strong enough for shipping, ugly enough to be cool.
            </p>
          </div>

          {/* Filter Bar styled as a physical toolbar */}
          <div className="w-full md:w-auto bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-wrap gap-2">
            <button
              onClick={() => handleScrollTo('boxes')}
              className="flex items-center gap-2 px-4 py-2 bg-[#F4D03F] border-2 border-black font-bold hover:translate-y-0.5 hover:shadow-none transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Box size={18} /> Boxes
            </button>
            <button
              onClick={() => handleScrollTo('mailers')}
              className="flex items-center gap-2 px-4 py-2  bg-[#86EFAC]
 border-2 border-black font-bold hover:bg-gray-50 hover:translate-y-0.5 hover:shadow-none transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Mail size={18} /> Mailers
            </button>
            <button
              onClick={() => handleScrollTo('clearance')}
              className="flex items-center gap-2 px-4 py-2  bg-[#FECACA]
 border-2 border-black font-bold hover:bg-red-50 hover:text-red-600 hover:translate-y-0.5 hover:shadow-none transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <AlertTriangle size={18} /> Clearance
            </button>
          </div>
        </div>

        {/* --- SECTION: BOXES --- */}
        <div id="boxes" className="mb-20 scroll-mt-24">
          {/* Tape Header Component */}
          <div className="relative inline-block mb-8 transform -rotate-1">
            <div className="absolute left-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeLeft}")`, backgroundSize: "12px 12px" }} />
            <div className="absolute right-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeRight}")`, backgroundSize: "12px 12px" }} />
            <div className="bg-[#F4D03F] px-8 py-2 text-2xl font-black uppercase tracking-tight shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
              Corrugated Boxes
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boxes.map((item) => (
              <ProductCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        </div>

        {/* --- SECTION: MAILERS --- */}
        <div id="mailers" className="mb-20 scroll-mt-24">
          {/* Tape Header Component */}
          <div className="relative inline-block mb-8 transform rotate-1">
            <div className="absolute left-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeLeft}")`, backgroundSize: "12px 12px" }} />
            <div className="absolute right-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedEdgeRight}")`, backgroundSize: "12px 12px" }} />
            <div className="bg-[#F4D03F] px-8 py-2 text-2xl font-black uppercase tracking-tight shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
              Envelopes & Mailers
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mailers.map((item) => (
              <ProductCard key={item.id} item={item} onAdd={addToCart} />
            ))}

            {/* Promo Card: Centered on the next row (start at col 2) */}
            <div className="md:col-start-2 border-2 border-black p-6 flex flex-col justify-center items-center text-center text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
              <h3 className="text-2xl font-black mb-2">Need Custom Print?</h3>
              <p className="text-sm text-white font-bold mb-6">We can stamp your ugly logo on any of these mailers.</p>
              <Link href="/Contact">
              <button className="px-6 py-2 bg-[#FFFEF9] text-black font-bold border-2 border-black hover:border-[#F4D03F] transition-colors">
                Get a Quote
              </button></Link>
            </div>
          </div>
        </div>

        {/* --- SECTION: CLEARANCE --- */}
        <div id="clearance" className="mb-20 scroll-mt-24">
          {/* Red Tape Header */}
          <div className="relative inline-block mb-8 transform -rotate-1">
            <div className="absolute left-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedRedLeft}")`, backgroundSize: "12px 12px" }} />
            <div className="absolute right-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("${serratedRedRight}")`, backgroundSize: "12px 12px" }} />
            <div className="bg-[#FF4D4D] text-white px-8 py-2 text-2xl font-black uppercase tracking-tight shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex items-center gap-2">
              <AlertTriangle size={24} strokeWidth={3} />
              The Boneyard
            </div>
          </div>

          <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_#FF4D4D] p-8 relative">
            {/* Background stripes for hazard look */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#FF4D4D_10px,#FF4D4D_20px)] border-b-2 border-black"></div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
              {clearance.map((item) => (
                <div key={item.id} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-24 h-24 bg-gray-100 border-2 border-black flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <div className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold px-1 z-10">
                      -60%
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold decoration-2 group-hover:underline decoration-[#FF4D4D] underline-offset-4">
                      {item.name}
                    </h4>
                    <p className="text-sm font-medium text-gray-500 mb-2">{item.desc}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-red-600">${item.price.toFixed(2)}</span>
                      <span className="text-sm text-gray-400 line-through decoration-2">{item.oldPrice}</span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="text-xs font-bold uppercase tracking-widest mt-2 hover:bg-black hover:text-white px-2 py-1 transition-colors border border-black"
                    >
                      Add to cart &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- SUB-COMPONENT: PRODUCT CARD ---
function ProductCard({ item, onAdd }: { item: Product; onAdd: (item: Product) => void }) {
  return (
    <div className="group relative bg-white border-2 border-black p-4 flex flex-col h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">

      {/* Badge (Absolute positioned sticker) */}
      {item.badge && (
        <div className="absolute -top-3 -right-3 bg-[#F4D03F] text-black text-xs font-black px-3 py-1 border-2 border-black transform rotate-6 z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
          {item.badge}
        </div>
      )}

      {/* Image Area */}
      <div className="aspect-square bg-[#F2F2F2] border-2 border-black mb-4 flex items-center justify-center relative overflow-hidden group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
        />
        {/* Overlay Grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg leading-tight group-hover:text-yellow-600 transition-colors">
            {item.name}
          </h3>
        </div>
        <p className="text-sm font-mono text-gray-500 mb-3">{item.size}</p>

        {/* RATING REMOVED as per request */}
      </div>

      {/* Footer / Actions */}
      <div className="mt-auto flex items-center justify-between border-t-2 border-black pt-3">
        <span className="text-xl font-black">${item.price.toFixed(2)}</span>
        <button
          onClick={() => onAdd(item)}
          className="bg-black text-white p-2 hover:bg-[#F4D03F] hover:text-black transition-colors border-2 border-transparent hover:border-black"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}