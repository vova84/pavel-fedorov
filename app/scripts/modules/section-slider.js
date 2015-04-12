//slider on main - slide page from section top to section bottom

APP.Effects.sectionSlider = ({
    switcher: $('#slider-block-arrow'),
    hideIntro: function () {
        setTimeout(function () {
            $('body').addClass('top-hide');
            //fix bug with lazy xt (after scroll images not show - maybe translate3d for top and bottom sections problem - but show on resize - wtf i don't know)
            setInterval(function () {
                $(window).trigger('resize');
            }, 50);
        }, 800);
    },
    init: function () {
        var self = this;

        $('.touch-nav').on('touchstart', function () {
            self.hideIntro();
        });

        self.switcher.click(function () {
            self.hideIntro();
        });

        $('.top').one('mousewheel DOMMouseScroll', function () {
            self.hideIntro();
        });
    }
}).init();