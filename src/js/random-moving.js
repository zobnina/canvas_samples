import Circle from './Circle';
import { randomIntFromRange } from './utility-functions';

var canvas = document.getElementById('random-moving');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

var circles = [];
var colors = ['#FF8877', '#FFDD66', '#3EE3BB', '#3ECCDD', '#0091C9'];

for (let i = 0; i < 100; i++) {
  var x = randomIntFromRange(r, innerWidth - r);
  var y = randomIntFromRange(r, innerHeight - r);
  var dx = randomIntFromRange(-2, 2);
  var dy = randomIntFromRange(-2, 2);
  var r = randomIntFromRange(2, 30);
  var color = colors[randomIntFromRange(0, colors.length-1)];

  var circle = new Circle(ctx, x, y, dx, dy, r, color);
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