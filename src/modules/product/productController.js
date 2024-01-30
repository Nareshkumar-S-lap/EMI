const productQueries = require('../../interfaces/productQueries');
const productServices = require('./productServices');
const apiConst = require('../../common/constants/apiConst');
const successConst = require('../../common/constants/successConst');
const errorConst = require('../../common/constants/errorConst');

const calculateGSTHandler = async (request, h) => {
  try {
    const { productName, productPrice, gstRate } = request.payload;

    // Check if the product already exists
    const existingProduct = await productQueries.getProductByName(productName);

    if (existingProduct) {
      return { message: errorConst.INTERNAL_SERVER_ERROR };
    }

    // Calculate GST using your logic
    const gstAmount = productServices.calculateGST(productPrice, gstRate);

    // Save the product to the database
    await productQueries.createProduct(productName, productPrice, gstRate);

    return {
      message: successConst.SUCCESS,
      productName,
      productPrice,
      gstRate,
      gstAmount,
      totalAmount: parseFloat(productPrice) + parseFloat(gstAmount),
    };
  } catch (error) {
    console.error(error);
    return { message: errorConst.INTERNAL_SERVER_ERROR };
  }
};

module.exports = {
  calculateGSTHandler,
};
