import React from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import { fetchStaticPage } from '@/lib/api';
import { Shield, Target, Award, Users, Microscope, Globe } from 'lucide-react';

export default async function AboutPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    // Fetch dynamic content
    const pageData = await fetchStaticPage('about');

    // Helper to get localized text with fallback to dictionary if API fails or field missing
    const getT = (field, dictPath) => {
        if (pageData && pageData[field] && pageData[field][lang]) {
            return pageData[field][lang];
        }
        // Fallback to static dictionary
        return dict.aboutPage[dictPath || field];
    };

    const title = getT('title');
    const subtitle = getT('subtitle');
    const mission = getT('content', 'mission');

    // Data field fallbacks
    const historyTitle = pageData?.data?.historyTitle?.[lang] || dict.aboutPage.historyTitle;
    const historyContent = pageData?.data?.historyContent?.[lang] || dict.aboutPage.historyContent;

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                </div>
                <div className="relative z-10 text-center space-y-6 max-w-4xl px-6">
                    <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium tracking-tight italic">
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest">
                            Unsere Vision
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                            Präzision aus <span className="text-primary">Leidenschaft.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            {mission}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <ValueCard icon={<Microscope />} title={dict.aboutPage.values.precision} />
                        <ValueCard icon={<Shield />} title={dict.aboutPage.values.safety} />
                        <ValueCard icon={<Target />} title={dict.aboutPage.values.innovation} />
                        <ValueCard icon={<Award />} title="Exzellenz" />
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <div className="w-full md:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-primary/10 rounded-[60px] blur-3xl group-hover:bg-primary/20 transition-all"></div>
                            <img
                                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
                                alt="History"
                                className="relative rounded-[50px] shadow-2xl border-8 border-white object-cover aspect-[4/3] w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                                {historyTitle}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                {historyContent}
                            </p>
                            <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-12">
                                <div>
                                    <div className="text-4xl font-black text-primary italic tracking-tighter">2001</div>
                                    <div className="text-sm font-black uppercase tracking-widest text-slate-400 mt-2">Gegründet</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-primary italic tracking-tighter">50+</div>
                                    <div className="text-sm font-black uppercase tracking-widest text-slate-400 mt-2">Länder</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Reach */}
            <section className="py-32 px-6 max-w-7xl mx-auto text-center space-y-16">
                <div className="space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
                        Globale <span className="text-primary">Präsenz</span>
                    </h2>
                    <p className="text-slate-500 font-medium italic">
                        Wir liefern unsere Systeme an Kliniken und Labore auf der ganzen Welt.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <Stat icon={<Globe />} label="Weltweit" sub="Verfügbar" />
                    <Stat icon={<Users />} label="1000+" sub="Kunden" />
                    <Stat icon={<Award />} label="ISO" sub="Zertifiziert" />
                    <Stat icon={<Microscope />} label="R&D" sub="Innovation" />
                </div>
            </section>
        </main>
    );
}

const ValueCard = ({ icon, title }) => (
    <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center text-center gap-6 group hover:border-primary/20 transition-all hover:-translate-y-2">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
            {React.cloneElement(icon, { className: "w-8 h-8" })}
        </div>
        <h4 className="text-sm font-black uppercase tracking-widest text-slate-800 leading-tight">
            {title}
        </h4>
    </div>
);

const Stat = ({ icon, label, sub }) => (
    <div className="space-y-4">
        <div className="w-20 h-20 bg-slate-50 rounded-[30px] flex items-center justify-center text-slate-400 mx-auto group hover:bg-primary hover:text-white transition-all transform hover:rotate-12 cursor-default">
            {React.cloneElement(icon, { className: "w-10 h-10" })}
        </div>
        <div>
            <div className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">{label}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{sub}</div>
        </div>
    </div>
);
