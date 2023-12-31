const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { PreProposal } = require("../CommonFile/PrePoposal");

test('Test case 06-03: Successful Token UnStaking', async ({ page }) => {

    //To Extend the time of test Execution
    test.setTimeout(160000);
    
    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        await page.waitForTimeout(10000);

        // Click on Drop Expire
        const dropBtn = await page.getByText(pageLocators.TokenUnstaking.Drop);
        await expect(dropBtn).toBeEnabled();
        await dropBtn.click();

        await page.waitForTimeout(30000);

        // go to Users tab
        await page.getByText(pageLocators.TokenUnstaking.User).click();

        await page.waitForTimeout(5000);

        //Click on UnStake Votes 
        const UnstakeBtn = await page.getByText(pageLocators.TokenUnstaking.Unstake);
        await expect(UnstakeBtn).toBeEnabled()
        await UnstakeBtn.click()

        await page.waitForTimeout(12000);

        // Verify PopUp text
        const validateText2 = await page.getByText(pageLocators.TokenUnstaking.verifyText);
        await expect(validateText2).toBeVisible();

        console.log("The tokens are successfully Unstaked.");

    }
    catch (error) {
        console.log("Error: ", error);
    }
})