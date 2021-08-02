const fs = require('fs')

module.exports = {
  name: 'help',
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
    message.member ? message.reply(newEmbed) : message.send(newEmbed)
  },
}
