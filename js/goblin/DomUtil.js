/**
 * @author Hyunseok
 */

var DomUtil = {
	createDiv: function() {
		var div = document.createElement('div');
		return div;
	},
	createCanvas: function(width,height) {
		var canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		return canvas;
	},
};