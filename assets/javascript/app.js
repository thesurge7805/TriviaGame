$(document).ready(function() {
 var number = 30;
 var intervalId;
 var gcount = 0;
 var wcount = 0;
 var unanswered = 0
 
 function run() {
    intervalId = setInterval(decrement, 1000);
}
 
    
    
function run() {
    intervalId = setInterval(decrement, 1000);
}
    
   
$(window).on("load", hide);
    
$('#start').on('click', function(){
    $(this).hide();
    show();
    run();
});
    
$('#done').on('click', function(){
    $('#start').hide();
    hide();
    rSummary();
    stop();
});
    
    
function rSummary(){
    var alldone = $('<h2>').html('All Done!');
    var canswers = $('<p>').html('Correct answers: ' + gcount);
    var wanswers = $('<p>').html('Incorrect answers: ' + wcount);
    var cunanswered = $('<p>').html('Unanswered: ' + unanswered);
    var newclass= $('<div class="col-lg-4 col-lg-offset-4 text-center" id="summary">');
    newclass.append(alldone);
    newclass.append(canswers);
    newclass.append(wanswers);
    newclass.append(cunanswered);
    $('.row:nth(2)').append(newclass);
}
    
function decrement() {
      number--;
         
         $("#timer").html(" " + number + " seconds");
        
      if (number === 1) {
        $("#timer").html(" " + number + " second");
        }
        else if (number === 0) {
            $('#start').hide();
            hide();
            rSummary();
            stop();
        }
 }
    
function stop() {
     clearInterval(intervalId);
}
    
    
    
function hide(){
    $('.form-group').hide();
    $('#time').hide();
    $('#done').hide();
}
    
   
function show() {
    $('.form-group').show();
    $('#time').show();
    $('#done').show();
}
    
  
$('input[type=radio]').on("change", function() {
    gcount =  $('input[value=correct]:checked').length;
    wcount = $('input[value=wrong]:checked').length;
    unanswered = (4-(gcount + wcount));
});
    

});
