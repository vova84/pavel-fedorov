APP.Effects.magnific = ({
    trigger: function (galleryItem) {
        galleryItem.find('figcaption').click(function () {
            galleryItem.find('.single-photo > a').trigger('click');
        });
    },
    animateSign: function (galleryItem) {
        var topEl = this.getSign(galleryItem).topSign,
            bottomEl = this.getSign(galleryItem).bottomSign,
            target = galleryItem.find('figure');

        target.on({
           'mouseenter': function () {
               topEl.removeClass('fadeOutUp');
               topEl.addClass('fadeInDown');

               bottomEl.removeClass('fadeOutDown');
               bottomEl.addClass('fadeInUp');
           },
           'mouseleave': function () {
               topEl.removeClass('fadeInDown');
               topEl.addClass('fadeOutUp');

               bottomEl.removeClass('fadeInUp');
               bottomEl.addClass('fadeOutDown');
           }
        });

    },
    viewThumbs: function (galleryItem, modalContainer, dataSign) {

        galleryItem.find('.gallery-inner a').each(function () {
            var $this = $(this);
            $this.empty();
            $this.append('<img src="'+$this.data('thumb')+'" />');
        });

        var current_thumb_gallery = galleryItem.find('.gallery-inner').html();

        modalContainer.find('.thumb-link').on("click", function(e){

            e.stopPropagation();

            $.magnificPopup.proto.close.call(this);

            $.magnificPopup.open({
                type: 'inline',
                tClose: '',
                tLoading: '<img src="images/logo.png">',
                closeMarkup: '',
                items: {
                    src: '<div class="btn-inline-holder"><div class="container"><div class="col-20 inline"><div class="mfp-top-sign">'+ dataSign.bottomSign.text() + '</div><div class="mfp-bottom-sign">' + dataSign.topSign.text() + '</div></div><button class="mfp-close col-4 inline last"></button></div></div><div class="container"><ul class="row gallery-inner gallery-inline-holder text-center">' + current_thumb_gallery + '</ul></div>'
                },
                callbacks: {
                    open: function() {

                        $('.gallery-inline-holder li').on("click", function(){

                            $.magnificPopup.proto.close.call(this);

                            galleryItem.magnificPopup("open");

                            $.magnificPopup.instance.goTo($(this).index());

                            return false;

                        });

                    }
                }

            });

            return false;

        });

    },
    getSign: function (galleryItem) {
        return {
            topSign: galleryItem.find('.date'),
            bottomSign:  galleryItem.find('.name')
        }
    },
    init: function () {
        var self = this;
        $('.gallery').each(function() { // the containers for all your galleries
            var $this = $(this),
                dataSign = self.getSign($this);



            // popup from main page
            $this.magnificPopup({
                delegate: 'a',
                tClose: '',
                type: 'image',
                tLoading: '<img src="images/logo.png">',
                closeMarkup: '<button title="%title%" class="mfp-close"></button>',
                image: {
                    markup: '<div class="mfp-figure">'+
                                '<div class="mfp-bottom-bar">'+
                                    '<div class="container">' +
                                        '<div class="row">'+
                                            '<div class="col-10-sm col-24 inline mfp-title"></div>'+
                                            '<div class="col-4-sm col-4 inline mfp-counter text-center"></div>'+
                                            '<div class="col-10-sm col-20 gal-options inline last text-right"><a class="thumb-link" href="#"></a><div class="mfp-close"></div></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="mfp-img"></div>'+
                            '</div>',
                    titleSrc: function (item) {
                        return '<div class="mfp-top-sign">'+ dataSign.bottomSign.text() + '</div><div class="mfp-bottom-sign">' + dataSign.topSign.text() + '</div>'
                    }
                },
                gallery: {
                    navigateByImgClick: true,
                    enabled:true,
                    preload: [0,3],
                    tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
                },
                callbacks: {
                    open: function () {
                        self.viewThumbs($this, this.contentContainer, dataSign);
                    },
                    buildControls: function() {
                        // re-appends controls inside the main container

                        if($.magnificPopup.instance.items.length > 1){
                            this.contentContainer.find('.mfp-bottom-bar .mfp-close').before(this.arrowLeft.add(this.arrowRight));
                        }else{
                            this.contentContainer.find('.mfp-bottom-bar .mfp-close').before('<div class="empty-arrow"></div>');
                        }

                    }

                }
            });

            $this.find('.single-photo').click(function () {
                $this.magnificPopup("open");
            });

            self.trigger($this);
            self.animateSign($this);

        });
        return this;
    }
}).init();
