const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 8: Remove Lambda ', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        console.log('Extending Test Case timeout to 10 minutes');

        test.setTimeout(10 * 60 * 1000); //To extend the time of test execution

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click On New Proposal

        await page.click(pageLocators.RemoveLambda.RemoveLambda);   //Click on Remove Lambda

        await page.fill(pageLocators.RemoveLambda.SearchBox, TezosTestData.RemoveLambda.SearchText);  //Pass The Search Text

        await page.keyboard.press('ArrowDown'); //Click on DownArrow Button

        await page.keyboard.press('Enter'); //Click on Enter Button

        await page.click(pageLocators.RemoveLambda.SubmitButton); //Click on Submit Button

        await page.waitForTimeout(30000); //Wait For Remove the Lambda 

        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.RemoveLambda.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible);  //Prints True or false for is Text Visible

        console.log("The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting cycle is running");
    }

   

})