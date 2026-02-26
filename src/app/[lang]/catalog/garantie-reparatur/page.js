import { getDictionary } from '../../../../lib/get-dictionary';
import { fetchCatalogSection } from '../../../../lib/api';

export default async function WarrantyPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const sectionData = await fetchCatalogSection('garantie-reparatur');

    if (!sectionData) {
        return <div className="p-20 text-center font-bold text-slate-400 uppercase tracking-widest italic">Loading Warranty Info...</div>;
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
                    Warranty
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
                {/* Main Content Card */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl md:rounded-[60px] p-4 md:p-16 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-blue-600"></div>

                    <div className="relative z-10 max-w-4xl space-y-6 md:space-y-12">
                        <div className="space-y-3 md:space-y-6">
                            <p className="text-sm md:text-2xl text-slate-600 font-bold leading-relaxed italic">
                                {getT(sectionData.description).split('\n\n')[0]}
                            </p>
                            <p className="text-xs md:text-xl text-slate-500 font-medium leading-relaxed italic border-l-2 md:border-l-4 border-slate-200 pl-3 md:pl-8">
                                {getT(sectionData.description).split('\n\n')[1]}
                            </p>
                        </div>

                        <div className="pt-6 md:pt-12 border-t border-slate-200 space-y-4 md:space-y-8">
                            <h3 className="text-lg md:text-3xl font-black text-[#1B3A5A] uppercase tracking-tighter">
                                {getT(sectionData.subDescription)}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <div className="p-3 md:p-8 bg-white rounded-xl md:rounded-3xl border border-slate-100 shadow-sm space-y-2 md:space-y-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-lg md:rounded-xl flex items-center justify-center text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-slate-500 font-bold leading-relaxed italic text-xs md:text-base">
                                        {lang === 'de' ? 'Natürlich im Gewährleistung- oder Garantiefall kostenlos' : 'Of course free of charge in the event of a warranty or guarantee claim'}
                                    </p>
                                </div>
                                <div className="p-3 md:p-8 bg-white rounded-xl md:rounded-3xl border border-slate-100 shadow-sm space-y-2 md:space-y-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-red-50 rounded-lg md:rounded-xl flex items-center justify-center text-red-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <p className="text-slate-500 font-bold leading-relaxed italic text-xs md:text-base">
                                        {lang === 'de' ? 'Bitte beachten Sie die Garantiehinweise des Herstellers.' : 'Please note the manufacturer\'s warranty information.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white border-2 border-slate-900 rounded-xl md:rounded-[60px] p-4 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-16">
                    <div className="flex-1 space-y-3 md:space-y-6">
                        <h4 className="text-base md:text-2xl font-black text-[#1B3A5A] uppercase tracking-tighter italic">
                            {lang === 'de' ? 'Unsere Kundenberater helfen Ihnen gerne weiter.' : 'Our customer advisors will be happy to help you.'}
                        </h4>
                        <p className="text-sm md:text-lg text-slate-500 font-medium italic">
                            {lang === 'de' ? 'Rufen Sie uns an oder schreiben Sie eine E-Mail!' : 'Call us or write an email!'}
                        </p>
                        <a href="mailto:at-implantate@t-online.de" className="inline-block text-sm md:text-2xl font-black text-red-600 border-b-2 md:border-b-4 border-red-600 pb-0.5 md:pb-1 hover:text-red-700 transition-colors break-all">
                            at-implantate@t-online.de
                        </a>
                    </div>
                    <div className="flex-1 w-full bg-slate-50 rounded-xl md:rounded-[40px] p-4 md:p-10 space-y-4 md:space-y-8">
                        <h5 className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">
                            {lang === 'de' ? 'BENÖTIGTE INFORMATIONEN' : 'REQUIRED INFORMATION'}
                        </h5>
                        <ul className="space-y-2 md:space-y-4">
                            {[
                                lang === 'de' ? 'Rechnungsnummer' : 'Invoice Number',
                                lang === 'de' ? 'Datum der Rechnung' : 'Invoice Date',
                                lang === 'de' ? 'Gerätetyp' : 'Device Type'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 md:gap-4 text-slate-700 font-bold text-sm md:text-lg italic">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
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
