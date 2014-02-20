var CARD_TRICK_OLLIE = 'Ollie';
var CARD_TRICK_SHUV = 'Pop Shuv-it';
var CARD_TRICK_KICKFLIP = 'Kickflip';
var CARD_TRICK_HEELFLIP = 'Heelflip';
var CARD_TRICK_IMPOSSIBLE = 'Impossible';
var CARD_TRICK_TRE = 'Tre Flip';
var CARD_TRICK_HARDFLIP = 'Hardflip';

var CARD_SPECIAL_PSYCHE = "Psyche!";
var CARD_SPECIAL_FOCUS = "Focus!";
var CARD_SPECIAL_STEAL = "Steal Turn!";
var CARD_SPECIAL_FIRST = "First Try!";
var CARD_SPECIAL_ONEMORE = "One More!";

var CARD_TYPE_TRICK = 0;
var CARD_TYPE_SPECIAL = 1;

function Card(type, name, value) {
    this.type = type;
    this.name = name;
    this.value = value;
}

function Deck() {
	this.cards = {
		'tricks': [
			/* 3x Ollie */
			new Card(CARD_TYPE_TRICK, CARD_TRICK_OLLIE, 2),
			new Card(CARD_TYPE_TRICK, CARD_TRICK_OLLIE, 2),
			new Card(CARD_TYPE_TRICK, CARD_TRICK_OLLIE, 2),
			/* 3X Pop Shuv-it */
			new Card(CARD_TYPE_TRICK, CARD_TRICK_SHUV, 2),
			new Card(CARD_TYPE_TRICK, CARD_TRICK_SHUV, 2),
			new Card(CARD_TYPE_TRICK, CARD_TRICK_SHUV, 2),
			/* 2x Kickflip */
			new Card(CARD_TYPE_TRICK, CARD_TRICK_KICKFLIP, 3),
			new Card(CARD_TYPE_TRICK, CARD_TRICK_KICKFLIP, 3),
			/* 1x Heelflip */
			new Card(CARD_TYPE_TRICK, CARD_TRICK_HEELFLIP, 3),
			/* 2x Impossible */
			new Card(CARD_TYPE_TRICK, CARD_TRICK_IMPOSSIBLE, 4),
			new Card(CARD_TYPE_TRICK, CARD_TRICK_IMPOSSIBLE, 4),
			/* 2x Tre */
			new Card(CARD_TYPE_TRICK, CARD_TRICK_TRE, 5),
			new Card(CARD_TYPE_TRICK, CARD_TRICK_TRE, 5),
			/* 1x Hardflip */
			new Card(CARD_TYPE_TRICK, CARD_TRICK_HARDFLIP, 6)
		],
		'specials': [
			/* 2x Psyche! */
			new Card(CARD_TYPE_SPECIAL, CARD_SPECIAL_PSYCHE, '*'),
			new Card(CARD_TYPE_SPECIAL, CARD_SPECIAL_PSYCHE, '*'),
			/* 2x Focus! */
			new Card(CARD_TYPE_SPECIAL, CARD_SPECIAL_FOCUS, 0),
			new Card(CARD_TYPE_SPECIAL, CARD_SPECIAL_FOCUS, 0),
			/* 1x Steal Turn! */
			new Card(CARD_TYPE_SPECIAL, CARD_SPECIAL_STEAL, 4),
			/* 1x First Try! */
			new Card(CARD_TYPE_SPECIAL, CARD_SPECIAL_FIRST, 0),
			/* 1x One More! */
			new Card(CARD_TYPE_SPECIAL, CARD_SPECIAL_ONEMORE, 0),
		]
	};
}

/*
 Starts a game.
 */
function deal() {
	var playerDeck = new Deck();
	var computerDeck = new Deck();
}

deal();

function fidget(element, range, shouldTranslate) {
    var variation = getRandomIntInRange(-range, range);
    var rotation = getRandomBoolean() ? variation : -variation;

    rotate(element, rotation);

    if (shouldTranslate) {
    	var offset = {
	        x: variation * 1.0,
	        y: variation * 1.0
	    };

	    translate(element, offset);
	}
}

/*
    Zooms in on a card. All other cards go back to normal.
*/
function zoomOnCard(card) {
    $(card).attr('style', '');

    $('#player-hand .card').each(function(index) {
        if ($(this)[0] != $(card)[0]) {
            $(this).removeClass('zoom');
            $(this).addClass('normal');

            fidget($(this), 2);
        }
    });

    if ($(card).hasClass('normal')) {
        $(card).removeClass('normal');
    }

    if (!$(card).hasClass('zoom')) {
        $(card).addClass('zoom');
    }
}

function playCard(card) {
	$(card).removeClass('zoom');
    $(card).addClass('normal');

	$(card).detach().appendTo('#played-area');
	$(card).unbind('mouseenter mouseup touchend');

	fidget(card, 10, true);
}

$('#player-hand .card').each(function(index) {
    fidget($(this), 4);
});

$('#enemy-hand .card').each(function(index) {
    fidget($(this), 10);
});

$('#specials .card').each(function(index) {
    fidget($(this), 30, true);
});

$('#player-deck .card').each(function(index) {
    fidget($(this), 2, true);
});

$('#enemy-deck .card').each(function(index) {
    fidget($(this), 2, true);
});

$('#played-area .card').each(function(index) {
    fidget($(this), 10, true);
});

$("#player-hand .card").on('mouseenter', function() {
    zoomOnCard($(this));
});

$("#player-hand .card").on('mouseup', function() {
	var card = $(this);

	if (card.hasClass('zoom')) {
		playCard(card);
	}
});

$('.die').each(function(index) {
    fidget($(this), 15);
});

$('.letter').each(function(index) {
    fidget($(this), 15, true);
});