const calculateEMI = (loanAmount, interestRate, tenureInYears) => {
    const monthlyInterestRate = (interestRate / 12) / 100;
    const numberOfPayments = tenureInYears * 12;
  
    const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  
    return emi.toFixed(2);
  };
  
  const determineInterestRate = async (creditScore) => {
    // Dummy logic for determining interest rate based on credit score
    // Replace this with actual logic based on your requirements
    if (creditScore >= 700) {
      return 8.0; // Example interest rate for good credit score
    } else {
      return 10.0; // Example interest rate for lower credit score
    }
  };
  
  module.exports = {
    calculateEMI,
    determineInterestRate,
  };
  