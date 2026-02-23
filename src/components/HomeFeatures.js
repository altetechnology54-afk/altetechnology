import React from 'react';
import * as Icons from 'lucide-react';

export default function HomeFeatures({ data, lang }) {
    const features = data?.features || [];
    if (features.length === 0) return null;

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((feature, idx) => {
                    const IconComponent = Icons[feature.icon] || Icons.Zap;
                    return (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-white rounded-[30px] shadow-xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-translate-y-2">
                                <IconComponent className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-slate-800">
                                {feature.title?.[lang] || feature.title?.['de']}
                            </h3>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                {feature.content?.[lang] || feature.content?.['de']}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
