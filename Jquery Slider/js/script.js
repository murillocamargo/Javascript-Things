$(document).ready(function () {

    // Options
    var fadeSpeed = 500;            // Fade Speed
    var autoSwitch = true;          // Auto slider options
    var autoSwitchSpeed = 4000;     // Auto slider speed

    // Add initial active class
    $('.slide').first().addClass('active');

    // Hide all slides
    $('.slide').hide();

    // Show first slide
    $('.active').show();

    // Next Handler
    $('#next').on('click', nextSlide);

    // Prev Handler
    $('#prev').on('click', prevSlide);

    // Auto Handler
    if (autoSwitch == true) {
        setInterval(nextSlide, autoSwitchSpeed);
    }

    // Switch to next function
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(fadeSpeed);
        $('.active').fadeIn(fadeSpeed);
    }

    // Switch to previous function
    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(fadeSpeed);
        $('.active').fadeIn(fadeSpeed);
    }
});