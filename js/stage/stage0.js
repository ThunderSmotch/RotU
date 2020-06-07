//Stage 0 - Wake up!
import {StateManager} from '../stateManager.js';
import {Button} from '../elements/button.js';
import {Tooltip} from '../elements/tooltip.js';
import {Chat} from '../elements/chat.js';
import { StageManager } from '../stageManager.js';
import { Header } from '../elements/header.js';

export var Stage0 = {
    init,
    exit,
};

//Initialize the layout of this stage
function init(){

    Header.changeTitle(_('stage0.Header'));

    $("#inventoryCol").toggle();
    $("#chatCol").toggle();

    //Intro Messages
    let wakeButton = Button.createButton('wakeUp', _('button.WakeUp'), wakeUpButtonClick);
    $('#mainCol').append(wakeButton);
    Tooltip.addTooltip('#wakeUp', _('tooltip.WakeUp'));
}

//Remove the layout of this stage
function exit(){
    $('#wakeUp').remove();
}

//What happens when you click the Wake Up button
function wakeUpButtonClick(){

    if(typeof wakeUpButtonClick.clicks == 'undefined'){
        wakeUpButtonClick.clicks = 1;
    } else {
        wakeUpButtonClick.clicks++;
    }
  
    switch (wakeUpButtonClick.clicks) {
        case 1:
            $("#chatCol").show('slow');
            Chat.addMessage(_('stage0.Sleeping'));
            break;
        case 5:
            Chat.addMessage(_('stage0.Sleeping2'));
            break;
        case 15:
            Chat.addMessage(_('stage0.Sleeping3'));
            $('#inventoryCol').show('slow');
            Chat.addMessage(_('stage0.End'));
            StateManager.unlockAchievement(1);
            StageManager.unlockStage(1);
            break;
        default:
            Chat.addMessage(_('stage0.Sleeping'));
            break;
    }
}