---
publishDate: 2024-03-18T00:00:00Z
title: Magick Media - Rich snippets
h1: Beter opvallen in de zoekresultaten met behulp van Rich Snippets
excerpt: In deze blogpost lees je hoe je met behulp van Rich Snippets je CTR kunt verhogen omdat je beter opvalt dan je concurrentie.
image: https://images.unsplash.com/photo-1553895501-af9e282e7fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
category: seo
tags:
  - zoekmachine optimalisatie
  - seo
---
- [Wat zijn Rich Snippets?](#wat-zijn-rich-snippets)
- [Voordelen van Rich Snippets](#voordelen-van-rich-snippets)
- [Hoe maak je een Rich Snippet?](#hoe-maak-je-een-rich-snippet)
  - [Product snippet](#product-snippet)
  - [Review snippet](#review-snippet)
  - [Evenement snippet](#evenement-snippet)
  - [Recept snippet](#recept-snippet)
  - [Boek snippet](#boek-snippet)
  - [FAQ snippet](#faq-snippet)
- [Uiteindelijke check: de gemaakte Rich Snippets testen](#uiteindelijke-check-de-gemaakte-rich-snippets-testen)

## Wat zijn Rich Snippets?
Als commerciële onderneming is het belangrijk om op te vallen tussen je concurrentie. Een van de manieren om op te vallen tussen de massa is door gebruik te maken van Rich Snippets. Maar wat zijn Rich Snippets precies?

Rich Snippets zijn stukjes informatie die zoekmachines zoals Google tonen naast de standaardtitel en meta-beschrijving van een webpagina. Deze stukjes informatie zijn bedoeld om gebruikers een voorproefje te geven van wat ze op de pagina kunnen verwachten voordat ze erop klikken. Ze kunnen bestaan uit verschillende elementen, waaronder beoordelingen, prijsinformatie, productbeschrijvingen, evenementgegevens en nog veel meer.

Het unieke aspect van Rich Snippets is dat ze niet alleen de aandacht van gebruikers trekken, maar ook de relevantie en waarde van een pagina vergroten. Door deze extra informatie weer te geven, helpt het zoekmachines om beter te begrijpen waar de pagina over gaat en kan het gebruikers helpen bij het nemen van snellere beslissingen over welke links ze willen volgen.

[[Top]](#top)

## Voordelen van Rich Snippets
Rich snippets bieden voor gebruikers als voor website-eigenaren verschillende voordelen:
1. 	<b>Verbeterde zichtbaarheid</b>: Rich Snippets trekken meer aandacht in de zoekresultaten, waardoor gebruikers eerder geneigd zijn om op uw link te klikken.
2.	<b>Verhoogde doorklikratio (CTR)</b>: Doordat Rich Snippets extra informatie bevatten, kunnen ze gebruikers helpen bij het nemen van een beslissing voordat ze doorklikken naar uw pagina, wat kan resulteren in een hogere CTR.
3. 	<b>Betere gebruikerservaring</b>: Door relevante informatie direct in de zoekresultaten weer te geven, kunnen Rich Snippets gebruikers helpen sneller te vinden wat ze zoeken, waardoor de algehele gebruikerservaring wordt verbeterd.
4.	<b>Autoriteit en vertrouwen</b>: Het tonen van beoordelingen, sterbeoordelingen en andere sociale bewijzen in Rich Snippets kan het vertrouwen van gebruikers in uw merk vergroten en uw autoriteit in uw vakgebied versterken.

[[Top]](#top)

## Hoe maak je een Rich Snippet?
Hieronder gaan we je laten zien hoe je technisch een Rich Snippet op je site kunt maken. Het is echter niet altijd zeker dat Google ook echt deze snippet gaat gebruiken. Echter verhoog je de kans er natuurlijk wel mee!

### Product snippet
![voorbeeld van een product snippet in de zoekresultaten](src/assets/images/voorbeeld-product-snippet.jpg)
Deze <a href="https://developers.google.com/search/docs/appearance/structured-data/product#:~:text=Product%20snippets%20are%20a%20richer,information%2C%20price%2C%20and%20availability" target="_blank" rel="noopener">product snippet</a> geeft extra informatie over je product. Je kunt hierin de beoordeling (reviews), prijs, beschikbaarheid, afbeelding en overige kenmerken plaatsen.

Als je geen gebruikt maakt van plugins zoals <a href="/rank-math-of-yoast-seo-plugin/">YoastSEO of Rank Math</a> die deze snippet automatisch kunnen genereren, kun je dit stuk JSON code gebruiken:

 ```javascript
  {
  "@context": "http://schema.org",
  "@type": "Product",
  "name": "Voorbeeldproduct",
  "image": "http://voorbeeldwebsite.com/voorbeeldproduct.jpg",
  "description": "Dit is een voorbeeldproduct.",
  "brand": {
    "@type": "Brand",
    "name": "Voorbeeldmerk"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "99.99",
    "availability": "http://schema.org/InStock",
    "url": "http://voorbeeldwebsite.com/voorbeeldproduct"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "100"
  }
}
  ```
Deze zet je in het script gedeelte van je website.



### Review snippet
![voorbeeld van een review snippet in de zoekresultaten](src/assets/images/voorbeeld-review-snippet.jpg)

Een <a href="https://developers.google.com/search/docs/appearance/structured-data/review-snippet" target="_blank" rel="noopener">review snippet</a> lijkt veel op de snippet hierboven. Het geeft namelijk een beoordeling over een product. De product snippet heeft ook een “Rating” onderdeel, vandaar dat de twee snippets veel op elkaar lijken.
```javascript
  {
  "@context": "http://schema.org/",
  "@type": "Product",
  "name": "Voorbeeldproduct",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "bestRating": "5",
    "reviewCount": "100"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Voorbeeldgebruiker"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "description": "Een voorbeeldreview van het product."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Eenandergebruiker"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5",
        "worstRating": "1"
      },
      "description": "Een andere voorbeeldreview van het product."
    }
  ]
}

  ```

  ### Evenement snippet
![voorbeeld van een evenement snippet in de zoekresultaten](src/assets/images/voorbeeld-evenement-snippet.jpg)

In deze <a href="https://developers.google.com/search/docs/appearance/structured-data/event" target="_blank" rel="noopener">evenement snippet</a> krijg je meer te zien van het evenement zelf. Extra informatie die getoond wordt is de datum, de tijd, de locatie, de prijs, afbeeldingen en organisator.
```javascript
  {
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Voorbeeldconcert",
  "startDate": "2024-04-15T19:00",
  "endDate": "2024-04-15T22:00",
  "location": {
    "@type": "Place",
    "name": "Voorbeeldlocatie",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Voorbeeldstraat 123",
      "addressLocality": "Voorbeeldstad",
      "postalCode": "12345",
      "addressRegion": "Voorbeeldprovincie",
      "addressCountry": "Voorbeeldland"
    }
  },
  "description": "Een voorbeeldconcert dat plaatsvindt op 15 april 2024.",
  "performer": {
    "@type": "PerformingGroup",
    "name": "Voorbeeldband"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://voorbeeldtickets.com/concert",
    "price": "25",
    "priceCurrency": "EUR",
    "availability": "http://schema.org/InStock",
    "validFrom": "2024-02-15T12:00"
  },
  "image": "https://voorbeeldconcert.com/afbeelding.jpg"
}
  ```

  ### Recept snippet
![voorbeeld van een recept snippet in de zoekresultaten](src/assets/images/voorbeeld-recept-snippet.jpg)

Als je een artikel hebt geschreven waarin je een recept deelt, kun je daarvoor een  <a href="https://developers.google.com/search/docs/appearance/structured-data/recipe" target="_blank" rel="noopener">recept snippet</a> gebruiken. Hierin zet je onderander de beoordelingen, ingrediënten, bereidingstijd, auteur en meer.

```javascript
  {
  "@context": "http://schema.org",
  "@type": "Recipe",
  "name": "Voorbeeld Pompoensoep",
  "author": {
    "@type": "Person",
    "name": "Voorbeeldchef"
  },
  "image": "https://voorbeeldwebsite.com/pompoensoep.jpg",
  "description": "Een heerlijk recept voor zelfgemaakte pompoensoep.",
  "prepTime": "PT30M",
  "cookTime": "PT1H",
  "totalTime": "PT1H30M",
  "recipeYield": "4 porties",
  "ingredients": [
    "1 middelgrote pompoen, geschild en in blokjes gesneden",
    "2 uien, fijngehakt",
    "2 teentjes knoflook, fijngehakt",
    "1 liter groentebouillon",
    "1 theelepel gemalen komijn",
    "1/2 theelepel paprikapoeder",
    "Zout en peper naar smaak",
    "Olijfolie"
  ],
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Verhit wat olijfolie in een grote pan op middelhoog vuur. Voeg de ui en knoflook toe en bak tot ze zacht zijn."
    },
    {
      "@type": "HowToStep",
      "text": "Voeg de pompoenblokjes toe aan de pan en bak ze even mee."
    },
    {
      "@type": "HowToStep",
      "text": "Voeg de groentebouillon, komijn, paprikapoeder, zout en peper toe. Breng aan de kook en laat sudderen tot de pompoen gaar is."
    },
    {
      "@type": "HowToStep",
      "text": "Pureer de soep met een staafmixer tot een gladde massa."
    },
    {
      "@type": "HowToStep",
      "text": "Serveer de pompoensoep warm, eventueel gegarneerd met een scheutje room en wat verse peterselie."
    }
  ],
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "150 kcal per portie",
    "fatContent": "5 g",
    "carbohydrateContent": "25 g",
    "proteinContent": "3 g"
  }
}
  ```

 ### Boek snippet
![voorbeeld van een boek snippet in de zoekresultaten](src/assets/images/voorbeeld-boek-snippet.jpg)

Om het zoekresultaat van jouw boek te verreiken, kun je een <a href="https://developers.google.com/search/docs/appearance/structured-data/book" target="_blank" rel="noopener">boek snippet</a> gebruiken. Hierin toon je onder andere de prijs, beschikbaarheid, beoordelingen, auteur en meer.

```javascript
  {
  "@context": "http://schema.org",
  "@type": "Book",
  "name": "Voorbeeldboek",
  "author": {
    "@type": "Person",
    "name": "Voorbeeldauteur"
  },
  "isbn": "9781234567890",
  "bookEdition": "Eerste editie",
  "numberOfPages": "300",
  "publisher": {
    "@type": "Organization",
    "name": "Voorbeelduitgeverij"
  },
  "datePublished": "2024-03-18",
  "image": "https://voorbeeldwebsite.com/voorbeeldboek.jpg",
  "description": "Een voorbeeldboek dat de lezer meeneemt op een spannend avontuur.",
  "genre": "Fictie",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "50"
  }
}
  ```

 ### FAQ snippet
![voorbeeld van een FAQ snippet in de zoekresultaten](src/assets/images/voorbeeld-faq-snippet.jpg)

Dit is een <a href="https://developers.google.com/search/docs/appearance/structured-data/faqpage" target="_blank" rel="noopener">snippet</a> die we steeds minder vaak zien terug komen in de SERP. Voorheen werden de vragen van de FAQ ook groter getoond als deel van het zoekresultaat. Nu zie je de vragen voorbij komen als “schuifbare blokken” zoals in het voorbeeld hierboven. Je kunt het alsnog gebruiken om je zoekresultaat te vergroten en de bezoeker meteen naar het antwoord van de vraag te sturen.


```javascript
  {
  "@context": "http://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is de levensverwachting van een hond?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De levensverwachting van een hond varieert afhankelijk van het ras en de grootte. Over het algemeen leven kleine hondenrassen langer dan grote rassen. Gemiddeld kunnen honden tussen de 10 en 15 jaar oud worden, maar sommige rassen kunnen veel langer leven."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe vaak moet ik mijn kat voeren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Het voedingsschema voor katten kan variëren afhankelijk van factoren zoals leeftijd, gewicht en gezondheidstoestand. Over het algemeen wordt aanbevolen om volwassen katten twee maaltijden per dag te geven, terwijl kittens vaker moeten worden gevoerd. Het is belangrijk om de voedingsbehoeften van je kat te bespreken met een dierenarts."
      }
    }
  ]
}
  ```

[[Top]](#top)

## Uiteindelijke check: de gemaakte Rich Snippets testen
Voordat je één of meerdere van deze snippers gaat plaatsen op je website, is het belangrijk dat je test of de JSON goed kan worden opgepakt door de zoekmachines. Google heeft daarvoor een handige tool ontwikkeld genaamd <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Rich Results Test</a>. Hierin kun je de code plakken en testen of Google de code snapt.

Veel succes met het doorvoeren van de Rich Snippets! Dit liever uitbesteden? Plan dan een <a href="/plan-een-gesprek/">vrijblijvend gesprek</a> met ons!

[[Top]](#top)
