"use client";

import React from "react";

interface FeatureCircleProps {
    src?: string;
    alt?: string;
    bgColor?: string; // Hex color code
    borderColor?: string; // Border color if different from default
    zoom?: number;
    children?: React.ReactNode;
    title?: string; // NEW: Added title prop
}

export function FeatureCircle({ 
    src, 
    alt = "Feature Image", 
    bgColor = "white", 
    borderColor = "black", 
    children, 
    zoom,
    title 
}: FeatureCircleProps) {
    return (
        <div className="flex flex-col items-center gap-4">
            {/* The Circle Card */}
            <div
                className="rounded-full flex items-center justify-center border border-black overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none bg-white relative"
                style={{ width: '200px', height: '200px', backgroundColor: bgColor, borderColor: borderColor }}
            >
                {/* Image or Content */}
                {src ? (
                    <div className="relative w-full h-full p-6 flex items-center justify-center">
                        <img
                            src={src}
                            alt={alt}
                            className="object-contain w-full h-full transition-transform duration-500"
                            style={zoom ? { transform: `scale(${zoom})` } : undefined}
                        />
                    </div>
                ) : (
                    children
                )}
            </div>

            {/* The Title Text */}
            {title && (
                <span className="font-bold text-lg text-[#2D2424] text-center">
                    {title}
                </span>
            )}
        </div>
    );
}