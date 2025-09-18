const {test,expect}=require("@playwright/test");

test("Verify file upload",async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
//Select one file
//    await page.locator("#file-upload").setInputFiles("/Users/Default/Desktop/image1.png");

    await page.locator("#file-upload").setInputFiles("./upload/image1.png");

    await page.locator("#file-submit").click();

    expect(await page.locator("//h3")).toHaveText("File Uploaded!");
    
    

});