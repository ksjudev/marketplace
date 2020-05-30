$(function() {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: ".slick-next-featured",
        prevArrow: ".slick-prev-featured"
    });

    $('.slider__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // variableWidth: true,
        variableWidth: false,
        draggable: false,
        nextArrow: ".slick-next",
        prevArrow: ".slick-prev"
    });

    $('.feedback__items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
    });

    $('.filter__choice').on('click', function() {
        $('.filter__choice > ul').slideToggle();
        $('.filter__choice > .filter__choice-polygon').slideToggle()
    });


    var mixer = mixitup('.release__products-items');
});