import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../CartContext/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    // Total price calculation
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <>
            {/* Overlay: Backdrop shadow */}
            <div
                className={`fixed inset-0 bg-black/40 z-60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Side Panel */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b flex justify-between items-center bg-[#FAF6F1]">
                        <h2 className="text-xl font-bold text-[#1C1410] flex items-center gap-2">
                            <ShoppingBag size={20} className="text-[#C4612A]" /> Your Cart
                        </h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Cart Items List */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-gray-400 italic">Your cart is empty, brother!</p>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                                    <div className="w-20 h-20 bg-[#FEF0E6] rounded-xl flex-shrink-0 flex items-center justify-center text-3xl">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-bold text-[#1C1410] text-sm">{item.name}</h4>
                                        <p className="text-[#C4612A] font-bold text-sm mb-2">৳{item.price}</p>

                                        <div className="flex items-center justify-between text-black">
                                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 px-2 hover:bg-gray-100"><Minus size={14} /></button>
                                                <span className="px-3 text-sm font-bold">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 px-2 hover:bg-gray-100"><Plus size={14} /></button>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer with Subtotal */}
                    {cartItems.length > 0 && (
                        <div className="p-6 border-t bg-[#FAF6F1]">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-500 font-medium">Subtotal</span>
                                <span className="text-2xl font-bold text-[#1D5C5C]">৳{subtotal}</span>
                            </div>
                            <button className="w-full bg-[#C4612A] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#9B4A1E] transition-all shadow-lg active:scale-95">
                                Checkout Now
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer;