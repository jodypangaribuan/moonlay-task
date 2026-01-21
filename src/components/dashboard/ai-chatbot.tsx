"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
        { role: "bot", content: "Hi! I'm your Task Assistant. Ask me anything about your tasks! (e.g., 'How many tasks are done?')" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages(prev => [...prev, { role: "user", content: input }]);
        const currentInput = input;
        setInput("");

        // Mock bot response
        setTimeout(() => {
            let response = "I'm still learning, but I can see you have some tasks in progress!";
            if (currentInput.toLowerCase().includes("done")) {
                response = "You have 1 task completed: 'Design System Implementation'. Great job!";
            } else if (currentInput.toLowerCase().includes("how many")) {
                response = "There are currently 3 tasks in your board.";
            }

            setMessages(prev => [...prev, { role: "bot", content: response }]);
        }, 1000);
    };

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50">
                <Button
                    size="lg"
                    className="h-16 w-16 !p-0 shadow-[6px_6px_0px_0px_#1E293B]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                </Button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50, x: 20 }}
                        className="fixed bottom-28 right-8 z-50 w-[400px] max-w-[calc(100vw-2rem)]"
                    >
                        <Card hoverEffect={false} className="h-[500px] flex flex-col overflow-hidden border-4 shadow-pop">
                            <div className="bg-accent p-4 text-white flex items-center justify-between border-b-2 border-foreground">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-accent">
                                        <Bot size={20} />
                                    </div>
                                    <span className="font-black font-heading tracking-tight">Moonlay AI</span>
                                </div>
                                <Sparkles size={18} className="animate-pulse" />
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
                                {messages.map((m, i) => (
                                    <div key={i} className={cn(
                                        "flex flex-col max-w-[80%] space-y-1",
                                        m.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                                    )}>
                                        <div className={cn(
                                            "px-4 py-2 rounded-2xl border-2 border-foreground font-bold text-sm",
                                            m.role === "user"
                                                ? "bg-secondary text-white rounded-tr-none"
                                                : "bg-white text-foreground rounded-tl-none"
                                        )}>
                                            {m.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 border-t-2 border-foreground bg-white">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Ask MoonlayAI..."
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                        onKeyDown={e => e.key === 'Enter' && handleSend()}
                                        className="focus-visible:shadow-[2px_2px_0px_0px_#8B5CF6]"
                                    />
                                    <Button onClick={handleSend} className="h-12 w-12 !p-0">
                                        <Send size={20} />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// Need to import cn
import { cn } from "@/lib/utils";
