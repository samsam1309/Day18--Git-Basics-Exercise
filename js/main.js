"use strict"


function onBallClick(elBtn) {
    var ball = document.querySelector(".ball");
    var currentHeight = parseInt(ball.style.height, 10) || 100; // Parse or default to 100
    var currentWidth = parseInt(ball.style.width, 10) || 100;   // Parse or default to 100

    var newHeight = currentHeight + 50;
    var newWidth = currentWidth + 50;

    ball.style.height = newHeight + "px";
    ball.style.width = newWidth + "px";
}