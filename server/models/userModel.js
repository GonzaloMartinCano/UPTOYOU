const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema(
  {
    personalData: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PersonalData',
    },
    orders: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Order',
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    }],
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', UserSchema)

module.exports = User
