// Switch Case
let day = new Date().getDay()
switch(day){
    case 0:
        day = "Sunday"
        break
    case 1:
        day = "Monday"
        break
    case 2:
        day = "Tuesday"
        break
    case 3:
        day = "Wednesday"
        break
    case 4:
        day = "Thrusday"
        break
    case 5:
        day = "Friday"
        break
    case 6:
        day = "Saturday"
}
document.getElementById("demo").innerHTML = day

// Switch Case with Default
let text1;
switch (new Date().getDay()) {
  case 6:
    text1 = "Today is Saturday";
    break;
  case 0:
    text1 = "Today is Sunday";
    break;
  default:
    text1 = "Looking forward to the Weekend";
}
document.getElementById("demo1").innerHTML = text1;

// Strict Comparison(===)
let x = "0";

switch (x) {
  case "0":
    text2 = "Off";
    break;
  case 1:
    text2 = "On";
    break;
  default:
    text2 = "No value found";
}
document.getElementById("demo2").innerHTML = text2;