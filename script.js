var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background +";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied" ;

var automatedAnswer = 
"Your account # is " + ( isUserValid(false) ? "1234" : "not available");

function condition(){
    if (isUserValid(true)){
        return "You may enter";
    }else{
        return "Access denied"
    }
}

var answer2 = condition();

function moveCommand(direction){
    var whatHappens;
    switch (direction){
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

function winBattle(bool){
    return bool;
}
var experiencePoints = winBattle(true)? "10" : "1";