module.exports = {
  name: 'register',
  description:
    'Register attendance for school with your full name and then email\nExample;\n!register Test Testsson test.testsson@test.com',
  async execute(client, message, args, Discord) {
    const today = new Date()
    if (today.getDay() == 6 || today.getDay() == 0) {
      message.reply('Are you in school on a weekend?')
      return
    }

    const name = [args[0], args[1]].join(' ')
    const email = args[2]
    if (!validateEmail(email)) {
      message.reply(`Bad format on email`)
      return
    }

    const nameInput = '.name'
    const emailInput = '.email'
    const submitButton = 'input:last-of-type'
    const url = process.env.URL
    try {
      const puppeteer = require('puppeteer')
      const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
      const page = await browser.newPage()
      await page.goto(url)
      await page.click(nameInput)
      await page.keyboard.type(name)
      await page.click(emailInput)
      await page.keyboard.type(email)
      // await page.screenshot({ path: 'example.png' })
      // await page.click(BUTTON)
      await browser.close()
      message.reply(`Närvaro registrerad på namn ${name}`)
    } catch (error) {
      console.error(error)
    }
  },
}

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  return false
}
