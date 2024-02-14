import { createTransport } from 'nodemailer';

export async function handler (event) {
  try {
    console.log("In submit-form.js");
    console.log('Formulier verzoek ontvangen:', event.body);
    const { name, email, message } = JSON.parse(event.body);

    // Voer hier de logica uit om het formulier te verwerken, bijvoorbeeld het verzenden van een e-mail
    const transporter = createTransport({
      // Configuratie voor je e-mailserver
    host: 'mail.magickmedia.nl', // Vervang dit door de hostnaam van je SMTP-server
    port: 465, // Vervang dit door de poort van je SMTP-server
    secure: true, // true voor SSL, false voor andere protocollen
    auth: {
        user: 'info@magickmedia.nl', // Vervang dit door je eigen e-mailgebruikersnaam
        pass: '&LCgrrDz4%$n@PPH' // Vervang dit door je eigen e-mailwachtwoord
  }
    });

    const mailOptions = {
      from: 'info@magickmedia.nl',
      to: 'mick@magickmedia.nl',
      subject: 'Nieuw Formulier Ingezonden',
      text: `Naam: ${name}\nE-mail: ${email}\nBericht: ${message}`
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Formulier verzoek verwerkt");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Formulier succesvol verstuurd', info })
    };
  } catch (error) {
    console.error('Er is een fout opgetreden bij het verwerken van het formulier:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Er is een fout opgetreden bij het verwerken van het formulier.' })
    };
  }
}
