import React from 'react';
import { Clock, Wheat, Heart, LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    text: string;
}

const WavySeparator = () => (
    <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[#be8633]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" className="fill-[#f4f1e8]"></path>
            {/* Note: In a real app, use a repeating wave SVG path here matching the top border */}
            <path d="M0,10 c80,0 120,30 200,30 s120,-30 200,-30 s120,30 200,30 s120,-30 200,-30 s120,30 200,30 s120,-30 200,-30"
                fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
    </div>
);



const FeatureCard = ({ icon: Icon, title, text }: FeatureCardProps) => (
    <div className="flex flex-col items-center text-center p-6 group">
        <div className="bg-white p-4 rounded-full border-2 border-[#be8633] shadow-md mb-4 group-hover:-translate-y-1 transition-transform duration-300">
            <Icon size={32} className="text-[#be8633]" />
        </div>
        <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="font-serif text-gray-600 leading-relaxed italic">{text}</p>
    </div>
);

const FeaturesSection = () => {
    return (
        <section className="bg-[#f4f1e8] py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="font-handwriting text-3xl text-gray-600 relative inline-block">
                        Our Process
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gray-600 transform -rotate-1"></span>
                    </span>
                    <h2 className="font-serif text-4xl text-[#be8633] mt-4">The Art of Slow Baking</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
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
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;