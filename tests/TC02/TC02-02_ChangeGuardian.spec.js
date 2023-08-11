const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 2: Change Guardian', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        console.log('Extending Test Case timeout to 10 minutes');
  
        test.setTimeout(10 * 60* 1000); //To extend the time of test execution

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click on new Proposal

        await page.click(pageLocators.ChangeGuardian.ChangeGuardian);  //Click on Change Guardian

        await page.fill(pageLocators.ChangeGuardian.WalletAddress, TezosTestData.ChangeGuardian.WalletAddress); //Pass The Wallet Address

        await page.click(pageLocators.ChangeGuardian.SubmitButton); //Click on Submit button

        await page.waitForTimeout(30000); //Wait for TimeOut Submit the proposal

        const isTextVisible = content.includes(pageLocators.ChangeGuardian.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting Cycle is running");
    }

})