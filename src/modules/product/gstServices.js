// const calculateGST = (productPrice, gstRate) => {
//     const gstAmount = (productPrice * gstRate) / 100;
//     return gstAmount.toFixed(2);
//   };

//   module.exports = {
//     calculateGST,
//   };
//   // File: src/modules/gst/gstServices.js

const GSTQuery = require('../../interfaces/gstQuery.js');
//const gstQuery = require('../interfaces/gstQueries.js');
// File: src/modules/gst/gstServices.js

//const GSTQuery = require('../interfaces/gstQuery');
// File: src/modules/gst/gstServices.js

// const GSTQuery = require('../interfaces/gstQuery');
// File: src/modules/gst/gstServices.js

const { v4: uuidv4 } = require('uuid'); // Import the v4 function from the uuid library

const calculateGST = async (gstQuery) => {
  try {
    if (!isValidGSTQuery(gstQuery)) {
      throw new Error('Incomplete product details. Please provide productName, quantity, price, and gstRate.');
    }

    const product = await GSTQuery.findOrCreateProduct(gstQuery);

    const gstAmount = (product.price * product.gstRate * product.quantity) / 100;

    // Include _id in the response
    const response = {
      _id: product._id,
      productName: product.productName,
      price: product.price,
      gstRate: product.gstRate,
      quantity: product.quantity,
      gstAmount: gstAmount,
      totalAmount: product.price * product.quantity + gstAmount,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const isValidGSTQuery = (gstQuery) => {
  console.log('Received gstQuery:', gstQuery);

  // Check if gstQuery is a string (only productName provided)
  if (typeof gstQuery === 'string') {
    return { productName: gstQuery };
  }

  // Check if gstQuery is an object with required properties
  return (
    gstQuery &&
    gstQuery.productName !== undefined &&
    gstQuery.quantity !== undefined &&
    gstQuery.price !== undefined &&
    gstQuery.gstRate !== undefined
  );
};

module.exports = {
  calculateGST,
};
