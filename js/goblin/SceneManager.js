/**
 * SceneManager.js
 * Manage Game Scenes
 * @author Hyunseok Oh
 */
var SceneManager = {
	scenes: [],
	initialize: function()	{
		this.scenes = [];
		console.log('** Initialize Goblin.SceneManager');
	},
	createScene: function(id,type) {
		var scene = new Scene(id,type);
		this.scenes.push(scene);
	},
	removeScene: function(id) {
		
	}
};