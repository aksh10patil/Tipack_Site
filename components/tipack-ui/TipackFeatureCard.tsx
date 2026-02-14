import React from 'react';
import { ArrowRight, Box, ShieldCheck, Truck } from 'lucide-react';

interface TipackFeatureCardProps {
    title: string;
    description: string;
    variant?: 'purple' | 'green' | 'yellow' | 'default';
    icon?: React.ReactNode;
}

export default function TipackFeatureCard({
    title,
    description,
    variant = 'default',
    icon,
}: TipackFeatureCardProps) {
    const bgColors = {
        purple: 'bg-[var(--color-secondary)] text-white',
        green: 'bg-[var(--color-accent-green)] text-white',
        yellow: 'bg-[var(--color-primary)] text-[var(--color-text-main)]',
        default: 'bg-white border-2 border-[var(--color-text-main)] text-[var(--color-text-main)]',
    };

    const IconDisplay = icon || <Box className="w-8 h-8" />;

    return (
        <div
            className={`
        relative p-8 rounded-3xl overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl
        ${bgColors[variant]}
      `}
        >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12 scale-150">
                {IconDisplay}
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-6">
                    <div className="mb-4 inline-flex items-center justify-center p-3 rounded-2xl bg-white/20 backdrop-blur-sm">
                        {IconDisplay}
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-3">{title}</h3>
                    <p className={`text-sm leading-relaxed ${variant === 'yellow' || variant === 'default' ? 'text-[var(--color-text-sub)]' : 'text-white/90'}`}>
                        {description}
                    </p>
                </div>

                <div className="mt-auto">
                    <button className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
