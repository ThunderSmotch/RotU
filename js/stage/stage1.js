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

    $('#inventoryCol').hide();
    
    Header.changeTitle(_('stage1.Header'));
    if(StateManager.getState().name == ''){
        introMessages();
    }
    else if(true){
        setupExploreButton();
    } else{
        $('#inventoryCol').show();
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
    let gatherHerbsButton = Button.createCooldownButton('gatherHerbs', _('button.GatherHerbs'), '0.5s', gatherHerbsClick);
    $('#mainCol').append(gatherHerbsButton);
    Tooltip.addTooltip('#gatherHerbs', _('tooltip.GatherHerbs', herbsPerClick()));
}

//Setup the explore button
function setupExploreButton(){
    let exploreButton = Button.createCooldownButton('explore', _('button.Explore'), '10s', explore);
    $('#mainCol').append(exploreButton);
    Tooltip.addTooltip('#explore', _('tooltip.Explore'));
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
    Header.setName(name);
    StateManager.setName(name);
    Chat.addMessage(_('stage1.Intro.3', name), 1);
    StateManager.unlockAchievement(2);

    Chat.addMessage(_('stage1.Intro.4'), 2);
    setTimeout(setupExploreButton, 2000);
    }
}

//Segment 1
//Show intro messages for stage 1
function introMessages(){
    Chat.addMessage(_('stage1.Intro.1'), 3);
    Chat.addMessage(_('stage1.Intro.2'), 6);
    setTimeout(() => {
        chooseName();    
    }, 10000);
}



function gatherHerbsClick(){
    StateManager.updateResource('herb', herbsPerClick());
    Storage.update();
    Chat.addMessage(_('chat.GatherHerbs'));
}

function herbsPerClick(){
    return 1; 
}