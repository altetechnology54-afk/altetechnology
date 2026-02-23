'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
        <div className="flex min-h-[calc(100vh-80px)] bg-white">
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

            {/* Catalog Sidebar */}
            <aside className="w-80 bg-slate-900 text-white hidden lg:flex flex-col sticky top-[80px] h-[calc(100vh-80px)] border-r border-slate-800 shadow-2xl z-30">
                <nav className="flex-1 overflow-y-auto custom-scrollbar">
                    {navGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="border-b border-slate-800/30">
                            {group.items.length > 0 ? (
                                <button
                                    onClick={() => toggleGroup(groupIdx)}
                                    className="w-full relative group transition-all"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#2B87B1] to-[#60ADC9]"></div>
                                    <div className="absolute inset-0 sidebar-header-pattern opacity-40"></div>
                                    <div className="relative p-7 flex justify-between items-center shadow-lg">
                                        <span className="font-bold text-xl text-white text-shadow-premium tracking-tight">{group.title}</span>
                                        <svg
                                            className={`w-5 h-5 text-white transition-transform duration-300 ${expandedGroups[groupIdx] ? 'rotate-0' : '-rotate-90'}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                            ) : (
                                <Link
                                    href={`/${lang}/catalog/${group.id}`}
                                    className={`block relative group transition-all ${isActive(group.id) ? 'ring-2 ring-primary ring-inset' : ''}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#2B87B1] to-[#60ADC9]"></div>
                                    <div className="absolute inset-0 sidebar-header-pattern opacity-40"></div>
                                    <div className="relative p-7 flex justify-between items-center shadow-lg">
                                        <span className="font-bold text-xl text-white text-shadow-premium tracking-tight">{group.title}</span>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            )}

                            {group.items.length > 0 && (
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedGroups[groupIdx] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-[#0D2A43]">
                                        {group.items.map((item, itemIdx) => (
                                            <Link
                                                key={item.id}
                                                href={`/${lang}/catalog${item.id ? `/${item.id}` : ''}`}
                                                className={`block px-10 py-5 text-sm font-medium border-b border-white/5 transition-all duration-200 ${isActive(item.id)
                                                    ? 'text-white bg-[#153a5c] shadow-inner'
                                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
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

                    <div className="px-10 py-16 space-y-4 opacity-20 mt-auto">
                        <Link href={`/${lang}/contact`} className="block text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">
                            {dict.navigation.contact}
                        </Link>
                        <Link href={`/${lang}/legal`} className="block text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">
                            {dict.navigation.legal}
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen relative">
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}
