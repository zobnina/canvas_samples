import Circle from "./Circle";

export default class FilledCircle extends Circle {
  constructor(ctx, x = 50, y = 50, dx = 1, dy = 1, r = 30, color = '#000') {
    super(ctx, x, y, dx, dy, r, color);
    this.gravity = 0.2;
    this.friction = 0.99;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  fall() {
    if (this.y + this.r + this.dy >= innerHeight || this.y - this.r <= 0) this.dy = -this.dy * this.friction;
    else this.dy += this.gravity;

    if (this.x + this.r + this.dx >= innerWidth || this.x - this.r <= 0) this.dx = -this.dx * this.friction;

    this.y += this.dy;
    this.x += this.dx;

    this.draw();
  }

  collide(c) {
    let x1 = this.x, x2 = c.x;
    let y1 = this.y, y2 = c.y;
    let r1 = this.r, r2 = c.r;
    let dist = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    if (dist <= r1 + r2) {
      return true;
    }
    return false;
  }

  changeDirection() {
    this.dx = -this.dx;
    this.dy = -this.dy;
  }
}