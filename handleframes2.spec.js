const{test,expect} =require("@playwright/test");

test("Handle Frames",async ({page}) => {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    await page.getByTitle('Package, class and interface').contentFrame().locator('iframe[name="trustarc_cm"]').contentFrame().getByRole('button', { name: 'Accept all' }).click();
    
    const iframe=await page.frameLocator("//frame[@name='packageListFrame']")
    await page.locator("text=java.applet").click();
    
    await page.getByTitle('All Packages').contentFrame().getByRole('link', { name: 'java.applet' }).click();

    await page.pause();

});
