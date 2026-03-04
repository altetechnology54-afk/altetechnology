import { getDictionary } from '../../../../lib/get-dictionary';
import Link from 'next/link';
import { fetchCatalogSection } from '../../../../lib/api';

export default async function SpecialSystemPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);
    const catalog = dict.catalogPage;

    const productData = await fetchCatalogSection('special-system');

    const getT = (field) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['de'] || field['en'] || '';
    };

    const productName = productData ? (getT(productData.name) || 'Das spezielle Implantatsystem') : 'Das spezielle Implantatsystem';
    const appArea = productData ? getT(productData.applicationArea) : '';
    const benefitBar = productData ? getT(productData.benefitBar) : '';
    const description = productData ? getT(productData.description) : '';
    const articles = productData?.articles || [];

    // Collect all images: article images first, then extraImages
    const articleImages = articles.map(a => a.image).filter(Boolean);
    const extraImages = (productData?.images?.extraImages || []).filter(Boolean);
    const allImages = [...articleImages, ...extraImages];

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">

            {/* Breadcrumb */}
            <div className="pt-4 md:pt-8 px-4 md:px-10 max-w-[1100px] mx-auto">
                <nav className="flex mb-4 text-[8px] md:text-[10px] font-bold text-slate-400 gap-1 items-center uppercase tracking-widest">
                    <Link href={`/${lang}`} className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href={`/${lang}/catalog`} className="hover:text-primary transition-colors">{catalog.parentTitle}</Link>
                    <span>/</span>
                    <span className="text-slate-700">{productName}</span>
                </nav>
            </div>

            {/* Blue highlight text at top */}
            {(appArea || benefitBar) && (
                <div className="px-4 md:px-10 max-w-[1100px] mx-auto mb-6 md:mb-10">
                    <div className="text-[#3A5FC8] text-[11px] md:text-sm font-medium leading-relaxed">
                        {(appArea || benefitBar).split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                </div>
            )}

            {/* Main description */}
            {description && (
                <div className="px-4 md:px-10 max-w-[1100px] mx-auto mb-8">
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">{description}</p>
                </div>
            )}

            {/* ALL TEXT ARTICLES — no images here */}
            {articles.length > 0 && (
                <div className="px-4 md:px-10 max-w-[1100px] mx-auto space-y-6 md:space-y-8 mb-10 md:mb-14">
                    {articles.map((article, idx) => {
                        const desc = getT(article.description);
                        const parts = desc.split('\n\n');
                        const hasTitle = parts.length > 1;
                        return (
                            <div key={idx} className="space-y-1">
                                {article.artNr && (
                                    <h2 className="font-bold text-slate-900 text-sm md:text-base mb-1">{article.artNr}</h2>
                                )}
                                {hasTitle ? (
                                    <>
                                        <p className="font-bold text-slate-900 text-sm md:text-[15px]">{parts[0]}</p>
                                        {parts.slice(1).map((p, pIdx) => (
                                            <p key={pIdx} className="text-slate-700 text-sm md:text-[15px] leading-7 text-justify whitespace-pre-line">{p}</p>
                                        ))}
                                    </>
                                ) : (
                                    <p className="text-slate-700 text-sm md:text-[15px] leading-7 text-justify whitespace-pre-line">{desc}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* ALL IMAGES — shown after all text */}
            {allImages.length > 0 && (
                <div className="px-4 md:px-10 max-w-[1100px] mx-auto mb-16 space-y-2">
                    {/* First two images side-by-side */}
                    {allImages.length >= 2 ? (
                        <div className="grid grid-cols-2 gap-1" style={{ maxWidth: '870px' }}>
                            <img src={allImages[0]} alt="Abbildung 1" className="w-full h-auto block" />
                            <img src={allImages[1]} alt="Abbildung 2" className="w-full h-auto block" />
                        </div>
                    ) : (
                        <div style={{ maxWidth: '870px' }}>
                            <img src={allImages[0]} alt="Abbildung 1" className="w-full h-auto block" />
                        </div>
                    )}
                    {/* Remaining images full-width */}
                    {allImages.slice(2).map((img, i) => (
                        <div key={i} style={{ maxWidth: '870px' }}>
                            <img src={img} alt={`Abbildung ${i + 3}`} className="w-full h-auto block" />
                        </div>
                    ))}
                </div>
            )}

            {/* Empty state */}
            {articles.length === 0 && allImages.length === 0 && (
                <div className="px-4 md:px-10 max-w-[1100px] mx-auto py-24 text-center border-2 border-dashed border-slate-100 rounded-3xl">
                    <p className="text-slate-400 font-medium text-sm">
                        Add content from the dashboard → Catalog Systems → <strong>special-system</strong>
                    </p>
                </div>
            )}
        </main>
    );
}
