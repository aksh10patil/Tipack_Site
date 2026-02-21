import React from "react";
import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function TipackFooter() {
  // A horizontal zigzag pattern for the top edge
  // This SVG creates a single "tooth" that repeats horizontally
  const topTearSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='15' viewBox='0 0 40 15'%3E%3Cpath fill='%23F4D03F' d='M0 15L20 0L40 15V15H0z'/%3E%3C/svg%3E`;

  return (
    <footer className="relative w-full mt-32">
      {/* ==============================================
                LAYER 1: The Paper Shape (Background)
                We apply the drop-shadow filter HERE only.
                This creates the black outline around the tear
                without blurring the text inside.
               ============================================== */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          filter: `
                        drop-shadow(0px -3px 0px #000000) 
                        drop-shadow(0px 0px 0px #000000) 
                        drop-shadow(4px 4px 8px rgba(0,0,0,0.2))
                    `,
        }}
      >
        {/* The Top Jagged Edge */}
        <div
          className="absolute -top-[14px] left-0 w-full h-[15px]"
          style={{
            backgroundImage: `url("${topTearSvg}")`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            backgroundSize: "40px 15px",
          }}
        />

        {/* The Solid Yellow Block */}
        <div className="w-full h-full bg-[#F4D03F]" />
      </div>

      {/* ==============================================
                LAYER 2: Texture & Decorations
                These sit on top of the yellow color.
               ============================================== */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60 z-0"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
          backgroundSize: "300px",
        }}
      />

      {/* "Scotch Tape" - Holding the footer to the page content above */}
      <div className="absolute -top-6 left-1/4 w-32 h-12 bg-white/30 -rotate-2 backdrop-blur-sm border-l border-r border-white/20 z-10 shadow-sm" />
      <div className="absolute -top-6 right-1/4 w-32 h-12 bg-white/30 rotate-1 backdrop-blur-sm border-l border-r border-white/20 z-10 shadow-sm" />

      {/* ==============================================
                LAYER 3: Content (Text)
                Standard grid layout, distinct from the background.
               ============================================== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 md:px-12 text-[#2D2424]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section (Span 4) */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-4xl font-black tracking-tighter hover:scale-105 transition-transform origin-left">
                Tipack.
              </h2>
            </Link>
            <p className="font-medium text-lg leading-relaxed opacity-90">
              The packaging company that hates boring brown boxes. We help
              brands stand out before the customer even opens the package.
            </p>

            {/* Newsletter Mini-Form */}
            <div className="pt-4">
              <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">
                Join the club
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="bg-white/50 border-2 border-black/10 px-4 py-2 rounded-lg w-full placeholder:text-black/30 focus:outline-none focus:border-black focus:bg-white transition-all"
                />
                <button className="bg-black text-[#F4D03F] p-2 rounded-lg hover:scale-110 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Links Section (Span 8 - Nested Grid) */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-black text-xl mb-6">Products</h3>
              <ul className="space-y-4 font-bold text-black/70">
                <li>
                  <Link
                    href="#"
                    className="hover:text-black hover:translate-x-1 inline-block transition-all"
                  >
                    Mailer Boxes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-black hover:translate-x-1 inline-block transition-all"
                  >
                    Poly Mailers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-black hover:translate-x-1 inline-block transition-all"
                  >
                    Custom Tape
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-black hover:translate-x-1 inline-block transition-all"
                  >
                    Tissue Paper
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-black text-xl mb-6">Company</h3>
              <ul className="space-y-4 font-bold text-black/70">
                <li>
                  <Link
                    href="#"
                    className="hover:text-black hover:translate-x-1 inline-block transition-all"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-black hover:translate-x-1 inline-block transition-all"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-black hover:translate-x-1 inline-block transition-all"
                  >
                    Design Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-black hover:translate-x-1 inline-block transition-all"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Socials */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-black text-xl mb-6">Socials</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center rounded-full hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center rounded-full hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center rounded-full hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-2 border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-bold opacity-60">
          <p>© 2026 Tipack Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} fill="black" /> and too much coffee.
          </div>
        </div>
      </div>
    </footer>
  );
}
