//Stage 1 - Gathering Supplies
import {StateManager} from '../stateManager.js';
import {WindowManager} from '../windowManager.js';

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

    WindowManager.hideUI('inventoryCol');
    WindowManager.changeHeaderTitle('stage1.Header');

    if(StateManager.getState().name == ''){
        introMessages();
    }
    else if(true){
        setupExploreButton();
    } else{
        WindowManager.showUI('inventoryCol');
    }

    //Super Under Test
    //var testButton = Button.createCooldownButton('test', _('button.gatherHerbs'), '0.5s', gatherHerbsClick);
    //$('#mainCol').append(testButton);
    //Tooltip.addTooltip('#test', _('tooltip.gatherHerbs', herbsPerClick()));
}

//Remove the layout of this stage
function exit(){

}

//Segment3
//Explore to find stuff.
function explore(){
    if(explore.times === undefined)
        explore.times = 1;
    Chat.addMessage(_('stage1.Explore.'+explore.times))
    switch (explore.times) {
        case 1:
            setupGatherHerbsButton();
            break;
        case 3:
            $('#inventoryCol').show('slow');
            break;
        case 5:
            setupDrinkButton();
            break;
        default:
            break;
    }
    ++explore.times;
}

//Setup the drink button
function setupDrinkButton(){
    console.log('Future content!');
}

//Setup the gather herbs button
function setupGatherHerbsButton(){
    WindowManager.createButton('gatherHerbs', gatherHerbsClick, 'mainCol', _('tooltip.gatherHerbs', herbsPerClick()), '0.5s');
}

//Setup the explore button
function setupExploreButton(){
    WindowManager.createButton('explore', explore, 'mainCol', _('tooltip.explore'), '10s');
}

//Segment 2
//Allows player to choose their name
//Also unlocks an achievement
function chooseName(i=1){
    if(i == 5) i = 4;
    let name = window.prompt(_('stage1.Intro.Name.'+i));

    if(name === null){
        chooseName(i+1);
    } else {
    WindowManager.changeHeaderName(name);
    StateManager.setName(name);
    WindowManager.addChatMessage(_('stage1.Intro.3', name), 1)
    StateManager.unlockAchievement(2);

    WindowManager.addChatMessage(_('stage1.Intro.4'), 2);
    setTimeout(setupExploreButton, 2000);
    }
}

//Segment 1
//Show intro messages for stage 1
function introMessages(){
    WindowManager.addChatMessage(_('stage1.Intro.1'), 3);
    WindowManager.addChatMessage(_('stage1.Intro.2'), 6);
    setTimeout(() => {
        chooseName();    
    }, 10000);
}



function gatherHerbsClick(){
    StateManager.updateResource('herb', herbsPerClick());
    Storage.update();
    Chat.addMessage(_('chat.gatherHerbs'));
}

function herbsPerClick(){
    return 1; 
}