const {test,expect}=require("@playwright/test");

test("Verify Application Title Using Keyboard",async ({page})=>{

    await page.goto("https://www.DuckDuckGo.com/");

    //await page.locator("textarea[name='q']").type("Basketball");
    await page.getByRole("combobox").fill("New York Knicks");

    await page.waitForSelector("role=option");
    
    await page.keyboard.press("ArrowDown");
    
    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("Enter");

    await page.waitForTimeout(5000);
    

});