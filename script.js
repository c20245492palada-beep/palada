console.log ("Hello World!");
console.log ("From script.js file.");

const myName = "Alex";
let age = 23;
Age = 24;
const Number = "09302324013";
const address = "malinong gahod";

console.log(`my name: ${myName}1`);
console.log(`age: ${age} `);
console.log(`number: ${Number}`);   
console.log(`address: ${address}`);
console.log(67);

function greet(greetings, names = []) {
    if (!Array.isArray(names)) {
        names = names.join(", "); 
      
    }
    return `${greetings}sa inyu ${names.join("alexander")}`;
}

console.log(greet("Mayung aga", ["Mark", "papalada", "yambot", "mamalada", "moew"]));


const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const servicesHeadingHeading = document.querySelector("#services h2");
console.log(servicesHeadingHeading);
 const projectsHeading = document.querySelector("#projects h2");