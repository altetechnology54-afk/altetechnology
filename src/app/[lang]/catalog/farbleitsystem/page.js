import React from 'react';

export default async function FarbleitsystemPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";

    const diameters = [
        { size: '3,30 mm', color: 'gelb', hex: '#FFEB3B', textColor: '#000000', box: '/images/farbleitsystem/vp01.png', drill: '/images/farbleitsystem/b1.png' },
        { size: '3,75 mm', color: 'rot', hex: '#F44336', textColor: '#ffffff', box: '/images/farbleitsystem/vp02.png', drill: '/images/farbleitsystem/b2.png' },
        { size: '4,20 mm', color: 'blau', hex: '#03A9F4', textColor: '#ffffff', box: '/images/farbleitsystem/vp03.png', drill: '/images/farbleitsystem/b3.png' },
        { size: '5,00 mm', color: 'grün', hex: '#2E7D32', textColor: '#ffffff', box: '/images/farbleitsystem/vp04.png', drill: '/images/farbleitsystem/b4.png' },
        { size: '6,00 mm', color: 'weiss', hex: '#FFFFFF', textColor: '#000000', border: 'border-2 border-slate-800', box: '/images/farbleitsystem/vp05.png', drill: '/images/farbleitsystem/b1.png' },
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-24 px-4 md:px-12 max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="pt-8 md:pt-12 mb-8 md:mb-12 border-b border-slate-100 pb-4">
                <h1 className="text-3xl md:text-5xl font-light text-slate-800 tracking-tight mb-4">
                    Farbleitsystem
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-[#1A3694]">
                    1. Implantate
                </h2>
                <h3 className="text-lg md:text-xl font-bold text-[#1A3694] italic">
                    Farbleitsystem / <span className="font-normal not-italic">Color guide system</span>
                </h3>
            </div>

            {/* SECTION 1: IMPLANTATE COLOR GUIDE */}
            <section className="mb-20">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-4 md:gap-8 items-center mb-12">
                    {/* Left Labels */}
                    <div className="space-y-16 text-xs md:text-sm font-bold text-slate-800">
                        <div>
                            <p>Implantat</p>
                            <p>Durchmesser</p>
                            <p className="text-[#1A3694] font-normal italic">Implant</p>
                            <p className="text-[#1A3694] font-normal italic">Diameter</p>
                        </div>
                        <div className="pt-24 md:pt-36">
                            <p>Farbcode</p>
                        </div>
                        <div className="pt-8">
                            <p>Farbmarkierung</p>
                        </div>
                    </div>

                    {/* 5 Column System */}
                    <div className="grid grid-cols-5 gap-2 md:gap-4 items-center">
                        {diameters.map((d, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-4 md:space-y-6">
                                {/* Top Diameter Circle */}
                                <div
                                    className={`w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-[10px] md:text-sm shadow-md ${d.border || ''}`}
                                    style={{ backgroundColor: d.hex, color: d.textColor }}
                                >
                                    {d.size}
                                </div>

                                {/* Packaging Image */}
                                <div className="w-full aspect-square flex items-center justify-center p-1 bg-white border border-slate-100 rounded-lg shadow-sm">
                                    <img
                                        src={d.box}
                                        alt={`Box ${d.size}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Farbcode Box */}
                                <div
                                    className={`w-full py-1.5 md:py-2 text-center text-xs md:text-sm font-bold rounded shadow-sm ${d.border || ''}`}
                                    style={{ backgroundColor: d.hex, color: d.textColor }}
                                >
                                    {d.color}
                                </div>

                                {/* Farbmarkierung Dot */}
                                <div
                                    className={`w-8 h-8 md:w-12 md:h-12 rounded-full shadow-inner ${d.border || ''}`}
                                    style={{ backgroundColor: d.hex }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Anatomy Boxes: Tube in Tube, Insert Mount, Deckschraube */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 pt-8 border-t border-slate-100">
                    {/* Tube in Tube */}
                    <div className="flex flex-col items-center">
                        <div className="w-full bg-[#DCE6F2] py-2 px-4 text-center font-bold text-xs md:text-sm text-slate-800 rounded-t-lg mb-4">
                            Tube in Tube
                        </div>
                        <div className="h-[280px] flex items-center justify-center">
                            <img
                                src="/images/farbleitsystem/tt1.png"
                                alt="Tube in Tube"
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Inklusive Einbringhilfe */}
                    <div className="flex flex-col items-center">
                        <div className="w-full bg-[#DCE6F2] py-2 px-4 text-center font-bold text-xs md:text-sm text-slate-800 rounded-t-lg mb-4">
                            Inklusive Einbringhilfe (Insert Mount)
                        </div>
                        <div className="h-[280px] flex items-center justify-center">
                            <img
                                src="/images/farbleitsystem/tt2.png"
                                alt="Einbringhilfe Insert Mount"
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Inklusive Deckschraube */}
                    <div className="flex flex-col items-center">
                        <div className="w-full bg-[#DCE6F2] py-2 px-4 text-center font-bold text-xs md:text-sm text-slate-800 rounded-t-lg mb-4">
                            Inklusive Deckschraube: Der gerade Schraubenkopf entspricht im Durchmesser der prothetischen Plattform
                        </div>
                        <div className="h-[280px] flex items-center justify-center">
                            <img
                                src="/images/farbleitsystem/tt3.png"
                                alt="Deckschraube"
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: DRILLS COLOR GUIDE */}
            <section className="mt-20 pt-12 border-t-2 border-slate-200">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A3694] mb-8">
                    2. Farbcodierung Bohrer / <span className="italic font-normal">Color Code Drills</span>
                </h2>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* 1. Row: Boxes & Original Size Drills */}
                    <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-4 items-center">
                        <div className="text-xs md:text-sm font-bold text-slate-800">
                            <p>Original Größe</p>
                            <p className="text-[#1A3694] font-normal italic">Original Valum</p>
                        </div>
                        <div className="grid grid-cols-5 gap-2 md:gap-4">
                            {diameters.map((d, idx) => (
                                <div key={idx} className="flex flex-col items-center space-y-4">
                                    <div className="w-full aspect-square flex items-center justify-center p-1 bg-white border border-slate-100 rounded-lg shadow-sm">
                                        <img src={d.box} alt="Box" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="h-24 md:h-32 flex items-center justify-center">
                                        <img src={d.drill} alt={`Drill ${d.size}`} className="h-full w-auto object-contain" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Row: Countersink Drills (Centered Vertically) */}
                    <div className="w-full flex justify-center py-4">
                        <img
                            src="/images/farbleitsystem/b6.png"
                            alt="Countersink Drills"
                            className="max-w-[280px] md:max-w-[340px] w-full h-auto object-contain"
                        />
                    </div>

                    {/* 3. Row: Drills with Length Markers (Centered Vertically) */}
                    <div className="w-full flex justify-center py-6">
                        <img
                            src="/images/farbleitsystem/b7.png"
                            alt="Color Code Drills with Length Markings"
                            className="max-w-2xl w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
