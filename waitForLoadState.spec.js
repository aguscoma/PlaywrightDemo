import { test, expect } from '@playwright/test';

test('Working with load state', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  
  await page.getByText("New user? Signup").click();

  await page.waitForLoadState('networkidle');

  const countch=await page.locator("//input[@type='checkbox']").count();

  expect(countch).toBe(7);

  await page.waitForTimeout(10000 );
  
  const countra=await page.locator("//input[@type='radio']").count();

  expect(countra).toBe(2);
  
  await page.waitForTimeout(10000 );
  
}); 

