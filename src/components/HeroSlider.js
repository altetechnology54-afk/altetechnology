'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroSlider({ slides, data, lang }) {
    // Check both props for compatibility
    const activeSlides = (data?.slides || slides) || [];
    if (activeSlides.length === 0) return null;

    return (
        <section className="w-full h-[600px] md:h-[800px] relative overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {activeSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={slide.image}
                                    alt={slide.title?.[lang] || 'Slide'}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-white">
                                <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                                    <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic leading-[0.9]">
                                        {slide.title?.[lang] || slide.title?.['de']}
                                    </h2>
                                    <p className="text-lg md:text-2xl font-medium mb-10 max-w-2xl text-slate-200 leading-relaxed">
                                        {slide.subtitle?.[lang] || slide.subtitle?.['de']}
                                    </p>
                                    <div className="flex gap-4">
                                        <Link
                                            href={slide.link || `/${lang}/catalog`}
                                            className="bg-primary text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40 italic"
                                        >
                                            Katalog ansehen
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-button-next, .swiper-button-prev {
                    color: white !important;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    width: 60px !important;
                    height: 60px !important;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 20px !important;
                    font-weight: 900;
                }
                .swiper-button-next:hover, .swiper-button-prev:hover {
                    background: rgba(255, 255, 255, 0.2);
                    scale: 1.1;
                }
                .swiper-pagination-bullet {
                    background: white !important;
                    width: 12px !important;
                    height: 12px !important;
                    border-radius: 4px !important;
                    opacity: 0.3 !important;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    width: 40px !important;
                    background: #3b82f6 !important;
                }
            `}</style>
        </section>
    );
}
