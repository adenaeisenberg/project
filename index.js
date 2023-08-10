const puppeteer = require('puppeteer')
const fs = require('fs/promises')

async function start() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://learnwebcode.github.io/practice-requests/")

  const names = await page.evaluate() => {
    


  }
  await fs.writeFile("names.txt", names.join("\r\n"))

  


  await browser.close()
}


start()