import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#be8633] relative pt-24 pb-10 text-gray-100 overflow-hidden">

            {/* --- Top Wavy Pattern --- */}
            <div className="absolute top-0 left-0 w-full leading-[0] z-0">
                <svg
                    className="relative block w-[200%] h-[40px] md:w-full md:h-[50px]"
                    viewBox="0 0 1200 50"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,25 C150,55 300,-5 450,25 C600,55 750,-5 900,25 C1050,55 1200,-5 1350,25"
                        fill="none"
                        stroke="#f4f1e8"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">

                {/* Column 1: Brand Identity */}
                <div className="col-span-1">
                    <h2 className="font-serif text-3xl font-black text-[#f4f1e8] tracking-wide mb-1 uppercase">
                        IL FORNO DI TEO
                    </h2>
                    <div className="font-handwriting text-xl text-gray-200 mb-6 transform -rotate-1">
                        Panetteria · Pasticceria · Focacceria
                    </div>
                    <p className="font-serif text-sm leading-relaxed mb-6 text-gray-100">
                        Authentic flavors in the heart of Locarno. From our oven to your table, we bring you the finest breads, pastries, and daily essentials.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white rounded-full border border-white text-[#be8633] hover:bg-[#f4f1e8] hover:text-[#be8633] transition-colors shadow-sm">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full border border-white text-[#be8633] hover:bg-[#f4f1e8] hover:text-[#be8633] transition-colors shadow-sm">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Column 2: Offerings */}
                <div className="md:pl-8">
                    <h3 className="font-serif text-lg font-bold mb-6 border-b-2 border-[#f4f1e8] inline-block pb-1 text-[#f4f1e8]">
                        Nostri Prodotti
                    </h3>
                    <ul className="space-y-3 font-serif text-base text-gray-100">
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Pane Artigianale</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Pasticceria Fresca</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Focaccia Genovese</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Market & Convenience</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact & Location */}
                <div>
                    <h3 className="font-serif text-lg font-bold mb-6 border-b-2 border-[#f4f1e8] inline-block pb-1 text-[#f4f1e8]">
                        Dove Siamo
                    </h3>
                    <ul className="space-y-5 font-serif text-base text-gray-100">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-[#f4f1e8] mt-1 shrink-0" />
                            <span>
                                <strong>Locarno</strong><br />
                                Piazza Grande 13<br />
                                CH-6600
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="text-[#f4f1e8] shrink-0" />
                            <a href="mailto:matteo.pellegrini@ilfornoditeo.ch" className="hover:text-white break-all text-sm">
                                matteo.pellegrini@<br />ilfornoditeo.ch
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Newsletter/Promo */}
                <div className="relative mt-4 md:mt-0">
                    <span className="absolute -top-8 -right-2 font-handwriting text-2xl text-[#f4f1e8] transform rotate-6">
                        fresh from the oven!
                    </span>
                    <div className="bg-white p-6 rounded-xl border-2 border-dashed border-[#be8633] shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <h3 className="font-serif text-lg font-bold mb-2 text-gray-800">Stay Updated</h3>
                        <p className="text-sm font-serif italic mb-4 text-gray-500">
                            New pastries and daily specials sent to your inbox.
                        </p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address..."
                                className="w-full bg-[#f4f1e8] border border-gray-300 px-4 py-2 rounded-md font-serif text-sm focus:outline-none focus:border-[#be8633] focus:ring-1 focus:ring-[#be8633] text-gray-800"
                            />
                            <button className="w-full bg-[#be8633] text-white font-serif font-bold py-2 rounded-md hover:opacity-90 transition-opacity shadow-sm">
                                Iscriviti
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-white/20 mt-8 pt-8 text-center px-4 relative z-10">
                <p className="font-serif text-xs text-gray-300">
                    &copy; {new Date().getFullYear()} <strong>Il Forno di Teo</strong>. All rights reserved.
                    <span className="hidden sm:inline"> | Locarno, Switzerland.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;