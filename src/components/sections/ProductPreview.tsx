import Image from 'next/image';

export function ProductPreview() {
    return (
        <section className="py-24 bg-secondary/20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Experience the calm.
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A beautiful, clutter-free interface designed for modern salon professionals.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Main Dashboard Placeholder */}
                    <div className="relative z-10 rounded-2xl shadow-xl border border-dashed border-border bg-white overflow-hidden animate-slide-up aspect-video flex flex-col items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                            <span className="text-3xl">📅</span>
                        </div>
                        <p className="text-muted-foreground font-medium text-lg">Calendar Dashboard</p>
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </div>

                    {/* Floating Element Placeholder - Client Profile (Left) */}
                    <div className="hidden lg:flex flex-col items-center justify-center absolute -left-12 bottom-12 z-20 w-[400px] h-[300px] rounded-2xl shadow-xl border border-dashed border-border bg-white transform -rotate-2 hover:rotate-0 transition-transform duration-500 hover:shadow-2xl">
                        <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mb-3">
                            <span className="text-xl">👤</span>
                        </div>
                        <p className="text-muted-foreground font-medium">Client Profile</p>
                    </div>

                    {/* Decorative Blur Backgrounds */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50" />
                </div>
            </div>
        </section>
    );
}
