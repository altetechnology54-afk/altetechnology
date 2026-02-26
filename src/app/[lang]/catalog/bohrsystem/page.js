import { getDictionary } from '@/lib/get-dictionary';
import { fetchCatalogSection } from '@/lib/api';
import AddToCartButton from '@/components/AddToCartButton';

export default async function BohrsystemPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const sectionData = await fetchCatalogSection('bohrsystem');

    if (!sectionData) {
        return <div className="p-20 text-center font-bold text-slate-400 uppercase tracking-widest">Loading Drilling System...</div>;
    }

    const getT = (field) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['de'] || field['en'] || '';
    };

    const name = getT(sectionData.name);
    const title = getT(sectionData.title);
    const description = getT(sectionData.description);
    const subDescription = getT(sectionData.subDescription);
    const applicationArea = getT(sectionData.applicationArea);

    const drillSets = [
        { length: '10mm', title: lang === 'de' ? 'Länge / Length 10mm\nfor 10 mm Implantlength' : 'Length 10mm\nfor 10 mm Implantlength', stopper: 'Stopper 10mm' },
        { length: '11,5mm', title: lang === 'de' ? 'Länge / Length 11,5mm\nfor 11,5 mm Implantlength' : 'Length 11.5mm\nfor 11.5 mm Implantlength', stopper: 'Stopper 11,5mm' },
        { length: '13mm', title: lang === 'de' ? 'Länge / Length 13mm\nfor 13 mm Implantlength' : 'Length 13mm\nfor 13 mm Implantlength', stopper: 'Stopper 13mm' }
    ];

    // Group articles by category
    const categories = Array.from(new Set(sectionData.articles?.map(a => getT(a.category)) || []));

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-16 md:pb-48 overflow-x-hidden">
            {/* Legend / Info Header */}
            <header className="pt-4 md:pt-20 px-2 md:px-6 lg:px-12 mb-6 md:mb-20 animate-fade-in">
                <h1 className="text-lg md:text-4xl lg:text-7xl font-light text-slate-200 tracking-[-0.04em] mb-4 md:mb-12 uppercase">
                    {sectionData.id}
                </h1>

                <div className="grid grid-cols-1 gap-1 px-1 bg-slate-100 border border-slate-200 rounded-lg md:rounded-2xl overflow-hidden shadow-2xl">
                    <div className="bg-[#E8EAF6] p-3 md:p-8 lg:p-12 space-y-2 md:space-y-6">
                        <h2 className="text-[#1B3A5A] font-black text-sm md:text-xl lg:text-2xl uppercase tracking-tighter">
                            {title}
                        </h2>
                        <div className="space-y-2 md:space-y-4 text-slate-700 font-medium leading-relaxed text-[10px] md:text-sm lg:text-base">
                            <p className="border-l-2 border-blue-600 pl-2">{description}</p>
                            <p>{subDescription}</p>
                            <p className="text-[9px] md:text-xs lg:text-sm italic text-slate-500">{applicationArea}</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Drill Sets Section */}
            <div className="space-y-6 md:space-y-16 lg:space-y-32 mb-8 md:mb-40">
                {drillSets.map((set, sIdx) => (
                    <section key={sIdx} className="px-2 md:px-6 lg:px-12">
                        <div className="flex flex-col gap-3 md:gap-8 items-start">
                            <div className="w-full space-y-1 md:space-y-4">
                                <h3 className="text-xs md:text-xl lg:text-3xl font-black text-slate-800 whitespace-pre-line leading-tight">
                                    {set.title}
                                </h3>
                            </div>
                            <div className="w-full bg-[#DDE2EF] rounded-xl md:rounded-3xl lg:rounded-[60px] p-3 md:p-8 lg:p-12 shadow-inner border border-white/50 flex justify-between items-end relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent"></div>
                                <div className="flex justify-between items-end w-full">
                                    {sectionData.variants?.map((v, vIdx) => (
                                        <div key={vIdx} className="flex flex-col items-center gap-1 md:gap-4 group/drill relative z-10 transition-all hover:-translate-y-4">
                                            <div className="relative h-16 md:h-40 lg:h-64 w-8 md:w-16 lg:w-24 flex items-center justify-center">
                                                {v.implantImage || v.boxImage ? (
                                                    <img
                                                        src={v.implantImage || v.boxImage}
                                                        alt={`Drill ø${v.diameter}`}
                                                        className="w-full h-full object-contain filter drop-shadow-lg"
                                                    />
                                                ) : (
                                                    <div className="w-0.5 md:w-1 lg:w-1.5 h-full bg-slate-300 rounded-full relative overflow-hidden shadow-sm">
                                                        <div className="absolute top-2 md:top-6 lg:top-10 inset-x-0 h-0.5" style={{ backgroundColor: v.hex }}></div>
                                                        <div className="absolute bottom-1 md:bottom-3 lg:bottom-4 inset-x-0 h-3 md:h-6 lg:h-10 bg-gradient-to-b from-slate-400 to-slate-200 skew-y-12"></div>
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-[8px] md:text-[10px] lg:text-xs font-black text-slate-900 bg-white/60 px-1 md:px-2 lg:px-3 py-0.5 rounded-full shadow-sm border border-white">
                                                ø{v.diameter}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Detailed Articles Table */}
            <section className="px-2 md:px-6 lg:px-12 border-t border-slate-100 pt-6 md:pt-16 lg:pt-32">
                <header className="mb-4 md:mb-10 lg:mb-16">
                    <div className="space-y-2">
                        <h2 className="text-base md:text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase italic">{lang === 'de' ? 'Artikelübersicht' : 'Article Overview'}</h2>
                        <div className="h-0.5 md:h-1 lg:h-1.5 w-12 md:w-20 lg:w-24 bg-blue-600 rounded-full"></div>
                    </div>
                </header>

                <div className="space-y-4 md:space-y-10 lg:space-y-20">
                    {categories.map((cat, cIdx) => (
                        <div key={cIdx} className="space-y-2 md:space-y-4">
                            <h3 className="text-[10px] md:text-base lg:text-xl font-black text-blue-900 tracking-tight flex items-center gap-1 md:gap-3 uppercase bg-slate-50 p-1.5 md:p-3 lg:p-4 rounded-lg md:rounded-xl border border-slate-100">
                                <span className="w-0.5 md:w-1.5 h-3 md:h-6 bg-blue-600 rounded-full"></span>
                                {cat}
                            </h3>
                            <div className="divide-y divide-slate-100 border border-slate-100 rounded-lg md:rounded-2xl lg:rounded-[40px] overflow-hidden bg-white shadow-xl">
                                {sectionData.articles?.filter(a => getT(a.category) === cat).map((article, aIdx) => (
                                    <div key={aIdx} className="flex flex-col p-2 md:p-4 lg:p-8 items-start gap-1.5 md:gap-3 hover:bg-slate-50 transition-colors group">
                                        <div className="flex items-center gap-2 md:gap-4 w-full">
                                            <div className="font-black text-slate-800 text-[10px] md:text-sm lg:text-lg uppercase">{article.artNr}</div>
                                            <div className="w-12 h-8 md:w-24 md:h-14 lg:w-32 lg:h-20 bg-slate-50 rounded-md md:rounded-xl border border-slate-100 overflow-hidden shadow-sm flex-shrink-0">
                                                {article.image ? (
                                                    <img src={article.image} alt={article.artNr} className="w-full h-full object-contain" />
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center space-y-0.5">
                                                        <div className="w-8 md:w-16 h-0.5 bg-slate-300 rounded-full"></div>
                                                        <div className="w-6 md:w-12 h-0.5 bg-slate-200 rounded-full"></div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-slate-600 font-medium leading-relaxed italic text-[8px] md:text-xs lg:text-sm">
                                            {getT(article.description)}
                                        </div>
                                        <div className="flex justify-start mt-1">
                                            <AddToCartButton
                                                product={sectionData}
                                                article={article}
                                                className="!bg-orange-600 !text-white hover:!bg-orange-700 px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 rounded-md md:rounded-lg shadow-lg shadow-orange-500/20 text-[8px] md:text-xs lg:text-sm"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="px-2 md:px-6 lg:px-12 mt-8 md:mt-24 lg:mt-48">
                <p className="text-slate-400 font-bold italic border-t border-slate-100 pt-3 md:pt-6 uppercase tracking-widest text-[8px] md:text-[10px] lg:text-sm text-center">
                    {getT(sectionData.benefitBar)}
                </p>
            </div>
        </main>
    );
}
