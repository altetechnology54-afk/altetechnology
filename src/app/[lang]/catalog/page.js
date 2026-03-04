import { getDictionary } from '../../../lib/get-dictionary';
import Link from 'next/link';
import { fetchCatalogSections, fetchStaticPage } from '../../../lib/api';

export default async function CatalogPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);
    const catalog = dict.catalogPage;

    // Fetch dynamic systems and catalog page content from API
    const products = await fetchCatalogSections();
    const pageContent = await fetchStaticPage('catalog');
    const sections = pageContent?.data?.sections || [];

    return (
        <main className="min-h-screen bg-white pb-10 md:pb-20">
            {/* Welcome Section - Matching old site */}
            <section className="pt-6 md:pt-12 lg:pt-20 px-3 md:px-6 lg:px-12 max-w-[1600px] mx-auto">
                <nav className="flex mb-4 md:mb-8 text-[8px] md:text-[10px] font-black text-slate-400 gap-1 md:gap-2 items-center uppercase tracking-[0.2em] italic">
                    <Link href={`/${lang}`} className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-slate-900">{catalog.parentTitle}</span>
                </nav>

                <h1 className="text-xl md:text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-6 md:mb-12 uppercase italic">
                    Willkommen bei AL-Technology Implants
                </h1>

                {/* 4-Card Grid - Matching old site */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mb-10 md:mb-20">
                    {[
                        { id: 'shark', name: 'Shark Implants', img: '/images/products/s1-1.jpg' },
                        { id: 'cylinder', name: 'Cylinder Implants', img: '/images/products/s3-3.jpg' },
                        { id: 'safe', name: 'Safe Implants', img: '/images/products/s4-4.jpg' },
                        { id: 'smart', name: 'Smart Implants', img: '/images/products/s2-2.jpg' }
                    ].map((product) => (
                        <Link
                            key={product.id}
                            href={`/${lang}/catalog/${product.id}`}
                            className="group bg-white border border-slate-200 rounded-lg md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-2 md:p-4 bg-slate-50/50 border-t border-slate-100">
                                <h3 className="font-black text-slate-900 uppercase italic text-[9px] md:text-xs tracking-tight group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Dynamic Sections from Dashboard */}
                <div className="space-y-24 md:space-y-48">
                    {sections.length > 0 ? sections.map((section, idx) => (
                        <div key={idx} className="animate-in fade-in slide-in-from-bottom-6 duration-1000" style={{ animationDelay: `${idx * 200}ms` }}>
                            {section.type === 'text' && (
                                <div className="max-w-4xl space-y-8 animate-fade-in">
                                    <div className="flex items-center gap-6 mb-8">
                                        <span className="text-3xl md:text-6xl font-black text-slate-100 italic">0{idx + 1}</span>
                                        <div className="h-px bg-slate-100 flex-1"></div>
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: section.data.content[lang] || section.data.content['de'] || '' }}
                                        className="text-slate-600 font-medium leading-relaxed italic text-sm md:text-xl md:leading-loose whitespace-pre-line"
                                    />
                                </div>
                            )}

                            {section.type === 'side-side' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                                    {(section.data.image1 || section.data.image2) && (
                                        <>
                                            {section.data.image1 && (
                                                <div className="rounded-3xl md:rounded-[60px] overflow-hidden shadow-2xl border border-slate-50 hover:scale-[1.02] transition-transform duration-700 bg-white">
                                                    <img src={section.data.image1} alt="Catalog Feature" className="w-full h-auto object-cover" />
                                                </div>
                                            )}
                                            {section.data.image2 && (
                                                <div className="rounded-3xl md:rounded-[60px] overflow-hidden shadow-2xl border border-slate-50 hover:scale-[1.02] transition-transform duration-700 bg-white">
                                                    <img src={section.data.image2} alt="Catalog Feature" className="w-full h-auto object-cover" />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}

                            {section.type === 'full-width' && section.data.image && (
                                <div className="w-full rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl border border-slate-50 hover:scale-[1.01] transition-transform duration-700 bg-white">
                                    <img src={section.data.image} alt="Catalog Full Width" className="w-full h-auto" />
                                </div>
                            )}
                        </div>
                    )) : (
                        /* Philosophy / Intro Text - Fallback */
                        <div className="max-w-4xl space-y-4 md:space-y-8 text-slate-600">
                            <p className="text-xs md:text-base lg:text-xl font-medium leading-relaxed italic">
                                AL-Technology wurde 2001 gegründet und im Maschinenbauwesen spezialisiert, was ganz spezielle Implantate herstellen lässt, das Erzeugnis bildet eine Form, welche durch maximale mechanische Festigkeit und hohe Integration mit den Knochen gekennzeichnet ist.
                            </p>
                            <p className="text-xs md:text-base lg:text-xl font-medium leading-relaxed italic">
                                AL-Technology Fertigung erfolgt auf modernsten und speziellen CNC-gesteuerten Maschinen. Die spezielle Form der Implantate, insbesondere die konischen, bietet einfache Implantation, maximale mechanische Festigkeit, Stabilität sofort nach der Implantation und hohe Knochenintegration.
                            </p>
                            <p className="text-xs md:text-base lg:text-xl font-medium leading-relaxed italic">
                                Die spezielle Behandlung der Oberfläche ( (SLA: Sand-blasted, Large grit, Acid-etched), die spezielle Verpackung der Implantate in Glasphiolen ohne Kunststoffe, in einer sterilen Umgebung, garantiert AL-Technology Implantate eine hervorragende Qualität und höchste Erfolgsrate. Unsere Kunden in Deutschland, Frankreich und Spanien sind seit Jahren mit diesen Qualitätsstandards höchst zufrieden. Diese hervorragende Qualitätsmerkmale wurden durch mehrere wissenschaftlichen Studien und klinischen Untersuchungen belegt.
                            </p>

                            <div className="pt-4 md:pt-8 border-t border-slate-100 flex flex-wrap gap-x-6 md:gap-x-12 gap-y-4">
                                <div className="space-y-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest">Material</span>
                                    <p className="font-bold text-primary italic text-[10px] md:text-sm">Titanium alloy Ti-6AI-4V ELI</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest">Connectors</span>
                                    <p className="font-bold text-primary italic text-[10px] md:text-sm">Titanium alloy Ti-6AI-4V ELI (Grade 5)</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
