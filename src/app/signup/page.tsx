"use client";

import { SignupForm } from "@/components/auth/signup-form";
import { FloatingShape } from "@/components/ui/decorative";
import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";

export default function Signup() {
    const router = useRouter();

    const handleSignup = (data: any) => {
        // Simulate signup by saving username to localStorage
        localStorage.setItem("moonlay_user", data.username);
        router.push("/dashboard");
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center p-6">
            <div className="fixed inset-0 dot-grid pointer-events-none" />
            <FloatingShape type="circle" size="xl" color="accent" className="top-[-10%] right-[-5%]" />
            <FloatingShape type="pill" size="lg" color="quaternary" className="bottom-[10%] left-[10%] -rotate-45" />

            {/* Branded Logo */}
            <div
                className="mb-12 flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/")}
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-foreground bg-accent shadow-pop">
                    <Zap className="text-white" size={28} />
                </div>
                <span className="text-3xl font-black font-heading tracking-tight italic uppercase">Moonlay Task</span>
            </div>

            <SignupForm onSignup={handleSignup} />

            <p className="mt-8 text-sm font-bold opacity-60">
                Already have an account? <span onClick={() => router.push("/login")} className="text-accent underline cursor-pointer">Log in instead</span>
            </p>
        </div>
    );
}
