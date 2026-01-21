import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, FloatingShape } from "@/components/ui/decorative";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Zap, Star, Layout, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background selection:bg-tertiary">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 dot-grid pointer-events-none" />
      <FloatingShape type="circle" size="xl" color="tertiary" className="top-[-10%] left-[-5%]" />
      <FloatingShape type="pill" size="lg" color="secondary" className="bottom-[10%] right-[-5%] rotate-45" />
      <FloatingShape type="square" size="md" color="accent" className="top-[20%] right-[10%] rotate-12" />
      <FloatingShape type="circle" size="sm" color="quaternary" className="bottom-[30%] left-[15%]" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b-2 border-foreground bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground bg-accent shadow-pop">
              <Zap className="text-white" size={24} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight font-heading">GEOPOP</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-bold">
            <a href="#" className="hover:text-accent transition-colors">Features</a>
            <a href="#" className="hover:text-accent transition-colors">Pricing</a>
            <a href="#" className="hover:text-accent transition-colors">About</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center relative">
          <Badge variant="tertiary" className="mb-6 animate-bounce">
            NEW: Playful Components Now Live! ✨
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter text-foreground mb-8 max-w-4xl">
            Design that <span className="text-accent underline decoration-8 decoration-secondary underline-offset-8">Pops</span> and Feels Alive.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mb-12">
            The Playful Geometric design system for modern teams who want to stand out from the gray crowd. Tactile, energetic, and fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="h-16 px-10 text-xl">
              Start Building <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 text-xl">
              View Showcase
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-4">Why GeoPop?</h2>
            <p className="text-lg text-muted-foreground font-medium">Built for the next generation of web apps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card featured>
              <div className="h-14 w-14 rounded-full bg-secondary border-2 border-foreground flex items-center justify-center mb-6">
                <Palette className="text-white" size={28} />
              </div>
              <CardTitle className="mb-4">Vibrant Colors</CardTitle>
              <CardDescription className="text-base text-foreground/80">
                A carefully curated palette that balances high-energy pops with readable neutrals.
              </CardDescription>
            </Card>

            <Card>
              <div className="h-14 w-14 rounded-full bg-accent border-2 border-foreground flex items-center justify-center mb-6">
                <Layout className="text-white" size={28} />
              </div>
              <CardTitle className="mb-4">Stable Grid</CardTitle>
              <CardDescription className="text-base text-foreground/80">
                Clean layout primitives that keep your content organized while the world around it plays.
              </CardDescription>
            </Card>

            <Card>
              <div className="h-14 w-14 rounded-full bg-quaternary border-2 border-foreground flex items-center justify-center mb-6">
                <Zap className="text-white" size={28} />
              </div>
              <CardTitle className="mb-4">Popping Motion</CardTitle>
              <CardDescription className="text-base text-foreground/80">
                Overshooting springs and bouncy interactions that make every click feel satisfying.
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* Newsletter / CTA Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="bg-tertiary border-4 border-foreground rounded-[2rem] p-12 md:p-20 relative overflow-hidden shadow-pop">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">Ready to break the rules?</h2>
                <p className="text-xl font-bold mb-8 opacity-90">
                  Join 5,000+ designers and developers building more playful interfaces.
                </p>
                <ul className="space-y-4 font-bold">
                  <li className="flex items-center gap-3">
                    <div className="bg-white border-2 border-foreground rounded-full p-1"><Check size={16} /></div>
                    Weekly layout inspiration
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white border-2 border-foreground rounded-full p-1"><Check size={16} /></div>
                    Free geometry asset packs
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-white p-8 border-4 border-foreground rounded-2xl shadow-pop">
                  <Input label="Your Email" placeholder="hello@example.com" className="mb-4" />
                  <Button className="w-full h-14 text-lg">Subscribe Now</Button>
                </div>
              </div>
            </div>
            {/* Decoration within CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl -ml-24 -mb-24" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-foreground py-12 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Zap className="text-accent" size={24} />
            <span className="text-xl font-black font-heading">GEOPOP</span>
          </div>
          <p className="text-muted-foreground font-medium">
            © 2026 GeoPop Design. Keep it playful.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'GitHub', 'Discord'].map(social => (
              <a key={social} href="#" className="font-bold hover:text-secondary transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
