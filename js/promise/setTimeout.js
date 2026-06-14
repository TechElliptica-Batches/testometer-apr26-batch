// PLaywirght


function click(locator){
    let promise1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
        resolve("clicking on " +locator);
        } , 5000);
    });
    return promise1;
}
function fill(locator, textToFill){
    let promise1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
        resolve("fill data "+textToFill + " on "+locator);
        } , 1000);
    });
    return promise1;
}

async function test1(){
    await click("sign in link");
    await fill("username","user1");
    await fill("password","pass1");
    await click("signin button");
}

// Rule1 - await will always use with those function which return promise\
// Rule2 - You cannot use await outside function
// Rule3 - you have to use async in that function so that javascrtipt will know , we have await inside it


// await - i will pause your thread until this promise will not resolve


click("signin link").then((msg)=>{
    console.log(msg);
    return fill("username","user1");
}).then((msg)=>{
    console.log(msg);
    return fill("password","pass1")
}).then((msg) => {
    console.log(msg);
    return click("signin button")
}).then((msg) => {
    console.log(msg);  
}).catch((msg) =>{
    console.log("catch: error found : " + msg);
})




// Promise

// click on signin link
// enter user1 in usernaem 
// enter pass1 in passowrd
// click signin button


// javasctipt is a single threaded language 
// web desiging language. - UI 10-20 api 


