var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');
/*
ctx.fillStyle = "#FF0000";
//x, y, width, height
ctx.fillRect(50, 50, 100, 100);

ctx.fillStyle = "#00FF00";
ctx.fillRect(150, 150, 100, 100);

ctx.fillStyle = "#0000FF";
ctx.fillRect(250, 250, 100, 100);

//Line
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = "#123456";
ctx.stroke();

//circle
ctx.beginPath();
//x,y,radius, startAngle, endAngle
ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
ctx.strokeStyle = "#765432";
ctx.stroke();

for (var i = 0; i < 100; i++) {
  ctx.beginPath();
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var r = Math.random() * 50;
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.strokeStyle = `#F6С6В9`;
  ctx.stroke();
}
*/
var x = 200, y = 200;
var dx = 5, dy = 5, r = 30;

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.strokeStyle = '#FF0000';
  ctx.stroke();
  if (x + r > innerWidth || x - r < 0) dx = -dx;
  if (y + r > innerHeight || y - r < 0) dy = -dy;
  x += dx;
  y += dy;
}

animate();