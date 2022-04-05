const { remote } = require('webdriverio');
const assert = require('assert');

let browser;

;(async () => {
    browser = await remote({
        capabilities: { browserName: 'chrome' }
    })

    await browser.navigateTo('https://www.amazon.com')

    const searchInput = await browser.$('#twotabsearchtextbox')
    await searchInput.setValue('Testing Book')

    const searchBtn = await browser.$('#nav-search-submit-button')
    await searchBtn.click()

    const pageTitle = await browser.getTitle();
    
    assert(pageTitle === 'Amazon.com : Testing Book');

    await browser.deleteSession();

})().catch((err) => {
    console.error(err);
    return browser.deleteSession();
})
