import { test, expect } from '@playwright/test';
const LoginPage=require("../pages/loginpage");
const HomePage=require("../pages/homepage");


test('Login To Application Using POM', async ({ page }) => 
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginPage=new LoginPage.LoginPage(page);
    
    await loginPage.loginToApplication("admin@email.com","admin@123");
    
    const homePage=new HomePage.HomePage(page);

    await homePage.verifyManageOption();
    
    await homePage.logoutFromApplication();

    await loginPage.verifySignIn();
    
    await page.waitForTimeout(5000);
});