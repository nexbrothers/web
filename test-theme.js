const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  
  // Get initial html classes
  let classes = await page.evaluate(() => document.documentElement.className);
  let bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  console.log('Initial HTML classes:', classes);
  console.log('Initial body bg:', bg);
  
  // Click theme toggle
  await page.click('button[aria-label="Toggle theme"]');
  await page.waitForTimeout(500); // wait for transitions
  
  // Get updated html classes
  classes = await page.evaluate(() => document.documentElement.className);
  bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  console.log('After click HTML classes:', classes);
  console.log('After click body bg:', bg);
  
  await browser.close();
})();
