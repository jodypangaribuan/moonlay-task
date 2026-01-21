import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { label: string; value: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, options, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-bold uppercase tracking-wide text-foreground">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <select
                        className={cn(
                            "flex h-12 w-full appearance-none rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-[4px_4px_0px_0px_#8B5CF6] transition-all disabled:cursor-not-allowed disabled:opacity-50",
                            className
                        )}
                        ref={ref}
                        {...props}
                    >
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                        <ChevronDown size={20} className="text-muted-foreground" />
                    </div>
                </div>
            </div>
        );
    }
);
Select.displayName = "Select";

export { Select };
