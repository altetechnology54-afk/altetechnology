import React from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import { fetchStaticPage } from '@/lib/api';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

export default async function ContactPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";
    const dict = await getDictionary(lang);

    // Fetch dynamic content
    const pageData = await fetchStaticPage('contact');

    // Content Fallbacks
    const title = pageData?.title?.[lang] || dict.contactPage.title;
    const subtitle = pageData?.subtitle?.[lang] || dict.contactPage.subtitle;

    // Data Fallbacks
    const email = pageData?.data?.email || dict.contactPage.info.email;
    const phone = pageData?.data?.phone || dict.contactPage.info.phone;
    const address = pageData?.data?.address || dict.contactPage.info.address;

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-48">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <header className="max-w-3xl mb-24 space-y-6">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest">
                        Kontakt
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-500 font-medium italic">
                        {subtitle}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[60px] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{dict.contactPage.form.name}</label>
                                        <input
                                            type="text"
                                            className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 font-bold text-slate-900 placeholder-slate-300 focus:ring-2 focus:ring-primary/20 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{dict.contactPage.form.email}</label>
                                        <input
                                            type="email"
                                            className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 font-bold text-slate-900 placeholder-slate-300 focus:ring-2 focus:ring-primary/20 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{dict.contactPage.form.subject}</label>
                                    <input
                                        type="text"
                                        className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 font-bold text-slate-900 placeholder-slate-300 focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="Product Inquiry"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{dict.contactPage.form.message}</label>
                                    <textarea
                                        rows="6"
                                        className="w-full bg-slate-50 border-none rounded-3xl px-6 py-4 font-bold text-slate-900 placeholder-slate-300 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] italic py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-primary transition-all shadow-xl shadow-slate-900/10 hover:shadow-primary/20 group"
                                >
                                    {dict.contactPage.form.submit}
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <section className="space-y-8">
                            <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{dict.contactPage.info.title}</h3>
                            <div className="space-y-6">
                                <InfoItem icon={<MapPin />} label="Address" value={address} />
                                <InfoItem icon={<Mail />} label="Email" value={email} />
                                <InfoItem icon={<Phone />} label="Phone" value={phone} />
                                <InfoItem icon={<Clock />} label="Hours" value="Mon - Fri: 09:00 - 18:00" />
                            </div>
                        </section>

                        {/* Interactive Visual Element */}
                        <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                alt="Office"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                    <Globe className="w-10 h-10 text-white animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-start gap-6 group">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
            {React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>
        <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{label}</div>
            <div className="text-slate-900 font-bold italic tracking-tight">{value}</div>
        </div>
    </div>
);
