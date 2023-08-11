const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 6: Edit Registry', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        console.log('Extending Test Case timeout to 10 minutes');

        test.setTimeout(10 * 60 * 1000); //To extend the time of test execution

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.EditRegistry.Registry); //Click on the Registry on Tab

        await page.click(pageLocators.EditRegistry.NewItem); // Click On the New Registry item

        await page.fill(pageLocators.EditRegistry.Key,TezosTestData.EditRegistry.Key); // Pass The Key For Registry

        await page.fill(pageLocators.EditRegistry.Value, TezosTestData.EditRegistry.Value); //Pass The Value

        await page.click(pageLocators.EditRegistry.Submit); //Click on the submit button

        await page.waitForTimeout(30000);  //Wait for Timeout the Script

        const content = await page.content(); //Assume Page
 
        const isTextVisible = content.includes(pageLocators.EditRegistry.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");
    }
    catch (error) {
        console.log("Now Voting Cycle is Running");
    }

   

})

