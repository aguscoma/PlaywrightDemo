import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  
  const page1Promise = page.waitForEvent('popup');
  
  await page.locator("//div[@class='container-child']//a[4]//*[name()='svg']").click();
  
  const page1 = await page1Promise;
  await expect(page1.getByRole('button', { name: 'Facebook' })).toBeVisible();

  await page1.getByRole('button', { name: 'Decline optional cookies' }).click();
  await page1.getByRole('textbox', { name: 'Email or phone number' }).fill('tiriri@gmail.com');
  await page1.getByRole('textbox', { name: 'Email or phone number' }).press('Tab');

  await page1.close();

  await page.getByRole('textbox', { name: 'Enter Email' }).fill('tururu@gmail.com');
  
  await page.waitForTimeout(3000 );

}); 

