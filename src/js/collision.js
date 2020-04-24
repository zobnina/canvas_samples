import FilledCircle from './Circle/FilledCircle';
import { randomIntFromRange, randomFromRange, mouse, colors } from './utility';

let canvas = document.getElementById('collision');

if (typeof (canvas) != 'undefined' && canvas != null) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let ctx = canvas.getContext('2d');

  let circles = [];

  function init() {

    while (circles.length < 50) {
      var r = randomFromRange(10, 30);
      var x = randomFromRange(r, innerWidth - r);
      var y = randomFromRange(r, innerHeight - r);
      var dx = randomFromRange(-0.5, 0.5);
      var dy = randomFromRange(-0.5, 0.5);
      var color = colors[randomIntFromRange(0, colors.length - 1)];

      var circle = new FilledCircle(ctx, x, y, dx, dy, r, color);
      var f = true;

      circles.forEach(c => {
        if (c.collide(circle)) {
          f = false;
        }
      });

      if (f) circles.push(circle);

    }

  }

  init();

  function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    circles.forEach(c1 => {
      for (const c2 of circles.filter(c => c !== c1)) {
        if (c1.collide(c2)) {
          c1.changeDirection();
          break;
        }
      }
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