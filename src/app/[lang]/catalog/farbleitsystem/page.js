'use client';

import Link from 'next/link';

export default function FarbleitsystemPage() {
    const systems = [
        { diameter: '3,30 mm', color: 'bg-[#FFEB3B]', colorName: 'gelb', colorHex: '#FFEB3B' },
        { diameter: '3,75 mm', color: 'bg-[#F44336]', colorName: 'rot', colorHex: '#F44336' },
        { diameter: '4,20 mm', color: 'bg-[#03A9F4]', colorName: 'blau', colorHex: '#03A9F4' },
        { diameter: '5,00 mm', color: 'bg-[#4CAF50]', colorName: 'grün', colorHex: '#4CAF50' },
        { diameter: '6,00 mm', color: 'bg-white', border: 'border-slate-800', colorName: 'weiss', colorHex: '#FFFFFF' },
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-48">
            {/* Header */}
            <header className="pt-20 px-4 md:px-12 max-w-7xl mx-auto mb-16">
                <h1 className="text-6xl font-light text-slate-800 tracking-[-0.02em] font-sans mb-16">
                    Farbleitsystem
                </h1>

                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-[#1B3A5A]">1. Implantate</h2>
                    <h3 className="text-2xl font-bold text-[#1B3A5A] italic">Farbleitsystem / <span className="text-slate-500 font-normal not-italic">Color guide system</span></h3>
                </div>
            </header>

            {/* Implant Grid Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-[150px_1fr] gap-8">
                    {/* Labels Column */}
                    <div className="flex flex-col justify-between py-12 text-sm font-bold text-slate-800 border-r border-slate-100 pr-8">
                        <div className="space-y-1">
                            <p>Implantat</p>
                            <p>Durchmesser</p>
                            <p className="text-blue-800 font-normal italic">Implant</p>
                            <p className="text-blue-800 font-normal italic">Diameter</p>
                        </div>
                        <div className="mt-[240px]">
                            <p>Farbcode</p>
                        </div>
                        <div className="mt-12">
                            <p>Farbmarkierung</p>
                        </div>
                    </div>

                    {/* Data Grid */}
                    <div className="grid grid-cols-5 gap-4">
                        {systems.map((sys, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-8">
                                {/* Diameter Circle */}
                                <div className={`w-20 h-20 rounded-full ${sys.color} ${sys.border || ''} shadow-lg flex items-center justify-center text-xs font-black ring-4 ring-white`}>
                                    <span className="bg-white/40 px-2 py-1 rounded backdrop-blur-sm">{sys.diameter}</span>
                                </div>

                                {/* Packaging Image Placeholder */}
                                <div className="w-full aspect-square relative rounded-xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 group hover:shadow-2xl transition-all">
                                    <img
                                        src={`https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400&sig=${idx}`}
                                        alt={`Packaging ${sys.colorName}`}
                                        className="w-full h-full object-cover p-2"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 flex items-end justify-center pb-2">
                                        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">AL-TECHNOLOGY</span>
                                    </div>
                                </div>

                                {/* Color Name Label */}
                                <div className={`w-full py-3 ${sys.color} ${sys.border || ''} rounded shadow-sm flex items-center justify-center font-bold text-slate-700`}>
                                    {sys.colorName}
                                </div>

                                {/* Color Dot */}
                                <div className={`w-16 h-16 rounded-full ${sys.color} ${sys.border || 'border-transparent'} border-2 shadow-inner ring-4 ring-slate-50`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Component Detail Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-32 border-t border-slate-100 pt-24 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="bg-slate-100 p-4 rounded inline-block font-bold text-slate-700 border border-slate-200">Tube in Tube</div>
                        <div className="mx-auto max-w-[200px] aspect-[1/2] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white bg-slate-50">
                            <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-slate-100 p-4 rounded inline-block font-bold text-slate-700 border border-slate-200 text-center text-sm h-[80px] flex items-center justify-center">
                            Inklusive Einbringhilfe<br />(Insert Mount)
                        </div>
                        <div className="mx-auto max-w-[200px] aspect-[1/2] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white bg-slate-50 flex items-center justify-center p-8">
                            <img src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex flex-col justify-around py-12 pointer-events-none">
                                <div className="w-full h-[2px] bg-red-500/40 relative">
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-slate-100 p-4 rounded inline-block font-bold text-slate-700 border border-slate-200 text-sm h-[80px] flex items-center justify-center">
                            Inklusive Deckschraube
                        </div>
                        <div className="mx-auto max-w-[200px] aspect-[1/2] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white bg-slate-50">
                            <img src="https://images.unsplash.com/photo-1581056344415-3abb473d756c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Drill Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto">
                <div className="space-y-8 mb-16">
                    <h2 className="text-3xl font-bold text-[#1B3A5A]">2. Farbcodierung Bohrer / <span className="font-normal italic text-slate-500">Color Code Drills</span></h2>
                </div>

                {/* 3 Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {/* Image 1: Original Size */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white relative group">
                            <img
                                src="https://images.unsplash.com/photo-1588776814227-19fbaba614a0?auto=format&fit=crop&q=80&w=800"
                                alt="Drill Original Size"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-1 rounded shadow-sm">
                                <p className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter">Original Größe</p>
                                <p className="text-[10px] italic text-blue-800 uppercase tracking-tighter">Original Valum</p>
                            </div>
                        </div>
                    </div>

                    {/* Image 2: Drill Fleet */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white relative group">
                            <img
                                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
                                alt="Dental Drill Fleet"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Image 3: Technical Measurements */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white relative group">
                            <img
                                src="https://images.unsplash.com/photo-1445522467332-901777265886?auto=format&fit=crop&q=80&w=800"
                                alt="Drill Technical Measurements"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Technical Text Block */}
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 border-l-4 border-primary bg-slate-50 rounded-r-2xl space-y-6 shadow-sm">
                        <p className="text-lg text-slate-700 leading-relaxed font-medium">
                            Außengekühlter chirurgischer Stahl: diese Bohrer werden aus erstklassigem Material auf modernsten Präzisions-Fräsmaschinen produziert. Dies bedeutet für Sie: Extrem gute und dauerhafte Schneideleistung durch ausgeklügelte Geometrie und optimierte Anschärfen der Arbeitsbereiche.
                        </p>
                    </div>
                </div>

                <div className="mt-24 relative rounded-[40px] overflow-hidden shadow-inner border border-slate-100 bg-slate-50 p-12 aspect-[21/9] flex items-center justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=2000"
                        alt="High Precision Drill Detail"
                        className="w-full h-full object-contain opacity-20 absolute inset-0 mix-blend-multiply"
                    />
                    <div className="relative z-10 text-center max-w-2xl space-y-4">
                        <p className="text-4xl font-light text-slate-400 italic">"Extrem gute und dauerhafte Schneideleistung..."</p>
                        <div className="h-[1px] w-24 bg-primary mx-auto opacity-50"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
