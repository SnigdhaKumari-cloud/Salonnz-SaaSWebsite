import { Clock, CalendarCheck, MessageSquare } from 'lucide-react';

const steps = [
    {
        icon: Clock,
        title: "1. Set up your salon in minutes",
        description: "Input your staff, services, and hours. Our smart wizard gets you ready for bookings instantly."
    },
    {
        icon: CalendarCheck,
        title: "2. Accept bookings & payments",
        description: "Clients book online 24/7. Deposits and card-on-file protection are built right in."
    },
    {
        icon: MessageSquare,
        title: "3. Automate reminders & manage clients",
        description: "We text your clients reminders automatically, so you stop chasing people and start filling seats."
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        How Salonnz works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Three simple steps to a calmer, more profitable business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10 border-t-2 border-dashed border-muted-foreground/30" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-2xl bg-white shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center mb-6 text-primary border border-border">
                                <step.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
