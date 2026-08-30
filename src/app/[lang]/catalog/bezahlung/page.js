import React from 'react';

export default async function BezahlungPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";

    if (lang === 'en') {
        return (
            <main className="min-h-screen bg-white font-sans text-slate-900 pb-24 px-4 md:px-12 max-w-[1000px] mx-auto">
                <div className="pt-8 md:pt-12 mb-8 border-b border-slate-100 pb-4">
                    <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight font-sans">
                        Payment
                    </h1>
                </div>

                <div className="space-y-4 text-sm md:text-base text-slate-900 leading-relaxed font-normal">
                    <p className="font-bold text-black text-base md:text-lg">
                        Prices and Payments
                    </p>
                    <p>
                        Prices are understood as value of goods and services without discounts plus applicable value-added tax.
                    </p>
                    <p>
                        With the publication of a new catalog, all previous price lists become invalid.
                    </p>
                    <p>
                        Our invoices are due immediately and payable within 14 days from the invoice date, unless agreed otherwise.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-24 px-4 md:px-12 max-w-[1000px] mx-auto">
            {/* Header */}
            <div className="pt-8 md:pt-12 mb-8 border-b border-slate-100 pb-4">
                <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight font-sans">
                    Bezahlung
                </h1>
            </div>

            {/* Content */}
            <div className="space-y-4 text-sm md:text-base text-slate-900 leading-relaxed font-normal">
                <p className="font-bold text-black text-base md:text-lg">
                    Preise und Zahlungen
                </p>
                <p>
                    Die Preise verstehen sich als Waren-, Dienstleistungswert ohne Nachlässe sowie zuzüglich der jeweils gültigen Umsatzsteuer.
                </p>
                <p>
                    Mit Erscheinen eines neuen Kataloges werden alle früheren Preislisten ungültig.
                </p>
                <p>
                    Unsere Rechnungen sind sofort fällig und binnen 14 Tagen ab Rechnungsdatum fällig, soweit nichts anderes vereinbart ist.
                </p>
            </div>
        </main>
    );
}
