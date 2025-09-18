const {test,expect}=require("@playwright/test");

test("Keyboard Events in Playwright",async ({page})=>{

    await page.goto("https://www.DuckDuckGo.com/");

    await page.getByRole("combobox").fill("Mukesh Otwani");

    await page.keyboard.press("Enter");

    await page.waitForTimeout(5000);
    

});