/**
 * StateLogin.js
 * Implement Game Login
 * @author Hyunseok Oh
 */
function StateLogin(sceneType)
{
	_state = this;
	this.scene = Goblin.scene.createScene(sceneType);
	this.ctx = Goblin.gc;
	this.stm = StateManager;
	
	this.initialize();
	this.run();
};

StateLogin.prototype.run = Goblin.core.run;
StateLogin.prototype.pause = Goblin.core.pause;

StateLogin.prototype.initialize = function()
{
	console.log(">> initialize Login");
};

StateLogin.prototype.update = function()
{
	this.stm.transition(STATE.PLAY);
};

StateLogin.prototype.render = function()
{
	
};