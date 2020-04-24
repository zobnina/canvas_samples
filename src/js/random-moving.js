import StrokedCircle from './Circle/StrokedCircle';
import { randomIntFromRange, randomFromRange, colors } from './utility';

var canvas = document.getElementById('random-moving');

if (typeof (canvas) != 'undefined' && canvas != null) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext('2d');

  var circles = [];

  function init() {

    for (let i = 0; i < 100; i++) {
      var x = randomFromRange(r, innerWidth - r);
      var y = randomFromRange(r, innerHeight - r);
      var dx = randomFromRange(-0.5, 0.5);
      var dy = randomFromRange(-0.5, 0.5);
      var r = randomFromRange(2, 30);
      var color = colors[randomIntFromRange(0, colors.length - 1)];

      var circle = new StrokedCircle(ctx, x, y, dx, dy, r, color);
      circle.draw();

      circles.push(circle);
    }
  }

  init();

  function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    circles.forEach(c1 => {
      c1.move();
    });
  }

  animate();

  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circles = [];
    init();
    animate();
  });
}