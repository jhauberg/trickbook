function fidget(element, range) {
    var variation = getRandomIntInRange(-range, range);
    var rotation = getRandomBoolean() ? variation : -variation;

    rotate(element, rotation);
}

function toggleClasses(element, a, b) {
    if (element.hasClass(a)) {
        element.removeClass(a);
        element.addClass(b);
    } else if (element.hasClass(b)) {
        element.removeClass(b);
        element.addClass(a);
    } else {
        element.addClass(b);
    }
}

function fidgetWithAllTricks(amount) {
    $('.trick').each(function(index) {
        fidget($(this), amount);
    });
}

function toggleFanOut(card) {
    var deck = $('#deck');

    card.attr('style', '');
    deck.attr('style', '');

    toggleClasses(card, 'normal', 'zoom');
    toggleClasses(deck, 'normal', 'zoom-2');

    if (deck.hasClass('zoom-2')) {
        fidgetWithAllTricks(3);
    } else {
        fidgetWithAllTricks(0);
    }
}

$("#trickbook").on('touchend mouseenter', function() {
    toggleFanOut($(this));
});

$("#trickbook").on('mouseleave', function() {
    toggleFanOut($(this));
});

$(window).load(function() {
    // run the fan out/in animations initially (while hidden) to avoid artifacts
    toggleFanOut($('#trickbook'));

    setTimeout(function() {
        toggleFanOut($('#trickbook'));

        setTimeout(function() {
            $("body").fadeIn(250);
        }, 400);
    }, 100);
});