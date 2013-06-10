/**
 * Goblin.js
 * Date 2013. 06. 10
 * Description - A shrewd HTML5 framework for game development
 * @author Hyunseok Oh
 * Copyright (c) SpringStream Game Lab., Inc. All Rights Reserved.
 */

var Goblin = {
	core: Core,
	system: SystemInfo,
	asset: AssetManager,
	scene: SceneManager,
	net: NetManager,
	gc: GraphicContext,
	/**
	 * Goblin.js Game Entry Point
	 */
	initialize: function()	{	
		this.system.checkSystem();
		if(!this.system.canvas)	{
			alert('Please install a new web browser.');
			return;
		}
		
		// log
		console.log('** Start Goblin.js v0.1.0');
		
		// Initialize Manager
		this.scene.initialize();
		this.asset.initialize();
		this.net.initialize();
	},
};

/**
 * Goblin.js Engine Start
 */
function GoblinStart()
{
	Goblin.initialize();				// Engine initialize
	StateManager.initialize();			// StateManager initialize
};