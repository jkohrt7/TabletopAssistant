export class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea() {
    return this.width * this.height;
  }

  isMouseColliding(mousePosX, mousePosY) {
    // console.log(this.x + ", " + this.y + ", " + mousePosX + ", " + mousePosY);
    return (
      mousePosX > this.x &&
      mousePosX < this.x + this.width &&
      mousePosY > this.y &&
      mousePosY < this.y + this.height
    );
  }
}