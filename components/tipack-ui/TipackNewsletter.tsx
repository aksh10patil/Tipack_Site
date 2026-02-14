import React from 'react';
import { Send } from 'lucide-react';

export default function TipackNewsletter() {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <div className="relative inline-block w-full">
                {/* Background blobs or decoration */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-[var(--color-primary)] rounded-full blur-xl opacity-30 animate-pulse" />
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[var(--color-secondary)] rounded-full blur-xl opacity-20 animate-pulse delay-700" />

                <div className="relative bg-white border-2 border-[var(--color-text-main)] rounded-[3rem] p-8 shadow-[8px_8px_0px_0px_var(--color-text-main)] transition-shadow hover:shadow-[12px_12px_0px_0px_var(--color-text-main)] duration-300">
                    <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4">
                        Get the <span className="text-[var(--color-secondary)]">Tipack</span> Scoop!
                    </h2>
                    <p className="text-[var(--color-text-sub)] mb-8 max-w-md mx-auto">
                        Weekly tips on packaging, sustainability, and making your brand standout. No spam, we promise.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="quack@example.com"
                            className="mt-1 flex-1 bg-[var(--color-base)] border-2 border-[var(--color-text-main)/20] px-6 py-4 rounded-full text-lg placeholder:text-gray-400 focus:outline-[var(--color-secondary)] focus:border-[var(--color-secondary)] focus:ring-4 ring-[var(--color-secondary)]/10 transition-all font-medium"
                        />
                        <button
                            type="submit"
                            className="bg-[var(--color-text-main)] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[var(--color-secondary)] hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 group"
                        >
                            Join <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-4 text-xs text-gray-400 font-medium">
                        Trusted by over 5,000 packaging enthusiasts.
                    </div>
                </div>
            </div>
        </div>
    );
}
