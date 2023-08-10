const { test } = require("@playwright/test");
const { pageLocators } = require ("./Locator")

async function changeNetwork(page){

    await page.goto("https://deploy-preview-629--tezos-homebase.netlify.app");

    await page.click(pageLocators.TokenCreator.EnterApp)
  
    await page.click(pageLocators.TokenCreator.MainNet);
  
    await page.waitForSelector(pageLocators.TokenCreator.frame);
  
    await page.click(pageLocators.TokenCreator.GhostNet);
     
}




module.exports= {
    changeNetwork
}