;(function () {

    'use strict';

    // iPad and iPod detection
    var isiPad = function(){
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function(){
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };



    // Carousel Feature Slide
    var owlCrouselFeatureSlide = function() {

        var owl = $('.owl-carousel');

        owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
            var current = elem.item.index;
            $(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate-2").removeClass('fadeInUp animated');

        });
        owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
            setTimeout(function(){
                var current = elem.item.index;
                $(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
            }, 700);
            setTimeout(function(){
                var current = elem.item.index;
                $(elem.target).find(".owl-item").eq(current).find(".to-animate-2").addClass('fadeInUp animated');
            }, 900);
         });

        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            dots: true,
            autoHeight: true,
            smartSpeed: 500,
            autoplay: 3000,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: [
              "<i class='icon-arrow-left2 owl-direction'></i>",
              "<i class='icon-arrow-right2 owl-direction'></i>"
             ]
        });

    };



    // animate-box
    var contentWayPoint = function() {

        $('.animate-box').waypoint( function( direction ) {

            if( direction === 'down' && !$(this).hasClass('animated') ) {

                $(this.element).addClass('fadeInUp animated');

            }

        } , { offset: '75%' } );

    };


    // Burger Menu
    var burgerMenu = function() {

        $('body').on('click', '.js-fh5co-nav-toggle', function(event){

            if ( $('#navbar').is(':visible') ) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }

            event.preventDefault();

        });

    };



    // Page Nav
    var clickMenu = function() {

        $('a:not([class="external"])').click(function(event){
            var section = $(this).data('nav-section'),
                navbar = $('#navbar');
            $('html, body').animate({
                scrollTop: $('[data-section="' + section + '"]').offset().top
            }, 500);

            if ( navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });

    };

    // Reflect scrolling in navigation
    var navActive = function(section) {

        var $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function(){
            $(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
        });

    };
    var navigationSection = function() {

        var $section = $('div[data-section]');

        $section.waypoint(function(direction) {
              if (direction === 'down') {
                navActive($(this.element).data('section'));

              }
        }, {
              offset: '150px'
        });

        $section.waypoint(function(direction) {
              if (direction === 'up') {
                navActive($(this.element).data('section'));
              }
        }, {
              offset: function() { return -$(this.element).height() + 155; }
        });

    };


    // Window Scroll
    var windowScroll = function() {
        var lastScrollTop = 0;

        $(window).scroll(function(event){

               var header = $('#fh5co-header'),
                scrlTop = $(this).scrollTop();

            if ( scrlTop > 500 && scrlTop <= 2000 ) {
                header.addClass('navbar-fixed-top fh5co-animated slideInDown');
            } else if ( scrlTop <= 500) {
                if ( header.hasClass('navbar-fixed-top') ) {
                    header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
                    setTimeout(function(){
                        header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
                    }, 100 );
                }
            }

        });
    };



    // Animations

    // About Us
    var aboutAnimate = function() {

        if ( $('#about-us').length > 0 ) {
            $('#about-us .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );

            });
        }

    };
    var aboutWayPoint = function() {

        if ( $('#about-us').length > 0 ) {
            $('#about-us').waypoint( function( direction ) {

                if( direction === 'down' && !$(this).hasClass('animated') ) {


                    setTimeout(aboutAnimate, 200);


                    $(this.element).addClass('animated');

                }
            } , { offset: '95%' } );
        }

    };

    // Team
    var teamAnimate = function() {

        if ( $('#team').length > 0 ) {
            $('#team .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );

            });
        }

    };
    var teamWayPoint = function() {

        if ( $('#team').length > 0 ) {
            $('#team').waypoint( function( direction ) {

                if( direction === 'down' && !$(this).hasClass('animated') ) {


                    setTimeout(teamAnimate, 200);


                    $(this.element).addClass('animated');

                }
            } , { offset: '95%' } );
        }

    };

    // Services
    var servicesAnimate = function() {

        if ( $('#fh5co-our-services').length > 0 ) {
            $('#fh5co-our-services .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );

            });
        }

    };
    var servicesWayPoint = function() {

        if ( $('#fh5co-our-services').length > 0 ) {
            $('#fh5co-our-services').waypoint( function( direction ) {

                if( direction === 'down' && !$(this).hasClass('animated') ) {


                    setTimeout(servicesAnimate, 200);


                    $(this.element).addClass('animated');

                }
            } , { offset: '95%' } );
        }

    };


    // Features
    var featuresAnimate = function() {

        if ( $('#fh5co-features').length > 0 ) {
            $('#fh5co-features .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );

            });
        }

    };
    var featuresWayPoint = function() {

        if ( $('#fh5co-features').length > 0 ) {
            $('#fh5co-features').waypoint( function( direction ) {

                if( direction === 'down' && !$(this).hasClass('animated') ) {


                    setTimeout(function(){
                        $('.animate-features-1').addClass('animated fadeIn');
                    }, 100);
                    setTimeout(function(){
                        $('.animate-features-2').addClass('animated fadeIn');
                    }, 200);
                    setTimeout(featuresAnimate, 500);
                    setTimeout(function(){
                        $('.animate-features-3').addClass('animated fadeInUp');
                    }, 1400);


                    $(this.element).addClass('animated');

                }
            } , { offset: '95%' } );
        }

    };


    // anywhere
    var anywhereAnimate = function() {

        if ( $('#fh5co-anywhere').length > 0 ) {
            $('#fh5co-anywhere .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );

            });

            $('div#PersonalProjects.to-animate').each(function( k ) {
                var el = $(this);
                    setTimeout ( function () {
                        el.addClass('fadeInRight animated');
                    },  k * 200, 'easeInOutExpo' );
            })

            $('#fh5co-anywhere a#PersonalProjects.to-animate').each(function( k ) {
                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );
            })
            $('#fh5co-anywhere a#PrimaryEducation.to-animate').each(function( k ) {
                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );
            })
            $('#fh5co-anywhere a#SecondaryEducation.to-animate').each(function( k ) {
                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );
            })
            $('#fh5co-anywhere a#University.to-animate').each(function( k ) {
                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );
            })
            $('#fh5co-anywhere a#Business.to-animate').each(function( k ) {
                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );
            })
        }

    };
    var anywhereWayPoint = function() {

        if ( $('#fh5co-anywhere').length > 0 ) {
            $('#fh5co-anywhere').waypoint( function( direction ) {


                    setTimeout(anywhereAnimate, 200);


                    $(this.element).addClass('animated');


            } , { offset: '95%' } );
        }

    };

    // testimonials
    var testimonialsAnimate = function() {

        if ( $('#fh5co-testimonials').length > 0 ) {
            $('#fh5co-testimonials .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );

            });
        }

    };
    var testimonialsWayPoint = function() {

        if ( $('#fh5co-testimonials').length > 0 ) {
            $('#fh5co-testimonials').waypoint( function( direction ) {


                    setTimeout(testimonialsAnimate, 200);


                    $(this.element).addClass('animated');


            } , { offset: '95%' } );
        }

    };

    // Pricing
    var pricingAnimate = function() {

        if ( $('#fh5co-pricing').length > 0 ) {
            $('#fh5co-pricing .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );

            });
        }

    };
    var pricingWayPoint = function() {

        if ( $('#fh5co-pricing').length > 0 ) {
            $('#fh5co-pricing').waypoint( function( direction ) {

                    setTimeout(function(){
                        $('.animate-pricing-1').addClass('animated fadeIn');
                    }, 200);
                    setTimeout(function(){
                        $('.animate-pricing-2').addClass('animated fadeIn');
                    }, 300);
                    setTimeout(pricingAnimate, 700);


                    $(this.element).addClass('animated');


            } , { offset: '95%' } );
        }

    };

    // Pricing
    var pressAnimate = function() {

        if ( $('#fh5co-press').length > 0 ) {
            $('#fh5co-press .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );

            });
        }

    };
    var pressWayPoint = function() {

        if ( $('#fh5co-press').length > 0 ) {
            $('#fh5co-press').waypoint( function( direction ) {

                    setTimeout(function(){
                        $('.animate-press-1').addClass('animated fadeIn');
                    }, 200);
                    setTimeout(function(){
                        $('.animate-press-2').addClass('animated fadeIn');
                    }, 300);
                    setTimeout(pressAnimate, 700);


                    $(this.element).addClass('animated');


            } , { offset: '95%' } );
        }

    };




    // Features 2 Animate
    var features2AnimateTitle = function() {
        if ( $('#fh5co-features-2').length > 0 ) {
            $('#fh5co-features-2 .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeIn animated');
                },  k * 200, 'easeInOutExpo' );

            });
        }
    };
    var features2WayPoint = function() {
        if ( $('#fh5co-features-2').length > 0 ) {
            $('#fh5co-features-2').waypoint( function( direction ) {

                if( direction === 'down' && !$(this).hasClass('animated') ) {


                    setTimeout(features2AnimateTitle, 100);

                    setTimeout(function(){
                        $('.features-2-animate-2').addClass('fadeInUp animated');
                    }, 800);

                    setTimeout(function(){
                        $('.features-2-animate-3').addClass('fadeInRight animated');
                        $('.features-2-animate-5').addClass('fadeInLeft animated');
                    }, 1200);
                    setTimeout(function(){
                        $('.features-2-animate-4').addClass('fadeInRight animated');
                        $('.features-2-animate-6').addClass('fadeInLeft animated');
                    }, 1400);
                    setTimeout(function(){
                        $('.features-2-animate-7').addClass('fadeInRight animated');
                        $('.features-2-animate-8').addClass('fadeInLeft animated');
                    }, 1600);


                    $(this.element).addClass('animated');

                }
            } , { offset: '75%' } );
        }
    };


    //  Faqs Accordion
    var faqsAccordion = function() {

        var faqAcc = $('.faq-accordion h3');

        // Click
        faqAcc.on('click', function(event){
            var $this = $(this);

            $('.faq-accordion').removeClass('active');
            $('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');

            if ( !$this.closest('.faq-accordion').find('.faq-body').is(':visible')) {
                $this.closest('.faq-accordion').addClass('active');
                $this.closest('.faq-accordion').find('.faq-body').slideDown(400, 'easeInOutExpo');
            } else {
                $this.closest('.faq-accordion').removeClass('active');
                $this.closest('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');
            }


            setTimeout(function(){
                // alert($this.closest('.faq-accordion.active').innerHeight());
                $('html, body').animate({
                    scrollTop: $this.closest('.faq-accordion.active').offset().top - 90
                }, 500);
            }, 700);


            event.preventDefault();
            return false;

        });

    };

    // Features 3 Animate
    var faqsAnimate = function() {
        if ( $('#fh5co-faqs').length > 0 ) {
            $('#fh5co-faqs .to-animate').each(function( k ) {

                var el = $(this);

                setTimeout ( function () {
                    el.addClass('fadeInUp animated');
                },  k * 200, 'easeInOutExpo' );

            });
        }
    };
    var faqsWayPoint = function() {
        if ( $('#fh5co-faqs').length > 0 ) {
            $('#fh5co-faqs').waypoint( function( direction ) {

                if( direction === 'down' && !$(this).hasClass('animated') ) {




                    setTimeout(function(){
                        $('.faqs-animate-1').addClass('fadeIn animated');
                    }, 200);

                    setTimeout(function(){
                        $('.faqs-animate-2').addClass('fadeIn animated');
                    }, 400);

                    setTimeout(faqsAnimate, 800);


                    $(this.element).addClass('animated');

                }
            } , { offset: '75%' } );
        }
    };

    var countersAnimate = function() {
        var counters = $('#fh5co-counters');
        if ( counters.length > 0 ) {

            counters.waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('animated') ) {

                    var sec = counters.find('.to-animate').length,
                        sec = parseInt((sec * 200) + 400);

                    setTimeout(function() {
                        counters.find('.to-animate').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 200);

                    setTimeout(function() {
                        counters.find('.js-counter').countTo({
                             formatter: function (value, options) {
                              return value.toFixed(options.decimals);
                           },
                        });
                    }, 400);

                    setTimeout(function() {
                        counters.find('.to-animate-2').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('bounceIn animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, sec);





                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };

        var contactAnimate = function() {
        var contact = $('#fh5co-contact');
        if ( contact.length > 0 ) {

            contact.waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('animated') ) {

                    setTimeout(function() {
                        contact.find('.to-animate').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 200);

                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };

    // Document on load.
    $(function(){

        burgerMenu();
        owlCrouselFeatureSlide();
        clickMenu();
        windowScroll();
        navigationSection();

        aboutWayPoint();
        teamWayPoint();
        servicesWayPoint();
        featuresWayPoint();
        testimonialsWayPoint();
        pricingWayPoint();
        pressWayPoint();
        anywhereWayPoint();

        features2WayPoint();
        faqsWayPoint();
        faqsAccordion();

        countersAnimate();
        contactAnimate();
    });


}());
