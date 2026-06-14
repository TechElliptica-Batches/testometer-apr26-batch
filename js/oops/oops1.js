
// What is object oriented programming 
// what is object

/*

charatceristic and behaviour

ball pen = 
color, shape, model
write

car = 
color, model, name, type
drive, travel

Human 
hieght, age, name
talk, walk , run , 

*/

class Human{

    constructor(name1, age1){
        this.name = name1;
        this.age = age1;
    }

    talk(content){
        console.log(this.name, "->", content);
    }

}

const h1 = new Human("Vaibhav", 34);
h1.talk("Hello Guys");

const h2 = new Human("Ashwini", 25);
h2.talk("Hello")


