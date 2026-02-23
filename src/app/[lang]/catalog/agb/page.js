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
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-48">
            <header className="pt-20 px-4 md:px-12 max-w-7xl mx-auto mb-20 animate-fade-in">
                <h1 className="text-7xl font-light text-slate-100 tracking-[-0.04em] mb-12 uppercase italic">
                    AGB
                </h1>

                <div className="bg-[#1B3A5A] rounded-[40px] p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 -skew-x-12 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            {getT(sectionData.title)}
                        </h2>
                        <div className="w-20 h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                </div>
            </header>

            <section className="px-4 md:px-12 max-w-7xl mx-auto space-y-20">
                <article className="bg-slate-50 border border-slate-100 rounded-[60px] p-16 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

                    <div className="relative z-10 max-w-4xl space-y-12">
                        <div className="space-y-8">
                            <div className="text-xl text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                                {getT(sectionData.description)}
                            </div>

                            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                                <div className="text-xl text-slate-700 font-bold leading-relaxed whitespace-pre-line">
                                    {getT(sectionData.subDescription)}
                                </div>
                            </div>

                            <div className="text-xl text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                                {getT(sectionData.applicationArea)}
                            </div>
                        </div>

                        <div className="pt-12 border-t border-slate-200">
                            <div className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] mb-8">
                                {lang === 'de' ? 'WEITERE BESTIMMUNGEN' : 'OTHER PROVISIONS'}
                            </div>
                            <div className="text-lg text-slate-500 font-bold italic whitespace-pre-line">
                                {getT(sectionData.benefitBar)}
                            </div>
                        </div>
                    </div>
                </article>

                {/* Certifications / Bottom Visual */}
                <div className="bg-[#1B3A5A] rounded-[60px] p-16 flex flex-wrap justify-center items-center gap-16 shadow-2xl">
                    {/* Placeholder for ISO/CE logos if you have them as assets, otherwise text description */}
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center mb-4 transition-transform hover:scale-110">
                            <span className="text-white font-black text-xs">ISO 9001</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center mb-4 transition-transform hover:scale-110">
                            <span className="text-white font-black text-xs">ISO 13485</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center mb-4 transition-transform hover:scale-110">
                            <span className="text-white font-black text-xs">CE 0473</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="max-w-7xl mx-auto px-4 md:px-12 mt-40">
                <div className="p-12 bg-slate-50 rounded-[40px] border border-slate-100 text-center">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-widest italic">
                        © AL-Technology Dental Implant Systems. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
