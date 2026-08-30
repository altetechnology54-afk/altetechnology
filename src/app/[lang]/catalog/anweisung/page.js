import React from 'react';
import Link from 'next/link';

export default async function InstructionsPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-20 px-4 md:px-12 max-w-[1200px] mx-auto">
            {/* Main Title */}
            <div className="pt-8 md:pt-12 mb-8 md:mb-12 border-b border-slate-100 pb-4">
                <h1 className="text-3xl md:text-5xl font-light text-slate-800 tracking-tight">
                    Anweisung
                </h1>
            </div>

            {/* Two Column Flags & Intro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
                {/* German Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-8 rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                            <div className="h-1/3 bg-black"></div>
                            <div className="h-1/3 bg-[#DD0000]"></div>
                            <div className="h-1/3 bg-[#FFCE00]"></div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[#1A3694] font-bold text-base md:text-lg mb-2">
                            Anweisung für die Verwendung für AL-Technology Implantate
                        </h2>
                        <p className="text-red-600 font-bold text-sm md:text-base">
                            Warnung: <span className="font-semibold text-slate-900">AL-Technology Produkte sind nur durch zertifizierte Zahnärzte einzusetzen</span>
                        </p>
                    </div>

                    {/* Symbols Box */}
                    <div className="flex items-start gap-4 py-4 border-y border-slate-100">
                        <span className="text-red-600 font-bold text-sm">Symbole</span>
                        <div className="space-y-2 text-xs md:text-sm text-slate-800 flex-1">
                            <div className="flex items-center gap-3">
                                <span className="font-black text-base">⚠️</span>
                                <span>See instructions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold border-2 border-slate-800 rounded-full w-5 h-5 flex items-center justify-center text-xs">②</span>
                                <span>For single use only</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-base">⌛</span>
                                <span>Expiry Date</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-black text-sm text-[#1A3694]">C€</span>
                                <span>0473 CE marking</span>
                            </div>
                        </div>
                        <div className="text-xs md:text-sm text-slate-700 italic border-l pl-4">
                            <p className="font-semibold text-[#1A3694]">Methode der Sterilisation:</p>
                            <p className="font-bold">Bestrahlung</p>
                        </div>
                    </div>

                    {/* Product packaging */}
                    <div className="space-y-2">
                        <h3 className="text-red-600 font-bold text-sm md:text-base">Produktverpackung:</h3>
                        <p className="text-xs md:text-sm font-semibold text-slate-900">Chirurgische Planung und Verfahren:</p>
                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
                            Alle Implantate sind in doppelten Phiolen in einer speziellen sterilen Umgebung verpackt worden, die Sterilität ist garantiert nur wenn Packung ungeöffnet oder unbeschädigt ist, im Falle, dass die Packung geöffnet oder beschädigt ist, bitte auf keinem Fall sterilisieren, sondern zum Lieferanten zurückbringen, beachten Sie das Expirationsdatum auf dem Satz vor Gebrauch. Implantate sollten sofort nach dem Öffnen der Phiolen benutzt werden.
                        </p>
                    </div>

                    {/* Surgical planning */}
                    <div className="space-y-3">
                        <h3 className="text-red-600 font-bold text-sm md:text-base">Chirurgische Planung und Verfahren</h3>
                        <ol className="list-decimal list-inside space-y-2 text-xs md:text-sm text-slate-700 leading-relaxed">
                            <li>Zur Ermittlung der angemessenen Knochenverfügbarkeit, sollen geeignete Röntgenaufnahmen verwendet werden.</li>
                            <li>Wählen Sie die geeigneten Implantate nach Einsatzgebiet.</li>
                            <li>Bohr-Verfahren wählen je nach Implantattyp (Shark, Cylinder, Tornado, Safe).</li>
                            <li>Entfernen Sie die Implantatpackung, und kleben Sie den Aufkleber mit den Daten für jedes Implantat auf die Patientenkartei.</li>
                            <li>Öffnen Sie die äußere Flasche.</li>
                            <li>Ziehen Sie manuell das Implantat mit dem Einsatzsockel (insertion mount) aus der inneren Flasche (s. Abbildung), und einschrauben in Implantatbohrung, drehen manuell im Uhrzeigersinn, benutzen Sie dann einen Schlüssel (1/4 Zoll) (Ratsche).</li>
                            <li>Ziehen Sie den Einsatzsockel aus dem Implantat.</li>
                            <li>Entfernen Sie die Abdeckungsschraube auf der Spitze des Einsatzsockels (insertion mount) (Abb. 01), und platzieren Sie es im Uhrzeigersinn des Implantatskopf. (Verwenden Sie Hex Schlüssel 0.05").</li>
                        </ol>
                    </div>
                </div>

                {/* English Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-8 rounded shadow-sm border border-slate-200 overflow-hidden flex items-center justify-center bg-[#012169] text-white font-black text-xs">
                            🇬🇧
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[#1A3694] font-bold text-base md:text-lg mb-2">
                            Instructions for use for AL-Technology dental implants
                        </h2>
                        <p className="text-red-600 font-bold text-sm md:text-base">
                            Warning: <span className="font-semibold text-slate-900">Al-Technology implants are products to be used only by certified dentists.</span>
                        </p>
                    </div>

                    {/* Symbols Box */}
                    <div className="flex items-start gap-4 py-4 border-y border-slate-100">
                        <span className="text-red-600 font-bold text-sm">Symbols</span>
                        <div className="space-y-2 text-xs md:text-sm text-slate-800 flex-1">
                            <div className="flex items-center gap-3">
                                <span className="font-black text-base">⚠️</span>
                                <span>See instructions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold border-2 border-slate-800 rounded-full w-5 h-5 flex items-center justify-center text-xs">②</span>
                                <span>For single use only</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-base">⌛</span>
                                <span>Expiry Date</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-black text-sm text-[#1A3694]">C€</span>
                                <span>0473 CE marking</span>
                            </div>
                        </div>
                        <div className="text-xs md:text-sm text-slate-700 italic border-l pl-4">
                            <p className="font-semibold text-[#1A3694]">Method of sterilization:</p>
                            <p className="font-bold">irradiation</p>
                        </div>
                    </div>

                    {/* Product packaging */}
                    <div className="space-y-2">
                        <h3 className="text-red-600 font-bold text-sm md:text-base">Product packaging:</h3>
                        <p className="text-xs md:text-sm font-semibold text-slate-900">Surgical planning and procedures:</p>
                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
                            All implants are cleaned and packaged in double vials in special clean environment, Sterility guaranteed if pack unopened or undamaged, in case that the package was damaged or opened, do not sterile in any way!, in this case, implant should be returned to supplier for replacement, notice the expiration date on the pack before use, and implants should be used immediately after opening the vials.
                        </p>
                    </div>

                    {/* Surgical planning */}
                    <div className="space-y-3">
                        <h3 className="text-red-600 font-bold text-sm md:text-base">Surgical planning and procedures</h3>
                        <ol className="list-decimal list-inside space-y-2 text-xs md:text-sm text-slate-700 leading-relaxed">
                            <li>To determine the adequate bone availability appropriate x-ray films should be used.</li>
                            <li>Choose the appropriate implants to be placed.</li>
                            <li>Choose the Drill procedure according to Implant type (Shark, Cylinder, Tornado, Safe).</li>
                            <li>Remove implant pack, and paste up the label with the data for each implant on the patient chart.</li>
                            <li>Open the outer vial.</li>
                            <li>Pull the implant by the insertion mount from the inner vial manually (s. figure), and place it immediately, rotate clockwise manually, then use a ratchet (1/4 inch).</li>
                            <li>Pull the insertion mount out of the implant.</li>
                            <li>Remove the cover screw on the top of the insertion mount (fig.-01), and insert it clockwise on top of the implant. (Use hex driver 0.05").</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Component Anatomy Bottom Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-8">
                    <div className="flex justify-center">
                        <img
                            src="/images/anweisung/123.png"
                            alt="Abbildung Komponente"
                            className="max-h-[350px] w-auto object-contain"
                        />
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="/images/anweisung/124.png"
                            alt="Figure Components"
                            className="max-h-[350px] w-auto object-contain"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs md:text-sm max-w-4xl mx-auto">
                    <div>
                        <p className="text-red-600 font-bold mb-2">
                            Abbildung: Komponente AL-Technology Implantate Type: Shark, Tornado, Cylinder, Safe (Internal hex 2.42 m"m):
                        </p>
                        <p className="text-slate-700">
                            Sterilität ist garantiert nur wenn Packung ungeöffnet und unbeschädigt ist. Im Falle dass, die Packung geöffnet oder beschädigt ist, bitte auf keinem Fall verwenden!
                        </p>
                    </div>
                    <div>
                        <p className="text-red-600 font-bold mb-2">
                            Figure: Components Al-Technology Implant type: Shark, Tornado, Cylinder, Safe (Internal hex 2.42 m"m):
                        </p>
                        <p className="text-slate-700">
                            Sterility guaranteed if pack unopened and undamaged, in case that the package was damaged or opened, do not use in any way!.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
