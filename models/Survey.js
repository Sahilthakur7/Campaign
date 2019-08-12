const mongoose = require('mongoose');
const recipientSchema = require('./Recipient');

const SurveySchema = new mongoose.Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: mongoose.Schema.Types.ObjectId , ref: 'User'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', SurveySchema);
