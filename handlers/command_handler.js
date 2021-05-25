const fs = require('fs')
module.exports = (client, Discord) => {
  const commandFiles = fs
    .readdirSync('./commands')
    .filter((file) => file.endsWith('.js'))

  commandFiles.forEach((file) => {
    const command = require(`../commands/${file}`)
    if (command.name) {
      client.commands.set(command.name, command)
    }
  })
}
