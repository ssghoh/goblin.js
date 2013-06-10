/**
 * StateLoad.js
 * Implement Game Load
 * @author Hyunseok Oh
 */
function StateLoad()
{
	_state = this;
	
	this.initialize();
	this.run();
};

StateLoad.prototype.run = Game.run;
StateLoad.prototype.pause = Game.pause;

StateLoad.prototype.initialize = function()
{
	console.log(">> initialize Load");
};

StateLoad.prototype.update = function()
{
	
};

StateLoad.prototype.render = function()
{

};