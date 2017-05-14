var ball = {
	speedx: 1,
	speedy: 1,
	dx: 1,
	dy: -1,
	color: "blue",
	x: 0,
	y: 0,
	radius: 5,

	clear: function(){
		this.speedx = 1;
		this.speedy = 1;
		this.dx = 1;
		this.dy = -1;
	},

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
		this.x += this.speedx * this.dx;
		this.y += this.speedy * this.dy;
	},

	collision: function(){
		for(var i in grid.nodes){
			var enemy = grid.nodes[i];
			if(isCollision(this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2, enemy.x, enemy.y, enemy.width, enemy.height)){
				//столкновение
				this.dy *= -1;
				grid.destroy(i);
				this.speedy += 0.1;
				player.speed += 0.1;
				player.updScore(1);
			}
		}

		if(isCollision(this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2, player.x, player.y, player.width, player.height)){
		//столкновение с платформой
		this.dy *= -1;
		if(this.dx == player.dx){
				this.speedx *= 1.2;
		} else{
			this.speedx /= player.dx !=0 ? 1.2 : 1;
		}
		this.dx = player.dx || this.dx;
	}
		if(this.x + this.radius >= width ){
			this.dx =- 1;
		}

		if(this.x - this.radius <= 0 ){
			this.dx = 1;
		}

		if(this.y - this.radius <= 0){
			this.dy = 1;
		}

		//проверка на улет вниз шара
		if(this.y >= height){
			player.updHp(1);
			ball.init(player.x + Math.ceil(player.width / 2), player.y - 5, 5, "green");

			if(player.hp < 1){
				alert("Вы проиграли. Вы набрали: " + player.score + "очков");
				player.hp = 3;
				grid.clear();
				ball.clear();
				document.getElementById("score").innerHTML = 0;
				document.getElementById("hp").innerHTML = 3;
				player.score = 0;
				grid.create(map);

			}
		}
	
},
};