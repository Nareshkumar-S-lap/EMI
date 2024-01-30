const mongoose = require('mongoose');

const custQuerySchema = new mongoose.Schema({
  loanAmount: {
    type: Number,
    required: true,
  },
  tenureInYears: {
    type: Number,
    required: true,
  },
  creditScore: {
    type: Number,
    required: true,
  },
});

const CustQuery = mongoose.model('CustQuery', custQuerySchema);

module.exports = CustQuery;
