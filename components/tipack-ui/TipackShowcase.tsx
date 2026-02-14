
import React from 'react';

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
            <div
                className="w-full h-full relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl border-4 border-white flex items-center justify-center p-6 overflow-hidden [backface-visibility:hidden]">
                    <div className={`absolute top-0 left-0 w-full h-1/2 ${item.color} -z-10 rounded-t-[2rem]`} />
                    <div className="w-48 h-48 rounded-full border-8 border-white shadow-lg overflow-hidden bg-white relative z-10 transition-transform duration-500 group-hover:scale-110">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-6 left-0 w-full text-center">
                        <h3 className="text-xl font-bold font-heading text-[var(--color-text-main)] mb-1">{item.title}</h3>
                        <span className="text-xs uppercase tracking-wide text-[var(--color-text-sub)]">Click to flip</span>
                    </div>
                </div>

                {/* Back */}
                <div
                    className={`absolute inset-0 rounded-[2rem] shadow-xl border-4 border-white p-8 flex flex-col justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] ${item.color} text-white`}
                >
                    <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                    <p className="font-medium opacity-90 leading-relaxed mb-6">
                        {item.description}
                    </p>
                    <button className="bg-white text-[var(--color-text-main)] font-bold py-2 px-6 rounded-full self-center hover:bg-black hover:text-white transition-colors shadow-lg">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
}
