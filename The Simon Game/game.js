let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = -1;
let checkLevel = -1;

//random button selection and next level
function nextSequence() {
    //reset level
    $('h1').text('level ' + (++level));
    checkLevel = -1;
    userClickedPattern = [];
    //generate random selection
    var randomNumber = Math.floor( Math.random()*4);
    var buttonColours = [ 'red', 'blue', 'green', 'yellow'];
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push( randomChosenColour);
    effect( randomChosenColour);
}

//initial and level wise button animation
function effect( randomChosenColour) {
    $('#'+randomChosenColour).animate({opacity: 0});
    $('#'+randomChosenColour).animate({opacity: 1}, 100);
    document.querySelector('body').click();
    playSound( randomChosenColour);
}

//play button sounds
function playSound( name) {
    new Audio('sounds/'+name+'.mp3').play();
}

//add event listeners for buttons
function activateButtons() {
    $('.btn').click( ( event) =>{
        var userChosenColour = $(event.target).attr('id');
        userClickedPattern.push( userChosenColour);
        animatePress( event.target);
        playSound( userChosenColour);
        console.log('game' + gamePattern);
        console.log('user' + userClickedPattern);
        checkAnswer( level);
    });
}

//button animation
function animatePress( selectorStr) {
    $(selectorStr).addClass('pressed');
        setTimeout( () => {
            $(selectorStr).removeClass('pressed');
        }), 100;
}

//failure effect function
function failure() {
    $('body').addClass('game-over');
    setTimeout( () => { $('body').removeClass('game-over')}, 200);
    $('h1').text('Game Over, Press Any Key to Restart');
    $('.btn').unbind('click');
}

//checkanswer
function checkAnswer( currentLevel){

    ++checkLevel;
    if( gamePattern[checkLevel] === userClickedPattern[checkLevel]){
        if( (checkLevel === currentLevel)){
            console.log('Success');
            setTimeout( () => { nextSequence();}, 1000);
        }
    }else{
        failure();
        console.log('Failure');
        startOver();
    }
    
}

//restarting function
function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    started = false;
    level = -1;
    checkLevel = -1;
    $(document).keydown( (event) => {
        if(  started === false) {
            started = true;
            nextSequence();
            activateButtons();
        }
    });
}

//main events starting from this point onwards
function start(){
    $(document).keydown( (event) => {
        if( ( event.key === 'a' || event.key === 'A') && ( started === false)){
            started = true;
            nextSequence();
            activateButtons();
        }
    });
}

//starting function starts the program
start();