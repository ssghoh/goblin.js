/**
 * StateLoad.js
 * Date 2013. 06. 10
 * Description - Implement Game Load
 * @author Hyunseok Oh
 * Copyright (c) SpringStream Game Lab., Inc. All Rights Reserved.
 */

function StateLoad(sceneType)
{
	_state = this;
	this.scene = Goblin.scene.createScene(sceneType);
	this.ctx = Goblin.gc;
	this.stm = StateManager;
	this.initialize();
	this.run();
};

StateLoad.prototype.run = Goblin.core.run;
StateLoad.prototype.pause = Goblin.core.pause;

StateLoad.prototype.initialize = function()
{
	console.log(">> initialize Load");
};

StateLoad.prototype.update = function()
{
	this.stm.transition(STATE.LOGIN);
};

StateLoad.prototype.render = function()
{

};