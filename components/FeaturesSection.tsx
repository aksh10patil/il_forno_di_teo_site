'use client';

import React from 'react';
import { Clock, Wheat, Heart, LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Playfair_Display, Caveat } from "next/font/google";

const serifFont = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
});

const scriptFont = Caveat({
    subsets: ['latin'],
    variable: '--font-script',
    display: 'swap',
});

// Animation Variants
const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const cardVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        }
    }
};

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    text: string;
}

const FeatureCard = ({ icon: Icon, title, text }: FeatureCardProps) => (
    <motion.div
        variants={cardVariant}
        whileHover={{ y: -10 }}
        className="flex flex-col items-center text-center p-6 group cursor-default"
    >
        <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-5 rounded-full border-2 border-[#be8633]/30 shadow-sm mb-6 group-hover:shadow-md group-hover:border-[#be8633] transition-all duration-300"
        >
            <Icon size={32} className="text-[#be8633]" strokeWidth={1.5} />
        </motion.div>
        <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="font-serif text-gray-600 leading-relaxed italic text-lg opacity-80">{text}</p>
    </motion.div>
);

const FeaturesSection = () => {
    return (
        <section className={`bg-transparent py-24 px-4 overflow-hidden ${serifFont.variable} ${scriptFont.variable}`}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-script text-4xl text-gray-500 relative inline-block mb-2">
                            Our Process
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#be8633] origin-left transform -rotate-1 opacity-60"
                            ></motion.span>
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#be8633] mt-4 font-medium tracking-tight">
                            The Art of Slow Baking
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-24 h-1 bg-[#be8633]/20 mx-auto mt-6 rounded-full"
                        />
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-12 border-t border-b border-[#be8633]/10 py-12"
                >
                    <FeatureCard
                        icon={Wheat}
                        title="Simple Ingredients"
                        text="Flour, water, salt, and yeast. We source locally to ensure every grain tells a story."
                    />
                    <FeatureCard
                        icon={Clock}
                        title="Time & Patience"
                        text="72-hour fermentation allows flavors to deepen naturally, creating the perfect crust."
                    />
                    <FeatureCard
                        icon={Heart}
                        title="Handcrafted"
                        text="Shaped by hand daily. No machines, just the warmth of human touch in every loaf."
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;