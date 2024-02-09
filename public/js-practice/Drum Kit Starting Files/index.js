// document.querySelector("button").addEventListener("click", sampleClick);

// function sampleClick() {
//     alert("I got clicked!");
// }
// OR
// Anonymous function:
// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");
// });

// var buttonArray= document.querySelectorAll("button");
// // click event listener
// for (var i = 0; i < buttonArray.length; i++) {
//     buttonArray[i].addEventListener("click", function () {
//         // var audio = new Audio("sounds/tom-1.mp3");
//         // audio.play();
//         // this.style.color = "white";  change color of button to white when clicked
//         var buttonElement = this.innerHTML;
//         console.log(buttonElement);
//     });
// };


var buttonArray = document.querySelectorAll("button");

for (var i = 0; i < buttonArray.length; i++) {

    buttonArray[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        switchStatement(buttonInnerHTML) // call switchStatement function

        addAnimation(buttonInnerHTML);
    });
};

document.addEventListener("keydown", function (event) {

    switchStatement(event.key) // call switchStatement function

    addAnimation(event.key);
});

function switchStatement(element) {

    switch (element) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonElement); // This will print the buttonElement to the console
    }
}

function addAnimation(buttonElement) {
    var activeElement = document.querySelector("." + buttonElement);  //we already has class witn .key

    activeElement.classList.add("pressed");
    console.log(activeElement);
    setTimeout(function () {
        activeElement.classList.remove("pressed");
    }, 100);
}
// Detecting Keyboard Press
// document.addEventListener("keydown", function() {
//     alert("key pressed")
// });