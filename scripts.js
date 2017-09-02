

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function typeWrite(span){

  var textSpan = $('#' + span).text();
  var randInt = 0

  for (var i = 0; i < textSpan.length; i++) {
    randInt += parseInt(randomIntFromInterval(40, 300));
    var typing = setTimeout(function(y){
      $('#' + span).append(textSpan.charAt(y));
    }, randInt, i);
  }
}

function wait(span) {
  setTimeout(function(){
    typeWrite(span);
  }, 2000)
}

$(document).ready(function(){
  wait('text')
})
