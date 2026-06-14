import { test, expect } from '@playwright/test';
import { MyFormPageObject } from '../pages/Form1.js';
// test

let formObject;
test.beforeEach("",async({page})=>{
    formObject = new MyFormPageObject(page);
    await page.goto("file:///Users/vaibhavsingh/Desktop/techelliptica-batches/testometer-apr26-batch/html/test1.html");

})

test("verify form title and url and header - @smoke", async({page})=>{
   await expect(page).toHaveTitle("Registration Form");
   await expect(page).toHaveURL("file:///Users/vaibhavsingh/Desktop/techelliptica-batches/testometer-apr26-batch/html/test1.html");
   await expect(formObject.h1).toHaveText("User Registration Form");
});

test("learning textbox in playwright - @smoke", async({page})=>{
   formObject.login("user1", "pass1");
});

test("learning Select dropdown Button - @smoke", async({page})=>{
    await page.locator("[id='country']").selectOption({index:2});
});

test("leaning frames" , async({page})=>{
    let frame1 = await page.frameLocator("[id='myframe']");
    await frame1.locator('[id="searchInput"]').fill("Hello");
    await frame1.locator("button", {hasText:"Search"}).click();
    await page.waitForTimeout(5000);
})

test("check table data" , async({page}) =>{
    const emmaOccupation = await page.locator("table").locator("tr").filter({hasText: "Emma"}).locator("td").nth(2).textContent();
//    let row = await page.locator("table").locator("tr").filter({hasText: "Emma"});
//    row.locator("td").nth()
    await expect(emmaOccupation).toBe("Doctor");
})

test("checking alerts ", async({page})=>{

    page.on("dialog", async(dialog) =>{
        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.message()).toContain("mandatory fields")
        await dialog.accept();   
    })

    await page.locator("button" , {hasText : "Submit Form"}).click(); 


})
test("checking windows  ", async({page})=>{
    await page.locator("a" , {hasText : "Open Google Dashboard"}).click(); 
    const[newTab] = await Promise.all([
        page.waitForEvent("popup")
    ]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveTitle("Google Dashboard");
    const pages = page.context().pages();
    expect(pages.length).toBe(2);
    for(const page of pages){
        console.log(await page.title());
    }
})

test("checking windows 1 ", async({page})=>{
    page.locator("").dblclick();
    page.locator("").click({button: 'right'})
    // right click
    // mouse move

    page.mouse.move(100, 200);
    page.locator("").hover();

    // javascript inside ur browser
    page.evaluate(() => {
        document.getElementById('').value = '';
    });

});



            
        



