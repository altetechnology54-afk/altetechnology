import { getDictionary } from '@/lib/get-dictionary';
import Link from 'next/link';
import { fetchCatalogSections, fetchHomeSections } from '@/lib/api';
import HeroSlider from '@/components/HeroSlider';
import HomeFeatures from '@/components/HomeFeatures';
import HomeStats from '@/components/HomeStats';
import HomeAbout from '@/components/HomeAbout';

export default async function Home({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    // Fetch dynamic products from API
    const products = await fetchCatalogSections();

    // Fetch all active home sections
    const homeSections = await fetchHomeSections();

    return (
        <main className="min-h-screen bg-slate-50/50">
            {homeSections.map((section) => {
                switch (section.type) {
                    case 'hero-slider':
                        return <HeroSlider key={section.section} data={section.data} lang={lang} />;
                    case 'features':
                        return <HomeFeatures key={section.section} data={section.data} lang={lang} />;
                    case 'stats':
                        return <HomeStats key={section.section} data={section.data} lang={lang} />;
                    case 'about':
                        return <HomeAbout key={section.section} data={section.data} lang={lang} />;
                    default:
                        return null;
                }
            })}

            {/* Product Categories - Kept as a core section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 mb-4">
                        Unsere <span className="text-primary">Produktsysteme</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="card-hover bg-white p-8 rounded-[40px] border border-slate-200 flex flex-col items-center text-center">
                            <div className="w-full aspect-square bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden">
                                {product.images?.hero ? (
                                    <img src={product.images.hero} alt={product.name} className="w-full h-full object-contain p-4" />
                                ) : (
                                    <div className="text-slate-300 font-black text-6xl uppercase tracking-tighter">
                                        {product.name?.[0] || product.id?.[0]}
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">
                                {product.name?.[lang] || product.id}
                            </h3>
                            <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-2">
                                {product.description?.[lang]}
                            </p>
                            <Link href={`/${lang}/catalog/${product.id}`} className="mt-auto bg-slate-100 text-slate-700 px-6 py-3 rounded-2xl text-sm font-bold transition-all hover:bg-primary hover:text-white">
                                Technical Data
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
