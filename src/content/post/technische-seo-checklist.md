---
publishDate: 2024-02-06T00:00:00Z
title: Magick Media - Technische SEO checklist
h1: Dé Technische SEO checklist van 2024
excerpt: In deze Technische SEO checklist lees je waar je op moet letten om je technische SEO te verbeteren. Dit verhoogt je vindbaarheid in Google.
image: /_astro/technische-seo-checklist-header.DtFEOCyo.jpeg
category: seo
tags:
  - zoekmachine optimalisatie
  - seo
---

In deze **Technische SEO checklist** gaan de volgende punten behandelen:
- [1. Wat valt er onder technische SEO?](#wat-valt-er-onder-technische-seo)
- [2. Waarom is dit een essentieel element in je SEO strategie?](#waarom-is-dit-een-essentieel-element-in-je-seo-strategie)
- [3. De checklist voor jouw website](#de-checklist-voor-jouw-website)
  - [Crawlen en indexing](#crawlen-en-indexing)
  - [De snelheid van je website](#de-snelheid-van-je-website)
  - [Duplicate content](#duplicate-content)
  - [Gebruiksvriendelijkheid van je website op mobiel](#gebruiksvriendelijkheid-van-je-website-op-mobiel)
  - [Website op HTTPS](#website-op-https)
  - [Structured data en Rich results](#structured-data-en-rich-results)
- [4. Tools voor het uitvoeren van technische SEO](#tools-voor-het-uitvoeren-van-technische-seo)
  - [Google Search Console](#google-search-console)
  - [Screaming Frog](#screaming-frog)
  - [Google PageSpeed Insights](#google-pagespeed-insights)
  - [Google Rich Results Test](#google-rich-results-test)

## Wat valt er onder technische SEO?
Dit deel van SEO omvat het verbeteren van de laadsnelheid van de site, het optimaliseren van de sitestructuur en URL's, het gebruik van structured data voor betere zoekresultaten, het aanpakken van dubbele inhoudsproblemen, het zorgen voor een mobiel vriendelijk ontwerp, het optimaliseren van de XML-sitemaps en robots.txt-bestanden, en het beheren van redirects. Technische SEO is een belangrijk aspect in het waarborgen van een gezonde online aanwezigheid en het zorgt ervoor dat zoekmachines de website gemakkelijker kunnen indexeren en ranken, wat uiteindelijk leidt tot een verbeterde vindbaarheid en gebruikerservaring.

[[Top]](#top)

## Waarom is dit een essentieel element in je SEO strategie?
Technische SEO is voor ons het beginpunt van de SEO cyclus die wij altijd doorlopen. Voordat we beginnen aan het optimaliseren van de content en het off-page SEO aspect, is het belangrijk dat er een solide basis is. Als je website technisch niet in orde is, kan je content nog zo goed zijn, zoekmachines zullen het waarschijnlijk lager ranken. Dit komt omdat zoekmachines de gebruikerservaring erg belangrijk vinden. En zeg nou zelf, niks is vervelender dan een website die er erg lang over doet om de pagina te laden. Laten we beginnen met een checklist waarop je allemaal kunt letten!

[[Top]](#top)

## De checklist voor jouw website
### Crawlen en indexing
<a href="/wat-is-crawlen/">Crawlen</a> stelt zoekmachines in staat om het web te doorzoeken en bruikbare resultaten te bieden aan gebruikers op basis van hun zoekopdrachten. Het is daarom belangrijk voor website eigenaren om ervoor te zorgen dat hun site gemakkelijk kan worden gecrawld en geïndexeerd om zichtbaar te zijn in zoekresultaten.
	
  <li><b>robots.txt: </b>Het kan voorkomen dat de zoekmachine, tijdens het crawlen, niet relevante pagina’s tegen komt, zoals bijvoorbeeld de inlogpagina van je CMS systeem. In dat geval kun je er met het robots.txt bestand voor zorgen dat de zoekmachine deze pagina’s niet meeneemt. Deze pagina’s worden dan niet gecrawld en geïndexeerd.</li>

  ![voorbeeld van een robots.txt bestand](src/assets/images/robots-txt-bestand.jpg)

  <li><b>Meta tags: </b>Je kunt ook meta-tags, zoals de no-index en no-follow tag, gebruiken als je er voor wilt zorgen dat een pagina niet wordt geïndexeerd (no-index) of dat een link naar een andere pagina niet gevolgd wordt door de zoekmachine (no-follow). Meestal gebruik je de robots.txt bestand, waar je in principe hetzelfde doet als een no-index, voor een deel van je website. De no-index tag gebruik je meestal voor losse pagina’s</li>
  
  ```javascript
  <meta name="robots" content="noindex">
  ```

  <li><b>XML Sitemap: </b>Zoals je wellicht in de robots.txt zag hierboven, wordt er verwezen naar een XML sitemap. Dit is een xml bestand die de structuur van de website aan de zoekmachines duidelijk maakt. Zo kan een zoekmachine je website sneller en beter crawlen en indexeren. Een handige manier om deze sitemap automatisch te generen, is met de gratis YoastSEO plugin.</li>

  ![sitemap.xml voorbeeld van WebhostinGuru](src/assets/images/sitemap-xml-voorbeeld.jpg)

  Als deze sitemap gegenereerd is, kun je de link indienen bij <a href="https://search.google.com/search-console/about" target="_blank" rel="noopener">Google Search Console</a> onder het kopje ‘Sitemap'.

  ### De snelheid van je website
  Een belangrijk onderdeel van de gebruikerservaring van je website, is de snelheid waarmee het laadt. Deze snelheid kun je meten met tools zoals <a href="https://gtmetrix.com/" target="_blank" rel="noopener">GTMetrix</a> of <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener">Page Speed Insights</a>. Page Speed Insights is vooral bedoelt om afzonderlijke pagina’s te meten. GTMetrix geeft je tips over de laadsnelheid van hele website. In een artikel die later verschijnt, lees je de KPI’s waar je allemaal naar kunt kijken bij het verbeteren van je website snelheid.

  ### Duplicate content
  Dubbele content kan er voor zorgen dat je site lager in de zoekresultaten wordt geplaatst. Een handige site om te checken hoeveel dubbele content er op je site is, is <a href="https://www.siteliner.com/" target="_blank" rel="noopener">Siteliner</a>.
  
  Een manier om dubbele content op te lossen, zonder daadwerkelijk de dubbele content te hoeven verwijderen, is door het gebruik van een canonical tag. Deze tag, ook wel bekend als de "rel=canonical" tag, is een meta-tag dat wordt gebruikt in HTML om aan zoekmachines te laten weten welke versie van een pagina als de belangrijkste of oorspronkelijke versie moet worden beschouwd, vooral wanneer er vergelijkbare of dubbele inhoud op verschillende URL's voorkomt. Het is een belangrijk hulpmiddel in zoekmachine-optimalisatie (SEO) om dubbele inhoudsproblemen te voorkomen en de rangschikking in zoekresultaten te verbeteren.

  ```javascript
  <link rel="canonical" href="https://www.voorbeeld.nl/oorspronkelijke-pagina">
  ```

  Het kan ook voorkomen dat je website uit twee of meerdere talen bestaat. Ook dan kun je dubbele content hebben. In dat geval kun je dit oplossen met de  hreflang tag. De Hreflang tag is een element die wordt gebruikt om zoekmachines duidelijk te maken in welke taal of regio de content van een pagina is bedoeld. Ze voorkomen dubbele inhoudsproblemen in meertalige websites en zorgen voor een betere gebruikerservaring.

  ```javascript
  <link rel="alternate" hreflang="es" href="https://www.voorbeeld.nl/es/pagina">
  ```

  Deze tag geeft aan dat de pagina is bedoeld voor Spaanstalige gebruikers, en zoekmachines zullen dit begrijpen en relevante zoekresultaten weergeven aan Spaanse zoekopdrachten.

  ### Gebruiksvriendelijkheid van je website op mobiel

  Tegenwoordig worden de meeste website bezocht via een mobiel apparaat. Daarom is Google sinds een aantal jaren overgeschakeld naar een ‘mobile-first indexering’, wat betekent dat de mobiele versie van een website de belangrijkste versie is voor het beoordelen en rangschikken in de zoekresultaten. Als je website niet mobiel vriendelijk is, loop je dus het risico dat je website lager in de zoekresultaten tevoorschijn gaat komen.
  
  Om te controleren of je website mobiel vriendelijk is, kun je de Google Mobile-Friendly Test gebruiken via de volgende link: <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener"><span>Google mobile friendly test</span></a>

  ![Test de mobiel vriendelijkheid van je website](src/assets/images/test-mobiel-vriendelijkheid.jpg)

  Ook in <a href="https://search.google.com/search-console/about" target="_blank" rel="noopener">Google Search Console</a> vind je een overzicht met tips wat je kunt veranderen als een pagina niet goed bruikbaar is op mobiel.

  ![Mobiel vriendelijkheid van je website op Google Search Console](src/assets/images/mobiel-vriendelijk-website-seo.jpg)

  ### Website op HTTPS
  Een andere ranking factor is het protocol waarmee een website geserveerd wordt aan de bezoeker. Dit kan namelijk via een beveiligd protocol (HTTPS) of op een onveilige manier (HTTP).

  Google vind het belangrijk dat gebruikers naar een veilige website gaan, daarom zal Google een website zonder SSL certificaat lager in de zoekresultaten weergeven.

  ### Structured data en Rich results
  Rich results en Structured data stelt zoekmachines in staat om de pagina beter te begrijpen doordat het informatie aan webpagina's toevoegt. Dit stelt zoekmachines in staat om de pagina in de zoekresultaten op een meer visueel aantrekkelijke en informatieve manier weer te geven. Hoe je dit precies toepast op je eigen website, leggen we later graag uit in een andere blogpost!

  [[Top]](#top)

  ## Tools voor het uitvoeren van technische SEO
  ### Google Search console
  <a href="https://search.google.com/search-console" target="_blank" rel="noopener">Google Search Console </a>geeft je inzicht in hoe goed je website scoort aan de hand van gedetailleerde rapporten. Deze tool biedt waardevolle gegevens over je websiteprestaties in zoekresultaten, zoals het aantal keren dat op je website is geklikt in de zoekresultaten, het aantal keer dat je website ook daadwerkelijk getoond is, de <a href="https://support.google.com/google-ads/answer/2615875?hl=nl#:~:text=De%20CTR%20is%20het%20aantal,zou%20uw%20CTR%205%25%20zijn." target="_blank" rel="noopener">CTR</a> (click-through rate), en nog veel meer. Met deze inzichten kun je je website blijven optimaliseren zodat je online aanwezigheid nog beter wordt en je doelgroep beter bedient wordt.

  ### Screaming Frog
  ![SEO Tooling Screaming Frog](src/assets/images/screaming-frog-seo-tooling.jpg)
  <a href="https://www.screamingfrog.co.uk/seo-spider/" target="_blank" rel="noopener">Screaming Frog</a> is een tool die je inzicht geeft in eventuele fouten op je website. Deze webcrawler scant je site op problemen zoals gebroken links, ontbrekende metabeschrijvingen, dubbele inhoud en meer. Met de resultaten van Screaming Frog kun je proactief fouten opsporen om de vindbaarheid van je website te verbeteren.

  ### Google PageSpeed Insights
  <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener">Google PageSpeed Insights</a> meet de snelheid van de pagina’s op je website. Deze tool beoordeelt de prestaties van je website op zowel mobiele apparaten als desktop. Daarnaast geeft het suggesties om de laadsnelheid te verbeteren. Hiermee maak je je website sneller. Mocht je niet genoeg inzichten verkrijgen met deze tool, dan kun je als alternatief de tool <a href="https://gtmetrix.com/" target="_blank" rel="noopener">GTMetrix</a> bekijken voor meer informatie.

  ### Google Rich Results Test
  <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Google Rich Results Test</a> geeft je inzicht of de pagina's goed genoeg is ingedeeld om Rich Results te tonen, zoals recepten en stapsgewijze handleidingen. Het beoordeelt of je gestructureerde gegevens correct zijn geïmplementeerd en of je pagina's in aanmerking komen voor deze Rich zoekresultaten. Een Rich Result moet voldoen aan de <a href="https://schema.org"><span><b>schema.org</b></span></a> opzet. Deze <a href="https://validator.schema.org/" target="_blank" rel="noopener">Schema.org Validator</a> is een handige tool om dat te checken.

  Vragen over dit artikel of graag je SEO uitbesteden? Neem dan gerust <a href="/contact/">contact</a> met ons op!</p>

  [[Top]](#top)