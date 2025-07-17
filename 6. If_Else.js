// If Loop
if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good Day!"
}

// If ... Else Loop
const hour = new Date().getHours()
let greeting

if(hour < 18 ){
    greeting = "Good Day!"
}
else{
    greeting = "Good Evening"
}

document.getElementById("demo1").innerHTML = greeting

// Else If Loop
const time1 = new Date().getHours()
let greeting1
if(time1 < 10){
    greeting1 = "Good Morning!"
}
else if(time1 < 20){
    greeting1 = "Good Day!"
}
else{
    greeting1 = "Good Evening!"
}
document.getElementById("demo2").innerHTML = greeting1

// Example
let text
if(Math.random() < 0.5){
    text = "<a href='https://w3schools.com'>Visit W3Schools</a>"
}
else{
    text = "<a href='https://wwf.org'>Visit WWF</a>"
}
document.getElementById("demo3").innerHTML = text