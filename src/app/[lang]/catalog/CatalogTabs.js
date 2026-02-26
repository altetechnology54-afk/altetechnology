'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Home, ShieldAlert, Phone, Mail } from 'lucide-react';
import { fetchStaticPage } from '../../../lib/api';

export default function CatalogTabs({
    lang,
    dict,
    children
}) {
    const [activeTab, setActiveTab] = useState('home');
    const [impressum, setImpressum] = useState(null);
    const [catalogPdf, setCatalogPdf] = useState(null);

    useEffect(() => {
        // Fetch data if not already present
        async function loadData() {
            try {
                const [imp, pdf] = await Promise.all([
                    fetchStaticPage('impressum'),
                    fetchStaticPage('catalog-pdf')
                ]);
                console.log("Fetched Impressum:", imp);
                console.log("Fetched Catalog PDF Data:", pdf);
                setImpressum(imp);
                setCatalogPdf(pdf);
            } catch (err) {
                console.error("Failed to fetch tab data:", err);
            }
        }
        loadData();
    }, []);

    if (!dict) return null;
    const catalog = dict.catalogPage;

    const tabs = [
        { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
        { id: 'catalog', label: 'Katalog', icon: <FileText className="w-4 h-4" /> },
        { id: 'impressum', label: 'Impressum', icon: <ShieldAlert className="w-4 h-4" /> }
    ];

    return (
        <div className="w-full bg-slate-50 min-h-screen">
            {/* Contact Information */}
            <div className="max-w-7xl mx-auto px-2 md:px-4 pt-2 md:pt-4">
                <div className="bg-[#1B3A5A] text-white rounded-lg md:rounded-xl p-2 md:p-3 mb-2 shadow-sm">
                    <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-blue-200 mb-1">
                        {lang === 'de' ? 'Kontakt Information' : 'Contact Information'}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                        <a href="tel:+498974747760" className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold hover:text-blue-300 transition-colors">
                            <Phone className="w-3 h-3 md:w-4 md:h-4" />
                            +49 89 7474 7760
                        </a>
                        <a href="mailto:at-implantate@t-online.de" className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold hover:text-blue-300 transition-colors">
                            <Mail className="w-3 h-3 md:w-4 md:h-4" />
                            at-implantate@t-online.de
                        </a>
                    </div>
                </div>
            </div>

            {/* Tab Navigation - Matching the reference image style */}
            <div className="max-w-7xl mx-auto px-2 md:px-4">
                <div className="bg-white border border-slate-200 rounded-t-lg md:rounded-t-xl overflow-hidden shadow-sm">
                    <div className="flex bg-slate-50/50 p-1 md:p-2 gap-1 md:gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-2 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-md md:rounded-lg transition-all flex items-center gap-1 md:gap-2 text-[10px] md:text-xs lg:text-sm font-bold tracking-tight ${activeTab === tab.id
                                        ? 'bg-white text-primary shadow-sm ring-1 ring-slate-200'
                                        : 'text-slate-500 hover:bg-white/50 hover:text-slate-700'
                                    }`}
                            >
                                <span className="hidden md:block">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto px-2 md:px-4 pb-4 md:pb-8">
                <div className="bg-white border-x border-b border-slate-200 rounded-b-lg md:rounded-b-xl overflow-hidden shadow-sm">
                    {activeTab === 'home' && (
                        <div key="home-content" className="animate-in fade-in duration-500">
                            {children}
                        </div>
                    )}

                    {activeTab === 'catalog' && (
                        <div key="catalog-content" className="animate-in fade-in duration-500 bg-slate-800">
                            <div className="w-full h-[85vh] relative text-white">
                                {catalogPdf?.data?.pdfUrl ? (
                                    <iframe
                                        src={`${catalogPdf.data.pdfUrl}#view=FitH`}
                                        className="w-full h-full"
                                        title="Catalog PDF"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-4">
                                        <FileText className="w-16 h-16 opacity-20" />
                                        <p className="font-black uppercase tracking-widest text-xs italic">Catalog PDF not yet synchronized</p>
                                        <p className="text-[10px] opacity-50">Please re-upload in Dashboard if fix was applied</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'impressum' && (
                        <div key="impressum-content" className="py-12 md:py-24 px-8 md:px-16 max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none italic uppercase">
                                        {impressum?.title?.[lang] || 'Impressum'}
                                    </h2>
                                    <div className="h-2 w-32 bg-primary"></div>
                                </div>

                                <div
                                    className="prose prose-slate prose-xl max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter"
                                    dangerouslySetInnerHTML={{ __html: (impressum?.content?.[lang] || '').replace(/\n/g, '<br/>') }}
                                />

                                {impressum?.data && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-slate-100 italic font-medium text-slate-500">
                                        {Object.entries(impressum.data).map(([key, value]) => (
                                            <div key={key}>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">{key}</span>
                                                <p>{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
