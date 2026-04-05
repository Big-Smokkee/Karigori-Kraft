import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error("Review load fail:", err));
    }, []);

    const renderStars = (rating) => (
        <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    fill={i < rating ? "#D4A853" : "none"}
                    color={i < rating ? "#D4A853" : "#EDE0D0"}
                />
            ))}
        </div>
    );

    return (
        <section className="bg-[#FAF6F1] py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#E6EEF0] text-[#1D5C5C] text-xs font-bold uppercase tracking-widest mb-4">
                        ✦ Happy Customers
                    </div>
                    <h2 className="text-4xl font-bold text-[#1C1410] font-['Space_Grotesk'] mb-4">What Our Community Says</h2>
                    <p className="text-[#6B5B4E] max-w-xl mx-auto">Join thousands of artisans who trust KarigoriKraft for their creative journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-8 rounded-[2.5rem] border border-[#EDE0D0] relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <Quote className="absolute top-8 right-8 text-[#FAF6F1]" size={48} />

                            <div className="relative z-10">
                                {renderStars(review.rating)}

                                <p className="text-[#1C1410] text-lg font-medium leading-relaxed mb-8 italic">
                                    "{review.comment}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-14 h-14 rounded-2xl object-cover border-2 border-[#FEF0E6]"
                                    />
                                    <div>
                                        <h4 className="font-bold text-[#1C1410]">{review.name}</h4>
                                        <p className="text-[#9B8A7E] text-xs font-semibold uppercase tracking-wider">{review.role}</p>
                                    </div>
                                    <span className="ml-auto text-[10px] font-bold text-gray-300 uppercase">{review.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total Stats summary */}
                <div className="mt-20 flex flex-wrap justify-center gap-12 border-y border-[#EDE0D0] py-12">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[#C4612A]">4.9/5</p>
                        <p className="text-xs font-bold text-[#6B5B4E] uppercase tracking-widest">Average Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[#1D5C5C]">12k+</p>
                        <p className="text-xs font-bold text-[#6B5B4E] uppercase tracking-widest">Global Reviews</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[#D4A853]">99%</p>
                        <p className="text-xs font-bold text-[#6B5B4E] uppercase tracking-widest">Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;