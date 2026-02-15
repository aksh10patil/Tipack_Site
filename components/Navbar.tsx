"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./Button"; // Assuming you have this component

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Define the Tape Color here so edges and body match perfectly.
  // This is a classic "Masking Tape" Yellow.
  const TAPE_COLOR = "%23F4D03F"; // URL Encoded #F4D03F

  // 2. Updated SVG Data URIs for a cleaner "Serrated" tape dispenser look.
  // We use a smaller viewport and repeat-y to handle any height.
  const serratedEdgeSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E`;
  
  // For the right side, we just flip the logic (or rotate the div)
  const serratedEdgeRightSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E`;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 font-sans">
      {/* The "Tape" Container 
        The drop-shadow filter is applied to the PARENT. 
        Because the children (Left, Right, Center) are the same color and touch,
        the filter treats them as one continuous shape and draws the outline around the whole group.
      */}
      <div
        className="relative w-full max-w-6xl transform -rotate-1 transition-transform hover:rotate-0 duration-300 ease-out"
        style={{
          filter: `
            drop-shadow(0px 2px 0px #000000) 
            drop-shadow(0px -2px 0px #000000) 
            drop-shadow(2px 0px 0px #000000) 
            drop-shadow(-2px 0px 0px #000000) 
            drop-shadow(0px 4px 6px rgba(0,0,0,0.2))
          `,
        }}
      >
        {/* LEFT Serrated Edge */}
        <div
          className="absolute left-[-11px] top-0 bottom-0 w-[12px]"
          style={{
            backgroundImage: `url("${serratedEdgeSvg}")`,
            backgroundPosition: "right top",
            backgroundRepeat: "repeat-y",
            backgroundSize: "12px 12px", // Controls the size of the "teeth"
          }}
        />

        {/* RIGHT Serrated Edge */}
        <div
          className="absolute right-[-11px] top-0 bottom-0 w-[12px]"
          style={{
            backgroundImage: `url("${serratedEdgeRightSvg}")`,
            backgroundPosition: "left top",
            backgroundRepeat: "repeat-y",
            backgroundSize: "12px 12px",
          }}
        />

        {/* Main Tape Body */}
        <nav className="relative bg-[#F4D03F] px-6 py-4 flex items-center justify-between">
          
          {/* Texture Overlay - Improved for "Tint" look */}
          {/* We use mix-blend-multiply to make the paper texture look embedded in the yellow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
            style={{
              backgroundImage: `url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
              backgroundSize: "300px auto",
            }}
          />
          
          {/* Subtle noise/grain for extra realism (Optional) */}
           <div className="absolute inset-0 pointer-events-none opacity-10 bg-white mix-blend-overlay" />

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
            <Link href="#" className="hover:opacity-70 transition-opacity">
              Brands
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              Catalog
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
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
              className="text-sm font-medium text-[#2D2424] hover:opacity-70 transition-opacity"
            >
              Submit Request
            </Link>
            <Button
              variant="primary"
              className="bg-white text-black border-2 border-black shadow-none hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
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
              <hr className="border-black opacity-20" />
              <Link href="#" className="hover:text-yellow-600 transition-colors">
                Submit Request
              </Link>
              <Button
                variant="primary"
                className="w-full justify-center border-2 border-black bg-[#F4D03F] hover:bg-[#eac124]"
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