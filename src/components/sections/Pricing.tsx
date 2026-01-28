import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Independent",
        price: "$29",
        description: "Perfect for solo stylists and booth renters.",
        features: [
            "1 Staff Member",
            "Unlimited Appointments",
            "Online Booking Page",
            "Client Management",
            "Basic Reports"
        ]
    },
    {
        name: "Growth",
        price: "$59",
        description: "For growing salons covering the essentials.",
        popular: true,
        features: [
            "Up to 5 Staff Members",
            "Everything in Independent",
            "Inventory Management",
            "Email Marketing",
            "Commission Tracking",
            "Deposits & Card on File"
        ]
    },
    {
        name: "Premium",
        price: "$99",
        description: "Advanced tools for busy, multi-staff salons.",
        features: [
            "Unlimited Staff",
            "Everything in Growth",
            "Advanced Reporting",
            "Payroll Assistance",
            "Multi-Location Support",
            "Dedicated Account Manager"
        ]
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        No hidden fees. No long-term contracts. Change plans anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? 'border-primary bg-white shadow-xl scale-105 z-10' : 'border-border bg-white shadow-md hover:shadow-lg transition-shadow'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                                <p className="text-muted-foreground text-sm">{plan.description}</p>
                            </div>

                            <div className="flex-1 mb-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                                            <Check size={18} className="text-primary mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button
                                variant={plan.popular ? 'primary' : 'outline'}
                                fullWidth
                            >
                                Start Free Trial
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
