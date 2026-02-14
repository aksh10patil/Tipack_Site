"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./Button";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // SVG Data URIs for the torn edges.
    const leftTearSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='24' viewBox='0 0 15 24'%3E%3Cpath fill='%23F4D03F' d='M15 0H0l2.5 2-1.5 2 3 3-2 3 2.5 2-1.5 2 3 3-2 3 2.5 2-1.5 2H15z'/%3E%3C/svg%3E`;
    const rightTearSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='24' viewBox='0 0 15 24'%3E%3Cpath fill='%23F4D03F' d='M0 0h15l-2.5 2 1.5 2-3 3 2 3-2.5 2 1.5 2-3 3 2 3-2.5 2 1.5 2H0z'/%3E%3C/svg%3E`;

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 font-sans">
            {/* The "Tape" Container 
          We apply a filter chain here. 
          The first 4 drop-shadows create the SOLID BLACK BORDER effect around the irregular shape.
          The final drop-shadow adds the 3D depth.
      */}
            <div
                className="relative w-full max-w-6xl transform -rotate-1 transition-transform hover:rotate-0 duration-300 ease-out"
                style={{
                    filter: `
            drop-shadow(0px 2px 0px #000000) 
            drop-shadow(0px -2px 0px #000000) 
            drop-shadow(2px 0px 0px #000000) 
            drop-shadow(-2px 0px 0px #000000) 
            drop-shadow(0px 4px 6px rgba(0,0,0,0.3))
          `,
                }}
            >
                {/* LEFT Jagged Edge */}
                <div
                    className="absolute left-[-14px] top-0 bottom-0 w-[15px]"
                    style={{
                        backgroundImage: `url("${leftTearSvg}")`,
                        backgroundPosition: "left top",
                        backgroundRepeat: "repeat-y",
                        backgroundSize: "15px 24px",
                    }}
                />

                {/* RIGHT Jagged Edge */}
                <div
                    className="absolute right-[-14px] top-0 bottom-0 w-[15px]"
                    style={{
                        backgroundImage: `url("${rightTearSvg}")`,
                        backgroundPosition: "right top",
                        backgroundRepeat: "repeat-y",
                        backgroundSize: "15px 24px",
                    }}
                />

                {/* Main Tape Body */}
                <nav className="relative bg-[#F4D03F] px-6 py-4 flex items-center justify-between">
                    {/* Texture Overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-80"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.4), transparent), url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
                            backgroundSize: "100% auto, auto",
                        }}
                    />

                    {/* Left Links */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-bold text-[#2D2424] z-10">
                        <div className="flex items-center gap-1 cursor-pointer group">
                            Products{" "}
                            <ChevronDown
                                size={14}
                                className="group-hover:translate-y-0.5 transition-transform"
                            />
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer group">
                            Services{" "}
                            <ChevronDown
                                size={14}
                                className="group-hover:translate-y-0.5 transition-transform"
                            />
                        </div>
                        <Link href="#" className="hover:opacity-70">
                            Brands
                        </Link>
                        <Link href="#" className="hover:opacity-70">
                            Catalog
                        </Link>
                        <Link href="#" className="hover:opacity-70">
                            Pricing
                        </Link>
                    </div>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <Link
                            href="/"
                            className="text-2xl font-black tracking-tight text-[#2D2424]"
                        >
                            Tipack
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-6 z-10">
                        <Link
                            href="#"
                            className="text-sm font-medium text-[#2D2424] hover:opacity-70"
                        >
                            Submit Request
                        </Link>
                        <Button
                            variant="primary"
                            className="border-2 border-black shadow-none hover:shadow-md transition-shadow"
                        >
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

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-[calc(100%_+_10px)] left-0 right-0 p-6 bg-[#FFFEF9] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1 animate-in slide-in-from-top-2 duration-200 z-40">
                        <div className="flex flex-col space-y-4 text-center text-[#2D2424] font-bold">
                            <Link href="#" className="hover:text-yellow-600 transition-colors">
                                Products
                            </Link>
                            <Link href="#" className="hover:text-yellow-600 transition-colors">
                                Services
                            </Link>
                            <Link href="#" className="hover:text-yellow-600 transition-colors">
                                Brands
                            </Link>
                            <Link href="#" className="hover:text-yellow-600 transition-colors">
                                Catalog
                            </Link>
                            <Link href="#" className="hover:text-yellow-600 transition-colors">
                                Pricing
                            </Link>
                            <hr className="border-black" />
                            <Link href="#" className="hover:text-yellow-600 transition-colors">
                                Submit Request
                            </Link>
                            <Button
                                variant="primary"
                                className="w-full justify-center border-2 border-black"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}