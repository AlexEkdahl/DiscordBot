require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
const list = ['command_handler', 'event_handler']
list.forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord)
})

client.login(process.env.DISCORD_TOKEN)
