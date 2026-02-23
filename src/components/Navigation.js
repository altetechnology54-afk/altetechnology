'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation({ lang, dict }) {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setIsContactOpen(false);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsContactOpen(false);
    };

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

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 lg:gap-12">
                    <ul className="flex gap-8 text-sm font-semibold text-slate-600">
                        <li><Link href={`/${lang}`} className="hover:text-primary transition-colors">{dict.navigation.home}</Link></li>
                        <li><Link href={`/${lang}/catalog`} className="hover:text-primary transition-colors">{dict.navigation.catalog}</Link></li>
                        <li><Link href={`/${lang}/about`} className="hover:text-primary transition-colors">{dict.navigation.about}</Link></li>
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

                {/* Mobile Icons and Hamburger */}
                <div className="flex md:hidden items-center gap-4">
                    <Link href={`/${lang}/cart`} className="relative group p-2 rounded-xl hover:bg-slate-100 transition-all">
                        <ShoppingCart className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-xl hover:bg-slate-100 transition-all text-slate-600"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 top-[73px] z-[999] bg-white h-screen animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-6 gap-8 overflow-y-auto max-h-[calc(100vh-73px)]">
                        <ul className="flex flex-col gap-6 text-lg font-bold text-slate-700">
                            <li>
                                <Link onClick={closeMenu} href={`/${lang}`} className="block hover:text-primary transition-colors">
                                    {dict.navigation.home}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={closeMenu} href={`/${lang}/catalog`} className="block hover:text-primary transition-colors">
                                    {dict.navigation.catalog}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={closeMenu} href={`/${lang}/about`} className="block hover:text-primary transition-colors">
                                    {dict.navigation.about}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={closeMenu} href={`/${lang}/contact`} className="block hover:text-primary transition-colors">
                                    {dict.navigation.contact}
                                </Link>
                            </li>
                            <li className="flex flex-col gap-4">
                                <button
                                    onClick={() => setIsContactOpen(!isContactOpen)}
                                    className="flex items-center justify-between w-full hover:text-primary transition-colors"
                                >
                                    <span>{dict.navigation.legal}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isContactOpen && (
                                    <ul className="flex flex-col gap-4 pl-4 text-base font-semibold text-slate-500 animate-in slide-in-from-top-2 duration-200">
                                        <li><Link onClick={closeMenu} href={`/${lang}/impressum`}>{dict.navigation.impressum}</Link></li>
                                        <li><Link onClick={closeMenu} href={`/${lang}/datenschutz`}>{dict.navigation.datenschutz}</Link></li>
                                        <li><Link onClick={closeMenu} href={`/${lang}/agb`}>{dict.navigation.agb}</Link></li>
                                    </ul>
                                )}
                            </li>
                        </ul>

                        <div className="h-px bg-slate-100 w-full" />

                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Language</span>
                            <div className="flex items-center gap-4">
                                <Link onClick={closeMenu} href="/de" className={`text-sm font-bold transition-all ${lang === 'de' ? 'text-primary' : 'text-slate-500'}`}>DE</Link>
                                <div className="w-px h-3 bg-slate-200" />
                                <Link onClick={closeMenu} href="/en" className={`text-sm font-bold transition-all ${lang === 'en' ? 'text-primary' : 'text-slate-500'}`}>EN</Link>
                            </div>
                        </div>

                        <Link
                            onClick={closeMenu}
                            href="/login"
                            className="bg-primary text-white thick-border px-6 py-4 rounded-2xl text-center font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
