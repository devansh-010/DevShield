import React from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { Play, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            <span>AI-Powered Security V2.0</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl/tight font-bold tracking-tight mb-6 text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">DevShield</span>
                            <br />
                            Automated Security Testing
                        </h1>

                        <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                            Simulate real-world attacks. Detect vulnerabilities early. Deploy with confidence using our developer-first security platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" className="h-12 px-8 text-lg">
                                Start Free Scan
                            </Button>
                            <Button variant="secondary" className="h-12 px-8 text-lg">
                                <Play className="w-4 h-4" />
                                View Demo
                            </Button>
                        </div>

                        <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 ring-2 ring-background flex items-center justify-center text-xs text-white">
                                        U{i}
                                    </div>
                                ))}
                            </div>
                            <p>Trusted by 100+ Dev Teams</p>
                        </div>
                    </motion.div>

                    {/* 3D Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, rotateY: -10 }}
                        animate={{ opacity: 1, y: 0, rotateY: -5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative perspective-1000"
                    >
                        <div
                            className="relative rounded-xl shadow-2xl shadow-primary/20 transform transition-transform hover:rotate-y-0 duration-500"
                            style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(-5deg)' }}
                        >
                            {/* Dashboard Image */}
                            <div className="relative group">
                                <img
                                    src="/dashPreview.png"
                                    alt="DevShield Dashboard"
                                    className="w-full h-auto rounded-xl"
                                />

                                {/* Floating Elements */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 1 },
                                        scale: { duration: 0.5, delay: 1 },
                                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                                    }}
                                    className="absolute bottom-6 right-6 p-4 glass rounded-lg border border-red-500/30 w-64 shadow-lg hidden md:block"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-xs font-semibold text-red-400">Critical Issues Detected</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[70%] bg-red-500" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Glow behind */}
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
