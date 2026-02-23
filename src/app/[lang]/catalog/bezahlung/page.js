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
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-48">
            <header className="pt-20 px-4 md:px-12 max-w-7xl mx-auto mb-20 animate-fade-in">
                <h1 className="text-7xl font-light text-slate-100 tracking-[-0.04em] mb-12 uppercase italic">
                    {lang === 'de' ? 'Bezahlung' : 'Payment'}
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
                <div className="bg-slate-50 border border-slate-100 rounded-[60px] p-16 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

                    <div className="relative z-10 max-w-4xl space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-black text-[#1B3A5A] uppercase tracking-tighter">
                                {getT(sectionData.subDescription)}
                            </h3>
                            <div className="text-xl text-slate-600 font-medium leading-relaxed italic whitespace-pre-line">
                                {getT(sectionData.description)}
                            </div>
                        </div>

                        <div className="pt-12 border-t border-slate-200">
                            <div className="text-lg text-slate-500 font-medium italic whitespace-pre-line">
                                {getT(sectionData.applicationArea)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border-2 border-slate-900 rounded-[60px] p-16 shadow-2xl flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-6">
                        <h4 className="text-2xl font-black text-[#1B3A5A] uppercase tracking-tighter italic">
                            {lang === 'de' ? 'Haben Sie Fragen zur Abrechnung?' : 'Do you have questions about billing?'}
                        </h4>
                        <p className="text-lg text-slate-500 font-medium italic">
                            {lang === 'de' ? 'Kontaktieren Sie unser Team.' : 'Contact our team.'}
                        </p>
                        <a href="mailto:at-implantate@t-online.de" className="inline-block text-2xl font-black text-red-600 border-b-4 border-red-600 pb-1 hover:text-red-700 transition-colors">
                            at-implantate@t-online.de
                        </a>
                    </div>
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
