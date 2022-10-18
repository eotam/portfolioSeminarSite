function loadAnime() {

    
    $('.fadeUpTrigger').each(function () { 
        var elemPos = $(this).offset().top; 
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
            
        }
    });

    $('.fadeLeftTrigger').each(function () { 
        var elemPos = $(this).offset().top; 
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeLeft');
            
            
        }
    });
}

function scrollAnime() {

    
    $('.scrollfadeUpTrigger').each(function () { 
        var elemPos = $(this).offset().top; 
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
            
        }
    });

    $('.scrollfadeLeftTrigger').each(function () { 
        var elemPos = $(this).offset().top; 
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeLeft');
            
            
        }
    });
}





$(window).on('load', function(){
    loadAnime();
  });

  
$(window).scroll(function () {
    scrollAnime();
});