import React from 'react';
import { ArrowRight, RotateCw } from 'lucide-react';

interface TipackShowcaseProps {
    item: {
        id: number;
        title: string;
        image: string;
        description: string;
        color: string;
    };
}

export default function TipackShowcase({ item }: TipackShowcaseProps) {
    return (
        <div className="group relative w-72 h-96 [perspective:1000px] cursor-pointer">
            {/* 3D Container */}
            <div
                className="w-full h-full relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
                {/* =======================
                   FRONT SIDE
                   ======================= */}
                <div className="
                    absolute inset-0 
                    bg-white 
                    rounded-[2.5rem] 
                    border-2 border-[var(--color-text-main)] 
                    shadow-[8px_8px_0px_0px_var(--color-text-main)] 
                    flex flex-col items-center justify-between p-6 
                    overflow-hidden 
                    [backface-visibility:hidden]
                ">
                    {/* Decorative Blob (Top Left) */}
                    <div className={`absolute -top-12 -left-12 w-32 h-32 rounded-full opacity-20 blur-xl ${item.color}`} />
                    
                    {/* Image Container - Styled as a circular window */}
                    <div className="relative mt-4 w-48 h-48">
                         <div className={`absolute inset-0 rounded-full opacity-20 scale-110 ${item.color}`} />
                         <div className="w-full h-full rounded-full border-2 border-[var(--color-text-main)] overflow-hidden bg-white relative z-10">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        {/* Little "Flip" Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-white border-2 border-[var(--color-text-main)] rounded-full p-2 z-20 shadow-[2px_2px_0px_0px_var(--color-text-main)]">
                            <RotateCw size={16} className="text-[var(--color-text-main)]" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full text-center relative z-10 mt-4">
                        <h3 className="text-2xl font-black font-heading text-[var(--color-text-main)] tracking-tight">
                            {item.title}
                        </h3>
                        <p className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-widest">
                            Hover to Reveal
                        </p>
                    </div>
                </div>

                {/* =======================
                   BACK SIDE
                   ======================= */}
                <div
                    className={`
                        absolute inset-0 
                        rounded-[2.5rem] 
                        border-2 border-[var(--color-text-main)] 
                        shadow-[8px_8px_0px_0px_var(--color-text-main)] 
                        p-8 
                        flex flex-col justify-center text-center items-center
                        [transform:rotateY(180deg)] 
                        [backface-visibility:hidden] 
                        ${item.color} 
                        /* Ensure text is visible on dark colors, or use specific text colors based on variant */
                    `}
                >
                    {/* Inner White Box for readability (Optional, matches newsletter "Card inside a Card" vibe) */}
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-[var(--color-text-main)] rounded-3xl p-6 w-full h-full flex flex-col items-center justify-center">
                        <h3 className="text-xl font-black font-heading text-[var(--color-text-main)] mb-3">
                            {item.title}
                        </h3>
                        <p className="text-[var(--color-text-sub)] text-sm font-medium leading-relaxed mb-6">
                            {item.description}
                        </p>
                        
                        <button className="
                            bg-[var(--color-text-main)] text-white 
                            font-bold py-3 px-6 rounded-full 
                            text-sm flex items-center gap-2
                            hover:bg-[var(--color-secondary)] hover:scale-105 active:scale-95 
                            transition-all shadow-lg
                        ">
                            Shop Now <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}