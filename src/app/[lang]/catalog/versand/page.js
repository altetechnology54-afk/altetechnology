import { getDictionary } from '../../../../lib/get-dictionary';
import { fetchCatalogSection } from '../../../../lib/api';

export default async function VersandPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

 

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-16 md:pb-48">
            <header className="pt-8 md:pt-20 px-3 md:px-12 max-w-7xl mx-auto mb-8 md:mb-20 animate-fade-in">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-light text-slate-100 tracking-[-0.04em] mb-6 md:mb-12 uppercase italic">
                    {lang === 'de' ? 'Versand' : 'Shipping'}
                </h1>

             
            </header>

        </main>
    );
}
