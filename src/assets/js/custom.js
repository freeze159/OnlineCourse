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
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3
          });
          $(".vertical").slick({
            dots: true,
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });
    }, 4000);
    
   
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
// }, 2500);



