/**
 * @author Hyunseok
 */

var DomUtil = {
	createDiv: function(id) {
		var div = document.createElement('div');
		div.id = id;
		return div;
	},
	createCanvas: function(id,width,height) {
		var canvas = document.createElement('canvas');
		canvas.id = id;
		canvas.width = width;
		canvas.height = height;
		return canvas;
	},
};