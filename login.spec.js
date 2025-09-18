const {test,expect}=require("@playwright/test");
const testdata=JSON.parse(JSON.stringify(require("../testdata.json")));

test("Login To Application",async ({page}) => {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    //await page.locator("#email1").fill(testdata.address.city);
    
    await page.locator("#email1").fill(testdata.username);
    
    await page.locator("#password1").fill(testdata.password);

    await page.waitForTimeout(3000 );

});