var element = document.getElementById("cnvs");
var context = element.getContext('2d');
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ;
element.width=500;
element.height=500;

var array = [];
var color = [];

for (var a =0; a< 10;a++){
	color.push("rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
}

function block(x,y,cl){
	this.x = x;
	this.y = y;
	this.cl = cl;
}


for(var i = 0, length1 = 50*50; i < length1; i++){
	array.push({x:i%50,y:Math.floor(i/50),color:color[Math.floor(Math.random()*color.length)]});
}


function draw(){
	for (var a =0; a< 50*50;a++){
		context.fillStyle = array[a].color;
		context.fillRect(array[a].x*10,array[a].y*10,10,10);
	}
	requestAnimationFrame(draw);
}
draw();
