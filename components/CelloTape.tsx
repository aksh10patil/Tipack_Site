"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CelloTape() {
    const [percent, setPercent] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const ticking = useRef(false); // To throttle scroll events

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    if (!containerRef.current) return;

                    const rect = containerRef.current.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    // Adjusted triggers for smoother entry/exit
                    const startTrigger = windowHeight * 0.9;
                    const endTrigger = windowHeight * 0.3;

                    const distance = startTrigger - rect.top;
                    const totalDistance = startTrigger - endTrigger;

                    let p = (distance / totalDistance) * 100;
                    p = Math.min(Math.max(p, 0), 100);

                    setPercent(p);
                    ticking.current = false;
                });

                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial calculation
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // New "Natural Tear" SVG paths. 
    // Defined with viewBox 0 0 20 100 so they stretch naturally to any height.
    const tearColor = "#F4D03F";
    
    // Left Edge (Zagging inwards from left)
    const leftTearSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 100' preserveAspectRatio='none'%3E%3Cpath fill='%23F4D03F' d='M20,0 L0,0 L5,10 L2,20 L8,30 L3,40 L7,50 L2,60 L9,70 L4,80 L8,90 L0,100 L20,100 Z'/%3E%3C/svg%3E`;
    
    // Right Edge (Zagging inwards from right)
    const rightTearSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 100' preserveAspectRatio='none'%3E%3Cpath fill='%23F4D03F' d='M0,0 L20,0 L15,10 L18,20 L12,30 L17,40 L13,50 L18,60 L11,70 L16,80 L12,90 L20,100 L0,100 Z'/%3E%3C/svg%3E`;

    return (
        <div
            ref={containerRef}
            className="relative w-full h-32 pointer-events-none z-20 flex items-center overflow-visible"
            style={{
                marginTop: "-4rem",
                marginBottom: "-4rem",
                transform: "rotate(-1.5deg) translateZ(0)", // Added translateZ for GPU acceleration
            }}
        >
            <div
                className="w-full relative"
                style={{
                    filter: `
            drop-shadow(0px 1px 0px rgba(0,0,0,0.1)) 
            drop-shadow(0px 4px 6px rgba(0,0,0,0.15))
          `,
                }}
            >
                {/* The Growing Tape */}
                <div
                    className="relative h-12 flex items-stretch will-change-[width]"
                    style={{
                        // Removed transition-all for 1:1 scroll sync (feels much smoother/responsive)
                        // If you prefer a delayed 'floaty' feel, add 'transition-width duration-100 ease-out'
                        width: `${120 * (percent / 100)}%`,
                        marginLeft: "-10vw",
                        opacity: percent > 1 ? 1 : 0,
                    }}
                >
                    {/* LEFT Jagged Edge */}
                    <img 
                        src={leftTearSvg}
                        alt=""
                        className="absolute left-0 top-0 bottom-0 w-5 h-full -translate-x-[99%]"
                        style={{ display: "block" }}
                    />

                    {/* Main Body */}
                    <div className="w-full h-full bg-[#F4D03F]/90 relative overflow-hidden backdrop-blur-[1px]">
                        {/* Texture Overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.5), transparent), url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
                                backgroundSize: "auto 100%",
                            }}
                        />
                        {/* Subtle highlight line for plastic feel */}
                        <div className="absolute top-1 left-0 right-0 h-[1px] bg-white/40" />
                    </div>

                    {/* RIGHT Jagged Edge */}
                    <img 
                        src={rightTearSvg}
                        alt=""
                        className="absolute right-0 top-0 bottom-0 w-5 h-full translate-x-[99%]"
                        style={{ display: "block" }}
                    />
                </div>
            </div>
        </div>
    );
}