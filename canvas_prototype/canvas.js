// TODO: replace classes with factory functions, composition
// TODO: replace global arr with 'cleaner' data access
// TODO: move object logic to its own file
// TODO: associate draw function with Shapes somehow
const shapes = [];
const canvas = document.querySelector("#canvas");

// Classes
class Shape {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
}

class Rectangle extends Shape {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.dragging = false;
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

  setDragging(isMouseDown) {
    this.dragging = isMouseDown;
  }
}

//event functions 
function mouseDown(e) {
  e.preventDefault();
  const canvasDimensions = canvas.getBoundingClientRect();
  const x = e.clientX - canvasDimensions.left;
  const y = e.clientY - canvasDimensions.top;

  shapes.forEach((shape) => {
    console.log(shape.isMouseColliding(x, y))
    shape.setDragging(shape.isMouseColliding(x, y))
  });
}

function mouseMove(e) {
  shapes.forEach((shape) => {
    if(shape.dragging) {
      // TODO: canvas class (?) to avoid repetitive code
      // TODO: move the element...
      const canvasDimensions = canvas.getBoundingClientRect();
      const x = parseInt(e.clientX - canvasDimensions.left);
      const y = parseInt(e.clientY - canvasDimensions.top);
      console.log(x + "," + y)

      canvas
    }
  }) 
}

// TODO: this seems very inefficient..
function mouseUp(e) {
  shapes.forEach((shape) => shape.setDragging(false));
}

// Drawing functions (temp/testing)
function makeShapes() {
  shapes.push(new Rectangle(10, 10, 50, 70, "rgb(200,0,0)"));
  shapes.push(new Rectangle(30, 30, 50, 70, "rgb(0,0,200)"));
  return shapes;
}

function draw(shapes) {
  const canvas = document.querySelector("#canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    shapes.forEach((shape) => {
      ctx.fillStyle = shape.color;
      ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
    });
  }
}

// Canvas Setup
function setEventListeners() {
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", mouseUp);
}

function initializeCanvas() {
  draw(makeShapes());
  setEventListeners();
}

initializeCanvas();