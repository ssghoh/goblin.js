/**
 * StateLogo.js
 * Implement Game Logo
 * @author Hyunseok Oh
 */
function StateLogo()
{
	_state = this;
		
	this.initialize();
	this.run();
};

StateLogo.prototype.run = Game.run;
StateLogo.prototype.pause = Game.pause;

StateLogo.prototype.initialize = function()
{
	console.log(">> initialize Logo");
	SceneManager.createScene(SCENE.IMG);
	this.bg = new Image();
	this.bg.src = './image/bg0.jpg';
	this.ctx = SceneManager.getContext(VIEW.BG);
};

StateLogo.prototype.update = function()
{
	// console.log(">> update Logo");
	// StateManager.runState(STATE.LOAD);
};

StateLogo.prototype.render = function()
{
	//console.log(">> render Logo");
	this.ctx.drawImage(this.bg,0,0);
};
