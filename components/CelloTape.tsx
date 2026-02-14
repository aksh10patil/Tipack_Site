"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CelloTape() {
    const [percent, setPercent] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const startTrigger = windowHeight * 0.85;
            const endTrigger = windowHeight * 0.35;

            const distance = startTrigger - rect.top;
            const totalDistance = startTrigger - endTrigger;

            let p = (distance / totalDistance) * 100;
            p = Math.min(Math.max(p, 0), 100);

            setPercent(p);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // SVG Data URIs for the torn edges (copied from Navbar).
    const leftTearSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='24' viewBox='0 0 15 24'%3E%3Cpath fill='%23F4D03F' d='M15 0H0l2.5 2-1.5 2 3 3-2 3 2.5 2-1.5 2H15z'/%3E%3C/svg%3E`;
    const rightTearSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='24' viewBox='0 0 15 24'%3E%3Cpath fill='%23F4D03F' d='M0 0h15l-2.5 2 1.5 2-3 3 2 3-2.5 2 1.5 2-3 3 2 3-2.5 2 1.5 2H0z'/%3E%3C/svg%3E`;

    return (
        <div
            ref={containerRef}
            className="relative w-full h-32 pointer-events-none z-20 flex items-center overflow-visible"
            style={{
                marginTop: "-4rem",
                marginBottom: "-4rem",
                transform: "rotate(-1deg)"
            }}
        >
            {/* 
        Filter Container
        We apply the filter to this wrapper so the drop-shadows track the 
        shape of the growing tape (including taxes).
      */}
            <div
                className="w-full relative"
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
                {/* The Growing Tape */}
                <div
                    className="relative h-20 transition-all duration-75 ease-linear"
                    style={{
                        width: `${120 * (percent / 100)}%`, // Grow across screen
                        marginLeft: "-10vw", // Start slightly off-screen
                        opacity: percent > 1 ? 1 : 0
                    }}
                >
                    {/* LEFT Jagged Edge */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-[15px] -translate-x-full"
                        style={{
                            backgroundImage: `url("${leftTearSvg}")`,
                            backgroundPosition: "left top",
                            backgroundRepeat: "repeat-y",
                            backgroundSize: "15px 24px",
                        }}
                    />

                    {/* Main Body */}
                    <div className="w-full h-full bg-[#F4D03F] relative overflow-hidden">
                        {/* Texture Overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-80"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.4), transparent), url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
                                backgroundSize: "100% auto, auto",
                            }}
                        />
                    </div>

                    {/* RIGHT Jagged Edge */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-[15px] translate-x-full"
                        style={{
                            backgroundImage: `url("${rightTearSvg}")`,
                            backgroundPosition: "right top",
                            backgroundRepeat: "repeat-y",
                            backgroundSize: "15px 24px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
