const {test,expect}=require("@playwright/test");

test("Keyboard Events in Playwright",async ({page})=>{

    await page.goto("https://www.DuckDuckGo.com/");

    //await page.getByRole("combobox").fill("Mukesh Otwani");
    
    await page.getByRole("combobox").focus();

    await page.keyboard.type("Mukesh Otwani!");

    await page.keyboard.press("ArrowLeft");

    await page.keyboard.down("Shift");

    for(let i=0;i<6;i++)
    {
        await page.keyboard.press("ArrowLeft");

    }

    await page.keyboard.up("Shift");

    await page.keyboard.press("Backspace");
    
    /*

    await page.keyboard.press("ControlOrMeta+a");
    
    await page.keyboard.press("ControlOrMeta+c");
    
    await page.keyboard.press("Backspace");
    
    await page.keyboard.press("ControlOrMeta+v");
    
    //await page.keyboard.press("Enter");

    await page.waitForTimeout(5000);
    */

});