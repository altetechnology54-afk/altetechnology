'use client';

import React from 'react';
import { useCart } from '../../lib/CartContext';
import Link from 'next/link';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';

export default function CartPage({ params }) {
    const { lang } = React.use(params);
    const { cart, removeFromCart, updateQuantity, cartCount, cartTotal, clearCart } = useCart();

    const isDe = lang === 'de';

    if (cart.length === 0) {
        return (
            <main className="min-h-screen bg-white py-32 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="w-32 h-32 bg-slate-50 rounded-[40px] flex items-center justify-center mx-auto border border-slate-100 shadow-inner">
                        <ShoppingBag className="w-12 h-12 text-slate-300" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
                            {isDe ? 'Ihr Warenkorb ist leer' : 'Your cart is empty'}
                        </h1>
                        <p className="text-slate-500 font-medium">
                            {isDe ? 'Entdecken Sie unsere hochpräzisen Implantatsysteme.' : 'Explore our high-precision implant systems.'}
                        </p>
                    </div>
                    <Link href={`/${lang}/catalog`} className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20 italic">
                        <ArrowLeft className="w-4 h-4" />
                        {isDe ? 'Zum Katalog' : 'Back to Catalog'}
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-600/20">
                            Secure Checkout Interface
                        </div>
                        <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic">
                            {isDe ? 'Warenkorb' : 'Shopping Cart'}
                            <span className="text-primary ml-4">.</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Items</p>
                            <p className="text-2xl font-black text-slate-900">{cartCount}</p>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total</p>
                            <p className="text-2xl font-black text-primary italic">€{cartTotal.toFixed(2)}</p>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Items List */}
                    <div className="lg:col-span-8 space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white rounded-[40px] p-8 border border-white shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-10 group relative transition-all hover:bg-slate-50">
                                <div className="w-40 h-40 bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center p-4 relative overflow-hidden flex-shrink-0">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                    ) : (
                                        <ShoppingBag className="w-12 h-12 text-slate-300" />
                                    )}
                                </div>

                                <div className="flex-1 space-y-4 w-full">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-1">{item.name}</h3>
                                            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                {item.diameter && <span>Ø {item.diameter}</span>}
                                                {item.length && <span>L {item.length}</span>}
                                                <span>Art.{item.id.split('-')[0]}</span>
                                            </div>
                                        </div>
                                        <p className="text-xl font-black text-primary italic">€{item.price.toFixed(2)}</p>
                                    </div>

                                    <div className="flex items-center justify-between pt-4">
                                        <div className="flex items-center gap-4 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-600 hover:text-primary transition-all shadow-sm active:scale-90"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center font-black text-slate-900">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-600 hover:text-primary transition-all shadow-sm active:scale-90"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="flex items-center gap-2 text-[10px] font-bold text-red-400 hover:text-red-600 uppercase tracking-widest transition-colors group/del"
                                        >
                                            <Trash2 className="w-4 h-4 group-hover/del:scale-110 transition-transform" />
                                            {isDe ? 'Entfernen' : 'Remove'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-4 sticky top-32">
                        <div className="bg-[#1B3A5A] rounded-[50px] p-10 text-white shadow-2xl shadow-blue-900/20 space-y-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-3xl font-black uppercase tracking-tighter italic">Summary</h2>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-white/60 font-medium">
                                    <span>Subtotal</span>
                                    <span>€{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-white/60 font-medium">
                                    <span>VAT (19%)</span>
                                    <span>Included</span>
                                </div>
                                <div className="flex justify-between items-center text-white/60 font-medium">
                                    <span>Shipping</span>
                                    <span className="text-green-400">FREE</span>
                                </div>
                                <div className="h-px bg-white/10 my-8"></div>
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Grand Total</p>
                                        <p className="text-4xl font-black italic">€{cartTotal.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-white text-[#1B3A5A] py-6 rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4 italic shadow-2xl shadow-black/20 group">
                                {isDe ? 'Zur Kasse' : 'Checkout Now'}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>

                            <p className="text-[10px] text-white/30 text-center font-bold uppercase tracking-widest leading-relaxed">
                                Prices inclusive of 19% VAT. <br />
                                Fast worldwide shipping within 2-5 days.
                            </p>
                        </div>

                        <Link href={`/${lang}/catalog`} className="flex items-center justify-center gap-3 mt-10 text-slate-400 hover:text-primary transition-all font-black uppercase tracking-widest text-[10px]">
                            <ArrowLeft className="w-4 h-4" />
                            {isDe ? 'Weiter einkaufen' : 'Continue Shopping'}
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
