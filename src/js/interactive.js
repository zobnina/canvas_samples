import InteractiveCircle from './InteractiveCircle';
import { randomIntFromRange, randomFromRange } from './utility-functions';

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
    var colors = [
      'rgba(255, 136, 119, 0.6)',
      'rgba(255, 221, 102, 0.6)', 
      'rgba(62, 227, 187, 0.6)', 
      'rgba(62, 204, 221, 0.6)', 
      'rgba(0, 145, 201, 0.6)'
    ];

    for (let i = 0; i < 500; i++) {
      var x = randomFromRange(r, innerWidth - r);
      var y = randomFromRange(r, innerHeight - r);
      var dx = randomFromRange(-0.5, 0.5);
      var dy = randomFromRange(-0.5, 0.5);
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