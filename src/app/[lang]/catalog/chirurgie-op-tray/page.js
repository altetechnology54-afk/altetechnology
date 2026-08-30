import React from 'react';
import AddToCartButton from '@/components/AddToCartButton';

export default async function ChirurgieOPTrayPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";

    const trayArticles = [
        {
            artNr: 'OPTL',
            image: '/images/chirurgie-op-tray/OPTL.gif',
            titleDe: 'Op-Tray Leer inkl. Platte',
            titleEn: 'empty Surgical Kit',
            descDe: '',
            descEn: ''
        },
        {
            artNr: 'OPTK',
            image: '/images/chirurgie-op-tray/OPTK.png',
            titleDe: 'Op-Tray komplett',
            titleEn: 'Surgical Kit completely',
            descDe: '',
            descEn: ''
        },
        {
            artNr: 'ISM',
            image: '/images/chirurgie-op-tray/ISM.png',
            titleDe: 'Implantschlüssel maschinell',
            titleEn: 'Motor Implant Driver',
            descDe: '',
            descEn: ''
        },
        {
            artNr: 'IMS',
            image: '/images/chirurgie-op-tray/IMS.png',
            titleDe: 'Implantatschlüssel lang / 18mm',
            titleEn: 'Implant Driver Hex long',
            descDe: '',
            descEn: ''
        },
        {
            artNr: 'SRS',
            image: '/images/chirurgie-op-tray/SRS.png',
            titleDe: 'Einbringschlüssel',
            titleEn: 'Prothetic Driver 1,25mm',
            descDe: '',
            descEn: ''
        },
        {
            artNr: 'ROS1',
            image: '/images/chirurgie-op-tray/ROS1.png',
            titleDe: 'Rosenbohrer / Round Bar Drill ø 2,0 mm',
            titleEn: 'Round Bar Drill ø 2,0 mm',
            descDe: 'Länge / Length 22mm\nOberflächenglättung des Kieferkamms',
            descEn: 'Length 22mm\nSurface smoothing of the alveolar ridge'
        },
        {
            artNr: 'GS',
            image: '/images/chirurgie-op-tray/GS.png',
            titleDe: 'Gingivastanze für Motor/ Punch ø 4,0 - Länge / Length 23mm',
            titleEn: 'Gingiva punch for motor ø 4.0 - Length 23mm',
            descDe: 'Schleimhautstanze für Eingriffe ohne Lappenbildung, zum sauberen Präparieren der Gingiva auf den Durchmesser des Implantates bei Eingriffen ohne Lappenbildung.',
            descEn: 'Mucosal punch for flapless procedures, for clean preparation of the gingiva to the diameter of the implant.'
        },
        {
            artNr: 'CER3',
            image: '/images/chirurgie-op-tray/CER3.png',
            titleDe: 'Keramikbohrer / Ceramic drills ø 2,0 mm',
            titleEn: 'Ceramic drills ø 2.0 mm',
            descDe: 'außerordentlich scharf und unterliegen keinem Verschleiß',
            descEn: 'extremely sharp with no wear'
        },
        {
            artNr: 'TM20',
            image: '/images/chirurgie-op-tray/TM20.png',
            titleDe: 'Tiefenmesser / Depth Gauge 2,0mm',
            titleEn: 'Depth Gauge 2.0mm',
            descDe: '6mm, 8mm, 10mm, 11,5mm, 13mm',
            descEn: '6mm, 8mm, 10mm, 11.5mm, 13mm'
        },
        {
            artNr: 'TM28',
            image: '/images/chirurgie-op-tray/TM28.png',
            titleDe: 'Tiefenmesser / Depth Gauge 2,8mm',
            titleEn: 'Depth Gauge 2.8mm',
            descDe: '',
            descEn: ''
        },
        {
            artNr: 'BV',
            image: '/images/chirurgie-op-tray/BV.png',
            titleDe: 'Bohrerverlängerung',
            titleEn: 'Drill Extension',
            descDe: '',
            descEn: ''
        },
        {
            artNr: 'COR2',
            image: '/images/chirurgie-op-tray/COR2.png',
            titleDe: 'Corticalis-Bohrer / Cortical Drill',
            titleEn: 'Cortical Drill',
            descDe: 'Eröffnung des corticalen Bereichs',
            descEn: 'Opening of the cortical area'
        }
    ];

    const trayProduct = {
        id: 'chirurgie-op-tray',
        name: { de: 'Chirurgie - OP-Tray', en: 'Surgery OP-Tray' }
    };

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-24 px-4 md:px-12 max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="pt-8 md:pt-12 mb-8 border-b border-slate-100 pb-4">
                <h1 className="text-3xl md:text-5xl font-light text-slate-800 tracking-tight">
                    Chirurgie - OP-Tray
                </h1>
            </div>

            {/* Top Komplettsystem Diagram */}
            <section className="mb-16">
                <div className="w-full flex justify-center py-4 bg-white rounded-xl shadow-sm border border-slate-100 p-2">
                    <img
                        src="/images/chirurgie-op-tray/komplettsystem.png"
                        alt="Chirurgie OP-Tray Komplettsystem"
                        className="max-w-4xl w-full h-auto object-contain"
                    />
                </div>
            </section>

            {/* Table Header */}
            <div className="mb-6">
                <h2 className="text-base md:text-lg font-bold text-slate-900">
                    Für Ihre Bestellungen Klicken sie bitte auf Cat.Nr.
                </h2>
            </div>

            {/* Articles Table */}
            <section className="mb-16">
                <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                    <div className="grid grid-cols-[100px_1fr_120px] bg-[#EAEFF7] py-2.5 px-4 text-xs md:text-sm font-bold text-[#1A3694] border-b border-slate-200">
                        <div>Art. Nr.</div>
                        <div className="text-center font-black">Artikelbezeichnung</div>
                        <div></div>
                    </div>

                    <div className="divide-y divide-slate-100 bg-white">
                        {trayArticles.map((art, idx) => (
                            <div key={idx} className="grid grid-cols-[100px_1fr_120px] items-center py-3 px-4 text-xs md:text-sm hover:bg-slate-50/50 transition-colors">
                                <div className="font-black text-slate-800">{art.artNr}</div>
                                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] items-center gap-4">
                                    <div className="bg-[#D8E2F0] p-2 rounded flex items-center justify-center min-h-[70px]">
                                        <img src={art.image} alt={art.artNr} className="max-h-16 w-auto object-contain" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-bold text-slate-900">{art.titleDe}</p>
                                        {art.titleEn && <p className="text-slate-500 italic text-xs">{art.titleEn}</p>}
                                        {art.descDe && <p className="text-slate-700 text-xs whitespace-pre-line leading-relaxed">{art.descDe}</p>}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <AddToCartButton
                                        product={trayProduct}
                                        article={{ artNr: art.artNr, description: { de: `${art.titleDe} (${art.artNr})` } }}
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

            {/* Bottom Two Feature Panels: Tiefensonde & Drehmoment-Ratsche */}
            <section className="space-y-8">
                {/* 1. Tiefensonde (TS) */}
                <div className="w-full bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                    <img
                        src="/images/chirurgie-op-tray/TS_box.png"
                        alt="Tiefensonde TS"
                        className="w-full max-w-2xl h-auto object-contain"
                    />
                    <div className="flex flex-col items-center gap-2">
                        <AddToCartButton
                            product={trayProduct}
                            article={{ artNr: 'TS', description: { de: 'Tiefensonde / Depth Measurements' } }}
                            className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-4 !py-2 !rounded-md !text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                        >
                            Jetzt bestellen!
                        </AddToCartButton>
                    </div>
                </div>

                {/* 2. Drehmoment-Ratsche (DMR) */}
                <div className="w-full bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                    <img
                        src="/images/chirurgie-op-tray/DMR_box.png"
                        alt="Drehmoment-Ratsche DMR"
                        className="w-full max-w-2xl h-auto object-contain"
                    />
                    <div className="flex flex-col items-center gap-2">
                        <AddToCartButton
                            product={trayProduct}
                            article={{ artNr: 'DMR', description: { de: 'Drehmoment-Ratsche / Torque Ratchet' } }}
                            className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-4 !py-2 !rounded-md !text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase"
                        >
                            Jetzt bestellen!
                        </AddToCartButton>
                    </div>
                </div>
            </section>
        </main>
    );
}
