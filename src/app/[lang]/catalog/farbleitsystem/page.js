import { getDictionary } from '../../../../lib/get-dictionary';
import { fetchCatalogSection } from '../../../../lib/api';

export default async function FarbleitsystemPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const sectionData = await fetchCatalogSection('farbleitsystem');

    if (!sectionData) {
        // Fallback or static version if API fails
        return <div className="p-20 text-center font-bold text-slate-400 uppercase tracking-widest">Loading Color System...</div>;
    }

    const getT = (field) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['de'] || field['en'] || '';
    };

    const title = getT(sectionData.title) || 'Farbleitsystem';
    const subTitle = getT(sectionData.subDescription) || 'Color code system';
    const description = getT(sectionData.description);
    const applicationArea = getT(sectionData.applicationArea);

    const systems = sectionData.variants.map(v => ({
        diameter: v.diameter + (v.diameter.includes('mm') ? '' : ' mm'),
        colorName: v.color || (v.hex === '#FFEB3B' ? 'gelb' : v.hex === '#F44336' ? 'rot' : v.hex === '#03A9F4' ? 'blau' : v.hex === '#4CAF50' ? 'grün' : 'weiss'),
        colorHex: v.hex || '#FFFFFF',
        color: `bg-[${v.hex}]`,
        border: v.hex === '#FFFFFF' ? 'border-slate-800' : ''
    }));

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-48">
            {/* Header */}
            <header className="pt-20 px-4 md:px-12 max-w-7xl mx-auto mb-16">
                <h1 className="text-6xl font-light text-slate-800 tracking-[-0.02em] font-sans mb-16">
                    {getT(sectionData.name)}
                </h1>

                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-[#1B3A5A]">{title.split(' / ')[0]}</h2>
                    <h3 className="text-2xl font-bold text-[#1B3A5A] italic">
                        {title.includes(' / ') ? title.split(' / ')[0] : title} / <span className="text-slate-500 font-normal not-italic">{subTitle}</span>
                    </h3>
                </div>
            </header>

            {/* Implant Grid Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-[150px_1fr] gap-8">
                    {/* Labels Column */}
                    <div className="flex flex-col justify-between py-12 text-sm font-bold text-slate-800 border-r border-slate-100 pr-8">
                        <div className="space-y-1">
                            <p>{lang === 'de' ? 'Implantat' : 'Implant'}</p>
                            <p>{lang === 'de' ? 'Durchmesser' : 'Diameter'}</p>
                            <p className="text-blue-800 font-normal italic">{lang === 'de' ? 'Implant' : 'Implant'}</p>
                            <p className="text-blue-800 font-normal italic">{lang === 'de' ? 'Diameter' : 'Diameter'}</p>
                        </div>
                        <div className="mt-[240px]">
                            <p>{lang === 'de' ? 'Farbcode' : 'Color Code'}</p>
                        </div>
                        <div className="mt-12">
                            <p>{lang === 'de' ? 'Farbmarkierung' : 'Color Marking'}</p>
                        </div>
                    </div>

                    {/* Data Grid */}
                    <div className="grid grid-cols-5 gap-4">
                        {systems.map((sys, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-8">
                                {/* Diameter Circle */}
                                <div
                                    className={`w-20 h-20 rounded-full shadow-lg flex items-center justify-center text-xs font-black ring-4 ring-white ${sys.border}`}
                                    style={{ backgroundColor: sys.colorHex }}
                                >
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
                                <div
                                    className={`w-full py-3 rounded shadow-sm flex items-center justify-center font-bold text-slate-700 ${sys.border}`}
                                    style={{ backgroundColor: sys.colorHex }}
                                >
                                    {sys.colorName}
                                </div>

                                {/* Color Dot */}
                                <div
                                    className={`w-16 h-16 rounded-full border-2 shadow-inner ring-4 ring-slate-50 ${sys.border || 'border-transparent'}`}
                                    style={{ backgroundColor: sys.colorHex }}
                                ></div>
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
                    <h2 className="text-3xl font-bold text-[#1B3A5A]">{getT(sectionData.subDescription)}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {[
                        "https://images.unsplash.com/photo-1588776814227-19fbaba614a0?auto=format&fit=crop&q=80&w=800",
                        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
                        "https://images.unsplash.com/photo-1445522467332-901777265886?auto=format&fit=crop&q=80&w=800"
                    ].map((src, i) => (
                        <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white relative group">
                            <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="p-8 border-l-4 border-primary bg-slate-50 rounded-r-2xl space-y-6 shadow-sm text-lg text-slate-700 leading-relaxed font-medium">
                        {applicationArea}
                    </div>
                </div>
            </section>
        </main>
    );
}
