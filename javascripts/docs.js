(function($) {
    "use strict";
    $(document).ready(function() {

        $(window).scroll(function() {

            var scroll = $(window).scrollTop();

            if ( scroll >= 40 ) {
                $('body').addClass('shrink');
            } else {
                $('body').removeClass('shrink');
            }

        });

    });
})(jQuery);
