import React, { useState } from 'react';
import { Send, Sparkles, ShieldCheck } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            console.log("Subscribed email:", email);
            setIsSubscribed(true);
            setEmail("");
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="relative bg-[#1D5C5C] rounded-[3rem] overflow-hidden p-8 md:p-16 text-center shadow-2xl">

                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#C4612A] blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    {/* Top Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mb-8 text-white">
                        <Sparkles size={32} />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-tight">
                        Join the <span className="text-[#F5D68A]">Karigori</span> Community
                    </h2>

                    <p className="text-[#A7C7C7] text-lg mb-10 leading-relaxed">
                        Subscribe to get early access to our exclusive handmade collections, artisan stories, and special ৳৫০০ discount on your first order!
                    </p>

                    {!isSubscribed ? (
                        <form
                            onSubmit={handleSubscribe}
                            className="flex flex-col sm:flex-row gap-3 bg-white/10 p-2 rounded-[2rem] backdrop-blur-sm border border-white/20"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Enter your email address"
                                className="flex-1 bg-transparent px-6 py-4 text-white placeholder:text-white/50 focus:outline-none text-lg"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-[#C4612A] hover:bg-[#9B4A1E] text-white px-10 py-4 rounded-[1.5rem] font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg active:scale-95"
                            >
                                Subscribe Now <Send size={20} />
                            </button>
                        </form>
                    ) : (
                        <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl animate-in fade-in zoom-in duration-500">
                            <h4 className="text-[#F5D68A] text-2xl font-bold mb-2">✦ Welcome to the Family!</h4>
                            <p className="text-white">Check your inbox for a special surprise from our artisans.</p>
                        </div>
                    )}

                    {/* Trust Badges */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-[#A7C7C7] text-sm">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={18} className="text-[#F5D68A]" />
                            No spam, ever.
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles size={18} className="text-[#F5D68A]" />
                            Exclusive content.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;