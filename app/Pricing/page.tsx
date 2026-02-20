"use client";

import React, { useState } from "react";
import { Check, X, Zap, Box, Container, Anchor } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(false);

    // --- DESIGN CONSTANTS ---
    const TAPE_COLOR = "%23F4D03F"; // Yellow
    const serratedEdgeLeft = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E`;
    const serratedEdgeRight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${TAPE_COLOR}' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E`;

    return (
        <div className="min-h-screen bg-[#FFFEF9] text-[#2D2424] font-sans pt-24 pb-20 relative overflow-x-hidden">

            {/* Texture Overlay */}
            <div
                className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
                style={{
                    backgroundImage: `url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
                    backgroundSize: "300px auto",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

                {/* --- HEADER --- */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-black text-white px-3 py-1 font-bold text-sm mb-4 transform -rotate-2">
                        NO HIDDEN FEES. NO LAWYERS.
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                        Freight <span className="bg-[#F4D03F] px-2 text-black">Rates</span>
                    </h1>

                    {/* --- INDUSTRIAL TOGGLE --- */}
                    <div className="flex justify-center items-center gap-4">
                        <span className={`font-black text-lg uppercase ${!isAnnual ? 'text-black' : 'text-gray-400'}`}>Monthly</span>

                        {/* The Switch Mechanism */}
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-24 h-10 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:shadow-none"
                        >
                            <div className="absolute inset-0 flex items-center px-1">
                                <div
                                    className={`w-10 h-7 bg-black transition-transform duration-300 ease-out border border-white ${isAnnual ? 'translate-x-11' : 'translate-x-0'}`}
                                >
                                    {/* Grip Lines on the switch */}
                                    <div className="flex gap-1 justify-center items-center h-full opacity-30">
                                        <div className="w-[1px] h-4 bg-white"></div>
                                        <div className="w-[1px] h-4 bg-white"></div>
                                        <div className="w-[1px] h-4 bg-white"></div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <span className={`font-black text-lg uppercase ${isAnnual ? 'text-black' : 'text-gray-400'}`}>
                            Yearly
                        </span>
                    </div>
                </div>

                {/* --- PRICING GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* TIER 1: THE GARAGE */}
                    <PricingCard
                        title="The Garage"
                        icon={Box}
                        price={isAnnual ? "0" : "0"}
                        period={isAnnual ? "/yr" : "/mo"}
                        desc="For bootstrappers and basement operations."
                        features={[
                            "Access to Standard Catalog",
                            "Pay-per-unit pricing",
                            "Slow shipping (3-5 days)",
                            "No custom branding"
                        ]}
                        buttonText="Start Free"
                        link="/Contact"
                    />

                    {/* TIER 2: THE WAREHOUSE (Highlight) */}
                    <div className="relative transform md:-translate-y-4">
                        {/* Hazard Tape "Most Popular" */}
                        <div className="absolute -top-4 left-0 right-0 z-20 flex justify-center">
                            <div className="bg-[#F4D03F] border-2 border-black px-4 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_#000]">
                                Standard Issue
                            </div>
                        </div>

                        <PricingCard
                            title="Warehouse"
                            icon={Container}
                            price={isAnnual ? "290" : "29"}
                            period={isAnnual ? "/yr" : "/mo"}
                            desc="For growing brands shipping actual volume."
                            highlight={true}
                            features={[
                                "Wholesale Discounts (-15%)",
                                "Priority Fulfillment",
                                "Custom Logo Stamping",
                                "Net-30 Payment Terms",
                                "Dedicated Account Manager"
                            ]}
                            buttonText="Upgrade Now"
                            link="/Contact"
                        />
                    </div>

                    {/* TIER 3: THE FACTORY */}
                    <PricingCard
                        title="Industrial"
                        icon={Anchor}
                        price="Custom"
                        period=""
                        desc="You need pallets, not boxes. Let's talk logistics."
                        features={[
                            "Volume Pricing (Pallet rates)",
                            "Custom Engineering / CAD",
                            "Warehousing (3PL)",
                            "Global Freight Forwarding",
                            "API Integration"
                        ]}
                        buttonText="Contact Sales"
                        isDark={false}
                        link="/Contact"
                    />

                </div>

                {/* --- FINE PRINT --- */}
                <div className="mt-20 border-t-2 border-dashed border-gray-400 pt-8 text-center max-w-2xl mx-auto">
                    <h3 className="font-black uppercase text-xl mb-4 flex items-center justify-center gap-2">
                        <Zap size={20} className="fill-[#F4D03F]" /> Safety Protocols
                    </h3>
                    <p className="font-mono text-sm text-gray-500 mb-4">
                        * Prices exclude applicable VAT and shipping surcharges.
                        Heavy items (machinery, lead, dumbbells) incur a "Heavy Metal" fee.
                        We are not responsible if your customers cut themselves opening the package.
                    </p>

                </div>

            </div>
        </div>
    );
}

// --- SUB-COMPONENT: CARD ---
interface PricingCardProps {
    title: string;
    price: string;
    period: string;
    features: string[];
    highlight?: boolean;
    buttonText: string;
    desc: string;
    icon: any;
    isDark?: boolean;
    link?: string;
}

function PricingCard({ title, price, period, features, highlight, buttonText, desc, icon: Icon, isDark, link }: PricingCardProps) {
    return (
        <div className={`
            relative flex flex-col h-full border-2 border-black p-0 transition-all duration-300 hover:shadow-[10px_10px_0px_0px_#000] hover:-translate-y-1
            ${highlight ? 'shadow-[8px_8px_0px_0px_#F4D03F]' : 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'}
            ${isDark ? 'bg-[#2D2424] text-[#FFFEF9]' : 'bg-white text-[#2D2424]'}
        `}>
            {/* Top jagged edge visualization (CSS only for simplicity) */}
            <div className="h-2 w-full absolute -top-2 left-0 right-0 overflow-hidden flex">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rotate-45 transform origin-bottom-left translate-y-1.5 ${isDark ? 'bg-[#2D2424]' : 'bg-white'} border-t-2 border-l-2 border-black`}></div>
                ))}
            </div>

            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 border-2 border-black ${highlight ? 'bg-[#F4D03F]' : 'bg-transparent'}`}>
                        <Icon size={24} className={isDark ? 'text-white' : 'text-black'} />
                    </div>
                    {highlight && <Zap className="text-[#F4D03F] fill-[#F4D03F] animate-pulse" />}
                </div>

                <h3 className="text-3xl font-black uppercase tracking-tight mb-2">{title}</h3>
                <p className={`font-mono text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>

                <div className="mb-8 border-b-2 border-dashed border-gray-500 pb-8">
                    <span className="text-6xl font-black tracking-tighter">{price === 'Custom' ? 'Call' : `$${price}`}</span>
                    <span className="font-mono text-lg font-bold">{period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                    {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <div className="mt-1">
                                <Check size={16} strokeWidth={4} className={highlight ? 'text-[#F4D03F]' : (isDark ? 'text-white' : 'text-black')} />
                            </div>
                            <span className="font-bold text-sm leading-tight">{feat}</span>
                        </li>
                    ))}
                </ul>

                {link ? (
                    <Link href={link} className={`
                        w-full block text-center py-4 font-black uppercase tracking-widest border-2 border-transparent transition-all
                        ${isDark
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'bg-black text-white hover:bg-[#F4D03F] hover:text-black hover:border-black'
                        }
                    `}>
                        {buttonText}
                    </Link>
                ) : (
                    <button className={`
                        w-full py-4 font-black uppercase tracking-widest border-2 border-transparent transition-all
                        ${isDark
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'bg-black text-white hover:bg-[#F4D03F] hover:text-black hover:border-black'
                        }
                    `}>
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
}