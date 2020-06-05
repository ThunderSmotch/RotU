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
    rotu: true,
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

function importState(state){
    if(state != null){
        let importedState = JSON.parse(atob(state));
        console.log(importedState)
        if(importedState.hasOwnProperty('rotu')){
            gameState = importedState;
            saveState();
            location.reload();
        } else{
            alert(_('settings.Import.error'))
        }
        
    }
}

function wipeState(){
    localStorage.removeItem('save');
}