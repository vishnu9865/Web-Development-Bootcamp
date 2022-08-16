$('h1').on('mouseover', () =>{
    $('h1').css('color', 'purple');
});

$('h1').on('mouseleave', () =>{
    $('h1').css('color', 'black');
});

$('button').click( () => {
   $('h1').animate({opacity: 0.5});
});