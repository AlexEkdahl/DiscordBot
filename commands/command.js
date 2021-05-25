const fs = require('fs')

module.exports = {
  name: 'commands',
  description: 'Get all commands',
  execute(client, message, args, Discord) {
    const commandFiles = fs
      .readdirSync('./commands')
      .filter((file) => file.endsWith('.js'))

    var arr = []
    commandFiles.forEach((file) => {
      const command = require(`../commands/${file}`)
      arr.push({
        name: '!' + command.name,
        value: command.description,
      })
    })

    const newEmbed = new Discord.MessageEmbed()
      .setColor('#302864')
      .setTitle('Commands')
      .setDescription('alla kommandon jag kan')
      .addFields(arr)

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
    message.reply(newEmbed)
  },
}
