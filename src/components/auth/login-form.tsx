"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Lock, User } from "lucide-react";

export function LoginForm({ onLogin }: { onLogin: (username: string) => void }) {
    const [username, setUsername] = useState("jody_dev");
    const [password, setPassword] = useState("password123");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login
        onLogin(username);
    };

    return (
        <Card hoverEffect={false} className="w-full max-w-md border-4 shadow-[12px_12px_0px_0px_#1E293B]">
            <CardHeader className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 bg-accent border-2 border-foreground rounded-2xl flex items-center justify-center shadow-pop rotate-3">
                    <Zap className="text-white" size={32} />
                </div>
                <CardTitle className="text-3xl font-black font-heading tracking-tight">Welcome Back!</CardTitle>
                <CardDescription className="text-base font-bold text-foreground opacity-70">
                    Sign in to manage your geometric tasks.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
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
                        Login Now <Lock className="ml-2" size={20} />
                    </Button>

                    <div className="pt-4 text-center">
                        <p className="text-sm font-bold opacity-60 italic">
                            * Hint: Any username/password works for this demo.
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
