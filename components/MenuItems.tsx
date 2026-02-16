import React from 'react';

interface MenuItemProps {
    title: string;
    price: string;
    description: string;
    image: string;
    tag?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, price, description, tag, image }) => (
    <div className="relative p-6">
        {/* Sticker Image Placeholder */}
        <div className="relative mb-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer">
            <div className="aspect-[4/3] bg-amber-200 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                {/* Replace src with actual bread images */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            {tag && (
                <span className="absolute -top-3 -right-3 bg-[#be8633] text-white font-handwriting text-lg px-3 py-1 rounded-full border-2 border-white shadow-md transform rotate-12">
                    {tag}
                </span>
            )}
        </div>

        <div className="text-center">
            <h3 className="font-serif text-2xl text-gray-800 font-medium mb-1">{title}</h3>
            <div className="font-handwriting text-2xl text-[#be8633] mb-3">{price}</div>
            <p className="font-serif text-sm text-gray-500 italic leading-relaxed max-w-xs mx-auto">
                {description}
            </p>
        </div>
    </div>
);

const MenuSection = () => {
    return (
        <section className="bg-[#f4f1e8] py-24 border-t border-[#be8633] border-dashed">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="font-serif text-4xl text-center text-gray-800 mb-16">
                    Morning <span className="text-[#be8633] italic">Essentials</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
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
                </div>
            </div>
        </section>
    );
};

export default MenuSection;