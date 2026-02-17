'use client';

import React from 'react';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#be8633] relative pt-32 pb-10 text-gray-100 overflow-hidden"
        >

            {/* --- Top Wavy Pattern --- */}
            <div className="absolute top-0 left-0 w-full leading-[0] z-0 transform rotate-180 -mt-1">
                <svg
                    className="block w-full h-[60px] md:h-[80px]"
                    viewBox="0 0 1200 60"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0,30 C150,60 300,0 450,30 C600,60 750,0 900,30 C1050,60 1200,0 1350,30"
                        fill="none"
                        stroke="#f4f1e8"
                        strokeWidth="1.5"
                        className="opacity-40"
                    />
                    <path
                        d="M0,50 C150,80 300,20 450,50 C600,80 750,20 900,50 C1050,80 1200,20 1350,50 L1350,120 L0,120 Z"
                        fill="#ffffff"
                        className="fill-[#f4f1e8] opacity-10" // Subtle difference
                    />
                    <path
                        d="M0,60 C150,90 300,30 450,60 C600,90 750,30 900,60 C1050,90 1200,30 1350,60 L1350,130 L0,130 Z"
                        fill="#ffffff" // Transition from white body to gold footer
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10 pt-10">

                {/* Column 1: Brand Identity */}
                <div className="col-span-1">
                    <h2 className="font-serif text-3xl font-black text-[#f4f1e8] tracking-wide mb-1 uppercase">
                        IL FORNO DI TEO
                    </h2>
                    <div className="font-handwriting text-xl text-gray-200 mb-6 transform -rotate-1">
                        Panetteria · Pasticceria · Focacceria
                    </div>
                    <p className="font-serif text-sm leading-relaxed mb-6 text-gray-100/90">
                        Authentic flavors in the heart of Locarno. From our oven to your table, we bring you the finest breads, pastries, and daily essentials.
                    </p>
                    <div className="flex gap-4">
                        <motion.a whileHover={{ y: -5, opacity: 1 }} href="#" className="p-2 bg-white/10 rounded-full border border-white/20 text-[#f4f1e8] hover:bg-[#f4f1e8] hover:text-[#be8633] transition-colors shadow-sm">
                            <Instagram size={20} />
                        </motion.a>
                        <motion.a whileHover={{ y: -5, opacity: 1 }} href="#" className="p-2 bg-white/10 rounded-full border border-white/20 text-[#f4f1e8] hover:bg-[#f4f1e8] hover:text-[#be8633] transition-colors shadow-sm">
                            <Facebook size={20} />
                        </motion.a>
                    </div>
                </div>

                {/* Column 2: Offerings */}
                <div className="md:pl-8">
                    <h3 className="font-serif text-lg font-bold mb-6 border-b border-[#f4f1e8]/30 inline-block pb-1 text-[#f4f1e8]">
                        Nostri Prodotti
                    </h3>
                    <ul className="space-y-3 font-serif text-base text-gray-100/80">
                        {['Pane Artigianale', 'Pasticceria Fresca', 'Focaccia Genovese', 'Market & Convenience'].map((item, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-white hover:pl-2 transition-all duration-300 block">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact & Location */}
                <div>
                    <h3 className="font-serif text-lg font-bold mb-6 border-b border-[#f4f1e8]/30 inline-block pb-1 text-[#f4f1e8]">
                        Dove Siamo
                    </h3>
                    <ul className="space-y-5 font-serif text-base text-gray-100/80">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-[#f4f1e8] mt-1 shrink-0 opacity-80" />
                            <span>
                                <strong className="text-white">Locarno</strong><br />
                                Piazza Grande 13<br />
                                CH-6600
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="text-[#f4f1e8] shrink-0 opacity-80" />
                            <a href="mailto:info@ilfornoditeo.ch" className="hover:text-white break-all text-sm transition-colors">
                                info@ilfornoditeo.ch
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Newsletter/Promo */}
                <div className="relative mt-4 md:mt-0">
                    <motion.span
                        animate={{ rotate: [6, 4, 6] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-8 -right-2 font-handwriting text-2xl text-[#f4f1e8]"
                    >
                        fresh from the oven!
                    </motion.span>
                    <div className="bg-[#f4f1e8] p-6 rounded-xl shadow-lg border-2 border-dashed border-[#be8633]/30 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <h3 className="font-serif text-lg font-bold mb-2 text-[#be8633]">Stay Updated</h3>
                        <p className="text-sm font-serif italic mb-4 text-gray-600">
                            New pastries and daily specials sent to your inbox.
                        </p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address..."
                                className="w-full bg-white border border-[#be8633]/20 px-4 py-2 rounded-md font-serif text-sm focus:outline-none focus:border-[#be8633] focus:ring-1 focus:ring-[#be8633] text-gray-800 placeholder:text-gray-400"
                            />
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-[#be8633] text-white font-serif font-bold py-2 rounded-md hover:bg-[#a6752b] transition-colors shadow-sm"
                            >
                                Iscriviti
                            </motion.button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-[#f4f1e8]/20 mt-8 pt-8 text-center px-4 relative z-10">
                <p className="font-serif text-xs text-secondary-50 opacity-60">
                    &copy; {new Date().getFullYear()} <strong>Il Forno di Teo</strong>. All rights reserved.
                    <span className="hidden sm:inline"> | Made with flour & love in Locarno.</span>
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;