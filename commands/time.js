const fs = require('fs')

module.exports = {
  name: 'time',
  description: 'Get time',
  execute(client, message, args) {
    message.reply(` Time is ${new Date().toLocaleTimeString()}`)
  },
}
