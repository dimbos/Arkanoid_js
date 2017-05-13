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
};