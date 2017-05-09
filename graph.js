var canvas, width, height, ctx; 

var init = function (){
	canvas = document.getElementById("canvas");
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext("2d");
}

var clearAll = function(){
	ctx.clearRect(0, 0, width, height);
}

var fillAll = function(color){
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, width, height);
}

var drawRect = function (x, y, w, h, color){
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}