import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.theknot.com/marketplace/wedding-djs-hoboken-nj?sort=featured');
  await expect(page.getByRole('navigation', { name: 'Footer' })).toBeVisible();

  await page.getByRole('region', { name: 'Baseline Productions' }).getByLabel('Save').click();
  await expect(page.getByRole('dialog', { name: 'Your personal wedding plan' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Email address' }).fill('QAgusti@weddingwire.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('8*qM2025iz');
  await page.getByLabel('Create account').getByRole('button', { name: 'Sign up', exact: true }).click();

  await page.waitForTimeout(5000);

});