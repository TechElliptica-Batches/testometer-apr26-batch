import { test, expect } from '@playwright/test';
import users from '../data/users.json' with {type: "json"}

for(const user of users){
  test(`test for ${user.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(user.username);
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill(user.password);
    await page.locator('[data-test="login-button"]').click();
  });
}


/*
npm init
npm install playwright
npm init playwright



*/