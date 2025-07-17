// Function Declarations
let x = myFunction(4, 3)
document.getElementById("demo").innerHTML = x
function myFunction(a, b) {
    return a * b
}

// Function Expressions Const
const x1 = function (a, b) { return a * b }
document.getElementById("demo1").innerHTML = x1

// Function Expressions Let
const x2 = function (a, b) { return a * b }
let z = x2(4, 3)
document.getElementById("demo2").innerHTML = z

// Arrow Function
const x3 = (x, y) => { return x * y };
document.getElementById("demo3").innerHTML = x3(5, 5);

// Find The Largest
function findMax() {
    let max = -Infinity
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}
document.getElementById("demo4").innerHTML = findMax(1, 123, 500, 115, 44, 88)

// Sum Of All Arguments
function sumAll() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}
document.getElementById("demo5").innerHTML = sumAll(1, 123, 500, 115, 44, 88)

// Function call()
const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}
document.getElementById("demo6").innerHTML = myObject.fullName()

// call() Method
const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
document.getElementById("demo7").innerHTML = person.fullName.call(person1)

// call() Method with Arguments
const person3 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person4 = {
    firstName: "John",
    lastName: "Doe"
}

const person5 = {
    firstName: "Mary",
    lastName: "Doe"
}

document.getElementById("demo8").innerHTML = person3.fullName.call(person4, "Oslo", "Norway");

// Closures
function myCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    };
}

const add = myCounter();

document.addEventListener("DOMContentLoaded", () => {
    const countBtn = document.getElementById("countBtn");
    const display = document.getElementById("demo9");

    countBtn.addEventListener("click", () => {
        display.textContent = add();
    });
});

// Callback Funtion
function myDisplayer(something) {
    document.getElementById("demo10").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);