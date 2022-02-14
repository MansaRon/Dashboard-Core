const mongoose = require('mongoose');
const settingSchema = mongoose.Schema({

    loanName: String,
    loanType: String, 
    loanAmount: String, 
    loanIssueDate: Date,
    loanStatus: String
    
});

const settingModel = mongoose.model('Setting', settingSchema);
module.exports = settingModel;