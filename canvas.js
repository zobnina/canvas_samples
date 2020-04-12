var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

function Circle(x = 50, y = 50, dx = 1, dy = 1, r = 30, color = '#000') {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.color = color;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();
    if (x + r > innerWidth || x - r < 0) dx = -dx;
    if (y + r > innerHeight || y - r < 0) dy = -dy;
    x += dx;
    y += dy;
  }

  this.update = () => {
    if (x + r > innerWidth || x - r < 0) dx = -dx;
    if (y + r > innerHeight || y - r < 0) dy = -dy;
    x += dx;
    y += dy;
  }
}

var circles = [];
var colors = ['#FF8877', '#FFDD66', '#3EE3BB', '#3ECCDD', '#0091C9'];

for (let i = 0; i < 100; i++) {
  var r = 30;
  var x = Math.random() * (innerWidth - r * 2) + r, y = Math.random() * (innerHeight - r * 2) + r;
  var dx = Math.random() - 0.5, dy = Math.random() - 0.5, r = 30;
  var color = colors[Math.floor(Math.random() * colors.length)];
  var circle = new Circle(x, y, dx, dy, r, color);
  circle.draw();
  circles.push(circle);
}


function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  circles.forEach(circle => {
    circle.draw();
    circle.update();
  });
}

animate();