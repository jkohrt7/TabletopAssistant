//creates x by x grid of droppables
document.addEventListener('DOMContentLoaded', () => {
    addSpaces();
})

function addSpaces() {
    const gameTable = document.querySelector('#game-table');
    console.log(gameTable)
    let childElement;

    for(i = 0; i < 24; i++) {
        childElement = document.createElement('div');
        childElement.setAttribute('class', 'table__drop dropzone')
        childElement.setAttribute('dropzone', 'true')
        appendChildElement = gameTable.appendChild(childElement);
    }
}

