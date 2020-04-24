import InteractiveCircle from './Circle/InteractiveCircle';
import { randomIntFromRange, randomFromRange, colors } from './utility';

var canvas = document.getElementById('interactive');

if (typeof (canvas) != 'undefined' && canvas != null) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext('2d');

  var mouse = {
    x: undefined,
    y: undefined
  }

  var circles = [];

  function init() {

    for (let i = 0; i < 500; i++) {
      var x = randomFromRange(r, innerWidth - r);
      var y = randomFromRange(r, innerHeight - r);
      var dx = randomFromRange(-0.7, 0.3);
      var dy = randomFromRange(-0.7, 0.3);
      var r = randomFromRange(2, 5);
      var color = colors[randomIntFromRange(0, colors.length - 1)];

      var circle = new InteractiveCircle(ctx, x, y, dx, dy, r, color);
      circle.draw();

      circles.push(circle);
    }
  }

  init();

  function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    circles.forEach(circle => {
      circle.move(mouse);
    });
  }

  animate();

  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    animate();
  });

  window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
}