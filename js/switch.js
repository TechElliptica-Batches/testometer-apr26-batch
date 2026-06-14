

// unary operator
// Loops . while, do while, for
// 
let monthNumber = 6
let monthName = "";

switch(monthNumber){
    case 1 : 
    case 13:
    case 25:    
        monthName = "Jan";
        break;
    case 2:
    case 14:
    case 26:    
        monthName = "Feb"
        break;
    case 3:
    case 15:
    case 27:        
        monthName = "Mar"
        break;    
    default:
        monthName = "NA";    
}

console.log(monthName + " - " + monthNumber)
