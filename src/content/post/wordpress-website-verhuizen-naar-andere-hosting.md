---
publishDate: 2024-05-06T00:00:00Z
title: Magick Media - Wordpress website verhuizen
h1: Wordpress website verhuizen naar andere hosting
excerpt: Hoe kun je het beste een WordPress-website naar een andere hostingprovider verhuizen? Bekijk onze handleiding over het verplaatsen van je site.
image: https://magickmedia.nl/_astro/stappen-verhuizen-website-wordpress.zZnvfkhF.jpg
category: Hosting
tags:
  - Wordpress
  - Hosting
  - Migratie
---
Een **Wordpress website verhuizen**' gaan we doen in de volgende stappen:

- [Stap 1: Download de All-in-One WP Migration plugin](#1-download-de-all-in-one-wp-migration-plugin)
- [Stap 2: Exporteer WordPress Site](#2-exporteer-wordpress-site)
- [Stap 3: Download de Export File](#3-dowload-de-export-file)
- [Stap 4: Account aanmaken op nieuwe hosting server](#4-account-aanmaken-op-nieuwe-hosting-server)
- [Stap 5: Installeer Wordpress](#5-installeer-wordpress)
- [Stap 6: DNS lokaal overschrijven.](#6-dns-lokaal-overschrijven)
- [Stap 7: Importeer WordPress site op de nieuwe server](#7-importeer-wordpress-site-op-nieuwe-server)
- [Stap 8. Verhoog de Maximum Upload Size](#8-verhoog-de-maximum-upload-size)
- [Stap 9. Upload .wpress file opnieuw](#9-upload-wpress-file-opnieuw)
- [Stap 10. Controleer de website](#10-controleer-de-website)
- [Stap 11. Verander de DNS](#11-verander-de-dns)

## 1. Download de All-in-One WP Migration plugin.
![Download de All-in-One WP Migration plugin](src/assets/images/download-wordpress-plugin.jpg)
Ga naar het dashboard van je huidige WordPress-site en installeer en activeer deze plugin.

[[Top]](#top)

## 2. Exporteer WordPress site
Ga naar de "All-in-One WP Migration” plugin in het zijmenu. Kies "Export" en vervolgens "File" om je volledige website te exporteren naar een .wpress-bestand.
![Export Wordpress website naar File](src/assets/images/exporteer-wordpress-website.jpg)


[[Top]](#top)

## 3. Download de export file
Download het .wpress-bestand naar je lokale computer. Dit bestand bevat een back-up van je gehele WordPress-site, inclusief alle inhoud, afbeeldingen, plugins en thema’s.

![Dowload de export file](src/assets/images/download-export-file.jpg)

[[Top]](#top)

## 4. Account aanmaken op nieuwe hosting server
Maak een nieuw hostingaccount aan bij je nieuwe hostingprovider. Zodra je account is ingesteld, kun je doorgaan met het installeren van WordPress op je domein. Dit kan meestal worden gedaan via het controlepaneel van je hostingprovider, zoals cPanel.

[[Top]](#top)

## 5. Installeer Wordpress
Log in op het cPanel van je nieuwe hostingaccount en zoek naar het WordPress-installatieprogramma. Klik op het WordPress-icoon bij Scripts om de installatiewizard te starten en volg de instructies om WordPress te installeren op je domein.


![Installeer Wordpress in cPanel](src/assets/images/installeer-wordpress-cpanel.jpg)

[[Top]](#top)

## 6. DNS lokaal overschrijven.
Je zou er voor kunnen kiezen om nu al de DNS record(s) te gaan veranderen. Het duurt dan enkele uren voordat de nieuwe website op de nieuwe server getoond wordt. Helaas is dit voor als nog een standaard template van Wordpress. Hierdoor is je website dus anders dan je zou willen, totdat je klaar bent met het uitvoeren van de volgende stappen hieronder…

Om dit te voorkomen, kun je ook eerst lokaal een DNS verandering doorvoeren, alleen zichtbaar op je eigen computer. Hierdoor kun je ervoor zorgen dat je de volgende stappen rustig kunt uitvoeren, voordat je de DNS gaat aanpassen voor heel de wereld!

Dit gaat als volgt: open een terminal(Mac) of command prompt (Windows) en voer het volgende commando uit: "<i>sudo nano /etc/hosts</i> " en druk op Enter. Voeg hieronder een nieuw record toe met het ip-adres van je nieuwe server en de domeinnaam van je website.

![Overschrijf eerst de DNS lokaal](src/assets/images/DNS-lokaal-overschrijven.jpg)

Sla de wijzigingen op en voer daarna de wijzigingen door met het commando "<i>sudo killall -HUP mDNSResponder</i> "

Als je nu naar de website gaat via de browser, zie je waarschijnlijk het standaard template van de nieuwe server. Login hierop in.

[[Top]](#top)

## 7. Importeer WordPress site op de nieuwe server
Ga naar het dashboard van je nieuwe WordPress-site en installeer de "All-in-One WP Migration" plugin. Ga daarna in deze plugin naar > "Import". Selecteer het .wpress-bestand dat je eerder hebt gedownload en begin met importeren.

![Importeer de Wordpress site](src/assets/images/importeer-wordpress-site.jpg)

[[Top]](#top)

## 8. Verhoog de Maximum upload size
Soms kan het maximum uploadformaat van 128 MB te beperkend zijn voor grote .wpress-bestanden. Om dit op te lossen, ga naar cPanel > Software > Select PHP Version en pas de optie "upload_max_filesize" aan naar bijvoorbeeld 512M.

![Verhoog de maximale upload site in cPanel](src/assets/images/verhoog-maximum-upload-size-cpanel.jpg)

[[Top]](#top)

## 9. Upload .wpress file opnieuw
Upload nu opnieuw het .wpress-bestand naar je nieuwe hostingaccount. 
Als je nog steeds problemen ondervindt met de import, zoals een vastgelopen upload, volg dan de instructies (stap 2.2 ) van <a href="https://webhostingadvices.com/all-in-one-wp-migration-import-stuck/#2_After_you_download_the_backup_file_upload_the_wpress_file_to_your_new_server_through_FTP" target="_blank" rel="noopener">deze link</a> om het .wpress-bestand handmatig via FTP te uploaden naar je nieuwe server.

![Import de website opnieuw](src/assets/images/import-site-opnieuw.jpg)


[[Top]](#top)

## 10. Controleer de website
Nadat de .wpress file is geüpload, geeft All-in-one WP Migration een melding over het veranderen van de ‘permalinks’. Controleer voor de zekerheid of deze hetzelfde zijn dan je huidige Wordpress website. Als je de linkstructuur van je site namelijk veranderd, kan dit negatieve gevolgen hebben voor je vindbaarheid (SEO).

[[Top]](#top)

## 11. Verander de DNS
Als de website goed is, verwijder je de handmatige aanpassingen van stap 6 en vergeet niet, nadat je de regels hebt verwijderd, "<i>sudo killall -HUP mDNSResponder</i> " door te voeren. 

Daarna kun je de DNS veranderen naar de nieuwe server. Wil je alleen de website op de nieuwe server hosten? Dan verander je alleen het A-record! Wil je alles, dus ook je email, op de nieuwe server hosten? Dan kun je het beste de nameserver(s) veranderen. De nieuwe hostingpartij weet wat de nieuwe nameserver(s) moet(en) zijn.

Met deze stapsgewijze handleiding zou je in staat moeten zijn om je WordPress-website succesvol te verhuizen naar een andere hostingprovider. Volg de instructies zorgvuldig en zorg ervoor dat je een back-up maakt om eventuele complicaties te minimaliseren.



Hulp nodig bij het verhuizen van je WordPress-site? Neem vandaag nog <a href="/contact/">contact</a> met ons op!

[[Top]](#top)

Image by <a href="https://www.freepik.com/">Freepik</a>

  