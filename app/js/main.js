$(function() {

    $(".featured-products__bottom-rate").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px"
    });

    $(".release-products__bottom-rate").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px"
    });

    $(".followers__bottom-rate").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px"
    });


    $('.featured-products__slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>'

    });

    $('.followers__slider-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>'
    });

    $('.feedback__items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
    });

    $('.release-products__choice-item').on('click', function() {
        $('.release-products__choice-item > .release-products__choice-options').slideToggle();
        $('.release-products__choice-item > .release-products__choice-polygon').slideToggle()
    });


    var mixer = mixitup('.release-products__items');
});