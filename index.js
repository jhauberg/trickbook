function fidget(element, range) {
    var variation = getRandomIntInRange(-range, range);
    var rotation = getRandomBoolean() ? variation : -variation;

    rotate(element, rotation);
}

function toggleFanOut(card) {
    var deck = $('#deck');

    card.attr('style', '');
    deck.attr('style', '');

    if (card.hasClass('normal')) {
        card.removeClass('normal');
        card.addClass('zoom');
    } else if (card.hasClass('zoom')) {
        card.removeClass('zoom');
        card.addClass('normal');
    } else {
        card.addClass('zoom');
    }

    if (deck.hasClass('normal')) {
        deck.removeClass('normal');
        deck.addClass('zoom-2');
    } else if (deck.hasClass('zoom-2')) {
        deck.removeClass('zoom-2');
        deck.addClass('normal');
    } else {
        deck.addClass('zoom-2');
    }
}

$("#trickbook").on('touchend mouseenter', function() {
    toggleFanOut($(this));
});

$("#trickbook").on('mouseleave', function() {
    toggleFanOut($(this));
});

$('.trick').each(function(index) {
    fidget($(this), 3);
});

$(window).load(function() {
    // run the fan out/in animations initially (while hidden) to avoid artifacts
    toggleFanOut($('#trickbook'));

    setTimeout(function() {
        toggleFanOut($('#trickbook'));

        setTimeout(function() {
            $("body").fadeIn(250);
        }, 100);
    }, 100);
});