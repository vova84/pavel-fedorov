var APP = APP || {};

//create namespaces
function createNamespaces(namespace) {
    var parent = APP,
        args = namespace.split('.'),
        parts = (args[0] === 'APP') ? args.slice(1) : args;
    for(var i = 0; i < parts.length; i++) {
        if(typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent =  parent[parts[i]];
    }
    return parent;
}

createNamespaces('APP.Effects');
createNamespaces('APP.Forms');


/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.0
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

/*! responsive-nav.js 1.0.34, copyright (c) 2014 @viljamis, MIT license */
!function(a,b,c){"use strict";var d=function(d,e){var f=!!b.getComputedStyle;f||(b.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this});var g,h,i,j,k,l,m=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"attachEvent"in a&&("object"==typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},n=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"detachEvent"in a&&("object"==typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))},o=function(a){if(a.children.length<1)throw new Error("The Nav container has no containing elements");for(var b=[],c=0;c<a.children.length;c++)1===a.children[c].nodeType&&b.push(a.children[c]);return b},p=function(a,b){for(var c in b)a.setAttribute(c,b[c])},q=function(a,b){0!==a.className.indexOf(b)&&(a.className+=" "+b,a.className=a.className.replace(/(^\s*)|(\s*$)/g,""))},r=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/(^\s*)|(\s*$)/g,"")},s=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},t=a.createElement("style"),u=a.documentElement,v=function(b,c){var d;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(d in c)this.options[d]=c[d];if(q(u,this.options.jsClass),this.wrapperEl=b.replace("#",""),a.getElementById(this.wrapperEl))this.wrapper=a.getElementById(this.wrapperEl);else{if(!a.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=a.querySelector(this.wrapperEl)}this.wrapper.inner=o(this.wrapper),h=this.options,g=this.wrapper,this._init(this)};return v.prototype={destroy:function(){this._removeStyles(),r(g,"closed"),r(g,"opened"),r(g,h.navClass),r(g,h.navClass+"-"+this.index),r(u,h.navActiveClass),g.removeAttribute("style"),g.removeAttribute("aria-hidden"),n(b,"resize",this,!1),n(b,"focus",this,!1),n(a.body,"touchmove",this,!1),n(i,"touchstart",this,!1),n(i,"touchend",this,!1),n(i,"mouseup",this,!1),n(i,"keyup",this,!1),n(i,"click",this,!1),h.customToggle?i.removeAttribute("aria-hidden"):i.parentNode.removeChild(i)},toggle:function(){j===!0&&(l?this.close():this.open(),this._enablePointerEvents())},open:function(){l||(r(g,"closed"),q(g,"opened"),q(u,h.navActiveClass),q(i,"active"),g.style.position=h.openPos,p(g,{"aria-hidden":"false"}),l=!0,h.open())},close:function(){l&&(q(g,"closed"),r(g,"opened"),r(u,h.navActiveClass),r(i,"active"),p(g,{"aria-hidden":"true"}),h.animate?(j=!1,setTimeout(function(){g.style.position="absolute",j=!0},h.transition+10)):g.style.position="absolute",l=!1,h.close())},resize:function(){"none"!==b.getComputedStyle(i,null).getPropertyValue("display")?(k=!0,p(i,{"aria-hidden":"false"}),g.className.match(/(^|\s)closed(\s|$)/)&&(p(g,{"aria-hidden":"true"}),g.style.position="absolute"),this._createStyles(),this._calcHeight()):(k=!1,p(i,{"aria-hidden":"true"}),p(g,{"aria-hidden":"false"}),g.style.position=h.openPos,this._removeStyles())},handleEvent:function(a){var c=a||b.event;switch(c.type){case"touchstart":this._onTouchStart(c);break;case"touchmove":this._onTouchMove(c);break;case"touchend":case"mouseup":this._onTouchEnd(c);break;case"click":this._preventDefault(c);break;case"keyup":this._onKeyUp(c);break;case"focus":case"resize":this.resize(c)}},_init:function(){this.index=c++,q(g,h.navClass),q(g,h.navClass+"-"+this.index),q(g,"closed"),j=!0,l=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var d=this;setTimeout(function(){d.resize()},20),m(b,"resize",this,!1),m(b,"focus",this,!1),m(a.body,"touchmove",this,!1),m(i,"touchstart",this,!1),m(i,"touchend",this,!1),m(i,"mouseup",this,!1),m(i,"keyup",this,!1),m(i,"click",this,!1),h.init()},_createStyles:function(){t.parentNode||(t.type="text/css",a.getElementsByTagName("head")[0].appendChild(t))},_removeStyles:function(){t.parentNode&&t.parentNode.removeChild(t)},_createToggle:function(){if(h.customToggle){var b=h.customToggle.replace("#","");if(a.getElementById(b))i=a.getElementById(b);else{if(!a.querySelector(b))throw new Error("The custom nav toggle you are trying to select doesn't exist");i=a.querySelector(b)}}else{var c=a.createElement("a");c.innerHTML=h.label,p(c,{href:"#","class":"nav-toggle"}),"after"===h.insert?g.parentNode.insertBefore(c,g.nextSibling):g.parentNode.insertBefore(c,g),i=c}},_closeOnNavClick:function(){if(h.closeOnNavClick){var a=g.getElementsByTagName("a"),b=this;s(a,function(c){m(a[c],"click",function(){k&&b.toggle()},!1)})}},_preventDefault:function(a){return a.preventDefault?(a.stopImmediatePropagation&&a.stopImmediatePropagation(),a.preventDefault(),a.stopPropagation(),!1):void(a.returnValue=!1)},_onTouchStart:function(b){this._preventDefault(b),q(a.body,"disable-pointer-events"),this.startX=b.touches[0].clientX,this.startY=b.touches[0].clientY,this.touchHasMoved=!1,n(i,"mouseup",this,!1)},_onTouchMove:function(a){(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10)&&(this._enablePointerEvents(),this.touchHasMoved=!0)},_onTouchEnd:function(c){if(this._preventDefault(c),k&&!this.touchHasMoved){if("touchend"===c.type)return this.toggle(),void("after"===h.insert&&setTimeout(function(){r(a.body,"disable-pointer-events")},h.transition+300));var d=c||b.event;3!==d.which&&2!==d.button&&this.toggle()}},_onKeyUp:function(a){var c=a||b.event;13===c.keyCode&&this.toggle()},_enablePointerEvents:function(){r(a.body,"disable-pointer-events")},_transitions:function(){if(h.animate){var a=g.style,b="max-height "+h.transition+"ms";a.WebkitTransition=b,a.MozTransition=b,a.OTransition=b,a.transition=b}},_calcHeight:function(){for(var a=0,b=0;b<g.inner.length;b++)a+=g.inner[b].offsetHeight;var c="."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened{max-height:"+a+"px !important} ."+h.jsClass+" .disable-pointer-events{pointer-events:none !important} ."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";t.styleSheet?t.styleSheet.cssText=c:t.innerHTML=c,c=""}},new v(d,e)};b.responsiveNav=d}(document,window,0);

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
// create mailForm module
createNamespaces('APP.modules.mailForm');

APP.modules.mailForm = ({
    input: $('.call-form .form-field'),
    ajaxLoader: $('.call-form .ajax-loader'),
    btn: $('#call-send'),
    form: $('.call-form'),
    maskTelField: function () {
        //mask jquery plugin
        $("#call-phone").mask("+7 (999) 999-99-99")
            .on("blur", function() {
                var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );
                if( last.length == 3 ) {
                    var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
                    var lastfour = move + last;
                    var first = $(this).val().substr( 0, 9 );
                    $(this).val( first + '-' + lastfour );
                }
            });
    },
    send: function () {
        var that = this;
        $.ajax({
            url: 'second.php',
            type: 'POST',
            data: that.form.serialize(),
            beforeSend: function () {
                that.addSpinner();
                that.disabledForm();
            },
            success: function (data) {
                var dataObj = data || {};
                if(dataObj != 'success') {
                    that.onServerEvent(dataObj);
                }else{
                    that.onServerEvent('success');
                    that.clearForm();
                }
                that.removeSpinner();
                that.enabledForm();
            },
            error: function () {
                that.onServerEvent('error');
                that.removeSpinner();
                that.enabledForm();
            }
        });
    },
    disabledForm: function () {
        this.btn.attr('disabled', true);
    },
    enabledForm: function () {
        this.btn.attr('disabled', false);
    },
    onServerEvent: function (msg) {
        if(msg === 'success') {
            //success
            $('.call-form  .server-success').removeClass('hide').hide().fadeIn(500);
        }else if(msg === 'error'){
            //server error
            $('.call-form  .server-error').removeClass('hide').hide().fadeIn(500);
        }else{
            //server error
            $('.call-form  .server-error').removeClass('hide').hide().html(msg).fadeIn(500);
        }
    },
    clearForm: function () {
        this.form.find('input').val('');
    },
    addSpinner: function () {
        this.ajaxLoader.removeClass('hide');
    },
    removeSpinner: function () {
        this.ajaxLoader.addClass('hide');
    },
    showValidateError: function ($el) {
        $el.prev().addClass('error-field');
    },
    removeValidateError: function ($el) {
        $el.prev().removeClass('error-field');
    },
    validateFields: function () {
        var result = true,
            that = this;

        this.input.each(function (i, el) {
            var $el = $(el);
            if($el.val().length == 0) {
                that.showValidateError($el);
                result = false;
            }else{
                that.removeValidateError($el);
            }
        });
        return result;
    },
    init: function () {
        var that = this;
        this.maskTelField();
        that.btn.click(function (e) {
            if(that.validateFields()) {
                that.send();
            }
            e.preventDefault();
        });
        return this;
    }
}).init();



// create mailForm module
createNamespaces('APP.modules.mainForm');

APP.modules.mainForm = ({
    input: $('.main-form .form-field'),
    ajaxLoader: $('.main-form .ajax-loader'),
    btn: $('.main-form #send-mail'),
    form: $('.main-form'),
    validateMail: function () {
        var field = this.input.parent().find('#email'),
            re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(field.val());
    },
    maskTelField: function () {
        //mask jquery plugin
        $("#phone").mask("+7 (999) 999-99-99")
            .on("blur", function() {
                var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );
                if( last.length == 3 ) {
                    var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
                    var lastfour = move + last;
                    var first = $(this).val().substr( 0, 9 );
                    $(this).val( first + '-' + lastfour );
                }
            });
    },
    send: function () {
        var that = this;
        $.ajax({
            url: 'main.php',
            type: 'POST',
            data: that.form.serialize(),
            beforeSend: function () {
                that.addSpinner();
                that.disabledForm();
            },
            success: function (data) {
                var dataObj = data || {};
                if(dataObj != 'success') {
                    that.onServerEvent(dataObj);
                }else{
                    that.onServerEvent('success');
                    that.clearForm();
                }
                that.removeSpinner();
                that.enabledForm();
            },
            error: function () {
                that.onServerEvent('error');
                that.removeSpinner();
                that.enabledForm();
            }
        });
    },
    disabledForm: function () {
        this.btn.attr('disabled', true);
    },
    enabledForm: function () {
        this.btn.attr('disabled', false);
    },
    onServerEvent: function (msg) {
        if(msg === 'success') {
            //success
            $('.main-form  .server-success').removeClass('hide').hide().fadeIn(500);
        }else if(msg === 'error'){
            //server error
            $('.main-form  .server-error').removeClass('hide').hide().fadeIn(500);
        }else{
            //server error
            $('.main-form  .server-error').removeClass('hide').hide().html(msg).fadeIn(500);
        }

    },
    clearForm: function () {
        this.form.find('input').val('');
        this.form.find('textarea').val('');
    },
    addSpinner: function () {
        this.ajaxLoader.removeClass('hide');
    },
    removeSpinner: function () {
        this.ajaxLoader.addClass('hide');
    },
    showValidateError: function ($el) {
        $el.prev().addClass('error-field');
    },
    removeValidateError: function ($el) {
        $el.prev().removeClass('error-field');
    },
    validateFields: function () {
        var result = true,
            that = this;

        this.input.each(function (i, el) {
            var $el = $(el);
            if($el.val().length == 0) {
                that.showValidateError($el);
                result = false;
            }else{
                that.removeValidateError($el);
            }
        });
        if(!this.validateMail()){
            that.showValidateError($('#email'));
            result = false;
        }

        if(!that.validateCheckboxes()){
            result = false;
        }

        return result;
    },
    validateCheckboxes: function () {

        if($('#exhibition').prop('checked')==false && $('#conference').prop('checked')==false){
            $('.checkbox-wrap').find('label').addClass('error-field');
            return false;
        }
        $('.checkbox-wrap').find('label').removeClass('error-field');
        return true;
    },
    init: function () {
        var that = this;
        this.maskTelField();
        that.btn.click(function (e) {
            if(that.validateFields()) {
                that.send();
            }
            e.preventDefault();
        });
        return this;
    }
}).init();



