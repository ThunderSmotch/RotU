//Stage 0 - Wake up!
import {StateManager} from '../stateManager.js';
import {WindowManager} from '../windowManager.js';
import {StageManager} from '../stageManager.js';

export var Stage0 = {
    init,
    exit,
    wakeUpButtonClick,
};

//Initialize the layout of this stage
function init(){
    WindowManager.changeHeaderTitle('stage0.Header');

    StateManager.setUI("inventoryCol", false);
    StateManager.setUI("chatCol", false);
    StateManager.setUI("wakeUp", true);
}

//Remove the layout of this stage
function exit(){
    StateManager.setUI("wakeUp", false);
}

//When you click the Wake Up button
function wakeUpButtonClick(){

    if(typeof wakeUpButtonClick.clicks == 'undefined'){
        wakeUpButtonClick.clicks = 1;
    } else {
        wakeUpButtonClick.clicks++;
    }
  
    switch (wakeUpButtonClick.clicks) {
        case 1:
            StateManager.setUI('chatCol', true);
            WindowManager.addChatMessage(_('stage0.Sleeping'));
            break;
        case 5:
            WindowManager.addChatMessage(_('stage0.Sleeping2'));
            break;
        case 15:
            WindowManager.addChatMessage(_('stage0.Sleeping3'));
            WindowManager.clearChat();
            StateManager.unlockAchievement(1);
            StageManager.unlockStage(1);
            break;
        default:
            WindowManager.addChatMessage(_('stage0.Sleeping'));
            break;
    }
}