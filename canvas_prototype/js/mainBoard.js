// TODO: replace classes with factory functions, composition.

import { Canvas } from "./canvas.js";
import { Rectangle } from "./shapes.js";
import { roundToMultipleOf } from "./utils/mathHelpers.js";

const mainBoard = new Canvas("main-board");

// Events for mainBoard canvas
// MouseDown: determine if a shape was selected.
function mouseDown(e) {
  e.preventDefault();
  const canvasPosX = parseInt(e.clientX - mainBoard.getCanvasBounds().left);
  const canvasPosY = parseInt(e.clientY - mainBoard.getCanvasBounds().top);
  const initialMousePos = {initialX: canvasPosX, initialY: canvasPosY};

  // Note all clicked elements
  const selectedArr = [];
  mainBoard.shapes.forEach((shape) => {
    if(shape.isMouseColliding(canvasPosX, canvasPosY)) {
      console.log("hit");
      selectedArr.push(shape);
    }
  })

  if(selectedArr.length > 0) {
    const frontMostItem = selectedArr[selectedArr.length-1];
    //mainBoard.moveToFront(frontMostItem)                              // should probably not do this by default
    mainBoard.selected.push({...initialMousePos, shape: frontMostItem});
  }
}

// MouseMove: update the position of any selected objects
function mouseMove(e) {
  mainBoard.selected.forEach((selection) => {
    const mouseX = e.clientX - mainBoard.getCanvasBounds().left;
    const mouseY = e.clientY - mainBoard.getCanvasBounds().top;

    // Add mouse offset when dragging
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
  mainBoard.selected.forEach((selection) => {
      selection.shape.x = roundToMultipleOf(selection.shape.x, 10);
      selection.shape.y = roundToMultipleOf(selection.shape.y, 10);
    }
  )

  mainBoard.draw();

  mainBoard.selected = [];
}

// handle screen resize
function handleScreenResize() {
  
} 

// Canvas Setup for mainBoard
function setEventListeners() {
  mainBoard.element.addEventListener("mousedown", mouseDown);
  mainBoard.element.addEventListener("mousemove", mouseMove);
  mainBoard.element.addEventListener("mouseup", mouseUp);
  mainBoard.element.addEventListener("resize", handleScreenResize);
}

function initializeCanvas() {
  mainBoard.addShape(new Rectangle(10, 10, 50, 70, "rgb(200,0,0)")); // x, y, width, height, color
  mainBoard.addShape(new Rectangle(40, 40, 50, 70, "rgb(0,220,100)"));

  mainBoard.draw();
  setEventListeners();
}

initializeCanvas();