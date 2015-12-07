$(document).ready(function() {

  // your jQuery code here...
var images = [];
    $('#slides img').each(function(){
        images.push($(this));    
    });
    var imgcount = images.length;
    var currentItem = 0;

    $("img").hide();
    $("img").first().show();

    $('#next').click(function(){
        $("img").hide();
        currentItem++;
        if(currentItem > 4) currentItem = 4;
        images[currentItem].show();        
    });

    $('#prev').click(function(){
        $("img").hide();
        currentItem--;
        if(currentItem < 0) currentItem = 0;
        images[currentItem].slideToggle("fast")
    });   
        
        
    // slider    
   
    $('.button').click(function(){
        $("img").hide();
    });   
   
       $( "#one" ).click(function() {
       $( "#first" ).fadeIn(500, function() {
});
});
        $( "#two" ).click(function() {
      $( "#second" ).fadeIn(500, function() {
      });
    });
        $( "#three" ).click(function() {
      $( "#third" ).fadeIn(500, function() {
      });
    });
   
       $( "#four" ).click(function() {
      $( "#fourth" ).fadeIn(500, function() {
      });
    });
        $( "#five" ).click(function() {
      $( "#fifth" ).fadeIn(500, function() {
      });
    });
       
            
            


});


//show things uniquely by id, hide things by hiding class
