const custServices = require('./custServices');
const custQuery = require('../../interfaces/custQuery');
const apiConst = require('../../common/constants/apiConst');
const successConst = require('../../common/constants/successConst');
const errorConst = require('../../common/constants/errorConst');

const calculateEMIHandler = async (request, h) => {
  try {
    const { loanAmount, tenureInYears, creditScore } = request.payload;

    // Basic input validation (you might want to customize this)
    if (typeof loanAmount !== 'number' || typeof tenureInYears !== 'number' || typeof creditScore !== 'number') {
      return { message: errorConst.INTERNAL_SERVER_ERROR };
    }

    if (!existingCustomer) {
      // If the customer doesn't exist, create a new one
      await custQuery.createCustomer(loanAmount, tenureInYears, creditScore);
    }

    // Calculate EMI using your logic
    const interestRate = await custServices.determineInterestRate(creditScore);
    const emi = custServices.calculateEMI(loanAmount, interestRate, tenureInYears);

    return { message: successConst.SUCCESS, emi };
  } catch (error) {
    console.error(error);
    return { message: errorConst.INTERNAL_SERVER_ERROR };
  }
};

module.exports = {
  calculateEMIHandler,
};
 