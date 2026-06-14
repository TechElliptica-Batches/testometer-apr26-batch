
// Promise - assurance i will 100% return or give you one status which will be success, failure or pending
// fulfilled - success .  then
// rejected - failed.     catch
// pending - in progress 


let promise1 = new Promise((a, b)=>{
    a("I am resolved");
});

promise1.then((msg)=>{
    console.log("inside then : " + msg)
}).catch((msg) =>{
    console.log("inside catch : "+ msg);
})
