import { Sparkles } from 'lucide-react';
import React, { use } from 'react';
import Category from '../Category/Category';

const Categories = ({ categoriesPromise }) => {
    const categories = use(categoriesPromise);
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
                <div className="flex items-center justify-center px-3 py-1 rounded-full  text-[#D4A853] text-xs font-bold uppercase tracking-widest">
                    <Sparkles></Sparkles> Browse by Type
                </div>
                <h2 className="text-4xl font-bold text-[#1C1410]">Shop by Category</h2>
                <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
                    Everything you need for your next handmade masterpiece, sourced from local artisans across Bangladesh.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    categories.map(category => <Category category={category} key={category.id}></Category>)
                }
            </div>
        </section>
    );
};

export default Categories;