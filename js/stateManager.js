import {Achievements} from './elements/achievements.js';
import {Popup} from './elements/popup.js';

export var StateManager = {
    updateResource,
    unlockAchievement,
    setName,
    setUI,

    unlockStage,
    
    saveState,
    loadState,
    wipeState,
    importState,
    getState: () => {return gameState;},
}

//Default game state
var gameState = {
    version: 1,
    rotu: true,
    storage: {
        herb: 0
    },
    achievements:[],
    ui:{
        inventoryCol: true,
        chatCol: true,
    },
    buttons:{
        wakeup: false,
        herbs: false,
    },
    stage: 0,
    name: "",
};

function setUI(key, value){
    if(gameState['ui'].hasOwnProperty(key))
        gameState['ui'][key] = value;
}

//Set player name
function setName(name){
    gameState.name = name;
}

//Change current stage
function unlockStage(i){
    gameState.stage = i;
}

//Unlocks an achievement on the save and interface and creates a notification
function unlockAchievement(id){
    if(gameState['achievements'].includes(id))
        return;

    Achievements.unlock(id);
    gameState['achievements'].push(id);
    Popup.createNotification('ach_not_'+id, Achievements.getUnlockNotification(id));
}

//Update a resource on the storage interface
function updateResource(key, qty){
    if(gameState['storage'].hasOwnProperty(key))
        gameState['storage'][key] += qty;
}

//Save current game state to local storage
function saveState(){
    let state = JSON.stringify(gameState);
    localStorage.setItem('save', btoa(state));
}

//Load game state from local storage
function loadState(){
    let state = localStorage.getItem('save');
    if(state != null){
        $.extend(true, gameState, JSON.parse(atob(state)));
    }
}

//Import game state from file
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

//Remove saved game state on local storage
function wipeState(){
    localStorage.removeItem('save');
    console.log('Deleted save');
}