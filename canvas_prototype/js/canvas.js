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
  getGreatestZ() {
    if(this.shapes.length > 0) {
      return this.shapes[this.shapes.length - 1].z;
    }
    return 0;
  }

  addShape(shape) {
    if(this.shapes.length > 0) {
      shape.z = this.getGreatestZ() + 1;
    }

    this.shapes.push(shape);
  }

  moveToFront(shape) {
    shape.z = this.getGreatestZ() + 1;
    this.shapes = this.shapes.sort((shapeA,shapeB) => shapeA.z - shapeB.z)
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