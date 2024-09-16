---
publishDate: 2024-09-11T00:00:00Z
title: Magick Media - Email verhuizen met Outlook backup en IMAP
h1: E-mail verhuizen; Outlook backup maken en IMAP instellen voor een soepele migratie
excerpt: Leer hoe je je e-mail kunt verhuizen naar een nieuwe server door middel van een Outlook-backup of door e-mails direct te verplaatsen via IMAP. Beide methoden zorgen ervoor dat je geen belangrijke berichten verliest en dat de migratie soepel verloopt.
image: /_astro/email-migratie-outlook._XB1Xw2B.jpg
category: Hosting
tags:
  - Hosting
  - Migratie
---

[Manier 1: Outlook backup maken en importeren](#manier-1-outlook-backup-maken-en-importeren)
  - [Stap 1: Outlook backup maken](#stap-1-outlook-backup-maken)
  - [Stap 2: E-mail verhuizen naar een nieuwe server](#stap-2-e-mail-verhuizen-naar-een-nieuwe-server)
  - [Stap 3: IMAP instellen](#stap-3-imap-instellen)
  - [Stap 4: E-mails importeren uit de backup](#stap-4-e-mails-importeren-uit-de-backup)

[Manier 2: E-mails verplaatsen via IMAP in Outlook](#manier-2-e-mails-verplaatsen-via-imap-in-outlook)
  - [Stap 1: Beide e-mailaccounts toevoegen via IMAP](#stap-1-beide-e-mailaccounts-toevoegen-via-imap)
  - [Stap 2: E-mails verplaatsen naar je nieuwe inbox](#stap-2-e-mails-verplaatsen-naar-je-nieuwe-inbox)
  - [Stap 3: Controleer de overdracht](#stap-3-controleer-de-overdracht)

Het verhuizen van je email naar een andere server kan, net als het <a href="/wordpress-website-verhuizen-naar-andere-hosting/">verhuizen van je website</a>, complex lijken. Vooral wanneer je niet wilt dat belangrijke e-mails verloren gaan. Gelukkig zijn er verschillende methoden om dit proces soepel te laten verlopen. In dit artikel bespreken we twee effectieve manieren om je e-mail te migeren, inclusief het maken van een Outlook-backup en het instellen van IMAP.

## Manier 1: Outlook backup maken en importeren
De eerste methode is om een backup te maken van je bestaande e-mails en deze later te importeren in je nieuwe account. Dit beschermt je tegen eventuele problemen tijdens de migratie. Wij gebruiken voor dit proces de <a href="https://www.microsoft.com/nl-nl/microsoft-365/outlook/outlook-for-windows?market=nl" target="_blank" rel="noopener">desktop variant van Outlook</a>.


### Stap 1: Outlook backup maken
Voordat je begint met het verhuizen van je e-mail, is het verstandig om een backup te maken van al je e-mails in Outlook. Zo heb je een kopie van je belangrijke berichten voor het geval er iets misgaat tijdens de migratie.

Zo maak je een backup in Outlook:

1. Open <b>Outlook</b> en ga naar <b>Bestand</b>.
2. Klik op <b>Opties</b>, vervolgens op <b>Geavanceerde opties</b>.
3. Selecteer <b>Exporteren</b> en kies <b>Exporteren naar een bestand</b>.
4. Kies <b>Outlook-gegevensbestand (.pst)</b> en selecteer de mappen die je wilt exporteren (bijvoorbeeld je Inbox).
5. Sla het bestand op een veilige locatie op en klik op <b>Voltooien</b>.

### Stap 2: E-mail verhuizen naar een nieuwe server
Nadat je een backup hebt gemaakt, kun je beginnen met het instellen van je nieuwe e-mailaccount. De meeste e-mailproviders ondersteunen <b>IMAP</b>, een protocol dat e-mails synchroniseert tussen de server en je apparaten.

Om je nieuwe account toe te voegen in Outlook:

1. Meld je aan bij de beheerpagina van je nieuwe server en maak een nieuw e-mailaccount aan.
2. Noteer de IMAP-serverinstellingen van je nieuwe provider, zoals inkomende en uitgaande serveradressen.
3. Ga in <b>Outlook</b> naar <b>Bestand > Accountinstellingen</b>.
4. Klik op <b>Nieuw</b> en vul je emailadres en wachtwoord in.
5. Kies <b>Handmatige instellingen</b> en selecteer <b>IMAP</b> als accountype.
6. Vul de servergegevens in en klik op <b>Volgende</b> om je account toe te voegen.

### Stap 3: IMAP instellen
Met IMAP worden je e-mails tussen de server en je apparaat gesynchroniseerd. Dit betekent dat je altijd toegang hebt tot je nieuwste e-mails, ongeacht op welk apparaat je inlogt.

Voer de volgende gegevens in bij het instellen van IMAP:

<li><b>Inkomende server (IMAP)</b>: Bijvoorbeeld imap.jouwprovider.com.</li>
<li><b>Uitgaande server (SMTP)</b>: Bijvoorbeeld smtp.jouwprovider.com.</li>
<li><b>Poort voor IMAP</b>: Meestal 993 voor inkomende e-mails.</li>
<li><b>Poort voor SMTP</b>: Vaak 587 voor uitgaande e-mails.</li>

### Stap 4: E-mails importeren uit de backup
Nu je nieuwe account is ingesteld en IMAP is geconfigureerd, kun je de e-mails van je oude account importeren uit de backup.

Volg deze stappen om je e-mails te importeren:
1. Ga in <b>Outlook</b> naar <b>Bestand > Importeren en Exporteren</b>.
2. Kies <b>Importeren uit een ander programma of bestand</b>.
3. Selecteer <b>Outlook-gegevensbestand (.pst)</b> en navigeer naar de backup die je eerder hebt gemaakt.
4. Kies welke mappen je wilt importeren en klik op <b>Voltooien</b>.

Je emails worden nu toegevoegd aan je nieuwe account.

[[Top]](#top)

## Manier 2: E-mails verplaatsen via IMAP in Outlook
Een alternatieve manier om je e-mails te verhuizen, is door zowel je oude als nieuwe e-mailaccounts toe te voegen in Outlook via IMAP en de berichten direct te verplaatsen. Dit kan sneller zijn, omdat je geen aparte backup hoeft te maken en te importeren.

### Stap 1: Beide E-mailaccounts toevoegen via IMAP
Voeg zowel je oude als je nieuwe e-mailaccount toe in Outlook via IMAP. Dit doe je door naar Bestand > Accountinstellingen te gaan, een nieuw account toe te voegen en voor IMAP te kiezen. Herhaal dit voor beide accounts.

### Stap 2: E-mails verplaatsen naar je nieuwe Inbox
Zodra beide accounts zijn toegevoegd, kun je beginnen met het verplaatsen van de e-mails:

1. Ga naar de <b>Inbox</b> van je oude e-mailaccount in Outlook.
2. Selecteer alle e-mails in je oude Inbox (door bijvoorbeeld op <b>Ctrl + A</b> te drukken).
3. Klik met de rechtermuisknop op een van de geselecteerde berichten en kies <b>Move > Copy to Folder</b>.
4. Zorg ervoor dat je dit voor zowel de tabbladen <b>Focused</b> als <b>Other</b> doet, zodat je geen berichten mist.
5. Selecteer de <b>Inbox</b> van je nieuwe e-mailaccount die je eerder via IMAP hebt toegevoegd.


### Stap 3: Controleer de Overdracht
Controleer of alle e-mails succesvol zijn verplaatst:

1. Open de <b>Inbox</b> van je nieuwe e-mailaccount en kijk of alle e-mails zijn overgekomen.
2. Controleer ook op andere apparaten of de e-mails correct zijn gesynchroniseerd.

[[Top]](#top)

## Conclusie
Het verhuizen van je e-mail hoeft geen stressvol proces te zijn. Met manier 1, waarbij je een Outlook-backup maakt en je e-mails importeert, of manier 2, waarbij je de e-mails direct tussen twee IMAP-accounts verplaatst, zorg je ervoor dat je belangrijke e-mails veilig zijn en de migratie soepel verloopt. Beide methoden zijn effectief, maar de keuze hangt af van je voorkeur en de omvang van je e-mails.

Hulp nodig bij de migratie van je email? Neem dan <a href="/contact/">contact</a> met ons op, wij helpen je graag!</li>

[[Top]](#top)