// TODO: replace classes with factory functions, composition.

import { Canvas } from "./canvas.js";
import { Rectangle } from "./shapes.js";

const mainBoard = new Canvas("main-board");

// Events for mainBoard canvas
// MouseDown: determine if a shape was selected.
function mouseDown(e) {
  e.preventDefault();
  const canvasPosX = parseInt(e.clientX - mainBoard.dimensions.left);
  const canvasPosY = parseInt(e.clientY - mainBoard.dimensions.top);
  const initialMousePos = {initialX: e.clientX, initialY: e.clientY};

  // Note all clicked elements
  const selectedArr = [];
  mainBoard.shapes.forEach((shape) => {
    if(shape.isMouseColliding(canvasPosX, canvasPosY)) {
      selectedArr.push(shape);
    }
  })
  if(selectedArr.length > 0) {
    const frontMostItem = selectedArr[selectedArr.length-1];
    //mainBoard.moveToFront(frontMostItem)                              // Make a design choice!
    mainBoard.selected.push({...initialMousePos, shape: frontMostItem});
    
  }
}

// MouseMove: update the position of any selected objects
function mouseMove(e) {
  mainBoard.selected.forEach((selection) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // TODO: For offset, need to store initial position onMouseDown, then subtract from x/y
    let dx = mouseX - selection.initialX;
    let dy = mouseY - selection.initialY;

    selection.shape.x += dx;
    selection.shape.y += dy;

    mainBoard.draw();

    selection.initialX = mouseX;
    selection.initialY = mouseY;
  }) 
}

// MouseUp: deselect all items
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
  mainBoard.addShape(new Rectangle(40, 40, 50, 70, "rgb(0,220,100)"));

  mainBoard.draw();
  setEventListeners();
}

initializeCanvas();