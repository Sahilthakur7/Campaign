const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({subject, recipients}, content){
        super();

        this.from_email = new helper.Email('sahil@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recepients = this.formatAddresses(recipients);
    }
}

module.exports = Mailer;
