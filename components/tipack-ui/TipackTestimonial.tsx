
import React from 'react';
import { Quote } from 'lucide-react';

interface TipackTestimonialProps {
    quote: string;
    name: string;
    role: string;
    company: string;
    avatar: string; // URL
    rating?: number;
}

export default function TipackTestimonial({ quote, name, role, company, avatar }: TipackTestimonialProps) {
    return (
        <div className="relative group p-8 bg-[var(--color-primary)]/20 rounded-[2.5rem] hover:bg-[var(--color-primary)]/30 transition-colors duration-500 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-primary)] rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700 ease-in-out" />

            <div className="relative z-10">
                <Quote className="w-12 h-12 text-[var(--color-primary)] mb-6 fill-current opacity-80" />

                <h3 className="text-xl md:text-2xl font-bold font-heading leading-tight text-[var(--color-text-main)] mb-8">
                    "{quote}"
                </h3>

                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-[var(--color-text-main)] p-0.5 bg-white">
                        <img src={avatar} alt={name} className="w-full h-full object-cover rounded-full" />
                    </div>

                    <div>
                        <p className="font-bold text-[var(--color-text-main)]">{name}</p>
                        <p className="text-sm font-medium text-[var(--color-text-sub)]">{role}, <span className="text-[var(--color-secondary)]">{company}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
