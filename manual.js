function getRandomBoolean() {
    return Math.random() > 0.5;
}

function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rotate(object, degrees) {
    object.css({
  '-webkit-transform' : 'rotate('+degrees+'deg)',
     '-moz-transform' : 'rotate('+degrees+'deg)',
      '-ms-transform' : 'rotate('+degrees+'deg)',
       '-o-transform' : 'rotate('+degrees+'deg)',
          'transform' : 'rotate('+degrees+'deg)',
               'zoom' : 1

    });
}

function fidget(element, range) {
    var variation = getRandomIntInRange(-range, range);
    var rotation = getRandomBoolean() ? variation : -variation;

    rotate(element, rotation);
}

function fidgetWithAllCards() {
    $('.card').each(function(index) {
        fidget($(this), 2);
    });
}

function hideAllExplanations() {
    $('.explanation').each(function(index) {
        $(this).css('visibility', 'hidden');
    });
}

fidgetWithAllCards();
hideAllExplanations();

$('#requirement-special-psyche').on('touchend mouseenter', function() { 
    hideAllExplanations();

    $('#explanation-psyche').css('visibility', 'visible');
});

$('#requirement-special-focus').on('touchend mouseenter', function() {
    hideAllExplanations();

    $('#explanation-focus').css('visibility', 'visible');
});

$('#requirement-special-steal').on('touchend mouseenter', function() {
    hideAllExplanations();

    $('#explanation-steal').css('visibility', 'visible');
});

$('#requirement-special-first').on('touchend mouseenter', function() {
    hideAllExplanations();

    $('#explanation-first').css('visibility', 'visible');
});

$('#requirement-special-onemore').on('touchend mouseenter', function() {
    hideAllExplanations();

    $('#explanation-onemore').css('visibility', 'visible');
});

/*
    Always show the first tip. 
*/
$('#explanation-first').css('visibility', 'visible');

/*
    Zooms in on a card. All other cards go back to normal.
*/
function zoomOnCard(card) {
    $(card).attr('style', '');

    $('#tricks .card').each(function(index) {
        if ($(this)[0] != 
            $(card)[0]) {
            $(this).removeClass('zoom');
            $(this).addClass('normal');
            $(this).find('.card-value').css({
                'font-size': '1.9em', 
                'top': '-18px'
            });
        }
    });

    if ($(card).hasClass('normal')) {
        $(card).removeClass('normal');
    }

    if (!$(card).hasClass('zoom')) {
        $(card).addClass('zoom');
        $(card).find('.card-value').css({
            'font-size': '1.0em', 
            'top': '-14px'
        });
    }
}

$("#tricks .card-requirement").on('touchend mouseenter', function() {
    zoomOnCard($(this).children('.card'));
});