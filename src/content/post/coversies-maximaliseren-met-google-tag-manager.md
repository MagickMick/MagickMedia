---
publishDate: 2024-09-26T00:00:00Z
title: Magick Media - Google Ads conversies maximaliseren met GTM
h1: Een handleiding; Conversies bijhouden in Google Ads met Google Tag Manager
excerpt: Leer hoe je Google Tag Manager inzet voor Google Ads conversietracking en maximaliseer je campagnes met tags, triggers en nauwkeurige conversiemeting!
image: /_astro/google-tag-manager-handleiding.DBgTD35l.jpg
category: Google Ads
tags:
  - Google Ads
  - Google Tag Manager
---
Het optimaliseren van je Google Ads-campagnes draait om meer dan alleen de juiste zoekwoorden of advertenties kiezen. Om écht succes te behalen, moet je weten hoe goed je advertenties presteren door nauwkeurig je conversies bij te houden. Hier komt Google Tag Manager (GTM) om de hoek kijken. GTM is een krachtige tool waarmee je eenvoudig tags en triggers kunt instellen om je conversies in Google Ads te meten. In deze blog leer je wat conversietracking is, waarom het belangrijk is, en hoe je GTM kunt gebruiken om je campagnes te optimaliseren.

- [Wat is conversietracking en waarom is het belangrijk?](#wat-is-conversietracking-en-waarom-is-het-belangrijk)
- [Waarom Google Tag Manager voor conversietracking?](#waarom-google-tag-manager-voor-conversietracking)
- [Tags en triggers](#tags-en-triggers)
- [Stap-voor-stap handleiding: Conversies instellen in Google Ads en GTM](#stap-voor-stap-handleiding-conversies-instellen-in-google-ads-en-gtm)
  - [Stap 1: Stel Conversies in Google Ads in](#stap-1-stel-conversies-in-google-ads-in)
  - [Stap 2: Trigger(s) toevoegen binnen Google Tag Manager](#stap-2-triggers-toevoegen-binnen-google-tag-manager)
  - [Stap 3: Stel tag in binnen GTM](#stap-3-stel-tag-in-binnen-gtm)
  - [Stap 4: Test of je tag werkt in GTM](#stap-4-test-of-je-tag-werkt-in-gtm)
  - [Stap 5: Publiceer je tag in GTM](#stap-5-publiceer-je-tag-in-gtm)

## Wat is conversietracking en waarom is het belangrijk?
Conversietracking is het proces waarbij je meet hoeveel van je websitebezoekers een bepaalde actie uitvoeren die jij als waardevol beschouwt. Een waardevolle actie kan een aankoop zijn, maar ook het invullen van een formulier of het klikken op je telefoonummer. Deze acties worden conversies genoemd. Het bijhouden van conversies is belangrijk bij het evalueren van de Google Ads-campagnes. Zonder deze data weet je niet of je advertenties daadwerkelijk leiden tot waardevolle acties. In <a href="/optimaliseer-google-ads-campagne-hoger-conversieratio/">dit artikel</a> omschrijven we wat je nog meer kunt doen om je Google Ads campagnes te optimaliserne en je conversieratio te verhogen.

[[Top]](#top)

## Waarom Google Tag Manager voor conversietracking?
Google Tag Manager vereenvoudigt het proces van conversietracking door de technische complexiteit van het beheren van trackingcodes (tags) op je website weg te nemen. In plaats van elke keer de code op je website handmatig aan te passen, kun je GTM gebruiken om tags en triggers toe te voegen of te bewerken via een gebruiksvriendelijke interface.

Met GTM kun je onder andere:
<ul>
  <li>Tags beheren zonder tussenkomst van een ontwikkelaar.</li>
  <li>Snel aanpassingen maken aan je tracking zonder dat je code op de website hoeft te wijzigen.</li>
  <li>Verschillende platforms en tools integreren, zoals Google Ads, Google Analytics, en Facebook Pixel, allemaal vanaf één locatie.</li>
</ul>

[[Top]](#top)

## Tags en triggers
Voordat we naar de stappen gaan om conversietracking in te stellen, is het belangrijk om te begrijpen wat <b>tags</b> en <b>triggers</b> zijn in Google Tag Manager:
<ul>
  <li>Tags zijn kleine stukjes code die gegevens verzenden naar een derde partij, zoals Google Ads of Google Analytics. Denk bijvoorbeeld aan een Google Ads Conversion Tag die Google laat weten wanneer iemand een aankoop heeft gedaan via jouw advertentie.</li>
  <li>Triggers bepalen wanneer een tag moet worden geactiveerd. Dit kan een gebeurtenis zijn zoals een paginabezoek, een klik op een knop, of het invullen van een formulier.</li>
</ul>
Nu we weten wat tags en triggers zijn, kunnen we aan de slag met het instellen van conversietracking met GTM.

[[Top]](#top)

## Stap-voor-stap handleiding: Conversies instellen in Google Ads en GTM
### Stap 1: Stel Conversies in Google Ads in
1. Ga naar <a href="https://ads.google.com/intl/en_NL/home/" target="_blank" rel="noopener">Google Ads</a> en log in.
2. Klik in het linker menu op Doelen > Conversie > Overzicht.
3. Klik op de "+ Conversieactie maken"-knop om een nieuwe conversieactie toe te voegen.

![Voorbeeld van voeg conversie actie toe](src/assets/images/voeg-conversieactie-toe.jpg)

4. Selecteer het type conversie dat je wilt bijhouden (bijvoorbeeld een aankoop of formulierinvoer).
5. Vul de details van je conversie in, zoals een naam, waarde, en hoe je de conversie wilt tellen (elke keer of eenmalig per klik).
6. Klik op Opslaan en doorgaan
6. Selecteer vervolgens het tabblad 'Google Tag Manager gebruiken.
7. <b>Kopieer</b> de <b>Conversion ID</b> en de <b>Conversion Label</b>. Je hebt deze gegevens later nodig in GTM.

![Voorbeeld van het conversie ID en conversie label](src/assets/images/gtm-conversie-id-en-label.jpg)

### Stap 2: Trigger(s) toevoegen binnen Google Tag Manager
1. Log in bij <a href="https://marketingplatform.google.com/intl/nl/about/tag-manager/" target="_blank" rel="noopener">Google Tag Manager</a> en selecteer je container.
2. Klik onder het kopje Triggers op Nieuw.
3. Kies wanneer de conversietag moet worden geactiveerd. Dit kan bijvoorbeeld gebeuren wanneer iemand op de bedanktpagina komt na het invullen van een formulier.
4. Selecteer een trigger type, zoals "Paginaweergave", en stel de juiste voorwaarden in, bijvoorbeeld "Page URL bevat /bedankt".
5. Sla de trigger op.

![Voorbeeld van de GTM trigger configuratie](src/assets/images/gtm-triggerconfiguratie.jpg)

### Stap 3: Stel tag in binnen GTM
1. Klik op "Tags" > "Nieuw" en geef deze tag een naam zoals "Google Ads Conversietag".
2. Klik op "Tagconfiguratie" en selecteer "Google Ads" > "Conversies bijhouden van Google Ads"
3. Voeg de Conversion ID en Conversion Label in die je hebt gekopieerd uit Google Ads.
4. Als je nog geen Conversion Linker- tag hebt, maak deze dan eerst aan.
5. Indien van toepassing: stel de overige opties in, zoals de conversiewaarde.
6. Selecteer de trigger wanneer de tag aangeroepen moet worden, in ons geval bij de Bedanktpagina trigger.

![Voorbeeld van de Google Ad conversietag](src/assets/images/google-ad-conversietag.jpg)

### Stap 4: Test of je tag werkt in GTM
1. Klik binnen GTM rechtsboven op "Voorbeeld".
2. Vul de URL in van de pagina waar de tag te vinden is. Hierna verschijnt de website in een test-venster.
3. Voer de trigger uit, in onderstaand voorbeeld is het door naar de '/plan-een-gesprek' pagina te gaan.
4. Na het uitvoeren van deze actie, ga je naar de "Tag assistant" tab die ondertussen geopend is.
5. Klik de popup weg en kijk bij "Overzicht". Hieronder zie je de Uitvoer van je container. Je tag en de Conversion Linker moet bij "geactiveerde tags" staan.

![Voorbeeld test google tag](src/assets/images/test-tag-google-tag-manager.jpg)

### Stap 5: Publiceer je tag in GTM
1. Nadat je tag werkt bij stap 4, druk je op 'Verzenden' rechtsboven in GTM.
2. Vul een titel en eventueel een omschrijving in.
3. Druk op 'Publiceren'. Nu worden de wijzigingen opgeslagen.

![Voorbeeld test google tag](src/assets/images/publiceren-binnen-google-tag-manager.jpg)

Hulp nodig bij het instellen van Google Tag Manager met Google Ads? Wij helpen graag, neem snel <a href="/contact/">contact</a> met ons op!
Liever geheel uitbesteden? <a href="/google-ads-sea/">We nemen graag je zorg over Google Ads uit handen!</a>

[[Top]](#top)