const custController = require('./custController');
const apiConst = require('../../common/constants/apiConst');

const routes = [
  {
    method: 'POST',
    path: apiConst.CUSTOMER_PATH + apiConst.CALCULATE_EMI,
    handler: custController.calculateEMIHandler,
  },
];

module.exports = routes;
