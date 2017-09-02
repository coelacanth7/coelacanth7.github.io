$(document).ready(function(){

//https://stackoverflow.com/questions/16344354/how-to-make-blinking-flashing-text-with-css-3
  (function blink() {
    $('#animate').fadeOut(500).fadeIn(500, blink);
  })();

})
