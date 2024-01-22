const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    // Parse the form data from the event
    const { name, email, message } = JSON.parse(event.body);

    // Process the form data
    const transporter = nodemailer.createTransport({
      // Use your own email service or provider configuration here
      host: 'mail.magickmedia.nl',
      port: 993,
      secure: false,
      auth: {
        user: 'mick@magickmedia.nl',
        pass: '&LCgrrDz4%$n@PPH',
      },
    });

    const mailOptions = {
      from: 'mick@magickmedia.nl',
      to: 'mick@magickmedia.nl',
      subject: 'Contactformulier Magick Media ingevuld',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Formulier succesvol verstuurd' }),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Er is een fout opgetreden tijdens de verwerking van het formulier.' }),
    };
  }
};
