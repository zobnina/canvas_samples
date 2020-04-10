var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');
ctx.fillStyle = "#FF0000";
//x, y, width, height
ctx.fillRect(50, 50, 100, 100);

ctx.fillStyle = "#00FF00";
ctx.fillRect(150, 150, 100, 100);

ctx.fillStyle = "#0000FF";
ctx.fillRect(250, 250, 100, 100);

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = "#123456";
ctx.stroke();