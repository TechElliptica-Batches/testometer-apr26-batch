
// return a function from a function

function multipliar(multipliarValue){
    let func = (value) => {
        return value * multipliarValue;
    }
    return func;
}

let mul_15 = multipliar(15);
let double = multipliar(2);
let triple = multipliar(3);
console.log(triple(10));


// Callback, Promises and asycn and await 
// OOPS concepts in JS 

// Playwright 
