const mongoose = require('mongoose');

const swiggyOrderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    
  },
  restaurant: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    
  },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  totalAmount: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  status: { type: String, enum: ['Placed', 'Preparing', 'Out for Delivery', 'Delivered'], default: 'Placed' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

swiggyOrderSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const SwiggyOrder = mongoose.model('SwiggyOrder', swiggyOrderSchema);

module.exports = SwiggyOrder;
