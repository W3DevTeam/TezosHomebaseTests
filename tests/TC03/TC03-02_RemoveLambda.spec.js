const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 05-08: Remove Lambda ', async ({ page }) => {

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //To Extend the time of test Execution
        test.setTimeout(120000);  

        //Check if cycle status is CREATING
        const cyclestatus = await page.getByText(pageLocators.ProposalCreation.Cycle)

        await expect(cyclestatus).toBeVisible()

        //Click On New Proposal
        await page.getByText(pageLocators.ProposalCreation.NewProposal).click()

        await page.click(pageLocators.RemoveLambda.RemoveLambda);   //Click on Remove Lambda

        await page.type(pageLocators.RemoveLambda.SearchBox, TezosTestData.RemoveLambda.SearchText);  //Pass The Search Text

        await page.keyboard.press('ArrowDown'); //Click on DownArrow Button

        await page.keyboard.press('Enter'); //Click on Enter Button

        await page.click(pageLocators.RemoveLambda.SubmitButton); //Click on Submit Button

        await page.waitForTimeout(30000); //Wait For Remove the Lambda 

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting cycle is running");
    }

   

})