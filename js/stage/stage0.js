//Stage 0 - Who are you?
import {StateManager} from '../stateManager.js';
import {Button} from '../elements/button.js';
import {Tooltip} from '../elements/tooltip.js';
import {Chat} from '../elements/chat.js';
import {Storage} from '../elements/storage.js';

export var Stage0 = {
    init: () => init(),
};

//Initialize the layout of this stage
function init(){

    $("#inventoryCol").toggle();
    $("#chatCol").toggle();

    //Intro Messages
    let wakeButton = Button.createButton('wakeUp', _('button.WakeUp'));
    $('#mainCol').append(wakeButton);

    wakeButton.click(wakeUpButtonClick);
    
    Tooltip.addTooltip('#wakeUp', _('tooltip.WakeUp'))
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
            break;
        case 5:
            Chat.addMessage(_('stage0.Sleeping2'));
            break;
        case 15:
            Chat.addMessage(_('stage0.Sleeping3'));
            StateManager.unlockAchievement(1);
            break;
        default:
            Chat.addMessage(_('stage0.Sleeping'));
            break;
    }
}