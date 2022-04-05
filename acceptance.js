const puppeteer = require('puppeteer');
const assert = require('assert');

try{
    (async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('https://www.amazon.com');

        const searchInput = await page.$('#twotabsearchtextbox');
        await searchInput.type('Testing Book');

        const searchBtn = await page.$('#nav-search-submit-button');
        await searchBtn.click();

        await page.waitForTimeout(2000);

        const pageTitle = await page.title();
        
        assert(pageTitle === 'Amazon.com : Testing Book');
        console.log("Title matched successfully");

        await browser.close();
    })();

} catch (err) {
    console.error(err);
}