'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Playfair_Display, Inter, Caveat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

// --- Fonts ---
const serifFont = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
});

const sansFont = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const scriptFont = Caveat({
    subsets: ['latin'],
    variable: '--font-script',
    display: 'swap',
});

// --- Data ---
const slides = [
    {
        id: 1,
        title: "Croissants",
        subtitle: "The Butter Ritual",
        description: "Twenty-seven layers of locally churned butter and patience. Baked golden every morning at 5 AM.",
        image: "/Crossiant.png", // Replace with your croissant image
        sticker: "Best Seller",
        color: "#be8633" // Brand Gold
    },
    {
        id: 2,
        title: "Sourdough",
        subtitle: "Wild Yeast & Time",
        description: "A 72-hour fermentation process creates our signature crust and airy, complex crumb.",
        image: "/bread_green.png", // Replace with your sourdough/loaf image
        sticker: "Fresh Baked",
        color: "#c2410c" // Deep Orange/Rust for contrast
    }
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const currentSlide = slides[currentIndex];

    return (
        <section
            className={`relative w-full min-h-[90vh] bg-[#f4f1e8] text-[#1a1a1a] overflow-hidden flex flex-col justify-between ${serifFont.variable} ${sansFont.variable} ${scriptFont.variable}`}
        >
            {/* --- Background Grain/Texture (Optional CSS trick) --- */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

            {/* --- Main Content Grid --- */}
            <div className="relative z-10 flex-grow max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* 1. Left Text Column */}
                <div className="lg:col-span-5 flex flex-col items-start space-y-6 order-2 lg:order-1">

                    {/* Animated Subtitle */}
                    <motion.div
                        key={`sub-${currentSlide.id}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <span className="h-[2px] w-12 bg-[#be8633]"></span>
                        <span className="font-sans tracking-widest text-sm font-semibold uppercase text-[#be8633]">
                            {currentSlide.subtitle}
                        </span>
                    </motion.div>

                    {/* Animated Title */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode='wait'>
                            <motion.h1
                                key={`title-${currentSlide.id}`}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-[#1a1a1a]"
                            >
                                {currentSlide.title}
                                <span className="text-[#be8633] text-6xl">.</span>
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Description */}
                    <motion.p
                        key={`desc-${currentSlide.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-serif text-lg md:text-xl text-gray-600 italic max-w-md leading-relaxed"
                    >
                        {currentSlide.description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="pt-4 flex flex-wrap gap-4"
                    >
                        <button className="group relative px-8 py-4 bg-[#be8633] text-white rounded-full font-sans text-sm font-bold uppercase tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-lg">
                            <span className="relative z-10 flex items-center gap-2">
                                Order Now <ArrowRight size={16} />
                            </span>
                            <div className="absolute inset-0 bg-[#805015] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-[#be8633] text-[#be8633] rounded-full font-sans text-sm font-bold uppercase tracking-wide hover:bg-[#be8633]/5 transition-colors">
                            View Menu
                        </button>
                    </motion.div>
                </div>

                {/* 2. Right Image Column */}
                <div className="lg:col-span-7 relative h-[50vh] lg:h-[70vh] flex items-center justify-center order-1 lg:order-2">

                    {/* Background Decorative Circle */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-[1px] border-[#be8633]/10 rounded-full border-dashed"
                    />

                    {/* Main Floating Image */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide.id}
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="relative w-full h-full max-w-2xl"
                        >
                            {/* The Image */}
                            <div className="relative w-full h-full drop-shadow-2xl">
                                <Image
                                    src={currentSlide.image}
                                    alt={currentSlide.title}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Floating "Fresh" Sticker - Positioning relative to image */}
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 12 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                className="absolute top-[10%] right-[10%] md:right-[20%] w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20"
                            >
                                <div className="absolute inset-1 border border-dashed border-[#be8633] rounded-full animate-spin-slow"></div>
                                <div className="text-center">
                                    <span className="block font-script text-2xl text-[#be8633] leading-none transform -rotate-6">
                                        {currentSlide.sticker}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* --- Bottom Marquee Section --- */}
            <div className="w-full bg-[#be8633] text-[#f4f1e8] py-3 overflow-hidden border-t-4 border-double border-[#f4f1e8] relative z-20">
                <MarqueeText text="SOURDOUGH • FOCACCIA • PASTRY • COFFEE • LOCARNO • EST. 1998 • " />
            </div>

            {/* --- Wavy Separator (Bottom) --- */}
            <div className="absolute bottom-0 left-0 w-full translate-y-full">
                {/* Insert your wavy SVG here if you want it to hang off the section */}
            </div>
        </section>
    );
}

// --- Helper Component: Infinite Marquee ---
const MarqueeText = ({ text }: { text: string }) => {
    return (
        <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div
                className="flex"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
            >
                {/* Repeat text multiple times to ensure seamless loop */}
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="font-serif font-bold text-lg md:text-xl tracking-widest uppercase mx-4 flex items-center gap-4">
                        {text} <Star size={14} className="mb-1" />
                    </span>
                ))}
            </motion.div>
        </div>
    );
};