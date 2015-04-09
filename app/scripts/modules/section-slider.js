//slider on main - slide page from section top to section bottom

APP.Effects.sectionSlider = ({
    switcher: $('#slider-block-arrow'),
    init: function () {
        this.switcher.click(function () {
            $('html, body').animate({
                scrollTop: $('.top').height() // need live collection
            }, 700);
        });
    }
}).init();