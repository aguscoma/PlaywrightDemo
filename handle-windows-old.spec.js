const{test,expect} =require('@playwright/test');

test('Working with multiple tabs', async ({browser}) => {

    const context=await browser.newContext();

    const page= await browser.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const [newPage] = await Promise.all
    (
        [
            
        await page.locator("(//div[@class='container-child']//a[4]//*[name()='svg']//*[name()='path' and contains(@d,'M353.701,0')])[1]").click()
        
        ]);
    
    await page.getByRole('//*[@id="facebook"]/body/div[4]/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[1]/div[2]/div/div[1]/div/span/span').click();
    //await page.getByRole('button', { name: 'Decline optional cookies'}).click();

    await newPage.waitForTimeout(3000 );

    await newPage.locator("(//input[@name='email'])[2]").fill("tiriri@gmail.com");

    await newPage.waitForTimeout(3000 );

    await newPage.close();

    await page.locator("#email").fill("admin@email.com");

    await page.waitForTimeout(3000 );

});
