/**
 * SceneManager.js
 * Manage Game Scenes
 * @author Hyunseok Oh
 */

var SCENE = {IMG: 0, ANI: 1,APP: 2,	GAME: 3};	// Assign SCENE Constant Assign
var VIEW = {BG: 0, OBJ: 1, UI: 2}; // Assign VIEW Constant Assign

var SceneManager = {
	width: 0,
	height: 0,
	/**
 	 * Initialize SceneManager
 	 */	
	initialize: function(width,height)	{
		console.log('** Initialize Goblin.SceneManager');
		// Create Scene
		var scene = DomUtil.createDiv('game');
		scene.style.overflow = 'hidden';
		
		// Set Screen Size
		if(arguments.length == 2)	{
			this.width = width;
			this.height = height;	
		} else {
			this.width = SystemInfo.screenWidth;
			this.height = SystemInfo.screenHeight;
		}
		
		$('#game').css({'width':this.width+'px', 'height':this.height+'px', 'background-color':'black'});		
		$('body').append(scene);
		
		// Set FPS View
		this.setFPSView(true);
	},
	/**
 	 * Create Game Scene from SCENE type
 	 * @param {SCENE.Type} Type : (IMG or 0 - Image Viewer, ANI or 1 - Animation, APP or 2 - Application, GAME or 2 - Game)
 	 * @return {Object} This return is Canvas Context Interface
 	 */	
	createScene: function(sceneType) {
		// Initialize Scene
		$('#background').remove();
		$('#object').remove();
		$('#ui').remove();
		var bgView = null;
		var objView = null;
		var uiView = null;
		
		// Create canvas
		var canvasSize = this.calcCanvasSize();
		var canvasWidth = canvasSize[0];
		var canvasHeight = canvasSize[1];
		switch(sceneType) {
			case SCENE.IMG:
				bgView = DomUtil.createCanvas('background',canvasWidth,canvasHeight);
				$('#game').append(bgView);
				break;
			case SCENE.ANI:
				bgView = DomUtil.createCanvas('background',canvasWidth,canvasHeight);
				objView = DomUtil.createCanvas('object',canvasWidth,canvasHeight);
				$('#game').append(bgView);
				$('#game').append(objView);
				break;
			case SCENE.APP:
				bgView = DomUtil.createCanvas('background',canvasWidth,canvasHeight);
				uiView = DomUtil.createCanvas('ui',canvasWidth,canvasHeight);
				$('#game').append(bgView);
				$('#game').append(uiView);
				break;
			case SCENE.GAME:
				bgView = DomUtil.createCanvas('background',canvasWidth,canvasHeight);
				objView = DomUtil.createCanvas('object',canvasWidth,canvasHeight);
				uiView = DomUtil.createCanvas('ui',canvasWidth,canvasHeight);
				$('#game').append(bgView);
				$('#game').append(objView);
				$('#game').append(uiView);
				break;
		};
		
		// Resize canvas screen size
		$('#background').css({'width':this.width+'px','height':this.height+'px'});
		$('#object').css({'width':this.width+'px','height':this.height+'px'});
		$('#ui').css({'width':this.width+'px','height':this.height+'px'});
	},
	/**
 	 * Calculate Canvas Size from System Information
 	 * @return {Array} This return is canvas size.
 	 */
	calcCanvasSize: function() {
		var canvasSize = [];
		
		if(SystemInfo.orientation == 'landscape')	{
			if(SystemInfo.resolution >= 1.75)		canvasSize = [1024,576]; // 16:9
			else if(SystemInfo.resolution >= 1.5)	canvasSize = [1024,682]; // 3:2
			else 									canvasSize = [1024,768]; // 4:3
		} else { // 'portrait'
			if(SystemInfo.resolution <= 0.57)		canvasSize = [576,1024]; // 9:16
			else if(SystemInfo.resolution <= 0.67)	canvasSize = [682,1024]; // 2:3
			else 									canvasSize = [768,1024]; // 3:4			
		}
		
		return canvasSize;
	},
	/**
 	 * Attach Frame Rate View
 	 * @param {boolean} true - on fps View, false - off fpas View
 	 */
	stats: null,
	setFPSView: function(tf) {
		$('#stats').remove();
		if(tf == true)	{
			this.stats = new Stats();
			this.stats.setMode(0);
			this.stats.domElement.style.position = 'absolute';
			this.stats.domElement.style.left = (window.innerWidth-80)+'px';
			this.stats.domElement.style.top = '0px';
			this.stats.domElement.style.zIndex = '10000';
			this.stats.domElement.style.display = 'block';
			$('body').append(this.stats.domElement);
		} else {
			this.stats = null;
		}
	}
};