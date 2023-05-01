document.write("Hello World");
console.log("hello world");
console.log(document);

console.log("sdf");
// console.clear();

console.dir(document);

console.error("asfsdf");
console.info("info message");

console.warn("warning message");


let personName = 'John';

var isMan = true; // false

console.log(isMan);

console.log(personName);

personName = "Jane";

console.log(personName);


const personAge = 4632.346;

// personAge = 123;


console.log(personAge);

console.log(typeof 2349);


let person = {
    name: 'Sardor',
    age: 13,
    isMan: true,
};

console.log(person.name, person.age);

console.log(person.name, person['age']);

let personsName = ["Sardor", "Daler", "Romashka", true, 423, "fsdfsd ", { dfsdf: "fds" }];

let person1 = "asd";

console.log(personsName, personsName[1]);

console.log(document.querySelectorAll(".english"));

console.log(document.querySelectorAll(".english").innerText = "Привет мир!");

console.dir(document.querySelector("h1").classList.toggle("red"));


// document.addEventListener("click", function () {
//     console.log("clicked");   
// });


// document.querySelector("h1").addEventListener("click", function () {
//     console.log("h1 element clicked");

//  });

let button = document.querySelector("button");
let h1 = document.querySelector("h1");

let counter = 0;

button.addEventListener("click", function () {
    console.log("button clicked");
    // counter = counter + 1;
    counter++;
    counter += 3;
    button.innerText = "clicked " + counter;
    h1.classList.toggle("red");
});