import { getDictionary } from '../../lib/get-dictionary';
import Link from 'next/link';
import { fetchCatalogSections, fetchHomeContent } from '../../lib/api';
import HeroSlider from '../../components/HeroSlider';

export default async function Home({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    // Fetch dynamic products from API
    const products = await fetchCatalogSections();

    // Fetch home slider data
    const homeData = await fetchHomeContent('hero-slider');
    const slides = homeData?.slides || [];

    return (
        <main className="min-h-screen bg-slate-50/50">
            {/* Full-width Hero Slider */}
            <HeroSlider slides={slides} lang={lang} />

            {/* Product Categories */}
            <section className="max-w-7xl mx-auto px-6 pb-40">
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

            {/* Modern Footer */}
            <footer className="bg-slate-900 text-white pt-20 pb-12 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} AL-Technology Implants. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
