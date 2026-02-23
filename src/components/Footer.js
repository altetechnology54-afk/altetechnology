import React from 'react';
import Link from 'next/link';

export default function Footer({ lang, dict }) {
    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6 mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="text-2xl font-black italic tracking-tighter uppercase text-slate-900">
                            AL-TECHNOLOGY<span className="text-primary text-3xl">.</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
                            Hochpräzise Zahnimplantatsysteme für professionelle Anwender weltweit. Qualität Made in Germany.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href={`/${lang}/catalog`} className="text-slate-600 hover:text-primary text-sm font-bold transition-colors">{dict.navigation.catalog}</Link></li>
                            <li><Link href={`/${lang}/about`} className="text-slate-600 hover:text-primary text-sm font-bold transition-colors">{dict.navigation.about}</Link></li>
                            <li><Link href={`/${lang}/contact`} className="text-slate-600 hover:text-primary text-sm font-bold transition-colors">{dict.navigation.contact}</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href={`/${lang}/impressum`} className="text-slate-600 hover:text-primary text-sm font-bold transition-colors">{dict.navigation.impressum}</Link></li>
                            <li><Link href={`/${lang}/datenschutz`} className="text-slate-600 hover:text-primary text-sm font-bold transition-colors">{dict.navigation.datenschutz}</Link></li>
                            <li><Link href={`/${lang}/agb`} className="text-slate-600 hover:text-primary text-sm font-bold transition-colors">{dict.navigation.agb}</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Office</h4>
                        <p className="text-slate-600 text-sm font-bold leading-relaxed">
                            Musterstraße 123<br />
                            12345 Berlin, Germany<br />
                            info@at-implantate.de
                        </p>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        © {new Date().getFullYear()} AL-Technology Implants. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        {/* Placeholder for social icons if needed */}
                        <span className="text-slate-300 hover:text-primary transition-colors cursor-pointer text-xs font-black uppercase tracking-widest">LinkedIn</span>
                        <span className="text-slate-300 hover:text-primary transition-colors cursor-pointer text-xs font-black uppercase tracking-widest">Instagram</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
