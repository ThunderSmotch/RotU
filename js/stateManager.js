export var StateManager = {
    updateResource: (key, qty) => updateResource(key, qty),
    getState: () => {return gameState;},
    saveState: () => saveState(),
    loadState: (state) => loadState(state),
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
    const state = JSON.stringify(gameState);
    localStorage.setItem('save', btoa(state));
}

function loadState(state = localStorage.getItem('save')){
    if(state != null)
        gameState = JSON.parse(atob(state));
}