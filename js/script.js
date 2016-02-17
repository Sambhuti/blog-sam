//Loading elements

$(window).load(function() { 
    
    //Loading elements
    
    $(".loading-overlay .spinner").fadeOut(2000,
    
                                  function()
     {
        $(this).parent().fadeOut(2000, 
function()
     {
            
      //Show the scroll
    
    $("body").css("overflow", "auto");
       $(this).remove();     
        });
                                 
     });
});


//Handling scroll events

$(document).ready(function() {
    setBindings();
});

function setBindings() {
    $("nav a").click(function(e) {
        var sectionId = e.currentTarget.id + "Section";
       
        $('html,body').animate({
            scrollTop: $("#" + sectionId).offset.top   
            
        }, 1000)
        
    });
}