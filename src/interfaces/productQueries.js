const Product = require('../models/productSchema');

const getProductByName = async (productName) => {
  return Product.findOne({ productName });
};

const createProduct = async (productName, productPrice, gstRate) => {
  const product = new Product({
    productName,
    productPrice,
    gstRate,
  });

  return product.save();
};

module.exports = {
  getProductByName,
  createProduct,
};
