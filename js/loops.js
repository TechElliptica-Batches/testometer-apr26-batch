
// while, do while and for
// Loop - i will keep executing until my condition is satisfied 
// true and false

// while Loop - first condition check and then execution 
// do while - first execution then condition check  (executes atleast once)

// let a = 20;
// do{
//     console.log("hello", a);
//      a++;
// }while(a < 10)


// while(a < 10){
//     console.log("hello", a);
//     a++;
// }

// for(let a = 1; a < 10 ; a++){
//     console.log("hello ",a);
// }

// for(let a = 10; a >= 1; a--){
//     console.log("hello ", a);
// }

// backward - loop

// 2
// let arr = [10,30,40];  // [100, 900, 1600]
// for(const b of arr){
//     console.log(b);
// }


//console.log(arr);

// 0 to 2
// for(let a = 0; a < arr.length; a++){
//     let arrValue = arr[a]; // arr[2]
//     arrValue = arrValue +2;
//     arr[a] = arrValue;  // arr[2] = 42
// }
// console.log(arr)

// in - object

let students = {
    name : "vaibhav",
    age : 30
}

for(const h in students){
    console.log(h ,"-", students[h]);
}
