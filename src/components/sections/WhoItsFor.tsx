import { Scissors, Sparkles, Building2 } from 'lucide-react';

const audiences = [
    {
        icon: Scissors,
        title: "Independent salon owners",
        description: "For the solo artists who want to focus on hair, not admin. Get a booking link that works as hard as you do."
    },
    {
        icon: Building2,
        title: "Growing salons",
        description: "For teams ready to scale. Manage staff schedules, commission, and inventory in one place."
    },
    {
        icon: Sparkles,
        title: "Spas & medspas",
        description: "For wellness sanctuaries needing serene booking experiences and manage deposits securely."
    }
];

export function WhoItsFor() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        Built for your unique business
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Whether you're a team of one or twenty, Salonnz adapts to the way you work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {audiences.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-colors border border-transparent hover:border-border/50">
                            <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-primary">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
