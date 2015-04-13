APP.Effects.preloader = ({
    preloader: $('#preloader-init'),
    html: $('html'),
    init: function () {
        var preloader = this.preloader,
            html = this.html;

        setInterval(function(){
            preloader.addClass('complete');
            if(html.hasClass('csstransitions')){
                preloader.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    preloader.remove();
                });
                setTimeout(function(){
                    preloader.remove();
                }, 800);
            } else {
                setTimeout(function(){
                    preloader.remove();
                }, 800);
            }
        }, 1000);
    }
}).init();