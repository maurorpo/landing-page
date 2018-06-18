
(function ($, window, document, undefined) {
    'use strict';

	function initReady() {
	}

	function initLoad() {
		$('.ico-open').on('click', function(){
            $('#navbar').animate({"left": "0%"}, 'slow')
        });
        $('.ico-close').on('click', function(){
            $('#navbar').animate({"left": "-100%"}, 'slow')
        });
        
		skrollr.init();
	}
    

    $(document).on('ready', initReady);
    $(window).on('load', initLoad);
})(jQuery, window, document);