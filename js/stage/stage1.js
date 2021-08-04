//Stage 1 - Gathering Supplies
import {StateManager} from '../stateManager.js';
import {WindowManager} from '../windowManager.js';

import {Storage} from '../elements/storage.js';

export var Stage1 = {
    init,
    exit,

    explore,
    gatherHerbsClick,
    herbsPerClick,
};

//Initialize the layout of this stage
function init(){
    WindowManager.changeHeaderTitle('stage1.Header');

    if(StateManager.getState().name == ''){
        introMessages();
    }
}

//Remove the layout of this stage
function exit(){

}

//Segment3
//Explore to find stuff.
function explore(){
    if(explore.times === undefined)
        explore.times = 1;
    
    WindowManager.addChatMessage(_('stage1.Explore.'+explore.times))

    switch (explore.times) {
        case 1:
            StateManager.setUI('gatherHerbs', true);
            break;
        case 3:
            StateManager.setUI('inventoryCol', true);
            break;
        case 5:
            //setupDrinkButton();
            break;
        default:
            break;
    }
    ++explore.times;
}

//Segment 2
//Allows player to choose their name
//Also unlocks an achievement
function chooseName(i=1){
    if(i == 5) i = 4;
    let name = window.prompt(_('stage1.Intro.Name.'+i));

    if(name === null || name == ''){
        chooseName(i+1);
    } else {
    WindowManager.changeHeaderName(name);
    StateManager.setName(name);
    WindowManager.addChatMessage(_('stage1.Intro.3', name), 1)
    StateManager.unlockAchievement(2);

    WindowManager.addChatMessage(_('stage1.Intro.4'), 2);
    setTimeout( StateManager.setUI("explore", true) , 2000);
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
    WindowManager.addChatMessage(_('chat.gatherHerbs'));
}

function herbsPerClick(){
    return 1; 
}