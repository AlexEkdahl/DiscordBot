const fs = require('fs')

module.exports = {
  name: 'räknare',
  description: 'Counts number of interactions',

  execute(client, message, args, Discord) {
    let msgFile = fs.readFileSync('save.json')
    let savedMsg = JSON.parse(msgFile)

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

    message.reply(
      `Jag har skickat ${savedMsg.length} meddelanden sen jag startades`
    )
  },
}
