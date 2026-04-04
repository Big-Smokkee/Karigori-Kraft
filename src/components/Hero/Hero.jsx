import React from 'react';
import { ArrowRight, ShoppingCart, Sparkles } from 'lucide-react';
import partyPopperImage from '../../assets/1f389.png';
const Hero = () => {
    return (
        <section className="relative bg-[#FAF6F1] overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#C4612A] opacity-5 pointer-events-none" />
            <div className="absolute -bottom-25 -left-15 w-100 h-100 rounded-full bg-[#D4A853] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF0E6] text-[#C4612A] text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={14} /> Authentic Bangladeshi Crafts
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-[#1C1410] leading-[1.1]">
                        Craft Your <span className="text-[#C4612A]">Story</span><br />
                        With <span className="text-[#1D5C5C]">Premium</span><br />
                        Materials
                    </h1>

                    <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                        From fine silk threads to vibrant batik dyes, discover handpicked materials sourced directly from the finest artisans across the country.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#C4612A] hover:bg-[#9B4A1E] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all hover:-translate-y-1 shadow-lg shadow-orange-900/10">
                            Shop Now <ArrowRight size={20} />
                        </button>
                        <button className="border-2 border-[#C4612A] text-[#C4612A] hover:bg-[#C4612A] hover:text-white px-8 py-4 rounded-xl font-bold transition-all">
                            Browse Categories
                        </button>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex gap-10 pt-4 border-t border-[#EDE0D0]">
                        <div>
                            <p className="text-3xl font-bold text-[#C4612A]">500+</p>
                            <p className="text-sm text-gray-500 font-medium">Products</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[#C4612A]">10k+</p>
                            <p className="text-sm text-gray-500 font-medium">Crafters</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[#C4612A]">৳99</p>
                            <p className="text-sm text-gray-500 font-medium">Min. Order</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - Visual Showcase */}
                <div className="relative flex justify-center items-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-200">
                    {/* Main Card */}
                    <div className="relative z-20 bg-white p-6 rounded-4xl shadow-2xl shadow-stone-900/10 w-full max-w-sm border border-[#EDE0D0]">
                        <div className="aspect-square rounded-2xl bg-[#FEF0E6] mb-6 flex items-center justify-center">
                            <img src="https://i.ibb.co.com/TxHJQ5j9/OIP-20.webp" alt="Yarn Image" className='w-70 rounded-3xl' />
                        </div>
                        <div className="space-y-4">
                            <span className="bg-[#C4612A] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Bestseller</span>
                            <h3 className="text-xl font-bold text-[#1C1410]">Premium Silk Thread Set</h3>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-bold text-[#1D5C5C]">৳450</span>
                                    <span className="text-sm text-gray-400 line-through ml-2">৳600</span>
                                </div>
                                <button className="bg-[#1D5C5C] text-white p-3 rounded-lg hover:bg-[#2D8282] transition-colors">
                                    <ShoppingCart size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-4 -right-4 bg-[#C4612A] text-white px-4 py-2 rounded-xl font-bold shadow-lg animate-bounce flex items-center">
                            <p>25% OFF</p> <img src={partyPopperImage} alt="party popper image" className='w-8' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;