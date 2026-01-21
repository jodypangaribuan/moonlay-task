"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, FloatingShape } from "@/components/ui/decorative";
import { ArrowRight, Check, Zap, Layout, Bot, Sparkles, Star, Users, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background selection:bg-tertiary">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 dot-grid pointer-events-none" />
      <FloatingShape type="circle" size="xl" color="tertiary" className="top-[-10%] left-[-5%]" />
      <FloatingShape type="pill" size="lg" color="secondary" className="bottom-[10%] right-[-5%] rotate-45" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-24 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-foreground bg-accent shadow-pop">
              <Zap className="text-white" size={28} />
            </div>
            <span className="text-3xl font-black font-heading tracking-tight italic">GEOTASK</span>
          </div>
          <div className="hidden lg:flex items-center gap-10 font-black uppercase tracking-wider text-sm">
            <a href="#features" className="hover:text-accent transition-colors">Features</a>
            <a href="#workflow" className="hover:text-accent transition-colors">Workflow</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => router.push("/login")} className="hidden sm:inline-flex">Log In</Button>
            <Button onClick={() => router.push("/login")} className="px-8">Get Started</Button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center relative">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Badge variant="secondary" className="mb-8 py-2 px-6 text-sm animate-bounce cursor-default">
              v2.0 is out! Now with AI Assistant 🤖
            </Badge>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black font-heading tracking-tighter text-foreground mb-8 max-w-5xl leading-[0.9]">
            Master Your <span className="text-accent relative">
              Chaos
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-tertiary" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q25,0 50,10 T100,10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span> <br />
            with Style.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-bold max-w-2xl mb-12 leading-relaxed">
            The task manager that doesn't look like a spreadsheet. Vibrant, tactile, and powered by AI to keep you in the flow.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" onClick={() => router.push("/login")} className="h-20 px-12 text-2xl font-black shadow-[8px_8px_0px_0px_#1E293B] hover:shadow-[12px_12px_0px_0px_#1E293B]">
              Start Managing Free <ArrowRight className="ml-3" size={28} />
            </Button>
            <Button variant="outline" size="lg" className="h-20 px-12 text-2xl font-black bg-white">
              View Demo
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="mt-24 relative w-full max-w-5xl mx-auto group">
            <div className="absolute inset-0 bg-accent/10 rounded-[2.5rem] blur-3xl -z-10 group-hover:bg-accent/20 transition-colors" />
            <div className="bg-white border-4 border-foreground rounded-[2.5rem] p-4 shadow-[16px_16px_0px_0px_#1E293B] overflow-hidden">
              <div className="flex gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-secondary border-2 border-foreground" />
                <div className="w-3 h-3 rounded-full bg-tertiary border-2 border-foreground" />
                <div className="w-3 h-3 rounded-full bg-quaternary border-2 border-foreground" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2000&auto=format&fit=crop"
                alt="App Preview"
                className="w-full h-auto rounded-2xl border-2 border-foreground grayscale-[0.2]"
              />
            </div>
            {/* Floating UI Elements */}
            <div className="absolute -top-12 -right-12 bg-tertiary border-4 border-foreground p-6 rounded-2xl shadow-pop animate-wiggle hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2 border-2 border-foreground"><Check size={20} /></div>
                <span className="font-black">Design Review Done!</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-12 bg-quaternary border-4 border-foreground p-6 rounded-full shadow-pop hidden lg:block">
              <div className="flex items-center gap-3">
                <Bot size={28} />
                <span className="font-black">AI Assistant Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="container mx-auto px-6 py-32 bg-white border-y-4 border-foreground rotate-1">
          <div className="rotate-[-1deg]">
            <div className="flex flex-col items-center text-center mb-24">
              <Badge variant="accent" className="mb-4">THE TOOLS</Badge>
              <h2 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">Everything You Need.</h2>
              <p className="text-xl text-muted-foreground font-bold max-w-2xl">We stripped away the complexity and kept the soul.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Layout />, title: "Tactile Board", desc: "Drag, drop, and feel the 'pop' with every move. Your tasks are now physical.", color: "bg-secondary" },
                { icon: <Bot />, title: "AI Sidekick", desc: "A chatbot that actually knows your data. Ask it anything about your workload.", color: "bg-accent" },
                { icon: <Users />, title: "Team Flux", desc: "Collaborate in real-time with vibrant assignee controls and live updates.", color: "bg-tertiary" }
              ].map((f, i) => (
                <Card key={i} className="hover:rotate-2 transition-transform h-full">
                  <div className={`h-16 w-16 rounded-2xl ${f.color} border-4 border-foreground flex items-center justify-center mb-8 rotate-[-5deg] shadow-pop`}>
                    {require("react").cloneElement(f.icon, { size: 32, className: "text-white" })}
                  </div>
                  <CardTitle className="text-3xl mb-4">{f.title}</CardTitle>
                  <CardDescription className="text-lg text-foreground font-bold opacity-80">
                    {f.desc}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial / Social Proof */}
        <section className="container mx-auto px-6 py-32 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-tertiary fill-tertiary" size={32} />)}
          </div>
          <blockquote className="text-3xl md:text-5xl font-black font-heading tracking-tight max-w-4xl mx-auto mb-12">
            "The first project management tool that doesn't make me want to cry. It's actually <span className="text-secondary italic">fun</span> to use."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-16 w-16 rounded-full border-4 border-foreground bg-accent overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=jody" alt="User" />
            </div>
            <div className="text-left">
              <p className="font-black text-xl leading-none">Jody Developer</p>
              <p className="font-bold text-muted-foreground">Founder, GeoPop Creative</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 py-32">
          <div className="bg-accent border-4 border-foreground rounded-[3rem] p-12 md:p-32 relative overflow-hidden shadow-[20px_20px_0px_0px_#1E293B]">
            <div className="relative z-10 flex flex-col items-center text-center">
              <Sparkles className="text-tertiary mb-6 animate-pulse" size={64} />
              <h2 className="text-5xl md:text-8xl font-black font-heading text-white mb-8 tracking-tighter">
                Ready to Pop?
              </h2>
              <p className="text-2xl font-bold text-white/90 mb-12 max-w-xl">
                Join 10,000+ geometric thinkers and start getting things done today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                <Button size="lg" onClick={() => router.push("/login")} className="h-20 w-full bg-tertiary text-foreground text-2xl font-black shadow-[8px_8px_0px_0px_#1E293B] hover:shadow-[12px_12px_0px_0px_#1E293B] border-white">
                  Get GeoTask Now
                </Button>
              </div>
            </div>
            {/* Background shapes for CTA */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-quaternary/30 rounded-full blur-3xl" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-foreground py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Zap className="text-accent" size={32} />
              <span className="text-3xl font-black font-heading italic">GEOTASK</span>
            </div>
            <p className="text-xl font-bold text-muted-foreground max-w-sm">
              The design-first task management system for expressive teams.
            </p>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-8">Product</h4>
            <ul className="space-y-4 font-bold text-lg">
              <li className="hover:text-accent cursor-pointer">Pricing</li>
              <li className="hover:text-accent cursor-pointer">Templates</li>
              <li className="hover:text-accent cursor-pointer">Releases</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-8">Social</h4>
            <ul className="space-y-4 font-bold text-lg">
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer"><Github size={20} /> GitHub</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer"><Star size={20} /> Twitter</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-24 pt-12 border-t-2 border-foreground flex justify-between items-center opacity-60 font-bold">
          <p>© 2026 GeoPop Labs. All rights reserved.</p>
          <p>Privacy First. Design Always.</p>
        </div>
      </footer>
    </div>
  );
}
