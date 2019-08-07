const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req,res) => {
        const { title, subject, body , recipients } = req.body;

        const survey = new Survey({
            title,
            body,
            subject,
            recipients: recipients.split(,).map((email) => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        const Mailer = new Mailer(survey, surveyTemplate(survey));
    })
}
