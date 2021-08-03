//Stage 0 - Wake up!
import {StateManager} from '../stateManager.js';
import {WindowManager} from '../windowManager.js';
import {StageManager} from '../stageManager.js';

export var Stage0 = {
    init,
    exit,
};

//Initialize the layout of this stage
function init(){
    WindowManager.changeHeaderTitle('stage0.Header');

    WindowManager.hideUI("inventoryCol");
    WindowManager.hideUI("chatCol");

    //Intro Messages
    WindowManager.createButton('wakeUp', wakeUpButtonClick, 'mainCol', _('tooltip.wakeUp'));
}

//Remove the layout of this stage
function exit(){
    WindowManager.removeButton('wakeUp');
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
            WindowManager.showUI('chatCol');
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