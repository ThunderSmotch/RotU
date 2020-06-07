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
    if(StateManager.getState().name == '')
        introMessages();

    //Super Under Test
    var testButton = Button.createCooldownButton('test', _('button.gatherHerbs'), '0.5s', gatherHerbsClick);
    $('#mainCol').append(testButton);

    Tooltip.addTooltip('#test', _('tooltip.gatherHerbs', herbsPerClick()));
}

//Remove the layout of this stage
function exit(){

}

//Show intro messages for stage 1
function introMessages(){
    Chat.addMessage(_('stage1.Intro.1'), 3);
    Chat.addMessage(_('stage1.Intro.2'), 6);
    setTimeout(() => {
        chooseName();    
    }, 10000); 
}

//Allows player to choose their name
function chooseName(i=1){
    if(i == 5) i = 4;
    let name = window.prompt(_('stage1.Intro.Name.'+i));

    if(name === null){
        chooseName(i+1);
    } else {
    Header.setName(name);
    StateManager.setName(name);
    Chat.addMessage(_('stage1.Intro.3', name));
    StateManager.unlockAchievement(2);
    }
}

function gatherHerbsClick(){
    StateManager.updateResource('herb', herbsPerClick());
    Storage.update();
    Chat.addMessage(_('chat.gatherHerbs'));
}

function herbsPerClick(){
    return 1;
}