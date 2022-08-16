// var btn = document.querySelector('button').addEventListener( 'click', handleClick());
// the above is a straight up method call, the browser will call and execute the method while adding it as event listener
// therefore it is necessary not to include the parenthesis

var btnarray = document.querySelectorAll( '.drum');

for( let i = 0; i < btnarray.length; i ++) {
    btnarray[i].addEventListener( 'click', function(){
        makeSound( this.innerHTML);
        btnAnimation( this.innerHTML);
    });
}

document.addEventListener( 'keydown', function( event) {
    //document.querySelector( '.'+event.key).click();
    makeSound( event.key);
    btnAnimation( event.key);
});

function makeSound( key) {
    switch( key){
        case 'w':
            new Audio('sounds/tom-1.mp3').play();
            break;
        case 'a':
            new Audio( 'sounds/tom-2.mp3').play();
            break;
        case 's':
            new Audio( 'sounds/tom-3.mp3').play();
            break;
        case 'd':
            new Audio( 'sounds/tom-4.mp3').play();
            break;
        case 'j':
            new Audio( 'sounds/snare.mp3').play();
            break;
        case 'k':
            new Audio( 'sounds/crash.mp3').play();
            break;
        case 'l':
            new Audio( 'sounds/kick-bass.mp3').play();
            break;
        default:
            break;
    }
}

function btnAnimation( currentKey){
    var activeButton = document.querySelector( '.'+currentKey);
    activeButton.classList.add( 'pressed');
    setTimeout( function() { 
        activeButton.classList.remove( 'pressed');
    }, 100);
}