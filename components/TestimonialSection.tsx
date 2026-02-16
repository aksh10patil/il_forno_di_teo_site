import React from 'react';

const TestimonialSection = () => {
    return (
        <section className="bg-[#f4f1e8] py-24 relative overflow-hidden">
            {/* Top Wavy Border SVG (Simplified) */}
            <div className="absolute top-0 left-0 w-full">
                <svg className="w-full h-6 text-[#be8633]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 10 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Large Decorative Quote Mark */}
                <div className="font-serif text-9xl text-[#be8633] opacity-20 leading-none h-16 -mb-4 font-bold">
                    &ldquo;
                </div>

                <blockquote className="relative">
                    <p className="font-serif text-2xl md:text-4xl text-gray-800 leading-snug">
                        It’s not just bread; it’s a <span className="italic font-light">memory</span>. The smell reminds me of my grandmother’s kitchen, but the taste is entirely modern and refined.
                    </p>

                    <div className="mt-10 flex flex-col items-center">
                        {/* Avatar "Sticker" */}
                        <div className="w-16 h-16 rounded-full bg-gray-300 border-2 border-white shadow-md mb-4 overflow-hidden">
                            <img src="/api/placeholder/100/100" alt="Customer" className="object-cover w-full h-full" />
                        </div>

                        <cite className="not-italic flex flex-col items-center">
                            <span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Madeleine S.</span>
                            <span className="font-handwriting text-2xl text-[#be8633] transform -rotate-2 mt-1">
                                loyal customer since 2018
                            </span>
                            {/* Decorative Underline */}
                            <div className="w-32 h-0.5 bg-gray-400 mt-2 transform rotate-1 rounded-full"></div>
                        </cite>
                    </div>
                </blockquote>
            </div>
        </section>
    );
};

export default TestimonialSection;