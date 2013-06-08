/**
 * StateLogo.js
 * Implement Game Logo
 * @author Hyunseok Oh
 */
function StateLogo()
{
	_state = this;
	this.scene = scene;
	
	this.init();
	this.run();
};

StateLogo.prototype.run = Game.run;
StateLogo.prototype.pause = Game.pause;

StateLogo.prototype.init = function()
{
	console.log(">> init Logo");
};

StateLogo.prototype.update = function()
{
	console.log(">> update Logo");
};

StateLogo.prototype.render = function()
{
	console.log(">> render Logo");
};
