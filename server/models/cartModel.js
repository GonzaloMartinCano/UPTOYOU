const mongoose = require('mongoose')


const CartSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    products: [{
        refID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity:{
            type: Number,
        }
    }]
  },
  {
    timestamps: true,
  }
)

const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart
