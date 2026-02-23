import { fetchCatalogSection } from '../../../../lib/api';
import AddToCartButton from '../../../../components/AddToCartButton';

export default async function ChirurgieOPTrayPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const sectionData = await fetchCatalogSection('chirurgie-op-tray');

    if (!sectionData) {
        return <div className="p-20 text-center font-bold text-slate-400 uppercase tracking-widest">Loading Surgery Kit...</div>;
    }

    const getT = (field) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['de'] || field['en'] || '';
    };

    const categories = Array.from(new Set(sectionData.articles?.map(a => getT(a.category)) || []));

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-48">
            <header className="pt-20 px-4 md:px-12 max-w-7xl mx-auto mb-20 animate-fade-in">
                <h1 className="text-7xl font-light text-slate-200 tracking-[-0.04em] mb-12 uppercase italic">
                    {sectionData.id}
                </h1>

                <div className="bg-slate-50 border border-slate-200 rounded-[40px] p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2"></div>
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                            {getT(sectionData.title)}
                        </h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-blue-600 pl-6">
                            {getT(sectionData.description)}
                        </p>
                    </div>
                </div>
            </header>

            {/* Diagram Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-40">
                <div className="bg-white rounded-[60px] border border-slate-100 shadow-2xl p-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1B3A5A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Legend for Drills at the top */}
                        <div className="grid grid-cols-6 gap-8 mb-20 w-full max-w-4xl">
                            {['2,0mm', '2,8mm', '3,2mm', '3,8mm', '4,2mm', '5,2mm'].map((size, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 group">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ø{size}</span>
                                    <div className="w-0.5 h-32 bg-slate-200 relative group-hover:bg-blue-600 transition-colors">
                                        <div className={`absolute top-0 inset-x-[-4px] h-2 rounded-full ${i === 0 ? 'bg-slate-400' : i === 1 ? 'bg-yellow-400' : i === 2 ? 'bg-red-500' : i === 3 ? 'bg-blue-500' : i === 4 ? 'bg-green-500' : 'bg-white border'}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tray Placeholder Visualization */}
                        <div className="w-full aspect-[2/1] bg-[#F5F7FA] rounded-[60px] border-8 border-white shadow-inner relative flex items-center justify-center p-12 group">
                            <div className="absolute inset-x-12 inset-y-8 bg-slate-200/50 rounded-[40px] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Surgery Tray Architecture</p>
                                <div className="grid grid-cols-8 gap-4 opacity-30">
                                    {Array.from({ length: 24 }).map((_, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white shadow-sm"></div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Labels simulating image calls */}
                            <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Tiefensonde</p>
                            </div>
                            <div className="absolute top-12 right-20 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-slate-100 animate-pulse">
                                <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">Drehmoment-Ratsche</p>
                            </div>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                                <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
                                    {lang === 'de' ? 'Tiefensonde' : 'Depth Measurements'}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed italic">
                                    {lang === 'de' ? '8/10/11,5/13/16 ø 1,9mm/2,7mm zur Prüfung der Knochenpräparation und Sinusmembran.' : '8/10/11.5/13/16 ø 1.9mm/2.7mm for examination of bone preparation and sinus membrane.'}
                                </p>
                            </div>
                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                                <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                    {lang === 'de' ? 'Ratsche' : 'Torque Ratchet'}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed italic">
                                    {lang === 'de' ? 'Notwendig um prothetische Versorgungen mit einem definierten Drehmoment zu fixieren.' : 'Necessary to fix prosthetic restorations with a defined torque.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Table */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto">
                <div className="space-y-24">
                    {categories.map((cat, cIdx) => (
                        <div key={cIdx} className="space-y-8 animate-fade-in" style={{ animationDelay: `${cIdx * 100}ms` }}>
                            <div className="flex items-center gap-6">
                                <span className="text-4xl font-black text-slate-200">0{cIdx + 1}</span>
                                <h3 className="text-2xl font-black text-[#1B3A5A] uppercase tracking-tighter">{cat}</h3>
                                <div className="h-px bg-slate-100 flex-1"></div>
                            </div>

                            <div className="bg-white border border-slate-100 rounded-[48px] overflow-hidden shadow-2xl">
                                <div className="grid grid-cols-12 bg-slate-900 text-white p-7 text-[10px] font-black uppercase tracking-[0.3em]">
                                    <div className="col-span-2">Cat. Nr.</div>
                                    <div className="col-span-3 text-center">Visual</div>
                                    <div className="col-span-5">Product Description</div>
                                    <div className="col-span-2 text-right">Cart</div>
                                </div>

                                <div className="divide-y divide-slate-100">
                                    {sectionData.articles?.filter(a => getT(a.category) === cat).map((article, aIdx) => (
                                        <div key={aIdx} className="grid grid-cols-12 p-10 items-center gap-8 hover:bg-slate-50/80 transition-all group">
                                            <div className="col-span-2 font-black text-slate-800 text-xl tracking-tighter uppercase">{article.artNr}</div>
                                            <div className="col-span-3 flex justify-center">
                                                <div className="w-40 h-24 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-500">
                                                    {article.image ? (
                                                        <img src={article.image} alt={article.artNr} className="w-full h-full object-contain" />
                                                    ) : (
                                                        <div className="flex flex-col items-center gap-2 opacity-20">
                                                            <div className="w-16 h-1.5 bg-slate-400 rounded-full"></div>
                                                            <div className="w-10 h-1.5 bg-slate-300 rounded-full"></div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-span-5 text-slate-600 font-bold leading-relaxed italic pr-12">
                                                {getT(article.description)}
                                            </div>
                                            <div className="col-span-2 flex justify-end">
                                                <AddToCartButton
                                                    product={sectionData}
                                                    article={article}
                                                    className="!bg-[#1B3A5A] !text-white hover:!bg-blue-600 px-8 py-4 rounded-2xl shadow-xl group-hover:!bg-primary"
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

            <footer className="max-w-7xl mx-auto px-4 md:px-12 mt-40">
                <div className="p-12 bg-slate-50 rounded-[40px] border border-slate-100 text-center space-y-4">
                    <p className="text-slate-400 font-black italic uppercase tracking-[0.2em] text-sm">
                        {getT(sectionData.benefitBar)}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">© AL-Technology Dental Implant Systems. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
