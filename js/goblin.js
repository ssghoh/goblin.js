/**
 * Goblin.js - A shrewd HTML5 framework for game development
 * @author Hyunseok Oh
 */
var Goblin = {
	game: null,
	systemInfo: null,
	assetManager: null,
	sceneManager: null,
	stateManager: null,
	netManager: null,
	sceneWidth: 0,
	sceneHeight: 0,
/**
 * Goblin.js Game Entry Point
 */
	createGame: function() {
		
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
		this.stateManager = StateManager;
		
		// Initialize Manager
		this.sceneManager.initialize();
		this.assetManager.initialize();
		this.netManater.initialize();
		this.stateManager.initialize();
	}
};