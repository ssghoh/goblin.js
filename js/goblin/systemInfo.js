/**
 * systemInfo.js
 * Check running system environment information
 * @author Hyunseok
 */
var systemInfo = {
	platform: null,		// service platform type
	browser: null,		// browser engine type
	screenWidth: null,
	screenHeight: null,
	resolution: null,
	orientation: null,
/**
 * Check screen size
 */
	checkDeviceScreen: function() {
		this.screenWidth = window.innerWidth;
		this.screenHeight = window.innerHeight;
	},
/**
 * Check screen resolution
 */
	checkResolution: function() {
		this.resolution = this.screenWidth/this.screenHeight; 
	},
/**
 * Check screen orientation
 */
	checkOrientation:function() {
		if(this.resolution < 1)
			this.orientation = 'portrait';
		else
			this.orientation = 'landscape';
	},
/**
 * Check System Information
 */
	checkSystem: function() {
		// check platform
		if(navigator.userAgent.match(/Android/i) != null) this.platform = 'android';
		else if(navigator.userAgent.match(/iphone/i) != null) this.platform = 'iphone';
		else if(navigator.userAgent.match(/ipod/i) != null) this.platform = 'ipod';
		else if(navigator.userAgent.match(/ipad/i) != null) this.platform = 'ipad';
		else this.platform = 'pc';
		
		// check browser
		if(navigator.userAgent.match(/trident/i) != null) this.browser = 'trident';
		else if(navigator.userAgent.match(/webkit/i) != null) this.browser = 'webkit';
		else if(navigator.userAgent.match(/gecko/i) != null) this.browser = 'gecko';
		else if(navigator.userAgent.match(/presto/i) != null) this.browser = 'presto';

		this.checkDeviceScreen();
		this.checkResolution();
		this.checkOrientation();
		
		// log
		console.log('********************************************');
		console.log('** System Information');
		console.log('********************************************');
		console.log('** Service platform : ' + this.platform);
		console.log('** Browser engine : ' + this.browser);
		console.log('** Screen size : (' + this.screenWidth + ', ' + this.screenHeight +')');
		console.log('** Screen resolution : ' + this.orientation);
		console.log('********************************************');
	}
};