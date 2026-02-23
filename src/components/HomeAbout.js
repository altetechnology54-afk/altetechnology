import React from 'react';
import Link from 'next/link';

export default function HomeAbout({ data, lang }) {
    const about = data?.about;
    if (!about) return null;

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-primary/10 rounded-[60px] blur-3xl group-hover:bg-primary/20 transition-all"></div>
                    <img
                        src={about.image || 'https://images.unsplash.com/photo-1576091160550-2173bdd9962a?q=80&w=2070&auto=format&fit=crop'}
                        alt="About Us"
                        className="relative rounded-[50px] shadow-2xl border-8 border-white object-cover aspect-[4/3] w-full"
                    />
                </div>
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-slate-900">
                        {about.title?.[lang] || about.title?.['de']}
                    </h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                        {about.content?.[lang] || about.content?.['de']}
                    </p>
                    {about.link && (
                        <Link
                            href={about.link}
                            className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-slate-900/20 italic"
                        >
                            Mehr erfahren
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
