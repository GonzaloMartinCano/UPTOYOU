const users = require('./data/users')
const personalDatas = require('./data/personalData')
const products = require('./data/products')
const User = require('./models/userModel.js')
const Product = require('./models/productModel.js')
const PersonalData = require('./models/personalDataModel.js')
const Order = require('./models/orderModel.js')
const dotenv = require('dotenv')
const color = require('colors')

dotenv.config()

require('./configs/mongoose.config')


const importData = async () => {
  try {
    await Order.deleteMany()
    await PersonalData.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    const createdPersData = await PersonalData.insertMany(personalDatas)
    const sampleUsers = users.map((user, i) => {
      return { ...user, personalData: createdPersData[i]._id }
    })
    const createdUsers = await User.insertMany(sampleUsers)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, userID: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (err) {
    console.log('Error:'.red.underline, err.red)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await PersonalData.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (err) {
    console.log('Error:'.red.underline, err.red.inverse)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
