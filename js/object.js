
// 
const m1 = [];
const marks = [20,40,80,100];
console.log(marks);
marks[1] = 90;
marks.push(67);
console.log(marks);
//marks = m1;






// objects
// json - java script object notation

const marks1 = {
    math: 40,
    science : 50,
    arts : 100,
    gk : 20
}

myResume = {
    name: "Vaibhav Singh",
    exp : [
        {
           company: "Accenture",
           startYear : 2012,
           endYear : 2016     
        },
        {
            company: "Cognizant",
            startYear : 2012,
            endYear : 2016   
        }
    ]
}

delete myResume["name"];
console.log(myResume["exp"][1]["company"]);
