import { HeartHandshake, Menu, Scissors, Search, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext'; // Add this line
import CartDrawer from '../CartDrawer/CartDrawer';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");
    const { searchProducts } = useCart();
    const [searchResults, setSearchResults] = useState([]);


    const navLinks = ["Shop", "Categories", "New Arrivals", "About Us", "Blog"];

    // Design Tokens (Matching the KarigoriKraft palette)
    const colors = {
        terra: "text-[#C4612A]",
        terraBg: "bg-[#C4612A]",
        dark: "text-[#1C1410]",
        cream: "bg-[#FAF6F1]",
        border: "border-[#EDE0D0]"
    };


    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setSearchResults(searchProducts(query));
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
                        {
                            isSearchOpen ? <X></X> : <Search size={20}></Search>

                        }
                    </button>

                    <button className={`${colors.dark} hover:text-[#C4612A] transition-colors relative`} onClick={() => setIsCartOpen(true)}>
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
            {/* Expandable Search Bar with Live Results */}
            {isSearchOpen && (
                <div className="absolute top-20 left-0 w-full bg-white text-black border-b shadow-xl z-50 animate-in slide-in-from-top duration-300">
                    <div className="max-w-3xl mx-auto p-6">
                        <div className="relative">
                            <input
                                type="text"
                                autoFocus
                                placeholder="Search handmade crafts..."
                                className="w-full bg-[#FAF6F1] border-2 border-[#EDE0D0] px-6 py-4 rounded-2xl focus:border-[#C4612A] outline-none text-lg"
                                value={searchQuery}
                                onChange={handleSearch}
                            />

                            {/* Live Results Dropdown */}
                            {searchQuery && (
                                <div className="mt-4 bg-white rounded-2xl border border-gray-100 max-h-100 overflow-y-auto shadow-2xl">
                                    {searchResults.length > 0 ? (
                                        searchResults.map(product => (
                                            <div key={product.id} className="flex items-center gap-4 p-4 hover:bg-[#FAF6F1] cursor-pointer transition-colors border-b last:border-0">
                                                <img src={product.image} className="w-12 h-12 rounded-lg object-cover bg-gray-100" alt="" />
                                                <div>
                                                    <h4 className="font-bold text-[#1C1410]">{product.name}</h4>
                                                    <p className="text-sm text-[#C4612A]">৳{product.price}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-10 text-center text-gray-400 italic">
                                            No products found for "{searchQuery}"
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
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

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}></CartDrawer>
        </nav>
    );
};

export default Navbar;