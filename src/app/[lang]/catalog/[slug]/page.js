import { getDictionary } from '../../../../lib/get-dictionary';
import Link from 'next/link';
import { fetchCatalogSection } from '../../../../lib/api';
import AddToCartButton from '../../../../components/AddToCartButton';

export default async function SubCatalogPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const slug = resolvedParams?.slug;
    const dict = await getDictionary(lang);

    const productData = await fetchCatalogSection(slug);

    if (!productData) {
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

    // Helper to get translated content
    const getT = (field) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['de'] || field['en'] || '';
    };

    const productName = getT(productData.name) || productData.id;
    const productTitle = getT(productData.title);
    const productDescription = getT(productData.description);
    const productSubDescription = getT(productData.subDescription);
    const productBenefitBar = getT(productData.benefitBar);
    const productApplicationArea = getT(productData.applicationArea);

    // Special layout for SMART (One-piece system)
    if (slug === 'smart' || productData.id === 'smart') {
        return (
            <main className="min-h-screen bg-white font-sans text-slate-900">
                <div className="pt-12 px-4 md:px-12 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-light text-slate-400 mb-8 tracking-tight italic">
                        <span className="font-bold text-slate-800">{productName}</span> Shop
                    </h1>
                </div>

                <div className="bg-[#1B3A5A] text-white py-4 mb-12">
                    <div className="max-w-7xl mx-auto px-4 md:px-12">
                        <p className="text-xl md:text-2xl font-bold tracking-tight uppercase italic">{productTitle || productName}</p>
                    </div>
                </div>

                <section className="px-4 md:px-12 max-w-7xl mx-auto mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] bg-slate-50">
                            {productData.images?.hero ? (
                                <img
                                    src={productData.images.hero}
                                    alt={`${productName} Hero`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-200 font-black text-8xl uppercase">
                                    {productName[0]}
                                </div>
                            )}
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-5xl font-black text-[#1B3A5A] uppercase tracking-tighter">{productName}</h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p className="text-xl font-medium leading-relaxed">{productDescription}</p>
                                <p className="text-[#3A608F] font-bold text-lg leading-relaxed">{productApplicationArea}</p>
                                <p className="italic text-slate-500 border-l-4 border-primary pl-6 py-2">{productSubDescription}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 md:px-12 max-w-7xl mx-auto pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {productData.variants.map((variant, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-slate-50/50 p-8 rounded-[40px] border border-slate-100 shadow-sm group">
                                <div className="flex flex-col items-center mb-8">
                                    <div
                                        className="px-6 py-2 rounded-full text-white font-black text-xl shadow-lg mb-2 flex items-center gap-2 transform group-hover:scale-105 transition-transform"
                                        style={{ backgroundColor: variant.hex || '#1B3A5A', color: (variant.hex === '#FFFFFF' || !variant.hex) ? '#64748b' : 'white' }}
                                    >
                                        <span className="opacity-70 text-sm">Ø</span> {variant.diameter}
                                    </div>
                                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                                </div>

                                <div className="text-xl font-bold text-slate-800 mb-8">Ø {variant.diameter}</div>

                                <div className="w-full mb-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow bg-white">
                                    <div className="bg-primary/80 text-[10px] font-black text-white uppercase tracking-[0.2em] text-center py-2">
                                        Länge / Length
                                    </div>
                                    <div className="bg-white divide-y divide-slate-50">
                                        {variant.lengths.map((len, lIdx) => (
                                            <div key={lIdx} className="group relative text-center text-lg font-black text-[#1B3A5A] py-2 transition-colors hover:bg-slate-50 uppercase flex items-center justify-center gap-4">
                                                <span>{len}</span>
                                                <AddToCartButton
                                                    product={productData}
                                                    variant={variant}
                                                    length={len}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center space-y-4">
                                    {variant.implantImage ? (
                                        <div className="w-32 h-44 group-hover:scale-110 transition-transform duration-700">
                                            <img src={variant.implantImage} alt="Implant Render" className="w-full h-full object-contain drop-shadow-lg" />
                                        </div>
                                    ) : (
                                        <div className="w-32 h-44 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 text-slate-400">
                                            <div className="font-bold text-xs uppercase mb-2">Technical Render</div>
                                            <div className="w-16 h-24 bg-slate-200 rounded-lg relative overflow-hidden">
                                                <div className="absolute top-0 inset-x-0 h-8 bg-[#B0BEC5]"></div>
                                                <div className="absolute top-8 inset-x-0 h-1 bg-green-500/50"></div>
                                            </div>
                                            <div className="mt-2 text-[10px] font-bold">Smart One-Piece</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="max-w-7xl mx-auto px-4 md:px-12 pb-24">
                    <p className="text-slate-400 font-bold italic border-t border-slate-100 pt-8 uppercase tracking-widest text-sm text-center">
                        Für Ihre Bestellungen Klicken sie bitte auf die jeweilige Cat.Nr.
                    </p>
                </footer>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <div className="pt-12 px-4 md:px-12 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-light text-slate-400 mb-8 tracking-tight italic">
                    <span className="font-bold text-slate-800">{productName}</span> Shop
                </h1>
            </div>

            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] bg-slate-50">
                        {productData.images?.hero ? (
                            <img
                                src={productData.images.hero}
                                alt={`${productName} Hero`}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-200 font-black text-8xl uppercase">
                                {productName[0]}
                            </div>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#1B3A5A] uppercase tracking-tighter leading-[0.9] flex flex-col">
                                {productTitle && productTitle.includes(': ') ? (
                                    <>
                                        <span className="text-primary italic">{productTitle.split(': ')[0]}</span>
                                        <span className="text-2xl mt-4 normal-case text-[#3A608F] leading-tight font-bold">{productTitle.split(': ')[1]}</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-primary italic">{productName.split(' ')[0]}</span>
                                        <span>{productName.split(' ').slice(1).join(' ')}</span>
                                        {productTitle && <span>{productTitle}</span>}
                                    </>
                                )}
                            </h2>
                            <p className="text-xl md:text-2xl text-[#3A608F] font-semibold tracking-tight leading-tight max-w-md">
                                {productDescription}
                            </p>
                        </div>

                        <div className="bg-slate-50 border-l-8 border-primary p-6 rounded-r-2xl">
                            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight italic">
                                "{productSubDescription}"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#1B3A5A] py-6 mb-16 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, white 25%, transparent 25%, transparent 50%, white 50%, white 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }}></div>
                <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
                    <p className="text-white text-2xl md:text-3xl font-black tracking-tighter flex flex-wrap justify-center lg:justify-between items-center uppercase gap-4 italic text-center">
                        {(productBenefitBar || '').split(' - ').map((benefit, i, arr) => (
                            <span key={i} className="flex items-center">
                                {benefit}
                                {i < arr.length - 1 && <span className="hidden lg:inline ml-4 w-2 h-2 bg-primary rounded-full"></span>}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <section className="px-4 md:px-12 max-w-7xl mx-auto pb-48">
                <div className={`grid grid-cols-1 md:grid-cols-2 ${(slug === 'safe' || productData.id === 'safe') ? 'lg:grid-cols-3 md:max-w-5xl' : 'lg:grid-cols-5'} gap-12 mx-auto`}>
                    {productData.variants.map((variant, idx) => (
                        <div key={idx} className={`flex flex-col items-center group ${(slug === 'safe' || productData.id === 'safe') ? 'bg-slate-50/50 p-8 rounded-[40px] border border-slate-100 shadow-sm' : ''}`}>
                            {variant.boxImage && (
                                <div className="w-full aspect-[4/5] bg-white rounded-3xl border border-slate-100 flex items-center justify-center p-4 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative mb-6">
                                    <img
                                        src={variant.boxImage}
                                        alt={`Packaging for ${variant.diameter}`}
                                        className="w-full h-full object-contain"
                                    />
                                    <div className="absolute -bottom-4 right-4 w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center font-black text-xs" style={{ backgroundColor: variant.hex || '#1B3A5A', color: (variant.hex === '#FFFFFF' || !variant.hex) ? '#cbd5e1' : 'white' }}>
                                        Ø{variant.diameter}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col items-center mb-8">
                                <div
                                    className="px-6 py-2 rounded-full text-white font-black text-xl shadow-lg mb-2 flex items-center gap-2 transform group-hover:scale-105 transition-transform"
                                    style={{ backgroundColor: variant.hex || '#1B3A5A', color: (variant.hex === '#FFFFFF' || !variant.hex) ? '#64748b' : 'white' }}
                                >
                                    <span className="opacity-70 text-sm">Ø</span> {variant.diameter}
                                </div>
                                <div className="h-1 w-12 bg-primary rounded-full"></div>
                            </div>

                            <div className="w-full mb-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow bg-white">
                                <div className={`text-[10px] font-black text-white uppercase tracking-[0.2em] text-center py-2 ${(slug === 'safe' || productData.id === 'safe') ? 'bg-primary/80' : 'bg-[#1B3A5A]'}`}>
                                    Länge / Length
                                </div>
                                <div className="bg-white divide-y divide-slate-50">
                                    {variant.lengths.map((len, lIdx) => (
                                        <div key={lIdx} className="group relative text-center text-lg font-black text-[#1B3A5A] py-2 transition-colors hover:bg-slate-50 uppercase flex items-center justify-center gap-4">
                                            <span>{len}</span>
                                            <AddToCartButton
                                                product={productData}
                                                variant={variant}
                                                length={len}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {variant.implantImage ? (
                                <div className="relative w-24 h-48 group-hover:scale-110 transition-transform duration-700">
                                    <img
                                        src={variant.implantImage}
                                        alt={`Product render ${variant.diameter}`}
                                        className="w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]"
                                    />
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>

                <div className="mt-20 border-t border-slate-100 pt-8 text-slate-400 font-bold italic uppercase tracking-widest text-sm text-center">
                    Für Ihre Bestellungen Klicken sie bitte auf die jeweilige Cat.Nr.
                </div>
            </section>
        </main>
    );
}
