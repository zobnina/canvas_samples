var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

var circles = [];

var mouse = {
  x: undefined,
  y: undefined
}

function Circle(x = 50, y = 50, dx = 1, dy = 1, r = 30, color = '#000') {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.minRadius = 5;
  this.maxRadius = 30;
  this.r = r;
  this.color = color;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
  }

  this.update = () => {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) this.dx = -this.dx;
    if (this.y + this.r > innerHeight || this.y - this.r < 0) this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
      if (this.r < this.maxRadius) this.r++;
    } else if (this.r > this.minRadius) this.r--;
    if (this.r <= 0) this.r = this.minRadius;
  }
}

function init() {
  circles = [];
  var colors = ['#FF8877', '#FFDD66', '#3EE3BB', '#3ECCDD', '#0091C9'];

  for (let i = 0; i < 1000; i++) {
    var r = Math.random() * 10;
    var x = Math.random() * (innerWidth - r * 2) + r, y = Math.random() * (innerHeight - r * 2) + r;
    var dx = Math.random() - 0.5, dy = Math.random() - 0.5;
    var color = colors[Math.floor(Math.random() * colors.length)];
    var circle = new Circle(x, y, dx, dy, r, color);
    circle.draw();
    circles.push(circle);
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  circles.forEach(circle => {
    circle.draw();
    circle.update();
  });
}

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
  animate();
});

init();
animate();