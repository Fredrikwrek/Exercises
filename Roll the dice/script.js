'use strict'

function randomNumber(a) {
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

function animationReturn(a) {
    switch (a) {
        case 1:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear alternate-reverse";
            break;
        case 2:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear alternate-reverse";
            break;
        case 3:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear alternate-reverse";
            break;
        case 4:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear alternate-reverse";
            break;
        case 5:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear alternate-reverse";
            break;
        case 6:
            document.getElementById("dice").style.WebkitAnimation = "spin 1s 1 linear alternate-reverse";
            break;
    }
}

function rollTheDice() {
    var checkbox = document.getElementById("roll").checked;
    var number = randomNumber(checkbox);
    if (checkbox != true) {
        console.log(number);
        animationTrigger(number);
    }
    else {
        console.log(number);
        animationReturn(number);
    }
}
/* function checkbox() {
    var checkbox = document.getElementById("roll").value;
    if (checkbox === true) {
        var number = randomNumber();
        console.log(number);
        animationTrigger(number);
    }
    else {
        animationReturn(a);
    }
} */