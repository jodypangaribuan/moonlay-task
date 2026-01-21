"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    featured?: boolean;
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, featured, hoverEffect = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref as any}
                whileHover={hoverEffect ? { rotate: -1, scale: 1.02 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={cn(
                    "relative bg-white border-2 border-foreground rounded-xl p-6",
                    featured ? "shadow-[8px_8px_0px_0px_#F472B6]" : "shadow-[8px_8px_0px_0px_#E2E8F0]",
                    className
                )}
                {...(props as any)}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-1.5 p-0 mb-4", className)} {...props} />
);

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("text-2xl font-heading leading-none tracking-tight", className)} {...props} />
);

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-0 pt-0", className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex items-center pt-4 p-0", className)} {...props} />
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
