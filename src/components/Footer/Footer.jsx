import React from 'react';
import {
    Scissors, Mail, Phone, MapPin, ArrowRight, Heart
} from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        "Shop": ["All Products", "Yarn & Thread", "Fabric & Cloth", "Beads & Gems", "Artisan Tools"],
        "Support": ["Order Tracking", "Shipping Policy", "Refund Policy", "FAQs", "Contact Us"],
        "Company": ["Our Story", "Artisan Partners", "Sustainability", "Careers", "Press Kit"]
    };

    // Social icons Lucide theke bad diye amra ekhon simple SVG ba Text icon use korchi jate error na dey
    const socialLinks = [
        { name: "IG", link: "#" },
        { name: "FB", link: "#" },
        { name: "TW", link: "#" }
    ];

    return (
        <footer className="bg-[#1C1410] text-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* 1. Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#C4612A] w-10 h-10 rounded-xl flex items-center justify-center">
                                <Scissors size={20} />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-white">KarigoriKraft</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Empowering local artisans and bringing the finest handmade crafts from the heart of Bangladesh to your doorstep.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a key={i} href={social.link} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C4612A] transition-all border border-white/10 text-[10px] font-bold">
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Links Sections */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-bold text-lg mb-6 text-white">{title}</h4>
                            <ul className="space-y-4">
                                {links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-[#C4612A] transition-all text-sm flex items-center group">
                                            <ArrowRight size={12} className="mr-0 opacity-0 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* 3. Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-[#C4612A] shrink-0" />
                                <span>Cumilla, Chittagong Division,<br />Bangladesh (Near BAIUST)</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={18} className="text-[#C4612A] shrink-0" />
                                <span>+880 1700-000000</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-[#C4612A] shrink-0" />
                                <span>hello@karigorikraft.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium uppercase tracking-widest">
                    <p>© 2026 KarigoriKraft. All Rights Reserved.</p>
                    <div className="flex items-center gap-2">
                        Handmade with <Heart size={14} fill="#C4612A" color="#C4612A" /> in Bangladesh
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;