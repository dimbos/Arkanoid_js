var _renderer = (function(){
	return window.requestAnamationFrame 	||
	window.webkitRequestAnimationFrame    ||
	window.mozRequestAnimationFrame				||
	window.oRequestAnimationFrame 				||
	window.msRequestAnimationFrame     		||

	function (callback){
		setTimeout(callback, 1000/60);
	};
})();


var _engine = function(){
	console.log("Игровой цикл не инициализирован");
};

var startGame = function (game){
	if(typeof game  == "function"){
		_engine = game;
	}
	gameLoop();
};

var setGame = function(game){
		if(typeof game  == "function"){
		_engine = game;
	}
}

var gameLoop = function(){
	_engine();
	_renderer(gameLoop);
};