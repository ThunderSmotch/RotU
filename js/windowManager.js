import {StateManager} from './stateManager.js';

import {Header} from './elements/header.js';
import {Button} from './elements/button.js';
import {Chat} from './elements/chat.js';
import {Tooltip} from './elements/tooltip.js';

export var WindowManager = {
    changeHeaderName,
    changeHeaderTitle,

    addChatMessage,
    clearChat,

    hideUI,
    showUI,
    createButton,
    removeButton,
}

function getUI(){
    return StateManager.getState()['ui'];
}

//Changes name in Header
function changeHeaderName(name){
    Header.setName(name);
}

//Changes the Header title
function changeHeaderTitle(key){
    Header.changeTitle(_(key));
}

//Adds a chat message
function addChatMessage(message, delay = 0){
    Chat.addMessage(message, delay);
}

//Clear the chat log
function clearChat(){
    Chat.clearChat();
}


//Hides an UI element
function hideUI(key){
    $("#"+key).hide();

    StateManager.setUI(key, false);
}

//Shows an UI element
function showUI(key){
    $("#"+key).show('slow');

    StateManager.setUI(key, true);
}

//Creates a button and appends it to parent
function createButton(key, onclick, parent, tooltip, cd=''){
    let button;
    if (cd == '')
        button = Button.createButton(key, _('button.' + key), onclick);
    else
        button = Button.createCooldownButton(key, _('button.' + key), cd, onclick);

    $('#' + parent).append(button);
    Tooltip.addTooltip('#' + key, tooltip);

    StateManager.setUI(key, true);
}

//Removes a button from the UI
function removeButton(key){
    $('#' + key).remove();

    StateManager.setUI(key, false);
}