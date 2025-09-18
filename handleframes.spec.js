const{test,expect} =require("@playwright/test");

test("Handle Frames",async ({page}) => {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    //await page.getByRole("button",{name:"Accept all"}).click();
    //await page.getByRole("button",{name:"Accept all"}).click();

    const iframe1=await page.frameLocator("//*[@id='defaultpreferencemanager']").locator("text=Accept all").click();

    //await page.frameLocator("#my-iframe").locator("text=Accept all").click();
    
    const iframe=await page.frameLocator("//frame[@name='packageListFrame']").locator("text=java.applet").click();

    await page.pause();

    //await page.locator("//a[text()='java.applet']").click();


    await page.waitForTimeout(5000);
});
