/**
 * StatePlay.js
 * Implement Game Play
 * @author Hyunseok Oh
 */
function StatePlay(sceneType)
{
	_state = this;
	this.scene = Goblin.scene.createScene(sceneType);
	this.ctx = Goblin.gc;
	this.stm = StateManager;
	
	this.initialize();
	this.run();
};

StatePlay.prototype.run = Goblin.core.run;
StatePlay.prototype.pause = Goblin.core.pause;

StatePlay.prototype.initialize = function()
{
	console.log(">> initialize Play");
};

StatePlay.prototype.update = function()
{
	console.log(">> update Play");
};

StatePlay.prototype.render = function()
{
	console.log(">> render Play");
};