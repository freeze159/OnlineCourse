$(document).ready(function () {
    'use strict';
    setTimeout(function () {
        $('.clonex2-carousel').owlCarousel({
            items: 5,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 3],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            navigation: true,
            navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
            pagination: false,
            loop: false,
            rewind: true

        })

    }, 1000);

    setTimeout(() => {
        $('.clone-carousel').owlCarousel({
            items: 3,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 3],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            navigation: true,
            navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
            pagination: false,
            loop: false,
            rewind: true,
        })
    }, 5000);

    $(".remove-navibar").click(function () {
        $("#js-bootstrap-offcanvas").trigger("offcanvas.close");
    });
    setTimeout(() => {
        $(".regular").slick({
            dots: true,
            // infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            slideSpeed: 200,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 1008,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]

        });

    }, 1500);


    $("#js-bootstrap-offcanvas").trigger("offcanvas.toggle"); // Toggle open & close
    $("#js-bootstrap-offcanvas").trigger("offcanvas.open"); // Open the menu
    $("#js-bootstrap-offcanvas").trigger("offcanvas.close"); // Close the menu


})
// setTimeout(() => {
$(function () {
    amazonmenu.init({
        menuid: 'mysidebarmenu'
    })
})
$(document).on('shown.bs.tab', function (e) {
    var target = ($(e.target).attr("href"));
    switch (target) {
        case '#a2':
            setTimeout(() => {
                
                $(".regular2").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                });
            }, 900);

            break;
        case '#a3':
            setTimeout(() => {
                $(".regular3").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                });

            }, 800);
            break;
        case '#a4':
            setTimeout(() => {
                $(".regular4").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                });

            }, 800);
            break;
        case '#a5':
            setTimeout(() => {
                $(".regular5").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                });

            }, 800);
            break;
        case '#a6':
            setTimeout(() => {
                $(".regular6").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                });

            }, 800);
            break;
        case '#a7':
            setTimeout(() => {
                $(".regular7").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                });

            }, 800);
            break;
        case '#a8':
            setTimeout(() => {
                $(".regular8").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                });

            }, 800);
            break;


    }
});
$(window).on('popstate', function (event) {
    setTimeout(() => {
        $(".regular").slick({
            dots: true,
            // infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            slideSpeed: 200,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 1008,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]

        });

    }, 1500);
});
// }, 2500);



