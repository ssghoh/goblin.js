/**
 * Goblin.js - A shrewd HTML5 framework for game development
 * @author Hyunseok Oh
 */
var Goblin = {
	game: null,
	systemInfo: null,
	assetManager: null,
	sceneManager: null,
	netManager: null,
	sceneWidth: 0,
	sceneHeight: 0,
/**
 * Goblin.js Game Entry Point
 */
	createGame: function() {
		var gameView = DomUtil.createDiv();
		gameView.id = 'game';
		//gameView.style.border = '1px solid black';
		gameView.style.margin = '0px';
		gameView.style.padding = '0px';
		gameView.style.backgroundColor ='gray';
		
		switch(this.systemInfo.platform) {
			case 'pc':
			case 'ipad':
				if(this.systemInfo.orientation == 'landscape') {
					gameView.style.width = 1024+'px';
					gameView.style.height = 768+'px';
				} else {
					gameView.style.width = 768+'px';
					gameView.style.height = 1024+'px';
				} 
				break;
			case 'iphone': 
			case 'ipod':
				if(this.systemInfo.orientation=='landscape') {
					if(this.systemInfo.resolution > 1.7) { // 1136x640
						gameView.style.width = 1136+'px';
						gameView.style.height = 640+'px'; 
					} else { // 960x640 or 480x320
						gameView.style.width = 960+'px';
						gameView.style.height = 640+'px';
					}
				} else { // 'portrait'
					if(this.systemInfo.resolution < 0.6) {	// 640x1136
						gameView.style.width = 640+'px';
						gameView.style.height = 1136+'px';
					} else { // 640x960 or 320x480
						gameView.style.width = 640+'px';
						gameView.style.height = 960+'px';
					}
				}
				break;
			case 'android': 
				
				break;
			
		}
		
		$('body').append(gameView);
	},
	start: function()	{
		this.systemInfo = SystemInfo; 		
		this.systemInfo.checkSystem();
		if(!this.systemInfo.canvas)	{
			alert('Please install a new web browser.');
			return;
		}
		
		// log
		console.log('** Start Goblin.js v0.1.0');
		
		// Assign Manager
		this.assetManager = AssetManager;
		this.netManater = NetManager;
		this.sceneManager = SceneManager;
		
		// Initialize Manager
		this.sceneManager.initialize();
		this.assetManager.initialize();
		this.netManater.initialize();
		
		// Generate Game
		this.createGame();
	}
};