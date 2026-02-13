import React from 'react';
import FeatureCard from './FeatureCard';
import { Brain, Zap, Wrench } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Brain,
            title: "AI-Driven Threat Detection",
            description: "Identify vulnerabilities with advanced AI analysis and pattern recognition."
        },
        {
            icon: Zap,
            title: "Attack Simulation",
            description: "Simulate phishing and zero-day attacks to test your defenses in real-time."
        },
        {
            icon: Wrench,
            title: "Instant Remediation",
            description: "Get smart fix recommendations and auto-patches for your code."
        }
    ];

    return (
        <section id="features" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Powerful Security Features
                    </h2>
                    <p className="text-lg text-slate-400">
                        Everything you need to secure your applications from code to cloud.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
