"use client";

import { LoginForm } from "@/components/auth/login-form";
import { FloatingShape } from "@/components/ui/decorative";
import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";

export default function Login() {
    const router = useRouter();

    const handleLogin = (username: string) => {
        localStorage.setItem("geotask_user", username);
        router.push("/dashboard");
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center p-6">
            <div className="fixed inset-0 dot-grid pointer-events-none" />
            <FloatingShape type="circle" size="xl" color="tertiary" className="top-[-10%] left-[-5%]" />
            <FloatingShape type="pill" size="lg" color="secondary" className="bottom-[10%] right-[10%] rotate-45" />

            {/* Branded Logo for Login */}
            <div
                className="mb-12 flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/")}
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-foreground bg-accent shadow-pop">
                    <Zap className="text-white" size={28} />
                </div>
                <span className="text-3xl font-black font-heading tracking-tight italic">GEOTASK</span>
            </div>

            <LoginForm onLogin={handleLogin} />

            <p className="mt-8 text-sm font-bold opacity-60">
                Don't have an account? <span className="text-accent underline cursor-pointer">Sign up for free</span>
            </p>
        </div>
    );
}
