

// index values - 0 

//marks[2] = 90;

// push - add value to the last
// unshift - add value to the start
// pop -  remove value from last
// shift - remove value from start

// Array functions
// marks.shift();

let marks = [0,2,1,3,4,6,5,7,8,9,10];
// slice and splice
// console.log(marks.slice(3,7));

// marks.splice(3,1,20,30,40,50);
// console.log(marks);
//splice - value middle remove, value add 

//console.log(marks.length)
const sortedArr= marks.sort((a,b) => b-a);
console.log(sortedArr)
// sort function - always compare ascii value of code ,string 

