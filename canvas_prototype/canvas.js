
function draw() {
    const board = document.getElementById('board');

    if(board.getContext('2d')) {
        const ctx = board.getContext('2d');
        //drawing logic
        const canvas = document.getElementById('board');
        if (canvas.getContext) {
          const ctx = canvas.getContext('2d');
  
          ctx.fillStyle = 'rgb(200, 0, 0)';
          ctx.fillRect(10, 10, 50, 50);
  
          ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
          ctx.fillRect(30, 30, 50, 50);
        }
    } 
    else {
        console.log("Context not found")
    }
}