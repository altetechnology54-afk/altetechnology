import { getDictionary } from '../../lib/get-dictionary';
import Link from 'next/link';

export default async function Home({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen bg-gradient-to-br from-white to-bg-sky">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                        Precision Engineering Since 2001
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 tracking-tight leading-[1.1]">
                        {dict.hero.welcome.split(' ').slice(0, -1).join(' ')} <span className="text-primary">{dict.hero.welcome.split(' ').slice(-1)}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        {dict.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href={`/${lang}/catalog`} className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-3xl text-lg font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1">
                            {dict.hero.cta}
                        </Link>
                        <Link href={`/${lang}/about`} className="w-full sm:w-auto px-10 py-5 text-lg font-bold text-slate-700 bg-white border border-slate-200 rounded-3xl hover:bg-slate-50 transition-all">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="max-w-7xl mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {['shark', 'cylinder', 'safe', 'smart'].map((id) => (
                        <div key={id} className="card-hover bg-white p-8 rounded-[40px] border border-slate-200 flex flex-col items-center text-center">
                            <div className="w-full aspect-square bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden">
                                <div className="text-slate-300 font-black text-6xl uppercase tracking-tighter">
                                    {id[0]}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">{dict.products[id]}</h3>
                            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                                Integrated {id} design optimized for superior primary stability.
                            </p>
                            <Link href={`/${lang}/products/${id}`} className="mt-auto bg-slate-100 text-slate-700 px-6 py-3 rounded-2xl text-sm font-bold transition-all hover:bg-primary hover:text-white">
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
