import React from 'react';
import Link from 'next/link';
import { fetchCatalogSection } from '@/lib/api';
import AddToCartButton from '@/components/AddToCartButton';

export default async function SubCatalogPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const slug = resolvedParams?.slug;

    const productData = await fetchCatalogSection(slug);

    if (!productData) {
        return (
            <main className="min-h-screen bg-white py-20 px-4 text-center">
                <h1 className="text-3xl font-black text-slate-800 uppercase mb-4">{slug}</h1>
                <p className="text-slate-500">Dokumentation in Vorbereitung</p>
            </main>
        );
    }

    const getT = (field) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['de'] || field['en'] || '';
    };

    const productName = getT(productData.name) || slug;
    const productTitle = getT(productData.title);
    const productDesc = getT(productData.description);
    const productSubDesc = getT(productData.subDescription);
    const productBenefit = getT(productData.benefitBar);
    const productAppArea = getT(productData.applicationArea);

    const variants = productData.variants || [];
    const articles = productData.articles || [];

    // Helper for table background colors
    const getTableStyle = (hex) => {
        if (hex === '#FFEB3B' || hex === '#FFD500' || hex === '#ffeb3b') {
            return { bg: 'bg-[#FFD200]', text: 'text-black', border: 'border-[#E6BD00]' };
        }
        if (hex === '#F44336' || hex === '#E53935' || hex === '#f44336') {
            return { bg: 'bg-[#FF0000]', text: 'text-white', border: 'border-[#D50000]' };
        }
        if (hex === '#03A9F4' || hex === '#1E88E5' || hex === '#2196F3') {
            return { bg: 'bg-[#1E70E8]', text: 'text-white', border: 'border-[#1558B8]' };
        }
        if (hex === '#4CAF50' || hex === '#2E7D32' || hex === '#008000') {
            return { bg: 'bg-[#008A00]', text: 'text-white', border: 'border-[#006600]' };
        }
        return { bg: 'bg-white', text: 'text-black', border: 'border-slate-300' };
    };

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-20 px-3 sm:px-6 md:px-12 max-w-[1200px] mx-auto">
            {/* 1. SHOP TITLE */}
            <div className="pt-6 md:pt-10 mb-6 md:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-slate-700 tracking-tight font-sans">
                    {productName} Shop
                </h1>
            </div>

            {/* 2. HERO BLOCK */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start mb-6">
                {/* Hero Image */}
                <div className="w-full max-w-[340px] sm:max-w-[450px] mx-auto md:mx-0 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm flex items-center justify-center p-2">
                    {productData.images?.hero ? (
                        <img
                            src={productData.images.hero}
                            alt={`${productName} Hero`}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <div className="text-slate-300 font-bold text-6xl uppercase p-8">{slug[0]}</div>
                    )}
                </div>

                {/* Hero Information */}
                <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                    <h2 className="text-[#1A3694] font-black text-lg sm:text-xl md:text-2xl tracking-tight uppercase leading-snug">
                        {productTitle || productName}
                    </h2>
                    {productDesc && (
                        <p className="text-[#1A3694] font-medium text-xs sm:text-sm md:text-base leading-relaxed">
                            {productDesc}
                        </p>
                    )}
                    {productSubDesc && (
                        <p className="text-slate-900 font-bold text-xs sm:text-sm md:text-base leading-relaxed">
                            {productSubDesc}
                        </p>
                    )}
                </div>
            </section>

            {/* 3. BENEFIT BAR & APPLICATION AREA */}
            <div className="mb-8 md:mb-10 space-y-1">
                {productBenefit && (
                    <p className="text-[#1A3694] font-black text-xs sm:text-sm md:text-base uppercase tracking-wide">
                        {productBenefit}
                    </p>
                )}
                {productAppArea && (
                    <p className="text-[#1A3694] font-bold text-xs sm:text-sm md:text-base">
                        {productAppArea}
                    </p>
                )}
            </div>

            {/* 4. VARIANTS OVERVIEW (PACKAGING & 3D RENDERS) */}
            {variants.length > 0 && (
                <section className="mb-12 md:mb-16 pt-4 border-t border-slate-100">
                    <div className="overflow-x-auto pb-3 -mx-3 px-3">
                        <div className={`min-w-max md:min-w-0 flex gap-2 sm:gap-3 md:gap-4 md:grid items-end max-w-5xl mx-auto ${
                            variants.length <= 2 ? 'md:grid-cols-2' :
                            variants.length === 3 ? 'md:grid-cols-3' :
                            variants.length === 4 ? 'md:grid-cols-4' :
                            'md:grid-cols-5'
                        }`}>
                            {variants.map((variant, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center space-y-2 sm:space-y-3 min-w-[75px] sm:min-w-[90px] md:min-w-0">
                                    {/* Packaging Box */}
                                    {variant.boxImage && (
                                        <div className="w-full aspect-square max-w-[120px] sm:max-w-[160px] md:max-w-[350px] p-1 bg-white border border-slate-100 rounded-lg shadow-sm flex items-center justify-center">
                                            <img
                                                src={variant.boxImage}
                                                alt={`Box Ø ${variant.diameter}`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    )}

                                    {/* Colored Diameter Badge */}
                                    <div
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-[9px] sm:text-xs md:text-sm shadow-md"
                                        style={{
                                            backgroundColor: variant.hex || '#FFEB3B',
                                            color: (variant.hex === '#FFFFFF' || !variant.hex) ? '#000000' : (variant.hex === '#FFEB3B' ? '#000000' : '#FFFFFF'),
                                            border: variant.hex === '#FFFFFF' ? '2px solid #333' : 'none'
                                        }}
                                    >
                                        Ø {variant.diameter}
                                    </div>

                                    {/* 3D Render Image */}
                                    {variant.implantImage && (
                                        <div className="w-10 h-20 sm:w-16 sm:h-28 md:w-24 md:h-44 flex items-center justify-center pt-1">
                                            <img
                                                src={variant.implantImage}
                                                alt={`Implant Ø ${variant.diameter}`}
                                                className="h-full w-auto object-contain drop-shadow-md"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. ORDER TABLES SECTION */}
            <section className="mb-12 md:mb-16 pt-6 md:pt-8 border-t-2 border-slate-200">
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-700 mb-4 md:mb-6">
                    Für Ihre Bestellungen Klicken sie bitte auf Cat.Nr
                </h3>

                <div className="space-y-4 md:space-y-6 max-w-4xl">
                    {variants.map((variant, vIdx) => {
                        const style = getTableStyle(variant.hex);
                        const variantArticles = articles.filter(a =>
                            a.category?.[lang]?.includes(variant.diameter) ||
                            a.category?.de?.includes(variant.diameter) ||
                            a.description?.[lang]?.includes(variant.diameter) ||
                            a.description?.de?.includes(variant.diameter) ||
                            variant.lengths.some(l => l.includes(a.artNr))
                        );

                        const lengthItems = variant.lengths && variant.lengths.length > 0
                            ? variant.lengths
                            : variantArticles.map(a => `${a.artNr}`);

                        return (
                            <div key={vIdx} className="overflow-hidden rounded-lg shadow-sm border border-slate-200">
                                {/* Table Header */}
                                <div className="grid grid-cols-[70px_70px_1fr_auto] sm:grid-cols-4 bg-slate-100 text-[10px] sm:text-xs md:text-sm font-bold text-slate-800 py-2 sm:py-2.5 px-2 sm:px-4 border-b border-slate-200 text-center items-center">
                                    <div>Diameter</div>
                                    <div>Length</div>
                                    <div>Cat.Nr.</div>
                                    <div className="w-24 sm:w-auto"></div>
                                </div>

                                {/* Table Body with Variant's Distinct Color */}
                                <div className={`${style.bg} ${style.text} divide-y divide-black/10 font-bold text-[10px] sm:text-xs md:text-sm`}>
                                    {lengthItems.map((lenStr, lIdx) => {
                                        const [lenPart, ...catParts] = lenStr.split('-');
                                        const displayLen = lenPart ? lenPart.trim() : '';
                                        const catNr = catParts.length > 0 ? catParts.join('-').trim() : (variantArticles[lIdx]?.artNr || '');
                                        const matchedArticle = articles.find(a => a.artNr === catNr) || { artNr: catNr, description: { de: `${productName} Ø ${variant.diameter} ${displayLen}` } };

                                        return (
                                            <div key={lIdx} className="grid grid-cols-[70px_70px_1fr_auto] sm:grid-cols-4 items-center py-2 sm:py-2.5 px-2 sm:px-4 text-center gap-1 sm:gap-2">
                                                <div className="truncate">{variant.diameter.includes('mm') ? variant.diameter : `${variant.diameter} mm`}</div>
                                                <div className="truncate">{displayLen}</div>
                                                <div className="font-black tracking-wider text-[9px] sm:text-xs truncate">{catNr}</div>
                                                <div className="flex justify-center w-24 sm:w-auto">
                                                    <AddToCartButton
                                                        product={productData}
                                                        article={matchedArticle}
                                                        className="!bg-gradient-to-b !from-[#FF8C00] !to-[#E65100] hover:!from-[#FFA500] hover:!to-[#FF6F00] !text-white !px-2 !py-1 sm:!px-4 sm:!py-1.5 !rounded-md !text-[9px] sm:!text-[11px] md:!text-xs !font-black !shadow !border !border-orange-600 active:!scale-95 transition-all !uppercase whitespace-nowrap"
                                                    >
                                                        Bestellen
                                                    </AddToCartButton>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 6. DRILL PROCEDURE CHART */}
            <section className="mt-12 md:mt-16 pt-8 md:pt-12 border-t-2 border-slate-200">
                <div className="mb-4 md:mb-6">
                    <h2 className="text-[#1A3694] font-black text-base sm:text-lg md:text-xl">
                        Drill-Verfahren {productName}: Hängt von der Knochenstärke ab
                    </h2>
                    <p className="text-slate-500 font-bold text-xs sm:text-sm md:text-base italic">
                        drill procedure {productName}: Depending on the Bone Condition
                    </p>
                </div>

                <div className="w-full flex justify-center py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl p-2 sm:p-4">
                    {slug === 'smart' ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl w-full text-center">
                            <div className="flex justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                                <img
                                    src="/images/smart/cxd.png"
                                    alt="Smart Drill 10mm"
                                    className="w-full h-auto max-h-[350px] md:max-h-[500px] object-contain"
                                />
                            </div>
                            <div className="flex justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                                <img
                                    src="/images/smart/ffg.png"
                                    alt="Smart Drill 11.5mm"
                                    className="w-full h-auto max-h-[350px] md:max-h-[500px] object-contain"
                                />
                            </div>
                            <div className="flex justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                                <img
                                    src="/images/smart/gbf.png"
                                    alt="Smart Drill 13mm"
                                    className="w-full h-auto max-h-[350px] md:max-h-[500px] object-contain"
                                />
                            </div>
                        </div>
                    ) : slug === 'shark' ? (
                        <img
                            src="/images/products/sark.jpg"
                            alt={`Drill procedure ${productName}`}
                            className="max-w-4xl w-full h-auto object-contain"
                        />
                    ) : (
                        <img
                            src={productData.images?.diagramImage || "/images/products/sark.jpg"}
                            alt={`Drill procedure ${productName}`}
                            className="max-w-4xl w-full h-auto object-contain"
                        />
                    )}
                </div>
            </section>
        </main>
    );
}