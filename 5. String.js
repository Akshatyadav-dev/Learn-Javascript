// String Quotes
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
document.getElementById("demo").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3

// Template String
let text = `He's often called "Johnny"`
document.getElementById("demo1").innerHTML = text

// String Length
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo2").innerHTML = text1.length

// Backslash
let text2 = "The character \\ is called backslash.";
document.getElementById("demo3").innerHTML = text;

// ----------------------------------------------------------------------------------------------------------------------
// String Methods
// String charAt()
let text3 = "HELLO WORLD"
document.getElementById("demo4").innerHTML = text3.charAt()

// String charCodeAt()
let text4 = "HELLO WORLD"
document.getElementById("demo5").innerHTML = text4.charCodeAt(0)

// String at()
const name = "W3School"
let letter = name.at(2)
document.getElementById("demo6").innerHTML = letter

// Property Access []
let text5 = "HELLO WORLD"
document.getElementById("demo7").innerHTML = text5[0]

// String slice()
let text6 = "Apple, Banana, Kiwi";
let part = text6.slice(7, 13)
document.getElementById("demo8").innerHTML = part
let part1 = text6.slice(7)
document.getElementById("demo9").innerHTML = part1
let part2 = text6.slice(-12)
document.getElementById("demo10").innerHTML = part2
let part3 = text6.slice(-12, -6)
document.getElementById("demo11").innerHTML = part3

// String substring() The difference is that start and end values less than 0 are treated as 0 in substring().
document.getElementById("demo12").innerHTML = text6.substring(7, 13)


// to Upper and Lower Case
let isUpper = true
let text7 = document.getElementById("demo13")
let currentText = text7.innerHTML

function toggleCase(){
    if (isUpper){
        text7.innerHTML = currentText.toUpperCase()
    }
    else{
        text7.innerHTML = currentText.toLowerCase()
    }
    isUpper = !isUpper
}
