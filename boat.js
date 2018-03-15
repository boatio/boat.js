
 //(function(window){window.mylib = mylib;})(window);
var mousex = 0;var mousey = 0;var logon = false;var frame=5;var on = false;
var xz,yz; xz = window.innerWidth - 30; xy = window.innerHeight - 30;  var ctx; var aa,bb;
var strokeon,fill=true;
//변수
function log(a) {this.a = a; if(a == 'on'){logon = true;console.log('log is on');}}
 document.addEventListener("mousemove", mousePositionCheck, false);
 function mousePositionCheck(e){mousex = e.clientX;mousey = e.clientY;}
 function draw(fr,drawing)
 {this.fr = fr; frame = fr;setInterval(drawing, frame);}
function canvas(b,g) {
              // Create a <li> node
	 
	 document.body.innerHTML = '<canvas id="canvas"><canvas>';
	 var canvas = document.querySelector('canvas');
     canvas.width = b;aa = b;
     canvas.height = g;bb = g;
     ctx = canvas.getContext('2d'); 
}
function square(x,y,b,g) {
	this.x = x;
	this.y=y;
	this.b=b;
	this.g=g;
	
		
		ctx.rect(x,y,b,g);
		if(strokeon){ctx.stroke();}
		if(fill){ctx.fill();}
	
}
function circle(x,y,b,angle) {
	this.x=x;this.y=y;this.b=b;
	ctx.beginPath();
	if(!angle)
	{ctx.arc(x,y,b,0,2*Math.PI);if(strokeon){ctx.stroke();}if(fill){ctx.fill();}}
	else{
		this.angle=angle
		ctx.arc(x,y,b,angle,2*Math.PI);
		if(strokeon){ctx.stroke();}
		if(fill){ctx.fill();}
		console.log('log');
	}
	ctx.closePath();
}
function backcolor(color) {
	this.color = color;
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.rect(0,0,aa,bb);
	ctx.fill();
	ctx.closePath();
}
function fillcolor(color) {
	this.color = color;
	ctx.fillStyle = color;
}
function strokecolor(color) {
	this.color = color; ctx.strokeStyle = color;
}
var use = {
	'strokeon':function(){strokeon = true;},
	'strokeoff':function() {strokeon = false;},
	'fillon':function() {fill=true;},
	'filloff':function() {fill=false;}
}
var rand = function (min, max) {
  var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
  return ranNum;
}