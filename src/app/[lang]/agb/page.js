import React from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import { fetchStaticPage } from '@/lib/api';

export default async function AGBPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const pageData = await fetchStaticPage('agb');
    const title = pageData?.title?.[lang] || dict.legalPages.agb.title;
    const content = pageData?.content?.[lang] || dict.legalPages.agb.content;

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
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm">§ 1 Geltungsbereich</h3>
                            <p className="text-sm">Für die Geschäftsbeziehung zwischen der AL-Technology Implants GmbH und dem Besteller gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen.</p>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm">§ 2 Vertragsschluss</h3>
                            <p className="text-sm">Ihre Bestellung stellt ein Angebot an uns zum Abschluss eines Kaufvertrages dar. Wenn Sie eine Bestellung aufgeben, schicken wir Ihnen eine E-Mail, die den Eingang Ihrer Bestellung bestätigt.</p>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm">§ 3 Lieferung, Versandkosten</h3>
                            <p className="text-sm">Sofern nicht anders vereinbart, erfolgt die Lieferung ab Lager an die vom Besteller angegebene Lieferadresse.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
