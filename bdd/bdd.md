
cucumber-js

what is bdd ?
behavior driven design 

  user open url "https://www.amazon.com/"
  user enter "shoes" inside searchbox
  user click on first suggested item

TDD approach - Test Data driven 

Rules : 
Feature file

Given = Prereq
When = action
Then = validation
And 

"testdata" 

step definition 

Gherkin 

cucumber-js


  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill(item);
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.locator('.a-link-normal').first().click(); 