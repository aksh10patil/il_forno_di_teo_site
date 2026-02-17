'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuItemProps {
    title: string;
    price: string;
    description: string;
    image: string;
    tag?: string;
}

const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    }
};

const MenuItem: React.FC<MenuItemProps> = ({ title, price, description, tag, image }) => (
    <motion.div
        variants={itemVariant}
        className="relative p-6 flex flex-col items-center"
    >
        {/* Sticker Image Placeholder */}
        <motion.div
            whileHover={{ y: -10, rotate: 0 }}
            initial={{ rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative mb-6 cursor-pointer w-full max-w-[280px]"
        >
            <div className="aspect-[4/3] bg-[#fdfbf7] rounded-lg overflow-hidden border-4 border-white shadow-xl relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain p-4 hover:scale-110 transition-transform duration-700 ease-out"
                />
            </div>
            {tag && (
                <motion.span
                    initial={{ scale: 0, rotate: 20 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute -top-3 -right-3 bg-[#be8633] text-white font-handwriting text-lg px-3 py-1 rounded-full border-2 border-white shadow-md z-10"
                >
                    {tag}
                </motion.span>
            )}
        </motion.div>

        <div className="text-center mt-2">
            <h3 className="font-serif text-2xl text-gray-800 font-medium mb-1">{title}</h3>
            <div className="font-handwriting text-3xl text-[#be8633] mb-3">{price}</div>
            <p className="font-serif text-sm text-gray-500 italic leading-relaxed max-w-xs mx-auto">
                {description}
            </p>
        </div>
    </motion.div>
);

const MenuSection = () => {
    return (
        <section className="bg-[#f4f1e8] py-24 border-t border-[#be8633]/20 border-dashed relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#be8633]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-5xl text-gray-800 mb-2">
                        Morning <span className="text-[#be8633] italic">Essentials</span>
                    </h2>
                    <p className="font-serif text-gray-500 italic text-lg opacity-80">Baked fresh daily before the sun comes up.</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8"
                >
                    <MenuItem
                        title="Butter Croissant"
                        price="$4.50"
                        description="Twenty-seven layers of laminated butter dough, baked to golden perfection."
                        tag="Fresh!"
                        image="/Crossiant.png"
                    />
                    <MenuItem
                        title="Pain au Chocolat"
                        price="$5.00"
                        description="Dark Belgian chocolate wrapped in our signature flaky pastry."
                        image="/black_bread.png"
                    />
                    <MenuItem
                        title="Sourdough Loaf"
                        price="$8.00"
                        description="Rustic country loaf with a caramelized crust and airy, chewy crumb."
                        tag="Best Seller"
                        image="/bread_green.png"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default MenuSection;