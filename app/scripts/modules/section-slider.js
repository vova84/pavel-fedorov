//slider on main - slide page from section top to section bottom

APP.Effects.sectionSlider = ({
    switcher: $('#slider-block-arrow'),
    hideIntro: function () {
        setTimeout(function () {
            $('body').addClass('top-hide');
        }, 800);
    },
    init: function () {
        var isScrolled = false,
            self = this;

        $('.touch-nav').on('touchstart', function () {
            self.hideIntro();
        });

        self.switcher.click(function () {
            self.hideIntro();
        });

        $('.top').on('mousewheel DOMMouseScroll', function () {
            if(!isScrolled) {
                self.hideIntro();
                return false;
            }
        });
    }
}).init();