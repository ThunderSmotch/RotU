import { StateManager } from "../stateManager.js";

export var Header = {
    init,
    changeTitle, 
    setName,
}

//Initalize this singleton
function init(){
    $("#header").append(getHeaderHTML());
    setName(StateManager.getState().name);
}

//Change the header's title
function changeTitle(title){
    $('#headerTitle').text(title);
}

function setName(name){
    $('#headerName').text(name);
}

//Header HTML
function getHeaderHTML(){
    return `
    <div id='headerName'></div> - <div id='headerTitle'></div>
    `;
}