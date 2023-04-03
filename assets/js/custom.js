$(document).ready(function() {

    // home header
    var owl1 = $('.owl-carousel1');
    owl1.owlCarousel({
        loop: true,
        margin: 0,
        rtl:  true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        responsive:{
            0: { items: 1 },
            400: { items: 1 },
            600: { items: 1 },
            700: { items: 1 },
            800: { items: 1 },
            1000: { items: 1 },
            1200: { items: 1 },
            1700: { items: 1 },
        }
    });

    // home services
    var owl2 = $('.owl-carousel2');
    owl2.owlCarousel({
        loop: false,
        margin: 0,
        rtl:  true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        responsive:{    
            0: { items: 1 },
            400: { items: 2 },
            700: { items: 3 },
            800: { items: 5 },
            1000: { items: 5 },
            1200: { items: 5 },
            1700: { items: 5 },
        }
    });

    // blogs
    var owl3 = $('.owl-carousel3');
    owl3.owlCarousel({
        loop: false,
        margin: 0,
        rtl:  true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        dots: true,
        lazyLoad: true,
        responsive:{
            0: { items: 1 },
            400: { items: 2 },
            700: { items: 2 },
            800: { items: 3 },
            1000: { items: 3 },
            1200: { items: 3 },
            1700: { items: 3 },
        }
    });

    // insurances
    var owl4 = $('.owl-carousel4');
    owl4.owlCarousel({
        loop: false,
        margin: 0,
        rtl:  true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        responsive:{
            0: { items: 4 },
            400: { items: 4 },
            700: { items: 5 },
            800: { items: 5 },
            1000: { items: 6 },
            1200: { items: 7 },
            1700: { items: 7 },
        }
    });
});