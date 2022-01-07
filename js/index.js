$(document).ready(function(){
    $( '.fa-bars').click(function(){ 
        $('#navbar').slideToggle()

        $('#navbar').click(function(){
            $('#navbar').css('display', 'none')
        })
    })
    

    $('.hero-imgs').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        items:1
    })
    $('.testimonies').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        items:1,
        autoplay:true
    })
})
