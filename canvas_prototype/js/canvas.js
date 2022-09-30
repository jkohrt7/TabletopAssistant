// Canvas class
export class Canvas {
  constructor(id) {
    this.width = document.getElementById(id).width;
    this.height = document.getElementById(id).height;
    this.element = document.getElementById(id);
    this.context = document.getElementById(id).getContext("2d");
    this.dimensions = document.getElementById(id).getBoundingClientRect();
    this.shapes = [];
    this.selected = [];
  }

  // Methods
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
    this.context.clearRect(0, 0, this.width, this.height)
  }

  draw() {
    this.clearCanvas();
    this.shapes.forEach((shape) => {
      this.context.fillStyle = shape.color;
      this.context.fillRect(shape.x, shape.y, shape.width, shape.height);
    }, this);
  }
}