---
publishDate: 2024-09-27T00:00:00Z
title: Magick Media - Nodejs contactformulier in cPanel
h1: Bouw jouw contactformulier met NodeJS in cPanel
excerpt: Leer hoe je een volledige Node.js server-side applicatie opzet in cPanel, met het opzetten van een contactformulier als voorbeeld.
image: /_astro/nodejs-applicatie-cpanel.C34SSVda.jpg
category: Development
tags:
  - NodeJS
  - cPanel
---
- [Waarom Node.js voor server-side logica?](#waarom-nodejs-voor-server-side-logica)
- [Toegang tot cPanel en NodeJS](#toegang-tot-cpanel-en-nodejs)
- [Een nieuwe Node.js applicatie aanmaken](#een-nieuwe-nodejs-applicatie-aanmaken)
- [Dependencies installeren met NPM](#dependencies-installeren-met-npm)
- [Je app.js aanmaken](#je-appjs-aanmaken)
- [Het contactformulier](#het-contactformulier)
- [Conclusie](#conclusie)

## Waarom Node.js voor server-side logica?
<a href="https://nodejs.org/en" target="_blank" rel="noopener">Node.js</a> is een krachtige en populaire omgeving voor het bouwen van server-side applicaties, dankzij de snelheid en het gemak waarmee het kan worden ingezet voor verschillende taken zoals het verwerken van API-verzoeken, het afhandelen van een contactformulier, het beheren van databases, en zelfs het draaien van real-time applicaties. cPanel biedt een gebruiskvriendelijke manier om je NodeJS applicatie te draaien.

In dit artikel leer je hoe je een volledige Node.js backend in  <a href="https://cpanel.net/" target="_blank" rel="noopener">cPanel</a> kunt inrichten, met een focus op het afhandelen van het contactformulier van je website!

[[Top]](#top)

## Toegang tot cPanel en NodeJS
Om te beginnen, log in op je cPanel account via de URL die je hebt ontvangen van je <a href="/hosting-en-beheer/">hostingprovider</a> (meestal iets als jouwdomein.nl/cpanel). Eenmaal ingelogd, zoek je naar de sectie "Software" en klik je op "Setup Node.js App".

![Setup Node.js App in cPanel](src/assets/images/setup-node-js-app-cpanel.jpg)

Dit opent een scherm waarin je je Node.js-applicatie kunt aanmaken. Zorg ervoor dat je hostingpakket Node.js ondersteunt. Zo niet, neem dan contact op met je provider om dit te activeren.

## Een nieuwe Node.js applicatie aanmaken
Klik op <b>"Create Application"</b> en vul de volgende velden in:
<ul>
  <li><b>Node.js version:</b> Selecteer de gewenste versie van Node.js. Wij kiezen in dit voorbeeld voor de 20.17.0 versie.</li>
  <li><b>Application mode:</b> Kies voor "Production" als je live gaat, of "Development" tijdens het ontwikkelen.</li>
  <li><b>Application root:</b> Stel de map in waar je het NodeJS bestand gaat vinden op de server. In ons geval is dat in de server map (magickmedia.nl/server).
  <li><b>Application URL:</b> Dit is de URL waar je app toegankelijk zal zijn (bijv. jouwdomein.com/server).</li>
  <li><b>Application startup file:</b> Dit is het NodeJS bestand die in de rootmap staat. Meestal app.js of server.js.</li>
  <li><b>Passenger log file:</b> Vul hier je pad in naar een logfile waarin de logs worden weggeschreven.</li>
</ul>

![Create Applicatie Nodejs in cPanel](src/assets/images/create-applicatie-nodejs-cpanel.jpg)

Klik daarna op <b>Create</b> en de Node.js-app wordt aangemaakt.

[[Top]](#top)

## Dependencies installeren met NPM
Nu je Node.js applicatie is aangemaakt, moet je de benodigde packages installeren. Als het goed is, krijg je een optie 'Run NPM Install'. Als je op deze knop klikt, worden de dependencies van de package.json file geinstalleerd.

Onze package.json ziet er zo uit:
```javascript
 {
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "nodemailer": "^6.9.9"
  }
}
```

Soms werkt deze eerste manier niet. Dan doen wij het altijd op de volgende manier:
1. Open de terminal in cPanel.
2. Navigeer naar de map waar je app.js bestand staat. (magickmedia.nl/server)
3. Voer het volgende commando uit om de benodigde packages te installeren:

```javascript
 npm install
  ```

[[Top]](#top)

## Je app.js aanmaken
In het app.js bestand in de map root/server kun je de basisinstellingen voor je Node.js-app maken. Hier is een voorbeeld van hoe je een eenvoudige webserver opzet met <a href="https://expressjs.com/" target="_blank" rel="noopener">Express</a> en <a href="https://nodemailer.com/" target="_blank" rel="noopener">Nodemailer</a>, die een contactformulier kan afhandelen:

```javascript
const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");

const PORT = 5000;

//Middleware
app.use(express.static('src'));
app.use(cors());
app.use(express.json());

app.post('/server', (req, res) => {
    const transporter = nodemailer.createTransport({
        // Configuratie voor je e-mailserver
      host: 'mail.jouwdomein.nl', // Vervang dit door de hostnaam van je SMTP-server
      port: 300, // Vervang dit door de poort van je SMTP-server
      secure: true, // true voor SSL, false voor andere protocollen
      auth: {
          user: 'mail@jouwdomein.nl', // Vervang dit door je eigen e-mailgebruikersnaam
          pass: 'Password123' // Vervang dit door je eigen e-mailwachtwoord
    }
      });
  
      const mailOptions = {
        from: 'mail@jouwdomein.nl', // het is slim om de mail van je websitedomein te gebruiken, om te voorkomen dat hij is de spam komt
        to: 'mail@jouwdomein.nl',
        subject: 'Nieuw formulier ingezonden',
        text: `Naam: ${req.body.name}\nE-mail: ${req.body.email}\nTelefoon: ${req.body.phone}\nBericht: ${req.body.message}`
      };
  
      transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log("Email sent: " +info.response);
            res.send("success")
        }
      });
  
      console.log("Formulier verzoek verwerkt");

})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

  ```
Deze code verwerkt de input van het contactformulier en stuurt deze gegevens door naar je mail.

[[Top]](#top)

## Het contactformulier
Je kunt nu een contactformulier op je website maken dat de gegevens naar de Node.js-app stuurt voor verwerking. Hier is een voorbeeld van een contactformulier dat je kunt koppelen aan je Node.js-app:

```javascript
<form action="/contact" method="POST">
  <label for="name">Naam:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Bericht:</label>
  <textarea id="message" name="message" required></textarea>
  
  <button type="submit">Verstuur</button>
</form>
  ```
Dit formulier stuurt de ingevoerde gegevens naar je Node.js-app.

[[Top]](#top)

## Conclusie
Je hebt nu een volledig werkende Node.js-app die draait in cPanel. Door de stapsgewijze instructies te volgen, kun je server-side functionaliteiten zoals het afhandelen van contactformulieren eenvoudig beheren.

Liever je opzetten van je NodeJS applicatie uitbesteden? Neem dan vrijblijvend <a href="/contact/">contact</a> op!

[[Top]](#top)