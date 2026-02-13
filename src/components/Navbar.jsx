import React, { useState } from 'react';
import Button from './ui/Button';
import { Shield, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/#' },
        { name: 'Features', href: '/#features' },
        { name: 'How It Works', href: '/#how-it-works' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Docs', href: '/#docs' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 glass py-4 border-b border-white/5">
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer font-bold text-2xl tracking-tight text-white">
                    <Shield className="w-8 h-8 text-primary fill-primary/20" />
                    <span>Dev<span className="text-primary">Shield</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link, index) => (
                        <React.Fragment key={link.name}>
                            <a href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                {link.name}
                            </a>
                            {index < navLinks.length - 1 && (
                                <div className="h-4 w-px bg-white/30" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Login</Link>
                    <Link to="/signup">
                        <Button variant="primary" className="py-2 px-4 text-sm">Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-lg font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-white/10 my-2" />
                            <Link to="/login" className="text-left text-lg font-medium text-slate-300 hover:text-white">Login</Link>
                            <Link to="/signup" className="w-full">
                                <Button variant="primary" className="w-full">Get Started</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
