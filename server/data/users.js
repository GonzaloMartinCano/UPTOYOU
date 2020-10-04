const bcrypt = require('bcryptjs')

const users = [
  {
    username: 'Admin',
    password: 'Admin',
    isAdmin: true,
  },
  {
    username: 'Test1',
    password: 'Test1',
    isAdmin: false,
  },
  {
    username: 'Test2',
    password: 'Test2n',
    isAdmin: false,
  },
]

module.exports = users
