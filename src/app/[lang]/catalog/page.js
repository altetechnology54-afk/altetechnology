import { getDictionary } from '../../../lib/get-dictionary';
import Link from 'next/link';
import { fetchCatalogSections } from '../../../lib/api';

export default async function CatalogPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);
    const catalog = dict.catalogPage;

    // Fetch dynamic systems from API
    const products = await fetchCatalogSections();

    return (
        <main className="min-h-screen bg-white pb-10 md:pb-20">
            {/* Welcome Section - Matching old site */}
            <section className="pt-6 md:pt-12 lg:pt-20 px-3 md:px-6 lg:px-12 max-w-7xl mx-auto">
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
                        { id: 'shark', name: 'Shark Implants', img: '/images/products/shark_hero_image_1771708446990.png' },
                        { id: 'cylinder', name: 'Cylinder Implants', img: '/images/products/cylinder_hero_image_1771709193918.png' },
                        { id: 'safe', name: 'Safe Implants', img: '/images/products/safe_hero_image_clinical_1771709767133.png' },
                        { id: 'smart', name: 'Smart Implants', img: '/images/products/smart_hero_image_clinical_1771709782854.png' }
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
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

                {/* Philosophy / Intro Text - Matching old site */}
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
            </section>
        </main>
    );
}
