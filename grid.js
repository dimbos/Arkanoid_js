var grid = {
	nodes: [],
	
add: function(x, y, w, h, c){
	var tmp = new _Enemy(x, y, w, h, c);
	this.nodes.push(tmp);
},

generate: function(count, w, h, color){
	//count - количество строк сетки
	var dw = 5; //расстояние между прямоугольниками
	var dx = dw;
	var dy = dw;
	var dCountx = Math.ceil(width / (w + dw)) - 1;  //расчет кол-ва прямоугольников (сетка) по x  на игровом поле
	//var dCounty = Math.ceil(count / dCountx); // расчет объекто по оси y
	var dallw = Math.ceil((width - (w + dw) * dCountx) / 2); //расчет игрового поля, для центрирования сетки
	dy = dallw;
	for(var i = 0; i < count; i++){
		for(var j = 0; j < dCountx; j++)
		{
			if(j == 0){
				dx += Math.ceil((dallw - dw));
			}
			this.add(dx, dy, w, h, color);
			dx += w + dw; 
		}
		dy+=h + dw;
		dx = dw;

	}
},

draw: function(){
	for(en in this.nodes){
		this.nodes[en].draw();
	}
},

destroy: function(id){
	this.nodes.splice(id, 1);
},

create: function(map){
	var dOffsetx = (width - (map.tiles[0].length * (map.width + map.offset))) /2;
	for(var t1 in map.tiles){
		for(var t2 in map.tiles[t1]){
			var tile = map.tiles[t1][t2];
			var dx = dOffsetx + t2 * (map.width + map.offset);
			var dy = map.offset + t1 * (map.height + map.offset);
			if(tile == 1){
				this.add(dx, dy, map.width, map.height, map.color);
			}
		}
	}
},

};

var _Enemy = function(x, y, w, h, color){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.color = color;
};

_Enemy.prototype.draw = function(){
	drawRect(this.x, this.y, this.width, this.height, this.color);
};