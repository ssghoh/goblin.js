/**
 * StatePlay.js
 * Implement Game Play
 * @author Hyunseok Oh
 */
function StatePlay()
{
	_state = this;
	
	this.initialize();
	this.run();
};

StatePlay.prototype.run = Game.run;
StatePlay.prototype.pause = Game.pause;

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