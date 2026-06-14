// functions 

// What is function ?
// function = service (input(2) -> logic() -> output)
// default value
// 1 functoin = 1 responsibility 

function add (a, b=0){
    let c = a + b; //. logic
    return c;   // output back to you
}

export function sub (a, b=0){
    let c = a - b; //. logic
    return c;   // output back to you
}

export function multiply (a, b=0){
    let c = a * b; //. logic
    return c;   // output back to you
}

export function square(a){
    let c = multiply( a , a );
    return c;
}

