import { HeartHandshake, Menu, Scissors, Search, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext'; // Add this line

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { cartCount } = useCart();

    const navLinks = ["Shop", "Categories", "New Arrivals", "About Us", "Blog"];

    // Design Tokens (Matching the KarigoriKraft palette)
    const colors = {
        terra: "text-[#C4612A]",
        terraBg: "bg-[#C4612A]",
        dark: "text-[#1C1410]",
        cream: "bg-[#FAF6F1]",
        border: "border-[#EDE0D0]"
    };

    return (
        <nav className={`sticky top-0 z-50 bg-white border-b ${colors.border}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className={`${colors.terraBg} w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform`}>
                        <Scissors></Scissors>
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-bold text-xl leading-tight ${colors.dark} tracking-tight`}>
                            KarigoriKraft
                        </span>
                        <div className='flex flex-row'>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                                Handmade with <span className='text-[#C4612A]'><HeartHandshake></HeartHandshake></span>
                            </span>

                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={`text-sm font-semibold ${colors.dark} hover:text-[#C4612A] transition-colors relative group`}
                        >
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4612A] transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Utility Icons */}
                <div className="flex items-center gap-5">
                    <button
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className={`${colors.dark} hover:text-[#C4612A] transition-colors`}
                    >
                        <Search size={20}></Search>
                    </button>

                    <button className={`${colors.dark} hover:text-[#C4612A] transition-colors relative`}>
                        <ShoppingCart size={20}></ShoppingCart>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#C4612A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20}></X> : <Menu size={20}></Menu>}
                    </button>
                </div>
            </div>

            {/* Expandable Search Bar */}
            {isSearchOpen && (
                <div className="bg-white border-b px-6 py-4 animate-in slide-in-from-top duration-200">
                    <div className="max-w-2xl mx-auto flex gap-3">
                        <input
                            type="text"
                            placeholder="Search silk thread, batik fabric, beads..."
                            className="w-full bg-[#FAF6F1] border border-[#EDE0D0] px-4 py-2 rounded-lg focus:outline-none focus:border-[#C4612A] text-sm"
                        />
                        <button className={`${colors.terraBg} text-white px-6 py-2 rounded-lg text-sm font-bold`}>
                            Search
                        </button>
                    </div>
                </div>
            )}

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="block px-8 py-3 text-base font-semibold border-b border-gray-50 last:border-none"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;