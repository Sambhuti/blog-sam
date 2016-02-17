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
    $("div a").click(function(e) {
        e.preventDefault();
        var sectionId = e.currentTarget.id + "Section";
       
        $("html body").animate({
            scrollTop: $("#"+sectionId).offset().top}, 1000)
        
    })
}


//Scroll Animation

$(document).ready(function() { 


	$(window).scroll(function(event) {

		var y = $(this).scrollTop();

		if (y >= 1000 && y<=2000) {

			$('#phone').addClass('animate');
			$('#tablet').addClass('animate');

		}
        
       else
           $('#phone').removeClass('animate')+$('#tablet').removeClass('animate');;
			

        
 

	});


});