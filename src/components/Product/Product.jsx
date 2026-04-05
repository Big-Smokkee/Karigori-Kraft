import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext'; // Import koro
import { Heart, ShoppingCart, Star } from 'lucide-react';

const Product = ({ item }) => {
    const [isWished, setIsWished] = useState(false);
    const { addToCart } = useCart();
    const [selected, setSelected] = useState(false);

    // Function for rating stars
    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-0.5 text-[#D4A853]">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        size={14}
                        fill={index < Math.floor(rating) ? "currentColor" : "none"}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="bg-white rounded-4xl overflow-hidden border border-[#EDE0D0] transition-all duration-300 hover:shadow-2xl hover:shadow-stone-200 hover:-translate-y-2 flex flex-col h-full">

            {/* 1. Image and Top Action Area */}
            <div className="relative aspect-square bg-[#FEF0E6] flex items-center justify-center overflow-hidden" style={{ background: item.bg || '#FEF0E6' }}>
                <div className="flex items-center justify-center transition-transform duration-500 hover:scale-110">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>

                {/* Badge (Bestseller, New, etc.) */}
                {item.badge && (
                    <span
                        className="absolute top-5 left-5 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider"
                        style={{ background: item.bc || '#C4612A' }}
                    >
                        {item.badge}
                    </span>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={() => setIsWished(!isWished)}
                    className="absolute top-5 right-5 p-2.5 bg-white rounded-xl shadow-md text-gray-400 hover:text-red-500 transition-colors"
                >
                    <Heart size={18} fill={isWished ? "#C4612A" : "none"} color={isWished ? "#C4612A" : "currentColor"} />
                </button>
            </div>

            {/* 2. Content Area */}
            <div className="p-6 flex flex-col grow">
                {/* Category Label */}
                <p className="text-[10px] font-black text-[#6B5B4E] uppercase tracking-widest mb-2">
                    {item.category}
                </p>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-[#1C1410] mb-2 hover:text-[#C4612A] transition-colors cursor-pointer">
                    {item.name}
                </h3>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-6">
                    {renderStars(item.rating)}
                    <span className="text-xs text-[#9B8A7E] font-medium">
                        {item.rating} ({item.rev})
                    </span>
                </div>

                {/* 3. Price and Cart Action */}
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-[#C4612A]">৳{item.price}</span>
                        {item.orig && (
                            <span className="text-xs text-[#9B8A7E] line-through">
                                ৳{item.orig}
                            </span>
                        )}
                    </div>

                    <button
                        onClick={() => {
                            setSelected(true)
                            addToCart(item)
                        }} // Click korle add hobe
                        className="bg-[#C4612A] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#9B4A1E]"
                        disabled={selected}
                    >
                        {!selected ? (
                            <span className='flex gap-2'>
                                <ShoppingCart size={16} /> Add
                            </span>
                        ) : (
                            "Selected"
                        )}


                    </button>
                </div>
            </div>
        </div >
    );
};

export default Product;