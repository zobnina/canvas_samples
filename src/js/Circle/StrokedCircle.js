import Circle from "./Circle";

export default class StrokedCircle extends Circle {
  constructor(ctx, x = 50, y = 50, dx = 1, dy = 1, r = 30, color = '#000') {
    super(ctx, x, y, dx, dy, r, color);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
    this.ctx.closePath();
  }
}