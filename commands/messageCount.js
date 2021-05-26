const fs = require('fs')

module.exports = {
  name: 'räknare',
  description: 'Counts number of interactions',

  execute(client, message, args, Discord) {
    let msgFile = fs.readFileSync('save.json')
    let savedMsg = JSON.parse(msgFile)
    let name = message.member ? message.member.displayName : ''

    let userStamp = {
      name: name,
      time: new Date().toLocaleTimeString(),
      function: this.name,
    }
    let data = fs.readFileSync('save.json')
    let myObject = JSON.parse(data)
    myObject.push(userStamp)
    myObject = JSON.stringify(myObject)
    fs.writeFileSync('save.json', myObject)
    if (!message.member) {
      message.send(
        `Jag har skickat ${savedMsg.length} meddelanden sen jag startades`
      )
    } else {
      message.reply(
        `Jag har skickat ${savedMsg.length} meddelanden sen jag startades`
      )
    }
  },
}
