const{test,expect} =require("@playwright/test");

test("Verify Error Message",async function({page}){
    //test steps
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height); 

    await page.getByPlaceholder("Username").type("Admin");
    await page.locator('input[name="password"]').type("admin12");
    await page.locator('//button[normalize-space()="Login"]').click();
    await page.locator('//p[contains(@class,"alert-content-text")]').textContent();
    const errorMessage=await page.locator('//p[contains(@class,"alert-content-text")]').textContent();
    console.log("Error message is: "+errorMessage);
    expect(errorMessage.includes("Invalid")).toBeTruthy();
    expect(errorMessage==="Invalid credentials").toBeTruthy();

}); 