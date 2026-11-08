# MuseScore-stijl voor Aidan Wyber

`Aidan Wyber.mss` bouwt voort op de meest recente eigen MuseScore-export. `../Etude Style.mss` blijft het ongewijzigde oorspronkelijke bestand.

Installeer de TTF-bestanden in `fonts/` en herstart MuseScore. Open je partituur en kies **Opmaak / Format > Stijl laden / Load Style** om `Aidan Wyber.mss` toe te passen. De open-fontlicenties zijn meegeleverd.

De instellingen:

- Notenbalkspatie (spatium): **1,6 mm**.
- Boven- en ondermarge: **10 mm**, op zowel even als oneven pagina's. De bestaande zijmarges blijven behouden.
- Werktitel: **Cormorant Garamond Medium, vast 30 pt**, linksboven in het titelvak.
- Ondertitel: **Space Grotesk, vast 14 pt**, links onder de titel.
- Details in het titelvak (zoals componist, duur en versie): **Space Grotesk, vast 10 pt**. De componistcredit staat linksonder; de gebruikersstijl **Bezetting / versie** staat daar één regel boven en kan ook voor de speelduur worden gebruikt.
- Partijnaam in het titelvak: **Space Grotesk, vast 10 pt**, rechtsboven zodat deze niet op de titel begint.
- Gewone notenbalk- en systeemtekst: **Space Grotesk, vast 10 pt**, inclusief tempo, metronoomtekst, expressie, repetitietekens, instrumentnamen en tekstlijnen. Bestaande vet-/cursiefrollen blijven behouden.
- Akkoordsymbolen (standaard, alternatief en Nashville): **Space Grotesk, vast 10 pt, zwart**.
- Maatnummers en meermaatsrustbereiken: **Space Grotesk, vast 8 pt, zwart**.
- Doorlopende koptekst: **Space Grotesk, vast 8 pt, zwart**. Op zowel even als oneven pagina's staat de partijnaam links (indien beschikbaar), de paginanummering (`$p / $n`) in het midden en de werktitel rechts.
- Voettekst: **https://aidanwyber.xyz** rechts op zowel even als oneven pagina's; het bestaande datumveld in het midden blijft behouden. Voettekst, copyright en paginanummers blijven **Space Grotesk, vast 8 pt, zwart**.
- Alle tekst en lijnen: volledig zwart (`#000000`). Kaderachtergronden blijven wit of transparant; het stijlbestand voegt geen paginavulling toe.

Leland / Leland Text en de specialistische notatiefonts voor tabulatuur, Romeinse analyse en becijferde bas blijven behouden voor hun specifieke muziekglyphs. Hun symboolgroottes worden niet gelijkgetrokken met gewone tekst. Andere pagina-, notatie-, afspeel- en kop-/voettekstinhoud blijft afkomstig uit de actuele export.

Bij bestaande partituren kunnen lokale tekst- of tekeninstellingen de stijl overschrijven. Herstel dan de betreffende stijlwaarden in het Eigenschappen-paneel. Controleer na het laden de titelregels en het titelvak: een `.mss` bevat geen partituurgebonden tekstinhoud, handmatige regeleinden of de hoogte van bestaande titelvakken.

Voor het titelvak uit het voorbeeld: gebruik titel, ondertitel, **Bezetting / versie** voor bijvoorbeeld `Duration 2:30`, en componisttekst voor `Composed by Aidan Wyber`. Maak het verticale titelvak in de partituur hoog genoeg om tussen ondertitel en details witruimte over te houden. Die teksten en de hoogte van het titelvak moeten in de partituur zelf worden ingesteld. De `.mss` verzorgt hun typografie en uitlijning. Bij zeer lange titels of partijnamen kan extra ruimte nodig zijn: rechts uitlijnen reserveert geen afzonderlijke kolom.

Na een nieuwe export naar `Aidan Wyber.mss` kun je `python scripts/generate-score-style.py` uitvoeren. Dit past bovenstaande maatvoering, tekst- en kleurregels toe op **dat actuele bestand**, zonder terug te keren naar de oorspronkelijke Etude-stijl of overige exportinstellingen te overschrijven. Een tweede uitvoering zonder wijzigingen heeft geen effect. De generator installeert of downloadt geen fonts.

Referentie: [MuseScore-tekstopmaak en lokale overrides](https://handbook.musescore.org/text/formatting-text).
