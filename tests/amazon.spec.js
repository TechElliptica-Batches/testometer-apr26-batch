

import { test, expect } from '@playwright/test';
import items from '../data/amazon.json' with {type: "json"}


for(const item of items){
test(`amazon search for ${item}`, async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill(item);
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.locator('.a-link-normal').first().click();
});
}