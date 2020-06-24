const puppeteer = require('puppeteer');
const config = require('../config/config.json');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var SAMLResponse = "";
var username = process.env.MS_USER;
var password = process.env.MS_PASSWORD;
var webapp = process.env.MS_WEBAPP;

if (process.env.MS_USER === undefined) username = config.MS_USER;
if (process.env.MS_PASSWORD === undefined) password = config.MS_PASSWORD;
if (process.env.MS_WEBAPP === undefined) webapp = config.MS_WEBAPP;

console.log('\x1b[36m', "Using " + username + " credentials...", '\x1b[0m');

(async() => {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    await page.setViewport({ width: 1280, height: 800 })
    await page.goto(webapp, { waitUntil: ['networkidle2'] })

    const navigationPromise = page.waitForNavigation({waitUntil: ['networkidle2'] })

    await page.waitForSelector('[name="loginfmt"]')
    await page.type('[name="loginfmt"]', username)
    await page.click('[type="submit"]')

    await navigationPromise
    await page.waitForResponse(response => response.status() === 200);

    await page.waitForSelector('input[type="password"]', { visible: true });
    await page.type('input[type="password"]', password);
    await page.keyboard.press("Enter");

    await navigationPromise
    await page.waitForResponse(response => response.url().startsWith('https://login.microsoftonline.com'));

    await page.on('response', async response => {

        response.text().then(function (textBody) {
            const dom = new JSDOM(textBody);

            dom.window.document.querySelectorAll('input').forEach(input => {
                if (input.name === 'SAMLResponse'){
                    SAMLResponse = input.value;
                }
              });
        })
    })

    await page.waitFor(10000);
    await browser.close()

    console.log('\x1b[36m', "SAML RESPONSE", '\x1b[0m');
    console.log('\x1b[36m', "--------------------------------------", '\x1b[0m');
    console.log('\x1b[36m', SAMLResponse, '\x1b[0m');
})();