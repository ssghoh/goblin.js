/**
 * systemInfo.js
 * check game running system
 * @author Hyunseok
 */
var systemInfo = {
	platform: null,	// web, mobile
	device: null,	// ipad, iphone, android, pc
	browser: null,	// chrome, ie, safari, firefox or opera
	screenWidth: null,
	screenHeight: null,
	resolution: null,
	orientation: null,
	checkDeviceScreen: function() {
		this.screenWidth = 0;
		this.screenHeight = 0;
		console.log(this.screenWidth +" X " + this.screenHeight);
	},
	checkResolution: function() {
		this.resolution = this.screenWidth/this.screenHeight;
		console.log(">> " + this.resolution); 
	},
	checkOrientation:function() {
		this.orientation = "portrait";
		console.log(">> " + this.orientation);
	},
	checkSystem: function() {
		console.log(navigator.appVersion);
		console.log(navigator.userAgent);
		this.platform = "";
		this.device = "";
		this.browser = "";
		console.log(">> " + this.platform);
		console.log(">> " + this.device);
		console.log(">> " + this.browser);
		this.checkDeviceScreen();
		this.checkResolution();
		this.checkOrientation();
	}
};