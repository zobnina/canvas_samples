var canvas = document.getElementById('random-moving');

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
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  this.move = () => {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) this.dx = -this.dx;
    if (this.y + this.r > innerHeight || this.y - this.r < 0) this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

var circles = [];
var colors = ['#FF8877', '#FFDD66', '#3EE3BB', '#3ECCDD', '#0091C9'];

for (let i = 0; i < 100; i++) {
  var x = Math.random() * (innerWidth - r * 2) + r, y = Math.random() * (innerHeight - r * 2) + r;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  var r = 30;
  var color = colors[Math.floor(Math.random() * colors.length)];
  var circle = new Circle(x, y, dx, dy, r, color);
  circle.draw();
  circles.push(circle);
}


function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  circles.forEach(circle => {
    circle.move();
  });
}

animate();