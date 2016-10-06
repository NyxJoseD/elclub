process.env.MAIL_URL = 'smtp://soporte@elclubdelapelicula.com.ve:21361837@smtp.mailgun.org:25';

import { Email } from 'meteor/email'

// El codigo de tu servidor: define un metodo que es llamado en el cliente.
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);
    // deja que otros metodos del cliente empiecen a correr,
    // sin esperar a que el envío de correo electrónico para completar.
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});

// en el codigo cliente: asincrona enviar un correo electronico en este caso cada vez que inicia meteor envia un correo.
Meteor.call('sendEmail',
            'luisaguirre027@gmail.com,josedanielmelean@gmail.com,jesuse.epg@gmail.com,maria_rr_13@hotmail.com',
            'soporte@elclubdelapelicula.com.ve',
            'Meteor Iniciado!',
            'Correo Listo.' );
            
console.log("sending...");
