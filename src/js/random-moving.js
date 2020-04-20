import FilledCircle from './FilledCircle';
import { randomIntFromRange, randomFromRange } from './utility-functions';

var canvas = document.getElementById('random-moving');

if (typeof (canvas) != 'undefined' && canvas != null) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext('2d');

  var circles = [];

  function init() {
    var colors = [
      'rgba(255, 136, 119, 0.6)',
      'rgba(255, 221, 102, 0.6)', 
      'rgba(62, 227, 187, 0.6)', 
      'rgba(62, 204, 221, 0.6)', 
      'rgba(0, 145, 201, 0.6)'
    ];

    for (let i = 0; i < 100; i++) {
      var x = randomFromRange(r, innerWidth - r);
      var y = randomFromRange(r, innerHeight - r);
      var dx = randomFromRange(-1, 1);
      var dy = randomFromRange(-1, 1);
      var r = randomFromRange(2, 30);
      var color = colors[randomIntFromRange(0, colors.length - 1)];

      var circle = new FilledCircle(ctx, x, y, dx, dy, r, color);
      circle.draw();

      circles.push(circle);
    }
  }

  init();

  function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    circles.forEach(circle => {
      circle.move();
    });
  }

  animate();

  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    animate();
  });
}