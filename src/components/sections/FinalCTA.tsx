import { Button } from '@/components/ui/Button';

export function FinalCTA() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="relative rounded-3xl bg-[#2D3A32] overflow-hidden p-12 md:p-20 text-center">
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready for a calmer salon?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join thousands of salon owners who swtiched to Salonnz and never looked back. Start your 14-day free trial today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="primary" size="lg" className="min-w-[200px] border-none">
                                Get Started for Free
                            </Button>
                            <Button variant="outline" size="lg" className="min-w-[200px] bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
                                Book a Demo
                            </Button>
                        </div>

                        <p className="mt-8 text-sm text-gray-400">
                            No credit card required. Cancel anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
