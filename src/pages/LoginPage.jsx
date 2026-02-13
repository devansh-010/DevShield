import React from 'react';
import { Shield, Mail, Lock, Github, Linkedin, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-[#020617] relative flex items-center justify-center p-4 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="glass rounded-2xl p-8 border border-white/10 shadow-2xl shadow-black/50">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-2 font-bold text-xl tracking-tight text-white mb-6">
                            <Shield className="w-6 h-6 text-primary fill-primary/20" />
                            <span>Dev<span className="text-primary">Shield</span></span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                        <p className="text-slate-400 text-sm">Sign in to your account</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        <div className="space-y-1">
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-light"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-light"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Forgot password?</a>
                        </div>

                        <Button variant="primary" className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:to-blue-500 border-none shadow-lg shadow-primary/20">
                            Sign In
                        </Button>
                    </form>

                    {/* Footer Actions */}
                    <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
                        <div className="text-center">
                            <p className="text-sm text-slate-400">
                                Don't have an account? <Link to="/signup" className="text-primary hover:text-primary/80 font-medium">Sign Up</Link>
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#0b1022] px-2 text-slate-500">Sign in with</span>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                                {/* Pseudo-Google G */}
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                                    <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                                    <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05" />
                                    <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5 text-[#0077b5]" />
                            </button>
                        </div>

                        <div className="text-center pt-4">
                            <a href="#" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors">
                                <LifeBuoy className="w-3 h-3" />
                                Having trouble? Contact Support
                            </a>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
