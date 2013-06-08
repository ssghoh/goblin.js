/**
 * GameUtil.js
 * Class Game Util function
 * @author Hyunseok Oh
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

var Game = {
	run: function()	{
		_state.requestLoop = window.requestAnimFrame(_state.run, document.getElementsByTagName('body'));
		
		_state.update();
		_state.render();	
	},
	pause: function() {
		window.cancelRequestAnimFrame(_state.requestLoop);
	} 
};