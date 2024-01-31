// // File: src/models/gstSchema.js

// const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid');

// const gstSchema = new mongoose.Schema({
//   productId: { type: String, default: uuidv4, unique: true },
//   productName: String,
//   price: Number,
//   gstRate: Number,
//   quantity: Number,
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });
 
// gstSchema.methods.updateQuantity = function (quantity) {
//   this.quantity = quantity;
//   this.updatedAt = new Date();
// };

// const GSTModel = mongoose.model('GST', gstSchema);

// module.exports = GSTModel;

// File: src/models/gstSchema.js

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import the v4 function from the uuid library

const gstSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4, // Use uuidv4 to generate a unique ID by default
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  gstRate: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('GSTProduct', gstSchema);
