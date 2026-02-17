"use client";

import Link from "next/link";
import { Globe, ShoppingBag } from "lucide-react";
import { Playfair_Display, Caveat, Inter } from "next/font/google";
import { motion, Variants } from "framer-motion";

// 1. Load Fonts
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: '--font-serif',
});

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: '--font-script',
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: '--font-sans',
});

// Animation Variants
const containerVariant: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // "Apple" easing
            staggerChildren: 0.1
        }
    }
};

const itemVariant: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const waveVariant: Variants = {
    animate: {
        x: ["0%", "-2%"],
        transition: {
            repeat: Infinity,
            repeatType: "mirror" as const,
            duration: 8,
            ease: "easeInOut"
        }
    }
};

export default function Navbar() {
    // Colors from your design system
    const bgMain = "#be8633";
    const textLight = "#f4f1e8";

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={containerVariant}
            className={`${playfair.variable} ${caveat.variable} ${inter.variable} relative w-full overflow-hidden`}
            style={{ backgroundColor: bgMain }}
        >

            {/* Main Navbar Container */}
            <nav className="w-full pt-6 pb-2 px-6 md:px-12 flex items-center justify-between relative z-20">

                {/* Left: Brand Name */}
                <motion.div variants={itemVariant} className="flex-shrink-0">
                    <Link href="/" className="group flex flex-col">
                        <span
                            className="font-serif text-2xl md:text-3xl font-black tracking-wide uppercase"
                            style={{ color: textLight }}
                        >
                            Il Forno di Teo
                        </span>
                        <span className="text-xs font-serif italic text-white/80 tracking-wider group-hover:text-white transition-colors">
                            Locarno · Since 1998
                        </span>
                    </Link>
                </motion.div>

                {/* Center: Navigation Links */}
                <div
                    className="hidden md:flex items-center space-x-8 lg:space-x-12 text-sm font-serif font-bold tracking-wide relative top-1"
                    style={{ color: textLight }}
                >
                    <motion.div variants={itemVariant}>
                        <NavLink href="/best-sellers" color={textLight}>Best Sellers</NavLink>
                    </motion.div>

                    <motion.div variants={itemVariant} className="relative group">
                        {/* "New" Badge */}
                        <motion.span
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 12 }}
                            transition={{ type: "spring", stiffness: 300, delay: 1 }}
                            className="absolute -top-5 -right-6 text-xs px-2 py-0.5 rounded-sm font-script shadow-sm z-10 origin-bottom-left"
                            style={{ backgroundColor: textLight, color: bgMain }}
                        >
                            Fresh!
                        </motion.span>
                        <NavLink href="/classic-boxes" color={textLight}>Classic Boxes</NavLink>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <NavLink href="/our-story" color={textLight}>Our Story</NavLink>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <NavLink href="/contact" color={textLight}>Contact</NavLink>
                    </motion.div>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center space-x-3 md:space-x-4">
                    <motion.button
                        variants={itemVariant}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full transition-colors duration-300 border border-white/20 hover:bg-white/10"
                        style={{ color: textLight }}
                        aria-label="Select Language"
                    >
                        <Globe size={20} strokeWidth={1.5} />
                    </motion.button>

                    <motion.button
                        variants={itemVariant}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative p-2 rounded-full transition-colors duration-300 border border-white/20 hover:bg-white/10"
                        style={{ color: textLight }}
                        aria-label="Cart"
                    >
                        <ShoppingBag size={20} strokeWidth={1.5} />
                    </motion.button>
                </div>
            </nav>

            {/* THE WAVY BORDER */}
            <div className="w-full overflow-hidden leading-none relative">
                {/* The SVG container is wider to allow movement without gaps */}
                <motion.div
                    variants={waveVariant}
                    animate="animate"
                    className="w-[105%] -ml-[2.5%]"
                >
                    <svg
                        viewBox="0 0 1200 60"
                        preserveAspectRatio="none"
                        className="block w-full h-[52px]"
                    >
                        {/* Thin decorative wave line - animates slowly */}
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.65 }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                            d="
                            M0,22
                            C60,48 120,-6 180,22
                            C240,48 300,-6 360,22
                            C420,48 480,-6 540,22
                            C600,48 660,-6 720,22
                            C780,48 840,-6 900,22
                            C960,48 1020,-6 1080,22
                            C1140,48 1200,-6 1260,22
                        "
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            opacity="0.65"
                        />

                        {/* Bottom masking wave */}
                        <path
                            d="
                        M0,34
                        C60,72 120,2 180,34
                        C240,72 300,2 360,34
                        C420,72 480,2 540,34
                        C600,72 660,2 720,34
                        C780,72 840,2 900,34
                        C960,72 1020,2 1080,34
                        C1140,72 1200,2 1260,34
                        L1260,100
                        L0,100
                        Z
                      "
                            fill="#ffffff"
                        />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
}

// Helper Component for Links
function NavLink({ href, children, color }: { href: string; children: React.ReactNode; color: string }) {
    return (
        <Link
            href={href}
            className="relative group py-1 block"
        >
            <span className="relative z-10">{children}</span>
            <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full"
                style={{ backgroundColor: color }}
            ></span>
        </Link>
    );
}