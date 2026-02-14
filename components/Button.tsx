import React from "react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-full font-bold text-sm transition-all active:translate-y-[2px] active:shadow-none border border-black";

    const variants = {
        primary: "bg-[var(--color-primary)] text-[var(--color-text-main)] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffda75]",
        secondary: "bg-white text-[var(--color-text-main)] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className || ""}`}
            {...props}
        >
            {children}
        </button>
    );
}
