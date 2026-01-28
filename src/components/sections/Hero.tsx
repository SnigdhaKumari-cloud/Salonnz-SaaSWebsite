import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium animate-fade-in translate-y-4 opacity-0 [animation-fill-mode:forwards]">
                            <span>✨ New: Smart Scheduling Assistant</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight animate-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                            Run your salon without chaos.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed animate-slide-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
                            Automate booking, payments, and client reminders so you can focus on growing your business, not managing it.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 animate-slide-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                            <Button variant="primary" size="lg" className="min-w-[180px]">
                                Start Free Trial
                            </Button>
                            <Button variant="secondary" size="lg" className="min-w-[180px]">
                                Book a Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Hero Visual Placeholder */}
                    <div className="relative animate-slide-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full transform scale-90 translate-y-10" />

                        {/* Placeholder Container */}
                        <div className="w-full aspect-[4/3] rounded-2xl border border-dashed border-border bg-secondary/10 flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                                <span className="text-2xl">🖼️</span>
                            </div>
                            <p className="text-muted-foreground font-medium">Dashboard Preview</p>
                            <p className="text-sm text-muted-foreground/60 mt-2">Visual will be added later</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
