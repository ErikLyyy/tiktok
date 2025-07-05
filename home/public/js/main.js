$(document).ready(function () {

    // scroll to hide/show navbar 
    var headerHeight = $('#header').outerHeight();
    var lastScrollTop = 0;
    var accumulatedScroll = 0;
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st <= 0) {                      //reset value for header when the user scrolls to the top of the page on IOS device
            accumulatedScroll = 0;
            $('#header').css('top', '0px');
            lastScrollTop = 0;
            return;
        }
        if (st > lastScrollTop) {
            // Scroll Down
            accumulatedScroll += (st - lastScrollTop);
            if (accumulatedScroll > headerHeight) {
                accumulatedScroll = headerHeight;            // Set the max value for top
            }
        } else {
            // Scroll Up
            accumulatedScroll -= (lastScrollTop - st);
            if (accumulatedScroll < 0) {
                accumulatedScroll = 0;              // Set the min value
            }
        }
        $('#header').css('top', -accumulatedScroll + 'px');
        lastScrollTop = st;
    })

    // Header dropdown menu 
    var windowWidth = $(window).width();
    $(window).resize(function () {
        windowWidth = $(this).width();
    })
    $('ul#main-menu li a.dropdown-toggle').click(function (e) {
        if ($(this).next('ul#sub-menu').hasClass('show')) {
            if (windowWidth > 1150) {
                $(this).next('ul#sub-menu.show').stop().fadeOut(200);
            } else {
                $(this).next('ul#sub-menu.show').stop().fadeOut(0);

            }
            $(this).next('ul#sub-menu').removeClass('show');
        } else {
            if (windowWidth > 1150) {
                $('ul#main-menu li a.dropdown-toggle').next('ul#sub-menu').stop().fadeOut(200);
            } else {
                $('ul#main-menu li a.dropdown-toggle').next('ul#sub-menu').stop().fadeOut(0);

            }
            $('ul#main-menu li a.dropdown-toggle').next('ul#sub-menu').removeClass('show');     //remove class show when user open another sub-menu
            $(this).next('ul#sub-menu').addClass('show');
            if (windowWidth > 1150) {
                $(this).next('ul#sub-menu.show').stop().fadeIn(200);
            } else {
                $(this).next('ul#sub-menu.show').stop().fadeIn(0);

            }
        }
        e.preventDefault();
        e.stopPropagation();                // sub-menu won fadeOut when user clicks it
    })
    // menu-btn click event
    $("#menu-btn").click(function (e) {
        $("#main-menu").toggleClass('show-menu')
        $(this).toggleClass('opened');
        $('ul#sub-menu').removeClass('show');
        $('ul#sub-menu').fadeOut(0);
        e.stopPropagation();
    })
    $('html').click(function () {               // sub-menu will fadeout when user clicks it
        $('ul#sub-menu').removeClass('show');
        if (windowWidth > 1150) {
            $('ul#sub-menu').fadeOut(200);
        } else {
            $('ul#sub-menu').fadeOut(0);

        }
        $('#menu-btn').removeClass('opened');
        $('#main-menu').removeClass('show-menu');
    })


})

