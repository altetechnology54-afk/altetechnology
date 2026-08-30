import React from 'react';

export default async function WarrantyPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";

    if (lang === 'en') {
        return (
            <main className="min-h-screen bg-white font-sans text-slate-900 pb-24 px-4 md:px-12 max-w-[1000px] mx-auto">
                <div className="pt-8 md:pt-12 mb-8 border-b border-slate-100 pb-4">
                    <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight font-sans">
                        Warranty + Repair
                    </h1>
                </div>

                <div className="space-y-6 text-sm md:text-base text-slate-900 leading-relaxed font-normal">
                    <p>
                        For all items, the statutory warranty period of 2 years naturally applies.
                    </p>

                    <p>
                        In addition, the manufacturer grants a manufacturer warranty of 3 years.
                    </p>

                    <div>
                        <p className="font-black text-black text-base md:text-lg mb-2">
                            And if something breaks?
                        </p>
                        <p className="mb-2">
                            (Of course free of charge in the event of a warranty or guarantee claim)
                        </p>
                        <p>
                            Please note the manufacturer's warranty information.
                        </p>
                    </div>

                    <div>
                        <p className="font-black text-black text-base md:text-lg mb-1">
                            Our customer advisors will be happy to help you.
                        </p>
                        <p>
                            Call us or write an email!{' '}
                            <a
                                href="mailto:at-implantate@t-online.de"
                                className="font-bold text-red-600 hover:underline"
                            >
                                at-implantate@t-online.de
                            </a>
                        </p>
                    </div>

                    <div>
                        <p className="font-black text-black text-base md:text-lg mb-1">
                            Please provide us with the following information:
                        </p>
                        <p>
                            Invoice number, invoice date, and device type.
                        </p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-24 px-4 md:px-12 max-w-[1000px] mx-auto">
            {/* Header */}
            <div className="pt-8 md:pt-12 mb-8 border-b border-slate-100 pb-4">
                <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight font-sans">
                    Garantie + Reparatur
                </h1>
            </div>

            {/* Content */}
            <div className="space-y-6 text-sm md:text-base text-slate-900 leading-relaxed font-normal">
                <p>
                    Bei allen Artikeln gilt selbstverständlich die gesetzliche Gewährleistungsfrist von 2 Jahren.
                </p>

                <p>
                    Darüber hinaus gewährt der Hersteller arnica eine Herstellergarantie von 3 Jahren.
                </p>

                <div>
                    <p className="font-black text-black text-base md:text-lg mb-2">
                        Und wenn mal was kaputtgeht?
                    </p>
                    <p className="mb-2">
                        (Natürlich im Gewährleistung- oder Garantiefall kostenlos)
                    </p>
                    <p>
                        Bitte beachten Sie die Garantiehinweise des Herstellers.
                    </p>
                </div>

                <div>
                    <p className="font-black text-black text-base md:text-lg mb-1">
                        Unsere Kundenberater helfen Ihnen gerne weiter.
                    </p>
                    <p>
                        Rufen Sie uns an oder schreiben Sie eine E-Mail!{' '}
                        <a
                            href="mailto:at-implantate@t-online.de"
                            className="font-bold text-red-600 hover:underline"
                        >
                            at-implantate@t-online.de
                        </a>
                    </p>
                </div>

                <div>
                    <p className="font-black text-black text-base md:text-lg mb-1">
                        Bitte teilen Sie uns folgende Informationen mit:
                    </p>
                    <p>
                        Rechnungsnummer, Datum der Rechnung und Gerätetyp.
                    </p>
                </div>
            </div>
        </main>
    );
}
