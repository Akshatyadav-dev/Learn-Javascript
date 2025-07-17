// Object Literal
// Create an empty Object
const person = {}

// Add Properties
person.firstName = "John"
person.lastName = "Doe"
person.age = 50
person.eyeColor = "Blue"

// Display Data from Object
document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " year old."

// Object New Keyword
// Create an Object
const person1 = new Object()
person1.firstName1 = "John"
person1.lastName1 = "Doe"
person1.age1 = 50
person1.eyeColor1 = "Blue"

// Diplay Object Content
document.getElementById("demo1").innerHTML = person1.firstName1 + " is " + person1.age1 + " year old."

// Object Constructor Functions
// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

// Display age
document.getElementById("demo2").innerHTML =
    "My father is " + myFather.age + ".";

// Many New Object
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create two Person objects
const myFather1 = new Person("John", "Doe", 50, "blue");
const myMother1 = new Person("Sally", "Rally", 48, "green");

// Display age
document.getElementById("demo3").innerHTML =
    "My father is " + myFather1.age + ". My mother is " + myMother1.age + ".";

// Default Values Object
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}

// Create 2 Person objects
const myFather2 = new Person("John", "Doe", 50, "blue");
const myMother2 = new Person("Sally", "Rally", 48, "green");

// Display nationality
document.getElementById("demo4").innerHTML =
    "My father is " + myFather2.nationality + ". My mother is " + myMother2.nationality;

