//Button press

var Nbuttons = document.querySelectorAll(".drum").length;

for (i = 0; i < Nbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", buttonPress);
}

function buttonPress(){
    var keyButton = this.innerHTML;
    makeSound(keyButton);
    buttonAnimation(keyButton);
}

//Keyboard press
document.addEventListener("keypress", keyboardButtonPress)

function keyboardButtonPress(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}


function makeSound(keyButton){
    

    switch (keyButton) {
      case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    }
}

function buttonAnimation(keyButton){
 var animateButton = document.querySelector("." + keyButton);
 animateButton.classList.add("pressed")

    setTimeout(function(){animateButton.classList.remove("pressed")}, 100);
}