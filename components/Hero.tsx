"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FeatureCircle } from "./FeatureCircle";
import { Button } from "./Button";

export default function Hero() {
    const [isTaped, setIsTaped] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsTaped(true);
            } else {
                setIsTaped(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-0 relative overflow-hidden">

            {/* Abstract Background Element (Spiral on left) */}
            <div className="absolute left-0 top-1/3 hidden lg:block opacity-20 transform -translate-x-1/2">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                    <path d="M50 50 m-40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0" />
                    <path d="M50 50 m-30 0 a 30 30 0 1 0 60 0 a 30 30 0 1 0 -60 0" />
                    <path d="M50 50 m-20 0 a 20 20 0 1 0 40 0 a 20 20 0 1 0 -40 0" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto z-10 space-y-8">

                {/* Heading Group */}
                <div className="flex flex-col items-center font-black text-[#2D2424]">
                    <span className="text-2xl md:text-3xl font-bold mb-2">Make Really Tipacking Good</span>
                    <div className="relative inline-block">
                        <span className="text-6xl md:text-8xl tracking-tighter relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                            Packaging
                        </span>


                        <div
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[130%] z-20 pointer-events-none transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) flex items-stretch ${isTaped
                                ? 'opacity-100 rotate-[-2deg] scale-100'
                                : 'opacity-0 rotate-[5deg] scale-110'
                                }`}
                        >
                            {/* LEFT Jagged Edge (Stroked, No "z" close) */}
                            <div
                                className="w-[15px] shrink-0"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='24' viewBox='0 0 15 24'%3E%3Cpath fill='rgba(255,255,255,0.1)' stroke='black' stroke-width='4' d='M15 0H0l2.5 2-1.5 2 3 3-2 3 2.5 2-1.5 2 3 3-2 3 2.5 2-1.5 2H15'/%3E%3C/svg%3E")`,
                                    backgroundPosition: "right top",
                                    backgroundRepeat: "repeat-y",
                                    backgroundSize: "15px 24px",
                                }}
                            />

                            {/* Middle Body */}
                            <div className="flex-1 bg-white/10 backdrop-blur-[2px] border-y-2 border-black relative">
                                {/* Shine/Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50"></div>
                            </div>

                            {/* RIGHT Jagged Edge (Stroked, No "z" close) */}
                            <div
                                className="w-[15px] shrink-0"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='24' viewBox='0 0 15 24'%3E%3Cpath fill='rgba(255,255,255,0.1)' stroke='black' stroke-width='4' d='M0 0h15l-2.5 2 1.5 2-3 3 2 3-2.5 2 1.5 2-3 3 2 3-2.5 2 1.5 2H0'/%3E%3C/svg%3E")`,
                                    backgroundPosition: "left top",
                                    backgroundRepeat: "repeat-y",
                                    backgroundSize: "15px 24px",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Subtext */}
                <p className="max-w-xl mx-auto text-lg md:text-xl text-[#5C5454] leading-relaxed">
                    Get factory-direct pricing on paper, plastic, glass, and metal packaging for your brand.
                </p>

                {/* CTA Button */}
                <div className="pt-4 pb-12">
                    <Button variant="primary" className="px-8 py-4 text-base flex items-center gap-2">
                        View Catalog <ArrowUpRight size={20} />
                    </Button>
                </div>

                {/* Feature Circles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full max-w-6xl mx-auto pt-8">
                    <FeatureCircle
                        src="/images/yellow-box.png"
                        alt="Colorful Boxes"
                        bgColor="#FFF5E1"
                    />
                    <FeatureCircle
                        src="/images/yellow-box.png"
                        alt="Stacked Boxes"
                        bgColor="#FFF"
                    />
                    <FeatureCircle
                        src="/images/yellow-box.png"
                        alt="Tape"
                        bgColor="#635BFF"
                        borderColor="#635BFF"
                    />
                    <FeatureCircle
                        src="/images/yellow-box.png"
                        alt="Luxury Items"
                        bgColor="#FFF"
                    />
                </div>

            </div>
        </section>
    );
}
