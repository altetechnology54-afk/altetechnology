import React from 'react';

export default async function CatalogAgbPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || "de";

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pb-24 px-4 md:px-12 max-w-[1000px] mx-auto">
            <header className="pt-8 md:pt-12 mb-8 border-b border-slate-100 pb-4">
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-sans">
                    Verkaufs- und Lieferungsbedingungen
                </h1>
            </header>

            <div className="space-y-8 text-sm md:text-base text-slate-800 leading-relaxed font-normal">
                {/* 1 */}
                <section className="space-y-2">
                    <h2 className="text-base md:text-lg font-bold text-slate-900">
                        1. Allgemein
                    </h2>
                    <p>
                        Diese Lieferbedingungen gelten für alle von uns vertriebenen Produkte. Mit der Auftragserteilung anerkennt der Vertragspartner unsere Bedingungen. Entgegenstehende Bedingungen gelten nur, wenn diese schriftlich vereinbart werden.
                    </p>
                </section>

                {/* 2 */}
                <section className="space-y-2">
                    <h2 className="text-base md:text-lg font-bold text-slate-900">
                        2. Vertragsabschluss, Vertragsinhalt
                    </h2>
                    <p>
                        Ein Vertrag kommt erst mit unserer schriftlichen Auftragsbestätigung oder mit Auslieferung der vereinbarten Leistungen zustande. Schriftform gilt auch für Zusicherungen, Nebenabreden und nachträgliche Änderungen. Der Besteller ist an dem erteilten Auftrag gebunden. Der Kunde erklärt sich damit einverstanden, dass wir Auskünfte über seine Bonität einholen. Bei negativer Prüfung behalten wir uns die Nichterfüllung des Auftrages vor.
                    </p>
                </section>

                {/* 3 */}
                <section className="space-y-2">
                    <h2 className="text-base md:text-lg font-bold text-slate-900">
                        3. Preise und Zahlungen
                    </h2>
                    <p>
                        Die Preise verstehen sich als Waren-, Dienstleistungswert ohne Nachlässe sowie zuzüglich der jeweils gültigen Umsatzsteuer. Mit Erscheinen eines neuen Kataloges werden alle früheren Preislisten ungültig. Unsere Rechnungen sind sofort fällig und binnen 14 Tagen ab Rechnungsdatum fällig, soweit nichts anderes vereinbart ist.
                    </p>
                </section>

                {/* 4 */}
                <section className="space-y-2">
                    <h2 className="text-base md:text-lg font-bold text-slate-900">
                        4. Gefahrenübergang, Kontrolle, Reklamationspflicht
                    </h2>
                    <p>
                        Die Gefahr geht mit der Auslieferung an den Versandbeauftragten auf den Auftraggeber über. Nur auf besonderen schriftlichen Auftrag des Bestellers veranlassen wir auf Kosten des Bestellers den Abschluss von Versicherungen. Der Vertragspartner ist verpflichtet, die Ware auf Mängel zu prüfen und etwaige Mängel unverzüglich, längstens binnen 14 Tagen schriftlich zu reklamieren.
                    </p>
                </section>

                {/* 5 */}
                <section className="space-y-2">
                    <h2 className="text-base md:text-lg font-bold text-slate-900">
                        5. Gewährleistungen, Rückgaberecht
                    </h2>
                    <p>
                        Soweit im Folgenden nichts Abweichendes bestimmt ist, leisten wir für die gelieferten Produkte in der Weise Gewähr, dass wir die Produkte durch einwandfreie Produkte ersetzen. Die Frist für die Verjährung des Anspruchs auf Gewährleistung beträgt vom Tage des Gefahrübergangs an gerechnet 12 Monate. Der Besteller ist verpflichtet, uns festgestellte Material-, Liefer- oder Herstellungsfehler sowie Transportschäden unverzüglich nach Erhalt mitzuteilen. Für Verbrauchsmaterialien hat der Besteller innerhalb von 14 Tagen für von uns gelieferte Ware ein Rückgaberecht.
                    </p>
                </section>

                {/* 6 */}
                <section className="space-y-2">
                    <h2 className="text-base md:text-lg font-bold text-slate-900">
                        6. Ausschluss von Schadensersatz, Haftungsbegrenzung, Rücktritt
                    </h2>
                    <p>
                        Bei von uns verschuldeter Unmöglichkeiten ist der Kunde berechtigt, vom Liefervertrag zurückzutreten bzw. Schadenersatz zu verlangen. Der Schadenersatzanspruch beschränkt sich auf 5 v. H. des bestellten Warenwertes. Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten, begrenzen wir unsere Schadensersatzhaftung auf den vertragstypischen, vorhersehbaren Schaden. Bei leicht fahrlässiger Verletzung von nicht wesentlichen Nebenpflichten, schließen wir unsere Schadensersatzhaftung aus. In allen Fällen einer Haftung auf Schadensersatz aufgrund fahrlässiger Pflichtverletzung, gleich welcher Rechtsgrundlage, wird unsere Haftung auf Schadensersatz auf den für uns vorhersehbaren Schaden begrenzt.
                    </p>
                    <p>
                        Weitergehende Schadensersatzansprüche des Kunden, gleich aus welchem Rechtsgrund, sind ausgeschlossen. Dies gilt nicht, soweit z.B. bei Personenschäden nach dem Produkthaftungsgesetz oder in Fällen des Vorsatzes, der groben Fahrlässigkeit oder des Fehlens zugesicherter Eigenschaften zwingend gehaftet wird. Sollten wir auf Schadensersatz aus Produzentenhaftung nach § 823 BGB (deliktische Anspruchsgrundlage) in Anspruch genommen werden, begrenzen wir unsere Haftung über die vorstehenden Bestimmungen hinaus auf die Ersatzleistung unseres Haftpflichtversicherers. Soweit die Versicherung nicht oder nicht vollständig eintritt, bleibt unsere Haftung, begrenzt auf die Höhe der Versicherungssumme unberührt. Ist die Versicherungssumme nicht schadens-, vertrags-, sachtypisch abgeschlossen, begrenzen wir unsere Haftung in diesen Fällen auf den schadens-, vertrags- und sachtypischen Schadensbetrag. Die vorstehenden Bestimmungen gelten nicht, wenn es sich um Schäden an Leben, Körper und Gesundheit und/oder um Ansprüche nach Produkthaftungsgesetz handelt. Die gesetzlichen Rücktrittsrechte bleiben unberührt.
                    </p>
                </section>

                {/* 7 */}
                <section className="space-y-2">
                    <h2 className="text-base md:text-lg font-bold text-slate-900">
                        7. Eigentumsvorbehalt
                    </h2>
                    <p>
                        Wir behalten uns das Eigentum der gelieferten Ware bis zum Eingang des Warenwertes aus dem jeweils zugrundeliegenden Liefervertrag vor. Beim Ausbleiben der vereinbarten Zahlungen sind wir berechtigt, ohne Fristsetzung die Herausgabe der Vorbehaltsware zu verlangen.
                    </p>
                </section>

                {/* 8 */}
                <section className="space-y-2">
                    <h2 className="text-base md:text-lg font-bold text-slate-900">
                        8. Gerichtsstand
                    </h2>
                    <p>
                        Gerichtsstand für alle Streitigkeiten aus oder in Verbindung mit diesem Vertrag ist München.
                    </p>
                </section>

                {/* 9 */}
                <section className="space-y-2">
                    <h2 className="text-base md:text-lg font-bold text-slate-900">
                        9. Nebenabreden
                    </h2>
                    <p>
                        Nebenabreden bedürfen der Schriftform. Sollten einzelne Bestimmungen unwirksam sein, so wird die Gültigkeit der übrigen hiervon nicht berührt. Die unwirksame Bestimmung wird durch eine möglichst gleichwertige wirksame Regelung ersetzt.
                    </p>
                </section>
            </div>
        </main>
    );
}
