//Stage 1 - Gathering Supplies
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

    Chat.addMessage('You wake up')

    var testButton = Button.createCooldownButton('test', _('button.gatherHerbs'), '0.5s');
    var numHerbs = 1;
    $('#mainCol').append(testButton);

    testButton.click(()=>{
        StateManager.updateResource('herb', numHerbs);
        Storage.update();
        Chat.addMessage(_('chat.gatherHerbs'));
    });

    Tooltip.addTooltip('#test', _('tooltip.gatherHerbs', numHerbs, numHerbs))
}