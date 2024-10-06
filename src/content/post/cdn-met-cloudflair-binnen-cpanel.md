---
publishDate: 2024-09-25T00:00:00Z
title: Magick Media - CDN met Cloudflair in cPanel
h1: Hoe je Cloudflare gebruikt en instelt via cPanel
excerpt: Leer hoe je Cloudflare via cPanel instelt om je website sneller en veiliger te maken met een wereldwijd CDN.
image: /_astro/cloudflare.DkzWCBBw.jpg
category: Hosting
tags:
  - Hosting
  - Cloudflare
---
<a href="https://www.cloudflare.com/" target="_blank" rel="noopener">Cloudflare</a> is een van de meest populaire Content Delivery Networks (CDN) en biedt verschillende diensten om je website sneller, veiliger en stabieler te maken. Met Cloudflare kun je je website beschermen tegen aanvallen, de laadtijd versnellen en je serverbelasting verminderen. Een groot voordeel van Cloudflare is dat het eenvoudig te integreren is met veel hostingdiensten, onder andere via cPanel.

In dit artikel leer je wat Cloudflare is, hoe het werkt en hoe je het via cPanel kunt instellen om de prestaties van je website te verbeteren.

- [Wat is Cloudflare?](#wat-is-cloudflare)
- [Cloudflare instellen vanuit cPanel](#cloudflare-instellen-vanuit-cpanel)
- [Tutorial(video)](#tutorial-video)
- [Conclusie](#conclusie)

## Wat is Cloudflare?
Cloudflare is een dienst die werkt als een tussenlaag tussen je bezoekers en je webserver. Het biedt verschillende functionaliteiten, zoals:
<ul>
  <li><a href="/hoe-een-cdn-website-sneller-maakt/">CDN (Content Delivery Network)</a>: Cloudflare slaat statiche bestanden van je website op in een wereldwijd netwerk van servers. Hierdoor kunnen gebruikers de content laden vanaf de dichtstbijzijnde server, wat de laadtijd verkort en je website dus sneller maakt.
  <li><b>DDoS-bescherming</b>: Cloudflare beschermt je website tegen <a href="https://nl.wikipedia.org/wiki/Distributed_denial-of-service" target="_blank" rel="noopener">Distributed Denial of Service (DDoS)-aanvallen</a> die je site kunnen platleggen door een grote hoeveelheid verkeer naar je server te sturen.</li>
  <li><b>SSL-certificaten</b>: Cloudflare biedt gratis SSL-certificaten aan, waardoor je website wordt beveiligd met HTTPS, wat zowel de veiligheid als je <a href="/zoekmachine-optimalisatie-seo/">SEO</a> verbetert.</li>
</ul>

[[Top]](#top)

## Cloudflare instellen, vanuit cPanel
Veel hostingproviders bieden een eenvoudige integratie met Cloudflare via cPanel, het beheerplatform voor webhosting. Hier zijn de stappen om Cloudflare in te stellen, in dit geval via cPanel:

1. <b>Log in op cPanel</b><br>
Ga naar het cPanel van je hostingprovider. Je kunt meestal inloggen via een link die je hostingprovider heeft verstrekt, bijvoorbeeld <i>jouwwebsite.com/cpanel</i>.

2. <b>Zoek naar de Cloudflare-optie</b><br>
Eenmaal ingelogd in cPanel, zoek je naar de Cloudflare-optie onder de categorie 'Software'. Het Cloudflare-pictogram ziet eruit als een oranje wolkje met een zon erdoorheen.

![Voorbeeld van Cloudflare in cPanel](src/assets/images/cloudflare-logo-cpanel.jpg)

3. <b>Maak een Cloudflare-account aan of log in</b><br>
Als je nog geen Cloudflare-account hebt, kun je er eenvoudig een aanmaken vanuit cPanel. Klik op ‘Sign Up’ en volg de stappen om je account te registreren. Heb je al een account, klik dan op ‘Log In’ en voer je inloggegevens in.

4. <b>Selecteer je domein</b><br>
Nadat je bent ingelogd of een account hebt aangemaakt, krijg je een lijst te zien met domeinen die beschikbaar zijn in je cPanel. Kies het domein dat je wilt versnellen via Cloudflare.

5. <b>Schakel Cloudflare in</b><br>
Klik op de knop ‘Enable’ om Cloudflare in te schakelen voor je gekozen domein. Zodra Cloudflare is ingeschakeld, begint het automatisch je website te versnellen door statische bestanden te cachen en via zijn netwerk te verspreiden.

6. <b>Kies je Cloudflare-instellingen</b><br>
Cloudflare biedt verschillende instellingen die je kunt aanpassen voor je website. In cPanel kun je bijvoorbeeld kiezen tussen:
<ul>
  <li><b>CDN-modus:</b> Activeer de CDN-modus zodat je website automatisch wordt verspreid over het Cloudflare-netwerk.</li>
  <li><b>SSL:</b> Schakel SSL in om je website te beveiligen met HTTPS.</li>
  De standaardinstellingen van Cloudflare zijn vaak voldoende voor de meeste websites, maar je kunt de instellingen verder optimaliseren afhankelijk van je behoeften.
</ul>

7. <b>Controleer je DNS-instellingen</b><br>
Cloudflare werkt met je <a href="https://nl.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noopener">DNS-instellingen</a>. In cPanel kun je je DNS-records beheren via de Cloudflare-interface. Zorg ervoor dat de relevante DNS-records zijn aangevinkt om via Cloudflare te gaan. Dit wordt meestal aangegeven door een oranje wolkje naast de DNS-records. Zie eventueel onderstaande video als voorbeeld.

8. <b>Wacht totdat de DNS doorgevoerd is</b><br>
Het kan even duren voordat Cloudflare volledig actief is op je website, omdat de DNS-instellingen wereldwijd moeten worden bijgewerkt. Dit proces kan 24 tot 48 uur duren, maar meestal duurt het enkele uurtjes. Zodra dit proces voltooid is, zal je website via het Cloudflare-netwerk worden geladen.

## Tutorial (video)
Liever beeld bij de stappen? Onderstaande video legt precies uit hoe je Cloudflare insteld, ookal doet deze tutorial het niet vanuit cPanel, de instellingen blijven hetzelfde:

<iframe width="560" height="315" src="https://www.youtube.com/embed/9vaiZQtL9lQ?si=qz0j_KYjSPNhAhbL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[[Top]](#top)

## Conclusie
Het gebruik van Cloudflare via cPanel is een uitstekende manier om de prestaties van je website te verbeteren zonder veel technische kennis. Door het inschakelen van een CDN, beveiliging en caching, zorg je ervoor dat je website sneller laadt, beter beschermd is tegen aanvallen, en efficienter werkt, ongeacht waar je bezoekers zich bevinden. Cloudflare biedt bovendien een simpele integratie binnen cPanel, waardoor je in slechts een paar klikken van alle voordelen kunt profiteren.

Hulp nodig bij het gebruiken van Cloudflare? <a href="/contact/">Neem dan gerust contact met ons op</a>!

[[Top]](#top)