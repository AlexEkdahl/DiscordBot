module.exports = (Discord, client, message) => {
  client.commands.get('commands').execute(client, message, null, Discord)
}
