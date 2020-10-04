const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    category: {
      type: String,
      required: true,
      default: 'alimentación',
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    productHeight: {
      type: Number,
      required: true,
      default: 0,
    },
    productWeight: {
      type: Number,
      required: true,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Reviews',
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product

