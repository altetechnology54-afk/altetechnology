'use client';

import React, { useState } from 'react';
import { useCart } from '../lib/CartContext';
import { ShoppingCart, Check } from 'lucide-react';

export default function AddToCartButton({ product, variant, length, article, className = "" }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        let item = {};

        if (article) {
            item = {
                id: article.artNr || `${product.id}-${article.name || 'item'}`,
                productId: product.id,
                name: article.description?.de || article.artNr,
                image: article.image || product.images?.hero,
                price: 149.00, // Placeholder
                quantity: 1
            };
        } else {
            item = {
                id: `${product.id}-${variant.diameter}-${length}`,
                productId: product.id,
                name: product.name?.de || product.id,
                diameter: variant.diameter,
                length: length,
                image: variant.implantImage || variant.boxImage || product.images?.hero,
                price: 149.00, // Placeholder
                quantity: 1
            };
        }

        addToCart(item);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <button
            onClick={handleAdd}
            className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg transition-all active:scale-95 ${added
                ? 'bg-green-500 text-white'
                : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                } ${className}`}
        >
            {added ? (
                <>
                    <Check className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase">Added</span>
                </>
            ) : (
                <>
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase">Add</span>
                </>
            )}
        </button>
    );
}
