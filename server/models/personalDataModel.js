const mongoose = require('mongoose')
/* const encrypt = require('mongoose-encryption') */

const PersonalDataSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

/* PersonalDataSchema.plugin(encrypt, { secret: process.env.DB_ENCRYPT }) */

const PersonalData = mongoose.model('PersonalData', PersonalDataSchema)

module.exports = PersonalData
