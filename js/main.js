(function(){
	'use strict';
	
	var $document = $(document);	
	var $window = $(window);

	/**
	 * Utils
	 */

	function centerInWindow (elem) {
		var leftOffset = ($window.width() / 2) - (elem.width() / 2);
		var topOffset = ($window.height() / 2) - (elem.height() / 2);
		elem.css({
			top : topOffset,
			left : leftOffset
		});
	}

	/**
	 * Main controller
	 */

	function main () {
		
		/**
	 	 * Loading screen
	 	 */

		var $loadingScreen = $('#loadingScreen');		
		var $loadingImage = $('#loadingScreen img');
		
		/* Center image in window */
		centerInWindow($loadingImage);

		/* Center image on window resize */
		$window.resize(function(){
			centerInWindow($loadingImage);
		});

		/* Rotate image in view */
		setInterval(function(){
			$loadingImage.transition({rotate : '30deg', duration: 700});
			$loadingImage.transition({rotate : '-30deg', duration: 700});
		}, 1);	

		/* Fade loading screen out after 1.2 seconds */
		setTimeout(function(){
			$loadingScreen.fadeOut(800);
		}, 1200);

		/** 
		 * Splash screen
		 */

		var $videoBg = $('#videoContainer video');
		var $logoImage = $('#logoContainer img');

		/* Shim for loop video attribute. This gets around a Chrome autoloop
		   bug */
		$videoBg.bind('ended', function loopVideo () {
			this.load();
			this.play();
		});

		/* Cool animation for clicking on the logo */
		var toggle = 0;
		$logoImage.click(function(){
			if(toggle == 0) {
				$(this).transition({rotateY: '360deg', duration: 1000});
				toggle = 1;
			} else {
				$(this).transition({rotateY: '-360deg', duration: 1000});
				toggle = 0;
			}
		});
	}

	/* Register main on document load */
	$document.ready(main);
})();