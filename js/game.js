import {Lang} from './lang.js';
import {StateManager} from './stateManager.js';

import {Footer} from './elements/footer.js';
import {Achievements} from './elements/achievements.js';
import {Settings} from './elements/settings.js';
import {Tooltip} from './elements/tooltip.js';
import {Chat} from './elements/chat.js';
import {Storage} from './elements/storage.js';

import { Stage0 } from './stage/stage0.js';

let version = "v0.1";
//TODO: Achievements | Different styling for messages

//TODO: Handle savefiles cross versions maybe using jquery.extend(true,...)

//TODO: Use flexbox to handle dynamic resolutions

window.onload = function(){
    //Load game from local storage
    StateManager.loadState();
    
    initModules();

    setUpdateIntervals();

    Stage0.init();

    //Temporary artificial time on the loader
    this.setTimeout(()=>{
    $('#loader').css('display', 'none');
    }, 2000);

    //Game is loaded.
    //Chat.addMessage(_('chat.gameLoaded'));
}

function initModules(){
    Lang.init();
    window._ = Lang.translate;

    Tooltip.init();
    Footer.init(version);
    Settings.init();
    Achievements.init();
    Chat.init();
    Storage.init();
}

function setUpdateIntervals(){
    setInterval(() => Storage.update(), 1000);
    setInterval(() => StateManager.saveState(), 5000);
}