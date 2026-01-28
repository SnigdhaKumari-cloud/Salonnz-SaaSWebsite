"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                        S
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">Salonnz</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        How it Works
                    </Link>
                    <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Pricing
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        Log in
                    </Link>
                    <Button variant="primary" size="sm">
                        Start Free Trial
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 shadow-lg animate-fade-in">
                    <nav className="flex flex-col gap-4">
                        <Link href="#how-it-works" className="text-base font-medium text-foreground py-2" onClick={toggleMenu}>
                            How it Works
                        </Link>
                        <Link href="#features" className="text-base font-medium text-foreground py-2" onClick={toggleMenu}>
                            Features
                        </Link>
                        <Link href="#pricing" className="text-base font-medium text-foreground py-2" onClick={toggleMenu}>
                            Pricing
                        </Link>
                        <div className="h-px bg-border my-2" />
                        <Link href="/login" className="text-base font-medium text-foreground py-2" onClick={toggleMenu}>
                            Log in
                        </Link>
                        <Button variant="primary" fullWidth onClick={toggleMenu}>
                            Start Free Trial
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
