"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    bounce?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", bounce = true, ...props }, ref) => {
        const variants = {
            primary: "bg-accent text-white border-2 border-foreground shadow-pop hover:shadow-pop-hover active:shadow-pop-active active:translate-x-[2px] active:translate-y-[2px]",
            secondary: "bg-secondary text-white border-2 border-foreground shadow-pop hover:shadow-pop-hover active:shadow-pop-active active:translate-x-[2px] active:translate-y-[2px]",
            outline: "bg-transparent text-foreground border-2 border-foreground hover:bg-tertiary transition-bounce",
            ghost: "bg-transparent text-foreground hover:bg-muted transition-bounce",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm rounded-full",
            md: "px-6 py-3 text-base font-bold rounded-full",
            lg: "px-8 py-4 text-lg font-extrabold rounded-full",
        };

        const motionProps: HTMLMotionProps<"button"> = bounce ? {
            whileHover: { y: -2, x: -2 },
            whileTap: { y: 1, x: 1 },
            transition: { type: "spring", stiffness: 400, damping: 10 }
        } : {};

        return (
            <motion.button
                className={cn(
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...motionProps}
                ref={ref as any}
                {...(props as any)}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
