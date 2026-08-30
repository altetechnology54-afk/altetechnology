'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronRight, ChevronDown, Menu, X, ShoppingCart } from 'lucide-react';
import CatalogTabs from './CatalogTabs';
import { useCart } from '@/lib/CartContext';

export default function CatalogLayout({ children, params }) {
    const pathname = usePathname();
    const [dict, setDict] = useState(null);
    const [lang, setLang] = useState('de');
    const [expandedGroups, setExpandedGroups] = useState({ 0: true, 1: true });
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const { cartCount, cart } = useCart();

    const total = cart.reduce((sum, item) => {
        if (item.price) return sum + item.price * item.quantity;
        return sum;
    }, 0);

    useEffect(() => {
        const pathParts = pathname.split('/');
        const currentLang = pathParts[1] || 'de';
        setLang(currentLang);

        // Dynamic import based on language
        import(`../../../dictionaries/${currentLang}.json`).then(m => setDict(m.default));
    }, [pathname]);

    // Close mobile drawer on route change
    useEffect(() => {
        setIsMobileSidebarOpen(false);
    }, [pathname]);

    // Update expansion states based on current pathname
    useEffect(() => {
        if (!dict) return;
        const subPath = pathname.split('/catalog/')[1] || '';

        navGroups.forEach((group, gIdx) => {
            if (group.items && group.items.some(item => item.id === subPath)) {
                setExpandedGroups(prev => ({ ...prev, [gIdx]: true }));
            }
        });
    }, [pathname, dict]);

    if (!dict) return <div className="flex h-screen items-center justify-center bg-slate-900 text-white font-bold tracking-widest uppercase animate-pulse">Loading Catalog...</div>;

    const navGroups = [
        {
            title: dict.catalogPage.parentTitle,
            id: '',
            items: [
                { id: 'special-system', name: "Das spezielle Implantatsystem" }
            ]
        },
        {
            title: "Implantate",
            items: [
                { id: 'shark', name: "Shark Implantate" },
                { id: 'cylinder', name: "Cylinder Implantate" },
                { id: 'safe', name: "Safe Implantate" },
                { id: 'smart', name: "Smart Implantate" },
            ]
        },
        {
            title: "Anweisung",
            id: 'anweisung',
            items: []
        },
        {
            title: "Farbleitsystem",
            id: 'farbleitsystem',
            items: []
        },
        {
            title: "Bohrsystem",
            id: 'bohrsystem',
            items: []
        },
        {
            title: "Chirurgie - OP-Tray",
            id: 'chirurgie-op-tray',
            items: []
        },
        {
            title: "Prothetik",
            id: 'prothetik',
            items: []
        },
        {
            title: "Garantie + Reparatur",
            id: 'garantie-reparatur',
            items: []
        },
        {
            title: "Versand",
            id: 'versand',
            items: []
        },
        {
            title: "Bezahlung",
            id: 'bezahlung',
            items: []
        },
        {
            title: "Widerrufsrecht",
            id: 'widerrufsrecht',
            items: []
        },
        {
            title: "AGB",
            id: 'agb',
            items: []
        }
    ];

    const toggleGroup = (idx) => {
        setExpandedGroups(prev => ({
            ...prev,
            [idx]: !prev[idx]
        }));
    };

    const isActive = (id) => {
        const targetPath = `/${lang}/catalog${id ? `/${id}` : ''}`;
        return pathname === targetPath;
    };

    // Find current active page title for mobile top bar
    const currentSlug = pathname.split('/catalog/')[1] || '';
    let activePageTitle = dict.catalogPage.parentTitle;
    for (const g of navGroups) {
        if (g.id === currentSlug && currentSlug !== '') activePageTitle = g.title;
        if (g.items) {
            const found = g.items.find(i => i.id === currentSlug);
            if (found) activePageTitle = found.name;
        }
    }

    // Sidebar navigation items renderer
    const renderNavItems = () => (
        <nav className="flex-1 overflow-y-auto custom-scrollbar">
            {navGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="border-b border-white/5">
                    {/* Plain Link without sub-items */}
                    {group.items.length === 0 && (
                        <Link
                            href={`/${lang}/catalog/${group.id}`}
                            className={`block relative group transition-all hover:bg-white/5 ${isActive(group.id) ? 'bg-primary/30 border-r-4 border-primary text-white' : 'text-slate-200'}`}
                        >
                            <div className="relative p-3.5 md:p-4 lg:p-5 flex justify-between items-center">
                                <span className={`font-bold text-xs md:text-sm tracking-tight uppercase italic ${isActive(group.id) ? 'text-white font-black' : 'text-slate-200'}`}>
                                    {group.title}
                                </span>
                                <ChevronRight className={`w-3.5 h-3.5 ${isActive(group.id) ? 'text-white' : 'text-slate-400'}`} strokeWidth={2.5} />
                            </div>
                        </Link>
                    )}

                    {/* Group with sub-items AND its own link */}
                    {group.items.length > 0 && group.id !== undefined && (
                        <>
                            <Link
                                href={`/${lang}/catalog${group.id ? `/${group.id}` : ''}`}
                                className={`block relative group transition-all hover:bg-white/5 ${isActive(group.id) ? 'bg-primary/30 border-r-4 border-primary' : ''}`}
                            >
                                <div className="relative p-3.5 md:p-4 lg:p-5 flex justify-between items-center">
                                    <span className="font-bold text-xs md:text-sm text-slate-100 tracking-tight uppercase italic">{group.title}</span>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" strokeWidth={2.5} />
                                </div>
                            </Link>
                            <div className="bg-black/30">
                                {group.items.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/${lang}/catalog${item.id ? `/${item.id}` : ''}`}
                                        className={`block px-5 md:px-6 lg:px-8 py-2.5 md:py-3 text-[11px] md:text-xs font-bold border-b border-white/5 transition-all duration-200 uppercase italic ${isActive(item.id)
                                            ? 'text-white bg-primary/50'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Collapsible toggle group */}
                    {group.items.length > 0 && group.id === undefined && (
                        <>
                            <button
                                onClick={() => toggleGroup(groupIdx)}
                                className="w-full relative group transition-all text-left"
                            >
                                <div className={`relative p-3.5 md:p-4 lg:p-5 flex justify-between items-center ${group.items.some(item => isActive(item.id)) ? 'bg-gradient-to-r from-[#2b7cb7] to-[#1e5a87] text-white' : 'hover:bg-white/5 text-slate-100'}`}>
                                    <span className="font-black text-xs md:text-sm tracking-tight uppercase italic">{group.title}</span>
                                    <ChevronDown
                                        className={`w-3.5 h-3.5 text-slate-200 transition-transform duration-300 ${expandedGroups[groupIdx] ? 'rotate-0' : '-rotate-90'}`}
                                        strokeWidth={2.5}
                                    />
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedGroups[groupIdx] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="bg-black/30">
                                    {group.items.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={`/${lang}/catalog${item.id ? `/${item.id}` : ''}`}
                                            className={`block px-5 md:px-6 lg:px-8 py-2.5 md:py-3 text-[11px] md:text-xs font-bold border-b border-white/5 transition-all duration-200 uppercase italic ${isActive(item.id)
                                                ? 'text-white bg-[#1e70e8] font-black'
                                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}

            {/* Warenkorb / Cart Status */}
            <div className="mx-3 my-4 p-4 bg-blue-900/40 rounded-2xl border border-white/10 backdrop-blur-md">
                <h4 className="text-slate-400 font-black text-xs uppercase italic tracking-tighter mb-2">Warenkorb</h4>
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                        <span>{cartCount} {cartCount === 1 ? 'Produkt' : 'Produkte'}</span>
                        {total > 0 && <span className="text-white font-black">{total.toFixed(2)} EUR</span>}
                    </div>
                    <Link href={`/${lang}/cart`} className="flex items-center gap-1 text-[11px] font-black uppercase text-primary hover:text-white transition-colors justify-end mt-2">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Zum Warenkorb »
                    </Link>
                </div>
            </div>

            {/* Certifications footer */}
            <div className="px-4 py-4 space-y-3 mt-auto">
                <div className="flex justify-between items-center opacity-40">
                    {['ISO\n9001', 'ISO\n13485', 'CE\n0473'].map((label) => (
                        <div key={label} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[7px] font-black text-center leading-none whitespace-pre-line text-white">
                            {label}
                        </div>
                    ))}
                </div>
                <div className="opacity-40 text-center">
                    <Link href={`/${lang}/contact`} className="block text-[9px] uppercase tracking-widest font-black hover:text-white transition-colors text-slate-300">
                        {dict.navigation.contact}
                    </Link>
                </div>
            </div>
        </nav>
    );

    return (
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] bg-white relative">
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
            `}</style>

            {/* 📱 Mobile & Tablet Sticky Navigation Bar (< 1024px) */}
            <div className="lg:hidden sticky top-0 z-40 bg-[#0f2744] text-white px-3 py-2.5 flex items-center justify-between border-b border-slate-800 shadow-md">
                <button
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="flex items-center gap-2 bg-[#1b4e78] hover:bg-[#256ca6] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
                >
                    <Menu className="w-4 h-4" />
                    <span>Katalog Menü</span>
                </button>
                <div className="text-[11px] font-bold text-slate-300 truncate max-w-[190px] uppercase italic text-right">
                    {activePageTitle}
                </div>
            </div>

            {/* 📱 Mobile Slide-over Drawer (< 1024px) */}
            {isMobileSidebarOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
                        onClick={() => setIsMobileSidebarOpen(false)}
                    />

                    {/* Drawer Content */}
                    <div className="relative w-72 max-w-[85vw] bg-[#0f2744] text-white h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-left duration-300">
                        {/* Drawer Header */}
                        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0a1c32]">
                            <span className="font-black text-sm uppercase tracking-wider text-slate-100">Katalog Navigation</span>
                            <button
                                onClick={() => setIsMobileSidebarOpen(false)}
                                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Navigation Items */}
                        {renderNavItems()}
                    </div>
                </div>
            )}

            {/* 💻 Desktop Sidebar (>= 1024px) */}
            <aside className="hidden lg:flex w-72 xl:w-80 bg-[#0f2744] text-white flex-col sticky top-0 lg:top-[80px] h-screen lg:h-[calc(100vh-80px)] border-r border-slate-800 shadow-2xl z-30 flex-shrink-0">
                {renderNavItems()}
            </aside>

            {/* 📄 Main Content Area (Gets 100% width on mobile) */}
            <div className="flex-1 w-full min-w-0 flex flex-col min-h-screen relative">
                <div className="flex-1 w-full min-w-0">
                    <CatalogTabs lang={lang} dict={dict}>
                        {children}
                    </CatalogTabs>
                </div>
            </div>
        </div>
    );
}
