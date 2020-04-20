export default function Circle(ctx, x = 50, y = 50, dx = 1, dy = 1, r = 30, color = '#000') {
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