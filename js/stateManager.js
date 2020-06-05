export var StateManager = {
    updateResource: (key, qty) => updateResource(key, qty),
    getState: () => {return gameState;},
    saveState: () => saveState(),
    loadState: () => loadState(),
    wipeState: () => wipeState(),
    importState: (state) => importState(state),
}

//Default game state
var gameState = {
    storage: {
        herb: 0
    },
};

function updateResource(key, qty){
    if(gameState['storage'].hasOwnProperty(key))
        gameState['storage'][key] += qty;
}

function saveState(){
    let state = JSON.stringify(gameState);
    localStorage.setItem('save', btoa(state));
}

function loadState(){
    let state = localStorage.getItem('save');
    if(state != null){
        gameState = JSON.parse(atob(state));
    }
}

function importState(state = localStorage.getItem('save')){
    //TODO: Check if save is safe    
    if(state != null){
        gameState = JSON.parse(atob(state));
        saveState();
        location.reload();
    }
}

function wipeState(){
    localStorage.removeItem('save');
}