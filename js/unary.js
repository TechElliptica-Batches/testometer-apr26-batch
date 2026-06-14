

// arithmatic unary 
// increment 
// increment , assignment
// pre   ++a , first increment then assignment
// post  a++ , first assignment then increment


let a = 10;
//let b = a++ + ++a + a++;
     // 10  + 12 + 12
let b = ++a + a++ + a++ + ++a;
   //   11. + 11. + 12  + 14
console.log("a : ",a); // 13
console.log("b : ",b); // 34


// assignment value
