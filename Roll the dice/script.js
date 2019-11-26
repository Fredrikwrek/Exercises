'use strict'

//Delövning 1

/* document.getElementById("hello").innerHTML = "Hello!";
document.getElementById("hello").style.fontSize = "100px"; */

//Delövning 2

/* var hello = ["Hello", "Hello", "Hello", "Hello", "Hello"];
var i;
var text = "";

for (var i = 0; i < hello.length; i++) {
    text += i + 1 + ". " + hello[i] + "<br>";
    document.getElementById("hello").innerHTML = text;
} */

// Delövning 3

/* function hello() {
    var hello = ["Hello", "Hello", "Hello", "Hello", "Hello"];
    var i;
    var text = "";

    for (var i = 0; i < hello.length; i++) {
        text += i + 1 + ". " + hello[i] + "<br>";
        document.getElementById("hello").innerHTML = text;
    }
} */
//Delövning 4

/* let kalleKula = "Kalle Kula";
let text = "";
let i = 30;

do {
    text += i + ". " + kalleKula + "<br>";
    i++;
    document.getElementById("kalleKula").innerHTML = text;
} while (i <= 40) */

//Delövning 5

/* var x = 1;
var y = 10;
var blue = "blue";
var red = "red";
var text = "";

for (x = 1; x < y; x++) {
    if (x == 2) {
        text += (x + ". " + "Hallå" + "<br>").fontcolor(blue);
        document.getElementById("hello").innerHTML = text;
    }
    else if (x == 3) {
        text += (x + ". " + "Hallå" + "<br>").fontcolor(red);
        document.getElementById("hello").innerHTML = text;
    }
    else if (x == 8) {
        break;
    }
    else {
        text += x + ". " + "hallå" + "<br>";
        document.getElementById("Hello").innerHTML = text;
    }
} */

//Delövning 6

/* function calculate() {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let result = input1 + input2;

    console.log(result);
    document.getElementById("result").innerHTML = result;
} */

//Delövning 7

/* let today = new Date().getTime();
let christmas = new Date("Dec 24, 2019 15:06:00").getTime();
let daysLeft;


function dayCounter() {
    daysLeft = christmas - today;
    var days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
    document.getElementById("dayCounter").innerHTML = days;
} */

//Delövning 8

/* function randomNumber() {
    document.getElementById("printNumber").innerHTML = Math.floor(Math.random() * 10000 + 1);

} */

//Delövning 9

function randomNumber() {
    var b = Math.floor(Math.random() * 6 + 1);
    console.log(b);
    return b;
}
function animationTrigger(a) {
    switch (a) {
        case 1:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear forwards";
            break;
        case 2:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear forwards";
            break;
        case 3:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear forwards";
            break;
        case 4:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear forwards";
            break;
        case 5:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear forwards";
            break;
        case 6:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear forwards";
            break;
    }
}
function rollTheDice() {
    var number = randomNumber();
    console.log(number);
    animationTrigger(number);
}