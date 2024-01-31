// const productQueries = require('../../interfaces/productQueries');
// const productServices = require('./productServices');
// const apiConst = require('../../common/constants/apiConst');
// const successConst = require('../../common/constants/successConst');
// const errorConst = require('../../common/constants/errorConst');

// const calculateGSTHandler = async (request, h) => {
//     try {
//         const { productName, productPrice, gstRate } = request.payload;
//         // Check if the product already exists
//         const existingProduct = await productQueries.getProductByName(productName);

//         if (existingProduct) {
//             return { message: errorConst.INTERNAL_SERVER_ERROR };
//         }

//         // Calculate GST using your logic
//         const gstAmount = productServices.calculateGST(productPrice, gstRate);

//         // Save the product to the database
//         await productQueries.createProduct(productName, productPrice, gstRate);

//         return {
//             message: successConst.SUCCESS,
//             productName,
//             productPrice,
//             gstRate,
//             gstAmount,
//             totalAmount: parseFloat(productPrice) + parseFloat(gstAmount),
//         };
//     } catch (error) {
//         console.error(error);
//         return { message: errorConst.INTERNAL_SERVER_ERROR };
//     }
// };

// module.exports = {
//     calculateGSTHandler,
// };

// File: src/modules/gst/gstController.js

// const GSTServices = require('./gstServices');

// const getGSTDetails = async (request, h) => {
//   try {
//     const { productName, quantity, price, gstRate } = request.payload;

//     if (!productName || !quantity || !price || !gstRate) {
//       return h.response('Product details are incomplete').code(400);
//     }

//     const gstDetails = await GSTServices.calculateGST(productName, parseInt(quantity, 10), parseFloat(price), parseFloat(gstRate));
//     return h.response(gstDetails).code(200);
//   } catch (error) {
//     console.error(error);
//     return h.response('Internal Server Error').code(500);
//   }
// };

// module.exports = {
//   getGSTDetails,
// };

// File: src/modules/gst/gstController.js

const { calculateGST } = require('./gstServices');

const getGSTDetails = async (request, h) => {
  try {
    const gstQuery = request.payload; // Assuming the payload contains the user input
    const result = await calculateGST(gstQuery);

    return h.response(result).code(200);
  } catch (error) {
    console.error('Error processing GST calculation:', error.message);
    return h.response({ error: 'Internal Server Error' }).code(500);
  }
};

module.exports = {
  getGSTDetails,
};
