import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className, ...props }) => {
    const variants = {
        primary: 'bg-primary hover:bg-sky-400 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]',
        secondary: 'bg-white/5 border border-white/10 hover:bg-white/10 text-white backdrop-blur-sm',
        ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
        outline: 'border border-primary/50 text-primary hover:bg-primary/10'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                'px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
