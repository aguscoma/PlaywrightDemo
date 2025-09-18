const {test,expect}=require("@playwright/test");

test.use({viewport:{width:1000,height:600}});

test("Valid Login",async function({page}){
    //test steps
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").type("Admin");

    await page.locator('input[name="password"]').type("admin123");

    await page.locator('//button[@type="submit"]').click();

    //await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click();
    
    await page.getByText("Logout").click();

    await expect(page).toHaveURL(/login/);

    //await page.waitForTimeout(3000);

});