module.exports = {
  name: 'week',
  description: 'Get week number',
  execute(client, message, args, Discord) {
    const todaydate = new Date()
    const oneJan = new Date(todaydate.getFullYear(), 0, 1)
    const numberOfDays = Math.floor(
      (todaydate - oneJan) / (24 * 60 * 60 * 1000)
    )
    const result = Math.ceil((todaydate.getDay() + 1 + numberOfDays) / 7)
    message.reply(` it's week number ${result}`)
  },
}
