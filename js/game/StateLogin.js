/**
 * StateLogin.js
 * Implement Game Login
 * @author Hyunseok Oh
 */
function StateLogin()
{
	_state = this;
	
	this.initialize();
	this.run();
};

StateLogin.prototype.run = Game.run;
StateLogin.prototype.pause = Game.pause;

StateLogin.prototype.initialize = function()
{
	console.log(">> initialize Login");
};

StateLogin.prototype.update = function()
{
	StateManager.runState(STATE.PLAY);
};

StateLogin.prototype.render = function()
{
	
};