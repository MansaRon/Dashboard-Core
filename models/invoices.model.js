const mongoose = require('mongoose');
const invoiceSchema = mongoose.Schema({

    firstName: String,
    lastName: String, 
    emailAddress: String, 
    phoneNumber: String,
    dob: String
    
});

const invoiceModel = mongoose.model('Invoice', invoiceSchema);
module.exports = invoiceModel;