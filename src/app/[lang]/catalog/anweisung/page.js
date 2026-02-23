import { getDictionary } from '../../../../lib/get-dictionary';
import { fetchCatalogSection } from '../../../../lib/api';

export default async function InstructionsPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    const sectionData = await fetchCatalogSection('anweisung');

    if (!sectionData) {
        return <div className="p-20 text-center font-bold text-slate-400 uppercase tracking-widest">Loading Instructions...</div>;
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

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-48">
            <header className="pt-20 px-4 md:px-12 max-w-7xl mx-auto mb-16">
                <h1 className="text-6xl font-light text-slate-800 tracking-[-0.02em] font-sans mb-16">
                    {name}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-6">
                        <h2 className="text-[#1B3A5A] font-bold text-lg uppercase tracking-tight">
                            {getT(sectionData.title)}
                        </h2>
                        <p className="text-red-600 font-bold mb-8">
                            {description.split(': ')[0]}: <span className="text-slate-900">{description.split(': ')[1]}</span>
                        </p>
                    </div>
                </div>
            </header>

            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-24">
                <h3 className="text-red-600 font-black text-2xl mb-8">{subDescription}</h3>
                <div className="prose prose-lg text-slate-700 max-w-none whitespace-pre-wrap">
                    {applicationArea}
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-12 mt-32">
                <p className="text-slate-400 font-bold italic border-t border-slate-100 pt-8 uppercase tracking-widest text-sm text-center">
                    {getT(sectionData.benefitBar)}
                </p>
            </div>
        </main>
    );
}
