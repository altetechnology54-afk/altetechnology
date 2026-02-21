'use client';

import Link from 'next/link';

export default function InstructionsPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-48">
            {/* Header */}
            <header className="pt-20 px-4 md:px-12 max-w-7xl mx-auto mb-16">
                <h1 className="text-6xl font-light text-slate-800 tracking-[-0.02em] font-sans mb-16">
                    Anweisung
                </h1>

                {/* Dual Language Headers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-8 bg-slate-100 rounded overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative">
                                <div className="absolute inset-0 flex flex-col">
                                    <div className="h-1/3 bg-black"></div>
                                    <div className="h-1/3 bg-red-600"></div>
                                    <div className="h-1/3 bg-yellow-400"></div>
                                </div>
                            </div>
                            <h2 className="text-[#1B3A5A] font-bold text-lg uppercase tracking-tight">
                                Anweisung für dei Verwendung für AL-Technology Implantate
                            </h2>
                        </div>
                        <p className="text-red-600 font-bold mb-8">
                            Warnung: <span className="text-slate-900">AL-Technology Produkte sind nur durch zertifizierte Zahnärzte einzusetzen</span>
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-8 bg-slate-100 rounded overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative">
                                <div className="absolute inset-x-0 h-1/3 top-1/3 bg-red-600"></div>
                                <div className="absolute inset-y-0 w-1/4 left-[37.5%] bg-red-600"></div>
                                <div className="absolute inset-0 bg-transparent border-[3px] border-white ring-2 ring-blue-800"></div>
                            </div>
                            <h2 className="text-[#1B3A5A] font-bold text-lg uppercase tracking-tight">
                                Instructions for use for AL-Technology dental implants
                            </h2>
                        </div>
                        <p className="text-red-600 font-bold mb-8">
                            Warning: <span className="text-slate-900">Al-Technology implants are products to be used only by certified dentists.</span>
                        </p>
                    </div>
                </div>
            </header>

            {/* Symbols Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* DE Symbols */}
                    <div className="flex gap-12">
                        <div className="space-y-4">
                            <h3 className="text-red-600 font-black text-xl mb-6">Symbole</h3>
                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 border-2 border-slate-900 rounded-lg flex items-center justify-center font-serif text-2xl font-bold italic">i</div>
                                    <span className="text-slate-800 font-bold">See instructions</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold text-2xl relative">
                                        2 <div className="absolute w-14 h-[2px] bg-slate-900 rotate-45"></div>
                                    </div>
                                    <span className="text-slate-800 font-bold">For single use only</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 border-2 border-slate-900 rounded-sm flex flex-col items-center justify-center relative overflow-hidden">
                                        <div className="w-full h-1/2 border-b border-slate-900"></div>
                                    </div>
                                    <span className="text-slate-800 font-bold">Expiry Date</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-blue-800 font-black text-3xl tracking-tighter">CE<span className="text-sm align-top ml-1">0473</span></div>
                                    <span className="text-slate-800 font-bold">0473 CE marking</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-16 pl-8">
                            <div className="border border-slate-200 p-4 rounded-xl space-y-4">
                                <div className="bg-slate-50 p-4 rounded font-bold text-sm text-center italic border border-slate-200">
                                    Sterlite R
                                </div>
                                <p className="font-bold italic text-[#1B3A5A]">Methode der Sterilisation:</p>
                                <p className="font-black italic text-[#1B3A5A] text-xl">Bestrahlung</p>
                            </div>
                        </div>
                    </div>

                    {/* EN Symbols */}
                    <div className="flex gap-12">
                        <div className="space-y-4">
                            <h3 className="text-red-600 font-black text-xl mb-6">Symbols</h3>
                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 border-2 border-slate-900 rounded-lg flex items-center justify-center font-serif text-2xl font-bold italic">i</div>
                                    <span className="text-slate-800 font-bold">See instructions</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold text-2xl relative">
                                        2 <div className="absolute w-14 h-[2px] bg-slate-900 rotate-45"></div>
                                    </div>
                                    <span className="text-slate-800 font-bold">For single use only</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 border-2 border-slate-900 rounded-sm flex flex-col items-center justify-center relative overflow-hidden">
                                        <div className="w-full h-1/2 border-b border-slate-900"></div>
                                    </div>
                                    <span className="text-slate-800 font-bold">Expiry Date</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-blue-800 font-black text-3xl tracking-tighter">CE<span className="text-sm align-top ml-1">0473</span></div>
                                    <span className="text-slate-800 font-bold">0473 CE marking</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-16 pl-8">
                            <div className="border border-slate-200 p-4 rounded-xl space-y-4">
                                <div className="bg-slate-50 p-4 rounded font-bold text-sm text-center italic border border-slate-200">
                                    Sterlite R
                                </div>
                                <p className="font-bold italic text-[#1B3A5A]">Methhod of sterilization:</p>
                                <p className="font-black italic text-[#1B3A5A] text-xl">irradiation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packaging Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-6">
                        <h3 className="text-red-600 font-black text-xl">Produktverpackung:</h3>
                        <p className="font-bold text-slate-800">Chirurgische Planung und Verfahren:</p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Alle Implantate sind in doppelten Phiolen in einer speziellen sterilen Umgebung verpackt worden, die Sterilität ist garantiert nur wenn Packung ungeöffnet oder unbeschädigt ist, im Falle, dass die Packung geöffnet oder beschädigt ist, bitte auf keinem Fall sterilisieren, sondern zum Lieferanten...
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-red-600 font-black text-xl">Product packaging:</h3>
                        <p className="font-bold text-slate-800">Surgical planning and procedures:</p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            All implants are cleaned and packaged in double vials in special clean environment, Sterility guaranteed if pack unopened or undamaged, in case that the package was damaged or opened, do not sterile in any way!, in this case, implant should be returned to supplier for replacement...
                        </p>
                    </div>
                </div>
            </section>

            {/* Procedures Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-24 border-t border-slate-100 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-8">
                        <h3 className="text-red-600 font-black text-2xl mb-8">Chirurgische Planung und Verfahren</h3>
                        <ol className="space-y-6 text-slate-700">
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">1.</span>
                                <p className="pt-1">Zur Ermittlung der angemessenen Knochenverfügbarkeit, sollen geeignete Röntgenaufnahmen verwendet werden.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">2.</span>
                                <p className="pt-1">Wählen Sie die geeigneten Implantate nach Einsatzgebiet.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">3.</span>
                                <p className="pt-1 font-bold">Bohr-Verfahren wählen je nach Implantattyp (Shark, Cylinder, Tornado, Safe)</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">4.</span>
                                <p className="pt-1">Entfernen Sie die Implantatpackung, und kleben Sie den Aufkleber mit den Daten für jedes Implantat auf die Patientenkartei.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">5.</span>
                                <p className="pt-1 font-bold">Öffnen Sie die äußere Flasche.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">6.</span>
                                <p className="pt-1">Ziehen Sie manuell das Implantat mit dem Einsatzsockel ( insertion mount) aus der inneren Flasche ( s. Abbildung ), und einschrauben in Implantatbohrung, drehen manuell im Uhrzeigersinn, benutzen Sie dann einen Schlüssel (1/4 Zoll) (Ratsche)</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">7.</span>
                                <p className="pt-1 font-bold">Ziehen Sie den Einsatzsockel aus dem Implantat.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">8.</span>
                                <p className="pt-1">Entfernen Sie die Abdeckungsschraube auf der Spitze des Einsatzsockels ( insertion mount) (Abb. 01), und platzieren Sie es im Uhrzeigersinn des Implantatskopf. (Verwenden Sie Hex Schlüssel 0.05 "</p>
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-red-600 font-black text-2xl mb-8">Surgical planning and procedures</h3>
                        <ol className="space-y-6 text-slate-700">
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">1.</span>
                                <p className="pt-1">To determine the adequate bone availability appropriate x-ray films should be used.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">2.</span>
                                <p className="pt-1">Choose the appropriate implants to be placed.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">3.</span>
                                <p className="pt-1 font-bold">Choose the Drill procedure according to Implant type (Shark, Cylinder, Tornado, Safe)</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">4.</span>
                                <p className="pt-1">Remove implant pack, and paste up the label with the data for each implant on the patient chart.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">5.</span>
                                <p className="pt-1 font-bold">Open the outer vial.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">6.</span>
                                <p className="pt-1">Pull the implant by the insertion mount from the inner vial manually (s. figure), and place it immediately, rotate clockwise manually, then use a ratchet (1/4 inch)</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">7.</span>
                                <p className="pt-1 font-bold">Pull the insertion mount out of the implant.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-black text-slate-300 text-2xl">8.</span>
                                <p className="pt-1">Remove the cover screw on the top of the insertion mount (fig.-01), and insert it clockwise on top of the implant .(Use hex driver 0.05").</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Diagrams Section */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto border-t border-slate-100 pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Image 1: Schematic */}
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video transition-all hover:shadow-primary/5 group">
                        <img
                            src="https://images.unsplash.com/photo-1581056344415-3abb473d756c?auto=format&fit=crop&q=80&w=1000"
                            alt="AL-Technology Implant Components Schematic"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent flex items-end justify-center pb-6">
                            <p className="text-red-600 font-bold text-xs uppercase tracking-tighter px-4 text-center">
                                Image 1: Components schematic AL-Technology Implantate
                            </p>
                        </div>
                    </div>

                    {/* Image 2: Clinical Product View */}
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video transition-all hover:shadow-primary/5 group">
                        <img
                            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000"
                            alt="AL-Technology Clinical Product View"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent flex items-end justify-center pb-6">
                            <p className="text-red-600 font-bold text-xs uppercase tracking-tighter px-4 text-center">
                                Image 2: Clinical product rendering
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <p className="text-red-600 font-bold text-sm lg:text-base italic uppercase tracking-tighter text-center md:text-left">
                        Abbildung: Komponente AL-Technology Implantate Type: Shark, Tornado, Cylinder, Safe (Internal hex 2.42 m"m)
                    </p>
                    <p className="text-red-600 font-bold text-sm lg:text-base italic uppercase tracking-tighter text-center md:text-right">
                        Figure: Components AL-Technology Implant type: Shark, Tornado, Cylinder, Safe (Internal hex 2.42 m"m)
                    </p>
                </div>
            </section>

            {/* Global Footer Note */}
            <div className="max-w-7xl mx-auto px-4 md:px-12 mt-32">
                <p className="text-slate-400 font-bold italic border-t border-slate-100 pt-8 uppercase tracking-widest text-sm">
                    Für Ihre Bestellungen Klicken sie bitte auf die jeweilige Cat.Nr.
                </p>
            </div>
        </main>
    );
}
