/**
 * StateLogo.js
 * Date 2013. 06. 10
 * Description - Implement Game Logo
 * @author Hyunseok Oh
 * Copyright (c) SpringStream Game Lab., Inc. All Rights Reserved.
 */

function StateLogo(sceneType)
{
	_state = this;
	this.scene = Goblin.scene.createScene(sceneType);
	this.ctx = Goblin.gc;
	this.stm = StateManager;
	
	this.initialize();
	this.run();
};

StateLogo.prototype.run = Goblin.core.run;
StateLogo.prototype.pause = Goblin.core.pause;

StateLogo.prototype.initialize = function()
{
	console.log(">> initialize Logo");
	this.bg = new Image();
	this.bg.src = './image/bg0.jpg';
};

StateLogo.prototype.update = function()
{
	// console.log(">> update Logo");
	// this.stm.transition(STATE.LOAD);
};

StateLogo.prototype.render = function()
{
	//console.log(">> render Logo");
	this.ctx.selectContext(VIEW.BG);
	this.ctx.drawImage(this.bg,0,0);
};