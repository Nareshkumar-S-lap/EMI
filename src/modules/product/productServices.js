const calculateGST = (productPrice, gstRate) => {
    const gstAmount = (productPrice * gstRate) / 100;
    return gstAmount.toFixed(2);
  };
  
  module.exports = {
    calculateGST,
  };
  