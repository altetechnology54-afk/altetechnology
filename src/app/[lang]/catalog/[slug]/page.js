import { getDictionary } from '../../../../lib/get-dictionary';
import Link from 'next/link';
import productsData from '../../../../data/products.json';

export default async function SubCatalogPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const slug = resolvedParams?.slug;
    const dict = await getDictionary(lang);

    const product = productsData[slug];

    if (!product) {
        return (
            <main className="min-h-screen bg-white">
                <div className="bg-slate-50 border-b border-slate-200 py-20 px-4 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <nav className="flex mb-6 text-sm font-bold text-slate-400 gap-2 items-center uppercase tracking-widest">
                            <Link href={`/${lang}/catalog`} className="hover:text-primary transition-colors">Katalog</Link>
                            <span>/</span>
                            <span className="text-slate-900">{slug}</span>
                        </nav>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                            {slug}
                        </h1>
                    </div>
                </div>
                <section className="py-24 px-4 md:px-12 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Dokumentation in Vorbereitung</h2>
                    <p className="text-slate-600 text-lg font-light leading-relaxed">
                        Wir bereiten derzeit die vollständigen technischen Spezifikationen und Katalogdaten für das System vor.
                    </p>
                </section>
            </main>
        );
    }

    // Special layout for SMART (One-piece system)
    if (slug === 'smart') {
        return (
            <main className="min-h-screen bg-white font-sans text-slate-900">
                <div className="pt-12 px-4 md:px-12 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-light text-slate-400 mb-8 tracking-tight italic">
                        <span className="font-bold text-slate-800">{product.name}</span> Shop
                    </h1>
                </div>

                <div className="bg-[#1B3A5A] text-white py-4 mb-12">
                    <div className="max-w-7xl mx-auto px-4 md:px-12">
                        <p className="text-xl md:text-2xl font-bold tracking-tight uppercase italic">{product.title}</p>
                    </div>
                </div>

                <section className="px-4 md:px-12 max-w-7xl mx-auto mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5]">
                            <img
                                src={product.images.hero}
                                alt="Smart Implants"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-5xl font-black text-[#1B3A5A] uppercase tracking-tighter">Smart Implants</h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p className="text-xl font-medium leading-relaxed">{product.description}</p>
                                <p className="text-[#3A608F] font-bold text-lg leading-relaxed">{product.applicationArea}</p>
                                <p className="italic text-slate-500 border-l-4 border-primary pl-6 py-2">{product.subDescription}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Grid for Smart */}
                <section className="px-4 md:px-12 max-w-7xl mx-auto pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {product.variants.map((variant, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-slate-50/50 p-8 rounded-[40px] border border-slate-100 shadow-sm group">
                                {/* Diameter Label */}
                                <div className="flex flex-col items-center mb-8">
                                    <div
                                        className="px-6 py-2 rounded-full text-white font-black text-xl shadow-lg mb-2 flex items-center gap-2 transform group-hover:scale-105 transition-transform"
                                        style={{ backgroundColor: variant.hex, color: variant.hex === '#FFFFFF' ? '#64748b' : 'white' }}
                                    >
                                        <span className="opacity-70 text-sm">Ø</span> {variant.diameter}
                                    </div>
                                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                                </div>

                                <div className="text-xl font-bold text-slate-800 mb-8">Ø {variant.diameter}</div>

                                {/* Specs Table */}
                                <div className="w-full mb-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow bg-white">
                                    <div className="bg-primary/80 text-[10px] font-black text-white uppercase tracking-[0.2em] text-center py-2">
                                        Länge / Length
                                    </div>
                                    <div className="bg-white divide-y divide-slate-50">
                                        {variant.lengths.map((len, lIdx) => (
                                            <div key={lIdx} className="text-center text-lg font-black text-[#1B3A5A] py-2 transition-colors hover:bg-slate-50 uppercase">
                                                {len}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Schematic Placeholder */}
                                <div className="text-center space-y-4">
                                    <div className="w-32 h-44 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 text-slate-400">
                                        <div className="font-bold text-xs uppercase mb-2">Technical Render</div>
                                        <div className="w-16 h-24 bg-slate-200 rounded-lg relative overflow-hidden">
                                            <div className="absolute top-0 inset-x-0 h-8 bg-[#B0BEC5]"></div>
                                            <div className="absolute top-8 inset-x-0 h-1 bg-green-500/50"></div>
                                        </div>
                                        <div className="mt-2 text-[10px] font-bold">Smart One-Piece</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="max-w-7xl mx-auto px-4 md:px-12 pb-24">
                    <p className="text-slate-400 font-bold italic border-t border-slate-100 pt-8 uppercase tracking-widest text-sm">
                        Für Ihre Bestellungen Klicken sie bitte auf die jeweilige Cat.Nr.
                    </p>
                </footer>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            {/* Header / Breadcrumb */}
            <div className="pt-12 px-4 md:px-12 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-light text-slate-400 mb-8 tracking-tight italic">
                    <span className="font-bold text-slate-800">{product.name}</span> Shop
                </h1>
            </div>

            {/* Hero Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] bg-slate-50">
                        <img
                            src={product.images.hero}
                            alt={`${product.name} Hero`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#1B3A5A] uppercase tracking-tighter leading-[0.9] flex flex-col">
                                {product.title ? (
                                    <>
                                        <span className="text-primary italic">{product.title.split(': ')[0]}</span>
                                        <span className="text-2xl mt-4 normal-case text-[#3A608F] leading-tight font-bold">{product.title.split(': ')[1]}</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-primary italic">{product.name.split(' ')[0]}</span>
                                        <span>{product.name.split(' ').slice(1).join(' ')}</span>
                                        <span>IMPLANTS WITH</span>
                                        <span>DEEP THREAD DESIGN.</span>
                                    </>
                                )}
                            </h2>
                            {slug !== 'safe' && (
                                <p className="text-xl md:text-2xl text-[#3A608F] font-semibold tracking-tight leading-tight max-w-md">
                                    {product.description.split('. ')[1] || product.description}
                                </p>
                            )}
                        </div>

                        <div className="bg-slate-50 border-l-8 border-primary p-6 rounded-r-2xl">
                            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight italic">
                                "{product.subDescription}"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefit Bar */}
            <div className="bg-[#1B3A5A] py-6 mb-16 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, white 25%, transparent 25%, transparent 50%, white 50%, white 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }}></div>
                <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
                    <p className="text-white text-2xl md:text-3xl font-black tracking-tighter flex flex-wrap justify-center lg:justify-between items-center uppercase gap-4 italic">
                        {product.benefitBar.split(' - ').map((benefit, i) => (
                            <span key={i} className="flex items-center">
                                {benefit}
                                {i < product.benefitBar.split(' - ').length - 1 && <span className="hidden lg:inline ml-4 w-2 h-2 bg-primary rounded-full"></span>}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            {/* Area of use Specific Text for Safe */}
            {slug === 'safe' && (
                <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12">
                    <p className="text-[#1B3A5A] text-2xl font-black uppercase tracking-tight italic border-b-2 border-slate-100 pb-4">
                        Einsatzgebiet: geeignet zum Einsatz im Unterkiefer + Oberkiefer / Application: suitable for use in the mandible and maxilla
                    </p>
                </div>
            )}

            {/* Product Grid */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto pb-48">
                <div className={`grid grid-cols-1 md:grid-cols-2 ${slug === 'safe' ? 'lg:grid-cols-3 md:max-w-5xl' : 'lg:grid-cols-5'} gap-12 mx-auto`}>
                    {product.variants.map((variant, idx) => (
                        <div key={idx} className={`flex flex-col items-center group ${slug === 'safe' ? 'bg-slate-50/50 p-8 rounded-[40px] border border-slate-100 shadow-sm' : ''}`}>
                            {/* Box Packaging (if exists) */}
                            {variant.boxImage && (
                                <div className="w-full aspect-[4/5] bg-white rounded-3xl border border-slate-100 flex items-center justify-center p-4 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative mb-6">
                                    <img
                                        src={variant.boxImage}
                                        alt={`Packaging for ${variant.diameter}`}
                                        className="w-full h-full object-contain"
                                    />
                                    <div className="absolute -bottom-4 right-4 w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center font-black text-xs" style={{ backgroundColor: variant.hex, color: variant.hex === '#FFFFFF' ? '#cbd5e1' : 'white' }}>
                                        Ø{variant.diameter}
                                    </div>
                                </div>
                            )}

                            {/* Diameter Badge / Label */}
                            <div className="flex flex-col items-center mb-8">
                                <div
                                    className="px-6 py-2 rounded-full text-white font-black text-xl shadow-lg mb-2 flex items-center gap-2 transform group-hover:scale-105 transition-transform"
                                    style={{ backgroundColor: variant.hex, color: variant.hex === '#FFFFFF' ? '#64748b' : 'white' }}
                                >
                                    <span className="opacity-70 text-sm">Ø</span> {variant.diameter}
                                </div>
                                <div className="h-1 w-12 bg-primary rounded-full"></div>
                            </div>

                            {/* Info Rows for Safe */}
                            {slug === 'safe' && (
                                <div className="text-center space-y-4 mb-8">
                                    <div className="text-xl font-bold text-slate-800">Ø {variant.diameter}</div>
                                </div>
                            )}

                            {/* Specs Table */}
                            <div className="w-full mb-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow bg-white">
                                <div className={`text-[10px] font-black text-white uppercase tracking-[0.2em] text-center py-2 ${slug === 'safe' ? 'bg-primary/80' : 'bg-[#1B3A5A]'}`}>
                                    Länge / Length
                                </div>
                                <div className="bg-white divide-y divide-slate-50">
                                    {variant.lengths.map((len, lIdx) => (
                                        <div key={lIdx} className="text-center text-lg font-black text-[#1B3A5A] py-2 transition-colors hover:bg-slate-50 uppercase">
                                            {len}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Implant Render (if exists) */}
                            {variant.implantImage ? (
                                <div className="relative w-24 h-48 group-hover:scale-110 transition-transform duration-700">
                                    <img
                                        src={variant.implantImage}
                                        alt={`Product render ${variant.diameter}`}
                                        className="w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]"
                                    />
                                </div>
                            ) : (
                                // Clinical schematic for Safe if render missing
                                slug === 'safe' && (
                                    <div className="text-center space-y-4">
                                        <div className="w-32 h-44 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 text-slate-400">
                                            <div className="font-bold text-xs uppercase mb-2">Technical Render</div>
                                            <div className="w-16 h-24 bg-slate-200 rounded-lg relative overflow-hidden">
                                                <div className="absolute top-0 inset-x-0 h-4 bg-primary/30"></div>
                                                <div className="absolute top-2 inset-x-0 h-1 bg-red-500/50"></div>
                                            </div>
                                            <div className="mt-2 text-[10px] font-bold">Glatte Oberfläche</div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </div>

                {slug === 'safe' && (
                    <div className="mt-20 border-t border-slate-100 pt-8 text-slate-400 font-bold italic uppercase tracking-widest text-sm text-center lg:text-left">
                        Für Ihre Bestellungen Klicken sie bitte auf die jeweilige Cat.Nr.
                    </div>
                )}
            </section>
        </main>
    );
}
