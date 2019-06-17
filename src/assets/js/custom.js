$(document).ready(function () {
    'use strict';
    $(function () {
        amazonmenu.init({
            menuid: 'mysidebarmenu'
        })
    
    })
    $('[data-toggle="popover"]').popover();
    
    $(".remove-navibar").click(function () {
        $("#js-bootstrap-offcanvas").trigger("offcanvas.close");
    });
    // Video popup
    
    // Scroll to top button appear
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
          $('.sidebar .collapse').collapse('hide');
        };
      });
    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (e) {
        if(this.hash !== ""){
            e.preventDefault();
            var hash =this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                
            });
        }
        
       
    });
   
    
    $(window).resize(function() {
        if ($(window).width() < 768) {
          $('.sidebar .collapse').collapse('hide');
        };
      });
    
      // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
      $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
        if ($(window).width() > 768) {
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      });

})


$(document).on('shown.bs.tab', function (e) {
    var target = ($(e.target).attr("href"));
    switch (target) {
        case '#a1':
            setTimeout(() => {
                $(".regular").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
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

            }, 1200);

            break;
        case '#a2':
            setTimeout(() => {
                $(".regular2").slick({
                    dots: true,
                    centerMode: true,
                    centerPadding: '60px',
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

            }, 1200);

            break;
        case '#a3':
            setTimeout(() => {
                $(".regular3").slick({
                    dots: true,
                    centerMode: true,
                    infinite: true,
                    centerPadding: '60px',
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


            }, 1200);

            break;
        case '#a4':
            setTimeout(() => {
                $(".regular4").slick({
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: '60px',
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


            }, 1200);
            break;
        case '#a5':
            setTimeout(() => {
                $(".regular5").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
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


            }, 1200);
            break;
        case '#a6':
            setTimeout(() => {
                $(".regular6").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
                ;

            }, 1200);
            break;
        case '#a7':
            setTimeout(() => {
                $(".regular7").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
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


            }, 1200);
            break;
        case '#a8':
            setTimeout(() => {
                $(".regular8").slick({
                    dots: true,
                    // infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
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


            }, 1200);
            break;


    }
});
$(window).on('popstate', function (event) {

    $(".regularX").unslick
    setTimeout(() => {

        $(".regularX").slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            dots: true,
            // infinite: true,
            slidesToScroll: 3,
            slideSpeed: 200,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 1008,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                }
            ]

        });

    }, 1600);
});




