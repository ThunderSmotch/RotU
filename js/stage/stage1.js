//Stage 1 - Gathering Supplies
import {StateManager} from '../stateManager.js';

import {Button} from '../elements/button.js';
import {Tooltip} from '../elements/tooltip.js';
import {Chat} from '../elements/chat.js';
import {Storage} from '../elements/storage.js';
import { Header } from '../elements/header.js';

export var Stage1 = {
    init,
    exit,
};

//Initialize the layout of this stage
function init(){

    Header.changeTitle(_('stage1.Header'));

    //Super Under Test
    var testButton = Button.createCooldownButton('test', _('button.gatherHerbs'), '0.5s', gatherHerbsClick);
    $('#mainCol').append(testButton);

    Tooltip.addTooltip('#test', _('tooltip.gatherHerbs', herbsPerClick()));
}

//Remove the layout of this stage
function exit(){

}

function gatherHerbsClick(){
    StateManager.updateResource('herb', herbsPerClick());
    Storage.update();
    Chat.addMessage(_('chat.gatherHerbs'));
}

function herbsPerClick(){
    return 1;
}