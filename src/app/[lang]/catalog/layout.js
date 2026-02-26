'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import CatalogTabs from './CatalogTabs';

export default function CatalogLayout({ children, params }) {
    const pathname = usePathname();
    const [dict, setDict] = useState(null);
    const [lang, setLang] = useState('de');
    const [expandedGroups, setExpandedGroups] = useState({ 0: true });

    useEffect(() => {
        const pathParts = pathname.split('/');
        const currentLang = pathParts[1] || 'de';
        setLang(currentLang);

        // Dynamic import based on language
        import(`../../../dictionaries/${currentLang}.json`).then(m => setDict(m.default));
    }, [pathname]);

    // Update expansion states based on current pathname
    useEffect(() => {
        if (!dict) return;
        const subPath = pathname.split('/catalog/')[1] || '';

        // Find which group contains the active path
        navGroups.forEach((group, gIdx) => {
            if (group.items.some(item => item.id === subPath)) {
                setExpandedGroups(prev => ({ ...prev, [gIdx]: true }));
            }
        });
    }, [pathname, dict]);

    if (!dict) return <div className="flex h-screen items-center justify-center bg-slate-900 text-white font-bold tracking-widest uppercase animate-pulse">Loading Catalog...</div>;

    const navGroups = [
        {
            title: dict.catalogPage.parentTitle,
            items: [
                { id: '', name: dict.catalogPage.subTitle }
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
            items: [] // No children
        },
        {
            title: "Farbleitsystem",
            id: 'farbleitsystem',
            items: [] // No children
        },
        {
            title: "Bohrsystem",
            id: 'bohrsystem',
            items: [] // No children
        },
        {
            title: "Chirurgie - OP-Tray",
            id: 'chirurgie-op-tray',
            items: [] // No children
        },
        {
            title: "Garantie + Reparatur",
            id: 'garantie-reparatur',
            items: [] // No children
        },
        {
            title: "Versand",
            id: 'versand',
            items: [] // No children
        },
        {
            title: "Bezahlung",
            id: 'bezahlung',
            items: [] // No children
        },
        {
            title: "Widerrufsrecht",
            id: 'widerrufsrecht',
            items: [] // No children
        },
        {
            title: "AGB",
            id: 'agb',
            items: [] // No children
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

    return (
        <div className="flex min-h-[calc(100vh-80px)] bg-white relative">
            <style jsx global>{`
                .sidebar-header-pattern {
                    background-image: linear-gradient(
                        45deg,
                        rgba(255, 255, 255, 0.1) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, 0.1) 50%,
                        rgba(255, 255, 255, 0.1) 75%,
                        transparent 75%,
                        transparent
                    );
                    background-size: 8px 8px;
                }
                .text-shadow-premium {
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
            `}</style>

            {/* Catalog Sidebar - Always visible, narrower on mobile */}
            <aside className="w-40 md:w-56 lg:w-80 bg-slate-900 text-white flex flex-col sticky top-0 lg:top-[80px] h-screen lg:h-[calc(100vh-80px)] border-r border-slate-800 shadow-2xl z-30 flex-shrink-0">
                <nav className="flex-1 overflow-y-auto custom-scrollbar">
                    {navGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="border-b border-white/5">
                            {group.items.length > 0 ? (
                                <button
                                    onClick={() => toggleGroup(groupIdx)}
                                    className="w-full relative group transition-all"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${isActive(group.id) || group.items.some(item => isActive(item.id)) ? 'from-primary/20 to-transparent' : 'from-transparent to-transparent'}`}></div>
                                    <div className="relative p-3 md:p-4 lg:p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors">
                                        <span className="font-bold text-[10px] md:text-xs lg:text-lg text-slate-100 tracking-tight uppercase italic">{group.title}</span>
                                        <ChevronDown
                                            className={`w-3 h-3 md:w-4 md:h-4 text-slate-400 transition-transform duration-300 ${expandedGroups[groupIdx] ? 'rotate-0' : '-rotate-90'}`}
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                </button>
                            ) : (
                                <Link
                                    href={`/${lang}/catalog/${group.id}`}
                                    className={`block relative group transition-all hover:bg-white/5 ${isActive(group.id) ? 'bg-primary/20 border-r-4 border-primary' : ''}`}
                                >
                                    <div className="relative p-3 md:p-4 lg:p-6 flex justify-between items-center">
                                        <span className={`font-bold text-[10px] md:text-xs lg:text-lg tracking-tight uppercase italic ${isActive(group.id) ? 'text-white' : 'text-slate-100'}`}>{group.title}</span>
                                        <ChevronRight className={`w-3 h-3 md:w-4 md:h-4 ${isActive(group.id) ? 'text-white' : 'text-slate-400'}`} strokeWidth={2.5} />
                                    </div>
                                </Link>
                            )}

                            {group.items.length > 0 && (
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedGroups[groupIdx] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-black/20">
                                        {group.items.map((item, itemIdx) => (
                                            <Link
                                                key={item.id}
                                                href={`/${lang}/catalog${item.id ? `/${item.id}` : ''}`}
                                                className={`block px-4 md:px-6 lg:px-10 py-2 md:py-3 lg:py-4 text-[9px] md:text-xs lg:text-sm font-bold border-b border-white/5 transition-all duration-200 uppercase italic ${isActive(item.id)
                                                    ? 'text-white bg-primary/40'
                                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Warenkorb / Cart Status - Matching old site */}
                    <div className="mx-2 md:mx-4 lg:mx-6 my-4 md:my-6 lg:my-8 p-3 md:p-4 lg:p-6 bg-blue-900/40 rounded-xl lg:rounded-3xl border border-white/10 backdrop-blur-md">
                        <h4 className="text-slate-400 font-black text-[10px] md:text-sm lg:text-xl uppercase italic tracking-tighter mb-2 md:mb-4">Warenkorb</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-[8px] md:text-[10px] lg:text-xs font-bold text-slate-300">0 Produkte</span>
                                <span className="text-[8px] md:text-[10px] lg:text-xs font-black text-white">- 0.00 EUR</span>
                            </div>
                            <Link href={`/${lang}/cart`} className="block text-[8px] lg:text-[10px] font-black uppercase text-primary hover:text-white transition-colors text-right mt-2">
                                Zum Warenkorb &raquo;
                            </Link>
                        </div>
                    </div>

                    <div className="px-3 md:px-6 lg:px-10 py-4 md:py-6 lg:py-8 space-y-4 md:space-y-6 mt-auto hidden md:block">
                        {/* ISO/CE Logos - Matching old site */}
                        <div className="flex justify-between items-center opacity-40 grayscale group-hover:grayscale-0 transition-all">
                            <div className="flex flex-col items-center">
                                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 rounded-full border-2 border-white flex items-center justify-center text-[6px] md:text-[7px] lg:text-[8px] font-black text-center leading-none">
                                    ISO<br />9001
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 rounded-full border-2 border-white flex items-center justify-center text-[6px] md:text-[7px] lg:text-[8px] font-black text-center leading-none">
                                    ISO<br />13485
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 rounded-full border-2 border-white flex items-center justify-center text-[7px] md:text-[8px] lg:text-[10px] font-black text-center leading-none">
                                    CE<br />0473
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 opacity-30 hidden lg:block">
                            <Link href={`/${lang}/contact`} className="block text-[10px] uppercase tracking-widest font-black hover:text-white transition-colors">
                                {dict.navigation.contact}
                            </Link>
                            <Link href={`/${lang}/legal`} className="block text-[10px] uppercase tracking-widest font-black hover:text-white transition-colors">
                                {dict.navigation.legal}
                            </Link>
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen relative">
                <div className="flex-1">
                    <CatalogTabs lang={lang} dict={dict}>
                        {children}
                    </CatalogTabs>
                </div>
            </div>
        </div>
    );
}
