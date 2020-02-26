$(function() {
  
    //Fixed nav
    
    let nav = $("#nav");
    let header = $("#header");
    let headerH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if( scrollPos > headerH) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }   
    });
    
    //scroll
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
           scrollTop: elementOffset - 100 
        }, 1000);
    });
    
    
    
    //Toggle

    let navToggle = $("#navToggle");
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
        
    });
    
});