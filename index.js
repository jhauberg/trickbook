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
    $('#deck .card').each(function(index) {
        fidget($(this), amount);
    });
}

function toggleFanOut(card, remain) {
    var deck = $('#deck');

    card.attr('style', '');
    deck.attr('style', '');

    toggleClasses(card, 'normal', 'fan-left');
    toggleClasses(deck, 'normal', 'fan-right');

    if (deck.hasClass('fan-right')) {
        fidgetWithAllTricks(4);
    } else {
        fidgetWithAllTricks(0);
    }
}

$("#touch-overlay").on('click', function() {
    toggleFanOut($('#trickbook'), true);
});

$("#touch-overlay").on('mouseenter', function() {
    toggleFanOut($('#trickbook'));
});

$("#touch-overlay").on('mouseleave', function() {
    toggleFanOut($('#trickbook'));
});

$(window).load(function() {
    // run the fan out/in animations initially (while hidden) to avoid artifacts
    toggleFanOut($('#trickbook'));

    $("body").fadeIn(250);
});
