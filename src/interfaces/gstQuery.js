// const Product = require('../models/productSchema');

// const getProductByName = async (productName) => {
//   return Product.findOne({ productName });
// };

// const createProduct = async (productName, productPrice, gstRate) => {
//   const product = new Product({
//     productName,
//     productPrice,
//     gstRate,
//   });

//   return product.save();
// };

// module.exports = {
//   getProductByName,
//   createProduct,
// };

// const GSTItem = require('../../models/gstSchema');
// const createGSTItem = async (itemData) => {
//   return GSTItem.create(itemData);
// };

// module.exports = {
//   createGSTItem
// };
// File: src/interfaces/gstQuery.js

const GSTModel = require('../models/gstSchema');

class GSTQuery {
  static async findOrCreateProduct(gstQuery) {
    let product = await GSTModel.findOne({ productName: gstQuery.productName });

    if (!product) {
      product = new GSTModel({
        productName: gstQuery.productName,
        price: gstQuery.price,
        gstRate: gstQuery.gstRate,
        quantity: gstQuery.quantity,
      });
    } else {
      product.updateQuantity(gstQuery.quantity);
    }

    await product.save();
    return product;
  }
}

module.exports = GSTQuery;
