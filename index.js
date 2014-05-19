function fidget(element, range) {
    var variation = getRandomIntInRange(-range, range);
    var rotation = getRandomBoolean() ? variation : -variation;

    rotate(element, rotation);
}

/*
    Zooms in on a card. All other cards go back to normal.
*/
function toggleZoomOnCard(card) {
    $(card).attr('style', '');

    if ($(card).hasClass('normal')) {
        $(card).removeClass('normal');
        $(card).addClass('zoom');
    } else if ($(card).hasClass('zoom')) {
        $(card).removeClass('zoom');
        $(card).addClass('normal');
    } else {
        $(card).addClass('zoom');
    }
}

$("#trickbook").on('touchend mouseenter', function() {
    toggleZoomOnCard($(this));

    deck = $('#deck');

    deck.attr('style', '');
    deck.removeClass('normal');
    deck.addClass('zoom-2');
});

$("#trickbook").on('mouseleave', function() {
    toggleZoomOnCard($(this));

    deck = $('#deck');

    deck.attr('style', '');
    deck.removeClass('zoom-2');
    deck.addClass('normal');
});

$('.trick').each(function(index) {
    fidget($(this), 3);
});