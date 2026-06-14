
// import { add } from "./layers/calculator.js";
// import { printNameWithHash, printNameWithStar, printNameWithPercentile } from "./layers/presentation.js";

function printNameWithStar(value){
    console.log("***********", value , "***********");
}

function printNameWithHash(value){
    console.log("###########", value , "###########");
}

function printNameWithPercentile(value){
    console.log("%%%%%%%%%%%", value , "%%%%%%%%%%%");
}



function add(a, b, printFunc){
    let c = a +b;
    printFunc(c);
}



add(10, 20 , printNameWithStar);
add(45, 23 , printNameWithHash);
add(45,89, printNameWithPercentile);




