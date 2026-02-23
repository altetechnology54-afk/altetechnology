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
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-48">
            {/* Legend / Info Header */}
            <header className="pt-20 px-4 md:px-12 max-w-7xl mx-auto mb-20 animate-fade-in">
                <h1 className="text-7xl font-light text-slate-200 tracking-[-0.04em] mb-12 uppercase">
                    {sectionData.id}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="bg-[#E8EAF6] p-12 space-y-6">
                        <h2 className="text-[#1B3A5A] font-black text-2xl uppercase tracking-tighter">
                            {sectionData.title.de}
                        </h2>
                        <div className="space-y-4 text-slate-700 font-medium leading-relaxed">
                            <p className="border-l-4 border-blue-600 pl-4">{sectionData.description.de}</p>
                            <p>{sectionData.subDescription.de}</p>
                            <p className="text-sm italic text-slate-500">{sectionData.applicationArea.de}</p>
                        </div>
                    </div>
                    <div className="bg-white p-12 space-y-6 border-l border-slate-100">
                        <h2 className="text-slate-900 font-black text-2xl uppercase tracking-tighter">
                            {sectionData.title.en}
                        </h2>
                        <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                            <p className="border-l-4 border-slate-200 pl-4">{sectionData.description.en}</p>
                            <p>{sectionData.subDescription.en}</p>
                            <p className="text-sm italic text-slate-400">{sectionData.applicationArea.en}</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Drill Sets Section */}
            <div className="space-y-32 mb-40">
                {drillSets.map((set, sIdx) => (
                    <section key={sIdx} className="px-4 md:px-12 max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/3 space-y-4">
                                <h3 className="text-3xl font-black text-slate-800 whitespace-pre-line leading-tight">
                                    {set.title}
                                </h3>
                                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
                                    {set.stopper} -------------------------------------------
                                </p>
                            </div>
                            <div className="w-full md:w-2/3 bg-[#DDE2EF] rounded-[60px] p-12 shadow-inner border border-white/50 flex justify-between items-end relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent"></div>
                                {sectionData.variants?.map((v, vIdx) => (
                                    <div key={vIdx} className="flex flex-col items-center gap-6 group/drill relative z-10 transition-all hover:-translate-y-4">
                                        <div className="relative h-64 w-12 flex items-center justify-center">
                                            {/* Drill Image Placeholder / Vector */}
                                            <div className="w-1.5 h-full bg-slate-300 rounded-full relative overflow-hidden shadow-sm">
                                                <div className="absolute top-10 inset-x-0 h-1" style={{ backgroundColor: v.hex }}></div>
                                                <div className="absolute bottom-4 inset-x-0 h-10 bg-gradient-to-b from-slate-400 to-slate-200 skew-y-12"></div>
                                            </div>
                                            <div className="absolute -bottom-2 text-[10px] font-black text-slate-800 tracking-tighter whitespace-nowrap bg-white/80 px-2 py-0.5 rounded shadow-sm opacity-0 group-hover/drill:opacity-100 transition-opacity">
                                                AL-TECH
                                            </div>
                                        </div>
                                        <span className="text-xs font-black text-slate-900 bg-white/60 px-3 py-1 rounded-full shadow-sm border border-white">
                                            ø{v.diameter}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Detailed Articles Table */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto border-t border-slate-100 pt-32">
                <header className="mb-16 flex items-end justify-between">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">{lang === 'de' ? 'Artikelübersicht' : 'Article Overview'}</h2>
                        <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs hidden md:block">
                        {lang === 'de' ? 'Klicken Sie auf Cat.Nr. für Details' : 'Click Cat.Nr. for details'}
                    </p>
                </header>

                <div className="space-y-20">
                    {categories.map((cat, cIdx) => (
                        <div key={cIdx} className="space-y-6">
                            <h3 className="text-xl font-black text-blue-900 tracking-tight flex items-center gap-4 uppercase bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                                {cat}
                            </h3>
                            <div className="divide-y divide-slate-100 border border-slate-100 rounded-[40px] overflow-hidden bg-white shadow-xl">
                                <div className="grid grid-cols-12 bg-slate-50/80 p-6 text-[11px] font-black text-blue-900 uppercase tracking-widest border-b border-slate-100">
                                    <div className="col-span-2">Art. Nr.</div>
                                    <div className="col-span-3 text-center">{lang === 'de' ? 'Ansicht' : 'View'}</div>
                                    <div className="col-span-5">{lang === 'de' ? 'Artikelbeschreibung' : 'Description'}</div>
                                    <div className="col-span-2 text-right">Action</div>
                                </div>
                                {sectionData.articles?.filter(a => getT(a.category) === cat).map((article, aIdx) => (
                                    <div key={aIdx} className="grid grid-cols-12 p-8 items-center gap-8 hover:bg-slate-50 transition-colors group">
                                        <div className="col-span-2 font-black text-slate-800 text-lg uppercase">{article.artNr}</div>
                                        <div className="col-span-3 flex justify-center">
                                            <div className="w-32 h-20 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm group-hover:scale-110 transition-transform">
                                                {article.image ? (
                                                    <img src={article.image} alt={article.artNr} className="w-full h-full object-contain" />
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center space-y-1">
                                                        <div className="w-20 h-1 bg-slate-300 rounded-full"></div>
                                                        <div className="w-16 h-1 bg-slate-200 rounded-full"></div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-span-5 text-slate-600 font-medium leading-relaxed italic text-sm">
                                            {getT(article.description)}
                                        </div>
                                        <div className="col-span-2 flex justify-end">
                                            <AddToCartButton
                                                product={sectionData}
                                                article={article}
                                                className="!bg-orange-600 !text-white hover:!bg-orange-700 px-6 py-3 rounded-xl shadow-lg shadow-orange-500/20"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-12 mt-48">
                <p className="text-slate-400 font-bold italic border-t border-slate-100 pt-8 uppercase tracking-widest text-sm text-center">
                    {getT(sectionData.benefitBar)}
                </p>
            </div>
        </main>
    );
}
