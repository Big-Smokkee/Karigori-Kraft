import { ChevronDown } from 'lucide-react';
import Product from '../Product/Product';
import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext/CartContext';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState("All");
    const [visibleCount, setVisibleCount] = useState(8);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Fetch error:", err));
    }, []);

    const { setAllProducts } = useCart();

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setAllProducts(data); // Eita context-e pathae dilam search-er jonno
            });
    });

    // Category Filter
    const filteredProducts = activeTab === "All"
        ? products
        : products.filter(p => p.category === activeTab);

    // Pagination Logic: Filtered list theke prothom 'visibleCount' porimant ta nibe
    const displayProducts = filteredProducts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 8); // Protibar 8 ta kore barabe
    };

    // Tab change korle count abr 8 e niye asha uchit
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setVisibleCount(8);
    };

    const tabs = ["All", "Yarn & Thread", "Fabric & Cloth", "Beads & Gems", "Wood & Carving", "Painting Supplies", "Pottery & Clay"];

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#FEF0E6] text-[#C4612A] text-xs font-bold uppercase tracking-wider mb-3">
                        ✦ Artisan Collection
                    </div>
                    <h2 className="text-4xl font-bold text-[#1C1410]">Our Products</h2>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all
                ${activeTab === tab
                                    ? "bg-[#C4612A] text-white shadow-lg"
                                    : "bg-white text-[#6B5B4E] border border-[#EDE0D0] hover:bg-[#FAF6F1]"}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayProducts.map(item => (
                    <Product key={item.id} item={item} />
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-16">
                    <button
                        onClick={handleLoadMore}
                        className="group flex items-center gap-3 bg-[#1D5C5C] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#154545] transition-all shadow-xl shadow-teal-900/10 active:scale-95"
                    >
                        Explore More Products
                        <div className="bg-white/20 p-1 rounded-full group-hover:translate-y-1 transition-transform">

                            <ChevronDown></ChevronDown>
                        </div>
                    </button>
                </div>
            )}

            {/* Product Count Indicator */}
            <p className="text-center text-gray-400 text-xs mt-6 font-medium uppercase tracking-widest">
                Showing {displayProducts.length} of {filteredProducts.length} items
            </p>
        </section>
    );
};

export default Products;