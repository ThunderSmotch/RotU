import {StateManager} from './stateManager.js';

import {Stage0} from './stage/stage0.js';
import {Stage1} from './stage/stage1.js';

let stages = [Stage0, Stage1];

export var StageManager = {
    selectStage,
    unlockStage,
}

//Unlock stage i by exiting the current one
function unlockStage(i){
    try {
        stages[i-1].exit();
        stages[i].init();
        StateManager.unlockStage(i);
    } catch (error) {
        console.log('ERROR Unlocking stage:' + i);
    }
}

//Read from save which stage should be initialized
function selectStage(){
    let stage = StateManager.getState().stage;
    try {
        stages[stage].init();
    } catch (error) {
        console.log('ERROR Selecting stage:' + stage); 
        console.log(error.name + ':' + error.message);  
    }
}