"use client";

import Link from "next/link";
import { Globe, ShoppingBag } from "lucide-react";
import { Playfair_Display, Caveat, Inter } from "next/font/google";

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

export default function Navbar() {
    // Colors from the design system
    const bgMain = "#be8633"; // Brand color as background
    const textLight = "#f4f1e8"; // Cream text for contrast

    return (
        <div className={`w-full relative bg-[${bgMain}] ${playfair.variable} ${caveat.variable} ${inter.variable}`}>

            {/* Main Navbar Container */}
            <nav className="w-full pt-6 pb-6 px-6 md:px-12 flex items-center justify-between relative z-10">

                {/* Left: Brand Name */}
                <div className="flex-shrink-0 z-20">
                    <Link href="/" className="group flex flex-col">
                        <span className={`font-serif text-2xl md:text-3xl font-black tracking-wide text-[${textLight}] uppercase`}>
                            Il Forno di Teo
                        </span>
                        {/* Subtitle similar to footer */}
                        <span className="text-xs font-serif italic text-gray-200 tracking-wider group-hover:text-white transition-colors">
                            Locarno · Since 1998
                        </span>
                    </Link>
                </div>

                {/* Center: Navigation Links */}
                {/* Switched to Serif font for artisanal feel */}
                <div className={`hidden md:flex items-center space-x-8 lg:space-x-12 text-sm font-serif font-bold tracking-wide text-[${textLight}] relative top-1`}>
                    <NavLink href="/best-sellers" color={textLight}>Best Sellers</NavLink>

                    <div className="relative group">
                        {/* "New" Badge - Handwritten Style */}
                        {/* Swapped colors for contrast */}
                        <span className={`absolute -top-5 -right-6 transform rotate-12 bg-[${textLight}] text-[${bgMain}] text-xs px-2 py-0.5 rounded-sm font-script shadow-sm z-10`}>
                            Fresh!
                        </span>
                        <NavLink href="/classic-boxes" color={textLight}>Classic Boxes</NavLink>
                    </div>

                    <NavLink href="/our-story" color={textLight}>Our Story</NavLink>
                    <NavLink href="/contact" color={textLight}>Contact</NavLink>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center space-x-3 md:space-x-4 z-20">
                    <button
                        className={`text-[${textLight}] p-2 rounded-full hover:bg-[${textLight}] hover:text-[${bgMain}] transition-all duration-300 border border-[${textLight}]/20`}
                        aria-label="Select Language"
                    >
                        <Globe size={20} strokeWidth={1.5} />
                    </button>

                    <button
                        className={`relative text-[${textLight}] p-2 rounded-full hover:bg-[${textLight}] hover:text-[${bgMain}] transition-all duration-300 border border-[${textLight}]/20`}
                        aria-label="Cart"
                    >
                        <ShoppingBag size={20} strokeWidth={1.5} />
                        {/* Cart Badge */}
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                            2
                        </span>
                    </button>
                </div>
            </nav>

            {/* The Wavy Bottom Border (Matching the Footer Style) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-1/2 z-0">
                <svg
                    className="relative block w-full h-[20px] md:h-[30px]"
                    viewBox="0 0 1200 50"
                    preserveAspectRatio="none"
                >
                    {/* Wavy Line Stroke - light color */}
                    <path
                        d="M0,25 C150,55 300,-5 450,25 C600,55 750,-5 900,25 C1050,55 1200,-5 1350,25"
                        fill="none"
                        stroke={textLight}
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="opacity-80"
                    />
                </svg>
            </div>
        </div>
    );
}

// Helper Component for Links
function NavLink({ href, children, color }: { href: string; children: React.ReactNode; color: string }) {
    return (
        <Link
            href={href}
            className="relative group py-1"
        >
            {children}
            {/* Animated Underline */}
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[${color}] transition-all duration-300 group-hover:w-full`}></span>
        </Link>
    );
}