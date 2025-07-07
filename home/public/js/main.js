$(document).ready(function () {
    var windowWidth = $(window).width();
    $(window).resize(function () {
        windowWidth = $(this).width();
    })

    // scroll to hide/showed navbar 
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
            $('ul#main-menu li a.dropdown-toggle').next('ul.sub-menu').stop().fadeOut(0);
            $('ul.sub-menu').removeClass('showed');
            $('#menu-btn').removeClass('opened');
            $('#main-menu').removeClass('showed-menu');

        } else {
            // Scroll Up
            accumulatedScroll -= (lastScrollTop - st);
            if (accumulatedScroll < 0) {
                accumulatedScroll = 0;              // Set the min value
            }
            $('ul#main-menu li a.dropdown-toggle').next('ul.sub-menu').stop().fadeOut(0);
            $('ul.sub-menu').removeClass('showed');
            $('#menu-btn').removeClass('opened');
            $('#main-menu').removeClass('showed-menu');
        }
        $('#header').css('top', -accumulatedScroll + 'px');
        lastScrollTop = st;
    })

    // Header dropdown menu 
    $('ul#main-menu li a.dropdown-toggle').click(function (e) {
        if ($(this).next('ul.sub-menu').hasClass('showed')) {
            if (windowWidth > 1150) {
                $(this).next('ul.sub-menu.showed').stop().fadeOut(200);
            } else {
                $(this).next('ul.sub-menu.showed').stop().slideUp(200);
            }
            $(this).next('ul.sub-menu').removeClass('showed');
        } else {
            if (windowWidth > 1150) {
                $('ul#main-menu li a.dropdown-toggle').next('ul.sub-menu').stop().fadeOut(200);
            } else {
                $('ul#main-menu li a.dropdown-toggle').next('ul.sub-menu').stop().slideUp(200);
            }
            $('ul#main-menu li a.dropdown-toggle').next('ul.sub-menu').removeClass('showed');     //remove class showed when user open another sub-menu
            $(this).next('ul.sub-menu').addClass('showed');
            if (windowWidth > 1150) {
                $(this).next('ul.sub-menu.showed').stop().fadeIn(200);
            } else {
                $(this).next('ul.sub-menu.showed').stop().slideDown(200);
            }
        }
        e.preventDefault();
        e.stopPropagation();                // sub-menu won fadeOut when user clicks it
    })

    // menu-btn click event
    $("#menu-btn").click(function (e) {
        $("#main-menu").toggleClass('showed-menu')
        $(this).toggleClass('opened');
        $('ul.sub-menu').removeClass('showed');
        $('ul.sub-menu').fadeOut(0);
        e.stopPropagation();
    })

    // select form (list-product) event
    $('.select-form').click(function (e) {
        $(this).find('ul').slideToggle(200)
        var selected = $(this).find('li.selected').text().trim();
        if (selected == $(this).find('p').text().trim()) {
            $(this).find('li.selected').hover()
        }
        e.stopPropagation();
    })
    $('.select-form ul li').click(function (e) {
        $('.select-form ul li').removeClass('selected');
        $(this).addClass('selected')
        $('.select-form p').text($(this).text())
        $('.select-form ul').slideUp(0)
        //update value for select form hidden
        var form_select = $('select.options option')
        $(form_select).removeAttr("selected")
        var select_value = $(this).val();
        $.each(form_select, function (key, value) {
            if (select_value == value.value) {
                $(form_select[select_value]).attr("selected", "selected")
            }
        })
        e.stopPropagation();
    })

    //sidebar click event
    $('.sidebar-cat-title span').click(function () {
        $(this).parent().next().slideToggle(200);
    })
    $('ul#list-cat li span').click(function () {
        $(this).parent().next().slideToggle(200);
    })

    //clear sidebar
    $('.clear-sidebar').click(function () {
        $('.active').removeClass('active')
    })
    $('.clear-filter').click(function () {
        $('.form-checkbox input:checkbox').prop('checked', false)
    })

    //decrement, increment qty product event
    $('.decrement').click(function () {
        var current_value = +$(this).next().val();
        var new_value = 1;
        if (current_value > 1) {
            var new_value = current_value - 1;
        }
        $(this).next().val(new_value)
    })
    $('.increment').click(function () {
        var current_value = +$(this).prev().val();
        var new_value = current_value + 1;
        $(this).prev().val(new_value)
    })

    //add product event
    $('.btn_add').mousedown(function () {
        $(this).css({ backgroundColor: "#8b0128", color: "#fff" });
    })
    $('.btn_add').mouseup(function () {
        $(this).css({ backgroundColor: "#cf1047", color: "#fff" });
    })
    $('.btn_add').mouseleave(function () {
        $(this).css({ backgroundColor: "#fff", color: "#000", transition: "all 0.3s ease" });
    })
    $('.btn_add').mouseenter(function () {
        $(this).css({ backgroundColor: "#cf1047", color: "#fff", transition: "all 0.3s ease" });
    })

    // product filters click event
    $('button.filter-btn').click(function () {
        $('#oversidebar').show()
        $('#sidebar').show()
    })
    $('.close-btn').click(function () {
        $('#oversidebar').hide()
        $('#sidebar').hide()
    })
    $('#oversidebar').click(function () {
        $('#oversidebar').hide()
        $('#sidebar').hide()
    })

    //pagination
    $('.current-page').click(function (e) {
        e.preventDefault
    })


    // code to handle when clicking on document
    $('html').click(function () {               // sub-menu will fadeout when user clicks it
        $('ul.sub-menu').removeClass('showed');
        if (windowWidth > 1150) {
            $('ul.sub-menu').fadeOut(200);
        } else {
            $('ul.sub-menu').fadeOut(0);
        }
        $('#menu-btn').removeClass('opened');
        $('#main-menu').removeClass('showed-menu');
        $('.select-form ul').slideUp(200)
    })
})

