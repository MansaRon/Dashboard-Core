const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({

    loanName: String,
    loanType: String, 
    loanAmount: String, 
    loanIssueDate: Date,
    loanStatus: String
    
});

const paymentModel = mongoose.model('Payment', paymentSchema);
module.exports = paymentModel;