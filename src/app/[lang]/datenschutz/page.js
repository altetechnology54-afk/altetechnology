import React from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import { fetchStaticPage } from '@/lib/api';

export default async function DatenschutzPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const pageData = await fetchStaticPage('datenschutz');
    const title = pageData?.title?.[lang] || dict.legalPages.datenschutz.title;
    const content = pageData?.content?.[lang] || dict.legalPages.datenschutz.content;

    return (
        <main className="min-h-screen bg-white py-32 px-6">
            <div className="max-w-3xl mx-auto space-y-16">
                <header className="space-y-6">
                    <h1 className="text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                        {title}
                    </h1>
                    <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                </header>

                <div className="prose prose-slate prose-lg max-w-none font-medium leading-relaxed text-slate-600 italic">
                    <p>{content}</p>

                    <div className="mt-12 space-y-12 not-italic">
                        <section className="space-y-4">
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm">1. Datenschutz auf einen Blick</h3>
                            <h4 className="text-slate-800 font-bold">Allgemeine Hinweise</h4>
                            <p className="text-sm">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm">2. Datenerfassung auf unserer Website</h3>
                            <h4 className="text-slate-800 font-bold">Cookies</h4>
                            <p className="text-sm">Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.</p>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm">3. Analyse-Tools und Tools von Drittanbietern</h3>
                            <p className="text-sm">Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Dies erfolgt vor allem mit Cookies und mit sogenannten Analyseprogrammen.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
