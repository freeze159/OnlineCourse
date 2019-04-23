$(document).ready(function () {
    'use strict';
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
        rewind: true


    })

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

})
$(function(){
	amazonmenu.init({
		menuid: 'mysidebarmenu'
	})
})
