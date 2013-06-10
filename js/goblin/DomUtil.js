/**
 * DomUtil.js
 * Date 2013. 06. 10
 * Description - Class DOM Control Utility
 * @author Hyunseok Oh
 * Copyright (c) SpringStream Game Lab., Inc. All Rights Reserved.
 */

var DomUtil = {
	/**
	 * create Div element
	 */
	createDiv: function(id) {
		var div = document.createElement('div');
		div.id = id;
		return div;
	},
	/**
	 * create Canvas element
	 */
	
	createCanvas: function(id,width,height) {
		var canvas = document.createElement('canvas');
		canvas.id = id;
		canvas.width = width;
		canvas.height = height;
		return canvas;
	}
};