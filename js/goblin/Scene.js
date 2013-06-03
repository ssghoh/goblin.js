/**
 * Scene.js
 * Class Game Scene
 * @author Hyunseok Oh
 */
var SceneType = {
	IMAGE: 0,
	ANIMATION: 1,
	APP: 2,
	GAME: 3
};

/**
 * Some class, initialized with a value.
 * @param {Object} value Some value.
 * @constructor
 */
function Scene(id,type) {
	this.id = id;
	this.uiView = null;
	this.bgView = null;
	this.objView = null; 
			
	switch(type) {
		case SceneType.IMAGE:
			this.bgView = null;
			break;
		case SceneType.ANIMATION: 
			this.bgView = null;
			this.objView = null; 
			break;
		case SceneType.APP: 
			this.bgView = null;
			this.uiView = null;
			break;
		case SceneType.GAME: 
			this.uiView = null;
			this.bgView = null;
			this.objView = null; 
			break;
	};
};
