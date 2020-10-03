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
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'product',
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.pre('save', async function (next) {
  const user = this
  // HASH THE PASSWORD BEFORE NEXT FUNCTION(SAVE)
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
