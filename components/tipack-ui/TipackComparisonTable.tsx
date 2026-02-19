import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
    feature: string;
    us: boolean | string;
    them: boolean | string;
}

interface TipackComparisonTableProps {
    rows: ComparisonRow[];
}

export default function TipackComparisonTable({ rows }: TipackComparisonTableProps) {
    return (
        <div className="bg-white rounded-[2rem] border-2 border-[var(--color-text-main)] shadow-xl overflow-hidden p-8 mx-auto max-w-4xl">
            <div className="grid grid-cols-3 gap-6 mb-8 text-center text-[var(--color-text-main)]">
                <div className="flex items-center justify-start text-xl font-bold italic">Features</div>
                <div className="flex flex-col items-center">
                    <span className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-sub)]">Them</span>
                    <div className="w-12 h-1 bg-[var(--color-text-sub)]/20 mt-2 rounded-full" />
                </div>
                <div className="flex flex-col items-center relative">
                    {/* Sticker/badge effect */}
                    <div className="absolute -top-6 rotate-6 bg-[var(--color-primary)] text-[var(--color-text-main)] px-3 py-1 rounded-full text-xs font-bold border border-black shadow-sm z-10 animate-bounce">
                        Best Choice!
                    </div>
                    <span className="text-xl font-bold text-[var(--color-secondary)]">Tipack</span>
                    <div className="w-16 h-1.5 bg-[var(--color-secondary)] mt-2 rounded-full" />
                </div>
            </div>

            <div className="space-y-4">
                {rows.map((row, index) => (
                    <div
                        key={index}
                        className="group grid grid-cols-3 gap-6 p-4 rounded-xl hover:bg-[var(--color-base)] transition-colors duration-200"
                    >
                        <div className="flex items-center text-sm font-medium text-[var(--color-text-main)]">
                            {row.feature}
                        </div>

                        <div className="flex items-center justify-center text-[var(--color-text-sub)] opacity-50 font-mono">
                            {typeof row.them === 'boolean' ? (
                                row.them ? <Check className="w-5 h-5 text-gray-500" /> : <X className="w-5 h-5 text-red-400" />
                            ) : row.them}
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)] rounded-full p-1 group-hover:scale-110 transition-transform">
                                {typeof row.us === 'boolean' ? (
                                    row.us ? <Check className="w-6 h-6 stroke-[3]" /> : <X className="w-6 h-6 stroke-[3]" />
                                ) : <span className="font-bold text-[var(--color-text-main)]">{row.us}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
