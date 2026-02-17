'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Playfair_Display, Inter, Caveat } from 'next/font/google';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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
        image: "/Crossiant.png",
        sticker: "Best Seller",
        color: "#be8633"
    },
    {
        id: 2,
        title: "Sourdough",
        subtitle: "Wild Yeast & Time",
        description: "A 72-hour fermentation process creates our signature crust and airy, complex crumb.",
        image: "/bread_green.png",
        sticker: "Fresh Baked",
        color: "#c2410c"
    }
];

// --- Animations ---
const letterAnim: Variants = {
    initial: { y: 100, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    },
    exit: {
        y: -40,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeIn" }
    }
};

const floatAnim: Variants = {
    animate: {
        y: [0, -15, 0],
        rotate: [0, 2, -2, 0],
        transition: {
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror" as const
        }
    }
};

const pulseAnim: Variants = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [0.1, 0.15, 0.1],
        rotate: [0, 90, 180, 270, 360],
        transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
        }
    }
};

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const currentSlide = slides[currentIndex];

    // Split title for staggered animation
    const titleChars = currentSlide.title.split('');

    return (
        <section
            className={`relative w-full min-h-[90vh] bg-transparent text-[#1a1a1a] overflow-hidden flex flex-col justify-between ${serifFont.variable} ${sansFont.variable} ${scriptFont.variable}`}
        >
            {/* --- Background Grain/Texture --- */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

            {/* --- Main Content Grid --- */}
            <div className="relative z-10 flex-grow max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-12 md:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* 1. Left Text Column */}
                <div className="lg:col-span-5 flex flex-col items-start space-y-8 order-2 lg:order-1 relative z-20">

                    {/* Animated Subtitle */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={`sub-${currentSlide.id}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-4"
                            >
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: 48 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="h-[2px] bg-[#be8633]"
                                ></motion.span>
                                <span className="font-sans tracking-[0.2em] text-sm font-semibold uppercase text-[#be8633]">
                                    {currentSlide.subtitle}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Animated Title */}
                    <div className="relative text-6xl md:text-8xl lg:text-9xl h-[1.1em] overflow-visible perspective-[1000px]">
                        <AnimatePresence mode='wait'>
                            <motion.h1
                                key={`title-${currentSlide.id}`}
                                className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-[#1a1a1a] flex"
                            >
                                {titleChars.map((char, i) => (
                                    <motion.span
                                        key={i}
                                        variants={letterAnim}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.22, 1, 0.36, 1],
                                            delay: i * 0.05 // CHAR STAGGER
                                        }}
                                        className="inline-block origin-bottom"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.6, type: "spring" }}
                                    className="text-[#be8633]"
                                >.</motion.span>
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Description */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode='wait'>
                            <motion.p
                                key={`desc-${currentSlide.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="font-serif text-lg md:text-xl text-gray-600 italic max-w-md leading-relaxed"
                            >
                                {currentSlide.description}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="pt-4 flex flex-wrap gap-4"
                    >
                        <motion.button
                            // The "Dough" Physics
                            whileHover={{
                                scale: 1.1, // Expands like bread rising
                                y: -2, // Lifts slightly
                                backgroundColor: "#be8633", // Turns "baked" golden brown
                                boxShadow: "0px 10px 20px rgba(190, 134, 51, 0.4)", // A warm "heat" glow
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15, // Low damping = slightly bouncy/soft like dough
                            }}
                            // Decreased padding (px-6 py-2.5) for smaller size
                            // Initial color is lighter (#dcb67d) to represent raw dough/light crust
                            className="group relative px-6 py-2.5 bg-[#dcb67d] text-white rounded-full font-sans text-sm font-bold uppercase tracking-wide shadow-md"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Order Now
                                {/* Arrow slides out like steam escaping */}
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                                />
                            </span>
                        </motion.button>

                        {/* Button 2: The "Crust" Outline Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            // Decreased padding
                            className="px-6 py-2.5 bg-transparent border-2 border-[#dcb67d] text-[#be8633] rounded-full font-sans text-sm font-bold uppercase tracking-wide hover:border-[#be8633] hover:bg-[#be8633]/10 transition-colors duration-300"
                        >
                            View Menu
                        </motion.button>
                    </motion.div>
                </div>

                {/* 2. Right Image Column */}
                <div className="lg:col-span-7 relative h-[50vh] lg:h-[70vh] flex items-center justify-center order-1 lg:order-2 perspective-[1000px]">

                    {/* Background Decorative Circle - Breathing */}
                    <motion.div
                        variants={pulseAnim}
                        animate="animate"
                        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] border-[1px] border-[#be8633] rounded-full border-dashed opacity-10"
                    />

                    {/* Main Floating Image */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide.id}
                            initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -5 }}
                            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, y: -50, scale: 1.1, rotate: 5 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full h-full max-w-2xl flex items-center justify-center"
                        >
                            {/* Inner Float Animation wrapper */}
                            <motion.div
                                variants={floatAnim}
                                animate="animate"
                                className="relative w-full h-full"
                            >
                                <div className="relative w-full h-full drop-shadow-2xl">
                                    <Image
                                        src={currentSlide.image}
                                        alt={currentSlide.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* Floating "Fresh" Sticker - Positioning relative to image */}
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 12 }}
                                exit={{ scale: 0 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                                className="absolute top-[10%] right-[10%] md:right-[20%] w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20"
                            >
                                <div className="absolute inset-1 border border-dashed border-[#be8633] rounded-full animate-spin-slow duration-[10s]"></div>
                                <div className="text-center">
                                    <span className="block font-script text-2xl md:text-3xl text-[#be8633] leading-none transform -rotate-6">
                                        {currentSlide.sticker}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* --- Bottom Marquee Section --- */}
            <div className="w-full bg-[#be8633] mt-20 text-[#f4f1e8] py-3 overflow-hidden border-t-4 border-double border-[#f4f1e8] relative z-20">
                <MarqueeText text="SOURDOUGH • FOCACCIA • PASTRY • COFFEE • LOCARNO • EST. 1998 • " />
            </div>

            {/* --- Wavy Separator (Bottom) --- */}
            <div className="absolute bottom-0 left-0 w-full translate-y-full">
                {/* Optional extra separator */}
            </div>
        </section>
    );
}

// --- Helper Component: Infinite Marquee ---
const MarqueeText = ({ text }: { text: string }) => {
    return (
        <div className="flex whitespace-nowrap overflow-hidden select-none">
            <motion.div
                className="flex min-w-full shrink-0"
                animate={{ x: "-100%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30
                }}
            >
                {/* First set of items */}
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="font-serif font-bold text-lg md:text-xl tracking-widest uppercase mx-4 flex items-center gap-4">
                        {text} <Star size={14} className="mb-1 opacity-60" />
                    </span>
                ))}
            </motion.div>
            <motion.div
                className="flex min-w-full shrink-0"
                animate={{ x: "-100%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30
                }}
            >
                {/* Duplicate set for seamless loop */}
                {[...Array(6)].map((_, i) => (
                    <span key={`dup-${i}`} className="font-serif font-bold text-lg md:text-xl tracking-widest uppercase mx-4 flex items-center gap-4">
                        {text} <Star size={14} className="mb-1 opacity-60" />
                    </span>
                ))}
            </motion.div>
        </div>
    );
};