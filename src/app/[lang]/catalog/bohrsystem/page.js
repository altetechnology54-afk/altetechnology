import React from 'react';
import AddToCartButton from '@/components/AddToCartButton';

export default async function BohrsystemPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";

    const specialDrills = [
        {
            artNr: 'Ros 1',
            image: '/images/bohrsystem/ros1.png',
            descDe: 'Rosenbohrer /Round Bar Drillø 2,0 mm\nLänge/ Length 22 mm. 3 mm',
            descEn: 'Round Bar Drill ø 2,0 mm\nLength 22 mm. 3 mm'
        },
        {
            artNr: 'Cor 2',
            image: '/images/bohrsystem/cor2.png',
            descDe: 'Corticalis-Bohrer / Cortical Drill',
            descEn: 'Cortical Drill'
        },
        {
            artNr: 'Cer 3',
            image: '/images/bohrsystem/cer3.png',
            descDe: 'Keramikbohrer /Ceramic drills ø 2,0 mm\naußerordentlich scharf und unterliegen keinem Verschleiß',
            descEn: 'Ceramic drills ø 2,0 mm\nextremely sharp with no wear'
        }
    ];

    const conicalDrills = [
        { artNr: 'CON 32', image: '/images/bohrsystem/con32.png', desc: 'ø3,2 mm / ø2,6 mm Länge / Length 6 mm' },
        { artNr: 'CON 38', image: '/images/bohrsystem/con38.png', desc: 'ø3,8 mm / ø3,0 mm Länge / Length 6 mm' },
        { artNr: 'CON 42', image: '/images/bohrsystem/con42.png', desc: 'ø4,2 mm / ø3,4 mm Länge / Length 6 mm' },
        { artNr: 'CON 52', image: '/images/bohrsystem/con52.png', desc: 'ø5,2 mm / ø4,4 mm Länge / Length 6 mm' }
    ];

    const cylindricalDrills = [
        { artNr: 'Cy2010', image: '/images/bohrsystem/cy2010.png', desc: 'ø2,0mm Länge / Length 10 mm' },
        { artNr: 'Cy2810', image: '/images/bohrsystem/cy2810.png', desc: 'ø2,8mm Länge / Length 10 mm' },
        { artNr: 'Cy3210', image: '/images/bohrsystem/cy3210.png', desc: 'ø3,2mm Länge / Length 10 mm' },
        { artNr: 'Cy3810', image: '/images/bohrsystem/cy3810.png', desc: 'ø3,8mm Länge / Length 10 mm' },
        { artNr: 'Cy4210', image: '/images/bohrsystem/cy4210.png', desc: 'ø4,2mm Länge / Length 10mm' },
        { artNr: 'Cy5210', image: '/images/bohrsystem/cy5210.png', desc: 'ø5,2mm Länge / Length 10mm' },

        { artNr: 'Cy20115', image: '/images/bohrsystem/cy20115.png', desc: 'ø2,0mm Länge / Length 11,5mm' },
        { artNr: 'Cy28115', image: '/images/bohrsystem/cy28115.png', desc: 'ø2,8mm Länge / Length 11,5 mm' },
        { artNr: 'Cy32115', image: '/images/bohrsystem/cy32115.png', desc: 'ø3,2mm Länge / Length 11,5 mm' },
        { artNr: 'Cy38115', image: '/images/bohrsystem/cy38115.png', desc: 'ø3,8mm Länge / Length 11,5 mm' },
        { artNr: 'Cy42115', image: '/images/bohrsystem/cy42115.png', desc: 'ø4,2mm Länge / Length 11,5 mm' },
        { artNr: 'Cy52115', image: '/images/bohrsystem/cy52115.png', desc: 'ø5,2mm Länge / Length 11,5 mm' },

        { artNr: 'Cy2013', image: '/images/bohrsystem/cy2013.png', desc: 'ø2,0mm Länge / Length 13 mm' },
        { artNr: 'Cy2813', image: '/images/bohrsystem/cy2813.png', desc: 'ø2,8mm Länge / Length 13 mm' },
        { artNr: 'Cy3213', image: '/images/bohrsystem/cy3213.png', desc: 'ø3,2mm Länge / Length 13 mm' },
        { artNr: 'Cy3813', image: '/images/bohrsystem/cy3813.png', desc: 'ø3,8mm Länge / Length 13 mm' },
        { artNr: 'Cy4213', image: '/images/bohrsystem/cy4213.png', desc: 'ø4,2mm Länge / Length 13 mm' },
        { artNr: 'Cy5213', image: '/images/bohrsystem/cy5213.png', desc: 'ø5,2mm Länge / Length 13 mm' },
    ];

    const bohrsystemProduct = {
        id: 'bohrsystem',
        name: { de: 'Bohrsystem', en: 'Drilling System' }
    };

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-24 px-4 md:px-12 max-w-[1200px] mx-auto">
            {/* Header Title */}
            <div className="pt-8 md:pt-12 mb-8 border-b border-slate-100 pb-4">
                <h1 className="text-3xl md:text-5xl font-light text-slate-800 tracking-tight">
                    Bohrsystem
                </h1>
            </div>

            {/* Bilingual Header Subtitles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                    <h2 className="text-[#1A3694] font-black text-lg md:text-xl">
                        Das Inteligenteste Bohrsystem der Welt
                    </h2>
                </div>
                <div>
                    <h2 className="text-slate-900 font-black text-lg md:text-xl">
                        The Inteligent drilling system in the World
                    </h2>
                </div>
            </div>

            {/* Bilingual Explanatory Blue Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-lg overflow-hidden mb-12 shadow-sm">
                {/* German Box */}
                <div className="bg-[#D8E2F0] p-6 space-y-4 text-xs md:text-sm text-slate-900 border-b md:border-b-0 md:border-r border-slate-300">
                    <p className="font-semibold">Schluss mit Bohrerstopper und Bohrhülsen</p>
                    <p className="font-semibold">Nehmen Sie einfach den Bohrer, der zu der Implantatlänge passt!</p>
                    <p className="leading-relaxed">
                        Das AL-Techno-System bietet ein sicheres und einfaches Bohrverfahren durch die drei Bohrerlängen 10 mm, 11,5 mm und 13 mm passend zu den Implantatlängen.
                    </p>
                    <p className="leading-relaxed">
                        Sie nehmen die passende Bohrerlänge und bohren bis zum Anschlag, einfacher und sicherer geht es nicht.
                    </p>
                </div>

                {/* English Box */}
                <div className="bg-[#D8E2F0] p-6 space-y-4 text-xs md:text-sm text-slate-900">
                    <p className="font-semibold">No more drill stopper and drill cores</p>
                    <p className="font-semibold">Just take the drill that fits the implant length</p>
                    <p className="leading-relaxed">
                        The A -Techno system offers a safe and easy drilling by the three drill length 10 mm, 11.5 mm and 13 mm to match the implant length
                    </p>
                    <p className="leading-relaxed">
                        Take the Matching drill length and drill to the stop, easier and safer it gets.
                    </p>
                </div>
            </div>

            {/* 3 Drill Stage Diagrams */}
            <div className="space-y-6 mb-16">
                <div className="w-full flex justify-center">
                    <img
                        src="/images/bohrsystem/stage_10mm.png"
                        alt="Bohrsystem Länge 10mm"
                        className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-sm border border-slate-200"
                    />
                </div>
                <div className="w-full flex justify-center">
                    <img
                        src="/images/bohrsystem/stage_115mm.png"
                        alt="Bohrsystem Länge 11,5mm"
                        className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-sm border border-slate-200"
                    />
                </div>
                <div className="w-full flex justify-center">
                    <img
                        src="/images/bohrsystem/stage_13mm.png"
                        alt="Bohrsystem Länge 13mm"
                        className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-sm border border-slate-200"
                    />
                </div>
            </div>

            {/* Order Section Heading */}
            <div className="mb-6 pt-6 border-t border-slate-200">
                <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Für Ihre Bestellungen Klicken sie bitte auf Cat.Nr.
                </h3>
            </div>

            {/* TABLE 1: Special Drills (Rosenbohrer, Corticalis, Keramik) */}
            <section className="mb-12">
                <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                    {/* Header */}
                    <div className="grid grid-cols-[100px_1fr_120px] bg-[#EAEFF7] py-2.5 px-4 text-xs md:text-sm font-bold text-[#1A3694] border-b border-slate-200">
                        <div>Art. Nr.</div>
                        <div className="text-center">Artikelbeschreibug</div>
                        <div></div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-slate-100 bg-white">
                        {specialDrills.map((drill, idx) => (
                            <div key={idx} className="grid grid-cols-[100px_1fr_120px] items-center py-3 px-4 text-xs md:text-sm">
                                <div className="font-black text-slate-800">{drill.artNr}</div>
                                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-center gap-4">
                                    <div className="bg-[#D8E2F0] p-2 rounded flex items-center justify-center">
                                        <img src={drill.image} alt={drill.artNr} className="max-h-12 w-auto object-contain" />
                                    </div>
                                    <div className="text-slate-800 font-medium whitespace-pre-line text-xs md:text-sm">
                                        {drill.descDe}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <AddToCartButton
                                        product={bohrsystemProduct}
                                        article={{ artNr: drill.artNr, description: { de: drill.descDe } }}
                                        className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-3 !py-1 md:!px-4 md:!py-1.5 !rounded-md !text-[11px] md:!text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                                    >
                                        Jetzt bestellen!
                                    </AddToCartButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TABLE 2: Konische Bohrer / Conical Drills */}
            <section className="mb-12">
                <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                    {/* Header */}
                    <div className="grid grid-cols-[100px_1fr_120px] bg-[#EAEFF7] py-2.5 px-4 text-xs md:text-sm font-bold text-[#1A3694] border-b border-slate-200">
                        <div>Art. Nr.</div>
                        <div className="flex justify-between px-4">
                            <span>konische Bohrer / Conical Drills</span>
                            <span>Artikelbezeichnung</span>
                        </div>
                        <div></div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-slate-100 bg-white">
                        {conicalDrills.map((drill, idx) => (
                            <div key={idx} className="grid grid-cols-[100px_1fr_120px] items-center py-3 px-4 text-xs md:text-sm">
                                <div className="font-black text-slate-800">{drill.artNr}</div>
                                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-center gap-4">
                                    <div className="bg-[#D8E2F0] p-2 rounded flex items-center justify-center">
                                        <img src={drill.image} alt={drill.artNr} className="max-h-12 w-auto object-contain" />
                                    </div>
                                    <div className="text-slate-800 font-medium text-xs md:text-sm">
                                        {drill.desc}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <AddToCartButton
                                        product={bohrsystemProduct}
                                        article={{ artNr: drill.artNr, description: { de: `Konischer Bohrer ${drill.artNr} ${drill.desc}` } }}
                                        className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-3 !py-1 md:!px-4 md:!py-1.5 !rounded-md !text-[11px] md:!text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                                    >
                                        Jetzt bestellen!
                                    </AddToCartButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TABLE 3: Zylindrische Bohrer / Cylindrical Drills */}
            <section className="mb-16">
                <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                    {/* Header */}
                    <div className="grid grid-cols-[100px_1fr_120px] bg-[#EAEFF7] py-2.5 px-4 text-xs md:text-sm font-bold text-[#1A3694] border-b border-slate-200">
                        <div>Art. Nr.</div>
                        <div className="flex justify-between px-4">
                            <span>Zylindrische Bohrer / Cylindrical Drills</span>
                            <span>Artikelbezeichnung</span>
                        </div>
                        <div></div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-slate-100 bg-white">
                        {cylindricalDrills.map((drill, idx) => (
                            <div key={idx} className="grid grid-cols-[100px_1fr_120px] items-center py-2.5 px-4 text-xs md:text-sm">
                                <div className="font-black text-slate-800">{drill.artNr}</div>
                                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] items-center gap-4">
                                    <div className="bg-[#D8E2F0] p-1.5 rounded flex items-center justify-center">
                                        <img src={drill.image} alt={drill.artNr} className="max-h-8 w-auto object-contain" />
                                    </div>
                                    <div className="text-slate-800 font-medium text-xs md:text-sm">
                                        {drill.desc}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <AddToCartButton
                                        product={bohrsystemProduct}
                                        article={{ artNr: drill.artNr, description: { de: `Zylindrischer Bohrer ${drill.artNr} ${drill.desc}` } }}
                                        className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-3 !py-1 md:!px-4 md:!py-1.5 !rounded-md !text-[11px] md:!text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                                    >
                                        Jetzt bestellen!
                                    </AddToCartButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
