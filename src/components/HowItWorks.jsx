import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, FileText, Terminal } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-surface relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Secure Your Code with <span className="text-primary">Intelligent Automation</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Automated scans. Real-time results. Developer-friendly.
                        Everything you need to ship secure code faster.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Phishing Test */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-red-500/20 text-red-500">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Automated Phishing Test</h3>
                        </div>

                        <div className="bg-slate-950 rounded-lg border border-white/5 p-4 mb-4">
                            <div className="flex items-center gap-2 mb-3 text-red-400 text-xs font-mono">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                PHISHING ATTEMPT DETECTED
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-3/4 bg-slate-800 rounded" />
                                <div className="h-2 w-1/2 bg-slate-800 rounded" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: SQL Injection */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-red-500/20 text-red-500">
                                <Terminal className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">SQL Injection Found</h3>
                        </div>

                        <div className="bg-slate-950 rounded-lg border border-white/5 p-4 font-mono text-xs text-slate-400">
                            <p className="text-red-400 mb-2">High Risk Vulnerability:</p>
                            <div className="space-y-1">
                                <p><span className="text-blue-400">SELECT</span> * <span className="text-blue-400">FROM</span> users</p>
                                <p><span className="text-blue-400">WHERE</span> id = <span className="text-orange-400">'1 OR 1=1'</span>;</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Report */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/20 text-primary">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Security Insights Report</h3>
                        </div>

                        <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        <span className="text-xs text-slate-300">Clean Code</span>
                                    </div>
                                    <span className="text-xs text-slate-500">Passed</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="mt-20 border-t border-white/10 pt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Threat Coverage", value: "95%" },
                            { label: "Faster Testing", value: "90%" },
                            { label: "Apps Secured", value: "1000+" },
                            { label: "Continuous Monitoring", value: "24/7" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
