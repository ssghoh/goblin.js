/**
 * Core.js
 * Date 2013. 06. 10
 * Description - ame Core Generation - Generate Finate State Machine
 * @author Hyunseok Oh
 * Copyright (c) SpringStream Game Lab., Inc. All Rights Reserved.
 */

window.requestAnimFrame = (
	function()	{
    	return	window.requestAnimationFrame       || 
				window.webkitRequestAnimationFrame || 
				window.mozRequestAnimationFrame    || 
				window.oRequestAnimationFrame      || 
				window.msRequestAnimationFrame     || 
				function(/* function */ callback, /* DOMElement */ element){
					return window.setTimeout(callback, 1000 / 60);
				};
	}
)();

window.cancelRequestAnimFrame = (
	function()	{
	    return	window.cancelAnimationFrame          ||
   				window.webkitCancelRequestAnimationFrame    ||
				window.mozCancelRequestAnimationFrame       ||
				window.oCancelRequestAnimationFrame     ||
				window.msCancelRequestAnimationFrame        ||
				clearTimeout;
	}
)();

var Core = {
	/**
	 * Run State 
	 */
	run: function()	{
		_state.requestLoop = window.requestAnimFrame(_state.run, document.getElementsByTagName('body'));
		
		if(SceneManager.stats != null)	SceneManager.stats.begin();		
		
		_state.update();
		_state.render();
		
		if(SceneManager.stats != null)	SceneManager.stats.end();	
	},
	/**
	 * Pause State 
	 */
	pause: function() {
		window.cancelRequestAnimFrame(_state.requestLoop);
	} 
};