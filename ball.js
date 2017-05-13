var ball = {
	speed: 1,
	dx: 1,
	dy: -1,
	color: "blue",
	x: 0,
	y: 0,
	radius: 5,

	draw: function(){
		drawCircle(this.x, this.y, this.radius, this.color);
	},

	init: function(x, y, radius, color){
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	},

	move: function(){
		this.x += this.speed * this.dx;
		this.y += this.speed * this.dy;
	},

	collision: function(){
		for(var i in grid.nodes){
			var enemy = grid.nodes[i];
			if(isCollision(this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2, enemy.x, enemy.y, enemy.width, enemy.height)){
				//столкновение
				this.dy *= -1;
				grid.destroy(i);
				this.speed += 0.1;
				player.speed += 0.1;
			}
		}

		if(isCollision(this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2, player.x, player.y, player.width, player.height)){
		//столкновение
		this.dy *= -1;
	}
		if(this.x + this.radius >= width ){
			this.dx =-1;
		}

		if(this.x - this.radius <= 0 ){
			this.dx = 1;
		}

		if(this.y - this.radius <= 0){
			this.dy = 1;
		}
	
},
};