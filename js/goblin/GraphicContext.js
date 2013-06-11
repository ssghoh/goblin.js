/**
 * GraphicContext.js
 * Date 2012. 12. 18
 * Description - Canvas Context Interface
 * Version 1.0
 * Copyright (c) SpringStream Game Lab., Inc. All Rights Reserved.
 */
var GraphicContext = {
	context: null,
	getContext: function(view) {
		var canvas = null;
		var ctx = null;
	
		switch(view) {
			case VIEW.BG: canvas = document.getElementById('background'); break;
			case VIEW.OBJ: canvas = document.getElementById('object'); break;
			case VIEW.UI: canvas = document.getElementById('ui'); break;
		};
		
		if(canvas != null)
			ctx = canvas.getContext('2d');
		return ctx;	
	},
	selectContext: function(view) {
		this.context = null;
		switch(view) {
			case VIEW.BG: this.context = this.getContext(view); break;
			case VIEW.OBJ: this.context = this.getContext(view); break;
			case VIEW.UI: this.context = this.getContext(view); break;
		};
		if(this.context == null)
			console.log('>> Error : Context do not exist on this scene.');
	},
	save: function()	{	this.context.save();	},	// 캔버스 스택에 저장
	restore: function()	{	this.context.restore();	},	// 캔버스 스택에 있는 내용을 회복
	translate: function(x, y)	{	this.context.translate(x, y);	},	// 객체 중심 위치 변환
	scale: function(x, y)	{	this.context.scale(x, y);	},	// 객체 크기 변환
	rotate: function(x, y)	{	this.context.rotate(x, y);	},	// 객체 회전 변환
	setTransform: function(m11, m12, m21, m22, dx, dy)	{	this.context.setTransform(m11, m12, m21, m22, dx, dy);	},	// 대상 객체 변환
	drawImageAsync: function(image, x, y, w, h, dx, dy, dw, dh)	{
		//이미지가 로딩이 안되었을 경우에는 바로 리턴하고 로딩이 완료되면 이미지를 출력
		if(image.width == 0) return;
	
		switch(arguments.length)
		{
		case 3://파라미터가 3개일 경우
			this.context.drawImage(image, x, y);
			break;
		case 5://파라미터가 5개일 경우
			this.context.drawImage(image, x, y, w, h);
			break;
		case 9://파라미터가 9개일 경우
			this.context.drawImage(image, x, y, w, h, dx, dy, dw, dh);
			break;
		default:
			throw 'Invalid Parameter!';
			break;
		}
	},
	drawCropImage: function(image, crop_x, crop_y, crop_width, crop_height, x, y, width, height)	{
		if(crop_width <= 0 || crop_height <= 0 || width <= 0 || height <= 0) return;
		this.context.drawImage(image, crop_x, crop_y, crop_width, crop_height, x, y, width, height);
	},
	rotateImage: function(image, x, y, r)	{
		this.context.save();
		this.context.translate(x + (image.width / 2), y + (image.height / 2));
		this.context.rotate(r);
		this.context.translate(-(x + (image.width / 2)), -(y + (image.height / 2)));
		this.context.drawImage(image, x, y);
		this.context.restore();
	},
	drawString: function(str, x, y, width, height)	{
		if(typeof width != 'undefined')
		{
			if(this.context.textAlign == 'center') x += width / 2;
			else if(this.context.textAlign == 'right') x += width;
		}
		if(typeof height != 'undefined')
		{
			if(this.context.textBaseline == 'middle') y += height / 2;
		}
		this.context.fillText(str, x, y);//속이 채워진 텍스트 출력
	},
	drawText: function(text, x, y, width, height)	{	this.drawString(text, x, y, width, height);	},
	drawStrokeText: function(text, x, y)	{	this.context.strokeText(text, x, y);	},
	drawShadowText: function(text, x, y)	{
		this.context.shadowColor = 'white';
		this.context.shadowOffsetX = 0;
		this.context.shadowOffsetY = 0;
		c.shadowBlur = 30;

		this.context.font = 'bold 80pt Arial';
		this.context.fillStyle = '#55cc55';
		this.context.fillText('ALIEN',30,200);
	},
	drawImage: function(image, x, y, w, h, dx, dy, dw, dh)	{
		switch(arguments.length)
		{
		case 3://파라미터가 3개일 경우
			this.context.drawImage(image, x, y);
			break;
		case 5://파라미터가 5개일 경우
			this.context.drawImage(image, x, y, w, h);
			break;
		case 9://파라미터가 9개일 경우
			this.context.drawImage(image, x, y, w, h, dx, dy, dw, dh);
			break;
		default:
			throw 'Invalid Parameter!';
			break;
		}
	},
	drawLine: function(sx,sy,ex,ey,width)	{
		this.context.lineWidth = width;
		this.context.beginPath();
		this.context.moveTo(sx,sy);
		this.context.lineTo(ex,ey);
		this.context.stroke();
	},
	drawCircle: function(cX,cY,radius,width)	{
		this.context.beginPath();
		this.context.arc(cX, cY, radius, 0, 2 * Math.PI, false);
		this.context.fillStyle = 'green';
		this.context.fill();
		this.context.lineWidth = width;
		this.context.stroke();
	},
	clearRect: function(x, y, width, height)	{	this.context.clearRect(x, y, width, height);	},	// 객체 크기 변환
	drawRect: function(x, y, width, height,alpha)	{
		this.context.fillStyle = 'rgba(0,0,0,' + alpha + ')';
		this.context.fillRect(x, y, width, height);
	},
	drawSprite: function(sprite,x,y){
		// Draw Frame
		// log(sprite.offsetX+ ' - ' + sprite.offsetY);
		// log('>> sprite.curFrame' + sprite.curFrame);
		var crop_x = (sprite.curFrame-1) * sprite.width;
		var crop_y = 0;
		var crop_width = sprite.width;
		var crop_height = sprite.height;
		this.context.drawImage(sprite.image, crop_x, crop_y, crop_width, crop_height, x + sprite.offsetX, y + sprite.offsetY, sprite.width, sprite.height);
		sprite.curTime = new Date().getTime();
		
		// log(sprite.curTime + ' - ' + sprite.elapseTime + ' = '  + sprite.playTime);
		// Update Frame
		if(sprite.curTime - sprite.elapseTime >= sprite.playTime[sprite.curFrame-1])	{
			if(!sprite.getReverse())	{
				if(sprite.curPlaying)	sprite.curFrame++;
				if(sprite.curFrame > sprite.maxFrames)	{
					if(sprite.replayOn)	sprite.curFrame = 1;
					else				{
						sprite.curFrame = sprite.maxFrames;
						sprite.curPlaying = false;
					}				
				}	
			}
			else	{
				if(!sprite.isReverse)	{
					if(sprite.curPlaying)	sprite.curFrame++;
					if(sprite.curFrame > sprite.maxFrames)	{
						sprite.isReverse = true;
						sprite.curFrame -= 2 ;
					}
				} else {
					if(sprite.curPlaying)	sprite.curFrame--;
					if(sprite.curFrame <= 1)	{
						sprite.curFrame = 1;
						sprite.isReverse = false;
						if(!sprite.replayOn)	sprite.curPlaying = false;
					}
				}
			}
			
			sprite.elapseTime = sprite.curTime;							// init Time; 
		}
	}
};