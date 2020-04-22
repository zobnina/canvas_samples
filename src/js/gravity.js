import FilledCircle from './FilledCircle';
import { randomIntFromRange, randomFromRange, mouse, colors } from './utility';

var canvas = document.getElementById('gravity');

if (typeof (canvas) != 'undefined' && canvas != null) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext('2d');

  var ball;

  var circles = [];

  function init() {

    for (let i = 0; i < 50; i++) {
      var r = randomFromRange(2, 40);
      var x = randomFromRange(r, innerWidth - r);
      var y = randomFromRange(r, innerHeight / 2);
      var dx = randomFromRange(-0.5, 0.5);
      var dy = randomFromRange(-0.5, 0.5);
      var color = colors[randomIntFromRange(0, colors.length - 1)];

      var circle = new FilledCircle(ctx, x, y, dx, dy, r, color);
      //console.log(circle);

      circles.push(circle);
    }
  }

  init();

  function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    circles.forEach(circle => {
      circle.fall();
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

  window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
}