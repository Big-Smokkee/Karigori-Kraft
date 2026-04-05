import { ChevronRight } from 'lucide-react';
import React from 'react';

const Category = ({ category }) => {
    console.log(category);
    return (
        // <div
        //     className={`${category.bg} rounded-3xl p-6 flex items-center gap-5 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:shadow-stone-200 hover:-translate-y-1 border border-transparent hover:border-white/50`}
        // >
        <div className={`${category.id % 2 === 0 ? 'bg-[#ff7d3831]' : 'bg-[#54ffff31]'} rounded-3xl p-6 flex items-center gap-5 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:shadow-stone-200 hover:-translate-y-1 border border-transparent hover:border-white/50`}>
            {/* Emoji Icon Container */}
            <div className="w-16 h-16  rounded-2xl flex items-center justify-center text-3xl  group-hover:scale-110 transition-transform duration-500">
                <img src={category.emoji} alt="abcd" />
            </div>

            {/* Text Content */}
            <div className="flex-1">
                <h3 className="font-bold text-[#1C1410] text-lg">{category.name}</h3>
                <p className={`${category.accent} font-bold text-sm tracking-tight`}>
                    {category.count} items
                </p>
            </div>

            {/* Arrow Icon */}
            <div className={`${category.accent} opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0`}>
                <ChevronRight size={20}></ChevronRight>
            </div>
        </div>
    );
};

export default Category;