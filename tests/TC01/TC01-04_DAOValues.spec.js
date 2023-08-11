const { test, expect } = require('@playwright/test');
const { changeNetwork } = require("../CommonFile/Action");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test Case 4 : Create DAO with various input values', async ({ page }) => {


    console.log('Extending Test Case timeout to 10 minutes')

    test.setTimeout(10 * 60 * 1000); //To extend the time of test execution

    await changeNetwork(page); //PreConditions Open URL and Selecting the Ghost-net

    await page.click(pageLocators.DAOCreate.CreateDAO); //Click on Create DAO

    await page.click(pageLocators.DAOCreate.GovernanceToken);  //Selecting Governance (Yes, I Have one)

    await page.click(pageLocators.DAOCreate.FullDAO);  //Click on FullDAO

    await page.click(pageLocators.DAOCreate.ContinueButton1); //Click On Continue

    await page.fill(pageLocators.DAOCreate.DAOName, TezosTestData.DAOCreate.DAOName);  //Fill DAO Name

    await page.fill(pageLocators.DAOCreate.TokenAddress, TezosTestData.DAOCreate.TokenAddress); //Fill Token Address

    await page.fill(pageLocators.DAOCreate.TokenID, TezosTestData.DAOCreate.TokenID); //Fill Token ID 

    await page.fill(pageLocators.DAOCreate.GuardianAddress, TezosTestData.DAOCreate.GuardianAddress); //Fill The Wallet Address

    await page.fill(pageLocators.DAOCreate.Description, TezosTestData.DAOCreate.TC04DAODescription); //Fill The Description

    await page.click(pageLocators.DAOCreate.ContinueButton2);   //Click on Continue

    const errorMessage = page.getByText(pageLocators.DAOCreate.ErrorText);  //Get The Text 

    console.log(errorMessage) //Show The Result

    await expect(errorMessage).toBeVisible(); //Verify The Text Shows Description is Required

    console.log("The system handles the input appropriately, either creating the DAO or displaying an error message.");

})