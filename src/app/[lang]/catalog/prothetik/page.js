import React from 'react';
import AddToCartButton from '@/components/AddToCartButton';

export default async function ProthetikPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";

    const prothetikProduct = {
        id: 'prothetik',
        name: { de: 'Prothetischer Zubehör', en: 'Prothetic Accessories' }
    };

    // 1. Standard Titanpfosten
    const standardAbutments = [
        { desc: 'ABT - S', catNr: 'ABT - SHO' },
        { desc: 'Standard', catNr: 'ABT - S' },
        { desc: 'Long', catNr: 'ABT - L' },
        { desc: 'Angulated 15', catNr: 'ABT - A15' },
        { desc: 'Angulated 25', catNr: 'ABT - A25' },
        { desc: 'Temporary', catNr: 'ABT - TEM' },
    ];

    // 2. Shoulder-Pfosten
    const shoulderAbutments = [
        { hight: '1mm', catNr: 'ABT - SH 1' },
        { hight: '2mm', catNr: 'ABT - SH 2' },
        { hight: '3mm', catNr: 'ABT - SH 3' },
        { hight: '4mm', catNr: 'ABT - SH 4' },
    ];

    // 3. Kugelpfosten
    const ballAttachments = [
        { hight: '2mm', catNr: 'BAT 2' },
        { hight: '3mm', catNr: 'BAT 3' },
        { hight: '4mm', catNr: 'BAT 4' },
    ];

    // 4. Soft Conector
    const softConectors = [
        { hight: '2mm', catNr: 'SC 02' },
        { hight: '3mm', catNr: 'SC 03' },
    ];

    // 5. Gingivaformer / Heilungskappen
    const healingCaps = [
        { diameter: '4,5 mm', height: '3 mm', catNr: 'HC 45-3' },
        { diameter: '4,5 mm', height: '4 mm', catNr: 'HC 45-4' },
        { diameter: '4,5 mm', height: '5 mm', catNr: 'HC 45-5' },
        { diameter: '4,5 mm', height: '6 mm', catNr: 'HC 45-6' },
        { diameter: '5 mm', height: '3 mm', catNr: 'HC 60-3' },
        { diameter: '6 mm', height: '5 mm', catNr: 'HC 60-5' },
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-24 px-4 md:px-12 max-w-[1200px] mx-auto">
            {/* Header Title */}
            <div className="pt-8 md:pt-12 mb-8 border-b border-slate-100 pb-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A3694] tracking-tight">
                    Prothetischer Zubehör / <span className="font-normal italic">Prothetic Accessories</span>
                </h1>
            </div>

            {/* Top Hero Section: Text + Vial Diagram */}
            <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-center mb-16 pb-12 border-b border-slate-200">
                <div className="space-y-4 text-xs md:text-sm text-slate-800 leading-relaxed">
                    <p>
                        Die spezielle Verpackung der Implantate in Glasfläschchen ohne Berührung mit Kunststoffen, verleiht die AL-Technology Implantate eine hervorragende Qualität und höchste Erfolgsrate.
                    </p>
                    <p>
                        Jedes Implantat wird geliefert mit einer aus Edelstahl gefertigten Einbringhilfe und Deckschraube, zum sofortigen Implantieren und befestigen mit der Drehmomentratsche ohne Instrumentenwechsel.
                    </p>
                </div>
                <div className="flex justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                    <img
                        src="/images/prothetik/hm.png"
                        alt="Prothetischer Zubehör Übersicht"
                        className="max-h-[320px] w-auto object-contain"
                    />
                </div>
            </section>

            {/* SECTION 1: Standard Titanpfosten */}
            <section className="mb-16 pb-12 border-b border-slate-200">
                <h2 className="text-base md:text-lg font-bold text-[#1A3694] mb-6">
                    1- Standard Titanpfosten mit hex 2.42 hex / <span className="italic font-normal">Standard Titanium abutment with hex 2.42</span>
                </h2>

                <div className="w-full mb-6 flex justify-center">
                    <img
                        src="/images/prothetik/s.png"
                        alt="Standard Titanpfosten"
                        className="w-full max-w-4xl h-[200px] object-contain rounded-xl shadow-sm border border-slate-200"
                    />
                      <img
                        src="/images/prothetik/a15.png"
                        alt="Standard Titanpfosten"
                        className="w-full max-w-4xl h-[200px] object-contain rounded-xl shadow-sm border border-slate-200"
                    />
                      <img
                        src="/images/prothetik/a25.png"
                        alt="Standard Titanpfosten"
                        className="w-full max-w-4xl h-[200px] object-contain rounded-xl shadow-sm border border-slate-200"
                    />
                      <img
                        src="/images/prothetik/l.png"
                        alt="Standard Titanpfosten"
                        className="w-full max-w-4xl h-[200px] object-contain rounded-xl shadow-sm border border-slate-200"
                    />
                      <img
                        src="/images/prothetik/tem.png"
                        alt="Standard Titanpfosten"
                        className="w-full max-w-4xl h-[200px] object-contain rounded-xl shadow-sm border border-slate-200"
                    />
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto mb-6">
                    <div className="grid grid-cols-[100px_repeat(6,1fr)] bg-[#EAEFF7] py-2.5 px-4 text-xs md:text-sm font-bold text-slate-800 border-b border-slate-200 text-center">
                        <div className="text-left font-black">Description</div>
                        {standardAbutments.map((item, idx) => (
                            <div key={idx}>{item.desc}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[100px_repeat(6,1fr)] py-2.5 px-4 text-xs md:text-sm font-bold text-slate-800 border-b border-slate-200 text-center items-center bg-white">
                        <div className="text-left font-black">Cat.Nr.</div>
                        {standardAbutments.map((item, idx) => (
                            <div key={idx} className="font-black tracking-wider">{item.catNr}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[100px_repeat(6,1fr)] py-3 px-4 text-center items-center bg-white">
                        <div></div>
                        {standardAbutments.map((item, idx) => (
                            <div key={idx} className="flex justify-center">
                                <AddToCartButton
                                    product={prothetikProduct}
                                    article={{ artNr: item.catNr, description: { de: `Standard Titanpfosten ${item.desc} (${item.catNr})` } }}
                                    className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-2 md:!px-3 !py-1 !rounded-md !text-[10px] md:!text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                                >
                                    Jetzt bestellen!
                                </AddToCartButton>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Explanatory Text */}
                <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed">
                    <p>
                        Das entscheidende Merkmal dieses Titan-Aufbaus ist seine subgingivale Formgebung. Diese weitet sich ausgehend von der Implantatschulter zirkulär konvex auf und geht in eine umlaufende, geschwungen gestaltete Hohlkehle über. Vom oralen Anteil fällt diese zur ästhetischen Seite hin ab.
                    </p>
                    <p>
                        Durch die zunächst massive Kontur ist es dem Anwender möglich, durch gezieltes Reduzieren mit geeignetem Werkzeug (Titanfräse, Polierer) ein optimiertes Emergenzprofil zu gestalten. Weiterhin ist durch die zirkuläre Schulter ein exakter Übergang zur fertigenden Krone möglich. Je nach Verlauf der Gingiva sollte der Verlauf der Schulter angepasst werden.
                    </p>
                </div>
            </section>

            {/* SECTION 2: Shoulder-Pfosten */}
            <section className="mb-16 pb-12 border-b border-slate-200">
                <h2 className="text-base md:text-lg font-bold text-[#1A3694] mb-1">
                    2- Shoulder-Pfosten Titan mit hex 2.42 / <span className="italic font-normal">Shoulder-abutment hex 2.42</span>
                </h2>
                <p className="text-xs md:text-sm font-bold text-slate-800 mb-6">
                    Die ideale Lösung für hohe Gingiva / <span className="italic font-normal">The ideal solution for high gingiva</span>
                </p>

                <div className="w-full mb-6 flex justify-center">
                    <img
                        src="/images/prothetik/sh1.png"
                        alt="Shoulder-Pfosten Titan"
                        className="w-full max-w-3xl h-auto object-contain rounded-xl shadow-sm border border-slate-200"
                    />
                         <img
                        src="/images/prothetik/sh2.png"
                        alt="Shoulder-Pfosten Titan"
                        className="w-full max-w-3xl h-auto object-contain rounded-xl shadow-sm border border-slate-200"
                    />
                         <img
                        src="/images/prothetik/sh3.png"
                        alt="Shoulder-Pfosten Titan"
                        className="w-full max-w-3xl h-auto object-contain rounded-xl shadow-sm border border-slate-200"
                    />
                         <img
                        src="/images/prothetik/sh4.png"
                        alt="Shoulder-Pfosten Titan"
                        className="w-full max-w-3xl h-auto object-contain rounded-xl shadow-sm border border-slate-200"
                    />
                </div>

                <div className="overflow-x-auto max-w-3xl mx-auto">
                    <div className="grid grid-cols-[100px_repeat(4,1fr)] bg-[#EAEFF7] py-2.5 px-4 text-xs md:text-sm font-bold text-slate-800 border-b border-slate-200 text-center">
                        <div className="text-left font-black">Hight</div>
                        {shoulderAbutments.map((item, idx) => (
                            <div key={idx}>{item.hight}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[100px_repeat(4,1fr)] py-2.5 px-4 text-xs md:text-sm font-bold text-slate-800 border-b border-slate-200 text-center items-center bg-white">
                        <div className="text-left font-black">Cat.Nr.</div>
                        {shoulderAbutments.map((item, idx) => (
                            <div key={idx} className="font-black tracking-wider">{item.catNr}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[100px_repeat(4,1fr)] py-3 px-4 text-center items-center bg-white">
                        <div></div>
                        {shoulderAbutments.map((item, idx) => (
                            <div key={idx} className="flex justify-center">
                                <AddToCartButton
                                    product={prothetikProduct}
                                    article={{ artNr: item.catNr, description: { de: `Shoulder-Pfosten ${item.hight} (${item.catNr})` } }}
                                    className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-3 !py-1 !rounded-md !text-[10px] md:!text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                                >
                                    Jetzt bestellen!
                                </AddToCartButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: Kugelpfosten */}
            <section className="mb-16 pb-12 border-b border-slate-200">
                <h2 className="text-base md:text-lg font-bold text-[#1A3694] mb-6">
                    3- Kugelpfosten Titan mit Matrize / <span className="italic font-normal">Ball attachments with plastic Cap & Titan House</span>
                </h2>

                <div className="w-full mb-6 flex justify-center">
                    <img
                        src="/images/prothetik/BAT2-4.png"
                        alt="Kugelpfosten Titan mit Matrize"
                        className="w-full max-w-3xl h-auto object-contain rounded-xl "
                    />
                     <img
                        src="/images/prothetik/BAT.png"
                        alt="Kugelpfosten Titan mit Matrize"
                        className="w-full max-w-xl h-[200px] object-contain rounded-xl  "
                    />
                </div>

                <div className="overflow-x-auto max-w-3xl mx-auto">
                    <div className="grid grid-cols-[100px_repeat(3,1fr)] bg-[#EAEFF7] py-2.5 px-4 text-xs md:text-sm font-bold text-slate-800 border-b border-slate-200 text-center">
                        <div className="text-left font-black">Hight</div>
                        {ballAttachments.map((item, idx) => (
                            <div key={idx}>{item.hight}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[100px_repeat(3,1fr)] py-2.5 px-4 text-xs md:text-sm font-bold text-slate-800 border-b border-slate-200 text-center items-center bg-white">
                        <div className="text-left font-black">Cat.Nr.</div>
                        {ballAttachments.map((item, idx) => (
                            <div key={idx} className="font-black tracking-wider">{item.catNr}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[100px_repeat(3,1fr)] py-3 px-4 text-center items-center bg-white">
                        <div></div>
                        {ballAttachments.map((item, idx) => (
                            <div key={idx} className="flex justify-center">
                                <AddToCartButton
                                    product={prothetikProduct}
                                    article={{ artNr: item.catNr, description: { de: `Kugelpfosten Titan ${item.hight} (${item.catNr})` } }}
                                    className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-3 !py-1 !rounded-md !text-[10px] md:!text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                                >
                                    Jetzt bestellen!
                                </AddToCartButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Soft Conector */}
            <section className="mb-16 pb-12 border-b border-slate-200">
                <h2 className="text-base md:text-lg font-bold text-[#1A3694] mb-6">
                    4- Soft Conector
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-center max-w-4xl mx-auto">
                    {/* Left Table */}
                    <div className="overflow-hidden border border-slate-200 rounded-lg">
                        <div className="grid grid-cols-[80px_repeat(2,1fr)] bg-[#EAEFF7] py-2 px-3 text-xs font-bold text-slate-800 border-b border-slate-200 text-center">
                            <div className="text-left font-black">Hight</div>
                            {softConectors.map((item, idx) => (
                                <div key={idx}>{item.hight}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-[80px_repeat(2,1fr)] py-2 px-3 text-xs font-bold text-slate-800 border-b border-slate-200 text-center items-center bg-white">
                            <div className="text-left font-black">Cat.Nr.</div>
                            {softConectors.map((item, idx) => (
                                <div key={idx} className="font-black tracking-wider">{item.catNr}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-[80px_repeat(2,1fr)] py-2.5 px-3 text-center items-center bg-white">
                            <div></div>
                            {softConectors.map((item, idx) => (
                                <div key={idx} className="flex justify-center">
                                    <AddToCartButton
                                        product={prothetikProduct}
                                        article={{ artNr: item.catNr, description: { de: `Soft Conector ${item.hight} (${item.catNr})` } }}
                                        className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-2.5 !py-1 !rounded-md !text-[10px] md:!text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                                    >
                                        Jetzt bestellen!
                                    </AddToCartButton>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-200">
                        <img
                            src="/images/prothetik/conector.png"
                            alt="Soft Conector"
                            className="w-full h-auto object-contain max-h-[160px]"
                        />
                        <img
                            src="/images/prothetik/conectorS.png"
                            alt="Soft Conector"
                            className="w-full h-auto object-contain max-h-[160px]"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 5: Gingivaformer / Heilungskappen */}
            <section className="mb-16 pb-12 border-b border-slate-200">
                <h2 className="text-base md:text-lg font-bold text-[#1A3694] mb-6">
                    5- Gingivaformer; Heilungskappe Titan / <span className="italic font-normal">Healing caps Titan</span>
                </h2>

                <div className="w-full mb-6 flex justify-center">
                    <img
                        src="/images/prothetik/hc-453.png"
                        alt="Gingivaformer Heilungskappe Titan"
                        className="w-full max-w-xl h-[200px] object-contain rounded-xl "
                    />
                     <img
                        src="/images/prothetik/hc-455.png"
                        alt="Gingivaformer Heilungskappe Titan"
                        className="w-full max-w-xl h-[200px] object-contain rounded-xl "
                    />
                      <img
                        src="/images/prothetik/hc-456.png"
                        alt="Gingivaformer Heilungskappe Titan"
                        className="w-full max-w-xl h-[200px] object-contain rounded-xl "
                    />
                      <img
                        src="/images/prothetik/hc-603.png"
                        alt="Gingivaformer Heilungskappe Titan"
                        className="w-full max-w-xl h-[200px] object-contain rounded-xl "
                    />
                      <img
                        src="/images/prothetik/hc-605.png"
                        alt="Gingivaformer Heilungskappe Titan"
                        className="w-full max-w-xl h-[200px] object-contain rounded-xl "
                    />
                </div>

                <div className="overflow-x-auto">
                    <div className="grid grid-cols-[100px_repeat(6,1fr)] bg-[#EAEFF7] py-2.5 px-4 text-xs md:text-sm font-bold text-slate-800 border-b border-slate-200 text-center">
                        <div className="text-left font-black">Diameter</div>
                        {healingCaps.map((item, idx) => (
                            <div key={idx}>{item.diameter}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[100px_repeat(6,1fr)] py-2.5 px-4 text-xs md:text-sm font-bold text-slate-800 border-b border-slate-200 text-center items-center bg-white">
                        <div className="text-left font-black">Height</div>
                        {healingCaps.map((item, idx) => (
                            <div key={idx}>{item.height}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[100px_repeat(6,1fr)] py-2.5 px-4 text-xs md:text-sm font-bold text-slate-800 border-b border-slate-200 text-center items-center bg-white">
                        <div className="text-left font-black">Cat.Nr.</div>
                        {healingCaps.map((item, idx) => (
                            <div key={idx} className="font-black tracking-wider">{item.catNr}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[100px_repeat(6,1fr)] py-3 px-4 text-center items-center bg-white">
                        <div></div>
                        {healingCaps.map((item, idx) => (
                            <div key={idx} className="flex justify-center">
                                <AddToCartButton
                                    product={prothetikProduct}
                                    article={{ artNr: item.catNr, description: { de: `Heilungskappe Titan ø${item.diameter} H:${item.height} (${item.catNr})` } }}
                                    className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-2 md:!px-3 !py-1 !rounded-md !text-[10px] md:!text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                                >
                                    Jetzt bestellen!
                                </AddToCartButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: Labor-Analog */}
            <section className="mb-16 pb-12 border-b border-slate-200">
                <h2 className="text-base md:text-lg font-bold text-[#1A3694] mb-1">
                    6- Labor-Analog / <span className="italic font-normal">Analog Stainless S.</span>
                </h2>
                <p className="text-xs md:text-sm font-bold text-slate-800 mb-6">
                    Laboranalog: Für die Verwendung im Dentallabor.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 items-center max-w-2xl">
                    <div className="overflow-hidden border border-slate-200 rounded-lg">
                        <div className="grid grid-cols-2 bg-[#EAEFF7] py-2 px-3 text-xs font-bold text-slate-800 border-b border-slate-200">
                            <div className="font-black">Hight</div>
                            <div>Standard</div>
                        </div>
                        <div className="grid grid-cols-2 py-2 px-3 text-xs font-bold text-slate-800 border-b border-slate-200 bg-white items-center">
                            <div className="font-black">Cat.Nr.</div>
                            <div className="font-black tracking-wider">ANL-S</div>
                        </div>
                        <div className="p-2.5 flex justify-center bg-white">
                            <AddToCartButton
                                product={prothetikProduct}
                                article={{ artNr: 'ANL-S', description: { de: 'Labor-Analog Standard (ANL-S)' } }}
                                className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-4 !py-1.5 !rounded-md !text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                            >
                                Jetzt bestellen!
                            </AddToCartButton>
                        </div>
                    </div>

                    <div className="flex justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-200">
                        <img
                            src="/images/prothetik/ANLS.png"
                            alt="Labor-Analog"
                            className="h-24 w-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 7: Abdruckpfosten */}
            <section className="mb-16">
                <h2 className="text-base md:text-lg font-bold text-[#1A3694] mb-1">
                    7- Abdruckpfosten inkl. Schraube / <span className="italic font-normal">Impression Transfer Incl. Screw</span>
                </h2>
                <p className="text-xs md:text-sm font-bold text-slate-800 mb-6">
                    Erhältlich mit langer oder kurzer Schraube / <span className="italic font-normal">Available with short or long Screw</span>
                </p>

                {/* 5 Column Impression Transfers */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    {/* TRN-Long */}
                    <div className="border border-slate-200 rounded-lg p-3 bg-white flex flex-col justify-between space-y-3">
                        <div className="text-xs font-bold text-slate-800 border-b pb-2">
                            <p className="font-black text-[#1A3694]">Long (10 mm)</p>
                            <p className="text-slate-500">Cat.Nr.: TRN-Long</p>
                        </div>
                        <div className="h-44 flex items-center justify-center bg-[#D8E2F0] rounded p-2">
                            <img src="/images/prothetik/trn-long.png" alt="TRN-Long" className="h-full w-auto object-contain" />
                        </div>
                        <p className="text-[11px] text-slate-600 text-center font-medium leading-tight">
                            Offener Abformung inkl. Schraube
                        </p>
                        <AddToCartButton
                            product={prothetikProduct}
                            article={{ artNr: 'TRN-Long', description: { de: 'Abdruckpfosten TRN-Long (10 mm offener Abformung)' } }}
                            className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] !text-white !py-1 !rounded-md !text-[11px] !font-black !shadow !uppercase w-full"
                        >
                            Jetzt bestellen!
                        </AddToCartButton>
                    </div>

                    {/* TRN-S */}
                    <div className="border border-slate-200 rounded-lg p-3 bg-white flex flex-col justify-between space-y-3">
                        <div className="text-xs font-bold text-slate-800 border-b pb-2">
                            <p className="font-black text-[#1A3694]">Standard (10 mm)</p>
                            <p className="text-slate-500">Cat.Nr.: TRN-S</p>
                        </div>
                        <div className="h-44 flex items-center justify-center bg-[#D8E2F0] rounded p-2">
                            <img src="/images/prothetik/trn-s.png" alt="TRN-S" className="h-full w-auto object-contain" />
                        </div>
                        <p className="text-[11px] text-slate-600 text-center font-medium leading-tight">
                            Geschlossener Abformung inkl. Schraube
                        </p>
                        <AddToCartButton
                            product={prothetikProduct}
                            article={{ artNr: 'TRN-S', description: { de: 'Abdruckpfosten TRN-S (10 mm geschlossener Abformung)' } }}
                            className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] !text-white !py-1 !rounded-md !text-[11px] !font-black !shadow !uppercase w-full"
                        >
                            Jetzt bestellen!
                        </AddToCartButton>
                    </div>

                    {/* TRN-SH */}
                    <div className="border border-slate-200 rounded-lg p-3 bg-white flex flex-col justify-between space-y-3">
                        <div className="text-xs font-bold text-slate-800 border-b pb-2">
                            <p className="font-black text-[#1A3694]">Short (7 mm)</p>
                            <p className="text-slate-500">Cat.Nr.: TRN-SH</p>
                        </div>
                        <div className="h-44 flex items-center justify-center bg-[#D8E2F0] rounded p-2">
                            <img src="/images/prothetik/trn-sh.png" alt="TRN-SH" className="h-full w-auto object-contain" />
                        </div>
                        <p className="text-[11px] text-slate-600 text-center font-medium leading-tight">
                            Geschlossener Abformung inkl. Schraube
                        </p>
                        <AddToCartButton
                            product={prothetikProduct}
                            article={{ artNr: 'TRN-SH', description: { de: 'Abdruckpfosten TRN-SH (7 mm geschlossener Abformung)' } }}
                            className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] !text-white !py-1 !rounded-md !text-[11px] !font-black !shadow !uppercase w-full"
                        >
                            Jetzt bestellen!
                        </AddToCartButton>
                    </div>

                    {/* TRN-ABT */}
                    <div className="border border-slate-200 rounded-lg p-3 bg-white flex flex-col justify-between space-y-3">
                        <div className="text-xs font-bold text-slate-800 border-b pb-2">
                            <p className="font-black text-[#1A3694]">Transver Abutment</p>
                            <p className="text-slate-500">Cat.Nr.: TRN-ABT</p>
                        </div>
                        <div className="h-44 flex items-center justify-center bg-[#D8E2F0] rounded p-2">
                            <img src="/images/prothetik/trn-abt.png" alt="TRN-ABT" className="h-full w-auto object-contain" />
                        </div>
                        <p className="text-[11px] text-slate-600 text-center font-medium leading-tight">
                            Transver Abutment
                        </p>
                        <AddToCartButton
                            product={prothetikProduct}
                            article={{ artNr: 'TRN-ABT', description: { de: 'Abdruckpfosten TRN-ABT (Transver Abutment)' } }}
                            className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] !text-white !py-1 !rounded-md !text-[11px] !font-black !shadow !uppercase w-full"
                        >
                            Jetzt bestellen!
                        </AddToCartButton>
                    </div>

                    {/* TRN-Q */}
                    <div className="border border-slate-200 rounded-lg p-3 bg-white flex flex-col justify-between space-y-3">
                        <div className="text-xs font-bold text-slate-800 border-b pb-2">
                            <p className="font-black text-[#1A3694]">Quick Transfer</p>
                            <p className="text-slate-500">Cat.Nr.: TRN-Q</p>
                        </div>
                        <div className="h-44 flex items-center justify-center bg-[#D8E2F0] rounded p-2">
                            <img src="/images/prothetik/trn-q.png" alt="TRN-Q" className="h-full w-auto object-contain" />
                        </div>
                        <p className="text-[11px] text-slate-600 text-center font-medium leading-tight">
                            Ohne Schraube / without Screw
                        </p>
                        <AddToCartButton
                            product={prothetikProduct}
                            article={{ artNr: 'TRN-Q', description: { de: 'Abdruckpfosten TRN-Q (Quick Transfer ohne Schraube)' } }}
                            className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] !text-white !py-1 !rounded-md !text-[11px] !font-black !shadow !uppercase w-full"
                        >
                            Jetzt bestellen!
                        </AddToCartButton>
                    </div>
                </div>

                {/* Explanatory Text */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs md:text-sm text-slate-700 leading-relaxed">
                    <p>
                        Abdruckpfosten/ Impression Transfer: Offener Abformung (Open Tray), Geschlossener Abformung (Closed Tray). Beide Abformmethoden – offene sowie geschlossene – erfolgen etwa 2 Wochen nach der Freilegung. Zur Abdrucknahme wird der Gingivaformer vom Implantat abgeschraubt, der Abdruckpfosten mit seiner Hexverbindung in das Implantat eingesetzt und mit der Abdruckpfostenschraube (1.70 mm Hex) fixiert. Weiterhin wird zur Abdrucknahme grundsätzlich die Anfertigung eines individuellen Abdrucklöffels empfohlen.
                    </p>
                </div>
            </section>
        </main>
    );
}
