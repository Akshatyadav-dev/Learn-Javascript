// Variable Undeclared
x = 5
y = 6
z = x + y
document.getElementById("demo").innerHTML = "The value of z is : " + z

// Variable Declarex
var x = 5
var y = 6
var z = x + y
document.getElementById("demo1").innerHTML = "The value of z is : " + z

// Mixed Variable
const price1 = 5
const price2 = 6
let total = price1 + price2
document.getElementById("mixed").innerHTML = "The total is : " + total

// Many Varialbe
let person = "John Doe", carName = "Volvo", price = 200
document.getElementById("demo2").innerHTML = carName

// Concatenated
let a = "5" + 3 + 2
document.getElementById("demo3").innerHTML = a

// Add and then Concatenated
let b = 3 + 2 + "5"
document.getElementById("demo4").innerHTML = b

// Variable Dollar
let $ = "Hello World"
let $$$ = 2
let $mymoney = 5
document.getElementById("demo5").innerHTML = $$$ + $mymoney

// Variable Underscore
let _x = 2;
let _100 = 5;
document.getElementById("demo6").innerHTML = _x + _100

// Redeclaring Variables var
var x = 10
// Here x is 10
{
    var x = 2
    // Here x is 2
}
// Here x is 2
document.getElementById("demo7").innerHTML = x

// Redeclaring Variables let
let c = 10
// Here x is 10
{
    let c = 2
    // Here x is 2
}
// Here x is 10
document.getElementById("demo8").innerHTML = c