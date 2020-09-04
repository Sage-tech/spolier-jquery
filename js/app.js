// create the reveal splouer button
const $button = $('<button>Reveal Spoiler</button>');


// append to web page
$('.spolier').prepend($button);//or append


// hide spolier text 
$('.spoiler span').hide()

// when the button is pressed
$('.spolier button').click(function() {

// show the spolier text
$('.spoiler span').show();
  
// hide the reveal spolier button 
$('$spoiler button').hide();

});

