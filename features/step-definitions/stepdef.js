import { Given, When, Then } from "@cucumber/cucumber";


Given("user navigate to {string}", async function(url){
    await this.page.goto(url,{timeout:30000});
});

When("user enter {string} in {string} textbox", async function(data, dataBox){
    //page.locator("").fill("")
    console.log("")
})

When("user click on login button", async function(){
    console.log("")
})

When("user validate dashboard", async function(){
    console.log("")
})

When("user validate error msg {string}", async function(errorMsg){
    console.log("")
})

