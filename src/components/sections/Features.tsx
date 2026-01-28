import { CreditCard, Scissors, TrendingUp, Calendar, Users, Package, Smartphone, Heart, BarChart3 } from 'lucide-react';

const featureGroups = [
    {
        title: "Bookings & Payments",
        description: "Get paid faster and fill your calendar effortlessly.",
        features: [
            { icon: Calendar, text: "Online Booking" },
            { icon: CreditCard, text: "Integrated POS" },
            { icon: Smartphone, text: "Automated Reminders" }
        ]
    },
    {
        title: "Salon Operations",
        description: "Manage your team and inventory without the headache.",
        features: [
            { icon: Users, text: "Staff Scheduling" },
            { icon: Heart, text: "Client Management" },
            { icon: Package, text: "Inventory Basics" }
        ]
    },
    {
        title: "Growth Tools",
        description: "Turn one-time visitors into loyal regulars.",
        features: [
            { icon: TrendingUp, text: "Marketing Automation" },
            { icon: Heart, text: "Loyalty & Retention" },
            { icon: BarChart3, text: "Reports & Insights" }
        ]
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                        Feature-packed, <span className="text-primary">complexity-free.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to run a modern salon, organized into three powerful toolkits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {featureGroups.map((group, index) => (
                        <div key={index} className="flex flex-col p-8 rounded-3xl bg-secondary/10 border border-border hover:border-primary/30 transition-colors">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-foreground mb-2">{group.title}</h3>
                                <p className="text-muted-foreground">{group.description}</p>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-border/50">
                                {group.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-border/50">
                                            <feature.icon size={20} />
                                        </div>
                                        <span className="font-medium text-foreground">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
