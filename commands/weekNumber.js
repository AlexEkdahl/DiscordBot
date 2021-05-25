module.exports = {
  name: 'vecka',
  description: 'Get week number',
  execute(client, message, args, Discord) {
    const todaydate = new Date()
    const oneJan = new Date(todaydate.getFullYear(), 0, 1)
    const numberOfDays = Math.floor(
      (todaydate - oneJan) / (24 * 60 * 60 * 1000)
    )
    const result = Math.ceil((todaydate.getDay() + 1 + numberOfDays) / 7)
    const fs = require('fs')
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
    message.reply(` Det är vecka ${result}`)
  },
}
