document.addEventListener('DOMContentLoaded', () => {
    //These three events are required for drag and drop to work.
    document.body.addEventListener('dragstart', handleDragStart);   //click, hold, & move dropitem
    document.body.addEventListener('drop', handleDrop);             //dropped into dropzone
    document.body.addEventListener('dragover', handleOver);         //dragged over dropzone

    //These are not, but improve the UX.
    document.body.addEventListener('dragenter', handleEnter);
    document.body.addEventListener('dragleave', handleLeave);
})

//triggered when draggable item is dragged
function handleDragStart(e) {
    let obj = e.target;
    e.dataTransfer.setData("text/plain", obj.id)
}

//triggered when dropzone has item dropped into it
function handleDrop(e) {
    let dropzone = e.target;

    //Addresses unwanted drag areas and default behavior of some drag items
    if(!dropzone.classList.contains('dropzone')) return;
    e.preventDefault(); 

    const droppedElementId = e.dataTransfer.getData("text/plain");
    const droppedElement = document.getElementById(droppedElementId);
    dropzone.appendChild(droppedElement);
    console.log("id: " + droppedElementId);

    dropzone.classList.remove('over');
}

//triggered continuously while holding a draggable
function handleOver(e) {
    e.preventDefault();
}

//triggered when dropzone has item dragged over it
function handleEnter(e) {
    let dropzone = e.target;
    if(!dropzone.classList.contains('dropzone')) return;
    e.preventDefault();

    dropzone.classList.add('over');
}

//triggered when dropzone has item dragged from over it to somewhere else
function handleLeave(e) {
    let dropzone = e.target;
    if(!dropzone.classList.contains('dropzone')){
        return;
    } 
    e.preventDefault();

    dropzone.classList.remove('over');
}