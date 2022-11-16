
let random1 = 0, random2 = 0;

random1 = Math.floor(Math.random()*6) + 1;
random2 = Math.floor(Math.random()*6) + 1;

var player1 = document.querySelector(".img1");
player1.setAttribute('src','images/dice'+random1+'.png');

var player2 = document.querySelector(".img2");
player2.setAttribute('src','images/dice'+random2+'.png');

var heading = document.querySelector( '.container h1');

if( random1 === random2) {
    heading.innerHTML = '🚩Draw🚩';
} else if ( random1 > random2) {
    heading.innerHTML = '🚩Player 1 Wins';
} else {
    heading.innerHTML = 'Player 2 Wins🚩';
}

