process.env.MAIL_URL = 'smtp://soporte@elclubdelapelicula.com.ve:21361837@smtp.mailgun.org:25';

import { Email } from 'meteor/email'

// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});

// In your client code: asynchronously send an email
Meteor.call('sendEmail',
            'tiendadeportivanet@gmail.com',
            'luisaguirre027@gmail.com, josedanielmelean@gmail.com, "jesuse.epg@gmail.com, maria_rr_13@hotmail.com',
            'Hello from Meteor!',
            'This is a test of Email.send.');
            
console.log("sending...");
