const CustQuery = require('../models/custQuery');


const createCustomer = async (loanAmount, tenureInYears, creditScore) => {
  const customerQuery = new CustQuery({
    loanAmount,
    tenureInYears,
    creditScore,
  });

  return customerQuery.save();
};

module.exports = {
  createCustomer
};
