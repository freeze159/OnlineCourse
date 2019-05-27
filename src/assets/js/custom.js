$(document).ready(function () {
    'use strict';


    $('[data-toggle="popover"]').popover();

    $(".remove-navibar").click(function () {
        $("#js-bootstrap-offcanvas").trigger("offcanvas.close");
    });
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

    }, 2200);


})

$(function () {
    amazonmenu.init({
        menuid: 'mysidebarmenu'
    })
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

$(function () {
    $('.pop').popover({
        trigger: "manual",
        html: true,
        animation: false,
        content: function () {
            var content = $(this).parents('.box-pop').find('#popover-content').html();

            return content;
        }

    }).on("mouseenter", function () {
        console.log('haha');
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 0);
    });
})


