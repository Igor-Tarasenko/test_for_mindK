$(document).ready(function(){
    $('select').styler();
    $('.number').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.next-step').on('click', function() {
        var selectedItem = $('.pages-numbers').find('.active');
        var lastItem = $('.number');
        if (lastItem.last().hasClass('active')) {
            console.log('first');
            lastItem.removeClass('active');
            lastItem.first().addClass('active');
        }
        if (lastItem.hasClass('active')) {
            console.log('second');
            selectedItem.removeClass('active');
            selectedItem.next().addClass('active');
        }
    });
    $('.last-step').on('click', function() {
        var selectedItem = $('.pages-numbers').find('.active');
        selectedItem.removeClass('active');
        $('.number').last().addClass('active');
    });
    $('.number, .next-step, .last-step').on('click', function() {
        var text = $('.active').text();
        $('.count').text(text);
    });
});
