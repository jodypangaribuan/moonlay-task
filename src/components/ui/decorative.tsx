import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "accent";
}

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
    const variants = {
        primary: "bg-accent text-white",
        secondary: "bg-secondary text-white",
        tertiary: "bg-tertiary text-foreground",
        quaternary: "bg-quaternary text-foreground",
        accent: "bg-accent text-white",
    };

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border-2 border-foreground px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}

export function FloatingShape({
    className,
    type = "circle",
    size = "md",
    color = "tertiary"
}: {
    className?: string;
    type?: "circle" | "square" | "triangle" | "pill";
    size?: "sm" | "md" | "lg" | "xl";
    color?: "accent" | "secondary" | "tertiary" | "quaternary";
}) {
    const sizes = {
        sm: "w-8 h-8",
        md: "w-16 h-16",
        lg: "w-32 h-32",
        xl: "w-64 h-64",
    };

    const colors = {
        accent: "bg-accent",
        secondary: "bg-secondary",
        tertiary: "bg-tertiary",
        quaternary: "bg-quaternary",
    };

    const shapes = {
        circle: "rounded-full",
        square: "rounded-xl",
        pill: "rounded-full",
        triangle: "clip-path-triangle", // We'll need a custom clip path or just use a circle for now if triangle is hard
    };

    return (
        <div
            className={cn(
                "absolute -z-10 opacity-20 bubble-anim",
                sizes[size],
                colors[color],
                shapes[type],
                className
            )}
        />
    );
}
