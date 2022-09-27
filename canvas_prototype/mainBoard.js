// TODO: replace classes with factory functions, composition
// TODO: replace global arr with 'cleaner' data access
// TODO: move object logic to its own file
// TODO: consider associating draw function with classes

import { Canvas } from "./canvas.js";
import { Rectangle } from "./shapes.js";

const mainBoard = new Canvas("main-board");

// event functions 
// On mouse down, determine if the mouse is inside a shape. 
function mouseDown(e) {
  e.preventDefault();
  const mouseX = e.clientX - mainBoard.dimensions.left;
  const mouseY = e.clientY - mainBoard.dimensions.top;

  mainBoard.shapes.forEach((shape) => {
    if(shape.isMouseColliding(mouseX, mouseY)) {
      mainBoard.selected.push(shape);
    }
  });
}

function mouseMove(e) {
  mainBoard.selected.forEach((shape) => {
    const x = parseInt(e.clientX - mainBoard.dimensions.left);
    const y = parseInt(e.clientY - mainBoard.dimensions.top);
    //console.log(x + "," + y)

    // TODO: For offset, need to store initial position onMouseDown, then subtract from x/y
    shape.x = x;
    shape.y = y;

    mainBoard.draw();
  }) 
}

// TODO: having more than one item be draggable at a time  
// is inefficient and has the issue of picking up multiple cards
function mouseUp(e) {
  mainBoard.selected = [];
}

// Canvas Setup for mainBoard
function setEventListeners() {
  mainBoard.element.addEventListener("mousedown", mouseDown);
  mainBoard.element.addEventListener("mousemove", mouseMove);
  mainBoard.element.addEventListener("mouseup", mouseUp);
}

function initializeCanvas() {
  mainBoard.addShape(new Rectangle(10, 10, 50, 70, "rgb(200,0,0)"));
  mainBoard.draw();
  setEventListeners();
}

initializeCanvas();