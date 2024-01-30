const productController = require('./productController');
const apiConst = require('../../common/constants/apiConst');

const routes = [
  {
    method: 'POST',
    path: apiConst.PRODUCT_PATH + apiConst.CALCULATE_GST,
    handler: productController.calculateGSTHandler,
  },
];

module.exports = routes;
