$(function(){
    $("#slider").lightSlider({
        item: 1,
        loop: true,
        controls: false,
        galleryMargin: 2,
        auto: true,
        pause:3000,
        pauseOnHover:true
    })
})
$(function(){
    const slider = $("#slider-products").lightSlider({
        item: 5,
        loop: true,
        controls: false,
        galleryMargin: 2,
        pager: false
    })
    $('#goToPrevSlide').click(function(){
        slider.goToPrevSlide(); 
    });
    $('#goToNextSlide').click(function(){
        slider.goToNextSlide(); 
    });
})

$(function(){
    const slider = $("#slider-partners").lightSlider({
        item: 9,
        loop: true,
        controls: false,
        
        pager: false
    })
    $('#goToPrevSlidePartner').click(function(){
        slider.goToPrevSlide(); 
    });
    $('#goToNextSlidePartner').click(function(){
        slider.goToNextSlide(); 
    });
})
