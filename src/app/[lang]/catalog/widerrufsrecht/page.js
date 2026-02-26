import { getDictionary } from '../../../../lib/get-dictionary';
import { fetchCatalogSection } from '../../../../lib/api';

export default async function WiderrufsrechtPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const sectionData = await fetchCatalogSection('widerrufsrecht');

    if (!sectionData) {
        return <div className="p-20 text-center font-bold text-slate-400 uppercase tracking-widest italic">Loading Withdrawal Info...</div>;
    }

    const getT = (field) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['de'] || field['en'] || '';
    };

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-16 md:pb-48">
            <header className="pt-8 md:pt-20 px-3 md:px-12 max-w-7xl mx-auto mb-8 md:mb-20 animate-fade-in">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-light text-slate-100 tracking-[-0.04em] mb-6 md:mb-12 uppercase italic">
                    {lang === 'de' ? 'Widerruf' : 'Withdrawal'}
                </h1>

                <div className="bg-[#1B3A5A] rounded-xl md:rounded-[40px] p-4 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 -skew-x-12 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-2 md:mb-4">
                            {getT(sectionData.title)}
                        </h2>
                        <div className="w-12 md:w-20 h-1 md:h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                </div>
            </header>

            <section className="px-3 md:px-12 max-w-7xl mx-auto space-y-8 md:space-y-20">
                <div className="bg-slate-50 border border-slate-100 rounded-xl md:rounded-[60px] p-4 md:p-16 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-blue-600"></div>

                    <div className="relative z-10 max-w-4xl space-y-6 md:space-y-12">
                        <div className="space-y-3 md:space-y-6">
                            <h3 className="text-lg md:text-3xl font-black text-[#1B3A5A] uppercase tracking-tighter">
                                {getT(sectionData.subDescription)}
                            </h3>
                            <div className="text-sm md:text-xl text-slate-600 font-medium leading-relaxed italic whitespace-pre-line">
                                {getT(sectionData.description)}
                            </div>
                        </div>

                        <div className="pt-6 md:pt-12 border-t border-slate-200">
                            <div className="text-xs md:text-lg text-slate-500 font-medium italic whitespace-pre-line">
                                {getT(sectionData.applicationArea)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="max-w-7xl mx-auto px-3 md:px-12 mt-16 md:mt-40">
                <div className="p-4 md:p-12 bg-slate-50 rounded-xl md:rounded-[40px] border border-slate-100 text-center space-y-2 md:space-y-4">
                    <p className="text-slate-400 font-black italic uppercase tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm">
                        {getT(sectionData.benefitBar)}
                    </p>
                    <p className="text-[8px] md:text-xs text-slate-400 font-medium">© AL-Technology Dental Implant Systems. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
