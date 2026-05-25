var slider = $('#slider');
var interval = 0;
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');  
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
slider.css('margin-left', '-'+100+'%');

function moverD() {
    slider.animate({
        marginLeft: '-'+200+'%'}, 700, function() {
            $('#slider .slider__section:first').
            insertAfter('#slider .slider__section:last');
            slider.css('margin-left', '-'+100+'%');
        });
}

function moverI() {
    slider.animate({
        marginLeft: 0}, 700, function() {
            $('#slider .slider__section:last').
            insertBefore('#slider .slider__section:first');
            slider.css('margin-left', '-'+100+'%');
        });
    }

function autoplay() {
    interval = setInterval(function() {
        moverD();
    }, 10000);
}

siguiente.on('click', function() {
    moverD();
    clearInterval(interval);
    autoplay();
});

anterior.on('click', function() {
    moverI();
    clearInterval(interval);
    autoplay();
});

autoplay();
