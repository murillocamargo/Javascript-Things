// Searchbar handler

$(function () {

    var searchField = $('#query');
    var icon = $('#search-btn');

    // Focus handler
    $(searchField).on('focus', function () {
        $(this).animate({
            width: '100%'
        }, 400);

        $(icon).animate({
            right: '10px'
        }, 400);
    });

    // Focus handler
    $(searchField).on('blur', function () {

        if (searchField.val() == '') {
            searchField.animate({
                width: '45%',
            }, 400, function () { });

            icon.animate({
                right: '360px'
            }, 400), function () { };
        }
    });
});