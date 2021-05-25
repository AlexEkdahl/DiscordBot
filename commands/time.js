const fs = require('fs')

module.exports = {
  name: 'klockan',
  description: 'Get time',
  execute(client, message, args) {
    let userStamp = {
      name: message.member.displayName,
      time: new Date().toLocaleTimeString(),
      function: this.name,
    }
    let data = fs.readFileSync('save.json')
    let myObject = JSON.parse(data)
    myObject.push(userStamp)
    myObject = JSON.stringify(myObject)
    fs.writeFileSync('save.json', myObject)
    message.reply(` Klockan är ${new Date().toLocaleTimeString()}`)
  },
}
