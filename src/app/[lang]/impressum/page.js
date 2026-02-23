import React from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import { fetchStaticPage } from '@/lib/api';

export default async function ImpressumPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const pageData = await fetchStaticPage('impressum');
    const title = pageData?.title?.[lang] || dict.legalPages.impressum.title;
    const content = pageData?.content?.[lang] || dict.legalPages.impressum.content;

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

                    <div className="mt-12 space-y-8 not-italic">
                        <section>
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-4">Angaben gemäß § 5 TMG</h3>
                            <p>
                                AL-Technology Implants GmbH<br />
                                Musterstraße 123<br />
                                12345 Berlin
                            </p>
                        </section>

                        <section>
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-4">Vertreten durch</h3>
                            <p>Max Mustermann</p>
                        </section>

                        <section>
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-4">Kontakt</h3>
                            <p>
                                Telefon: +49 (0) 30 1234567<br />
                                E-Mail: info@at-implantate.de
                            </p>
                        </section>

                        <section>
                            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-4">Registereintrag</h3>
                            <p>
                                Eintragung im Handelsregister.<br />
                                Registergericht: Amtsgericht Berlin<br />
                                Registernummer: HRB 123456
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
