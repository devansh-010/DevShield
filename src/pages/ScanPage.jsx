import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { FileCode, Globe, Upload, ArrowRight, Shield } from 'lucide-react';

const ScanPage = () => {
    const [url, setUrl] = useState('');

    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-20 relative">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Scan Your Application
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg max-w-2xl mx-auto"
                        >
                            Select a scan type to start the automated security analysis of your application.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* SAST Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center text-center h-full">
                                <div className="mb-6 relative">
                                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FileCode className="w-10 h-10 text-primary" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 border border-white/10">
                                        <Shield className="w-4 h-4 text-primary" />
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold mb-2">Static <span className="text-slate-400 font-normal">(SAST)</span></h2>
                                <p className="text-slate-400 mb-8 flex-grow">
                                    Upload your source code for <span className="text-white font-medium">Static Application Security Testing</span>.
                                </p>

                                <div className="w-full space-y-4">
                                    <div className="relative group/upload cursor-pointer">
                                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                        <div className="flex items-center justify-between p-3 bg-slate-900/50 border border-white/10 rounded-lg group-hover/upload:border-primary/50 transition-colors">
                                            <div className="flex items-center gap-3 text-slate-400">
                                                <Upload className="w-5 h-5" />
                                                <span>Upload Source Code</span>
                                            </div>
                                            <span className="bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded">Choose File</span>
                                        </div>
                                    </div>

                                    <Button variant="primary" className="w-full h-12 text-lg shadow-lg shadow-primary/25">
                                        Start Static Scan
                                    </Button>
                                </div>

                                <div className="mt-6 text-sm text-slate-500 hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                                    New to SAST? Learn more about Static Analysis
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </motion.div>

                        {/* DAST Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center text-center h-full">
                                <div className="mb-6 relative">
                                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="w-10 h-10 text-blue-500" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 border border-white/10">
                                        <Shield className="w-4 h-4 text-blue-500" />
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold mb-2">Dynamic <span className="text-slate-400 font-normal">(DAST)</span></h2>
                                <p className="text-slate-400 mb-8 flex-grow">
                                    Enter your URL for <span className="text-white font-medium">Dynamic Application Security Testing</span>.
                                </p>

                                <div className="w-full space-y-4">
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter your platform URL"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                                        />
                                    </div>

                                    <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 border-0">
                                        Start Dynamic Scan
                                    </Button>
                                </div>

                                <div className="mt-6 text-sm text-slate-500 hover:text-blue-500 transition-colors cursor-pointer flex items-center gap-1">
                                    New to DAST? Learn more about Dynamic Analysis
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 max-w-4xl mx-auto"
                    >
                        <div className="glass p-6 rounded-xl border border-primary/20 flex items-start gap-4">
                            <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1"><span className="text-primary">Recommended:</span> Comprehensive Security Check</h3>
                                <p className="text-slate-400 text-sm">
                                    For comprehensive results, we recommend running both <span className="text-primary">SAST</span> and <span className="text-blue-400">DAST</span> scans on your application. This ensures coverage of both code-level vulnerabilities and runtime security issues.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-12 text-slate-500 text-sm">
                            Need help or guidance? Check out our <span className="text-white hover:underline cursor-pointer">Docs</span> or <span className="text-white hover:underline cursor-pointer">Contact Support</span> for assistance.
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ScanPage;
