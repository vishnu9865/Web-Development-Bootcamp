// var btn = document.querySelector('button').addEventListener( 'click', handleClick());
// the above is a straight up method call, the browser will call and execute the method while adding it as event listener
// therefore it is necessary not to include the parenthesis

var btnarray = document.querySelectorAll( '.drum');

for( let button of btnarray) {
    button.addEventListener( 'click', () => {
        alert( 'I just got Clicked Lol');
    });
}