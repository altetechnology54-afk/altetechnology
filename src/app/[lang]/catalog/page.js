import { getDictionary } from '../../../lib/get-dictionary';
import Image from 'next/image';
import Link from 'next/link';

export default async function CatalogPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);
    const catalog = dict.catalogPage;

    // Use standard <img> for now to bypass any Turbopack/Next.js image issues during dev
    // and ensuring absolute consistency in visibility.

    return (
        <main className="min-h-screen bg-white">
            {/* Header / Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-200 py-20 px-4 md:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <nav className="flex mb-6 text-sm font-bold text-slate-400 gap-2 items-center uppercase tracking-widest">
                        <Link href={`/${lang}`} className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-slate-900">{catalog.parentTitle}</span>
                    </nav>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-4">
                        {catalog.subTitle}
                    </h1>
                    <div className="h-2 w-32 bg-primary mb-8"></div>
                </div>
            </div>

            {/* Intro Section */}
            <section className="py-24 px-4 md:px-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <p className="text-3xl md:text-4xl font-light text-slate-500 leading-tight mb-12">
                            {catalog.intro}
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-6 items-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/20 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Primary Stability</h4>
                                    <p className="text-sm text-slate-500">Secure anchoring in all bone types.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/20 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Rapid Healing</h4>
                                    <p className="text-sm text-slate-500">Optimized SLA surface treatment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square bg-slate-100 rounded-[80px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                        <img
                            src="/imagescat1/bld01.jpg"
                            alt="Implant Design"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Technical Detail Cards */}
            <section className="py-24 px-4 md:px-12 max-w-6xl mx-auto border-t border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-slate-900 rounded-[50px] p-12 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 text-primary">{catalog.sections.conicalDesign.title}</h3>
                            <p className="text-slate-400 font-light leading-relaxed mb-8">
                                {catalog.sections.conicalDesign.content}
                            </p>
                            <img
                                src="/imagescat1/bld02.jpg"
                                alt="Conical Design"
                                className="w-full rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-[50px] p-12 text-slate-900 border border-slate-100 shadow-xl group">
                        <h3 className="text-2xl font-bold mb-6 text-primary">{catalog.sections.hexConnection.title}</h3>
                        <p className="text-slate-500 font-light leading-relaxed mb-8">
                            {catalog.sections.hexConnection.content}
                        </p>
                        <img
                            src="/imagescat1/bld03.jpg"
                            alt="Hex Connection"
                            className="w-full rounded-3xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* SLA Section */}
            <section className="py-24 px-4 md:px-12 bg-slate-50 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-[100px] blur-3xl"></div>
                            <img
                                src="/imagescat1/bld04.jpg"
                                alt="SLA Surface Detail"
                                className="relative rounded-[100px] shadow-2xl border-8 border-white w-full aspect-square object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
                                {catalog.sections.slaSurface.title}
                            </h2>
                            <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
                                {catalog.sections.slaSurface.content}
                            </p>
                            <div className="space-y-4">
                                {catalog.sections.slaSurface.advantages.items.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold mt-1">
                                            {index + 1}
                                        </div>
                                        <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-Catalog Quick Selection */}
            <section className="py-24 px-4 md:px-12 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-slate-900 tracking-tight">Entdecken Sie unsere Systeme</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {['shark', 'cylinder', 'safe', 'smart'].map((id) => (
                        <Link key={id} href={`/${lang}/catalog/${id}`} className="group aspect-[4/5] bg-slate-50 rounded-[40px] p-8 flex flex-col items-center justify-center gap-6 border border-slate-100 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center text-primary font-black text-3xl group-hover:bg-primary group-hover:text-white transition-all">
                                {id[0].toUpperCase()}
                            </div>
                            <span className="font-bold text-slate-700 capitalize">{id}</span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
