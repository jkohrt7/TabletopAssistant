// Canvas class
export class Canvas {
  constructor(id) {
    // this.dimensions = document.getElementById(id).getBoundingClientRect();
    this.element = document.getElementById(id);
    this.context = document.getElementById(id).getContext("2d");
    this.shapes = [];
    this.selected = [];
  }

  // Methods
  getCanvasBounds() {
    return this.element.getBoundingClientRect();
  }

  addShape(shape) {
    this.shapes.push(shape);
  }

  moveToFront(shape) {
    const shapeIndex = this.shapes.indexOf(shape);
    if(shapeIndex > -1) {
      const removedShape = this.shapes.splice(shapeIndex, 1)[0];
      this.shapes.push(removedShape);
    }
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.element.width, this.element.height)
  }

  draw() {
    this.clearCanvas();
    this.shapes.forEach((shape) => {
      this.context.fillStyle = shape.color;
      this.context.fillRect(shape.x, shape.y, shape.width, shape.height);
    }, this);
  }
}