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

test.only("Verify Application Title Using Loop",async ({page})=>{
    await page.goto("https://www.DuckDuckGo.com/");

    await page.getByRole("combobox").fill("New York Knicks");

    await page.waitForSelector("role=option");

    const elements=await page.$$("role=option");

    for(let i=0;i<elements.length;i++)
    {
        const text= await elements[i].textContent();
        if(text.includes('roster'))
        {
            await elements[i].click();
            break;
        }
    }
    await page.keyboard.press("Enter");

    await page.waitForTimeout(5000);
});