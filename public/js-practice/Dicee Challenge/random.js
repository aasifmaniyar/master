var random1 = Math.floor(Math.random() * 6) + 1;  // generates random number between 1 and 6
var randomImage1 = "dice" + random1 + ".png";  // dice1-dice6.png is the name of the images

var randomImageSource1 = "images/" + randomImage1; // images/dice1.png - images/dice6.png is the path of the images

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); // changes the source of the first image

var random2 = Math.floor(Math.random() * 6) + 1;  // generates random number between 1 and 6
var randomImage2 = "dice" + random2 + ".png";  // dice1-dice6.png is the name of the images
var randomImageSource2 = "images/" + randomImage2; // images/dice1.png - images/dice6.png is the path of the images
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // changes the source of the second image


if(random1 > random2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else {
    if(random1 < random2)
    {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerText = "Draw!";
        // or   document.querySelector("h1").innerHTML = "Draw!";
    }
}