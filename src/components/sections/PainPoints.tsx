import { UserX, BellOff, Users, Receipt } from 'lucide-react';

const problems = [
    {
        icon: UserX,
        title: "No-Shows & Missed Appointments",
        description: "Losing revenue because clients forget to show up or cancel last minute without penalty."
    },
    {
        icon: BellOff,
        title: "The Manual Reminder Grind",
        description: "Wasting hours texting clients one-by-one instead of focusing on your craft."
    },
    {
        icon: Users,
        title: "Staff Scheduling Confusion",
        description: "Messy spreadsheets, double-bookings, and team miscommunications."
    },
    {
        icon: Receipt,
        title: "Payment & Reporting Headaches",
        description: "Guessing your weekly profit and chasing down payments at the front desk."
    }
];

export function PainPoints() {
    return (
        <section className="py-24 bg-red-50/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground leading-tight">
                        Is running your salon feeling<br />
                        <span className="text-red-500/80">more like a struggle?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        You didn't start your business to become a professional scheduler.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="flex flex-col items-start p-6 rounded-2xl bg-white border border-red-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 group">
                            <div className="p-4 rounded-xl bg-red-50 text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <item.icon size={32} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-red-600 transition-colors">
                                {item.title}
                            </h3>
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
