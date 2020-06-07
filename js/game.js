import {Lang} from './lang.js';
import {StateManager} from './stateManager.js';

import {Header} from './elements/header.js';
import {Footer} from './elements/footer.js';
import {Achievements} from './elements/achievements.js';
import {Settings} from './elements/settings.js';
import {Tooltip} from './elements/tooltip.js';
import {Chat} from './elements/chat.js';
import {Storage} from './elements/storage.js';
import {StageManager} from './stageManager.js';
import { Keybinds } from './elements/keybinds.js';

let version = "v0.1";
//TODO: Different styling for messages

//TODO: Use flex to handle dynamic resolutions

window.onload = function(){
    //Load game from local storage
    StateManager.loadState();
    
    initModules();

    setUpdateIntervals();
    
    StageManager.selectStage();

    //Temporary artificial time on the loader
    this.setTimeout(()=>{
    $('#loader').css('display', 'none');
    }, 2000);
    //Game is loaded.
}

function initModules(){
    Lang.init();
    window._ = Lang.translate;

    Tooltip.init();
    Header.init();
    Footer.init(version);
    Settings.init();
    Achievements.init();
    Chat.init();
    Storage.init();

    Keybinds.init();
}

function setUpdateIntervals(){
    setInterval(() => Storage.update(), 1000);
    setInterval(() => StateManager.saveState(), 10000);
}