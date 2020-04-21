import FilledCircle from "./FilledCircle";

export default class InteractiveCircle extends FilledCircle {
  constructor(ctx, x = 50, y = 50, dx = 1, dy = 1, r = 30, color = '#000') {
    super(ctx, x, y, dx, dy, r, color);
    this.minRadius = 5;
    this.maxRadius = 30;
  }

  move(mouse) {
    super.move();
    
    //interactivity
    if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
      if (this.r < this.maxRadius) this.r++;
    } else if (this.r > this.minRadius) this.r--;
    if (this.r <= 0) this.r = randomFromRange(2, this.minRadius);;

    this.draw();
  }
}