import {Achievements} from './elements/achievements.js';



export var StateManager = {
    updateResource: (key, qty) => updateResource(key, qty),
    unlockAchievement: (id) => unlockAchievement(id),
    
    unlockStage: (i) => unlockStage(i),
    
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
    achievements:[],
    stage: 0,
};

function unlockStage(i){
    gameState.stage = i;
}

function unlockAchievement(id){
    if(gameState['achievements'].includes(id))
        return;

    Achievements.unlock(id);
    gameState['achievements'].push(id);
    //TODO Popup for new achievement gained
}

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
        $.extend(true, gameState, JSON.parse(atob(state)));
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