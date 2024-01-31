// const productController = require('./gstController');
// const apiConst = require('../../common/constants/apiConst');

// const routes = [
//   {
//     method: 'POST',
//     path: apiConst.PRODUCT_PATH + apiConst.CALCULATE_GST,
//     handler: productController.calculateGSTHandler,
//   },
// ];

// module.exports = routes;

// File: src/modules/gst/gstRoutes.js

const GSTController = require('./gstController');

const routes = [
  {
    method: 'POST',
    path: '/gst',
    handler: GSTController.getGSTDetails,
  },
];

module.exports = routes;
