import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-secondary/30 pt-20 pb-10 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                                S
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">Salonnz</span>
                        </Link>
                        <p className="text-muted-foreground mb-6 max-w-xs">
                            Modern, intelligent salon management software designed for independent salon owners and busy spas.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Salonnz Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-xs text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full">
                            Made with ❤️ for salons
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
