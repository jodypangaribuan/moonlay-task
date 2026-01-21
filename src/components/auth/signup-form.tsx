"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, UserPlus, Mail, Lock, User } from "lucide-react";

export function SignupForm({ onSignup }: { onSignup: (data: any) => void }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignup({ name, username, password });
    };

    return (
        <Card hoverEffect={false} className="w-full max-w-md border-4 shadow-[12px_12px_0px_0px_#1E293B]">
            <CardHeader className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 bg-secondary border-2 border-foreground rounded-2xl flex items-center justify-center shadow-pop -rotate-3">
                    <UserPlus className="text-white" size={32} />
                </div>
                <CardTitle className="text-3xl font-black font-heading tracking-tight">Create Account</CardTitle>
                <CardDescription className="text-base font-bold text-foreground opacity-70">
                    Join Moonlay Task and master your chaos today.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jody Developer"
                        required
                        className="h-14 text-lg"
                    />
                    <Input
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="jody_dev"
                        required
                        className="h-14 text-lg"
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="h-14 text-lg"
                    />
                    <Button size="lg" className="w-full h-16 text-xl">
                        Sign Up Now <Zap className="ml-2" size={20} />
                    </Button>


                </form>
            </CardContent>
        </Card>
    );
}
