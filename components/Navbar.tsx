"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./Button";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 font-sans">
            {/* The "Tape" Container */}
            <div
                className="relative w-full max-w-6xl transform -rotate-1 transition-transform hover:rotate-0 duration-300 ease-out"
                style={{ filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.15))" }}
            >
                {/* LEFT Jagged Edge */}
                <div
                    className="absolute left-[-14px] top-0 bottom-0 w-[15px] bg-[#F4D03F]"
                    style={{
                        backgroundImage: `linear-gradient(45deg, transparent 50%, #F4D03F 50%), 
                              linear-gradient(-45deg, transparent 50%, #F4D03F 50%)`,
                        backgroundPosition: "left bottom",
                        backgroundRepeat: "repeat-y",
                        backgroundSize: "20px 20px"
                    }}
                />

                {/* RIGHT Jagged Edge */}
                <div
                    className="absolute right-[-14px] top-0 bottom-0 w-[15px] bg-[#F4D03F]"
                    style={{
                        backgroundImage: `linear-gradient(135deg, transparent 50%, #F4D03F 50%), 
                              linear-gradient(-135deg, transparent 50%, #F4D03F 50%)`,
                        backgroundPosition: "right bottom",
                        backgroundRepeat: "repeat-y",
                        backgroundSize: "20px 20px"
                    }}
                />

                {/* Main Tape Body */}
                <nav className="relative bg-[#F4D03F] px-6 py-4 flex items-center justify-between">

                    {/* Texture Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none mix-blend-overlay" />

                    {/* Left Links */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-bold text-[#2D2424] z-10">
                        <div className="flex items-center gap-1 cursor-pointer group">
                            Products <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer group">
                            Services <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                        </div>
                        <Link href="#" className="hover:opacity-70">Brands</Link>
                        <Link href="#" className="hover:opacity-70">Catalog</Link>
                        <Link href="#" className="hover:opacity-70">Pricing</Link>
                    </div>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <Link href="/" className="text-2xl font-black tracking-tight text-[#2D2424]">
                            DuckPak
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-6 z-10">
                        <Link href="#" className="text-sm font-medium text-[#2D2424] hover:opacity-70">
                            Submit Request
                        </Link>
                        <Button variant="primary">
                            Contact Us
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden z-10 ml-auto">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[#2D2424] p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown (Paper Note Style) */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-6 bg-[#FFFEF9] shadow-xl border-2 border-dashed border-gray-300 transform rotate-1 animate-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-col space-y-4 text-center text-[#2D2424] font-bold">
                            <Link href="#" className="hover:text-yellow-600 transition-colors">Products</Link>
                            <Link href="#" className="hover:text-yellow-600 transition-colors">Services</Link>
                            <Link href="#" className="hover:text-yellow-600 transition-colors">Brands</Link>
                            <Link href="#" className="hover:text-yellow-600 transition-colors">Catalog</Link>
                            <Link href="#" className="hover:text-yellow-600 transition-colors">Pricing</Link>
                            <hr className="border-gray-200" />
                            <Link href="#" className="hover:text-yellow-600 transition-colors">Submit Request</Link>
                            <Button variant="primary" className="w-full justify-center">Contact Us</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}