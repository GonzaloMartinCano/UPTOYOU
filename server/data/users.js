const bcrypt = require('bcryptjs')

const users = [
  {
    username: 'Admin',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    username: 'Test1',
    password: bcrypt.hashSync('password', 10),
    isAdmin: false,
  },
  {
    username: 'Test2',
    password: bcrypt.hashSync('password', 10),
    isAdmin: false,
  },
]

module.exports = users
