import { getDictionary } from '../../../../lib/get-dictionary';
import { fetchCatalogSection } from '../../../../lib/api';
import AddToCartButton from '@/components/AddToCartButton';

export default async function FarbleitsystemPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    console.log('Fetching catalog section: farbleitsystem');
    const sectionData = await fetchCatalogSection('farbleitsystem');
    console.log('Section data received:', sectionData ? 'SUCCESS' : 'FAILURE');

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

    const systems = (sectionData.variants || []).map(v => ({
        diameter: v.diameter + (v.diameter && !v.diameter.includes('mm') ? ' mm' : ''),
        colorName: v.color || (v.hex === '#FFEB3B' ? 'gelb' : v.hex === '#F44336' ? 'rot' : v.hex === '#03A9F4' ? 'blau' : v.hex === '#4CAF50' ? 'grün' : 'weiss'),
        colorHex: v.hex || '#FFFFFF',
        color: `bg-[${v.hex}]`,
        border: v.hex === '#FFFFFF' ? 'border-slate-800' : '',
        boxImage: v.boxImage,
        implantImage: v.implantImage
    }));

    const categories = Array.from(new Set(sectionData.articles?.map(a => getT(a.category)) || []));

    // Fallback image for component details if not provided
    const heroImage = sectionData.images?.hero || "https://images.unsplash.com/photo-1588776814227-19fbaba614a0?auto=format&fit=crop&q=80&w=800";

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-16 md:pb-48">
            {/* Header */}
            <header className="pt-8 md:pt-20 px-3 md:px-12 max-w-7xl mx-auto mb-8 md:mb-16">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-light text-slate-800 tracking-[-0.02em] font-sans mb-6 md:mb-16">
                    {getT(sectionData.name)}
                </h1>

                <div className="space-y-1 md:space-y-2">
                    <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#1B3A5A]">{title.split(' / ')[0]}</h2>
                    <h3 className="text-base md:text-xl lg:text-2xl font-bold text-[#1B3A5A] italic">
                        {title.includes(' / ') ? title.split(' / ')[0] : title} / <span className="text-slate-500 font-normal not-italic">{subTitle}</span>
                    </h3>
                </div>
            </header>

            {/* Implant Grid Section */}
            <section className="px-3 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32">
                <div className="hidden md:grid grid-cols-[150px_1fr] gap-8">
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
                                    {sys.boxImage ? (
                                        <img
                                            src={sys.boxImage}
                                            alt={`Packaging ${sys.colorName}`}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center opacity-30">
                                            <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Box Asset</span>
                                            </div>
                                        </div>
                                    )}
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

                {/* Mobile Color Grid */}
                <div className="md:hidden grid grid-cols-3 gap-3">
                    {systems.map((sys, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-2 p-2 bg-slate-50 rounded-xl">
                            <div
                                className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[8px] font-black ring-2 ring-white ${sys.border}`}
                                style={{ backgroundColor: sys.colorHex }}
                            >
                                <span className="bg-white/40 px-1 py-0.5 rounded">{sys.diameter}</span>
                            </div>
                            <div
                                className={`w-full py-1 rounded shadow-sm flex items-center justify-center font-bold text-[10px] text-slate-700 ${sys.border}`}
                                style={{ backgroundColor: sys.colorHex }}
                            >
                                {sys.colorName}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Component Detail Section */}
            <section className="px-3 md:px-12 max-w-7xl mx-auto mb-16 md:mb-40 border-t border-slate-100 pt-8 md:pt-24 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start">
                    <div className="space-y-3 md:space-y-6">
                        <div className="bg-slate-100 p-2 md:p-4 rounded inline-block font-bold text-slate-700 border border-slate-200 text-xs md:text-base">Tube in Tube</div>
                        <div className="mx-auto max-w-[120px] md:max-w-[200px] aspect-[1/2] rounded-xl md:rounded-3xl overflow-hidden shadow-2xl relative border-4 md:border-8 border-white bg-slate-50">
                            <img src={sectionData.images?.tubeInTube || heroImage} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-3 md:space-y-6">
                        <div className="bg-slate-100 p-2 md:p-4 rounded inline-block font-bold text-slate-700 border border-slate-200 text-center text-[10px] md:text-sm h-[50px] md:h-[80px] flex items-center justify-center">
                            Inklusive Einbringhilfe<br />(Insert Mount)
                        </div>
                        <div className="mx-auto max-w-[120px] md:max-w-[200px] aspect-[1/2] rounded-xl md:rounded-3xl overflow-hidden shadow-2xl relative border-4 md:border-8 border-white bg-slate-50 flex items-center justify-center p-4 md:p-8">
                            <img src={sectionData.images?.insertMount || heroImage} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-3 md:space-y-6">
                        <div className="bg-slate-100 p-2 md:p-4 rounded inline-block font-bold text-slate-700 border border-slate-200 text-[10px] md:text-sm h-[50px] md:h-[80px] flex items-center justify-center">
                            Inklusive Deckschraube
                        </div>
                        <div className="mx-auto max-w-[120px] md:max-w-[200px] aspect-[1/2] rounded-xl md:rounded-3xl overflow-hidden shadow-2xl relative border-4 md:border-8 border-white bg-slate-50">
                            <img src={sectionData.images?.deckschraube || heroImage} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Table (Same as bohrsystem/chirurgie-op-tray) */}
            {categories.length > 0 && (
                <section className="px-3 md:px-12 max-w-7xl mx-auto mb-16 md:mb-40">
                    <div className="space-y-8 md:space-y-24">
                        {categories.map((cat, cIdx) => (
                            <div key={cIdx} className="space-y-4 md:space-y-8 animate-fade-in" style={{ animationDelay: `${cIdx * 100}ms` }}>
                                <div className="flex items-center gap-3 md:gap-6">
                                    <span className="text-xl md:text-4xl font-black text-slate-200">0{cIdx + 1}</span>
                                    <h3 className="text-sm md:text-2xl font-black text-[#1B3A5A] uppercase tracking-tighter">{cat}</h3>
                                    <div className="h-px bg-slate-100 flex-1"></div>
                                </div>

                                <div className="bg-white border border-slate-100 rounded-xl md:rounded-[48px] overflow-hidden shadow-2xl">
                                    <div className="hidden md:grid grid-cols-12 bg-slate-900 text-white p-7 text-[10px] font-black uppercase tracking-[0.3em]">
                                        <div className="col-span-2">Cat. Nr.</div>
                                        <div className="col-span-3 text-center">Visual</div>
                                        <div className="col-span-5">Product Description</div>
                                        <div className="col-span-2 text-right">Cart</div>
                                    </div>

                                    <div className="divide-y divide-slate-100">
                                        {sectionData.articles?.filter(a => getT(a.category) === cat).map((article, aIdx) => (
                                            <div key={aIdx} className="flex flex-col md:grid md:grid-cols-12 p-3 md:p-10 items-start md:items-center gap-2 md:gap-8 hover:bg-slate-50/80 transition-all group">
                                                <div className="md:col-span-2 font-black text-slate-800 text-sm md:text-xl tracking-tighter uppercase">{article.artNr}</div>
                                                <div className="md:col-span-3 flex justify-start md:justify-center">
                                                    <div className="w-20 h-14 md:w-40 md:h-24 bg-white rounded-lg md:rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center p-2 md:p-4 group-hover:scale-110 transition-transform duration-500">
                                                        {article.image ? (
                                                            <img src={article.image} alt={article.artNr} className="w-full h-full object-contain" />
                                                        ) : (
                                                            <div className="flex flex-col items-center gap-1 md:gap-2 opacity-20">
                                                                <div className="w-10 md:w-16 h-1 md:h-1.5 bg-slate-400 rounded-full"></div>
                                                                <div className="w-6 md:w-10 h-1 md:h-1.5 bg-slate-300 rounded-full"></div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="md:col-span-5 text-slate-600 font-bold leading-relaxed italic text-[10px] md:text-base md:pr-12">
                                                    {getT(article.description)}
                                                </div>
                                                <div className="md:col-span-2 flex justify-start md:justify-end mt-2 md:mt-0">
                                                    <AddToCartButton
                                                        product={sectionData}
                                                        article={article}
                                                        className="!bg-[#1B3A5A] !text-white hover:!bg-blue-600 px-3 md:px-8 py-2 md:py-4 rounded-lg md:rounded-2xl shadow-xl group-hover:!bg-primary text-xs md:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Drill Section */}
            <section className="px-3 md:px-12 max-w-7xl mx-auto">
                <div className="space-y-4 md:space-y-8 mb-8 md:mb-16">
                    <h2 className="text-xl md:text-3xl font-bold text-[#1B3A5A]">{getT(sectionData.subDescription)}</h2>
                </div>

                <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-6xl mx-auto mb-8 md:mb-16">
                    {(sectionData.images?.extraImages?.length > 0 ? sectionData.images.extraImages : [
                        heroImage,
                        heroImage,
                        heroImage
                    ]).map((src, i) => (
                        <div key={i} className="aspect-[3/4] rounded-lg md:rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white relative group">
                            <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="p-4 md:p-8 border-l-4 border-primary bg-slate-50 rounded-r-xl md:rounded-r-2xl space-y-3 md:space-y-6 shadow-sm text-sm md:text-lg text-slate-700 leading-relaxed font-medium">
                        {applicationArea}
                    </div>
                </div>
            </section>
        </main>
    );
}
