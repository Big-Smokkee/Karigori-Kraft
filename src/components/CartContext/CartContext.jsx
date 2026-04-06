import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // CartContext.jsx er bhitore eita thakbe (assuming products oikhane fetch korsi)
    const [allProducts, setAllProducts] = useState([]); // Database theke asha sob product

    // Ekta search function banai
    const searchProducts = (query) => {
        if (!query) return [];
        return allProducts.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
    };

    const addToCart = (product) => {
        setCartItems((prev) => {
            // Check korbo product ta age theke cart-e ache kina
            const isExist = prev.find(item => item.id === product.id);
            if (isExist) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, amount) => {
        setCartItems((prev) => prev.map(item =>
            item.id === productId
                ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                : item
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartCount, removeFromCart, updateQuantity, allProducts, setAllProducts, searchProducts }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);