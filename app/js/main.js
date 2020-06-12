$(function() {

    $(".featured__bottom-rate").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px",
        ratedFill: "#ffc000",
    });

    $(".release__bottom-rate").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px",
        ratedFill: "#ffc000"
    });

    $(".followers__bottom-rate").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px",
        ratedFill: "#ffc000",
    });
    $(".product-page__rate").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px",
        ratedFill: "#ffc000",
    });

    $('.featured__slider-items').slick({
        adaptiveHeight: true,
        prevArrow: '<button class= "slick-arrow slick-prev"> </button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
    });

    $('.followers__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        responsive: [{
                breakpoint: 1131,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 774,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.feedback__items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        responsive: [{
            breakpoint: 1208,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }, ]
    });

    $('.release__choice-menu').on('click', function() {
        $('.release__choice-menu > .release__list').slideToggle();
        $('.release__choice-menu > .release__polygon').slideToggle()
    });


    $('.header__menu-button').on('click', function() {
        $('.header__menu-list').slideToggle();

    });

    $('.header__box-btn').on('click', function() {
        $('.header__box').toggleClass('active');

    });

    $('.header__list').on('click', function() {
        $(this).children('.header__drop-down-list').toggleClass('active');
        $(this).children('.header__list-link').toggleClass('active');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        prefix: "$"
    });
    $('.filter__sort--list').on('click', function() {
        $('.product-page__item').addClass('list');
        $('.filter__sort--list').addClass('active');
        $('.filter__sort--grid').removeClass('active');
    });
    $('.filter__sort--grid').on('click', function() {
        $('.product-page__item').removeClass('list');
        $('.filter__sort--grid').addClass('active');
        $('.filter__sort--list').removeClass('active');
    });

    $('.account__circle').on('click', function() {
        $('.account__check').toggleClass('active');

    });




    var mixer = mixitup('.release__items');
});