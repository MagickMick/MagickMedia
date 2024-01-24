const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");

const PORT = 5000;

//Middleware
app.use(express.static('src'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/src/components/ui/Form.astro')
})

app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
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
        from: 'mick@magickmedia.nl',
        to: 'info@magickmedia.nl',
        subject: 'Nieuw Formulier Ingezonden',
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