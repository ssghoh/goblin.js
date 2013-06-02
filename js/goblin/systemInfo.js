/**
 * systemInfo.js
 * 게임 실행 환경을 검사 함
 * @author Hyunseok
 */
var systemInfo = {
	platform: null,		// web, mobile
	device: null,		// ipad, iphone, android, pc
	browser: null,		// chrome, ie, safari, firefox or opera
	screenWidth: null,
	screenHeight: null,
	resolution: null,
	orientation: null,
/**
 * 실행 기기의 화면 크기 정보 확인
 */
	checkDeviceScreen: function() {
		this.screenWidth = window.innerWidth;
		this.screenHeight = window.innerHeight;
		console.log(this.screenWidth +" X " + this.screenHeight);
	},
/**
 * 해상도 확인
 */
	checkResolution: function() {
		this.resolution = this.screenWidth/this.screenHeight;
		console.log(">> " + this.resolution); 
	},
/**
 * 오리엔테이션 확인
 */
	checkOrientation:function() {
		if(this.resolution < 1)
			this.orientation = "portrait";
		else
			this.orientation = "landscape";
		console.log(">> " + this.orientation);
	},

/**
 * 시스템 정보 확인
 */
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