const{test,expect} =require("@playwright/test");

test("Handle Alert",async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (d) => {

            expect(d.type()).toContain("alert");
            
            expect(d.message()).toBe("I am a JS Alert");

            await d.accept();
        });
    //Click on JS Alert button
    await page.locator("//button[text()='Click for JS Alert']").click();
    //await page.locator("text=Click for JS Alert").click();
    /*page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
*/
await page.waitForTimeout(10000);
});

test("Handle Confirm Box",async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialogWindow) => {

            expect(dialogWindow.type()).toContain("confirm");
            
            expect(dialogWindow.message()).toBe("I am a JS Confirm");

            await dialogWindow.accept();
            //await dialogWindow.dismiss();
        });
    
    await page.locator("//button[text()='Click for JS Confirm']").click();

    await page.waitForTimeout(5000);
});

test("Handle Prompt Box",async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialogWindow) => {

            expect(dialogWindow.type()).toContain("prompt");
            
            expect(dialogWindow.message()).toBe("I am a JS prompt");
            
            //await dialogWindow.accept("Yes, I am here");
            
            await dialogWindow.dismiss();

        });
    
    await page.locator("//button[text()='Click for JS Prompt']").click();

    await page.waitForTimeout(5000);
});
