// Activates the Carousel
$('.carousel').carousel({
  interval: 5000
})

$.fn.extend({
    popoverClosable: function (options) {
        var defaults = {
            template:
                '<div class="popover">\
<div class="arrow"></div>\
<div class="popover-header">\
<button type="button" class="close" data-dismiss="popover" aria-hidden="true">&times;</button>\
<h3 class="popover-title"></h3>\
</div>\
<div class="popover-content"></div>\
</div>'
        };
        options = $.extend({}, defaults, options);
        var $popover_togglers = this;
        $popover_togglers.popover(options);
        $popover_togglers.on('click', function (e) {
            e.preventDefault();
            $popover_togglers.not(this).popover('hide');
        });
        $('html').on('click', '[data-dismiss="popover"]', function (e) {
            $popover_togglers.popover('hide');
        });
    }
});

$(function () {
    $('[data-toggle="popover"]').popoverClosable();
});

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
})

$('a#rootbeer').click(function() {
        var someVariable = "People love our root beer balm as it takes them back to their childhood. Cool, creamy, rooty and fabulous.";
        $('a#rootbeer').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Root Beer'
        });
        $('a#test').popover("show");

    });

$('a#vanilla').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#vanilla').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Vanilla'
        });
        $('a#test').popover("show");

    });


$('a#chocolate').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#chocolate').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Chocolate'
        });
        $('a#test').popover("show");

    });


$('a#coffeebean').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#coffeebean').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Coffeebean'
        });
        $('a#test').popover("show");

    });

$('a#almond').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#almond').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Almond'
        });
        $('a#test').popover("show");

    });

$('a#cinnamon').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#cinnamon').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Cinnamon'
        });
        $('a#test').popover("show");

    });

$('a#earlgrey').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#earlgrey').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Earl Grey'
        });
        $('a#test').popover("show");

    });

$('a#greentea').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#greentea').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Green Tea'
        });
        $('a#test').popover("show");

    });

$('a#grapefruit').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#grapefruit').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Grapefruit'
        });
        $('a#test').popover("show");

    });

$('a#kapha').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#kapha').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Kapha'
        });
        $('a#test').popover("show");

    });

$('a#lemon').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#lemon').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Lemon'
        });
        $('a#test').popover("show");

    });

$('a#licorice').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#licorice').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Licorice'
        });
        $('a#test').popover("show");

    });

$('a#lime').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#lime').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Lime'
        });
        $('a#test').popover("show");

    });

$('a#mint').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#mint').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Mint'
        });
        $('a#test').popover("show");

    });
$('a#night').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#night').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Night'
        });
        $('a#test').popover("show");

    });
$('a#orange').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#orange').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Orange'
        });
        $('a#test').popover("show");

    });
$('a#pitta').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#pitta').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Pitta'
        });
        $('a#test').popover("show");

    });
$('a#sun').click(function() {
        var someVariable = "We infuse raw, organic Madagascar grown vanilla beans into our balm, making it the most deliciously smooth treat for your lips.";
        $('a#sun').popover({
            trigger: 'hover focus',
            placement: 'top',
            content: someVariable,
            title: 'Sun'
        });
        $('a#test').popover("show");

    });