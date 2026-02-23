'use client';

import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function Navigation({ lang, dict }) {
    const { cartCount } = useCart();

    return (
        <nav className="glass sticky top-0 z-50 w-full py-4 px-6 md:px-12 border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href={`/${lang}`} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                        AL
                    </div>
                    <div className="hidden sm:block text-primary font-bold text-xl tracking-tight uppercase">
                        Technology
                    </div>
                </Link>

                <div className="flex items-center gap-6 lg:gap-12">
                    <ul className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
                        <li><Link href={`/${lang}`} className="hover:text-primary transition-colors">{dict.navigation.home}</Link></li>
                        <li><Link href={`/${lang}/catalog`} className="hover:text-primary transition-colors">{dict.navigation.catalog}</Link></li>
                        <li><Link href={`/${lang}/contact`} className="hover:text-primary transition-colors">{dict.navigation.contact}</Link></li>
                    </ul>

                    <div className="flex items-center gap-4 bg-slate-100/80 p-1 rounded-full border border-slate-200">
                        <Link href="/de" className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'de' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-primary'}`}>DE</Link>
                        <Link href="/en" className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-primary'}`}>EN</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href={`/${lang}/cart`} className="relative group p-2 rounded-xl hover:bg-slate-100 transition-all">
                            <ShoppingCart className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <Link href="/login" className="hidden sm:inline-flex bg-primary text-white thick-border px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
