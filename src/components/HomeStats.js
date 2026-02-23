import React from 'react';

export default function HomeStats({ data, lang }) {
    const stats = data?.stats || [];
    if (stats.length === 0) return null;

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="text-5xl md:text-7xl font-black italic tracking-tighter text-primary">
                                {stat.number}
                            </div>
                            <div className="text-sm md:text-base font-black uppercase tracking-widest text-slate-400">
                                {stat.label?.[lang] || stat.label?.['de']}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
