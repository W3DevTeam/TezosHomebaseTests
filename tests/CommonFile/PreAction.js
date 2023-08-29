const { test } = require("@playwright/test");
const { pageLocators } = require ("./Locator");
const { changeNetwork } = require("./Action");

async function PreProposal(page){

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes
    
    await changeNetwork(page);   //PreConditions Open URL and Selecting the Ghost-net

    await page.click(pageLocators.OffChainPoll.EasyTaskDAO); //Click on Mask DAO

    await page.click(pageLocators.OffChainPoll.Proposal); //Click on Proposal
    
}


module.exports= {
    PreProposal
}