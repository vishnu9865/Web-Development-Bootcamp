window.onbeforeunload = () => {
    
    let random1 = 0, random2 = 0;

    do {
        random1 = Math.round(Math.random()*6) + 1;
        random2 = Math.round(Math.random()*6) + 1;
    } while( random1 === random2);

    var player1 = document.querySelector(".img1");
    var player2 = document.querySelector(".img2");
    player1.setAttribute('src','images/dice'+random1+'.png');
    player2.setAttribute('src','images/dice'+random2+'.png');

}