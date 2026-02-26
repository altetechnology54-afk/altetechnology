import { getDictionary } from '../../../../lib/get-dictionary';
import { fetchCatalogSection } from '../../../../lib/api';

export default async function BezahlungPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const sectionData = await fetchCatalogSection('bezahlung');

    if (!sectionData) {
        return <div className="p-20 text-center font-bold text-slate-400 uppercase tracking-widest italic">Loading Payment Info...</div>;
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
                    {lang === 'de' ? 'Bezahlung' : 'Payment'}
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
                <div className="bg-slate-50 border border-slate-100 rounded-lg md:rounded-2xl lg:rounded-[60px] p-3 md:p-8 lg:p-16 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-0.5 md:w-1.5 h-full bg-blue-600"></div>

                    <div className="relative z-10 space-y-3 md:space-y-8 lg:space-y-12">
                        <div className="space-y-2 md:space-y-4">
                            <h3 className="text-sm md:text-xl lg:text-3xl font-black text-[#1B3A5A] uppercase tracking-tighter">
                                {getT(sectionData.subDescription)}
                            </h3>
                            <div className="text-[10px] md:text-base lg:text-xl text-slate-600 font-medium leading-relaxed italic whitespace-pre-line">
                                {getT(sectionData.description)}
                            </div>
                        </div>

                        <div className="pt-3 md:pt-8 lg:pt-12 border-t border-slate-200">
                            <div className="text-[9px] md:text-sm lg:text-lg text-slate-500 font-medium italic whitespace-pre-line">
                                {getT(sectionData.applicationArea)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border-2 border-slate-900 rounded-lg md:rounded-2xl lg:rounded-[60px] p-3 md:p-8 lg:p-16 shadow-2xl">
                    <div className="space-y-2 md:space-y-4">
                        <h4 className="text-xs md:text-lg lg:text-2xl font-black text-[#1B3A5A] uppercase tracking-tighter italic">
                            {lang === 'de' ? 'Haben Sie Fragen zur Abrechnung?' : 'Do you have questions about billing?'}
                        </h4>
                        <p className="text-[10px] md:text-sm lg:text-lg text-slate-500 font-medium italic">
                            {lang === 'de' ? 'Kontaktieren Sie unser Team.' : 'Contact our team.'}
                        </p>
                        <a href="mailto:at-implantate@t-online.de" className="inline-block text-[10px] md:text-base lg:text-2xl font-black text-red-600 border-b md:border-b-2 lg:border-b-4 border-red-600 pb-0.5 hover:text-red-700 transition-colors break-all">
                            at-implantate@t-online.de
                        </a>
                    </div>
                </div>
            </section>

            <footer className="px-2 md:px-6 lg:px-12 mt-8 md:mt-20 lg:mt-40">
                <div className="p-3 md:p-8 lg:p-12 bg-slate-50 rounded-lg md:rounded-2xl lg:rounded-[40px] border border-slate-100 text-center space-y-1 md:space-y-3">
                    <p className="text-slate-400 font-black italic uppercase tracking-[0.05em] md:tracking-[0.1em] text-[8px] md:text-[10px] lg:text-sm">
                        {getT(sectionData.benefitBar)}
                    </p>
                    <p className="text-[6px] md:text-[10px] lg:text-xs text-slate-400 font-medium">© AL-Technology Dental Implant Systems.</p>
                </div>
            </footer>
        </main>
    );
}
