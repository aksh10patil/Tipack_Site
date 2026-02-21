import React from "react";
import { ArrowRight, Box } from "lucide-react";

interface TipackFeatureCardProps {
  title: string;
  description: string;
  variant?:
    | "purple"
    | "green"
    | "yellow"
    | "blue"
    | "red"
    | "orange"
    | "default";
  icon?: React.ReactElement<{
    className?: string;
    strokeWidth?: number;
    size?: number;
  }>;
}

export default function TipackFeatureCard({
  title,
  description,
  variant = "default",
  icon,
}: TipackFeatureCardProps) {
  // We map variants to accent colors for the blob and icon,
  // keeping the card base white to match the newsletter style.
  const accents: Record<NonNullable<TipackFeatureCardProps["variant"]>, any> = {
    purple: {
      blob: "bg-[var(--color-secondary)]",
      iconBg: "bg-[var(--color-secondary)]/10",
      iconColor: "text-[var(--color-secondary)]",
    },
    green: {
      blob: "bg-[var(--color-accent-green)]", // Assuming you have this or use a hex
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    yellow: {
      blob: "bg-[var(--color-primary)]",
      iconBg: "bg-[var(--color-primary)]/20",
      iconColor: "text-amber-700",
    },
    blue: {
      blob: "bg-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    red: {
      blob: "bg-red-500",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    orange: {
      blob: "bg-orange-500",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    default: {
      blob: "bg-gray-200",
      iconBg: "bg-gray-100",
      iconColor: "text-[var(--color-text-main)]",
    },
  };

  const currentStyle = accents[variant] || accents.default;
  const IconDisplay = icon || <Box className="w-8 h-8" />;

  return (
    <div className="group relative h-full">
      {/* The Card Container - Matches Newsletter Architecture */}
      <div
        className="
                relative h-full flex flex-col justify-between
                bg-white 
                border-2 border-[var(--color-text-main)] 
                rounded-[2.5rem] 
                p-8 
                shadow-[8px_8px_0px_0px_var(--color-text-main)] 
                transition-all duration-300 
                hover:shadow-[12px_12px_0px_0px_var(--color-text-main)] 
                hover:-translate-y-1
                overflow-hidden
            "
      >
        {/* Decorative Background Blob (like the Newsletter) */}
        <div
          className={`
                        absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-20 
                        transition-transform duration-500 group-hover:scale-150
                        ${currentStyle.blob}
                    `}
        />

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Icon Container */}
          <div
            className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                        border-2 border-[var(--color-text-main)]/10
                        transition-transform duration-300 group-hover:rotate-6
                        ${currentStyle.iconBg} ${currentStyle.iconColor}
                    `}
          >
            {icon ? (
              React.cloneElement(icon, {
                className: "w-8 h-8",
                strokeWidth: 2.5,
              })
            ) : (
              <Box size={32} strokeWidth={2.5} />
            )}
          </div>

          <h3 className="text-2xl font-black font-heading tracking-tight mb-3 text-[var(--color-text-main)]">
            {title}
          </h3>

          <p className="text-[var(--color-text-sub)] font-medium leading-relaxed mb-8">
            {description}
          </p>
        </div>

        {/* Action Area */}
        <div className="relative z-10 mt-auto">
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-text-main)] group/btn">
            Learn more
            <span className="bg-[var(--color-text-main)] text-white rounded-full p-1 transition-transform group-hover/btn:translate-x-1">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
