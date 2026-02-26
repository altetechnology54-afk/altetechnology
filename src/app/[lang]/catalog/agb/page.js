import { getDictionary } from '../../../../lib/get-dictionary';
import { fetchCatalogSection } from '../../../../lib/api';

export default async function AgbPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const sectionData = await fetchCatalogSection('agb');

    if (!sectionData) {
        return <div className="p-20 text-center font-bold text-slate-400 uppercase tracking-widest italic">Loading AGB...</div>;
    }

    const getT = (field) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['de'] || field['en'] || '';
    };

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-10 md:pb-48 overflow-x-hidden">
            <header className="pt-4 md:pt-12 lg:pt-20 px-2 md:px-6 lg:px-12 mb-4 md:mb-12 lg:mb-20 animate-fade-in">
                <h1 className="text-lg md:text-4xl lg:text-7xl font-light text-slate-100 tracking-[-0.04em] mb-3 md:mb-8 lg:mb-12 uppercase italic">
                    AGB
                </h1>

                <div className="bg-[#1B3A5A] rounded-lg md:rounded-2xl lg:rounded-[40px] p-3 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 -skew-x-12 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-sm md:text-2xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-1 md:mb-3">
                            {getT(sectionData.title)}
                        </h2>
                        <div className="w-8 md:w-16 lg:w-20 h-0.5 md:h-1 lg:h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                </div>
            </header>

            <section className="px-2 md:px-6 lg:px-12 space-y-4 md:space-y-12 lg:space-y-20">
                <article className="bg-slate-50 border border-slate-100 rounded-lg md:rounded-2xl lg:rounded-[60px] p-3 md:p-8 lg:p-16 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-0.5 md:w-1.5 h-full bg-blue-600"></div>

                    <div className="relative z-10 space-y-3 md:space-y-8 lg:space-y-12">
                        <div className="space-y-2 md:space-y-6">
                            <div className="text-[10px] md:text-base lg:text-xl text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                                {getT(sectionData.description)}
                            </div>

                            <div className="p-2 md:p-5 lg:p-8 bg-white border border-slate-200 rounded-lg md:rounded-2xl shadow-sm">
                                <div className="text-[10px] md:text-base lg:text-xl text-slate-700 font-bold leading-relaxed whitespace-pre-line">
                                    {getT(sectionData.subDescription)}
                                </div>
                            </div>

                            <div className="text-[10px] md:text-base lg:text-xl text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                                {getT(sectionData.applicationArea)}
                            </div>
                        </div>

                        <div className="pt-3 md:pt-8 lg:pt-12 border-t border-slate-200">
                            <div className="text-[6px] md:text-[10px] lg:text-sm font-black text-slate-400 uppercase tracking-[0.1em] md:tracking-[0.2em] mb-2 md:mb-5">
                                {lang === 'de' ? 'WEITERE BESTIMMUNGEN' : 'OTHER PROVISIONS'}
                            </div>
                            <div className="text-[9px] md:text-sm lg:text-lg text-slate-500 font-bold italic whitespace-pre-line">
                                {getT(sectionData.benefitBar)}
                            </div>
                        </div>
                    </div>
                </article>

                {/* Certifications / Bottom Visual */}
                <div className="bg-[#1B3A5A] rounded-lg md:rounded-2xl lg:rounded-[60px] p-4 md:p-10 lg:p-16 flex flex-wrap justify-center items-center gap-3 md:gap-10 lg:gap-16 shadow-2xl">
                    <div className="text-center">
                        <div className="w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full border md:border-2 lg:border-4 border-white/20 flex items-center justify-center transition-transform hover:scale-110">
                            <span className="text-white font-black text-[6px] md:text-[9px] lg:text-xs">ISO 9001</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full border md:border-2 lg:border-4 border-white/20 flex items-center justify-center transition-transform hover:scale-110">
                            <span className="text-white font-black text-[6px] md:text-[9px] lg:text-xs">ISO 13485</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full border md:border-2 lg:border-4 border-white/20 flex items-center justify-center transition-transform hover:scale-110">
                            <span className="text-white font-black text-[6px] md:text-[9px] lg:text-xs">CE 0473</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="px-2 md:px-6 lg:px-12 mt-8 md:mt-20 lg:mt-40">
                <div className="p-3 md:p-8 lg:p-12 bg-slate-50 rounded-lg md:rounded-2xl lg:rounded-[40px] border border-slate-100 text-center">
                    <p className="text-[6px] md:text-[10px] lg:text-xs text-slate-400 font-medium uppercase tracking-widest italic">
                        © AL-Technology Dental Implant Systems.
                    </p>
                </div>
            </footer>
        </main>
    );
}
