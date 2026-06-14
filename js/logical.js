import PromptSync from "prompt-sync";

// &&  - must be both
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// ||  - any condition
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// students marks
// math > 80 or science > 80 or gk > 90

// any subject 

// Conditional statements
// if else statement 
// rnage , 18 < = child
// 18 - 30 = adult
// 30-45 = mature
// more then 45 = old

const prompt = PromptSync();
let age = prompt("Enter your age -  ");

if( age <= 18 ){
    console.log("applicant is child.")
}else if(age > 18 && age <= 30){
        console.log("applicant is adult");
}else if(age > 30 && age <= 45){
    console.log("applicant is mature");
}else{
    console.log("applicant is old");
}


