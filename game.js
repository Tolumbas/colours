var element = document.getElementById("cnvs");
var context = element.getContext('2d');
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ;
element.width=500;
element.height=500;

function draw(){
	context.fillStyle = "red";
	context.fillRect(10,10,10,10);
	requestAnimationFrame(draw);
}
draw();
